function nonConstructibleChange(coins) {

    coins.sort((a,b) => a - b);
      
      var sumMoney = 0;
      for (let coin of coins) {
          if (coin > sumMoney + 1) return sumMoney + 1;
          
          sumMoney += coin;
      }
      
      return sumMoney + 1;
  }


  coins1 = [5, 7, 1, 1, 2, 3, 22]
  coins2 = [1, 1, 1, 1, 1]
  coins3 = [1, 5, 1, 1, 1, 10, 15, 20, 100]

  let n1 = nonConstructibleChange(coins1);
  let n2 = nonConstructibleChange(coins2);
  let n3 = nonConstructibleChange(coins3);

  console.log(n1);
  console.log(n2);
  console.log(n3);


  function sortedSquaredArray(ascendingArray){
	var result = []
	var left = 0
	var right = ascendingArray.length - 1
	var current = ascendingArray.length - 1
	while (left <= right){
		if( Math.abs(ascendingArray[left]) > Math.abs(ascendingArray[right]) ){
			result[current] = ascendingArray[left] ** 2
			left += 1
        } else {
			result[current] = ascendingArray[right] ** 2
			right -= 1
        }   
		current -= 1
    }    
	return result
  }

    array1 = [1, 2, 3, 5, 6, 8, 9]
    array2 = [-2, -1]
    array3 = [-10, -5, 0, 5, 10]

    
    let sortedArray1 = sortedSquaredArray(array1);
    let sortedArray2 = sortedSquaredArray(array2);
    let sortedArray3 = sortedSquaredArray(array3);
 
    console.log(sortedArray1);
    console.log(sortedArray2);
    console.log(sortedArray3);
 