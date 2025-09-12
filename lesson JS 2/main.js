// Задача 1
const number = 1;

if (number % 2 == 0) {
    console.log ('число чётное')
} else {
    console.log ('число не чётное')
}

// Задача 2
const age = 19;
let discount = null;

age < 18 ? discount = 10 : age >= 65? discount = 30 : discount = 20;
console.log (`скидка ${discount}%`);

// Задача 2 на switch-case
switch (true) {
    case age < 18:
        discount = 10;
        break;
    case age >= 65:
        discount = 30;
        break;
    default:
        discount = 20;
}

console.log (`скидка ${discount}%`);

// Задача 3
let username = prompt ('введите имя')
let password = prompt ('введите пароль')

 if( username == 'admin' && password == 123456 ) {
     console.log ('доступ разрешён')
 } else if (username == 'user' && password == 123456) {
     console.log ('Доступ разрешён')
 } else {
     console.log ('Доступ запрещён')
}

// Задача 4

let weight = +prompt ('введите вес посылки');
let tariff = prompt ('введите тип доставки');

if(weight <= 0) {
    alert('Некорректный вес посылки')
} else if (tariff != 'стандарт' && tariff != 'экспресс' && tariff != 'премиум'  ) {
    alert('Неверный тип доставки')
} else {
    let prise = null
    weight < 1? prise = 5 : weight > 5? prise = 15 : prise = 10;
    
    switch (true) {
        case tariff == 'стандарт':
            prise * 1
            alert(`Итоговая стоимость доставки ${prise}$`)
            break
        case tariff == 'экспресс':
            alert(`Итоговая стоимость доставки ${prise * 1.5}$`)
            break
            case tariff == 'премиум':
                alert(`Итоговая стоимость доставки ${prise * 2}$`)
            break
    };
}



