function recursive(arr,elem,start,end){
  let mid = start + end - start/2;
  
  if(elem == arr[mid]) {
  console.log("Found",mid); 
  return true;
}else if(start >= mid){
  console.log("Not found");
  return false;
}
  else if(elem < arr[mid]){
    start = mid+1;
    recursive(arr,elem,start,end);
  }else{
    end = mid - 1;
    recursive(arr,elem,start,end);
  }
}
let arr = [20,19,18,17,16,15,14];
let x = 16;
recursive (arr,x,0,arr.length-1);