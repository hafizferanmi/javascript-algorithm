// TASK:  Return an array showing the cumulative sum at each index of an array of integers

const cummulativeIndex = (array) => {
  let total = 0;
  return array.map((value) => {
    total = value + total;
    return total;
  });
};

console.log(cummulativeIndex([2, 3, 6, 44, 6, 7, 54, 3, 23]));
