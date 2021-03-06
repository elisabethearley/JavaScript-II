// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];



  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });




function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
}
function getLength(arr, cb) {
  return cb(arr[0]);
}

getLength(items, function(length) {
  console.log(items.length)
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
}
function last(arr, cb) {
  return cb(arr[3]);
}

last(items, function(last) {
  console.log(last)
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

function sumNums(x, y, cb) {
  return cb(x, y);
}

function add(num1, num2) {
  return num1 + num2;
}

let sum = sumNums(3, 5, add);

console.log(sum);

/*sumNums(items, function(add) {
  console.log(add(3, 4, cb))
});*/

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}
function multiplyNums(x, y, cb) {
  return cb(x, y);
}

function multiply(num1, num2) {
  return num1 * num2;
}

let product = multiplyNums(3, 5, multiply);

console.log(product);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, list)
}

function check(item, list) {
  return list.includes(item);
}

console.log(contains('Pencil', items, check));
console.log(contains('Bookbag', items, check));
/*const list = ['Hair', 'Nails', 'Outfit','Shoes'];

function contains(item, list, cb) {
  //return cb(item, list[0]);
  let present = 'false';

  for( let i = 0; i < list.length; i++) {
    let check = list[i];
    if(check === item){
      present = 'true';
      continue;
    }
  } 
  return present;
}
console.log('Item present : ' + contains('Outfit', list));
console.log('Item present : ' + contains('Earrings', list));
*/


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
