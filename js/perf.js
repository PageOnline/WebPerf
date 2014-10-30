var data = {
    js: [
            /* HERE ADD YOURS */
        {
            name: 'for vs Array.forEach',
            description: 'If you use Array.forEach, you must initialize a function to run through elements or use native JS function. More likely you will use own function and that is why Array.forEach is on webkit and gecko based browsers slower. Surprisingly Array.forEach can run on IE faster than for but not in every situation.',
            properties: [
                {
                    name: 'for',
                    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for',
                    fn: function() {
                        var arr = Array(1);
                        return WebPerf.run(function() {
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
                        var arr = Array(1);
                        return WebPerf.run(function() {
                            arr.forEach(function(element, index, array) {});
                        });
                    }
                }
            ]
        },
        {
            name: 'for vs for...in',
            description: 'These two should have same ops or for...in should be faster because you do not need special variable to save Object.keys.',
            properties: [
                {
                    name: 'for',
                    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for',
                    fn: function() {
                        var obj = (function() {
                            var temp = {};
                            for(var i = 0; i < 100; ++i) {
                                temp['t' + i] = i;
                            }
                            return temp;
                        })();
                        return 100 * WebPerf.run(function() {
                            var keys = Object.keys(obj);
                            for(var i = 0; i < keys.length; ++i) {}
                        });
                    }
                },
                {
                    name: 'for...in',
                    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in',
                    fn: function() {
                        var obj = (function() {
                            var temp = {};
                            for(var i = 0; i < 100; ++i) {
                                temp['t' + i] = i;
                            }
                            return temp;
                        })();
                        return 100 * WebPerf.run(function() {
                            for(var key in obj) {}
                        });
                    }
                }
            ]
        },
        {
            name: 'for vs while',
            description: '',
            properties: [
                {
                    name: 'for',
                    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for',
                    fn: function() {
                        var arr = Array(1);
                        return 1 * WebPerf.run(function() {
                            for(var i = 0; i < arr.length; ++i) {
                                arr[i];
                            }
                        });
                    }
                },
                {
                    name: 'while',
                    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while',
                    fn: function() {
                        var arr = Array(1);
                        return 1 * WebPerf.run(function() {
                            var i = 0;
                            while(i < arr.length) {
                                arr[i];
                                ++i;
                            }
                        });
                    }
                }
            ]
        }

    ],
    css: []
}
