// check if a given number is prime. return true or false. 

const isPrime = function(num) {
  for(i = 2; i <= num ; i++) {
    // console.log(i)
   if( num % i === 0 ){ 
     return false;

   } else {
     return true;
   }
  }
};

console.log(isPrime(856))
