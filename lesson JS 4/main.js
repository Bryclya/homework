// Задача 1
function calculateFinalPrice (basePrice, discont, tax) {
  return (basePrice - basePrice*(discont/100))*(tax+1);
}
console.log(calculateFinalPrice(100,10,0));

//Задача 2
function checkAccess (username, password) {
if (username == 'admin' && password == '123456') {
  console.log('Доступ разрешён')
} else {console.log('Доступ запрещён')}
}
checkAccess('admin','123456')

// Задача 3
function getTimeOfday(time) {
  switch (true) {
    case 5>=time && time>=0:
      console.log('Ночь')
      break
    case 11>=time && time>=6:
      console.log('Утро')
      break
    case 17>=time && time>=12:
      console.log('День')
      break
    case 23>=time && time>=18:
      console.log('Вечер')
      break
    default:
      console.log('Некорректоное время')
  }
}
getTimeOfday(6)

// Задача 4
function findFirstEven (start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 == 0) {
      return console.log(i)
    } 
  }
  console.log ('Чётных чисел нет')
}
findFirstEven(5, 5)

