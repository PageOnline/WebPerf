var data = {
    "js": [
            /* HERE ADD YOURS */
        {
            name: 'for vs Array.forEach',
            description: 'For will be allways faster because Array.forEach must initialize a function to run through array. Easy Peasy',
            properties: [
                {
                    name: 'for',
                    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for',
                    fn: function() {
                        var arr = Array(1000000);
                        return 1000000 * WebPerf.perSecond(function() {
                            for(var i = 0; i < arr.length; ++i) {
                                arr[i];
                            }
                        });
                    }
                },
                {
                    name: 'Array.forEach',
                    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach',
                    fn: function() {
                        var arr = Array(1000000);
                        return 1000000 * WebPerf.perSecond(function() {
                            arr.forEach(function(element, index, array) {});
                        });
                    }
                }
            ]
        },
        /*{
            name: 'for vs for...in',
            description: 'For will be allways faster because Array.forEach must initialize a function to run through array. Easy Peasy',
            properties: [
                {
                    name: 'for',
                    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for',
                    fn: function() {
                        var obj = (function() {
                            var temp = {};
                            for(var i = 0; i < 100000; ++i) {
                                temp['t' + i] = i;
                            }
                        });
                        return 100000 * WebPerf.perSecond(function() {
                            var keys = Object.keys(obj);
                            for(var i = 0; i < keys.length; ++i) {

                            }
                        });
                    }
                },
                {
                    name: 'for...in',
                    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in',
                    fn: function() {
                        var obj = (function() {
                            var temp = {};
                            for(var i = 0; i < 100000; ++i) {
                                temp['t' + i] = i;
                            }
                        });
                        return 100000 * WebPerf.perSecond(function() {
                            for(var key in obj) {
                                obj[key];
                            }
                        });
                    }
                }
            ]
        }*/
    ]
}
