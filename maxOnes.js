/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let res=0,temp=0;
    for(let i in nums){
        temp*= nums[i];
        temp += nums[i];
        res = Math.max(temp,res)
    }
    return res;
};
var t = [1,1,0,1,1,1];
findMaxConsecutiveOnes(t)