const registros = JSON.parse(localStorage.getItem("registroFormData"));

const usuarioAtual = JSON.parse(localStorage.getItem("users"))[0].user || "";

const registrosPorHora = registros.map((registro) => registro.cargaHoraria);

let setores = [];
let cargaHoraria = 0;

registros.forEach((registro) => {
  setores[registro.setor] = !setores[registro.setor]
    ? Number(registro.cargaHoraria)
    : setores[registro.setor] + Number(registro.cargaHoraria);
});

document.getElementById("gerarRelatorio").addEventListener("click", () => {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(registros);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet 1");

  XLSX.writeFile(workbook, `registros-de-treinamento-${usuarioAtual}.xlsx`);
});

const ctx = document.getElementById("myChart");

function createDynamicHTML(data) {
  const container = document.getElementById("output-container");

  const totalRecordsDiv = document.createElement("div");
  totalRecordsDiv.innerHTML = `
      <div>
          <div class="lighter-rectangle rectangle-text">TOTAL DE REGISTROS</div>
          <div class="rectangle rectangle-text">${data.totalRecords}</div>
      </div>
  `;
  container.appendChild(totalRecordsDiv);

  const porAnoHeading = document.createElement("h2");
  porAnoHeading.textContent = "POR ANO";
  container.appendChild(porAnoHeading);

  data.yearRecords.forEach((yearRecord) => {
    const yearContainer = document.createElement("div");
    yearContainer.classList.add("training-rectangle-container");
    yearContainer.innerHTML = `
          <div class="lighter-rectangle-row rectangle-text">${yearRecord.year}</div>
          <div class="rectangle-row rectangle-text">${yearRecord.records}</div>
      `;
    container.appendChild(yearContainer);
  });
}

createDynamicHTML(dynamicData);

const dynamicData = {
  totalRecords: 31,
  yearRecords: [
    { year: 2021, records: 8 },
    { year: 2022, records: 12 },
    { year: 2023, records: 11 },
  ],
};

createDynamicHTML(dynamicData);

function getDatasetObject() {
  const anosComTreino = registros.map((registro) => {
    return registro.dataInicio.substring(0, 4);
  });

  const anosUnicos = new Set(anosComTreino);
  const anosUnicosArray = Array.from(anosUnicos);

  const controls = [];

  anosUnicosArray.forEach((ano) => {
    registros.forEach((registro) => {
      if (registro.dataInicio.includes(ano)) {
        if (!controls[ano]) {
          controls[ano] = {
            ano: ano,
            registros: [registro],
          };
        } else {
          controls[ano].registros.push(registro);
        }
      }
    });
  });

  const filtered = [];
  controls.forEach((control) => {
    filtered.push({
      label: control.ano,
      data: getData(control),
      borderWidth: 5,
    });
  });
  return filtered;
}

function getData(control) {
  return control.registros.map((registro) => registro.cargaHoraria);
}

getDatasetObject();

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
    datasets: getDatasetObject(),
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
