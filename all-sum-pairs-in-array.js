// TASK: Find all pairs in an array of integers whose sum is equal to a given number

const findAllPairsInArray = (array, sum) => {
  let pairs = [];
  for (let index = 0; index < array.length; index++) {
    const number1 = array[index];
    for (let j = 0; j < array.length; j++) {
      const number2 = array[j];
      if (number1 + number2 === sum) {
        pairs = [...pairs, [number1, number2]];
      }
    }
  }
  return pairs;
};

console.log(findAllPairsInArray([1, 5, 6, 1, 0, 1], 6));
