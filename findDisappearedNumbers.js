/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let res= [],max=Math.max(Math.max(...nums), nums.length);
    for(let i = 1;i<=max;i++){
        if(nums.indexOf(i) == -1){
            res.push(i);
        }
    }
    return res;
};
var wi = [1,1]
findDisappearedNumbers(wi);