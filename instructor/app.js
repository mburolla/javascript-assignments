//
// File: app.js
// Date: 1/13/2022
// 

var readline = require('readline');

// let rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false
// });

// rl.on('line', (line) => {
//     console.log(line);
// });

let ex1 = () => {
    console.log('*** Ex. 1 ***');

    let dict = [
        {"firstName": "joe", "lastName": "smith", age: 10},
        {"firstName": "paul", "lastName": "simmon", age: 20},
        {"firstName": "fred", "lastName": "jones", age: 30},
    ]

    let age = 0;
    for (let key in dict){
        age += dict[key].age;
    }
      
    console.log(`The total age is: ${age}.`);
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

    console.log(customers.find(c => c.credit = 200));

}

let ex3 = () => {
    console.log('*** Ex. 3 ***');

    let str = "this is a this is a this is a test.";

    for (let i = 0; i < str.length; i++) {
        console.log(str.indexOf('this', 0));
    }


}

let ex4 = () => {
    console.log('*** Ex. 4 ***');
}

let ex5 = () => {
    console.log('*** Ex. 5 ***');
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
    ex3();
}

main();

