const currencties = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);
currencties.forEach(function(value, key, map){
    console.log(`${key}: ${value}`);
});

//Set
const currenctiesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenctiesUnique);
currenctiesUnique.forEach(function(value, _, map){
    console.log(`${value}: ${value}`);
});