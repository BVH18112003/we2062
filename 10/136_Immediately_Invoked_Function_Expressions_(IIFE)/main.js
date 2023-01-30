const runOnce = function(){
  console.log('This will never run again');
};
runOnce();
// IIFE
(function(){
  console.log('This will never run again');
})();
(()=> console.log('This will ALSO never run again'))(); 
{
  const isPravate = 18;
  var notPravate = 2003;
}
// console.log(isPravate);
console.log(notPravate);