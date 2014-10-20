(function() {

var WebPerf = function() {
    var counters = {};
    var temp = 'WebPerfTemp';
    this.start = function(name) {
        counters[name] = new Date().getTime();
    }
    this.stop = function(name) {
        counters[name] = new Date().getTime() - counters[name];
    }
    this.get = function(name) {
        return counters[name];
    }
    this.run = function(fn) {
        this.start(temp);
        fn.call();
        this.stop(temp);
        return this.get(temp);
    }
    this.perSecond = function(fn) {
        return 1000 / this.run(fn);
    }
}

window.WebPerf = new WebPerf();

})();
