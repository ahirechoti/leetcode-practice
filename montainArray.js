/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(arr.length < 3) return false;
    let up = 0, down = 0;
    for(let i =1; i< arr.length ; i++){
        if(down ==0 && arr[parseInt(i)-1] < arr[i]){
            up++;
        }
        if(up>0 && arr[parseInt(i)-1] > arr[i]){
            down++;
        }
    }
    return (up > 0 && down > 0 && (parseInt(up)+parseInt(down) == arr.length-1));
};
var i = [0,1,2,1,2];
validMountainArray(i);