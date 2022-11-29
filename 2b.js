// 2.b. Write a function which returns array of seven random numbers in a range of 0-9. 
// All the numbers must be unique

function sevenRandomNumbers(){
    let randomNumber = [];
    let number
    
    while(randomNumber.length <=7){
      number = Math.floor(Math.random() *10)
      if(!randomNumber.includes(number)){
        randomNumber.push(number)
      }  
    }
    return randomNumber
   
  }