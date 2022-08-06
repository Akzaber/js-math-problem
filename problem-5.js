//Find factorial in normal way 

function factorial(number){
  let multiplication = 1;
  for(let i = 1; i<=number; i++){
    multiplication = multiplication * i;
  }
  return multiplication;
}

const inNumber = factorial(10)
console.log(inNumber)


// Reverse Way Find Factorial

function reverseFact(number){
  let multiplicationReverse = 1;
  for(let i=number; i>=1; i--){
    multiplicationReverse = multiplicationReverse * i;
  }
  return multiplicationReverse;
}

const inpNumber = 10;
const getFact = reverseFact(inpNumber);
console.log(getFact);