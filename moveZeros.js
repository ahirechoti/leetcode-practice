/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i=0;
    for(let j in nums){
        if(nums[j] !== 0){
            nums[i++] = nums[j];
        }
    }
    while(i<nums.length){
        nums[i++] = 0;
    }
};
var e = [0,1,0,3,12];
moveZeroes(e);