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

    const sumAge = dict.map(i => i.age).reduce((prev, curr) => prev + curr, 0);
    console.log(`The total age is ${sumAge}`);
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

    const customerList = customers.filter(customer => customer.credit === 200);
    console.log(customerList);
}

let ex3 = () => {
    let str = "today this is a this is a this is a test.";
    const strCounter = (words, find) => {
        return (words.split(find)).length - 1;
    }

    const result = strCounter(str, "this");
    console.log(`this appears: ${result} times`);
}

let ex4 = () => {
    let strArray = ['this', 'is', 'a', 'test', 'happy'];

    const student6LongestString = strArray.reduce((prev, curr) => prev.length > curr.length ? prev : curr, '');
    console.log(student6LongestString);
}

let ex5 = () => {
    const student6Palindrome = str => {
        let reg = /[\W_]/g;
        let lower = str.toLowerCase().replace(reg, '');
        let reverse = lower.split('').reverse().join('');
        return reverse === lower;
    }

    console.log(student6Palindrome('radar'));
    console.log(student6Palindrome('month'));
}

let ex6 = () => {
    let n = [1, 3, 6, 3, 6, 10];
    
    const student6Sort = arr => arr.sort((a,b) => a-b);

    console.log(student6Sort(n));
}

let ex7 = () => {
    let words = "Count the words in this string";
    
    const wordCounter = str => str.split(' ').length;

    console.log(wordCounter(words));
}

let ex8 = () => {
    let str = "this counts the number of words that end in s";
    let counter = 0;
    const student6CountS = (words) => {
        words.split(' ').forEach(word => word.charAt(word.length - 1) === 's' ? counter++ : false);
        return counter;
    }

    student6CountS(str);
    console.log(counter);
}

let ex9 = () => {
    let array = ["this", "is", "a", "test"];

    const student6CountLetters = arr => arr.join('').split('').length;
    
    console.log(student6CountLetters(array));
}

let ex10 = () => {
    let arr = ['dog', 3, 7, 'cat', 13, 'car'];

    const student6NumbersOnly = i => {
        if(typeof(i) === 'number') {
            return i;
        }
    }

    const numbers = arr.filter(student6NumbersOnly);
    console.log(numbers);
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



//
// Main
//

main();
