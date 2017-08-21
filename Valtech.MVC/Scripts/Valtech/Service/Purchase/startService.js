function startService() {
    'use strict'

    var _finish = function (data, callback) {
            return utils.postJSON(global.BASEURL_PATH + "Purchase/StoreProductsOnSession", data, callback);
    },
        _remove = function (Id, callback) {
            return utils.deleteJSON(global.BASEURL_PATH + "Purchase/DeleteProduct?Id=" + Id, callback);
        },
        _getProductCategoryList = function () {
            return utils.getJSON(global.BASEURL_PATH + "PurchaseAdmin/GetProductCategoryList");
        },
        _getCartProductList = function () {
            return utils.getJSON(global.BASEURL_PATH + "Purchase/GetSelectedProductsList");
        },
        _getProductList = function () {
            return utils.getJSON(global.BASEURL_PATH + "PurchaseAdmin/GetProductList");
        };

    var service = {
        finish: _finish,
        getProductList: _getProductList,
        getProductCategoryList: _getProductCategoryList,
        remove: _remove,
        getCartProductList: _getCartProductList
    };

    return (service);
};
