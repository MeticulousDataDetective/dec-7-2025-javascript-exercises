const reverseString = function(word) {
    let rev='';
    for(let num=word.length-1;num>=0;num--){
        rev+=word[num];
    }
    return rev;
};

// Do not edit below this line
module.exports = reverseString;
