'use strict';
const resataurant ={
    name: 'Huy',
    location: 'Tan Minh, Thuong Tin, Ha Noi, VietNam',
    categories: ['Italian', 'Pizzeria', 'Vegertarian','Oraganic'],
    starterMenu: ['Banh Mi', 'Salad', 'Pudding'],
    mainMenu: ['Pho', 'BunCha', 'ComSuon'],
    openingHours: {
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
    },
    order : function(starterIndex, mainMenuIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]]
    },
    orderDeliry: function({starterIndex = 1, mainIndex = 2, time = '20:00', address}){
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderComga: function(ing1, ing2, ing3){
        console.log(`Here is your declicious comga with ${ing1}, ${ing2}, ${ing3} `);
    },
    orderBanhmi: function(mainIngredient, ...otherIngredients){
        console.log(mainIngredient);
        console.log(...otherIngredients);
    },

   
    
};
resataurant.orderDeliry({
    time: '22:30',
    address: 'Ha Noi',
    mainIndex: 2,
    starterIndex: 2,
});
resataurant.orderDeliry({
    address: 'HCM',
    
});
const rest1 = {
    name: 'Huy',
    numberGuests: 18,
}
const rest2 = {
    name: 'Ngọc',
    owner:'Giovanni Rossi',
}
//OR asaignment operator
// rest1.numberGuests = rest1.numberGuests || 10;
// rest2.numberGuests = rest1.numberGuests || 10;
// rest1.numberGuests ||= 10;
// rest2.numberGuests ||= 10;

//nullish asaignment operator
 rest1.numberGuests ??= 10;
 rest2.numberGuests ??= 10;
 
//AND assignment operator
rest1.owner = rest1.owner && '<ANONYMOUS>'; 
rest2.owner = rest2.owner && '<ANONYMOUS>';  
rest1.owner &&= '<ANONYMOUS>'; 
rest2.owner &&= '<ANONYMOUS>'; 

console.log(rest1);
console.log(rest2);