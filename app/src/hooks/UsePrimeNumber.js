export default function UsePrimeNumber(num) {
  // This hooks generate a array of al numbers befl Primeore the value

  var prime_num1 = [],
    prime_num2 = [];
  for (let k = 0; k <= num; k++) {
    prime_num2.push(true);
  }
  for (let i = 2; i <= num; i++) {
    if (prime_num2[i]) {
      prime_num1.push(i);
      for (let j = 1; i * j <= num; j++) {
        prime_num2[i * j] = false;
      }
    }
  }
  return prime_num1;
}

/* For testing
 
function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
          return false; 
    return num > 1;
}

*/
