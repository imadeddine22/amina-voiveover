document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icons');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});