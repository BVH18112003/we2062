// const secureBooking = function(){
//   let passengerCOunt = 0;

//   return function(){
//     passengerCOunt++;
//     console.log(`${passengerCOunt} passenger`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();
// console.dir(booker);

let f;

const g = function(){
  const a = 23;
  f =function(){
    console.log(a*2);
  };
};

const h = function(){
  const b = 18;
  f =function(){
    console.log(b*2);
  };
};
g();
f();
console.dir(f);
//
h();
f();
console.dir(f);

// Example2
const boardPassengers = function (n, wait){
  const perGroup = n/3;
  setTimeout(function(){
    console.log(`We are now boarding all ${n} `);
    console.log(`There are 3 group, each with ${perGroup}`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 5);