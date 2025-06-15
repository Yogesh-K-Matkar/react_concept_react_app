// 2 Categories of Datatypes

// 1. Primitives (7 Types of Datatypes)
//a. Number
var myFavNum = 5;
console.log(myFavNum);

//b. String
var myFavNum1 = "Five";
console.log(myFavNum1);

var myFavNum2 = "One";
console.log(myFavNum2);

//Concate 2 String
console.log("Hello" + " World");

//c. Boolean
var isMyFavNum = true;
console.log(isMyFavNum);

//d. Undefined
var isMyFavNum1;
console.log(isMyFavNum1);

//e. Null
// Note- typeof of null is object type
var isMyFavNum2 = null;
console.log(isMyFavNum2);

//f. BigInt
var isMyBigIntNum = 12332423424242342423423423432423423424234n;
console.log(isMyBigIntNum);

// (Note to know type of varialbe)
console.log(typeof isMyBigIntNum);

//(Note to convert String datatype value nos to Number Datatype)
var nos = "5";
console.log(typeof nos); //Actaully String datatype
console.log(typeof +nos); //Before + sign added before nos as +nos then converted to Number datatype

//(Note to convert Number datatype value nos to String datatype)
var nos1 = 5;
console.log(typeof nos1); //Actaully Number datatype
console.log(typeof String(nos1)); //String(nos1) then converted to Number datatype to String datatype
console.log(typeof (nos1 + ""));

console.log(parseInt(nos1, 10));

//(Note to convert Number datatype value nos to String datatype)
var nos2 = "5.3";
console.log(parseInt(nos2)); //pasrseInt convert to String and remove decimal digit
console.log(typeof parseInt(nos2));

//To maintain decimal value
console.log(parseFloat(nos2));
console.log(typeof parseFloat(nos2));

//NaN - 'Not a Number' eg
console.log(parseInt("a"));
console.log(isNaN("a"));
console.log(isNaN("1"));

// 2. Objects (3 Types of Datatypes)
// a. Object

// b. Array

// C. Date
