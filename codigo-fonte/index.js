function loadPage(route) {
  fetch(route)
    .then((response) => response.text())
    .then((content) => {
      document.getElementById("app").innerHTML = content;
    });
}

function navigateTo(route) {
  loadPage(route);
  history.pushState(null, "", route);
}

window.addEventListener("popstate", function () {
  loadPage(location.pathname);
});
