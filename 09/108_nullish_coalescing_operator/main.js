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
console.log('----OR----');
console.log(''||0);
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || null || 3 || 'jonas');

resataurant.numGuests = 23;
const guest1 = resataurant.numGuests?resataurant.numGuests:10;
console.log(guest1);

const guest2 = resataurant.numGuests || 10;
console.log(guest2);
// Đối với toán tử OR sẽ xét các toán hạng nếu có  giá trị trung thực thì trả về giá trị trung thực đó và dừng không xét các giá trị ở sau bỏ qua các giá trị giả và sai
console.log('----AND----');
console.log(0 && 'jonas');
console.log(7&&'Jonas');
if(resataurant.orderComga){
    resataurant.orderBanhmi('Banhmi', 'Chicken');
}
console.log(resataurant.orderBanhmi && resataurant.orderBanhmi('Banhmi', 'pate'));
// Đối với toán tử AND sẽ xét các toán hạng nếu có giá trị sai hoặc giả thì sẽ trả về giá trị đó còn nếu tất cả giá trị đều trung thực thì sẽ trả về giá trị trung thực cuối cùng

console.log('----NULLISH----');
resataurant.numGuests = 0;
const guest3 = resataurant.numGuests ?? 10;
console.log(guest3);
// Với toán tử nullish thì 0 và '' sẽ là giá trị trung thực