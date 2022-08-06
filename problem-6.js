// get input and make serial and return the value.

function serialNumber(numbers){
  let newArray = [];
  for(let i = 0; i<numbers.length; i++){
    const element = numbers[i];
    if(numbers[i]=numbers[i+1]){
      newArray.push(element);
    }
  }
  console.log(newArray);

}
serialNumber([1, 1, 3, 5, 6, 7, 8, 3, 2, 7, 8, 10, 12])