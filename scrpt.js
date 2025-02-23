document.addEventListener('DOMContentLoaded', function() {
    const menuIcons = document.getElementById('menu-icons');
    const navbar = document.querySelector('.navbar');

    menuIcons.addEventListener('click', function() {
        menuIcons.classList.toggle('active');
        navbar.classList.toggle('active');
    });
});
