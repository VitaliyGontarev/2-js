function findLongestWord(string = ' ') {
  // Write code under this line
  let stringSplit = string.split(' ');
  let longWord = '';

  for (const word of stringSplit) {
    if (word.length > longWord.length) {
      longWord = word;
    }
  }
  return longWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
