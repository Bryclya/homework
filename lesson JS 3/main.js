// Задача 1
for (let i=1; i<=20; i++) {
    if (i%4==0) {
        continue 
    }
    console.log(i)
}

// Задача 2
const number = +prompt("Введите число:");
let factorial = 1

for (let i = 1; i <= number; i++) {
  factorial *= i;
}

alert(`Факториал числа равен ${factorial}`);

