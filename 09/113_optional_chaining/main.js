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
if(resataurant.openingHours&& resataurant.openingHours.mon)
console.log(resataurant.openingHours.mon.open);
// Với chuỗi tùy chọn
console.log(resataurant.openingHours.mon?.open);// Nếu 1 thuộc tính không tồn tại thì sẽ trả về undefined
console.log(resataurant.openingHours?.mon?.open);
const days= ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days){
    const open = resataurant.openingHours[day]?.open??'colosed';
    console.log(`On ${day}, we open at ${open}`);
}
// Phương thức
console.log(resataurant.order?.(0,1) ?? 'Method does not exist');
console.log(resataurant.orderComsuon?.(0,1)?? 'Method does not exist');
// Mảng
const users = [{name: 'Huy', email: 'bvh18112003@gmail.com'}];
console.log(users[0]?.name??'User array empty');
console.log(users[1]?.name??'User array empty');
if(users.length>0)console.log(users[0].name);
else console.log('User array empty');