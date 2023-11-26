const registros = JSON.parse(localStorage.getItem("registroFormData"));
const usuarioAtual = JSON.parse(localStorage.getItem("users"))[0].user || "";
let setores = [];
let cargaHoraria = 0;
console.log(registros);

registros.forEach((registro) => {
  setores[registro.setor] = !setores[registro.setor]
    ? Number(registro.cargaHoraria)
    : setores[registro.setor] + Number(registro.cargaHoraria);
});

document
  .getElementById("relatorio-horas-por-gestor")
  .addEventListener("click", () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(
      Object.entries(setores).map(([setor, horas]) => ({
        Setor: setor,
        Horas: horas,
      }))
    );
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet 1");

    XLSX.writeFile(workbook, "registros-treinamento-por-setor.xlsx");
  });
1;

const ctx = document.getElementById("myChart");

function getDatasetObject() {
    const anosComTreino = registros.map((registro) => {
        return registro.dataInicio.substring(0,4);
      })
    
      const anosUnicos = new Set(anosComTreino);
      const anosUnicosArray = Array.from(anosUnicos);
    
      const controls = [];

      console.log(registros);
    
      anosUnicosArray.forEach((ano) => {
        registros.forEach(registro => {
          if(registro.dataInicio.includes(ano)) {
            if(!controls[ano]) {
              controls[ano] = {
                ano: ano,
                registros: []

              }
              controls[ano].registros[registro.dataInicio.substring(5,7)] = Number(registro.cargaHoraria)
            } else {
              const mes = registro.dataInicio.substring(5,7);
              if(!controls[ano].registros[mes]) {
                controls[ano].registros[mes] = Number(registro.cargaHoraria);
              } else {
              controls[ano].registros[mes] += Number(registro.cargaHoraria);
              console.log(controls[ano].registros[mes]);
              }
            }
          }
        })
      })
      const filtered = [];
      controls.forEach(control => {
        filtered.push({
          label: control.ano,
          data: getData(control),
          borderWidth: 5
        })
      })
      return filtered;
    }
    
    function getData(control) {
    for(let i = 0; i <= 12 ; i++ ) {
        if(!control.registros[i])
        control.registros[i] = 0
    }
      return control.registros.map((registro) => registro);
    }

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: getDatasetObject()
    },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});