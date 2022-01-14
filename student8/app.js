//
// File: app.js
// Date: 1/13/2022
// 

let ex1 = () => {
    console.log('*** Ex. 1 ***');
    let dict = [
        {"firstName": "joe", "lastName": "smith", age: 10},
        {"firstName": "paul", "lastName": "simmon", age: 20},
        {"firstName": "fred", "lastName": "jones", age: 30},
    ]

    const totalAge = dict.map(p => p.age).reduce((p, c) => p + c);
    console.log(`The total age is: ${totalAge}`);
}

let ex2 = () => {
    console.log('*** Ex. 2 ***');
    let customers = [{
        name: 'ABC Inc',
        credit: 100
    }, {
        name: 'ACME Corp',
        credit: 200
    }, {
        name: 'IoT AG',
        credit: 300
    }];

    const target = customers.find(p => p.credit == 200);
    console.log(target);
}

let ex3 = () => {
    console.log('*** Ex. 3 ***');
    let str = "today this is a this is a this is a test.";

    const wordToCount = 'this'
    const count = str.split(wordToCount).length - 1;
    console.log(`${wordToCount} appears: ${count} times.`)
}

let ex4 = () => {
    console.log('*** Ex. 4 ***');
    array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(student8LongestString(array));
}

let ex5 = () => {
    console.log('*** Ex. 5 ***');
    console.log(student8Palindrome('radar'));
    console.log(student8Palindrome('month'));
}

let ex6 = () => {
    console.log('*** Ex. 6 ***');
}

let ex7 = () => {
    console.log('*** Ex. 7 ***');
}

let ex8 = () => {
    console.log('*** Ex. 8 ***');
}

let ex9 = () => {
    console.log('*** Ex. 9 ***');
}

let ex10 = () => {
    console.log('*** Ex. 10 ***');
}

const main = async () =>{
    ex1();
    ex2();
    ex3();
    ex4();
    ex5();
    // ex6();
    // ex7();
    // ex8();
    // ex9();
    // ex10();
}

//
// Your functions here...
//
function student8LongestString(arr) {
    return arr.reduce((p, c) => p.length > c.length ? p : c);
}

function student8Palindrome(str) {
    return str == str.split('').reverse().join('');
}

//
// Main
//

main();
