// TASK: Find the missing number in a given integer array of 1 to 100

const array = [1, 2, 4, 5, 6, 7, 8, 9];

const findMissingNumber = (array) => {
  let missingNumber;
  const lastElement = array[array.length - 1];
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const expectedNext = current + 1;
    const next = array[i + 1];
    if (expectedNext !== next && expectedNext <= lastElement) {
      missingNumber = expectedNext;
      break;
    }
  }

  return missingNumber;
};

console.log(findMissingNumber(array));
