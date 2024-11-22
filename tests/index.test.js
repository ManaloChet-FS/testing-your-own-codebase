const { sumOfArray, reverseString, isPalindrome, findMax } = require("../dist/main");

describe("sumOfArray function testing", () => {
  test('Throws an error if input is not array', () => {
    expect(() => sumOfArray(-1)).toThrow(Error);
  })
  
  test('Throws an error on an empty array', () => {
    expect(() => sumOfArray([])).toThrow(Error);
  })
  
  test('Throws an error on non-number in array', () => {
    expect(() => sumOfArray([1, "b", 3])).toThrow(Error);
  })

  test('Gets the sum of an array containing 5, 9, 10, 12 to equal 36', () => {
    expect(sumOfArray([5, 9, 10, 12])).toBe(36);
  })
})

describe("reverseString function testing", () => {
  test('Throws an error if input is not a string', () => {
    expect(() => reverseString(2)).toThrow(Error);
  })

  test('Throws an error on an empty string', () => {
    expect(() => reverseString("")).toThrow(Error);
  })

  test('Throws an error on a string full of white space', () => {
    expect(() => reverseString("       ")).toThrow(Error);
  })

  test('Returns "!dlroW olleH" when "Hello World!" is the input.', () => {
    expect(reverseString("Hello World!")).toBe("!dlroW olleH");
  })
})

describe("isPalindrome function testing", () => {
  test('Throws an error if input is not a string', () => {
    expect(() => reverseString(2)).toThrow(Error);
  })

  test('Throws an error on an empty string', () => {
    expect(() => reverseString("")).toThrow(Error);
  })

  test('Comes back true when "racecar" is inputted.', () => {
    expect(isPalindrome("racecar")).toBeTruthy();
  })

  test('Comes back false when "apple" is inputted.', () => {
    expect(isPalindrome("apple")).toBeFalsy();
  })
})

describe('findMax function testing', () => {
  test('Throws an error is array is not inputted', () => {
    expect(() => sumOfArray(-1)).toThrow(Error);
  })

  test('Throws an error on an empty array', () => {
    expect(() => findMax([])).toThrow(Error);
  })

  test('Throws an error on non-number in array', () => {
    expect(() => findMax([43, 22, "a", 100])).toThrow(Error);
  })

  test("Returns 97 from array containing 12, 30, 97, 1", () => {
    expect(findMax([12, 30, 97, 1])).toBe(97);
  })
})