// бургер

document.addEventListener ('click', burgerInit)
function burgerInit (e) {
    const burgerIcone = e.target.closest ('.burger')
    const burgerNavLink = e.target.closest ('.nav-link')

    if (!burgerIcone && !burgerNavLink) return

    if (!document.body.classList.contains('body--opened-menu')) {
        document.body.classList.add('body--opened-menu')
    } else {
        document.body.classList.remove('body--opened-menu')
    }
}

//калькулятор корзины

const subtract = document.querySelector('.offers__numders-subtract-icon');
const subtractIcon = document.querySelector('.offers__numders-subtract');
const add = document.querySelector('.offers__numders-add-icon');
const indicator = document.querySelector('.offers__numders-indicator');

let number = parseFloat(indicator.textContent);

add.addEventListener('click', () => {
    number++;
    indicator.textContent = number;
    if (number > 1) {
        subtractIcon.classList.remove('offers__numders-subtract--inactive');
    }
});

subtract.addEventListener('click', () => {
    if (number > 1) {
        number--;
        indicator.textContent = number;
    }
    if (number === 1) {
        subtractIcon.classList.add('offers__numders-subtract--inactive');
    }
});

// Слайдер


const swiper = new Swiper('.offers__slider', {

    slidesPerView: 1,
    
    pagination: {
        el: '.offers-pagination',
        type: 'fraction'
    },
    navigation: {
        nextEl: '.offers__swiper-button-next',
        prevEl: '.offers__swiper-button-prev',
    },
}); 

// модальное окно

const modalBtn = document.querySelector('.testimonials__button')
const modalBtnClose = document.querySelector('.modal')



modalBtn.addEventListener ('click', openModal)
function openModal (e) {
    document.body.classList.toggle('body--modal-opened')
}
modalBtnClose.addEventListener ('click', (e) => {
    if (e.target.closest('.modal__close') ||  e.target.classList.contains('modal')) {
        document.body.classList.remove('body--modal-opened')
    }
})


// Аккордеон

const accordionLists = document.querySelectorAll ('.accordion-list')

accordionLists.forEach (el => {
    el.addEventListener('click', (e) => {
        const accordionControl = e.target.closest('.accordion-list__control')
        if (!accordionControl) return
        e.preventDefault()
        const accordionItem = accordionControl.parentElement
        const accordionContent = accordionControl.nextElementSibling

        accordionItem.classList.toggle('accordion-list__item--opened')

        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
        } else {
            accordionContent.style.maxHeight = null
        }
    })
})