'use strict'
var lang = startResource();
var service = startService();
var requestObj = function () {

    var obj = {
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
    self.filter = ko.observable(requestObj());
    self.categoryList = ko.observableArray(categories || []);

    self.entitiesList = ko.observableArray([]);
    self.entitiesList.subscribe(function (list) {
        if (list && list.length > 0) {
            list.map(function (item) {
                item.ProductId = item.Id;
                item.Quantity = ko.observable(null);
                item.TotalQuantity = ko.observable(null);                
                item.productHasQuantity = function () {
                    return item.Quantity() && parseInt(item.Quantity()) > 0;
                }
            });
        }
    });
    self.entitiesList(entitiesList || []);
    self.entitiesListFiltered = ko.observableArray(self.entitiesList());

    self.onFormSubmited = function () {
        var arrayAux = self.entitiesList();
        if (self.filter().CategoryId() && self.filter().CategoryId().length > 0) {
            arrayAux = arrayAux.filter(function (item) { return item.CategoryId == self.filter().CategoryId() });
        }
        if (self.filter().Name() && self.filter().Name().length > 0) {
            arrayAux = arrayAux.filter(function (item) { return item.Name.toLowerCase().indexOf(self.filter().Name().toLowerCase()) > -1 });
        }
        if (self.filter().MinPrice() && self.filter().MinPrice() > 0) {
            arrayAux = arrayAux.filter(function (item) { return item.Price >= self.filter().MinPrice() });
        }
        if (self.filter().MaxPrice() && self.filter().MaxPrice() > 0) {
            arrayAux = arrayAux.filter(function (item) { return item.Price <= self.filter().MaxPrice() });
        }
        self.entitiesListFiltered(arrayAux);
    };

    self.onDeleteClick = function (e) {
        self.cartList.remove(e);
    };

    self.onCancelClick = function () {
        self.filter(requestObj());
        self.applyCurrencyMask();
        self.entitiesListFiltered(self.entitiesList());
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

    cartProducts.map(function (item) {
        item.TotalQuantity = ko.observable(item.TotalQuantity)
    });
    self.cartList = ko.observableArray(cartProducts || []);

    self.removeProductFromCart = function (p) {
        alert('remove');
    };

    self.addProductToCart = function (p) {
        var existentProduct = self.cartList().find(function (item) { return item.ProductId === p.ProductId });
        if (existentProduct) {
            existentProduct.TotalQuantity(parseInt(existentProduct.TotalQuantity()) + parseInt(p.Quantity()));
        } else {
            p.TotalQuantity(p.Quantity());
            self.cartList.push(p);
        }
        p.Quantity(null);
    };

    self.onFinishClick = function () {
        service.finish(ko.toJS(self.cartList), function (data) {
            utils.showLoading(false);
            window.location.href = data;
        });
    };

    self.applyCurrencyMask = function () {
        $(".currencyMask").maskMoney();
    };
    self.applyCurrencyMask();
};

$(document).ready(function () {
    $.when(service.getProductList(), service.getProductCategoryList(), service.getCartProductList())
        .then(function (entitiesList, categories, cartProductsList) {
            ko.applyBindings(new viewModel(entitiesList[0], categories[0], cartProductsList[0]), document.getElementById("start-content"));
            utils.showLoading(false);
        });
});