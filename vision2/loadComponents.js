// loadComponents.js
function loadComponent(containerId, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(containerId).innerHTML = data;
    })
    .catch(error => console.error('載入元件失敗:', error));
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("animation-container", "components/animation.html");
  loadComponent("header-container", "components/header.html");
  loadComponent("footer-container", "components/footer.html");
});
