function createUsers() {
  console.log("Cria usuário teste");

  const arrayUsers = [
    {
      user: "matheusGestor",
      password: "55",
      email: "matheus@gestor.com",
      isTraining: true,
    },
    {
      user: "matheusColaborador",
      password: "55",
      email: "matheus@colaborador.com",
      isTraining: false,
    },
  ];

  localStorage.setItem("users", JSON.stringify(arrayUsers));
}

function autenticar(email, password) {
  const arrayUsers = JSON.parse(localStorage.getItem("users"));
  console.log("email", email);
  console.log("password", password);
  arrayUsers.forEach((_user) => {
    if (email === _user.email && password === _user.password) {
      if (_user.isTraining) {
        window.location.href = "../../area-logada/home-gestor/home-gestor.html";
        return;
      }

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
