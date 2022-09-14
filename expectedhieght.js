/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let expected = heights.filter(() => true);
    expected.sort((a, b) => a - b);
    
    let res=0;
    for(let i in expected){
        if(expected[i] !== heights[i]){
            res++;
        }
    }
    return res;
};
var int = [10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7];
heightChecker(int);