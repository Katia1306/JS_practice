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
function createBasket(product, quantity, price) {
    const basket = {
        name: product,
        quantity,
        price,
        totalPrice: quantity * price,
    };
    return basket
}
console.log(basket);