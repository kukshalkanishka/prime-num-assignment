let totalNumOfPrimes = +process.argv[2];
let primeCandidate= 3;
let currentNumOfPrimes = 1;
let primeNumValue = 0;

if(totalNumOfPrimes <=0){
  primeNumValue = "invalid input"
}

if(totalNumOfPrimes == 1){ 
  primeNumValue = 2;
}

while(currentNumOfPrimes < totalNumOfPrimes){
  let divisor = 3;
  let isNumPrime = true;

  while(divisor <= Math.sqrt(primeCandidate) && isNumPrime){
    if(primeCandidate % divisor == 0){
      isNumPrime = false;
    }
    divisor+= 2;
  }

  if(isNumPrime){
    primeNumValue = primeCandidate;
    currentNumOfPrimes++;
  }

  primeCandidate+= 2;
}

console.log(primeNumValue);
