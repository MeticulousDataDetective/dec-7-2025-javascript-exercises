const sumAll = function(s,b) {
    if(!Number.isInteger(s)||!Number.isInteger(b)||s<0||b<0) return "ERROR";
    if(b<s){
        const tem=s;
        s=b;
        b=tem;
    }
    let sum=0;
    for(let i=s;i<=b;++i){
        sum+=i;
    }
    return sum; 
};

// Do not edit below this line
module.exports = sumAll;
