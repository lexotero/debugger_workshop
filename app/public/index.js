'use strict';

(function () {
    function changeHeader() {
        var mainHeader = document.getElementById('main-header');
        mainHeader.text = "Debugged!"
    }
    console.log('Log from index.js');
    changeHeader();
})();
