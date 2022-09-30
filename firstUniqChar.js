/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let tObj = {};
    let sArr = s.split('');
    for(let ch in sArr){
        let t = sArr[ch];
        if(tObj[t]){
            tObj[t] = 2;
        }else{
            tObj[t] = 1;
        }
    }
    for(let i in tObj){
        if(tObj[i] === 1){
            return s.indexOf(i);
        }
    }
    return -1;
    
};
let s = "aab";
firstUniqChar(s);