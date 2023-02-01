const movements = [200,500,-400,3000, -650, -130, 70, 1300];
for(const movement of movements){
    if(movement>0){
        console.log(`You deposited ${movement}`);
    }else{
        console.log(`You withdrow ${Math.abs(movement)}`);
    }
}
console.log('----- FOREACH -----');
movements.forEach(function(mov, i, arr){
    if(mov>0){
        console.log(`Movement ${i+1}: You deposited deposited ${mov}`);
    }else{
        console.log(`Movement ${i+1}: You withdraw ${Math.abs(mov)}`);
    }
});