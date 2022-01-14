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
    
    dict.forEach(person => totalAge += person.age)
    
    console.log(totalAge);
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
    
    let matchingValue;
    
    customers.forEach(customer => {if(customer.credit === 200) matchingValue = customer});
    
    console.log(matchingValue);
}

let ex3 = () => {
    console.log('*** Ex. 3 ***');
    let str = "today this is a this is a this is a test.";
    var count = (str.match(/this/g) || []).length;
    console.log('this appears ' + count + ' times');
}

let ex4 = () => {
    console.log('*** Ex. 4 ***');
    const array = ['this', 'is', 'a', 'test', 'happy'];

    function student5longestString(arr) {
    let longest = arr.reduce(
            function (a, b) {
                return a.length > b.length ? a : b;
            }
        );
        return longest;
    }
    console.log(student5longestString(array));
}

let ex5 = () => {
    console.log('*** Ex. 5 ***');

    function reverseString(str) {
        if (str === "")
          return "";
        else
          return reverseString(str.substr(1)) + str.charAt(0);
      }

      function student5palindrome(str) {
          return (str === reverseString(str)) ? true : false;
      }

      console.log(student5palindrome('radar'));
      console.log(student5palindrome('month'));
    }

let ex6 = () => {
    console.log('*** Ex. 6 ***');
    let n = [1, 3, 6, 3, 6, 10];

    n.sort(function student5sort(num1, num2) {
        return num1 - num2;
    });

    console.log(n)
}

let ex7 = () => {
    console.log('*** Ex. 7 ***');
    let words = "Count the words in this string";
    function student5CountWords(str) {
        return str.split(' ').length;
    }
    console.log(student5CountWords(words));
}

let ex8 = () => {
    console.log('*** Ex. 8 ***');
    var a = "this counts the number of words that end in s";

    function countS(a) {
        let words = a.split(' ');
        let sCount = 0;
        words.map(word => {sCount += word.endsWith('s') ? 1 : 0;});
        return sCount;
    }

    console.log(countS(a));
}

let ex9 = () => {
    console.log('*** Ex. 9 ***');
    var array = ["this", "is", "a", "test"];
    function student5CountLetters(arrayOfStrings) {
        let oneString = arrayOfStrings.join('');
        return oneString.length;
    }
    console.log(student5CountLetters(array));
}

let ex10 = () => {
    console.log('*** Ex. 10 ***');
    let arr = ['dog', 3, 7, 'cat', 13, 'car'];
    
    function student5NumbersOnly(arr) {
        return arr.filter(entry => !isNaN(entry));
    }
    
    console.log(student5NumbersOnly(arr));
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



//
// Main
//

main();
