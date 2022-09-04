// Instruction ->
// Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string,
// the longest possible, containing distinct letters -
// each taken only once - coming from s1 or s2.

// Example ->
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// Pseudocode ->

// Code ->

function longest(s1, s2) {
    // your code
    let s = s1.concat(s2);
    let splitS = s.split('');
    let uniqueSplitS = splitS.filter((letter, index) => {
      return splitS.indexOf(letter) === index;
    });
    let uniqueS = uniqueSplitS.sort().join('');
    console.log('sorted and filtered', uniqueS);
    return uniqueS;
  }

  console.log('First Test In Js File ->',longest('aretheyhere', 'yestheyarehere'))
  console.log('Second ->',longest('loopingisfunbutdangerous', 'lessdangerousthancoding'))

  module.exports = longest;