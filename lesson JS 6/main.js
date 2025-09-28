// Задание 1.
const users = [
  { name: 'Alex', age: 24, isAdmin: false },
  { name: 'Bob', age: 13, isAdmin: false },
  { name: 'John', age: 31, isAdmin: true },
  { name: 'Jane', age: 20, isAdmin: false },
]

users.push({ name: 'Ann', age: 19, isAdmin: false },{ name: 'Jack', age: 43, isAdmin: true })
console.log(users)

// Задание 2.
function getUserAverageAge(users) {
  let ageSum = 0
  for (let i = 0; i < users.length; i++) {
    ageSum += users[i].age
  }
  AverageAge =  ageSum / users.length
  return AverageAge
}
console.log(getUserAverageAge(users))

// Задание 3.
function getAllAdmins(users) {
  allAdmin = []
  for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin) {
      allAdmin.push(users[i].name)
    }
  }
  return allAdmin
}
console.log(getAllAdmins(users))

// Задание 4.
function first(arr, n) {
  if (n == 0) return []
  if (n == undefined) return arr.length > 0 ? [arr[0]] : []

  const result = []
  arr.forEach((item, index) => {
    if (index < n) {
      result.push(item)
    }
  })
  return result
}
console.log(first(users,0))