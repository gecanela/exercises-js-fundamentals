/**
 * Given an input string and a character replacement dictionary, replaces every
 * character found as a key in the dictionary with the corresponding value.
 *
 * @example
 * replaceCharacters('hello', { 'h': 'y', 'l': '8' }); // => 'ye88o'
 *
 * @param {string} string - The string to replace a character in
 * @param {object} replacementDict - The replacement dictionary
 * @returns {string} A copy of the input string with the appropriate
 *   letters replaced according to replacementDict
 */

function replaceCharacters(string, replacementDict) {
  // This is your job. :)
  let replaceString = ""
  for (let i of string) {
    if (i in replacementDict){
      replaceString = replaceString + replacementDict[i];
    } else {
      replaceString = replaceString + i
    }
   
  }
  return replaceString
} 

if (require.main === module) {
  console.log('Running sanity checks for replaceCharacters:');
  console.log(replaceCharacters('hello', { 'h' : 'y', 'l': '8'}))


  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = replaceCharacters;
