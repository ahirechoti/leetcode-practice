/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    for(let i in arr){
        for(let j=parseInt(i)+1;j<arr.length;j++){
            if((arr[i] == (2*parseInt(arr[j]))) || (arr[j] == (2*parseInt(arr[i])))){
                return true;
            }
        }
    }
    return false;
};
let input1 = [3,1,5,10];
checkIfExist(input1);