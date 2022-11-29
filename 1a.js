// 1.a. Write a function which count the number of occurrence of words 
// in a paragraph or a sentence.The function countWords takes a paragraph and 
// two words as parameters. It compare which word is most frequently occurred in the paragraph.

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';

function countWords(p, word1, word2) {
    let para = p.toLowerCase().split(" ");
    let firstWord = word1.toLowerCase();
    let secondWord = word2.toLowerCase();
    
    let firstWordCount = 0;
    let secondWordCount = 0;
  
    for (let i = 0; i < para.length; i++) {
        if (para[i] === firstWord) {
        firstWordCount++;
    }
    if (para[i] === secondWord) {
        secondWordCount++;
    }
    }
  
    if (firstWordCount > secondWordCount) {
      return `The word "${word1}" (${firstWordCount} times) occured more frequently than "${word2}" (${secondWordCount} times)`;
    }
    if (secondWordCount > firstWordCount) {
      return `The word "${word2}" (${secondWordCount} times) occured more frequently than "${word1}" (${firstWordCount} times)`;
    }
    if (secondWordCount === firstWordCount) {
      return `The word "${word2}" and "${word1}" occured in same number i.e ${secondWordCount} times`;
    }
  }
  
console.log(countWords(paragraph,'love', 'you'));