// 1 ar namta output newer chesta kori 

function namta(number){
  let numInto = 1;
  for(let i=number; i<=10; i++){
    let intoNum = i;
    numInto = numInto*intoNum;
  }
  console.log(numInto);
}
namta(1)