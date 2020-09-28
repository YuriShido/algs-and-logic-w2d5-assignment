// find the greatest common divisor of the two numbers given

const gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};
//   let devidedNum = 2
//     while  (a % devidedNum === 0 && b % devidedNum === 0) {
//       devidedNum += 1
//       devidedNum = devidedNum * devidedNum
//     }
//   return gcd;
// };

console.log(gcd(12, 18));