/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let wealthArr = [];
    for(var i in accounts){
        var count = 0;
        for(var j in accounts[i]){
            count += parseInt(accounts[i][j]);
        }
        wealthArr.push(count);
    }
    let res = wealthArr[0];
    for(var t = 1; t < wealthArr.length; t++){
        res = (res > wealthArr[t]) ? res : wealthArr[t];
    }
    return res;
};
var t = [[1,2,3],[4,2,1]];
maximumWealth(t);