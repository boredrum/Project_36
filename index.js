                                        // EXCERCISE 1

fetch('http://localhost:3000/users')
.then(response => response.json())
.then(function(data) {
    for (key in data){
        if (data[key].isAdmin == true){
            console.log(data[key].name)
        }
    }
} );


                                        // EXCERCISE 2

// let nikola = {firstName: 'Nikola', lastName: 'Tesla'};
// let bob = {firstName: 'Bob'};
// let mike = {lastName: 'Smith'};
// let michael = {};

// let getFullName = function(user){
//     return `${user.firstName} ${user.lastName}`
// }

// getFullName = new Proxy(getFullName, {
//     apply(target, thisArg, args){
//         let result = '';
//         for (key in args[0]){
//             result += args[0][key] + ' '
//         }
//         return result !== '' ? result : 'No name'
//     }
// });

// console.log(getFullName(nikola));
// console.log(getFullName(bob));
// console.log(getFullName(mike));
// console.log(getFullName(michael));


                                        // EXCERCISE 3

// let users = [
//     {name: 'Nikola', age: 18, id: 1},
//     {name: 'Bob', age: 25, id: 2},
//     {name: 'Mike', age: 32, id: 3},
// ];

// users.forEach(element => {
//     localStorage.setItem(element.name, JSON.stringify(element));
// });

// let sayHelloToUser = function(id){
//     let keys = Object.keys(localStorage);
//     for (let key of keys){
//         let keyObj = JSON.parse(localStorage.getItem(key));
//         if (keyObj.id == id){
//             console.log(`Hello: ${keyObj.name}`)
//         }
//     }
// }

// sayHelloToUser(3);


                                        // EXCERCISE 4

// let input = document.querySelector('input');

// input.oninput = () => {
//     localStorage.setItem('input', input.value)
// }

// input.value = localStorage.getItem('input');