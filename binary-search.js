function binary(arr,elem){
  let start = 0;
  let end = arr.length - 1;
  let mid;
  while(start <= end){
    mid = start + end - start/2;
    if(elem == arr[mid]){
      console.log("hello",mid);
      return mid;
    }else if(elem < arr[mid]){
      end = mid - 1;
    }else{
      start = mid + 1;
    }
  }
  console.log("Not found");
  return -1;
}

binary([2,4,8,9,10,23],9);