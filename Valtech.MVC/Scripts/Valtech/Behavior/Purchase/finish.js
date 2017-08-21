'use strict'
var lang = finishResource();
var service = finishService();

var viewModel = function (entitiesList, paymentMethodList) {
    var self = this;

    entitiesList.map(function (item) {
        item.Price = parseInt(item.TotalQuantity) * parseInt(item.Price)
    });

    self.PaymentMethodId = ko.observable(null);
    self.entitiesList = ko.observableArray(entitiesList);
    self.objTotal = {
        Name: "Total",
        Price: 0,
        TotalQuantity: 0,
        Class: "Total"
    }
    for (var i = 0; i < entitiesList.length; i++) {
        self.objTotal.Price = parseInt(self.objTotal.Price) + parseInt(entitiesList[i].Price);
        self.objTotal.TotalQuantity = parseInt(self.objTotal.TotalQuantity) + parseInt(entitiesList[i].TotalQuantity);
    }
    self.entitiesList.push(self.objTotal);

    self.paymentMethodList = ko.observableArray(paymentMethodList);

    self.onFormSubmited = function () {
        service.confirm({ PaymentMethodId: self.PaymentMethodId() }, function (data) {
            utils.showLoading(false);
            window.location.href = data;
        });
    };

    self.onContinueClick = function () {
        window.location.href = global.BASEURL_PATH + "Purchase/Start";
    };

};

$(document).ready(function () {
    $.when(service.getProductList(), service.getPaymentMethodList())
        .then(function (entitiesList, paymentMethodList) {
            ko.applyBindings(new viewModel(entitiesList[0], paymentMethodList[0]), document.getElementById("finish-content"));
            utils.showLoading(false);
        });
});