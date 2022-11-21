const menuIcon = document.getElementById('menu-icon')
const menuIconBar = document.getElementById('menu-icon-bar')

menuIcon.addEventListener('click', () => {
    menuIconBar.classList.toggle('menu-icon__bar--show')
})