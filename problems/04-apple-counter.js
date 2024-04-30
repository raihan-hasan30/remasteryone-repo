/***********************************************************************
Write a function `appleCounter(appleObj)` that takes in an object containing a
number of keys that have the word 'apple' contained within them. The `appleCounter`
function will be in charge of returning the number of keys that contain the word
"apple".

**Hint**: you may want to take all the keys and lower case them for easier
searching.
//take a object as parameter
//every object has key-value pairs
//need to check the the if the key has the word apple or not
//if the key has the word 'apple' the function  return the number
//of the the key that contains the word 'apple' 

Example:
let obj = { banana: "yay!" };
appleCounter(obj); // => 0

let obj1 = { crabapple: "yum!" };
appleCounter(obj1); // => 1

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
appleCounter(obj2); // => 2


let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
appleCounter(obj3); // => 3
***********************************************************************/

function appleCounter(appleObj) {
    let count = 0;
   let objElAsArray = Object.keys(appleObj);
   for(let i = 0; i < objElAsArray.length; i++){
      let stringEl = objElAsArray[i];
      if(stringEl.toLowerCase().includes('apple')){
        count=count+1
      }

   }
   return count
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = appleCounter;
