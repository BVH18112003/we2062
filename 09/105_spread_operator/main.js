'use strict';
const resataurant ={
    name: 'Huy',
    location: 'Tan Minh, Thuong Tin, Ha Noi, VietNam',
    categories: ['Italian', 'Pizzeria', 'Vegertarian','Oraganic'],
    starterMenu: ['Banh Mi', 'Salad', 'Pudding'],
    mainMenu: ['Pho', 'Bun cha', 'Com suon'],
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
// Tạo ra 1 mảng mới với mảng đã cho trước và thêm giá trị mới
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1],arr[2]]; //theo cách thông thường
console.log(badNewArr);
// const newArr = [1, 2, ...arr]; // theo toán tử spread
const newArr = [1, 2, arr];// Nếu bỏ "..." trước mảng thì ta sẽ mảng arr ở trong mảng newArr
console.log(newArr);
//Mở rộng mảng
const newMenu = [...resataurant.mainMenu, "Cơm gà"];
console.log(newMenu);
// Sao chép mảng
const mainMenuCopy = [...resataurant.mainMenu];
console.log(mainMenuCopy);
// Nối 2 mảng
const menu = [...resataurant.mainMenu, ...resataurant.starterMenu];
console.log(menu);
//Lặp lại chuỗi
const str = "Huy";
const letter = [...str, `y`, `N`];
console.log(letter);
// Chúng ta không thể sử dụng điều này để xây dựng chuỗi bằng cách sử dụng 1 kí tự mẫu vì ${...str} không phải là nơi mong đợi nhiều giá trị được phân tách bằng dấu ,

// console.log(`${...str} Huy`);
// được mong đợi khi ta chuyển đối số vào hàm hay tạo mới một mảng

//
const ingredients = [prompt('Let\'s make com ga Ingredient 1'),prompt(' Ingredient 2'),prompt('Ingredient 3')];
// console.log(ingredients);
// Chuyền đối số vào hàm theo 2 cách
//cách 1:
resataurant.orderComga(ingredients[0],ingredients[1],ingredients[2])
// cách 2:
resataurant.orderComga(...ingredients);
//Lặp object
const resataurantCopy = {...resataurant};
console.log(resataurantCopy);
resataurantCopy.name = 'Ngu Ngốc';
console.log(resataurantCopy.name);
console.log(resataurant.name);
// thêm thuộc tính cho object
const newRestaurant = {boss: 'Bui Van Huy', ...resataurant, staff: ['Ngoc','Son']};
console.log(newRestaurant);