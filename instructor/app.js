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
    console.log(student0LongestString(array));
}

let ex5 = () => {
    console.log('*** Ex. 5 ***');

    console.log(student0Palindrome('radar'));
    console.log(student0Palindrome('month'));
}

let ex6 = () => {
    console.log('*** Ex. 6 ***');

    let n = [1, 3, 6, 3, 6, 10];
    console.log(student0Sort(n));
}

let ex7 = () => {
    console.log('*** Ex. 7 ***');


    console.student0CountWords()


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
    ex7();
}

//
// Your functions here...
//

const student0LongestString = (arr) => {
	let longest = ''; 
	arr.forEach(item => {
		if(item.length > longest.length) {
            longest = item;
        }
	});
	return longest; 
};

const student0Palindrome = (str) => {
    let trimmed = str.replace(/[^\w]/g, "");
    return trimmed === trimmed.split('').reverse().join('');
}

const student0Sort = (arrayNumbers) => {
    return arrayNumbers.sort((a, b) => a > b ? 1 : -1 );
}

const student0CountWords = (words) => {
    return words.split.size();
}


main();

