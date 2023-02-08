
const account1 = {
    owner: 'Jonas Schmedtmann',
    movement: [200,450,-400,3000,-650,-130,70,1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movement: [5000,3400,-150,-790,-3210,-1000,8500,-30],
    interestRate: 1.5, // %
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movement: [200,-200,340,-300,-20,50,400,-460],
    interestRate: 0.7, // %
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movement: [430,1000,700,50,90],
    interestRate: 1, // %
    pin: 4444,
};

const accout = [account1,account2,account3,account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance= document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn-sort');
const inputLoginUserName = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmout = document.querySelector('.form__input--amount');
const inputLoanAmout = document.querySelector('.form__input--loan-amount');
const inputCloseUserName = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


// Creating DOM elements
const displayMovements = function(movements) {
    containerMovements.innerHTML = '';
    movements.forEach(function(mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
            <div class="movements__value">${mov}</div>
        </div>
        `;
        // insertAdjacentHTML chỉ định 1 đoạn HTML or XML và chèn vào trong DOM với vị trí chỉ định
        containerMovements.insertAdjacentHTML('afterbegin',html);
    });
}
displayMovements(account1.movement);

// const createUsernames = function(accs){
//     accs.forEach(function(acc){
//         acc.username = acc.owner
//         .toLowerCase()
//         .split(' ')
//         .map(name => name[0] )
//         .join('');
//     });
// };
// createUsernames(accout);
// console.log(accout);
// -------------------------------------------------------------------



///// LECTURES
// const currencies = new Map([
//     ['USD','United States dollar'],
//     ['EUR','Euro'],
//     ['GBP','Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

///////////////////////////////////////////////////////////////////////

// --------------------------------------------------------------------
// // Simple Array Mehthods

// let arr = ['a','b','c','d','e'];

// // SLICE
// console.log(arr.slice(2)); // Trả về 1 mảng mới, không làm thay đổi mảng ban đầu
// // => Trả về mảng mới xóa mất 2 phần tử đầu tiên của mảng ban đầu
// // => Sẽ lấy 2 trừ đi 1 là ra chỉ số index sẽ xóa
// console.log(arr.slice(2,4));
// // => Trả về mảng mới lấy index từ 2 -> 3 ( 4 trừ 2 = 2 phần tử được lấy)
// console.log(arr.slice(-2));
// console.log(arr.slice(1,-2));
// console.log(arr.slice()); // Trả về 1 mảng mới như mảng ban đầu

// // SPLICE 
// // => Trả về 1 mảng mới được cắt ra từ mảng cũ và làm thay đổi mảng cũ
// // console.log(arr.splice(2)); 
// // arr.splice(-1); // => Xóa đi phần tử cuối cùng trong mảng
// // Tham số 2: Số lượng phần tử muốn xóa
// // Từ tham số thứ 3 trở đi: Phần tử muốn thêm vào
// // console.log(arr); 


// // REVERSE - Đảo ngược mảng và làm thay đổi luôn mảng ban đầu
// const arr2 = ['j','i','h','g','f'];
// const arr3 = ['a','b','c','d','e'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT - Nối 2 mảng thành 1 mảng mới
// const letters = arr3.concat(arr2);
// console.log(letters);
// console.log([...arr3, ...arr2]);

// // JOIN - biến một mảng thành một chuỗi thay đổi mảng ban đầu
// console.log(arr2.join());
// console.log(arr2.join(''));
// console.log(arr2.join(' '));
// console.log(arr2.join(','));
// console.log(arr2.join(', '));

// // PUSH - Thêm 1 phần tử vào cuối mảng
// const arr4 = [1,2,3,4,5,6,7,8];
// arr4.push(10);
// console.log(arr4);
// // console.log(arr4.push('c')); // => Trả về index + 1

// // UNSHIFT - Thêm 1 phần tử vào đầu mảng
// arr4.unshift(4);
// console.log(arr4);

// // POP - Lấy ra phần từ ở cuối mảng và loại bỏ khỏi mảng ban đầu (Mảng cũ thay đổi)
// console.log(arr4.pop()); // Trả về phần tử cuối cùng
// console.log(arr4);


// // SHIFT - Lấy ra phần tử ở đầu mảng và loại bỏ khỏi mảng ban đầu (Mảng cũ thay đổi)
// console.log(arr4.shift());
// console.log(arr4);

// --------------------------------------------------------------------

// // The new at method
// const arr = [23,33,55];
// console.log(arr[0]);
// console.log(arr.at(0));

// // Getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1));
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('jonas'.at(-1));

// --------------------------------------------------------------------

// Looping arrays: Foreach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//     if(movement > 0){
//         console.log(`Movement ${i + 1}: You deposited ${movement}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//         // Math.abs: Trả về giá trị tuyệt đối của 1 số
//     }
// }
// console.log('-----------FOREACH------------');
// movements.forEach(function(mov, i, arr) {
//     if(mov > 0){
//         console.log(`Movement ${i + 1}: You deposited ${mov}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//         // Math.abs: Trả về giá trị tuyệt đối của 1 số
//     }
// });
// Foreach không hoạt động với continue và break
// -------------------------------------------------------------------

// // Foreach with maps and sets
// // MAP
// const currencies = new Map([
//     ['USD','United States dollar'],
//     ['EUR','Euro'],
//     ['GBP','Pound sterling'],
// ]);
// currencies.forEach(function(value, key, map){
//     console.log(`${key}: ${value}`);
// });

// // SET
// const currenciesUnique = new Set(['USD','EUR','GBP','USD','EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value, _, map){
//     // Set với foreach thì key chính là value
//     console.log(`${value}: ${value}`);
// });

// -------------------------------------------------------------------

// Project: "Bankist" App

// -------------------------------------------------------------------

// // Coding Challenge #1

// const checkDog = function(dogsJulia, dogsKate){
//     const dogsCorreted = [...dogsJulia];
//     dogsCorreted.splice(0,2);
//     dogsCorreted.splice(-2);
//     const dogs = dogsCorreted.concat(dogsKate);
//     dogs.forEach(function(item, index){
//        if(item >= 3){
//             console.log(`Chó số ${index + 1} là người lớn và ${item} tuổi`);
//        } else {
//             console.log(`Chó số ${index + 1} vẫn là chó con`);
//        }
//     });
// };
// checkDog([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDog([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// -------------------------------------------------------------------

// Data Transfomations: Map, filter, reduce

// -------------------------------------------------------------------


// const checkDogs = function(dogJulia, dogsKate){
//     const dogJuliaCorrect = dogJulia.slice();
//     dogJuliaCorrect.splice(0,1);
//     dogJuliaCorrect.splice(-2);
//     //dogJuliaCorect.splice(1,3);
//     const dogs = dogJuliaCorrect.concat(dogsKate);
//     console.log(dogs);

//     dogs.forEach(function(dog,i){
//         if(dog>=3){
//             console.log(`Dog number ${i + 1} is an adult, and is ${dog} year old`);
//         }else{
//             console.log(`Dog number ${i + 1} iss still a puppy icondog`);
//         }
//     });
// };
// // checkDogs([3,5,2,12,7],[4,1,15,8,3]);
// checkDogs([9,16,6,8,3],[10,5,6,1,4]);

// const eurToUsd = 1.1;
// // const movementsUSD = movements.map(function(mov){
// //     return mov + eurToUsd;
// // });
// const movementsUSD = movements.map(mov=> mov*eurToUsd);
// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for(const mov of movements)movementsUSDfor.push(mov* eurToUsd);
// console.log(movementsUSDfor);

// const movementDescription = movements.map(
//     (mov,i)=>`Movement ${i+1}: You ${mov>0?'deposited':'withdrew'} ${Math.abs(mov)}`
// ) ;
// console.log(movementDescription);


const deposits = movements.filter(function(mov, i, arr){
    return mov>0;
});
console.log(movements);
console.log(deposits);

const depositFor = [];
for(const mov of movements)if(mov>0)depositFor.push(mov);
console.log(depositFor);

const withdrawals = movements.filter(mov => mov<0);
console.log(withdrawals);
const ngoc = ['Yeu', 'Huy', 'Mai'];
const huy = ngoc.filter(ngoc=>ngoc === 'u');
console.log(huy);




















