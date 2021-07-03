// TASK: Find all duplicate numbers in an array with multiple duplicates

const findMultipleDuplicate = (array) => {
  let newArray = [];
  let duplicates = [];

  array.forEach((number) => {
    if (newArray.includes(number) && !duplicates.includes(number)) {
      duplicates = duplicates.concat(number);
    } else {
      newArray = newArray.concat(number);
    }
  });

  return duplicates;
};

console.log(
  findMultipleDuplicate([1, 1, 2, 4, 5, 6, 7, 6, 1, 2, 3, 4, 3, 2, 3])
);
