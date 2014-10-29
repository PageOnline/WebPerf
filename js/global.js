(function(){


/*     content    */

var content = document.getElementById('content');

var showItems = function(obj) {
    for(var i = 0; i < 5; ++i) {
        if(obj[i]) {
            content.appendChild(new PerfItem(obj[i]));
        }
    }
}

var nav = new Navigation([
    { name: 'ALL', codename: 'all' },
    { name: 'JAVASCRIPT', codename: 'js' },
    { name: 'CSS', codename: 'css' }
]);

showItems(data.js);

/*     /content     */

/*     search     */

var search = document.getElementById('search');
var searchInput = search.getElementsByTagName('input')[0];
var searchButton = search.getElementsByTagName('img')[0];

var doSearch = function() {
    var temp = Search.array.by(data.js, 'name', searchInput.value);
    if(temp.length === 0) {
        content.innerHTML = '<span class="nothing-found">Nothing to see here.</span>';
    } else {
        content.innerHTML = '';
        for(var i = 0; i < temp.length; ++i) {
            content.appendChild(new PerfItem(temp[i]));
        }
    }
};

searchInput.addEventListener('keydown', function(ev) {
    if(ev.keyCode === 13) {
        doSearch();
    }
});

searchButton.addEventListener('click', function(ev) {
    doSearch();
});

/*     /search     */


})();
