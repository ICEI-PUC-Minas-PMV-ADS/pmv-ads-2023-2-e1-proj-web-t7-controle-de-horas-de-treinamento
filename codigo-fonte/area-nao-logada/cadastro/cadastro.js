function cadastraUsuario(nome, senha, email) {
  // Recupera os usuário cadastrados
  const arrayUsuarios = JSON.parse(localStorage.getItem("users"));

  // Cria o objeto para o novo usuário
  const novoUsuarios = {
    user: nome,
    email,
    password: senha,
    isTraining: false,
  };

  // Inseri o usuário na ultima posição do array
  arrayUsuarios.push(novoUsuarios);

  // Inseri o novo array no local storage
  localStorage.setItem("users", JSON.stringify(arrayUsuarios));

  window.location.href = "../login/login.html";
}

function isNullValuesAlert(field, message) {
  if (!field) {
    alert(message);
    return true;
  }
  return false;
}

document.addEventListener("DOMContentLoaded", function () {
  // Obtenha uma referência para o formulário
  const formulario = document.getElementById("formulario");
  if (formulario) {
    // Adicione um ouvinte de evento ao formulário
    formulario.addEventListener("submit", function (event) {
      event.preventDefault(); // Impede o envio padrão do formulário
      // Execute ações personalizadas aqui

      const email = document.getElementById("email").value;
      const nome = document.getElementById("nome").value;
      const password = document.getElementById("password").value;

      if (
        isNullValuesAlert(email, "Email está vazio") ||
        isNullValuesAlert(nome, "Nome está vazio") ||
        isNullValuesAlert(password, "Senha está vazio")
      ) {
        return;
      }

      console.log(email, nome, password);

      cadastraUsuario(nome, password, email);

      return;
    });
  }
});
