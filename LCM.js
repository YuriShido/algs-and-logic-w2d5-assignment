// find the lowest common multiple of two given numbers

const lcm = function(a, b) {
  let gcd = function(a, b) {
    
    if ( ! b) {
        return a;
    }
    return gcd(b, a % b);
    
  };

  return (a * b) / gcd(a, b)
};

console.log(lcm(12, 42))