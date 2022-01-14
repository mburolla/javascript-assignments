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
    ex1();
    ex2();
    ex3();
    ex4();
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



//
// Main
//

main();
