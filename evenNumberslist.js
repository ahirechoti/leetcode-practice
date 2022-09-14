var findNumbers = function(nums) {
    let res=0;
    for(let i in nums){
        let temp=0;
        while(nums[i] > 0){
            nums[i] = parseInt(nums[i]/10);
            temp++;
        }
        res += ((temp%2 == 0) ? 1 : 0);
    }
    return res;
};
var t = [12,345,2,6,7896];
findNumbers(t)