'use strict'
var lang = paymentMethodResource();
var service = paymentMethodService();
var requestObj = function () {

    var obj = {
        Id: ko.observable(null),
        Type: ko.observable(null),
    };
    return obj;
};

var viewModel = function (entitiesList) {
    var self = this;
    self.request = ko.observable(requestObj());
    self.entitiesList = ko.observableArray(entitiesList || [])
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
        self.request().Type(e.Type)
        self.request().Id(e.Id)
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
    };
};

$(document).ready(function () {
    $.when(service.getPaymentMethodList())
        .then(function (entitiesList) {
            ko.applyBindings(new viewModel(entitiesList), document.getElementById("paymentMethod-content"));
            utils.showLoading(false);
        });
});