//Contoh penggunaan spread operator pada array:
const numbers = [1, 2, 3, 4, 5];
const copyOfNumbers = [...numbers];
const combinedNumbers = [...numbers, 6, 7, 8];

console.log(copyOfNumbers); // [1, 2, 3, 4, 5]
console.log(combinedNumbers); // [1, 2, 3, 4, 5, 6, 7, 8]

//Contoh penggunaan spread operator pada objek:
const person = { name: "John", age: 30 };
const copyOfPerson = { ...person, location: "USA" };

console.log(copyOfPerson); // { name: 'John', age: 30, location: 'USA' }

//Contoh penggunaan rest operator pada array:
const filter = (...args) => {
  return args.filter((el) => el === 3);
};

console.log(filter(1, 2, 3)); // [1]

const numbers1 = [1, 2, 3, 4, 5];
const [first, second, ...rest1] = numbers1;

console.log(first); // 1
console.log(second); // 2
console.log(rest1); // [3, 4, 5]

//Contoh penggunaan rest operator pada objek:
const person1 = { nama: "John", age: 30, location: "USA", gender: "Male" };
const { nama, ...rest } = person1;

console.log(nama); // John
console.log(rest); // { age: 30 }
