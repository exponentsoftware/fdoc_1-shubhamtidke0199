// 2.a. Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle:




let numberOfRows = 7
let output = ""


for(let i=1; i<=numberOfRows; i++){
  for(let j=i; j<=i;j++){
   output += "#"
  }
 console.log(output)
 

}

