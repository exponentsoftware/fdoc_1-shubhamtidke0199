// 2c. Reversing an array: Arrays have a reverse method which changes the array by inverting 
// the order in which its elements appear. For this exercise, write a function, reverseArray. 
// The reverseArray, takes an array as argument and produces a new array that has the same elements
//  in the inverse order. Without reverse method.


let arr = ["C", "B", "A"]

function reverseArray(array){
  let reversedArray = []

  for(let i=array.length-1; i>=0;i--){
    reversedArray.push(array[i])
  }
  return reversedArray
}