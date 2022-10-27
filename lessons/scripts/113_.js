function rangeOfNumbers(startNum, endNum) {
    if(startNum > endNum) {
      return [];
    } else {
      const countArray = rangeOfNumbers(startNum+1, endNum);
      countArray.push(startNum);
      return countArray;
    }
    
  };
  
  const mastArray = rangeOfNumbers(10, 25);
  console.log(mastArray);
  // Only change code above this line