
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
            <div class="movements__value">${mov}???</div>
        </div>
        `;
        // insertAdjacentHTML ch??? ?????nh 1 ??o???n HTML or XML v?? ch??n v??o trong DOM v???i v??? tr?? ch??? ?????nh
        containerMovements.insertAdjacentHTML('afterbegin',html);
    });
}
// displayMovements(account1.movement);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const calcDisplayBalance = function(movements){
    const balance = movements.reduce((acc,mov)=> acc + mov, 0);
    labelBalance.textContent = `${balance}???`;
};
// calcDisplayBalance(account1.movement);

const calcDisplaySumary = function(acc){
    const incomes = acc.movement
    .filter(mov => mov > 0)
    .reduce((acc, mov)=> acc + mov, 0)
    labelSumIn.textContent = `${incomes}???`;
    const out = acc.movement
    .filter(mov=>mov<0)
    .reduce((acc, mov)=> acc + mov, 0)
    labelSumOut.textContent = `${Math.abs(out)}`;

    const interest = acc.movement
    .filter(mov => mov>0)
    .map(deposit => (deposit*acc.interestRate)/100)
    .filter((int, i, arr)=>{
        console.log(arr);
        return int >=1;
    })
    .reduce((acc, mov)=>acc+mov,0)
    labelSumInterest.textContent = `${interest}???`
}
// calcDisplaySumary(account1);


const createUsernames = function(accs){
    accs.forEach(function(acc){
        acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0] )
        .join('');
    });
};
createUsernames(accout);
console.log(accout);

let currentAccount;

btnLogin.addEventListener('click', function(e){
    e.preventDefault();

    currentAccount = accout.find(
        acc=> acc.username === inputLoginUserName.value
    );
    console.log(currentAccount);
    if(currentAccount?.pin === Number(inputLoginPin.value)){
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = 100;

        //Clear input fields
        inputLoginUserName.value = inputLoginPin.value = ' ';

        //Display movements
        displayMovements(currentAccount.movement);

        //Display balance
        calcDisplayBalance(currentAccount.movement) 

        //Display sumary
        calcDisplaySumary(currentAccount);
    }
})
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
// console.log(arr.slice(2)); // Tr??? v??? 1 m???ng m???i, kh??ng l??m thay ?????i m???ng ban ?????u
// // => Tr??? v??? m???ng m???i x??a m???t 2 ph???n t??? ?????u ti??n c???a m???ng ban ?????u
// // => S??? l???y 2 tr??? ??i 1 l?? ra ch??? s??? index s??? x??a
// console.log(arr.slice(2,4));
// // => Tr??? v??? m???ng m???i l???y index t??? 2 -> 3 ( 4 tr??? 2 = 2 ph???n t??? ???????c l???y)
// console.log(arr.slice(-2));
// console.log(arr.slice(1,-2));
// console.log(arr.slice()); // Tr??? v??? 1 m???ng m???i nh?? m???ng ban ?????u

// // SPLICE 
// // => Tr??? v??? 1 m???ng m???i ???????c c???t ra t??? m???ng c?? v?? l??m thay ?????i m???ng c??
// // console.log(arr.splice(2)); 
// // arr.splice(-1); // => X??a ??i ph???n t??? cu???i c??ng trong m???ng
// // Tham s??? 2: S??? l?????ng ph???n t??? mu???n x??a
// // T??? tham s??? th??? 3 tr??? ??i: Ph???n t??? mu???n th??m v??o
// // console.log(arr); 


// // REVERSE - ?????o ng?????c m???ng v?? l??m thay ?????i lu??n m???ng ban ?????u
// const arr2 = ['j','i','h','g','f'];
// const arr3 = ['a','b','c','d','e'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT - N???i 2 m???ng th??nh 1 m???ng m???i
// const letters = arr3.concat(arr2);
// console.log(letters);
// console.log([...arr3, ...arr2]);

// // JOIN - bi???n m???t m???ng th??nh m???t chu???i thay ?????i m???ng ban ?????u
// console.log(arr2.join());
// console.log(arr2.join(''));
// console.log(arr2.join(' '));
// console.log(arr2.join(','));
// console.log(arr2.join(', '));

// // PUSH - Th??m 1 ph???n t??? v??o cu???i m???ng
// const arr4 = [1,2,3,4,5,6,7,8];
// arr4.push(10);
// console.log(arr4);
// // console.log(arr4.push('c')); // => Tr??? v??? index + 1

// // UNSHIFT - Th??m 1 ph???n t??? v??o ?????u m???ng
// arr4.unshift(4);
// console.log(arr4);

// // POP - L???y ra ph???n t??? ??? cu???i m???ng v?? lo???i b??? kh???i m???ng ban ?????u (M???ng c?? thay ?????i)
// console.log(arr4.pop()); // Tr??? v??? ph???n t??? cu???i c??ng
// console.log(arr4);


// // SHIFT - L???y ra ph???n t??? ??? ?????u m???ng v?? lo???i b??? kh???i m???ng ban ?????u (M???ng c?? thay ?????i)
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


// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//     if(movement > 0){
//         console.log(`Movement ${i + 1}: You deposited ${movement}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//         // Math.abs: Tr??? v??? gi?? tr??? tuy???t ?????i c???a 1 s???
//     }
// }
// console.log('-----------FOREACH------------');
// movements.forEach(function(mov, i, arr) {
//     if(mov > 0){
//         console.log(`Movement ${i + 1}: You deposited ${mov}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//         // Math.abs: Tr??? v??? gi?? tr??? tuy???t ?????i c???a 1 s???
//     }
// });
// Foreach kh??ng ho???t ?????ng v???i continue v?? break
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
//     // Set v???i foreach th?? key ch??nh l?? value
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
//             console.log(`Ch?? s??? ${index + 1} l?? ng?????i l???n v?? ${item} tu???i`);
//        } else {
//             console.log(`Ch?? s??? ${index + 1} v???n l?? ch?? con`);
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


// const deposits = movements.filter(function(mov, i, arr){
//     return mov>0;
// });
// console.log(movements);
// console.log(deposits);

// const depositFor = [];
// for(const mov of movements)if(mov>0)depositFor.push(mov);
// console.log(depositFor);

// const withdrawals = movements.filter(mov => mov<0);
// console.log(withdrawals);
// const ngoc = ['Yeu', 'Huy', 'Mai'];
// const huy = ngoc.filter(ngoc=>ngoc === 'u');
// console.log(huy);
//---------
// const balance = movements.reduce(function(acc, cur, i, arr){
//     console.log(`Interation ${i}: ${acc}`);
//     return acc + cur;
// }, 0);

// const balance = movements.reduce((acc, cur)=> acc + cur, 0);
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements)balance2+=mov;
// console.log(balance2);

// //Maximum value
// const max = movements.reduce((acc, mov)=>{
//     if(acc>mov) return acc;
//     else return mov;
// }, movements[0]);
// console.log(max);

// const eurToUsd = 1.1;
// console.log(movements);

// // PIPELINE
// const totalDespositsUSD = movements
// .filter(mov=>mov>0)
// .map((mov, i, arr)=>{
//     return mov * eurToUsd;
// })
// // .map(mov=> mov * eurToUsd)
// .reduce((acc,mov)=>acc + mov, 0)
// console.log(totalDespositsUSD);


// const firstWWithdrawal = movements.find(mov => mov<0);
// console.log(movements);
// console.log(firstWWithdrawal);

// console.log(accout);

// const account = accout.find(acc=> acc.owner === 'Jessica Davis');
// console.log(account);



















