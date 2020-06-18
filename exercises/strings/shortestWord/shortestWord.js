/**
 * Given an input string, returns the shortest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The shortest word in the input string
 */

function shortestWord(string) {
 
  
  let words = string.split(' ');
  let shortestSoFar = words[0];
  
  for (let word of words) {
    if (word.length < shortestSoFar.length) {
      shortestSoFar = word;
    }
  }

  return shortestSoFar
}

if (require.main === module) {
  console.log('Running sanity checks for shortestWord:');
  console.log(shortestWord('You are a rockstar'));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = shortestWord;
