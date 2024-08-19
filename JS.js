document.addEventListener("DOMContentLoaded", function() {
    const homeMenu = document.querySelector('#menu');
    const offHomeMenu = document.querySelector('.mainUl');

    homeMenu.addEventListener('click', () => {
        offHomeMenu.classList.toggle('active');
    });
});