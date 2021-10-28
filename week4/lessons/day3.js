// items in parenthases for functions are arguments/parameters.
// aruguments are values that are passed to the function for a specific reason
// arguments are function scoped variables.
const addTwoNumbers = (number1, number2) => {
  return number1 + number2;
}

// addTwoNumbers(a, b);

function subtractTwoNumbers(number1, number2) {
  // console.log(number1, number2);
  return number1 - number2;
}

// subtractTwoNumbers(3,4);


const a = 1;
const b = 2;

const aPlusB = addTwoNumbers(a, b);
const aMinusB = subtractTwoNumbers(a, b);

const names = [
  'Kevin',
  'Darlene',
  'Ted',
  'Tina',
  'Brenda',
  'Todd',
  'Manu',
  'Cristina',
  'Mike',
  'Tom'
];

// console.log(names.length);

names.push('Steve');
names.push('Theo');
names.push('James');
names.push('Paul');
names.push('Teddy');
names.push('Helen');

// console.log(names.length);

// console.log(names[0]);

// console.log(a, b, aPlusB, aMinusB);
// console.log(names.length)

// for (let i = 0; i < names.length; i++) {
//   const currentName = names[i];
  // console.log('current loop interation:', i, 'Currently checking: ', currentName);
  // if (currentName[currentName.length - 1] === 'e') {
  //   // console.log(currentName, ' end with a e');
  // }
// }
// index = index + 1
// index++ -> only adds 1 
// index+= 1

const findNamesEndingWithLetter = (arrOfNames, letter) => {
  // console.log(arrOfNames, letter);
  console.log('All names ending with the letter: ', letter);
  console.log('---------------------------------------');

  // for loops are very definitive, and useful
  // almost all programing languages have for loops
  for (let index = 0; index <= arrOfNames.length - 1; index++) {
    const currentName = arrOfNames[index];
    
    if (currentName[currentName.length - 1] === letter) {
      console.log(arrOfNames[index]);
    }
  }

  // array.forEach is specific to javascript
  // it iterates over each item in the array 
  // and passes that item to a function you define
  arrOfNames.forEach((item) => {
    if (item[item.length - 1] === letter) {
      console.log(item);
    }
  });

  console.log('---------------------------------------');
}; 

findNamesEndingWithLetter(['Kevin', 'Joe', 'Steve', 'Cristina'],'e');
findNamesEndingWithLetter(
  ['Jason', 'Luis', 'Michael', 'Sarah', 'Katie', 'Rhonda', 'Pete', 'Beverly'],
  'f');

findNamesEndingWithLetter(
  ['Jason', 'Luis', 'Michael', 'Sarah', 'Katie', 'Rhonda', 'Pete', 'Beverly'],
  'h');

findNamesEndingWithLetter(
  ['Matt', 'Mint', 'Michael', 'Sarah', 'Katie', 'Rhondat', 'Pete', 'Beverly'],
  't');


