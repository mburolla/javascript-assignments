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
    let totalAge = 0;
    for(const person of dict){
        totalAge+=person.age;
    }
    console.log(`The total age is : ${totalAge}`);
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

   let result =  customers.filter(obj => {
       return obj.credit === 200;
   })

   console.log(result);
}

let ex3 = () => {
    console.log('*** Ex. 3 ***');
    let str = "today this is a this is a this is a test.";
    let count = student9CountOccurences(str, 'this');
    console.log(`this appears: ${count} times`);
 

}

let ex4 = () => {
    console.log('*** Ex. 4 ***');
    const array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(student9LongestString(array));
}

let ex5 = () => {
    console.log('*** Ex. 5 ***');
    console.log(student9Palindrome('radar'));
}

let ex6 = () => {
    console.log('*** Ex. 6 ***');
    let n = [1, 3, 6, 3, 6, 10];
console.log(student9Sort(n));
}

let ex7 = () => {
    console.log('*** Ex. 7 ***');
    let words = "Count the words in this string";
    console.log(student9CountWords(words));
}

let ex8 = () => {
    console.log('*** Ex. 8 ***');
    var a = "this counts the number of words that end in s";
    console.log(studentCountS(a));
}

let ex9 = () => {
    console.log('*** Ex. 9 ***');
    var array = ["this", "is", "a", "test"];
    console.log(studentCountLetters(array));
}

let ex10 = () => {
    console.log('*** Ex. 10 ***');
    let arr = ['dog', 3, 7, 'cat', 13, 'car'];
console.log(studentNumberOnly(arr));
}

const main = async () =>{
    // ex1();
    // ex2();
    // ex3();
    // ex4();
    // ex5();
    // ex6();
    // ex7();
   //  ex8();
   // ex9();
    ex10();
}

//
// Your functions here...
//

function student9CountOccurences(string, word){
    return string.split(word).length -1;
}

function student9LongestString(array){
    let longestWord= '';
    array.forEach(function(word){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    });
    return longestWord;
}

function student9Palindrome(string){
    let isPalidrome = false;
   const arrayValues = string.split('');
   const reverseValue = arrayValues.reverse();
   const reverseString = reverseValue.join('');

   if(string === reverseString){
       isPalidrome = true;
       console.log(isPalidrome)
   } else {
       console.log(isPalidrome)
   }
}

function student9Sort(array){
    return array.sort(function(a,b){
        return a-b;
    });
}

function student9CountWords(string){
 return string.trim().split(/\s+/).length;
}

function studentCountS(String){
    let count = 0;
    for(let i =0; i < String.length; i++) {
        if(String.charAt(i) == 's'){
            count++;
     
        }
    }
    return count;
}

function studentCountLetters(array){
    let count = 0;
    for(let i = 0; i < array.length;i++) {
        let word = array[i];
        for(let j = 0; j < word.length; j++){
            count++;
        }
    }
    return count;
}

function studentNumberOnly(array){
    return array.filter(item => typeof item === 'number');
}



//
// Main
//

main();
