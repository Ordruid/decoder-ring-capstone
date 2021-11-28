// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() tests written by brian hobby.", () => {
  it("should return false if the shift doesn't exist", () => {
    const message = "hello";
    const shift = null;
    const actual = caesar(message, shift);

    expect(actual).to.be.false;
  });
  it("message should not contain swear word", () => {
    const message = "swear";
    const shift = 0;
    const actual = caesar(message, shift);

    expect(actual).to.be.false;
  });
  it("input should be a string", () => {
    const message = "hello";
    const shift = 3;
    const actual = caesar(message, shift);

    expect(typeof actual).to.equal("string");
  });
  it("caesar should be a function", () => {
    expect(typeof caesar).to.equal("function");
  });
  it("should return false if the shift amount is 0", () => {
    const message = "hello";
    const shift = 0;
    const actual = caesar(message, shift);

    expect(actual).to.be.false;
  });

  it("should return false if the shift amount is above 25", () => {
    const message = "hello";
    const shift = 30;
    const actual = caesar(message, shift);

    expect(actual).to.be.false;
  });

  it("should return false if the shift amount is less than -25", () => {
    const message = "hello";
    const shift = -30;
    const actual = caesar(message, shift);

    expect(actual).to.be.false;
  });
});

describe("encoding a message", () => {
  it("should encode a message by shifting the letters", () => {
    const message = "hello";
    const shift = 3;
    const actual = caesar(message, shift);
    const expected = "khoor";

    expect(actual).to.equal(expected);
  });

  it("should leaves spaces and other symbols as is", () => {
    const message = "a cat.";
    const shift = 3;
    const actual = caesar(message, shift);
    const expected = "d fdw.";

    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const message = "A Cat";
    const shift = 3;
    const actual = caesar(message, shift);
    const expected = "d fdw";

    expect(actual).to.equal(expected);
  });

  it("should appropriately handle letters at the end of the alphabet", () => {
    const message = "zed";
    const shift = 3;
    const actual = caesar(message, shift);
    const expected = "chg";

    expect(actual).to.equal(expected);
  });

  it("should allow for a negative shift that will shift to the left", () => {
    const message = "a cat";
    const shift = -3;
    const actual = caesar(message, shift);
    const expected = "x zxq";

    expect(actual).to.equal(expected);
  });
});

describe("decoding a message", () => {
  it("should decode a message by shifting the letters in the opposite direction", () => {
    const message = "d fdw";
    const shift = 3;
    const actual = caesar(message, shift, false);
    const expected = "a cat";

    expect(actual).to.equal(expected);
  });

  it("should leaves spaces and other symbols as is", () => {
    const message = "d fdw.";
    const shift = 3;
    const actual = caesar(message, shift, false);
    const expected = "a cat.";

    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const message = "D Fdw";
    const shift = 3;
    const actual = caesar(message, shift, false);
    const expected = "a cat";

    expect(actual).to.equal(expected);
  });

  it("should appropriately handle letters at the end of the alphabet", () => {
    const message = "chg";
    const shift = 3;
    const actual = caesar(message, shift, false);
    const expected = "zed";

    expect(actual).to.equal(expected);
  });

  it("should allow for a negative shift that will shift to the left", () => {
    const message = "x zxq";
    const shift = -3;
    const actual = caesar(message, shift, false);
    const expected = "a cat";

    expect(actual).to.equal(expected);
  });
});
