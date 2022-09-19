/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let tObj = {};
    for(let i in nums){
        tObj[nums[i]] = i;
    }
    for(let i in nums){
        let idx = tObj[target-nums[i]];
        if(idx && idx !== i){
            return [i,idx];
        }
    }
    return [-1,-1]
};
let nums = [3,2,4], target = 6;
twoSum(nums,target);
