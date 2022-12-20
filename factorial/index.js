const longFactorial = (num) => {
   var bigInt = BigInt(num);
   console.log(bigInt)
   var factorial = 1n;
   for (let i = 0n; i < bigInt ; i++) {
      factorial *= bigInt - i;
   }
   return String(factorial);
}
console.log(longFactorial(5));