function paymentMethodService() {
    'use strict'

    var _save = function (isUpdate, data, callback) {
        var url = null;
        if (isUpdate) {
            url = global.BASEURL_PATH + "PurchaseAdmin/UpdatePaymentMethod";
        } else {
            url = global.BASEURL_PATH + "PurchaseAdmin/CreatePaymentMethod";
        }
        return utils.postJSON(url, data, callback);
    },
        _remove = function (Id, callback) {
            return utils.deleteJSON(global.BASEURL_PATH + "PurchaseAdmin/DeletePaymentMethod?Id=" + Id, callback);
        },
        _getPaymentMethodList = function () {
            return utils.getJSON(global.BASEURL_PATH + "PurchaseAdmin/GetPaymentMethodList");
    };

    var service = {
        save: _save,
        getPaymentMethodList: _getPaymentMethodList,
        remove: _remove
    };

    return (service);
};
