/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
     let res = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    res ^= nums[i];//bitwise XOR 0^4^1^2^1^2 = 4.
  }
  return res;
};
let test= [4,1,2,1,2];
singleNumber(test);