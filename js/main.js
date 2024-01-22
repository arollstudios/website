const menu_btn = document.getElementById("menu-btn-a");
const navbar_links = document.getElementsByClassName("navbar-links")[0];

menu_btn.addEventListener("click", () => {
    navbar_links.classList.toggle("active");
});