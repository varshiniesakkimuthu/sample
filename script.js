//ARRAY PROBLEMS
// 1. Find the maximum number in a array
const a = [5, 10, 15, 20, 25];
const b = [1, 2, 2, 3, 4, 4, 5];

const maxi = Math.max(...a);

console.log("1.", maxi); 

//2. Remove duplicates from an array

const array = [...new Set(b)];

console.log( "2." ,array);

// 3. Reverse an array


let reverse = [];

for (let i = b.length - 1; i >= 0; i--) {
  reverse.push(b[i]);
}

console.log("3." , reverse)

//4. Find the second largest element



a.sort((a, b) => b - a); // Sort in descending order
const secondLarge = a[1]; // The second largest element is at index 1

console.log("4." , secondLarge);

//5. Check if an array is a subset of another

const a1 = [1, 2, 3];
const a2 = [1, 2, 3, 4, 5];
const isSubset = a1.every(element => a2.includes(element));
console.log("5.",isSubset); 

//STRING PROBLEMS

//6. Reverse a string

function revStr(str) {
  
  let rev = ""; 
  for (let x of str) {
    rev = x + rev; 
  }
  return rev; 
}


function pal(str) {
  str = str.toLowerCase();
  let reversed = revStr(str); 
  return reversed === str; 
}


const str = "Madam";

console.log("6. Reversed string: ", revStr(str));
console.log("7. Is adam a palindrome? ", pal(str));

//8. Count vowels in a string

function countVowels(str) { 
  str = str.toLowerCase();
  const vowels = "aeiou";
  let count = 0; 
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}


console.log("8. There are " , countVowels("Varshini" )," vowels in Varshini");

// 9. Find the longest word in a string
   
function long(str) {
  const words = str.split(' ');
  let longWord = "";
 for (let word of words) {
    if (word.length > longWord.length) {
      longWord = word;
    }
  }
  return longWord;
}


console.log("9. ", long(" I'm currently learning MERN stack in ShootingStars foundation ")); 

 //10. Check if two strings are anagrams

function anagram(str1,str2){
  return str1.toLowerCase().split('').sort().join('')===str2.toLowerCase().split('').sort().join(''); 
}
let str1= "rat";
let str2="tar"
console.log("10. Is rat and tar is a anagram: ", anagram(str1,str2))                                        

//DATA TYPE PROBLEMS
//11. Check if a variable is an array

let car = ["volvo","BMW","maruti"];
console.log("11. Is the variable car is an array:", Array.isArray(car))

//12. Convert a string to a number
let no = "12345";
console.log("12. Converting string to number:", Number(no))

// 13. Check if a number is an integer
console.log("13. Is",no,"is an integer?", Number.isInteger(no) )

//14. Get the data type of a variable
console.log("14. a.Type of",a,"is:",typeof(a))
console.log("    b.Type of",no,"is:",typeof(no))

//15. Check if a value is null or undefined

const value = null;
if (value == null) {
  console.log("15.",value,"is null or undefined");
} else {
  console.log("15. Value is defined and not null");

}
//OPERATOR PROBLEMS
//16. Swap two numbers without using a third variable

function swapNumbers(p, q) {
  [p, q] = [q, p];
  return [p, q];
}
console.log("16. Swapping two variables",swapNumbers(6, 3)); 

//17. Check if a number is even or odd
function isEven(num) {
  return num % 2 === 0;
}
console.log("17.",isEven(4)); 

//18. Find the square of a number
function sq(num) {
  return num ** 2;
}
console.log("18. Square of number 5 is",sq(5)); 

//19. Use the ternary operator for conditions

function mark(m) {
  return m >= 50 ? "Pass" : "Fail";
}
console.log("19.", mark(20)); 

//20. Check if a number is divisible by another

function div(n1, n2) {
  return n1 % n2 === 0;
}
console.log("20.",div(10, 2)); 

//MIXED PROBLEMS
//21. Find the sum of an array

function sum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log("21.",sum([1, 2, 3, 5])); 

//22. Flatten a nested array

function flattenArray(arr) {
  return arr.flat(Infinity);
}
console.log("22.",flattenArray([1, [2, [3, 4]]])); 

//23. Find the frequency of elements in an array

function frequencyCount(arr) {
  return arr.reduce((count, item) => {
      count[item] = (count[item] || 0) + 1;
      return count;
  }, {});
}
console.log("23.",frequencyCount([1,1, 2, 2, 3])); 

//24. Check if a string contains only digits

function isNumeric(str) {
  return /^\d+$/.test(str);
}
console.log("24. Is 12345 numeric?",isNumeric("12345"));

//25. Capitalize the first letter of each word in a string

function cap(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
console.log("25.",cap("hello world")); 

//26. Find the intersection of two arrays
arr1=[1,2,3,4,5];
arr2=[2,2,4,5,6]
let fill = arr1.filter((item) => arr2.includes(item));
console.log("26. Intersection of two arrays is",fill)

//27. Sort an array of strings by length

const fruits=["apple","strawberry", "kiwi","grapes"]
let len=fruits.slice().sort((a, b) => a.length - b.length);
console.log("27. array fruits after sorting by length",len)

//28. Find the factorial of a number
function fact(x) {
  if (x < 0) return null; 
  return x === 0 ? 1 : x * fact(x - 1);
}
console.log("28. Factorial of number 5 is :",fact(5)); 

//29. Merge two sorted arrays

function mergeSortedArrays(arr1, arr2) {
  let i = 0, j = 0;
  const result = [];
  while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
          result.push(arr1[i++]);
      } else {
          result.push(arr2[j++]);
      }
  }
  return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}
console.log("29.",mergeSortedArrays([1, 3, 5], [2, 4, 6])); 

//30. Remove falsy values from an array
 let falsy=[0, 1, false, 2, "", 3, null, undefined]
 let e= falsy.filter(Boolean);
 console.log("30. Removing Falsy values",e)