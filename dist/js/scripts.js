const menu = document.getElementById('menu')
const menuIcon = document.getElementById('menu-icon')
const menuIconBar = document.getElementById('menu-icon-bar')
const titleElement = document.getElementById('title')

menuIcon.addEventListener('click', () => {
    menuIconBar.classList.toggle('menu-icon__bar--show');
})

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('menu--show')
})


const titles = ['COLABORATIVO', 'TRABAJO EN EQUIPO', 'ORGANIZACION', 'APASIONADO'];
let letterCount = 0;
let titlesIndex = 0;

const changeTitle = () => {
    if (titlesIndex >= titles.length - 1) {
        titlesIndex = 0;
    } else {
        titlesIndex++;
    }
    typewritterEffect();
};
const typewritterEffect = () => {
    const intervalId = setInterval(() => {
        if (letterCount >= titles[titlesIndex].length) {
            letterCount = 0;
        } else {
            letterCount++;
        }
        if (letterCount === titles[titlesIndex].length) {
            clearInterval(intervalId);
            titleElement.textContent = titles[titlesIndex];

            const timeoutId = setTimeout(() => {
                letterCount = 0;
                changeTitle();
                clearTimeout(timeoutId);
            }, 2000);
        } else {
            titleElement.textContent = titles[titlesIndex].slice(0, letterCount);
        }
    }, 100);
};

typewritterEffect();
