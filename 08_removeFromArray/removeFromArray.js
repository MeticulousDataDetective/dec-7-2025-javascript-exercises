const removeFromArray = function(cont,...rem) {
    const remn=[];
    for(const element of cont){
        if(!rem.includes(element)){
            remn.push(element);
        }
    }
    return remn;
};

// Do not edit below this line
module.exports = removeFromArray;
