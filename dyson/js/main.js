
//калькулятор корзины


const subtract = document.querySelector ('.offers__numders-subtract')
const add = document.querySelector ('.offers__numders-add')
const indicator = document.querySelector ('.offers__numders-indicator')
let number = parseFloat(indicator.textContent)

if (number === 1) {
    subtract.style.color = 'red'
    console.log (subtract)
}
add.addEventListener ('click', () => {
    let mathAdd = toString(number++)
    indicator.textContent = number
})
subtract.addEventListener ('click', () => {
    if (number>1) {
        let mathSub = toString(number--)
        indicator.textContent = number
    }
})
