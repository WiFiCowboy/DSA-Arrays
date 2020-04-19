// 5. URLify a string
// A common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

// Input: tauhida parveen

// Output: tauhida%20parveen

// Input: www.thinkful.com /tauh ida parv een

// Output: www.thinkful.com%20/tauh%20ida%20parv%20een

function URLify(str) {
  // trim spaces at begining and end , replace spaces inside of string 
  return str.trim().replace(/\s/g, '%20');
}

console.log(URLify("tauhida parveen"));
console.log(URLify("www.thinkful.com /tauh ida parv een"));

// 6. Filtering an array
// Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

function filtering(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      arr.splice(i, 1);
      // need this to remove more than 1 index
      i--;
    }
  }
  return arr
}

console.log(filtering([1, 2, 3, 3, 5, 6, 8, 4, 9, 1]));
