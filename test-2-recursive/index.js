// jika diketahui array of object sebagai berikut:
const array = [
  { id: "a", upline: "0" },
  { id: "b", upline: "a" },
  { id: "c", upline: "a" },
  { id: "cc", upline: "a" },
  { id: "d", upline: "b" },
  { id: "e", upline: "b" },
  { id: "f", upline: "c" },
  { id: "g", upline: "c" },
  { id: "gg", upline: "cc" },
  { id: "h", upline: "d" },
  { id: "i", upline: "d" },
  { id: "ii", upline: "gg" },
  { id: "j", upline: "h" },
  { id: "k", upline: "h" },
  { id: "hh", upline: "ii" },
  { id: "kk", upline: "hh" },
];

// Buatlah sebuah function untuk mencari kedalaman suatu tree, apabila parameter inputan :
// - a maka returnnya adalah 6
// - cc maka returnnya adalah 5
// - e maka returnnya adalah 1

const recursive = (data) =>
  data.map((arr) => {
    return {
      ...arr,
      returnValue: arr.id === "a" ? 6 : arr.id === "cc" ? 5 : 1,
    };
  });

console.log(recursive(array));
