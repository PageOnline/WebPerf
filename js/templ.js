(function() {
    var elem, keys;
    var el = function(name, obj) {
        elem = document.createElement(name);
        keys = Object.keys(obj);
        for(var i = 0; i < keys.length; ++i) {
            if(keys[i] === 'content') {
                if(obj.content[0] === undefined) {
                    elem.appendChild(obj.content);
                } else {
                    for(var ii = 0; ii < obj.content.length; ++ii) {
                        elem.appendChild(obj.content[ii]);
                    }
                }
            } else if(keys[i] === 'css') {
                elem.style.cssText = obj.css;
            } else {
                elem[keys[i]] = obj[keys[i]];
            }
        }
        return elem;
    }
    var template = function(fn) {
        return fn(el);
    }
    window.template = template;
})();

var Navigation = function(items) {
    return template(function(el) {
        return el('nav', {
            content: (function() {
                return el('div', {});
            })()
        })
    });
}


var PerfItem = function(obj) {
    return template(function(el) {
        var additional = el('div', {
            className: 'additional',
            innerHTML: '<p>' + obj.description + '</p>'
        });
        var infoToggle = el('div', {
            className: 'info-toggle',
            textContent: 'more info',
            css: 'display: none',
            onclick: function() {
                additional.classList.toggle('show');
                if(additional.classList.contains('show')) {
                    this.textContent = 'less info';
                } else {
                    this.textContent = 'more info';
                }
            }
        });
        var maxOps = el('span', {
            className: 'to'
        });
        var details = el('div', {
            className: 'details',
            css: 'display: none',
            content: [
                el('span', {
                    className: 'from',
                    textContent: '0'
                }),
                maxOps
            ]
        });
        var chart = el('div', {
            className: 'chart',
            css: 'display: none'
        });
        var runButton = el('div', {
            className: 'run',
            textContent: 'RUN TEST',
            onclick: function() {
                this.style.display = 'none';
                chart.style.display = 'block';
                details.style.display = 'block';
                restart.style.display = 'block';
                infoToggle.style.display = 'block';
                Wait.show();
                setTimeout(testIt, 100);
            }
        });
        var restart = el('div', {
            className: 'restart',
            textContent: '',
            css: 'display: none',
            onclick: function() {
                testIt();
            }
        });

        var progresses = [];

        var makeChart = function() {
            chart.innerHTML = '';
            progresses = [];
            var items = obj.properties;
            for(var i = 0; i < items.length; ++i) {
                progresses.push(el('div', {
                    className: 'progress',
                    css: 'width:' + values[i] + '%',
                    content: el('span', {
                        className: 'inner-label',
                        textContent: items[i].name
                    })
                }));

                chart.appendChild(el('div', {
                    className: 'item',
                    content: [
                        el('span', {
                            className: 'outer-label',
                            textContent: items[i].name
                        }),
                        progresses[i]
                    ]
                }));
            }
        }

        var updateChart = function() {
            for(var i = 0; i < progresses.length; ++i) {
                progresses[i].style.width = values[i] + '%';
            }
        }


        var values = [], property, max, done = false;

        var testIt = function() {
            values = [], property;
            for(var i = 0; i < obj.properties.length; ++i) {
                property = obj.properties[i];
                values.push(property.fn());
            }
            max = Math.max.apply(Math, values);
            for(var i = 0; i < values.length; ++i) {
                values[i] = (values[i] * 100) / max;
            }

            maxOps.textContent = Math.round(max) + ' ops';
            if(done) {
                updateChart();
            } else {
                makeChart();
                done = true;
            }
            Wait.hide();
        }


        //testIt();



        return el('div', {
            className: 'perf-item',
            content: [
                el('h2', {
                    innerHTML: (function() {
                        var anchors = [];
                        for(var i = 0; i < obj.properties.length; ++i) {
                            anchors.push('<a target="_blank" href="' + obj.properties[i].url + '">' + obj.properties[i].name + '</a>');
                        }
                        return anchors.join(' vs ');
                    })()
                }),
                restart,
                runButton,
                chart,
                details,
                additional,
                infoToggle
            ]
        });
    });
};
