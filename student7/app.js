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

    let total = 0;

    for (let i=0; i <dict.length; i++) {
        total += dict[i].age;
    }

    console.log("The total age is:" + total);
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


    console.log(customers[1]);
}

let ex3 = () => {
    let str = "today this is a this is a this is a test.";
    let strSplit = str.split(" ");
    let count = 0;
    
    let counter = strSplit.forEach(s => {
        if (s === "this") {
            count++
        }
        return count;
    })
    console.log("this appears: " + count + " times.");
}

let ex4 = () => {
    array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(student7LongestString(array));
}

let ex5 = () => {
    console.log(student7Palindrome('radar'));
    console.log(student7Palindrome('month'));
}

let ex6 = () => {
    let n = [1, 3, 6, 3, 6, 10];
    console.log(student7Sort(n));
}

let ex7 = () => {
    let words = "Count the words in this string";
    console.log(student7CountWords(words));
}

let ex8 = () => {
    var a = "this counts the number of words that end in s";
console.log(student7CountS(a));
}

let ex9 = () => {
    var array = ["this", "is", "a", "test"];
    console.log(student7CountLetters(array));
}

let ex10 = () => {
    let arr = ['dog', 3, 7, 'cat', 13, 'car'];
console.log(student7NumbersOnly(arr));
}

const main = async () =>{
    //  ex1();
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
let student7LongestString = (array) => {
    let longest = array[0];
    array.forEach(s => {
        for (let i=0; i < array.length; i++) {
            if (array[i].length > longest.length) {
                longest = array[i];
                 }
        }   
    })
    return longest;
}

let student7Palindrome = (string) => {
let reversedString = "";
for (let i = (string.length+1); i >= 0; i--) {
    reversedString += string.charAt(i);
}
return (string === reversedString);
}

let student7Sort = (array) => {
    let sortedArray = array.sort(function(a,b){return a - b});
    return sortedArray;   
}

let student7CountWords = (string)=> {
let wordsArray = string.split(" ");
return wordsArray.length;
}

let student7CountS = (string) => {
    let strArray = string.split(" ");
    let numOfS = 0;

    for (let i=0; i<strArray.length; i++) {
        for (let w of strArray[i]) {
            if (w.endsWith("s",strArray[i].length)) {
                numOfS++
            }
        }
    }
    return numOfS
}

let student7CountLetters = (wordArray) => {
    let numOfLetters = 0;
    for(let i=0; i < wordArray.length; i++) {
     numOfLetters += (wordArray[i].length)
    }
    return numOfLetters;
}

let student7NumbersOnly = (array) => {
    let arrayOfNums = [];
    for (let i=0; i < array.length; i++) {
            if (typeof array[i] === 'number') {
                arrayOfNums.push(array[i]);
        }
    }
    return arrayOfNums;
}

//
// Main
//

main();
