// check odd Even number 

function checkOddEvenNumber(numbers){
  let evenArray = [];
  let sum = 0;
  for(let i=0; i<numbers.length; i++){
    const index = i;
    const element = numbers[index];
    if(element%2 == 0){
      sum = sum + element;
      evenArray.push(element);
    }
  }
  console.log(evenArray)
  return sum;
} 

function checkOddNumber(numbers){
  let oddArray = [];
  let sum = 0;
  for(let i =0; i<numbers.length; i++){
    let element = numbers[i];
    if(element%2 !== 0){
      sum = sum + element;
      oddArray.push(element);
    }
  }
  console.log(oddArray)
  return sum;
}

const takeNumber = checkOddNumber([12, 13, 16, 17, 15, 20, 22, 24, 26, 31, 33, 35, 39, 37])
console.log(takeNumber);