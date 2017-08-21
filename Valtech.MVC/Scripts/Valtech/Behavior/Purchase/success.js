'use strict'
var lang = successResource();

var viewModel = function () {
    var self = this;

    self.onContinueClick = function () {
        window.location.href = global.BASEURL_PATH + "Purchase/Start";
    };

};

$(document).ready(function () {
    ko.applyBindings(new viewModel(), document.getElementById("success-content"));
});