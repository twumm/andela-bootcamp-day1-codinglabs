/* 
CODING LABS (HOME SESSION 1)

QUESTION 1:
Write a function called *dataTypes* to compare and return results, based on the argument 
supplied to the function. Follow through the test to produce the perfect function that 
accounts for all expectations.
For strings, return its length.
For null or undefined return string 'no value'
For booleans return the boolean
For numbers return a string showing how it compares to hundred e.g. For 67 return 'less than 100' 
for 4034 return 'more than 100' or equal to 100 as the case may be
For arrays return the 3rd index, or undefined if it doesn't exist.
For functions call the function and pass in true as an argument and return it.*/

function dataTypes(value){
	//check for string and return length of string
	if (typeof value == "string"){
		return value.length
	}
	else if (typeof value === null || typeof value === 'undefined'){
		return "no value";
	}
	else if (typeof value === 'boolean'){
	  return value;
	}
	else if (typeof value === 'number' && value < 100){
	  return 'less than 100';
	}
	else if (value === 100){
	  return 'equal to 100';
	}
	else if (typeof value === 'number' && value > 100){
	  return 'more than 100';
	}
	else if (typeof value === 'object' && value.constructor === Array && value.length >= 2){
	  return value[2];
	}
	else if (typeof value === 'object' && value.constructor === Array && value.length < 2){
	  return 'undefined';
	}
	else if (typeof value === 'function'){
	  return value(true);
	}
}