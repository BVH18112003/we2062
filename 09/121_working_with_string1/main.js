'use strict';
const openingHours =  {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close:23,
    },
    sat: {
        open: 0,
        close: 24,
    },
};
const resataurant ={
    name: 'Huy',
    location: 'Tan Minh, Thuong Tin, Ha Noi, VietNam',
    categories: ['Italian', 'Pizzeria', 'Vegertarian','Oraganic'],
    starterMenu: ['Banh Mi', 'Salad', 'Pudding'],
    mainMenu: ['Pho', 'BunCha', 'ComSuon'],
    // kí tự đối tượng nâng cao ES6
    openingHours,
    // order : function(starterIndex, mainMenuIndex){
    //     return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]]
    // }, Viết hàm ko cần funcition
    order(starterIndex, mainMenuIndex){
             return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]]
         },
    orderDeliry({starterIndex = 1, mainIndex = 2, time = '20:00', address}){
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderComga(ing1, ing2, ing3){
        console.log(`Here is your declicious comga with ${ing1}, ${ing2}, ${ing3} `);
    },
    orderBanhmi(mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(...otherIngredients);
    },
    
};
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0])
console.log(plane[1])
console.log(plane[2])
console.log('B373'[0]);

console.log(airline.length);
console.log('B373'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('porturgal'));

console.log(airline.slice(4));
console.log(airline.slice(4,7));

console.log(airline.slice(0, airline.indexOf('')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1,-1));

const checkMiddleSeat = function(seat){
    // B và E are middle seats
    const s = seat.slice(-1);
    if(s=== 'B'|| s ==='E')console.log('You got the middle seat');
    else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Huy'));
console.log(typeof new String('Huy'));

console.log(typeof new  String('Huy').slice(1));