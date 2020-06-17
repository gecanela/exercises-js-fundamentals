/**
 * Given an input string, returns the longest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The longest word in the input string
 */

function longestWord(string) {
  // This is your job. :)

  var str = string.split(' ')
  var findLongest = 0; //variable that stores the length of the longest word as it goes through the loop 
  for (var i = 0; i < str.length; i++){
    if(str[i].length > findLongest){
      findLongest = str[i].length
      word= str[i]
    }
  }
  return word
}

if (require.main === module) {
  console.log('Running sanity checks for longestWord:');
  console.log(longestWord('You are a rockstar'))

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = longestWord;
