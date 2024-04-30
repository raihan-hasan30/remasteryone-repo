/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array.
**Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/
//†he function take array as argument
//the function return an object
//the return object will return the array element as key and occurences as value
//have to take an empty object
//
function arrayConverter(array) {
  // Your code here 
  let countKeys = {};
  for(let i = 0; i < array.length; i++){
    let el = array[i];
    if(countKeys[el]!==undefined){
      countKeys[el]+=1
    }
    else{
      countKeys[el]=1
    }
  }
  return countKeys;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
