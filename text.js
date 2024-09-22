document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("btn");
    const menuItems = document.getElementById("menuitems");

    button.addEventListener("click", function() {
        menuItems.classList.toggle("show");
    });
});