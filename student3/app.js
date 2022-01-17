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

    let sum = 0;

    Object.entries(dict).forEach(([key, value]) => {
        sum += value.age;
    });
    console.log('The total age is: ' + sum);
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

    Object.entries(customers).forEach(([key, value]) => {
        if(value.credit == 200){
            console.log(value);
        }
    });
}

let ex3 = () => {
    console.log('*** Ex. 3 ***');

    let str = 'today this is a this is a this is a test';

    let words = str.split(' ');

    let count = 0;

    words.forEach((value) => {
        if(value == 'this')
        count += 1;
    })
    console.log('this appears ' + count + ' times.')
}

let ex4 = () => {
    console.log('*** Ex. 4 ***');

    array = ['this', 'is', 'a', 'test', 'happy']
    student3LongestString(array);

}

let ex5 = () => {
    console.log('*** Ex. 5 ***');

    console.log(student3Palindrome('radar'));
    console.log(student3Palindrome('month'));
}

let ex6 = () => {
    console.log('*** Ex. 6 ***');

    let n = [1, 3, 6, 3, 6, 10];
    console.log(student3Sort(n));
}

let ex7 = () => {
    console.log('*** Ex. 7 ***');

    let words = 'Count the words in this string';
    console.log(student3CountWords(words))
}

let ex8 = () => {
    console.log('*** Ex. 8 ***');

    var a = 'this counts the number of words that end in s';
    console.log(student3CountS(a));
}

let ex9 = () => {
    console.log('*** Ex. 9 ***');

    var array = ['this', 'is', 'a', 'test'];
    console.log(student3CountLetters(array));
}

let ex10 = () => {
    console.log('*** Ex. 10 ***');

    let arr = ['dog', 3, 7, 'cat', 13, 'car']
    console.log(student3NumbersOnly(arr));
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
function student3Palindrome(word) {
    const len = word.length;

    for (let i = 0; i < len / 2; i++){
        if (word[i] !== word[len - 1 - i]){
            let palindrome = false;
            return palindrome;
        }
    }
    let palindrome = true;
    return palindrome;
}

function student3LongestString(array) {
    let word = '';
    for (let i = 0; i < array.length; i++){
        if (word.length < array[i].length){
            word = array[i];
        }
    }
    console.log('the longest word is: ' + word);
}


function student3Sort(n) {
    let i = 0;  
    let j = 1;

    while(i < n.length){
        j = i + 1;
        while(j < n.length){
            if(n[j] < n[i]){
                let temp = n[i];
                n[i] = n[j];
                n[j] = temp;
            }
            j++;
        }
        i++;
    }
    return n;
}

function student3CountWords(words) {
    let string = words.split(' ');
    return string.length;
}

function student3CountS(words) {
    let string = words.split(' ');
    let count = 0;

    string.map(word => {count += word.endsWith('s') ? 1 : 0;});
    return count;
}

function student3CountLetters(array) {
    let string = array.join('');
    return string.length;
}

function student3NumbersOnly(arr) {
    return arr.filter(e => !isNaN(e));
}


//
// Main
//

main();
