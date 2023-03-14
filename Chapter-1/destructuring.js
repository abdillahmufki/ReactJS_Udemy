/*
Destructuring adalah fitur JavaScript yang memungkinkan kita untuk 
"mendestruksi" (mengurai) nilai array atau objek ke dalam variabel 
terpisah. Dengan destructuring, kita dapat menyingkat kode dan 
membuatnya lebih mudah dibaca.

*/
//Contoh destructuring pada array:
const numbers = [1, 2, 3, 4, 5];
const [first, second, , fourth] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(fourth); // 4

/*
Dalam contoh di atas, kita mendestruksi array 
numbers ke dalam variabel first, second, dan fourth. 
Tanda koma kosong digunakan untuk mengabaikan 
elemen ketiga pada array.
*/

//Contoh destructuring pada objek:
const person = { nama: "Asep", age: 22, location: "Bandung" };
const { nama, age, location } = person;

console.log(JSON.stringify(person));

/*
Kita juga dapat menggunakan destructuring pada parameter fungsi, 
sehingga kita dapat dengan mudah mengambil nilai dari objek atau array 
yang dikirimkan sebagai argumen fungsi.
*/

//Contoh destructuring pada parameter fungsi:
const printPerson = ({ nama, age, location }) => {
  console.log(
    `Nama saya adalah ${nama}, umur saya ${age}, dan saya tinggal di ${location}`
  );
};

printPerson(person);
