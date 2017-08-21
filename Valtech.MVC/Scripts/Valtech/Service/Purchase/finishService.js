function finishService() {
    'use strict'

    var _confirm = function (data, callback) {
        return utils.postJSON(global.BASEURL_PATH + "Purchase/ConfirmPurchase", data, callback);
    },
        _getPaymentMethodList = function () {
            return utils.getJSON(global.BASEURL_PATH + "PurchaseAdmin/GetPaymentMethodList");
        },
        _getProductList = function () {
            return utils.getJSON(global.BASEURL_PATH + "Purchase/GetSelectedProductsList");
        };

    var service = {
        confirm: _confirm,
        getProductList: _getProductList,
        getPaymentMethodList: _getPaymentMethodList
    };

    return (service);
};
