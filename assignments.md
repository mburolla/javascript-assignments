## Ex. 1

Given the following dictionary:

```
    let dict = [
        {"firstName": "joe", "lastName": "smith", age: 10},
        {"firstName": "paul", "lastName": "simmon", age: 20},
        {"firstName": "fred", "lastName": "jones", age: 30},
    ]
```

Display the total age on the console:

Output:
```
The total age is: 60.
```

## Ex. 2

Given the following data:

```
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
```

Display the item whose credit is 200, do not use a for loop.

Output:
```
{ name: 'ACME Corp', credit: 200 }
```

## Ex. 3
Given the following string:

```
let str = "today this is a this is a this is a test.";
```

Display the number of times the word `this` appears:

Output:
```
this appears: 3 times.
``

## Ex. 4
Write a function named: `longestString` that returns the longest string from an array of strings:

Usage:
```
array = ['this', 'is', 'a', 'test', 'happy'];
console.log(student1LongestString(array));
```

Output:
```
happy
```

## Ex. 5
Write a function named: `palindrome` that returns a boolean if a string is a palindrome:

Example usage:
```
console.log(student1Palidrome('radar'));
console.log(student1Palidrome('month'));
```
Output:
```
true
false
```

## Ex. 6

Write a function named: `sort` that sorts an array of numbers in ascending order:

Example usage:
```
let n = [1, 3, 6, 3, 6, 10];
console.log(student0Sort(n));
```
Output:
```
[ 1, 3, 3, 6, 6, 10 ]
```

## Ex. 7

Write a function named: `countWords` that counts the number of words for this string:

```
let words = "Count the words in this string";
```

Output:
```
6
```

## Ex. 8
Write a function named: `countS` that counts the number of words that end in "s":

Usage:
```
var a = "this counts the number of words that end in s";
console.log(countS(a));
```

Output:
```
4
```

## Ex. 9
Write a function named: `countLetters` that counts the number of letters for an array of words:

Usage:
```
    var array = ["this", "is", "a", "test"];
    console.log(countLetters(array));
```

Output:
```
11
```

Bonus points for using `map` and `reduce`.

## Ex. 10
Write a function named: `numberOnly` that counts the number of numbers in an array:


Usage:
```
let arr = ['dog', 3, 7, 'cat', 13, 'car'];
console.log(numbersOnly(arr));
```

Output:
```
[ 3, 7, 13 ]
``
