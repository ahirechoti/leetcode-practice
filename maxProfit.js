/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res=0;
    let buy=0,sell =0;
    for(let i=0;i <prices.length-1;i++){
        let j=parseInt(i)+1;
        if(buy == 0 && prices[i] < prices[j]){
            buy = prices[i];
        }else if(buy != 0 && prices[j] < prices[i]){
            res += parseInt(prices[i] - buy);
            buy = 0;
        }
        if(i == prices.length-2 && buy != 0){
            res += parseInt(prices[j] - buy);
        }
    }
    return res;
};
let m = [1,2,3,4,5];
maxProfit(m);