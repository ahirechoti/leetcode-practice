/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let testObj = {};
    for(let i in nums){
        if(testObj[nums[i]]){
            return true;
        }else{
            testObj[nums[i]] = true;
        }
    }
    return false;
};