/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    //floyd's algorithm.
    let sl = n;
    let fs = n;
    do{
        sl = sq(sl);
        fs = sq(sq(fs));
       
    }while(sl != fs);
     
    return (sl == 1);
};
let sq = function(n){
     let res = 0;
    while(n > 0){
        res += (n%10)*(n%10);
        n = parseInt(n/10);
    }
    return res;
}
isHappy(2);
