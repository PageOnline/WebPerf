(function(){

var HammingDistance = function(str1, str2) {
    var diff = 0;
    str1 = str1.length > str2.length ? str2 : str1;
    for(var i = 0; i < str1.length; ++i)
        str1[i] !== str2[i] || ++diff;
    return diff;
}

})();
