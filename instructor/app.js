//
// File: app.js
// Date: 1/13/2022
// 

// var readline = require('readline');

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

    let str = "today this is a this is a this is a test.";
    let thisLocations = new Set();
    for (let i = 0; i < str.length; i++) {
        thisLocations.add(str.indexOf('this', i));
    }

    console.log(`this appears: ${thisLocations.size-1} times.`);
}

let ex4 = () => {
    console.log('*** Ex. 4 ***');

    array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(longestString(array));
}

let ex5 = () => {
    console.log('*** Ex. 5 ***');

    console.log(palindrome('radar'));
    console.log(palindrome('month'));
}

let ex6 = () => {
    console.log('*** Ex. 6 ***');

    let n = [1, 3, 6, 3, 6, 10];
    console.log(sort(n));
}

let ex7 = () => {
    console.log('*** Ex. 7 ***');

    let words = "Count the words in this string";
    console.log(countWords(words));
}

let ex8 = () => {
    console.log('*** Ex. 8 ***');

    var a = "this counts the number of words that end in s";
    console.log(countS(a));
}

let ex9 = () => {
    console.log('*** Ex. 9 ***');

    var array = ["this", "is", "a", "test"];
    console.log(countLetters(array));
}

let ex10 = () => {
    console.log('*** Ex. 10 ***');

    let arr = ['dog', 3, 7, 'cat', 13, 'car'];
    console.log(numbersOnly(arr));
}

const main = async () =>{
     ex1();
    // ex2();
    // ex3();
    // ex4();
    // ex5();
    // ex6();
    // ex7();
    // ex8();
    // ex9();
    // ex10();
}

//
// Your functions here...
//

const longestString = (arr) => {
	let longest = ''; 
	arr.forEach(item => {
		if(item.length > longest.length) {
            longest = item;
        }
	});
	return longest; 
};

const palindrome = (str) => {
    let trimmed = str.replace(/[^\w]/g, "");
    return trimmed === trimmed.split('').reverse().join('');
}

const sort = (arrayNumbers) => {
    return arrayNumbers.sort((a, b) => a > b ? 1 : -1 );
}

const countWords = (words) => {
    return words.split(' ').length;
}

const countS = (sentence) => {
    let retval = 0;
    let array = sentence.split(' ');
    for (let i=0; i < array.length; i++) {
        var s = array[i];
        if (array[i].endsWith('s')) {
            retval++;
        }
    }
    return retval;
}

const countLetters = (array) => {
    return array.map(x => x.length).reduce((a, b) => a + b)
}

const numbersOnly = (array) => {
    return array.filter(array => typeof array == "number");
}

//
// Main
//

main();
