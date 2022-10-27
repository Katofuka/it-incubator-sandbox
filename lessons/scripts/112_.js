// Only change code below this line
function countdown(n){  
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n-1);
    countArray.unshift(n);
    return countArray;
  }
}
const mastArray = countdown(10);
console.log(mastArray);
// Only change code above this line