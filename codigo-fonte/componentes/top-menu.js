function buildMenu() {
  const ul = document.createElement("ul");
  ul.className = "menu";

  const menuItems = [
    { text: "SOBRE", url: "/codigo-fonte/area-logada/sobre/sobre.html" },
    {
      text: "NOVO REGISTRO",
      url: "/codigo-fonte/area-logada/adicionar-registro/adicionar-registro.html",
    },
    {
      text: "SAIR",
      url: "/codigo-fonte/area-nao-logada/login/login.html",
    },
  ];

  menuItems.forEach((menuItem) => {
    const li = document.createElement("li");
    li.textContent = menuItem.text;

    li.onclick = function () {
      window.location.href = menuItem.url;
    };

    ul.appendChild(li);
  });

  const targetElement = document.getElementById("menu-container");
  targetElement.appendChild(ul);
}

buildMenu();
