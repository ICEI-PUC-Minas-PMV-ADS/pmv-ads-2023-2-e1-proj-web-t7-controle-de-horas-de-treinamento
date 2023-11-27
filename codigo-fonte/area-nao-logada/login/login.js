function createUsers() {
  console.log("Cria usuário teste");

  const arrayUsers = [
    {
      user: "Qualifique Gestor",
      password: "55",
      email: "qualifique@gestor.com",
      isManager: true,
    },
    {
      user: "Qualifique Colaborador",
      password: "55",
      email: "qualifique@colaborador.com",
      isManager: false,
    },
  ];

  localStorage.setItem("users", JSON.stringify(arrayUsers));
}

function limpaUsuarioLogado() {
  localStorage.setItem("usuarioLogado", {});
}

function autenticar(email, password) {
  const arrayUsers = JSON.parse(localStorage.getItem("users")) || [];
  arrayUsers.forEach((_user) => {
    if (email === _user.email && password === _user.password) {
      const usuarioLogado = { email, isManager: false, user: _user.user };

      if (_user.isManager) {
        usuarioLogado.isManager = _user.isManager;
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
        window.location.href = "../../area-logada/home-gestor/home-gestor.html";
        return;
      }

      localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
      window.location.href =
        "../../area-logada/home-colaborador/home-colaborador.html";
      return;
    }
  });
}

// Certifique-se de que o código JavaScript seja executado após o carregamento da página
document.addEventListener("DOMContentLoaded", function () {
  // Obtenha uma referência para o formulário
  const formulario = document.getElementById("formlogin");
  if (formulario) {
    // Adicione um ouvinte de evento ao formulário
    formulario.addEventListener("submit", function (event) {
      event.preventDefault(); // Impede o envio padrão do formulário
      // Execute ações personalizadas aqui
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      autenticar(email, password);
      // Envie o formulário programaticamente se desejar
      // this.submit();
    });
  }
});
