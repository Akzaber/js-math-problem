// Leap year check

function checkLeapYear(year){
  let yearArr = [];
  for(let i=0; i<year.length; i++){
    const index = i;
    const checkYear = year[index];
    if(checkYear%4 == 0){
      yearArr.push(checkYear);

    }
  }
  return yearArr;
}

const inYear = checkLeapYear([2023, 2024, 2025, 2028, 2030])
console.log(inYear);