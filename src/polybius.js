// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // creat 2d array to reference
  const square = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "i", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"],
  ];
  const encodeMapping = {};
  const decodeMapping = {};
  square.forEach((row, y) => {
    row.forEach((char, x) => {
      encodeMapping[char] = `${x + 1}${y + 1}`;
      decodeMapping[`${x + 1}${y + 1}`] = char;
    });
  });
  encodeMapping["j"] = encodeMapping["i"];
  decodeMapping["42"] = `(i/j)`;

  function polybius(input, encode = true) {
    let word = input.toLowerCase();
    let result = "";
    for (let i = 0; i < word.length; i++) {
      // if a space character is encountered add it to the string
      if (word[i] === " ") {
        result += " ";
      } else if (encode) {
        result += encodeMapping[word[i]];
      } else {
        if (word.length < i + 2) {
          return false;
        }
        result += decodeMapping[word.slice(i, i + 2)];
        i++;
      }
    }
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
