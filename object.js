// object get value and properties

const shoppingCard = {
  book: 12,
  notes: 19,
  shirt: 12,
  pant: 3,
  tshirt: 10,
  pen: 14
}

let properties = Object.keys(shoppingCard);

for(let i=0; i<properties.length; i++){
  let propertyName = properties[i];
  let propertyValues = shoppingCard[propertyName];
  console.log(propertyName, propertyValues);
}
