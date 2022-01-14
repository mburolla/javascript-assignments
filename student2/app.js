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
    let n = [1, 3, 6, 3, 6, 10];

    console.log('*** Ex. 6 ***');
    console.log(student2Sort(n));
}

let ex7 = () => {

    let words = "Count the words in this string";

    console.log('*** Ex. 7 ***');
    console.log(countWords(words));
}

let ex8 = () => {
    
    var a = "this counts the number of words that end in s";
    
    console.log('*** Ex. 8 ***');
    console.log(countS(a));
}

let ex9 = () => {

    var array = ["this", "is", "a", "test"];
    
    console.log('*** Ex. 9 ***');
    console.log(countLetters(array));
}

let ex10 = () => {

    let arr = ['dog', 3, 7, 'cat', 13, 'car'];

    console.log('*** Ex. 10 ***');
    console.log(numbersOnly(arr));
}

const main = async () =>{
    // ex1();
    // ex2();
    // ex3();
    // ex4();
    // ex5();
    // ex6();
    // ex7();
    // ex8();
    // ex9();
    ex10();
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

function student2Sort(array) {
    array.sort((a, b) => a - b);
    return array;
}

function countWords(words) {
    let wordCount = 0;
    words.split(' ').forEach(word => {
        wordCount++;
    });
    return wordCount;
}

function countS(words) {
    let sCount = 0;
    words.split(' ').forEach(word => {
        if(word.charAt(word.length - 1) === 's') {
            sCount++;
        }
    });
    return sCount;
}

function countLetters(array) {
    let letterCount = 0;
    array.forEach(word => {
        letterCount += word.length;
    })
    return letterCount;
}

function numbersOnly(array) {
    return array.filter(entry => typeof entry === 'number');
}

//
// Main
//

main();
