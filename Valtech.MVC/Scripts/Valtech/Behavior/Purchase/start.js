'use strict'
var lang = startResource();
var service = startService();
var requestObj = function () {

    var obj = {
        Id: ko.observable(null),
        Name: ko.observable(null),
        CategoryId: ko.observable(null),
        MinPrice: ko.observable(null),
        MinPriceText: ko.observable(null),
        MaxPrice: ko.observable(null),
        MaxPriceText: ko.observable(null),
    };
    obj.MaxPriceText.subscribe(function (value) {
        obj.MaxPrice(parseFloat(value.replace(/\,/g, '')));
    });
    obj.MinPriceText.subscribe(function (value) {
        obj.MinPrice(parseFloat(value.replace(/\,/g, '')));
    });
    return obj;
};

var viewModel = function (entitiesList, categories, cartProducts) {
    var self = this;
    self.request = ko.observable(requestObj());
    self.categoryList = ko.observableArray(categories || []);

    self.entitiesList = ko.observableArray([]);
    self.entitiesList.subscribe(function (list) {
        if (list && list.length > 0) {
            list.map(function (item) {
                item.Quantity = ko.observable(null);
                item.productHasQuantity = function () {
                    debugger;
                    return item.Quantity() && parseInt(item.Quantity()) > 0;
                }
            });
        }
    });
    self.entitiesList(entitiesList || []);

    self.onFormSubmited = function () {
        service.add(ko.toJS(self.request), function (data) {
            self.entitiesList(data);
            self.request(requestObj());
            utils.showLoading(false);
            noty({ text: lang.saveSuccess, timeout: 2000, type: 'success' });
        });
    };

    self.onDeleteClick = function (e) {
        service.remove(e.Id, function (data) {
            self.entitiesList(data);
            utils.showLoading(false);
            noty({ text: lang.deleteSuccess, timeout: 2000, type: 'success' });
        });
    };

    self.onCancelClick = function () {
        self.request(requestObj());
        self.applyCurrencyMask();
    };

    self.decreaseProductQuantity = function (p) {
        if (p.Quantity() && p.Quantity() > 0) {
            p.Quantity(p.Quantity() - 1);
        }
    };

    self.increaseProductQuantity = function (p) {
        if (!p.Quantity() || p.Quantity() < 9999) {
            p.Quantity(p.Quantity() - 0 + 1);
        }
    };

    self.cartList = ko.observableArray(cartProducts || []);

    self.removeProductFromCart = function (p) {
        alert('remove');
    };

    self.addProductToCart = function (p) {
        self.cartList.push(p);
    };

    self.applyCurrencyMask = function () {
        $(".currencyMask").maskMoney();
    };
    self.applyCurrencyMask();
};

$(document).ready(function () {
    $.when(service.getProductList(), service.getProductCategoryList())
        .then(function (entitiesList, categories) {
            ko.applyBindings(new viewModel(entitiesList[0], categories[0], []), document.getElementById("start-content"));
            utils.showLoading(false);
        });
});