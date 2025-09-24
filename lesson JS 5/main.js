// Задание 1
const person = {
  name: 'kirill',
  age: 22,
  profession: 'developer',
}
for (const key in person) {
  console.log(person[key])
}
//Задание 2
function isEmpty (object) {
for (const checkValue in object) {
      return false
  }
  return true
}
console.log(isEmpty(person))

//Задание 3
const task = {
  title: 'work',
  description: 'desk',
  isCompleted: false,
  test: function func() {
    console.log('this is method')
  }
}
const changes = {
  title: 'homework'
}

function cloneAndModify (object, modifications) {
  const newTask = {...object}
  return {...newTask, ...modifications}
}
const result = cloneAndModify (task, changes)

for ( const key in result) {
  console.log (result[key])
}

//Задание 4
function callAllMethods (object) {
  for (const key in object) {
    if (typeof object[key] === 'function')
    object[key]()
  }
}
callAllMethods(task)


