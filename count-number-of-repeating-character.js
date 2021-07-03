const countNumberOfRepeatingCharacters = (string) => {
  return string.split("").reduce(
    (counterObject, character) => ({
      ...counterObject,
      [character]: counterObject[character] ? counterObject[character] + 1 : 1,
    }),
    {}
  );
};

const string = "aaaadddkgggiititiyiyihiiityitbbmdfduotuu";
console.log(countNumberOfRepeatingCharacters(string));
