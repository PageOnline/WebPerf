(function(){

var content = document.getElementById('content');


for(var i = 0; i < 10; ++i) {
    if(data.js[i]) {
        content.appendChild(new PerfItem(data.js[i]));
    }
}

/*addEventListener('load', function() {

var i = 0;
var arr = [];

for(i = 0; i < 10000000; ++i) {
    arr.push(i);
}

console.log('for: ', WebPerf.run(function() {
    for(var i = 0; i < arr.length; ++i);
}) + 'ms');
console.log('forEach: ', WebPerf.run(function() {
    arr.forEach(function(element) {});
}) + 'ms');

console.log('for: ', 10000000 * WebPerf.perSecond(function() {
    for(var i = 0; i < arr.length; ++i);
}), 'ops');
console.log('forEach: ', 10000000 * WebPerf.perSecond(function() {
    arr.forEach(function(element) {});
}), 'ops');

console.time('for');
for(i = 0; i < arr.length; ++i) {}
console.timeEnd('for');
console.time('forEach');
arr.forEach(function(element, index, array) {});
console.timeEnd('forEach');

});*/

})();
