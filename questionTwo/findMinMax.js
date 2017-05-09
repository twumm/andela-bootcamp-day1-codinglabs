/*Write a function called *findMinMax* to find the maximum and minimum elements of an array.
Your answer should be returned in an array containing the min and max number, respectively.*/

/*
define function findMinMax which takes an array as a value
define variable to hold largest number in array
define variable to hold smallest number in array
loop through the array with for
compare the items using while loop
if the current array index is bigger than largestNumber, replace the value in largestNumber
if the current array index is smaller than smallestNumber, replace the value in smallestNumber
if numbers(smallestNumber & largestNumber) are not the same, print them as separate
if numbers(smallestNumber & largestNumber) are the same, print only one
*/

function findMinMax(arr) {
  var largestNumber = arr[0];
  var smallestNumber = arr[0];
  for (var i = 0; i < arr.length; i++ ){
    
    while (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
    while (arr[i] < smallestNumber) {
      smallestNumber = arr[i];
    }
  }
  if (smallestNumber != largestNumber) {
    return [smallestNumber ,largestNumber];
  }
  else{
    return [smallestNumber];
  }
  
}