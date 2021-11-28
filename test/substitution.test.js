// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() tests written by brian hobby.", () => {
  it("substitution() should be a function", () => {
    expect(typeof substitution).to.equal("function");
  });
  it("should ignore capital letters", () => {
    const input = "Hello";
    const alphabet = "qwertyuiopasdfghjklzxcvbnm";
    const actual = substitution(input, alphabet);
    const expected = "itssg";

    expect(actual).to.equal(expected);
  });
  it("should return false if the substitution alphabet is missing", () => {
    const message = "hello";
    const actual = substitution(message);
    expect(actual).to.be.false;
  });

  it("should return false if the substitution alphabet is not exactly 26 characters", () => {
    const message = "hello";
    const alphabet = "qwerty";
    const actual = substitution(message, alphabet);
    expect(actual).to.be.false;
  });

  it("should return false if the substitution alphabet does not contain unique characters", () => {
    const message = "hello";
    const alphabet = "aabbccddeeffgghhiijjkkllmm";
    const actual = substitution(message, alphabet);
    expect(actual).to.be.false;
  });
});

describe("encoding a message", () => {
  it("should encode a message by using the given substitution alphabet", () => {
    const message = "hello";
    const alphabet = "plmoknijbuhvygctfxrdzeswaq";
    const actual = substitution(message, alphabet);
    const expected = "jkvvc";

    expect(actual).to.equal(expected);
  });

  it("should work with any kind of key with unique characters", () => {
    const message = "a hello";
    const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
    const actual = substitution(message, alphabet);
    const expected = ". dsccv";

    expect(actual).to.equal(expected);
  });

  it("should preserve spaces", () => {
    const message = "a hello";
    const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
    const actual = substitution(message, alphabet);
    const expected = ". dsccv";

    expect(actual).to.equal(expected);
  });
});

describe("decoding a message", () => {
  it("should decode a message by using the given substitution alphabet", () => {
    const message = "jkvvc";
    const alphabet = "plmoknijbuhvygctfxrdzeswaq";
    const actual = substitution(message, alphabet, false);
    const expected = "hello";

    expect(actual).to.equal(expected);
  });

  it("should work with any kind of key with unique characters", () => {
    const message = ". dsccv";
    const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
    const actual = substitution(message, alphabet, false);
    const expected = "a hello";

    expect(actual).to.equal(expected);
  });

  it("should preserve spaces", () => {
    const message = ". dsccv";
    const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
    const actual = substitution(message, alphabet, false);
    const expected = "a hello";

    expect(actual).to.equal(expected);
  });
});
