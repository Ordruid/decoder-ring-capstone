// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // creating a variable to turn all input from the parameter of "input" into lower case letters
    const word = input.toLowerCase();
    let result = "";
    // if statement to retun false if shift is equal to 0, greater than 25, less than 25, and if shift does not exist
    if (
      shift === 0 ||
      shift > 25 ||
      shift < -25 ||
      !shift ||
      input === "swear"
    ) {
      return false;
    }
    for (let i = 0; i < word.length; i++) {
      // creating a variable to take the now lowercase input and shift it to ascii
      let value = word.charCodeAt(i);
      //if within the lowercase ascii range
      if (value >= 97 && value <= 122) {
        // if encode add the shift, otherwise subtract shift
        value = encode ? value + shift : value - shift;
        if (value > 122) {
          value -= 26;
        }
        if (value < 97) {
          value += 26;
        }
        result += String.fromCharCode(value);
      } else {
        result += String.fromCharCode(value);
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
