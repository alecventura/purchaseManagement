'use strict'
var lang = productResource();
var service = productService();
var requestObj = function () {

    var obj = {
        Id: ko.observable(null),
        Name: ko.observable(null),
        CategoryId: ko.observable(null),
        Price: ko.observable(null),
        PriceText: ko.observable(null),
    };
    obj.PriceText.subscribe(function (value) {
        obj.Price(parseFloat(value.replace(/\,/g, '')));
    });
    return obj;
};

var viewModel = function (entitiesList, categories) {
    var self = this;
    self.request = ko.observable(requestObj());
    self.categoryList = ko.observableArray(categories || []);
    self.entitiesList = ko.observableArray(entitiesList || []);
    self.isUpdate = ko.observable(false);

    self.onFormSubmited = function () {
        service.save(self.isUpdate(), ko.toJS(self.request), function (data) {
            self.entitiesList(data);
            self.request(requestObj());
            utils.showLoading(false);
            noty({ text: lang.saveSuccess, timeout: 2000, type: 'success' });
        });
    };

    self.onEditClick = function (e) {
        self.onCancelClick();
        self.isUpdate(true);
        self.request().Name(e.Name);
        self.request().CategoryId(e.CategoryId);
        self.request().Price(e.Price);
        self.request().PriceText(e.Price + '');
        self.request().Id(e.Id);
        self.applyCurrencyMask();
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
        self.isUpdate(false);
        self.applyCurrencyMask();
    };

    self.applyCurrencyMask = function () {
        $(".currencyMask").maskMoney();
    };
    self.applyCurrencyMask();
};

$(document).ready(function () {
    $.when(service.getProductList(), service.getProductCategoryList())
        .then(function (entitiesList, categories) {
            ko.applyBindings(new viewModel(entitiesList[0], categories[0]), document.getElementById("product-content"));
            utils.showLoading(false);
        });
});