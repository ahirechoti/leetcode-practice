/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for(let i in nums){
        nums[i] = Math.pow(nums[i], 2);
    }
    for(let i in nums){
        for(let j = parseInt(i)+1; j < nums.length ; j++ ){
            let t = 0;
            if(nums[i] > nums[j]){
                t = nums[i];
                nums[i] = nums[j];
                nums[j] = t;
            }
        }
    }
    
    return nums;
};
var t = [-4,-1,0,3,10];
sortedSquares(t);