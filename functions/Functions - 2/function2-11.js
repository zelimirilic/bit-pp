function convertArrToSrt(arr){
    var newArr = [];
    var counter = 0;
    for (let i = 0; i < arr.length; i++) {
       if(typeof (arr[i]) === "string") {
            newArr[counter] = parseInt(arr[i]);
            counter++;
       }
    }
  
    return newArr;
   
}

console.log(convertArrToSrt(["21", "2", undefined, NaN, Infinity, "1e+3"]));