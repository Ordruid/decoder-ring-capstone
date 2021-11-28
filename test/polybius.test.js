// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() tests written by brian hobby.", () => {
  it("polybius() should be a function", () => {
    expect(typeof polybius).to.equal("function");
  });
  it("should ignore capital letters", () => {
    const message = "A Message";
    const actual = polybius(message);
    const expected = "11 23513434112251";

    expect(actual).to.equal(expected);
  });
  it("should encode a message by translating each letter to number pairs", () => {
    const message = "hello";
    const actual = polybius(message);
    const expected = "3251131343";

    expect(actual).to.equal(expected);
  });

  it("should translate both 'i' and 'j' to 42", () => {
    const message = "squid jump";
    const actual = polybius(message);
    const expected = "3414544241 42542353";

    expect(actual).to.equal(expected);
  });

  it("should leave spaces as is", () => {
    const message = "hello there";
    const actual = polybius(message);
    const expected = "3251131343 4432512451";

    expect(actual).to.equal(expected);
  });
});

describe("decoding a message", () => {
  it("should decode a message by translating each pair of numbers into a letter", () => {
    const message = "3251131343";
    const actual = polybius(message, false);
    const expected = "hello";

    expect(actual).to.equal(expected);
  });

  it("should translate 42 to both 'i' and 'j'", () => {
    const message = "424222221351";
    const actual = polybius(message, false);

    expect(actual).to.include("i");
    expect(actual).to.include("j");
  });

  it("should leave spaces as is", () => {
    const message = "22513351241113 525133432142";
    const actual = polybius(message, false);
    const expected = "general kenob(i/j)";

    expect(actual).to.equal(expected);
  });

  it("should return false if the length of all numbers is odd", () => {
    const message = "123456789";
    const actual = polybius(message, false);

    expect(actual).to.be.false;
  });
});
