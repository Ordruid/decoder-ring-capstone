// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  // create correct alphabet to reference
  const Alph = "abcdefghijklmnopqrstuvwxyz";
  let alphabetEncode = {};
  let alphabetDecode = {};
  function substitution(input, alphabet, encode = true) {
    let word = input.toLowerCase();
    let result = "";
    //if the alphabet does not exist or is not 26 characters in length return false
    if (!alphabet || alphabet.length != 26) {
      return false;
    }
    for (let i = 0; i < alphabet.length; i++) {
      //If the alphabet contains any non-unique characters return false
      if (alphabet.indexOf(alphabet[i]) != alphabet.lastIndexOf(alphabet[i])) {
        return false;
      }
    }
    //splits each letter in the alpahbet and creates a character and place.
    Alph.split("").forEach((char, x) => {
      alphabetEncode[char] = alphabet[x];
      alphabetDecode[alphabet[x]] = char;
    });
    if (encode) {
      return word
        .split("")
        .map((char) => alphabetEncode[char] || char)
        .join("");
    } else {
      return word
        .split("")
        .map((char) => alphabetDecode[char] || char)
        .join("");
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
