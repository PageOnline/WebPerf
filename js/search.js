(function(){

'use strict';

// Hamming distance between two strings

var distance = function(str1, str2) {
    var diff = 0;
    str1 = str1.length > str2.length ? str2 : str1;
    for(var i = 0; i < str1.length; ++i)
        str1[i] !== str2[i] || ++diff;
    return diff;
}

var SearchString = function(text, searched) {
    var ratting = 0;
    return (new RegExp(searched)).test(text);
}

var SearchArray = function(arr, searched) {
    var name, temp = [];
    for(var i = 0; i < arr.length; ++i) {
        name = arr[i];
        if(SearchString(name, searched)) {
            temp.push(arr[i]);
        }
    }
    return temp;
}

var SearchArrayUsingObject = function(arr, objPath, searched) {
    var name, temp = [];
    for(var i = 0; i < arr.length; ++i) {
        name = arr[i][objPath];
        if(SearchString(name, searched)) {
            temp.push(arr[i]);
        }
    }
    return temp;
}

window.Search = {
    basic: SearchString,
    string: SearchString,
    array: {
        basic: SearchArray,
        by: SearchArrayUsingObject
    }
}

})();
