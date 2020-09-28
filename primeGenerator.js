// generate a list of prime numbers from 2 up to a value, n
// you can use the Sieve of Eratosthenes method to do this. 


const primeGenerator = function(n) {
  // let arrNum = [];
  let ArrPrime = [];
  let result;
    for(i = 2; i <= n; i++) {
      result = true;   
      for(j = 2; j < i ; j++) {
        if (i % j === 0) {
          result = false;
        } 
    }
        if(result === true) {
          ArrPrime.push(i);
       }
  } 
  return ArrPrime;
  
};

console.log(primeGenerator(25));
// console.log(arrNum);
// devidNum = 2;
//   for(i = 0; i < arrNum.length; i++) {
//     while (devidNum < n) {
//       if(arrNum[i] % devidNum !== 0 ) {
//         lastArr.push(arrNum[i]);
//         devidNum++
//       }
//     } return lastArr;
  //   console.log('This is ' + arrNum[i])