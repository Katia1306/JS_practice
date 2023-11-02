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
function logItems(items) {
    for (let i = 0, num = 1; i < items.length; i += 1, num += 1){
        console.log(`${num} - ${items[i]}`)
    }
}

logItems([' Mango', 'Poly', 'Ajax']);


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

*/