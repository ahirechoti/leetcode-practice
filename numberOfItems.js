function numberOfItems(s, stInd, endIn){
    let res = [];
    for(var i in stInd){
        let temp = s.substring(stInd[i]-1,endIn[i]);
        let items = "";
        if(temp){
            temp = temp.split("|");
            for(var t = 1; t < temp.length -1 ; t++){
                items += temp[t];
            }
        }
        res.push(items.length);
        
    }
    return res;
}
var s = "|*|*|*|*";
var st = [1,1];
var en = [5,7];
numberOfItems(s,st,en);