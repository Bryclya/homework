// Бургер



(function () {
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }

    // Модалка

})()

const btn = document.querySelector('.about__img-button')
const close = document.querySelector('.modal__cancel')
const modal = document.querySelector('.modal')
const body = document.body

btn.addEventListener('click', (e) => {
    e.preventDefault()
    body.classList.add('body--opened-modal')
})

close.addEventListener('click', (e) => {
    e.preventDefault()
    body.classList.remove('body--opened-modal')
})

modal.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target && e.target.classList.contains('modal') || e.target.classList.contains('modal__cancel')) {
        body.classList.remove('body--opened-modal')
    }
})

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && body.classList.contains('body--opened-modal')) {
        body.classList.remove('body--opened-modal')
    }
})

// Табы

const tabControls = document.querySelector('.tab-controls')

tabControls.addEventListener('click', toggleTab)

function toggleTab(e) {
    const tabControl = e.target.closest('.tab-controls__link')

    if (!tabControls) return
    e.preventDefault()
    if (tabControls.classList.contains('tab-controls__link--active')) return

    const tabContentID = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)
    const activeControl = document.querySelector('.tab-controls__link--active')
    const activeContent = document.querySelector('.tab-content--show')

    if (activeControl) {
        activeControl.classList.remove('tab-controls__link-active')
    }
    if (activeContent) {
        activeContent.classList.remove('tab-content--show')
    }

    activeControl.classList.remove('tab-controls__link--active')
    activeContent.classList.remove('tab-content--show')

    tabControl.classList.add('tab-controls__link--active')
    tabContent.classList.add('tab-content--show')

}

// Аккордеон

const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(el => {
    el.addEventListener('click', (e) => {

        const accordionList = e.currentTarget
        const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
        const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')
        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return
        e.preventDefault()
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
            accordionOpenedItem.classList.remove('accordion-list__item--opened');
            accordionOpenedContent.style.maxHeight = null;
        }

        accordionItem.classList.toggle('accordion-list__item--opened')

        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }

    })
});


// Слайдер-галерея

new Swiper('.gallery__slider', {
    
    spaceBetween: 15,
    slidesPerView: 1.5,
    
    pagination: {
        el: '.gallery__pagination',
        type: 'fraction'
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
    },
    
    
    breakpoints: {
        601: {
            slidesPerView: 3,
        },
        801: {
            spaceBetween: 32,
        },
        1101: {
            slidesPerView: 4,
        },
    }
});

// Слайдер-отзывы

new Swiper('.testimonials__slider', {
    
    spaceBetween: 0,
    slidesPerView: 1.5,
    centeredSlides: true,
    
    
    // Navigation arrows
    navigation: {
        nextEl: '.testimonials__next',
        prevEl: '.testimonials__prev',
    },
    
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    breakpoints: {
        901: {
            slidesPerView: 1.5,
        },
        1201: {
            slidesPerView: 2.1,
        },
    }
});


// Маска для телефона
const telInputs = document.querySelectorAll('input[type="tel"]')
const im = new Inputmask('+7(999) 999-99-99')
im.mask(telInputs)