(function() {
    var elem, keys;
    var el = function(name, obj) {
        elem = document.createElement(name);
        keys = Object.keys(obj);
        for(var i = 0; i < keys.length; ++i) {
            elem[keys[i]] = obj[keys[i]];
        }
        if(obj.content !== undefined) {
            if(obj.content[0] === undefined) {
                elem.appendChild(obj.content);
            } else {
                for(var i = 0; i < obj.content.length; ++i) {
                    elem.appendChild(obj.content[i]);
                }
            }
        }
        if(obj.css !== undefined) {
            elem.style.cssText = obj.css;
        }
        return elem;
    }
    var template = function(fn) {
        return fn(el);
    }
    window.template = template;
})();


var PerfItem = function(obj) {
    return template(function(el) {
        var additional = el('div', {
            className: 'additional',
            innerHTML: '<p>' + obj.description + '</p>'
        });
        var infoToggle = el('div', {
            className: 'info-toggle',
            textContent: 'more info',
            onclick: function() {
                additional.classList.toggle('show');
                if(additional.classList.contains('show')) {
                    this.textContent = 'less info';
                } else {
                    this.textContent = 'more info';
                }
            }
        });

        var values = [], property;
        for(var i = 0; i < obj.properties.length; ++i) {
            property = obj.properties[i];
            //console.log(property);
            values.push(property.fn());
        }
        console.log(values);
        var max = Math.max.apply(Math, values);
        console.log(max);
        for(var i = 0; i < values.length; ++i) {
            values[i] = (values[i] * 100) / max;
        }
        console.log(values);

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
                el('div', {
                    className: 'chart',
                    content: (function() {
                        var arr = [];
                        var items = obj.properties;
                        for(var i = 0; i < items.length; ++i) {
                            arr.push(el('div', {
                                className: 'item',
                                content: [
                                    el('span', {
                                        className: 'outer-label',
                                        textContent: items[i].name
                                    }),
                                    el('div', {
                                        className: 'progress',
                                        css: 'width:' + values[i] + '%',
                                        content: el('span', {
                                            className: 'inner-label',
                                            textContent: items[i].name
                                        })
                                    })
                                ]
                            }));
                        }
                        return arr;
                    })()
                }),
                el('div', {
                    className: 'details',
                    content: [
                        el('span', {
                            className: 'from',
                            textContent: '0'
                        }),
                        el('span', {
                            className: 'to',
                            textContent: Math.round(max) + ' ops'
                        })
                    ]
                }),
                additional,
                infoToggle
            ]
        });
    });
};
