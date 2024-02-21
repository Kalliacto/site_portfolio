// ------------------------Loading при загррузке-----------------
const loaderContainer = document.querySelector('.loader-container');

window.addEventListener('load', () => {
    loaderContainer.style.display = 'none';
});
// ---------------------------------------------------------------
const themeButton = document.querySelector('.toggle-btn');
const page = document.querySelector('.page');

if (localStorage.id_theme == null) {
    localStorage.id_theme = 0;
}
if (localStorage.id_theme == 0) {
    page.classList.remove('dark-theme');
} else {
    page.classList.add('dark-theme');
}

themeButton.addEventListener('click', () => {
    if (localStorage.id_theme == 0) {
        localStorage.id_theme = 1;
        page.classList.add('dark-theme');
        themeButton.classList.add('toggle-btn--on');
    } else {
        localStorage.id_theme = 0;
        page.classList.remove('dark-theme');
        themeButton.classList.remove('toggle-btn--on');
    }
});
