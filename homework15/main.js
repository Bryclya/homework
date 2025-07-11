const users = [
    {
        name: 'Alex',
        age: 23,
        isAdmin: true
    },
    {
        name: 'Max',
        age: 25,
        isAdmin: false
    },
    {
        name: 'john',
        age: 20,
        isAdmin: false
    }
]
let numberOfUsers = 0

function NumberOfDontAdmin() {
    for (let i=0; i < users.length; i++) {
    if (users[i].isAdmin === false) {
    numberOfUsers ++}
    }
    return numberOfUsers
}
console.log (NumberOfDontAdmin())