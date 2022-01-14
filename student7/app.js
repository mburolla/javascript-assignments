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
        else {}
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
    //  ex1();
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


//
// Main
//

main();
