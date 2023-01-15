//Question 1: 

//1-A.
let ages = [3,9,23,64,2,8,28,93];

const lastItem = ages [ages.length - 1]
console.log ("1-A:",(lastItem-ages[0]));

function findAverage (ages) {
    let total = 0;
    for (i = 0; i< ages.length; i++) {
        total += ages [i];
    }
    return total/ages.length;
}

//1-B.

ages.push (45);

//1-C.

let averageofages = findAverage(ages);
console.log("1-C:", averageofages);

//2. 

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]

//2-A.
function findLength(names) {
    let total = 0;
    for (i = 0; i < names.length; i++) {
        total += names[i].length;
    }
    return total / names.length;
}
let averageOfNames = findLength(names);
console.log ("2-A:", averageOfNames);

//2-B.

function concatNames(names) {
    let total = '';
    for (i = 0; i < names.length; i++) {
        total += names[i];
        total += ' ';
    }
    return total;
}
let stringNames = concatNames (names);
console.log ("2-B:", stringNames);

//5. 

function simplify(names) {
    let total = [];

    for (i = 0; i < names.length; i++) {
        total.push(names[i].length);
    }
    return total;
}
let nameLengths = simplify(names);
console.log("5:", nameLengths);

//6.

function nameLengthsSum (nameLengths) {
    let sum = 0
    for (i = 0; i < nameLengths.length; i++) {
        sum += nameLengths [i];
    }
    return sum;
}
let ageSum = nameLengthsSum(nameLengths);
console.log("6:", ageSum);

//7.

function repitition (word, n) {
    return word.repeat(n);
}
console.log("7:", repitition ("Hello", 3))

//8.

function fullName (firstName, lastName) {
    return firstName + " " + lastName;
}
console.log("8:", fullName ("Kuippo" , "Palmer"))

//9.

function sumFunction (ages) {
    let total = 0;
    if( total > 100) {
        total += ages [i]
        return true;
    }
    else {
        return false;
    }
}
console.log("9:", sumFunction(ages));

//10.

let numbers = [20,21,24,30,36,45]

const lastnumber = numbers [numbers.length - 1]
console.log ("10:",(lastItem-numbers[0]));

function findAverage (numbers) {
    let total = 0;
    for (i = 0; i< numbers.length; i++) {
        total += numbers [i];
    }
    return total/numbers.length;
}

//11.

let row1 = [2,4,6,8,10]
let row2 = [1,3,5,7,9]

function twoArrays (row1, row2) {
    let total1 = 0;
    let total2 = 0;

    for (i = 0; i < row1.length; i++) {
        total1 += row1[i];
    }
    for (j = 0; j < row2.length; j++) {
        total2 += row2[j]
    }
    return total1/row1 > total2/row2;
}
console.log("11:", twoArrays(row1, row2))

//12.
function willBuyDrink (isHotOutside, moneyInPocket) {
    if(isHotOutside === true && moneyInPocket > 10.50) {
        return false
    }
    else{
        return false
    }
}
console.log("12.", willBuyDrink(true,10));

//13.
//This problem is to decide if I can go to the movies, Must have ticket and must be 17 years or older

function canGoToMovies(hasTicket, age) {
    if (hasTicket && age >= 17) {
        return true;
    } else {
        return false;
    }
}
let hasTicket = true;
let age = 18;
let canGo = canGoToMovies(hasTicket, age);
console.log("13:", canGo)
