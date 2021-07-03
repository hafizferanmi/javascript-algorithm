// TASK: Find the largest and smallest number in an unsorted array of integers
const findLargestAndSmallestNumber = (array) => {
  return array.reduce(
    (obj, number) => {
      if (number > obj.largest) {
        return {
          ...obj,
          largest: number,
        };
      } else if (number < obj.smallest) {
        return {
          ...obj,
          smallest: number,
        };
      } else {
        return obj;
      }
    },
    {
      largest: array[0],
      smallest: array[0],
    }
  );
};

console.log(findLargestAndSmallestNumber([20, 2, 50, 30]));
