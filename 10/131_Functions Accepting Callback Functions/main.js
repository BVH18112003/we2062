const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
} ;
const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};
// Highter-order function
const transformer = function(str, fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};
transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);
//JS uses callback all the time
const higt1 = function(){
    console.log('hi');
};
document.body.addEventListener('click', higt1);
['Jonas', 'Martha', 'Huy'].forEach(higt1);
console.log(higt1);