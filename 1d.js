// 1.d. How many words were used to construct this sentence. Now, don't exclude one letter words.


function varietyOfWords(text){
    let cleanedText = text.replace(/[^a-zA-Z0-9 ]/g, '').split(" ")
    let words = []
   
    for(let i=0; i<cleanedText.length;i++){
      if(!words.includes(cleanedText[i])){
        words.push(cleanedText[i])
      }
    }
    return words.length
    
   }
   
   
   console.log(varietyOfWords(sentence));