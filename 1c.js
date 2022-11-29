// 1.c. After cleaning the text in the sentence from question number b you will get the following text.
//  Count the number of words in this text. Don't include words with only one letter.


function wordCount(text){
    let cleanedText = text.replace(/[^a-zA-Z0-9 ]/g, '').split(" ")
    let wordCount = 0
    
    for(let i=0; i<cleanedText.length;i++){
      if(cleanedText[i].length > 1 ){
        wordCount++
      }
    }
    return wordCount
    
   }