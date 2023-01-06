'use strict';
const resataurant ={
    name: 'Huy',
    location: 'Tan Minh, Thuong Tin, Ha Noi, VietNam',
    categories: ['Italian', 'Pizzeria', 'Vegertarian','Oraganic'],
    starterMenu: ['Banh Mi', 'Salad', 'Pudding'],
    mainMenu: ['Pho', 'Bun cha', 'Com suon'],
    order : function(starterIndex, mainMenuIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]]
    }
};
// Lấy giá trị của phân tử trong mảng gán thành biến riêng
const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a,b,c);
// Cú phấp dùng phá hủy phần mảng
const [x,y,z] = arr;
console.log(x,y,z);
// Lấy phần tử 1 và 2 của mảng
const [first, second] = resataurant.categories;
console.log(first,second);
// Lấy phần tử 1 và 3 của mảng
const [firsth, ,third] = resataurant.categories;
console.log(firsth, third);
// Hoán đổi giá trị của biến 

// Bình thường
let [main,secondary]=resataurant.categories;
console.log(main, secondary);
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Công thức
[main, secondary] = [secondary, main];
console.log(main, secondary);
// Lấy 2 giá trị trả veeff từ 1 hàm
console.log(resataurant.order(2,0));
const [starter, mainC] = resataurant.order(2,0);
console.log(starter, mainC);
// Lấy giá trị của mảng trong mảng
const nested = [1,2,[3,5]];
// const [i,,j]= nested;
const [i,,[j,k]] = nested;
console.log(i, j, k);
// giá trị mặc định
// không có giá trị cho sẵn 
const [p,r,q] = [8,9];
console.log(p,r,q);
//có giá trị cho trước
const [g=5,h,l=2] = [8,9];
console.log(g,h,l);