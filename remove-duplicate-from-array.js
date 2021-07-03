// TASK: Remove all duplicates from an array of integers

const removeDuplicatesFromArray = (array) => {
  let newArray = [];
  array.forEach((element) => {
    if (!newArray.includes(element)) {
      newArray = newArray.concat(element);
    }
  });
  return newArray;
};

console.log(
  removeDuplicatesFromArray([1, 2, 7, 9, 3, 1, 2, 4, 5, 6, 3, 2, 4, 5, 6])
);
