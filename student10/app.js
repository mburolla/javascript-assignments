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
    let totalAge=0;
    let adding = dict.forEach(customers => totalAge += customers.age);
    console.log('The total age is: ' + totalAge);
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
    let result = customers.filter(customers => customers.credit === 200);
    console.log(result[0]);
}

let ex3 = () => {
    console.log('*** Ex. 3 ***');
    let str = "today this is a this is a this is a test.";
    let amount = str.match(/this/g).length;
    console.log("this appears: " + amount + " times.");
}

let ex4 = () => {
    console.log('*** Ex. 4 ***');
    let array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(longestString(array));
}

let ex5 = () => {
    console.log('*** Ex. 5 ***');
    console.log(palindrome("radar"));
    console.log(palindrome("month"));

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
    //ex1();
    //ex2();
    //ex3();
    //ex4();
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
function palindrome(word){
    let reverseWord = word.split("").reverse().join("");
    if (word===reverseWord){
        return true;
    }
    else {
        return false;
    }
}

function longestString(array) {
    let longest = "";
    for (let i=0; i<array.length; i++) {
        if (array[i].length > longest.length) {
            longest = array[i]
        }
    }
    return longest;
}


//
// Main
//

main();
