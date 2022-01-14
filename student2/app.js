//
// File: app.js
// Date: 1/13/2022
// 

let ex1 = () => {

    let dict = [
        {"firstName": "joe", "lastName": "smith", age: 10},
        {"firstName": "paul", "lastName": "simmon", age: 20},
        {"firstName": "fred", "lastName": "jones", age: 30},
    ]

    let totalAge = 0
    for(let i = 0; i < dict.length; i++) {
        totalAge = dict[i].age + totalAge;
    }

    console.log('*** Ex. 1 ***');
    console.log('The total age is: ' + totalAge);
}

let ex2 = () => {

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

    const filteredCustomer = customers.filter(function(customer) { 
            return customer.credit == 200; 
    });

    console.log('*** Ex. 2 ***');
    console.log(filteredCustomer);
}

let ex3 = () => {

    let str = "today this is a this is a this is a test.";
    let thisCount = 0;

    str.split(' ').forEach(word => {
        if(word === 'this') {
            thisCount++;
        }
    });

    console.log('*** Ex. 3 ***');
    console.log('this appears: ' + thisCount + ' times.');
}

let ex4 = () => {
    array = ['this', 'is', 'a', 'test', 'happy'];

    console.log('*** Ex. 4 ***');
    console.log(longestString(array));
}

let ex5 = () => {
    console.log('*** Ex. 5 ***');
    console.log(palindrome('radar'));
    console.log(palindrome('month'));
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
    // ex1();
    // ex2();
    // ex3();
    // ex4();
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

function longestString(array) {
    let longestStringLength = 0;
    array.forEach(word => {
        if(word.length > longestStringLength) {
            longestStringLength = word.length;
            longestStringName = word;
        }
    })
    return longestStringName;
}

function palindrome(word) {
    for(let i = 0; i < word.length; i++) {
        if(word.charAt(i) !== word.charAt(word.length - i - 1)) {
            return false;
        }
    }
    return true;
}

//
// Main
//

main();
