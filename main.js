/* Less Than 100?
Given two numbers, return true if the sum of 
both numbers is less than 100. Otherwise return false.

Examples:
lessThan100(22, 15) ➞ true
lessThan100(83, 34) ➞ false
lessThan100(3, 77) ➞ true 
*/

function isLessThan100(a, b) {
  if (a + b < 100) {
    return true;
  } else {
    return false;
  }
}
