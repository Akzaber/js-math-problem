// Fahrenheit to Celsius

function farToCel(degree){
  const inFar = degree;
  const calculationCel = ((inFar-32)*5)/9;
  return calculationCel;
}

function celToFar(degree){
  const inCel = degree;
  const calculationFar = inCel*9/5+32;
  return calculationFar;
}

const farIn = 212;
const farToCelIn = farToCel(farIn);
const celToFarIn = celToFar(farToCelIn)
console.log(celToFarIn, farToCelIn);


