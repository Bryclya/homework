(function() {
    document.addEventListener ('click', burgerInit )

    function burgerInit(e) {

        const burgerIcon = e.target.closest ('.burger-icon')
        const burgerNavLink = e.target.closest ('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }   

})()

const btn = document.querySelector ('.about__img-button')
const close = document.querySelector ('.modal__cancel')
const modal = document.querySelector ('.modal')
const body = document.body

btn.addEventListener ('click', (e) => {
    e.preventDefault()
    body.classList.add('body--opened-modal')
})

close.addEventListener ('click', (e) => {
    e.preventDefault()
    body.classList.remove('body--opened-modal')
})

modal.addEventListener ('click', (e) => {
    e.preventDefault()
    if ( e.target && e.target.classList.contains('modal') || e.target.classList.contains('modal__cancel')) {
        body.classList.remove('body--opened-modal')
    }
})

document.addEventListener ('keydown', (e)=>{
    if (e.code === 'Escape' && body.classList.contains('body--opened-modal')) {
        body.classList.remove('body--opened-modal')
    }
} )


