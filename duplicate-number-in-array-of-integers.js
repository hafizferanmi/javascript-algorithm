// TASK: Find a duplicate number in an array of integers

const findDuplicateInArray = (array) => {
  let newArray = [];
  let duplicate;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (newArray.includes(element)) {
      duplicate = element;
      break;
    } else {
      newArray = newArray.concat(element);
    }
  }
  return duplicate;
};

console.log(findDuplicateInArray([1, 1, 2, 2, 5, 5, 6, 3]));
