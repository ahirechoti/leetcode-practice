var merge = function(nums1, m, nums2, n) {
    let i = m-1, j = n-1, k = (m+n-1);
    while(i >=0 && j >=0){
        nums1[k--] = (nums1[i] > nums2[i])? nums1[i--] : nums2[j--];
    }
    while(j >= 0){
        nums1[k--] = nums2[j--];
    }
};
var n= [1,2,3,0,0,0];
var m = 3;
var n = 3;
var n1 = [2,5,6]
merge(n,m,n1,n);