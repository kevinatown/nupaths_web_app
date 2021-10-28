// Data Types
/*
  intergers or number
  float (3.963)
  string ('any thing thats in a quotations')
  char (character - not really in js that much)
  boolean -> truth or false
  
  -----------
  null -> nothing (falsey)
  undefined -> the item is undefined (falsey) <- only in js
  -----------
  when basic types are saved in a variable it saves the value


  ------------

  arrays -> a list of items (list)
  objects -> a type that is key/value pairs (hashmap or a dictionary)
  functions -> a method to do something


  ^ advanced types, when these are saved in a variable there memory location is saved
  NOT the actual value
*/

/*
  basic types
*/

'Hello world'; // string
19; // interger (number)
91.784; // float (number)
false; // boolean

null; // null
undefined; // undefined

/*
  array
*/

[ 'a', 'b', 'c' ]; // an array with 3 strings in it
[ 1, 2, 3, 4]; // an array of all numbers
[ 'a', 1, 'b', 2, 'c', 3 ]; // an array of numbers and strings
[ null, null, undefined, false, true, 19, 'hello world', [ 1, 2, 3 ] ]; // notice the nested array

/*
  objects

  {
    key: 'value',
    'key-with-hyphens': 7
  }
*/

const a = {
  x: 8,
  y: 7
};

let c;

let b = {
  x:  ['a', 1, 'b', 2, 'c', 3 ],
  y: { x: 8, y: 7 }
};

a.x === 8;

// console.log(// an array of objects/items)
// I am only giving the function 1 and only 1 object to print
console.log({call: 1, b: b, a: a, c: c });

b = 'a new value';

console.log({ call:2, b: b, a: a, c: c });

c = 'Im defined now';

console.log({ call:3, b: b, a: a, c: c });

/*
 functions (or methods)
   - it does something
   - it's a defined block of code that can take argements, can return a value,
     but is genrally responsible for doing a discreet operation.


*/

// defined a function
// function <NameOfFunction>(<arguemnts if any>) {}
function printOutHelloWorld() {
  // everything inside is part of the function scope.
  console.log('Hello World');
}

// defined another function
const printOutHelloWorldArrowFucntion = () => {
  // everything inside is pary of the function scope.
  console.log('Hello World from the arrow function');
}

// calling the function 
printOutHelloWorld();
printOutHelloWorldArrowFucntion();

/*
  variables
    - something you define and assign a value to
    - there are 3 key words used to define a variable

    1. var - this has been around for ever, isnt scoped specific, can be changed 'variable'
    2. let - this is newer is scope specific, can be changed 'let'
    3. const - this is newer is scope specific, can NOT be changed CONSTANT

  Now a days you should use only const and let.
  Use const if the variable doesnt need to change
*/

/*
  conditional if statments
  if (value) {
    // do if value is true
  }
  
*/

if (true) {
  console.log('my value is true');
}

if (false) {
  console.log('my value is false and you will never see me');
}


/*
  conditional if statments
  if (value) {
    // do if value is true
  } else {
    do if value is false
  }
  
*/

if (false) {
  console.log('you will never see me cause the if value is false')
} else {
  console.log('you will see me cause the if value is false')
}


/*
  conditional if statments
  if (value) {
    // do if value is true
  } else if (another value) {
    do if value is false
  } else {
  
  }
  
*/

if (false) {
  console.log('you will never see me cause the if value is false')
} else if (true) {
  console.log('you will see me cause my value is true')
} else {
  console.log('you will never see me')
}


/*
  boolean logic (logic gates)
    - determine if something is true or false

   || -> OR operator
   && -> AND operator
   ! -> NEGATIVE operator
*/

!true // -> false
!false // -> ture

// and operator
true && true // -> true
true && false // -> false
false && true // -> false
false && false // -> false

// OR operator
true || true // -> true
true || false // -> true 
false || true // -> true 
false || false // -> false

// you can use parenthasis to group logic
false && (true || false) // -> false
true && (false || false) // -> flase
true && !(false || false) // -> true

/*
  comparisons:
    ==   -> equals (type not specific) DO NOT USE!!!
    !=   -> not equals (type not specific) DO NOT USE!!!
    ===  -> equals (type specific)
    !==  -> not equals (type specific)
*/
// int == 'string'
1 == '1'; // -> true
1 != '1'; // -> false
1 != 2; // -> ture

/// ALWAYS USE TYPE SPECIFIC COMPARSIONS
1 === '1'; // -> false
1 !== '1'; // -> true

const arr1 = [1,2,3];
const arr2 = [1,2,3];
const arr3 = arr1;

// arr1 === arr2; // -> false
// // Arrays, objects, and functions are saved in memeory as a pointer
// // arr1 and arr2 is actually saving the location of the array
// arr1 !== arr2 // -> true
// arr2 !== arr3 // -> true
// arr1 === arr3 // -> true
// // this last one 




