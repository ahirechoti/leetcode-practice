/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let m = haystack.length - needle.length;
    let i = 0;
    while(i <= m){
        let k = 0,isMatch = true;
        for(let j = i; j< parseInt(needle.length+i);j++){
            if(haystack[j] !== needle[k]){
                isMatch = false;
                break;
            }
            k++;
        }
        if(isMatch) return i;
        i++;
    }
    return -1;
};
strStr("abc","c");