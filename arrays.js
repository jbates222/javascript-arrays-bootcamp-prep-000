var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var array = []
function addElementToBeginningOfArray(array, element) {
  var thing = [element, ...array]
  return thing
}
function destructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift(element);
   return array;
}
function addElementToEndOfArray(array, element) {
  var thing1 = [ ...array, element]
  return thing1
}