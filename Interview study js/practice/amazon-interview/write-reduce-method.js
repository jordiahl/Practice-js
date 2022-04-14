// New reduce
const newReduce = (arr, func, acc) =>{  
  for(let i=0; i < arr.length; i++){
    acc = func.call(this, acc, arr[i], i, arr);
  }
  
  return acc;
}

newReduce([1,2,3], (acc, current) => {console.log({current}, {acc});  acc = acc+1; return acc; }, 0);




