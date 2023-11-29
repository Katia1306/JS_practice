//calculate

 /* function calcBMI(weight, height) {
    weight = Number(weight.replace(',', '.'));
    height = Number(height.replace(',', '.'));
   
    return Number((weight / Math.pow(height, 2)).toFixed(1));
    //return Number((weight / height ** 2).toFixed(1));
}

const bmi = calcBMI('88,3', '1.75');
console.log(bmi); //28.8 */

// comparison

/* function min(a, b) {
    if (a > b) {
         return b;
     }
     return a;
 
    
    //return a > b ? b :a 
}
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

----------------------------------------------------
/* function getRectArea(dimensions) { 
    dimensions = dimensions.split(' ');

    const first = Number(dimensions[0])
    const second = Number(dimensions[1])
    return Number(dimensions[0]) * Number(dimensions[1])
    

}
console.log(getRectArea('8 11'));
console.log(getRectArea('46 11'));
console.log(getRectArea('8 112'));

/*
----------------------------------------------------
function logItems(items) {
    for (let i = 0, num = 1; i < items.length; i += 1, num += 1){
        console.log(`${num} - ${items[i]}`)
    }
}

logItems([' Mango', 'Poly', 'Ajax']);

-----------------------------------------------------
function printContactsInfo(names, phones) {
    names = names.split(',')
    phones = phones.split(',')
    console.log(phones);
    for (let i = 0; i < names.length, i < phones.length; i += 1){
       console.log(`${names[i]} - ${phones[i]}`); 
    }
}

printContactsInfo('Jacob, William, Solomon,Artem',
    '9999999, 8888888, 7777777, 66666666'
);

------------------------------------------------------
function findLargestNumber() { 
    //const arr = Array.from(arguments)
    const arr = [...arguments];
    let max = arr[0];

    for (const num of arr) {
        if (num > max) {
            max = num
        }
        
    }
    return max

}

console.log(findLargestNumber(2, 17, 94, 1, 23, 37));
console.log(findLargestNumber(49, 4, 7, 83, 12));

---------------------------------------------------------
function calAverage() {
    
    let total = 0;
    for (const num of arguments) {
        total += num;
    }

    return total /arguments.length
    }

console.log(calAverage(1, 2, 3, 4));
console.log(calAverage(14, 8, 2));
console.log(calAverage(27, 43, 2, 8, 36));


------------------------------------------------------
function formatTime(minutes) {
    const hours = Math.floor(minutes / 60);
    minutes = minutes % 60;

    return `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')}`

}

console.log(formatTime(70));
console.log(formatTime(450));
console.log(formatTime(1441));

------------------------------------------------------
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function addCourse(course) {
    if (courses.includes(course)) {
        return 'You had already this course'
    }

    courses.push(course)
}
    
addCourse('Express');
console.log(courses); 
console.log(addCourse('CSS'));

------------------------------------------------------
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function removeCourse(course) {
    if (courses.includes(course)) {
        const idx = courses.indexOf(course)
        courses.splice(idx, 1);

        return
    }
    return "Such a course not found"
    
}
------------------------------------------------------
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

function addCourse(course) {
    if (courses.includes(course)) {
        return 'You had already this course'
    }

    courses.push(course)
}
    
//addCourse('Express');

function updateCourse(oldCourse, newCourse) {
    const idx = courses.indexOf(oldCourse);
    if (!!~idx) {
        courses.splice(idx, 1, newCourse);
        return;
    }
    return "The course with this name is not found";
}
updateCourse('Express', 'NestJS');
console.log(courses);
console.log(updateCourse('Express', 'NestJS'));
------------------------------------------------------
------------------------------------------------------
*/

//----OBJECT----
// const user = {
//     // fullName: 'Alice User',
//     name: 'Alice',
//     age: 18,
//     //skills: ['HTML', 'CSS', 'JS'],
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     },

//     sayHello(city) {
//         console.log(`Hello my name ${this.name}`);
//     }
    
// }
// const admin = {
//     name: 'Admin',
//     say: user.sayHello
// }
// user.sayHello('Lviv')
// admin.say()

//*******************FOR IN***************/

// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }
// const admin = Object.create(user)
// admin.name = 'Mark'
// console.log(admin);

// for (const key in admin) {
//     console.log(admin.hasOwnProperty(key));
//     if (admin.hasOwnProperty(key)) {
//         console.log(key);
//         console.log(admin[key]);
//     }
// }

//********** Object.keys()****************

// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// // const admin = Object.create(user)
// // console.log(Object.keys(admin));
// const keys = Object.keys(user);
// console.log(keys);
// for (const key of keys) {
//     console.log(key, user[key]);
// }

//************** Object.values()*******/

// const user = {
//     name: 'Alice',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// //const values = Object.values(user);
// const values = Object.values(user.skills);
// console.log(values);

//*********************** PRACTICE **********/

//function createBasket(product, quantity, price) {
    // const basket = {
    //     name: product,
    //     quantity,
    //     price,
    //     totalPrice: quantity * price,
    // };
    // return basket

//     return {
//        name: product,
//        quantity,
//        price,
//        totalPrice: quantity * price, 
//     }
// }
// console.log(createBasket("pizza", 3, 120));

//************************************************** */
 
// const players = {
//     Den: 60,
//     Kate: 130,
//     William: 45,
//     Matthew: 120,
//     Ethan: 40,
//     David: 55,
// };

// function getTime(obj) {
//     const countPlayers = Object.keys(obj)?.length;
//     const values = Object.values(obj);
//     //console.log(values);
//     let totalTime = 0;

//     for (const value of values) {
//         totalTime += value;
//     }
//     //console.log(totalTime);
//     return `Count of players ${countPlayers}, average time ${totalTime / countPlayers}`
// }
// console.log(getTime(players));

//********************************************* */
// const friends = [
//     { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//     { name: "Bob", books: ["War and Peace", "Romeo and Juliet"], age: 26 },
//     { name: "Alice", books: ["War and Peace", "Romeo and Juliet"] },
//     { name: "Oleksii", books: ["Bible", "War and Peace", "Harry Potter", "Romeo and Juliet"], age: 26}
// ]

// function getUsers(arr, bookName) {
//     const users = []
//     for (const user of arr) {
//         if (user.books.includes(bookName)) {
//             //console.log(user.name);
//             users.push(user.name)
//        }
//     } 
//     //console.log(users);
//     return users.join(', ')
// }
// console.log(friends, "Harry Potter");

// function getTotalAge(arr) {
//     let totalAge = 0;
//     for (const user of arr) {
//         if (user.hasOwnProperty('age')) {
//             totalAge += user.age;
//         }
//     }
//     return totalAge;
// }
// console.log (getTotalAge(friends));

//******************************************* */

// const hogvards = {
//     griffindor: [{
//         name: "Harry",
//         points: 17
//     },
//     {
//         name: "Hermiona",
//         points: 19
//     },
//     {
//         name: "Ron",
//         points: 14
//     }],
//     slizerin: [{
//         name: "Draco",
//         points: 17
//     },
//     {
//         name: "Goyl",
//         points: 14
//     },
//     {
//         name: "Grabbe",
//         points: 5
//         }],
    
//     getTotalPoints(facultyName) {
//         if (!this.hasOwnProperty(facultyName)) {
//             return "Not found";
//         }

//         let totalPoints = 0;

//         for (const student of this[facultyName]) {
            
//             totalPoints += student.points
            
//         }

//         return totalPoints
//     },
//     };

//  console.log(hogvards.getTotalPoints("griffindor"));
//  console.log(hogvards.getTotalPoints("slizerin"));
    
  
    
    
    
//     getUserList(facultyName) {
//         if (!(facultyName in this)) {
//             return "Not found";
//         }
//         const students = [];

//         for (const student of this[facultyName]) {
//             students.push(student.name);
//         }
//         return students.join(', ')
//     },
// };

// console.log(hogvards.getUserList("griffindor"));
// console.log(hogvards.getUserList("slizerin")); //


//********----Distructurization------****/
// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// };
// function getUserName({ name, skills: { html, css, js } }) {
//     console.log(
//         `Hello my name is ${name}, I know html - ${html}, css - ${css} and js - ${js}`
//     );
// }
// getUserName(user);

//*****************************++++++*** */
//const users = [{ name: 'Kate' }, { name: 'Alex' }, { name: 'Mark' }];
//without distructurization;

// const names = [];

// for (const user of users) {
//     names.push(user.name)
// }
// console.log(names);

//with  distructurization;

// const names = [];
// for (const { name } of users) {
//     names.push(name)
// }

// console.log(names);


//******************------SPREAD ----- REST *******/

// function foo(first, second, ...args) { //rest
//     console.log(first);
//     console.log(second);
//     console.log(args);
// }
// foo('Alice', 'Kate', 'Emma', 'Mia', 'Lily')

//********************************************** */
// const user = {
//     name: 'Test name',
//     age: 22,
//     city: 'Lviv',
//     skills: {
//         html: true,
//         css: false, 
//         js: true
//     }
// }

// function foo({ name, age, ...props }) {
//     console.log(name);
//     console.log(age);
//     console.log(props);
// }
// foo(user)
//********************************************* */

// const user = {
//     id: 1,
//     username: 'harry_potter',
//     profile: {
//         name: 'Harry',
//         surname: 'Potter',
//         age: 25
//     }
// };

// const { username, profile, profile: { name, surname } } = user;

// console.log(username);
// console.log(profile);
// //console.log(name);
// console.log(surname);

//****************************************** */
// 1 EXAMPLE ------ rest;
// function transformUsername({ firstName, lastName, ...props }) {
//     return {
//         fullName: `${firstName} ${lastName}`,
//         ...props
//     }
// }
// 2  EXAMPLE ----- delete;
// function transformUsername(obj) {
//     const firstName = obj.firstName;
//     const lastName = obj.lastName;
//     const fullName = `${firstName} ${lastName}`

//     delete obj.firstName;
//     delete obj.lastName;

//     obj.fullName = fullName;

//     return obj;

// }

// console.log(
//     transformUsername({
//         id: 1,
//         firstName: 'Jacob',
//         lastName: 'Mercer',
//         email: 'j.mercer@mail.com',
//         friendCount: 40,
//     }),

// );
// console.log(
//     transformUsername({
//         id: 2,
//         firstName: 'Adrian',
//         lastName: 'Cross',
//         email: 'a.cross@hotmail.com',
//         friendCount: 20,
//     }),
// );

//**************************************** */
// function calculateHousePerimeter({ sideA, sideB, sideC, sideD } = {}) {
//     const perimeter = sideA + sideB + sideC + sideD;
//     return perimeter;
// }

// const perimeter = calculateHousePerimeter({
//     sideA: 10,
//     sideB: 15,
//     sideC: 10,
//     sideD: 15,
// });
// console.log(calculateHousePerimeter());
// console.log(`House perimeter is ${perimeter}`);


// /** --- JS doc comment
//  * Buy product, log message with purchase info
//  * @param {String} productName 
//  * @param {Number} productQty 
//  * @param {Number} price 
//  */  

// function buyProduct(productName, productQty, price) {
//     console.log(`You buy ${productQty} ${productName}s, cost per item ${price},
//     total cost ${productQty * price } ` );
// }
// buyProduct("apple", 10, 35);

// ******************** ARROW FUNCTION  *********************
// const buyProduct = (productName, productQty, price) => {
//     console.log(`You buy ${productQty} ${productName}s, cost per item ${price},
//     total cost ${productQty * price } ` );
// }

// buyProduct("apple", 10, 35);

// const getTotalPrice = (qty, price) => {
//     return qty * price;
// };

// console.log(getTotalPrice(3, 150));

//**********NEYAVNE POVERNENNYA (TO SUM, MINUS) -- FOR SHORT OPERATIONS */

// const getTotalPrice = (qty, price) => qty * price;
// console.log(getTotalPrice(3, 150));
//******************+ CALLBACK FUNCTION ******************** */

// function logResult(a, b, callback) {
//     const result = callback(a, b);
//     console.log(`Result is ${result}`);
// }

// logResult(4, 5, add)
// logResult(4, 5, sum)

// function add(a, b) {
//     return a + b
// }

// function sum(a, b) {
//     return a * b
// }

//******************+ INLINE CALLBACK FUNCTION ******************** */


// function logResult(a, b, callback) {
//     const result = callback(a, b);
//     console.log(`Result is ${result}`);
// }

// logResult(4, 5, (a, b) => a + b)
// logResult(4, 5, (a, b) => a * b)

//******************************************* **********************/
// function each(arr, action) {
    // const items = [];
    // EXAMPLE 1 --- DIFFICULT
    // arr.forEach((element) => {
    //     const result = action(element);
    //     items.push(result);
    // });
    // return items;

    // EXAMPLE 2 ----- EASY

    // arr.forEach((element) => items.push(action(element)));
    // return items;

    // EXAMPLE 3 ----- MAP - right one

//       return arr.map((element) => action(element));

// }
// console.log(each([64, 49, 36, 25, 16], (value) => value * 2 ));

//******************************************* *********************/

// const products = [
//     {
//         ad: 1,
//         name: "Phone",
//         price: 1000,
//         description: "Smartphone"

//     },
//     {
//         id: 2,
//         name: "Notebook",
//         price: 2500,
//         description: "Compact computer"
//     },
//     {
//         id: 3,
//         name: "Computer",
//         price: 4500,
//         description: "Powerful computer"
//     },

// ];
 
// function getProductDetails(id, success, error) {
//     for (const product of products) {
//         if (product.id === id) {
//             success(product);
//             return;
//         }
//     }
//     error(id)
// }

// getProductDetails(3, handleSuccess, handleError);
// getProductDetails(44, handleSuccess, handleError);

//******************************************* *********************/
// const products = [
//     { name: "Apple", price: 0.99 },
//     { name: "Banana", price: 0.49 },
//     { name: "Orange", price: 0.79 },
//     { name: "Mango", price: 1.99 },
// ];

// function calculateAvaragePrice(products, onSuccess, onError) {
//     if (products.length) {
//         return onError("No product found");
//     }

//     let total = 0;
//     products.forEach(({ price }) => (total += price));
    
//     onSuccess(total / products.length)
// }

// const onSuccess = (averagePrice) => 
//     console.log("Average price - ", averagePrice.toFixed(2));
 
// const onError = (errorMessage) => 
//     console.log("Error: ", errorMessage);
  
// calculateAvaragePrice(products, onSuccess, onError);


// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);

// const oddNumbers = numbers.filter(number => number  % 2 === 1);

// const users = [
//     { id: 1, name: "John", age: 28, skills: ["Javascript", "HTML", "CSS"] },
//     { id: 1, name: "Alice", age: 32, skills: ["Phyton", "Data Analysis"] },
//     { id: 1, name: "Bob", age: 24, skills: ["Javascript", "React", "Node.js"] },
//     { id: 1, name: "Emily", age: 40, skills: ["Java", "Spring"] },
//     { id: 1, name: "David", age: 22, skills: ["C++", "CSS"] }
// ];

//**************************.  Method ----- MAP  */

// const names = users.map((user) => user.name);
// const names = users.map(({name}) => name);

//**************************.  Method ----- flatMap -- rozglazue */
 
//const numbers = [[1], [2], [3]];

// const skills = users.flatMap(user => user.skills);
// console.log(skills);

//**************************.  Method ----- flat -- rozglazue */

// const arr1 = [0, 1, 2, [3, [4, [45]]]];
// const result = arr1.flat(3);
// console.log(result);

const users = [
    { id: 1, name: "John", age: 28, skills: ["Javascript", "HTML", "CSS"] },
    { id: 1, name: "Alice", age: 32, skills: ["Phyton", "Data Analysis"] },
    { id: 1, name: "Bob", age: 24, skills: ["Javascript", "React", "Node.js"] },
    { id: 1, name: "Emily", age: 40, skills: ["Java", "Spring"] },
    { id: 1, name: "David", age: 22, skills: ["C++", "CSS"] }
];



//**************************.  Method ----- filter.  */

// const result = users.filter(user => user.age > 30);
// const result = users.filter(({ age }) => age >= 40);
// const result = users.filter(({ skills }) => skills.includes("Javascript"));
// console.log(result);

//**************************.  Method ----- find      */
// const result = users.find(({ skills }) => skills.includes("Javascript"));
//  console.log(result);

//**************************.  Method ----- findIndex      */

// const idx = users.findIndex(({id})=>id === 3);
// console.log(idx);

//**************************.  Method ----- some / every     */

// const isKnow = users.some(({ skills }) => skills.includes("Javascript"));
// console.log(isKnow);

// const isKnow = users.every(({ skills }) => skills.includes("Phyton"));
// console.log(isKnow);

// const isAdult = users.every(({ age }) => age >= 18);
// console.log(isAdult);

//**************************.  Method ----- SORT ---- mutuyuciy    */
// AGE 
// const result = users.sort((a, b) => a.age - b.age);
// console.log(result);
// Name
// const result = users.sort((a, b) => a.name.localeCompare(b.name));
// console.log(result);

//**************************.  Method ----- REDUCE   */

// const result = users.reduce((acc, { age }) => {
//     return acc + age;
// }, 0);
// console.log(result);
// MORE THAN 30TY
// const names = users.reduce((acc, { name, age }) => {
//     if (age >= 30) {
//         acc.push(name);
//     }
//     return acc;
// }, []);
// console.log(names);

//**************************.  Methods ---- PRACTICE   */
const students = [
    { name: "John", grades: [80, 85, 90] },
    { name: "Alice", grades: [90, 95, 92] },
    { name: "Bob", grades: [70, 80, 75] },
    { name: "Emily", grades: [95, 92, 88] },
    { name: "Bob", grades: [85, 88, 90] },
];

function getAverage(arr) {
    const result = arr.map(({ name, grades }) => {
        const total = grades.reduce((acc, item) => acc + item)

    console.log(total);
    
    })
}