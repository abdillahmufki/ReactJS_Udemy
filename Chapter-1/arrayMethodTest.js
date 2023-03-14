// Description: Test array methods
function transformToObjects(numberArray) {
  // Todo: Add your logic
  const obj = numberArray.map((number) => {
    return { val: number };
  });
  return obj;
  // should return an array of objects
}

const number = [1, 2, 3];
console.log(transformToObjects(number));
