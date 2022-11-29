// 2.d. Write a function which check if items of an array are unique?



const arrOne = [1, 4, 6, 2, 1];

const arrTwo = [1, 4, 6, 2, 3]

function checkUniqueness(arr){
  let uniqueArray = []
  let isUnique 

  for(let i=0; i<arr.length; i++){
    if(!uniqueArray.includes(arr[i])){
      uniqueArray.push(arr[i])
      isUnique = true
    }else{
      isUnique = false
    }
  }
  return isUnique

}


console.log(checkUniqueness(arrTwo))