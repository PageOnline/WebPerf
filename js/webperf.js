(function() {

var Wait = function(fn) {
    var waiter = document.getElementsByClassName('waiter')[0];
    waiter.classList.add('show');
    fn();
    waiter.classList.remove('show');
    this.hide = function() {
        waiter.classList.remove('show');
    };
    this.show = function() {
        waiter.classList.add('show');
    }
}

Wait.waiter = document.getElementsByClassName('waiter')[0];
Wait.show = function() { Wait.waiter.classList.add('show') }
Wait.hide = function() { Wait.waiter.classList.remove('show') }

window.Wait = Wait;

Wait.show();
addEventListener('load', Wait.hide);

})();

(function() {

var counters = {};
var temp = 'WebPerfTemp';
var multiplier;

var WebPerf = function() {
    this.start = function(name) {
        counters[name] = new Date().getTime();
    }
    this.stop = function(name) {
        counters[name] = new Date().getTime() - counters[name];
    }
    this.get = function(name) {
        return counters[name];
    }
    /*this.run = function(fn) {
        this.start(temp);
        fn.call();
        this.stop(temp);
        return this.get(temp);
    }*/
    this.perSecond = function(fn) {
        return 1000 / this.run(fn);
    }
    this.run = function(fn) {
        multiplier = 1;
        do {
            this.start(temp);
            for(i = 0; i < multiplier; ++i) fn.call();
            this.stop(temp);
            multiplier *= 10;
        } while(this.get(temp) < 500);
        return multiplier / this.get(temp);
    }
}

window.WebPerf = new WebPerf();

})();
