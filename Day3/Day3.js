/* 1 */
/* Write a JavaScript function that reverse a number. */
var reverse = function(num) {
    if (num>=0) {
        num = Number(num.toString().split('').reverse().join(''));
    } else {
        num = - Math.abs(num).toString().split('').reverse().join('');
    }
    return num;
}
console.log(reverse(32243)); 

/* 2 */
/* Write a JavaScript function that checks whether a passed string is palindrome or not? */
var isPalindrome = function(str) {
    return str.toString() === str.toString().split('').reverse().join('');
}
console.log(isPalindrome('ababa'));

/* 3 */
/* Write a JavaScript function that generates all combinations of a string. */
var allCombinations = function(str) {
    let res = [];
    for (let i=0; i<str.length; i++) {
        for (let j=i+1; j<str.length+1; j++) {
            res.push(str.slice(i,j));
        }
    }
    return res;
}
console.log(allCombinations('dog'));

/* 4 */
/* Write a JavaScript function that returns a passed string with letters in alphabetical order. */
var alphabetical = function(str) {
    str = str.toString().split('').sort().join('');
    return str;
}
console.log(alphabetical('webmaster'));

/* 5 */
/* Write a JavaScript function that accepts a string as a parameter and 
converts the first letter of each word of the string in upper case. */
var upper = function(str) {
    let words = str.split(' ');
    let res = []; 

    for (let i=0; i<words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
        res.push(words[i]);
    }
    return res;
}
console.log(upper('the quick brown fox'));

/* 6 */
/* Write a JavaScript function that accepts a string as a parameter and 
find the longest word within the string. */
var longestWord = function(str) {
    let words = str.split(' ');
    let len = 0;
    let longest = '';

    for (let i=0; i<words.length; i++) {
        if (len<words[i].length) {
            len = words[i].length;
            longest = words[i]; 
        }
    }
    return longest; 
}
console.log(longestWord('Web Development Tutorial'));

/* 7 */
/* Write a JavaScript function that accepts a string as a parameter and 
counts the number of vowels within the string. */
var vowels = function(str) {
    let letters = str.split('');
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let res = [];

    for (let i=0; i<letters.length; i++) {
        if (vowel.includes(letters[i])) {
            res.push(letters[i]); 
        }
    }
    return res.length; 
}
console.log(vowels('The quick brown fox'));

/* 8 */
/* Write a JavaScript function that accepts a number as a parameter and 
check the number is prime or not. */
var isPrime = function(num) {
    if (num===2) { return true; }
    if (num>2) {
        for (let i=2; i<num; i++) {
            if (num%i!==0) {
                return true; 
            } else {
                return false; 
            }
        }
    }
}
console.log(isPrime(23));

/* 9 */
/* Write a JavaScript function which accepts an argument and returns the type. */
var type = function(arg) {
    return typeof(arg);
}
console.log(type(9));

/* 10 */
/* Write a JavaScript function which returns the n rows by n columns identity matrix */
var identityMatrix = function(num) {
    let res = [];

    for (let i=0; i<num; i++) {
        // initialize the row 
        if (!res[i]) {
            res[i] = [];
        }
        for (let j=0; j<num; j++) {
            if (i===j) {
                res[i][j] = 1;
            } else {
                res[i][j] = 0;
            }
        }
    }
    return res;
}
console.log(identityMatrix(5));

/* 11 */
/* Write a JavaScript function which will take an array of numbers stored and 
find the second lowest and second greatest numbers, respectively. */
var secondLowestAndsecondGreatest = function(arr) {
    let res = []; 
    arr.sort( function(a,b) { return a-b} ); 
    res.push(arr[1], arr[arr.length-2]); 
    return res; 
}
console.log(secondLowestAndsecondGreatest([1,2,3,4,5]));

/* 12 */
/* Write a JavaScript function which says whether a number is perfect. 
According to Wikipedia: In number theory, a perfect number is a positive integer 
that is equal to the sum of its proper positive divisors, that is, 
the sum of its positive divisors excluding the number itself (also known as its aliquot sum). 
Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, 
and 1 + 2 + 3 = 6. 
Equivalently, the number 6 is equal to half the sum of all its positive divisors: 
( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. 
This is followed by the perfect numbers 496 and 8128.
 */
var perfectNum = function(num) {
    let res = []; 
    let sum = 0;

    for (let i=0; i<num+1; i++) {
        if (num%i===0) {
            res.push(i); 
            sum += i; 
        }
    }
    if (sum/2===num) { return true; } else { return false; }
}
console.log(perfectNum(6));

/* 13 */
/* Write a JavaScript function to compute the factors of a positive integer. */
var positiveInt = function(num) {
    let res = []; 

    for (let i=0; i<num+1; i++) {
        if (num%i===0) {
            res.push(i); 
        }
    }
    return res; 
}
console.log(positiveInt(6));

/* 14 */
/* Write a JavaScript function to convert an amount to coins. */
var amountToCoins = function(amount, coins) {
    let res = []; 

    for (let i=0; i<coins.length; i++) { 
        while (amount >= coins[i]) { 
            res.push(coins[i]); 
            amount -= coins[i]; 
        }
    }
    return res;
}
console.log(amountToCoins(46, [25, 10, 5, 2, 1]));

/* 15 */
/* Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. 
Accept b and n from the user and display the result.  */
var exponenet = function(b,n) {
    return b**n;
}
console.log(exponenet(2,3));

/* 16 */
/* Write a JavaScript function to extract unique characters from a string. -- first appearance */
var uniqueChar = function(str) {
    let res = [];
    let freq = {};
    let letters = str.split('');

    for (let i = 0; i < letters.length; i++) {
        if (!freq[letters[i]]) {
            freq[letters[i]] = 1;
            res.push(letters[i]);
        } 
    }
    return res.join('');
}

console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"));

/* 17 */
/* Write a JavaScript function to get the number of occurrences of each letter in specified string.  */
var frequence = function(str) {
    let res =[];
    let freq = {};
    let letters = str.split('');

    for (i=0; i<letters.length; i++) {
        if (!freq[letters[i]]) {
            freq[letters[i]] = 1;
        } else {
            freq[letters[i]] += 1; 
        }
    }
    return freq; 
}
console.log(frequence("thequickbrownfoxjumpsoverthelazydog"));

/* 18 */
/* Write a function for searching JavaScript arrays with a binary search. */
var binarySearch = function(arr, target) {
    let arrSorted = arr.sort( (a,b) => a-b );
    let left = 0;
    let right = arr.length-1; 

    for (let i=0; i<arrSorted.length; i++) {
        let mid = Math.floor((left + right) / 2);
        if (arrSorted[mid] === target) {
          return mid;
        } else if (arrSorted[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
    }
}
console.log(binarySearch([1,3,62,7,653,4321,32], 62));

/* 19 */
/* Write a JavaScript function that returns array elements larger than a number.  */
var compare = function(arr, num) {
    let res = []; 

    for (let i=0; i<arr.length; i++) {
        if (arr[i]>num) {
            res.push(arr[i]);
        }
    }
    return res; 
}
console.log(compare([1,3,62,7,653,4321,32], 62));

/* 20 */
/* Write a JavaScript function that generates a string id (specified length) of random characters. */
var randomID = function(len) {
    let allChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let res = '';


    for (let i = 0; i < len; i++) {
        res += allChar.charAt(Math.floor(Math.random() * allChar.length));
    }

    return res;
}
console.log(randomID(5));

/* 21 */
/* Write a JavaScript function to get all possible subset with a fixed length (for example 2) 
combinations in an array. */
var nCombinations = function(arr, n) {
    let res = []; 

    for (let i=0; i<arr.length-n+1; i++) {
        res[i]= [];
        for (let j=i; j<i+n; j++) {
            res[i].push(arr[j]);
        }
        res.push(res[i]);
    }
    return res; 
}
console.log(nCombinations([1, 2, 3],2));

/* 22 */
/* Write a JavaScript function that accepts two arguments, a string and a letter and 
the function will count the number of occurrences of the specified letter within the string. */
var calFreq = function(str, l) {
    let freq = 0;
    let letters = str.split('');

    for (let i=0; i<letters.length; i++) {
        if (letters[i]===l) {
            freq += 1;
        }
    }
    return freq;
}
console.log(calFreq('microsoft.com', 'o'));

/* 23 */
/* Write a JavaScript function to find the first not repeated character. */
var firstNotRepeatChar = function(str) {
    let letters = str.split('');
    let uniqueChar = [];
    let freq = {};

    for (let i =0; i<letters.length; i++) {
        if (!freq[letters[i]]) {
            freq[letters[i]] = 1; 
        } else {
            freq[letters[i]] += 1; 
        }
    }
    
    for (let i =0; i<letters.length; i++) {
        if (freq[letters[i]] === 1) {
            uniqueChar.push(letters[i]);
        }
    }
    return uniqueChar[0];
}
console.log(firstNotRepeatChar('abacddbec'));

/* 24 */
/* Write a JavaScript function to apply Bubble Sort algorithm */
var bubbleSort = function(arr) {
    let temp = 0;

    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr.length; j++) {
            if (arr[j]<arr[j+1]) {
                temp = arr[j]; 
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr; 
}
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

/* 25 */
/* Write a JavaScript function that accept a list of country names as input and 
returns the longest country name as output. */
var Country_Name = function(arr) {
    let len = 0;
    let res = [];

    for (let i=0; i<arr.length; i++) {
        if (len < arr[i].length) {
            len = arr[i].length;
            res = [arr[i]];
        } else if (arr[i].length === len) {
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(Country_Name(["Australia", "Germany", "United States of America"]));

/* 26 */
/* Write a JavaScript function to find longest substring in a given a string w/o repeating characters. */
var longestSubstr = function(str) {
    let start = 0, left = 0;
    let set = new Set();
    let longest = 0; 

    for (let right=0; right<str.length; right++) {
        if (!set.has(str[right])) {
            set.add(str[right]); 
            if (set.size > longest) {
                longest = set.size; 
                start = left; 
            }
        } else {
            set.delete(str[left]);
            left++; 
        }
    }
    return str.slice(start, start+longest);
}
console.log(longestSubstr('ababcbabab'));

/* 27 */
/* Write a JavaScript function that returns the longest palindrome in a given string. */
function longestPalindromes(str) {
  if (str.length < 2) {
    return [str];
  }

  const result = [];

  for (let i = 0; i < str.length; i++) {
    // Check for odd-length palindromes
    let left = i;
    let right = i;
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      const currentPalindrome = str.substring(left, right + 1);
      if (currentPalindrome.length > 1) {
        result.push(currentPalindrome);
      }
      left--;
      right++;
    }

    // Check for even-length palindromes
    left = i;
    right = i + 1;
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      const currentPalindrome = str.substring(left, right + 1);
      if (currentPalindrome.length > 1) {
        result.push(currentPalindrome);
      }
      left--;
      right++;
    }
  }

  return result;
}
console.log(longestPalindromes('abracadabra'));

/* 28 */
/* Write a JavaScript program to pass a 'JavaScript function' as parameter. */
function passFunction(callback) {
  console.log("Executing function...");
  callback();
}

function myFunction() {
  console.log("Hello, world!");
}

console.log(passFunction(myFunction)); 

/* 29 */
/* Write a JavaScript function to get the function name. */
function getFunctionName(func) {
  return func.name;
}
function myFunction() {
//   console.log(' ');
}

console.log(getFunctionName(myFunction)); 
