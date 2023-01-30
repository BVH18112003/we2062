const secureBooking = function(){
  let passengerCOunt = 0;

  return function(){
    passengerCOunt++;
    console.log(`${passengerCOunt} passenger`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
console.dir(booker);