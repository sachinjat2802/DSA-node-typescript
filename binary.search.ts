let binarySearch: any = (arr: number[], target: number) => {
    let left = 0;
    let right = arr.length - 1;
    let mid;
    let result = -1; 

  
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
       // result = mid; // Update the result and continue searching towards the left
        if (arr[mid] === target) {
            //return mid;
            result = mid; // Update the result and continue searching towards the right
            left = mid + 1;
        //return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
   // return -1; //  return -1.
    //return left; // ceil
    //return right; // floor
    return result; // first occurance // last occurance
  };
  
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,10,10, 17];
  const value = binarySearch(arr, 10);
  
  if (value === -1) {
    console.log("Element is not present in array");
  } else {
    console.log("Element is " + value);
  }