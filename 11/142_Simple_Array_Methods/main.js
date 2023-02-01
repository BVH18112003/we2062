const account1 = {
  owner: 'Jonas Schmedtmann',
  movements:[200, 450, -400, 3000, -650, -130, 70, 1300],
  interesRate: 1.2,//%
  pin:111,
};
const account2 = {
  owner: 'Bui Van Huy',
  movements:[2000, 450, -400, 3000, -650, -190, 70, 1000],
  interesRate: 1.5,//%
  pin: 2222,
};
const account3 = {
  owner: 'Nguyen Nhu Ngoc',
  movements:[2000, 450, -4000, 300, -650, -1900, 170, 1000],
  interesRate: 0.7,//%
  pin: 3333,
};
const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

///
let arr = ['a', 'b', 'c', 'd', 'e'];
//Slice
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1,-2));
console.log(arr.slice());
console.log(...arr);

//Splice
// console.log(arr.slice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1,2);
console.log(arr);
// Reverse
arr = ['a', 'b', 'c','d', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);
//Concat
const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr, ...arr2);
// Join
console.log(letters.join('-'));