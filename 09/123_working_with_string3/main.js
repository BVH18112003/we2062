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
//split
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName]= 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);
const capitalizeName = function(name){
    const names = name.split(' ');
    const nameUpper = [];
    for(const n of names){
        // nameUpper.push(n[0].toUpperCase() + n.slice(1));
        nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(nameUpper.join(' '));
}
capitalizeName('jesssica ann smith davis');
capitalizeName('jonas schmedtmann');

//Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20,'+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30,'+'));

const maskCreditCard = function(number){
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length,'*');
};
console.log(maskCreditCard(1820112003));
console.log(maskCreditCard(2018112003));
//repeat
const message2 = 'Bad weather... All Departues Delayed... ';
console.log(message2.repeat(2));

const planeInLine = function(n){
    console.log(`There are ${n} planes in line ${'plane '.repeat(n)}`);
};
planeInLine(2);
planeInLine(6);


// const airline = 'TAP Air Portugal';
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// // Fix capitalization in name
// const pasenger = 'jOnAS';
// const pasengerLower = pasenger.toLowerCase();
// const pasengerCorrect =
// pasengerLower[0].toUpperCase() + pasengerLower.slice(1);
// console.log(pasengerCorrect);
// // Comparing emails
// const email = 'hello@huy.io';
// const loginEmail = '  Hello@huy.io \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmeedEmail = lowerEmail.trim();
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email=== normalizedEmail);

// //replecing
// const priceGB = '288,97E';
// const priceUS = priceGB.replace('E', '$').replace(',', '.');
// console.log(priceUS);
// const amouncement = 'All passengers come to boarding door 23.  boarding door 23!';
// console.log(amouncement.replace('door','gate'));
// // console.log(amouncement.replaceAll('door', 'gate'));
// console.log(amouncement.replace(/door/g,'gate'));

// //Booleans
// const plane = 'Airbuss A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.includes('Aib'));
// if(plane.startsWith('Airbus')&&plane.endsWith('meo')){
//     console.log('Part of the NEW ARirbus family');
// }

// // Practice exercire
// const checkBaggage = function(items){
//     const baggage = items.toLowerCase();
//     if(baggage.includes('knife') || baggage.includes('gun')){
//         console.log('You are NOT allowed on board');
//     }else{
//         console.log('Welcome aboard!');
//     }
// };
// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');


// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0])
// console.log(plane[1])
// console.log(plane[2])
// console.log('B373'[0]);

// console.log(airline.length);
// console.log('B373'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('porturgal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4,7));

// console.log(airline.slice(0, airline.indexOf('')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1,-1));

// const checkMiddleSeat = function(seat){
//     // B và E are middle seats
//     const s = seat.slice(-1);
//     if(s=== 'B'|| s ==='E')console.log('You got the middle seat');
//     else console.log('You got lucky');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('Huy'));
// console.log(typeof new String('Huy'));

// console.log(typeof new  String('Huy').slice(1));