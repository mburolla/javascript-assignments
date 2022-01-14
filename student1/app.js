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
    ];

    const totalAge = student1GetTotalAge(dict);
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

    let foundCustomer = customers.filter(customer => customer.credit === 200);
    console.log(foundCustomer[0]);

}

let ex3 = () => {
    console.log('*** Ex. 3 ***');

    let str = "today this is a this is a this is a test.";
    let thisCount = 0;

    str.split(' ').forEach(word => word === 'this' ? thisCount++: false);
    console.log(`this appears: ${thisCount} times.`);

}

let ex4 = () => {
    console.log('*** Ex. 4 ***');

    array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(student1LongestString(array));

}

let ex5 = () => {
    console.log('*** Ex. 5 ***');

    console.log(student1Palidrome('radar'));
    console.log(student1Palidrome('month'));

}

let ex6 = () => {
    console.log('*** Ex. 6 ***');

    let n = [1, 3, 6, 3, 6, 10];
    console.log(student1Sort(n));

}

let ex7 = () => {
    console.log('*** Ex. 7 ***');

    let words = "Count the words in this string";
    console.log(student1CountWords(words));
}

let ex8 = () => {
    console.log('*** Ex. 8 ***');

    var a = "this counts the number of words that end in s";
    console.log(student1CountS(a));

}

let ex9 = () => {
    console.log('*** Ex. 9 ***');

    var array = ["this", "is", "a", "test"];
    console.log(student1CountLetters(array));
}

let ex10 = () => {
    console.log('*** Ex. 10 ***');

    let arr = ['dog', 3, 7, 'cat', 13, 'car'];
    console.log(student1NumbersOnly(arr));
}

const main = async () =>{
    ex1();
    ex2();
    ex3();
    ex4();
    ex5();
    ex6();
    ex7();
    ex8();
    ex9();
    ex10();
}

//
// Your functions here...
//

const student1GetTotalAge = (dict) => {
    let totalAge =  0;
    dict.forEach(person => totalAge += person.age);
    return totalAge;
}

const student1LongestString = (arr) => {
    let longestString = ""
    let longestStringCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];

        if (word.length > longestStringCount) {
            longestStringCount = word.length;
            longestString = word;
        }
    }

    return longestString;

}

const student1Palidrome = (word) => {
    return word === word.split('').reverse().join('');
}

const student1Sort = (arr) => {
    return arr.sort((a, b) => a - b);
}

const student1CountWords = (str) => {
    return str.split(' ').length;
}

const student1CountS = (words) => {
    let sCount = 0;
    words.split(' ').forEach(word => word.charAt(word.length - 1) === 's' ? sCount++ : false);
    return sCount;
}

const student1CountLetters = (arr) => {
    return arr.join('').split('').length;
}

const student1NumbersOnly = (arr) => {
    return arr.filter(el => typeof(el) === 'number');
}

//
// Main
//

main();
