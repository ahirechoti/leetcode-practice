/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if(nums.length <3) return Math.max(...nums);
    let m1=-Infinity,m2=-Infinity,m3 =-Infinity;
    for(let i in nums){
        let j = parseInt(nums[i]);
        if(j == m1 || j == m2 || j== m3) continue;
        if(j > m1){
            m3 = m2;
            m2 = m1;
            m1 = j;
        }else if(j > m2 && j < m1){
            m3 = m2;
            m2 = j
        }else if(j > m3 && j < m2){
            m3 = j;
        }
        
    }
    return m3 != -Infinity ? m3 : m1;
};
var yu =[1,1,2];
thirdMax(yu);