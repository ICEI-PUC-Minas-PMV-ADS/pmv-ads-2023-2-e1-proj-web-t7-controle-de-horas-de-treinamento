const dadosAtuais = JSON.parse(localStorage.getItem("registroFormData")) || [];

function salvarRegistro() {
  const registroForm = {
    nome: document.getElementById("nome-do-curso").value,
    cargaHoraria: document.getElementById("carga-horaria").value,
    instituicao: document.getElementById("instituicao").value,
    dataInicio: document.getElementById("data-inicio").value,
    dataConclusao: document.getElementById("data-conclusao").value,
    anexoCampo: document.getElementById("anexo-campo").value,
    setor: document.getElementById("setor").value,
    tipo: document.getElementById("tipo").value,
  };

  dadosAtuais.push(registroForm);

  localStorage.setItem("registroFormData", JSON.stringify(dadosAtuais));
}
