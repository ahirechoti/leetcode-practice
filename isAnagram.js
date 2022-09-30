/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    for(let ch in s){
        if(t[t.indexOf(s[ch])] === -1){
           return false;  
        }
    }
    return true;
};
let r="ab",s="a";
isAnagram(r,s);
