function startService() {
    'use strict'

    var _add = function (data, callback) {
            return utils.postJSON(global.BASEURL_PATH + "Purchase/UpdateProduct", data, callback);
    },
        _remove = function (Id, callback) {
            return utils.deleteJSON(global.BASEURL_PATH + "Purchase/DeleteProduct?Id=" + Id, callback);
        },
        _getProductCategoryList = function () {
            return utils.getJSON(global.BASEURL_PATH + "PurchaseAdmin/GetProductCategoryList");
        },
        _getProductList = function () {
            return utils.getJSON(global.BASEURL_PATH + "PurchaseAdmin/GetProductList");
        };

    var service = {
        add: _add,
        getProductList: _getProductList,
        getProductCategoryList: _getProductCategoryList,
        remove: _remove
    };

    return (service);
};
