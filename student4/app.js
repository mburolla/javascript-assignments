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
    let total=0;
    dict.forEach(i=>{
        total=total+i.age
    });
    console.log('Total age is:',total);
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
  let customer= customers.find(customers=>customers.credit==200);
  console.log(customer);
}

let ex3 = () => {
    console.log('*** Ex. 3 ***');
    let str = "today this is a this is a this is a test.";
    var count = (str.match(/this/g) || []).length;
    console.log('this appears:',count +' times');
}

let ex4 = () => {
    console.log('*** Ex. 4 ***');
    array = ['this', 'is', 'a', 'test', 'happy'];
    var longestWord = "";
function student4LongestString(array){
    array.forEach(function(array) {
      if(array.length > longestWord.length) {
        longestWord = array;
      }
     });
    return longestWord;
}
console.log(student4LongestString(array));
}

let ex5 = () => {
    console.log('*** Ex. 5 ***');
    function student4Palidrome(string) 
        {
            return string == string.split("").reverse().join("");
        }
        console.log(student4Palidrome('radar'));
        console.log(student4Palidrome('month'));
}

let ex6 = () => {
    console.log('*** Ex. 6 ***');
    let n = [1, 3, 6, 3, 6, 10];
    function student4Sort(arr){
        return arr.sort((a,b) => a-b);
    };
    console.log(student4Sort(n));
}

let ex7 = () => {
    console.log('*** Ex. 7 ***');
    let words = "Count the words in this string";
    function WordCount(str){
    return str.split(" ").length;
    }
    console.log(WordCount(words));
}

let ex8 = () => {
    console.log('*** Ex. 8 ***');
    var a = "this counts the number of words that end in s";
    function countS(string){
    return string.split(' ').filter(w=>w.endsWith('s')).length;
    }
console.log(countS(a));
}

let ex9 = () => {
    console.log('*** Ex. 9 ***');
    var array = ["this", "is", "a", "test"];
    function countLetters(array) {
        let words = array.join("");
        return words.length;
    }
    console.log(countLetters(array));
}

let ex10 = () => {
    console.log('*** Ex. 10 ***');
    let arr = ['dog', 3, 7, 'cat', 13, 'car'];
    function numbersOnly(arr){
       let ans= arr.filter(m=> typeof m=='number');
      return ans
     }
    console.log(numbersOnly(arr));
}

const main = async () =>{
     //ex1();
     //ex2();
     //ex3();
    // ex4();
     //ex5();
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
