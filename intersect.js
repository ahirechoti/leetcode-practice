/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let m,n;
    if(nums1.length < nums2.length){
        m = nums1;
        n=nums2;
    }else{
        n=nums1;
        m=nums2;
    }
    let res =[];
    for(let i =0; i<m.length;i++){
        for(let j=i;j< n.length; j++){
            if(m[i] == n[j] && res.indexOf(n[j]) == -1){
                res.push(m[i]);
                break;
            }
        }
    }
    return res;
};
let in1 = [2,1],in2=[1,1]
intersect(in1,in2);