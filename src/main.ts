const sumOfArray = (arr: number[]): number | undefined => {
  // Checks if input isn't an array
  if (!Array.isArray(arr)) {
    throw new Error("Input must be array!");
  }

  // Checks length of array to see if its empty
  if (arr.length === 0) {
    throw new Error("Input cannot be empty!");
  }

  // Checks if every item in the array is a valid number
  if (!arr.every((item) => typeof item === "number" && !isNaN(item))) {
    throw new Error("Please check that inputted array only has numbers and try again.");
  }

  // Returns the sum of the array
  return arr.reduce((total, currentValue) => total + currentValue, 0);
}

const reverseString = (str: string): string => {
  // Gets rid of leading and trailing spaces
  str = str.trim();

  // Checks if input isn't a string
  if (typeof str !== "string") {
    throw new Error("Input must be a string!");
  }

  // Checks if string is empty
  if (str.length === 0) {
    throw new Error("Input cannot be empty!");
  }

  // Returns the reversed string
  return str.split("").reverse().join("");
}

const isPalindrome = (str: string): boolean => {
  // Gets rid of leading and trailing spaces and sets string to lowercase
  str = str.trim().toLowerCase();

  // Checks if input isn't a string
  if (typeof str !== "string") {
    throw new Error("Input must be a string!");
  }

  // Checks if string is empty
  if (str.length === 0) {
    throw new Error("Input cannot be empty!");
  }

  // Loops through string half its length
  for (let i = 0; i < str.length / 2; i++) {
    // Compares first half of string with last half of string
    if (str[i] !== str[str.length - 1 - i]) {
      // If comparison fails, returns false
      return false;
    }
  }

  // If first and last halves match, return true
  return true;
}

const findMax = (arr: number[]): number => {
  // Checks if input isn't an array
  if (!Array.isArray(arr)) {
    throw new Error("Input must be array!");
  }

  // Checks if array is empty
  if (arr.length === 0) {
    throw new Error("Input cannot be empty!");
  }

  // Checks if every item in the array is a valid number
  if (!arr.every((item) => typeof item === "number" && !isNaN(item))) {
    throw new Error("Please check that inputted array only has numbers and try again.");
  }

  // Returns the biggest number in the array
  return Math.max(...arr);
}

module.exports = {
  sumOfArray,
  reverseString,
  isPalindrome,
  findMax
}