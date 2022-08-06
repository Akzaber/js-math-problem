// celcious to farenhite

function celToFar(degree){
  const celIn = degree;
  const calculationFar = celIn*9/5+32;
  return calculationFar;
}

const inCel = 40;
const convertFar = celToFar(inCel);
console.log(inCel,'Degree Celcious = ', convertFar, 'Degree Farenheight');