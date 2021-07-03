const array = [1, 2, 3, 5, 6, 7, 4, 5, 6, 6, 7, 7];

const insertElementIntoIndex = (array = [], element, index) => {
  if (!array[index]) return array;
  return [...array.slice(0, index), element, ...array.slice(index)];
};

conssole.log(insertElementIntoIndex(array, "b", 5)); // Inserts b in index 5 of array
