function skipEl(arr) {
    var newStr = '';
    
    for (i=0; i<arr.length; i++) {
        
        if( arr[i] === undefined ||  arr[i] === null || !!arr[i] === !!NaN || arr[i] === Infinity) {
        
        } else {
            newStr += arr[i];
        }
        
        }
    return newStr;
    }
    
    console.log(skipEl([null, 23, 'nekaRec', 'jaja', undefined, true, false, 43, '456', NaN, -24, NaN ]));

