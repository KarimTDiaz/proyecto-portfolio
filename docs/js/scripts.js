const menu = document.getElementById('menu')
const menuIcon = document.getElementById('menu-icon')
const menuIconBar = document.getElementById('menu-icon-bar')
const titleElement = document.getElementById('title')
const gallery = document.getElementById('gallery')
const modalImage = document.getElementById('modal-image')
const modal = document.getElementById('modal')
const crossModal = document.getElementById('modal-cross')
const arrowRightElement = document.getElementById('modal-arrow-right')
const arrowleftElement = document.getElementById('modal-arrow-left')

menuIcon.addEventListener('click', () => {
    menuIconBar.classList.toggle('menu-icon__bar--show');
})

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('menu--show')
})


const titles = ['Colaborativo', 'Trabajo en equipo', 'Organización', 'Apasionado'];
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

const allImagesSrc = Array.from(document.querySelectorAll('.image--modal'))

let contador = 0;

gallery.addEventListener('click', (event) => {
    console.log(event.target.src)
    modalImage.src = (event.target.src)
    modal.classList.add('modal--show')
    contador = allImagesSrc.indexOf(event.target)

})

crossModal.addEventListener('click', () => {
    modal.classList.remove('modal--show')
})

const cambiarSrcRight = () => {
    if (contador >= allImagesSrc.length - 1) {
        contador = 0;
    } else {
        contador = contador + 1;
    }


    modalImage.classList.add('modal__image--fade-out');
}

const cambiarSrcLeft = () => {
    if (contador <= 0) {
        contador = allImagesSrc.length - 1
    } else {
        contador = contador - 1
    }

    modalImage.classList.add('modal__image--fade-out');

}

modalImage.addEventListener('transitionend', () => {
    modalImage.classList.remove('modal__image--fade-out')
    modalImage.src = allImagesSrc[contador].src
    modalImage.classList.add('modal__image--fade-in')
})
//transitionend

modalImage.src = allImagesSrc[contador].src

arrowRightElement.addEventListener('click', cambiarSrcRight)
arrowleftElement.addEventListener('click', cambiarSrcLeft)


