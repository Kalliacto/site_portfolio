(function () {
    const burger = document.querySelector('.burger');
    const headerMenu = document.querySelector('.navigation');
    const burgerClose = document.querySelector('.header__burger-close');
    const menuLinks = document.querySelectorAll('.header__menu-link');

    burger.addEventListener('click', () => {
        headerMenu.classList.add('navigation_active');
    });
    burgerClose.addEventListener('click', () => {
        headerMenu.classList.remove('navigation_active');
    });
    if (window.innerWidth <= 767) {
        for (let link of menuLinks) {
            link.addEventListener('click', () => {
                headerMenu.classList.remove('navigation_active');
            });
        }
    }
})();
