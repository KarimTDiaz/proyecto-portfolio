const menu = document.getElementById('menu')
const menuIcon = document.getElementById('menu-icon')
const menuIconBar = document.getElementById('menu-icon-bar')
const titleElement = document.getElementById('title')
const gallery = document.getElementById('gallery')
const galleryItems = Array.from(gallery.children)
const arrowRightElement = document.getElementById('modal-arrow-right')
const arrowleftElement = document.getElementById('modal-arrow-left')
const modal = document.getElementById('modal')
const modalTitle = document.getElementById('modal-title')
const modalText = document.getElementById('modal-text')
const modalImage = document.getElementById('modal-image')
const crossModal = document.getElementById('modal-cross')
const changeColor = document.getElementById('change-color')
const body = document.body;
const darkmode = document.getElementById('toggle') 
const vector = document.getElementById('vector')

const titles = ['Colaborativo', 'Trabajo en equipo', 'Organización', 'Apasionado'];
const rootStyles = document.documentElement.style;
const slideItems = [
    {
        title: 'BLOGR',
        srcProyecto: 'assets/images/previews/Tall-Blogr.png',
        text: 'Landing page de Blogr con menu responsive'

    },
    {
        title: 'CLIPBOARD',
        srcProyecto: 'assets/images/previews/Tall-Clipboard.png',
        text: 'Landing page de Clipboard'

    },
    {
        title: 'HUDDLE',
        srcProyecto: 'assets/images/previews/Tall-Huddle.png',
        text: 'Landing page de Huddle con secciones curvas'

    },
    {
        title: 'INSURE',
        srcProyecto: 'assets/images/previews/Tall-Insure.png',
        text: 'Landing page de insure'

    },
    {
        title: 'LOOPSTUDIOS',
        srcProyecto: 'assets/images/previews/Tall-Loopstudios.png',
        text: 'Landing page de Loopstudios'

    },
    {
        title: 'SUNNYSIDE',
        srcProyecto: 'assets/images/previews/Tall-Sunnyside.png',
        text: 'Landing page de Sunnyside'

    },
]

let letterCount = 0;
let titlesIndex = 0;
let contador = 0;

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

const fillModal = (target) => {
    contador = galleryItems.indexOf(target.parentElement.parentElement)
    modalTitle.textContent = slideItems[contador].title;
    modalText.textContent = slideItems[contador].text;
    modalImage.src = slideItems[contador].srcProyecto;
    modal.classList.add('modal--show')
}
const changeModalRight = () => {
    if (contador >= slideItems.length - 1) {
        contador = 0;
    } else {
        contador = contador + 1;
    }

    modalTitle.classList.add('modal__image--fade-out');
    modalText.classList.add('modal__image--fade-out');
    modalImage.classList.add('modal__image--fade-out');
}

const changeModalLeft = () => {
    if (contador <= 0) {
        contador = slideItems.length - 1
    } else {
        contador = contador - 1
    }

    modalTitle.classList.add('modal__image--fade-out');
    modalText.classList.add('modal__image--fade-out');
    modalImage.classList.add('modal__image--fade-out');

}
modalImage.addEventListener('transitionend', () => {
    modalTitle.classList.remove('modal__image--fade-out')
    modalText.classList.remove('modal__image--fade-out')
    modalImage.classList.remove('modal__image--fade-out')
    modalTitle.textContent = slideItems[contador].title
    modalText.textContent = slideItems[contador].text
    modalImage.src = slideItems[contador].srcProyecto
    modalTitle.classList.add('modal__image--fade-in')
    modalText.classList.add('modal__image--fade-in')
    modalImage.classList.add('modal__image--fade-in')
})

typewritterEffect();

gallery.addEventListener('click', (ev) => fillModal(ev.target))

crossModal.addEventListener('click', () => {
    modal.classList.remove('modal--show')
})

menuIcon.addEventListener('click', () => {
    menuIconBar.classList.toggle('menu-icon__bar--show');
})

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('menu--show')
})

arrowRightElement.addEventListener('click', changeModalRight)
arrowleftElement.addEventListener('click', changeModalLeft)

changeColor.addEventListener('click', (event) => {
    if (event.target.classList.contains('change-color__item')) {

        rootStyles.setProperty('--primary-color', event.target.dataset.color)
    }
})

darkmode.addEventListener('click', () => {
    body.classList.toggle('dark')
})

vector.addEventListener('transitionend',()=>{
    console.log('TERMINADA')
    vector.classList.add('animation-start')
})



const options = {
    root: null,
    rootMargin: '300px 300px',
    threshold: 1,

};

const callback = (entries) => {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('gallery__item')) {
                entry.target.classList.add('transition-gallery')
            }else if (entry.target.classList.contains('main-title')) {
                entry.target.classList.add('transition-main-title')
            }else if (entry.target.classList.contains('image--profile')) {
                entry.target.classList.add('transition-profile')
            }else if (entry.target.classList.contains('title')) {
                entry.target.classList.add('transition-title')
            }else if (entry.target.classList.contains('text')) {
                entry.target.classList.add('transition-text')
            }else if (entry.target.classList.contains('vector-skill')) {
                entry.target.classList.add('transition-vector') 
            }

            
        }
    })
}



const observer = new IntersectionObserver(callback, options)

observer.observe(document.querySelector('.main-title'));
observer.observe(document.querySelector('.image--profile'));
observer.observe(document.querySelector('.vector-skill'));
const galleryItemsObserve = document.querySelectorAll('.gallery__item');
const titleObserve = document.querySelectorAll('.title');
const textObserve = document.querySelectorAll('.text');


for (const item of galleryItemsObserve) {
    observer.observe(item)
}

for (const title of titleObserve) {
    observer.observe(title)
}
for (const text of textObserve) {
    observer.observe(text)
}







