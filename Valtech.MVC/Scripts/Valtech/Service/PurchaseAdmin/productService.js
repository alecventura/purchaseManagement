function productService() {
    'use strict'

    var _save = function (isUpdate, data, callback) {
        var url = null;
        if (isUpdate) {
            url = global.BASEURL_PATH + "PurchaseAdmin/UpdateProduct";
        } else {
            url = global.BASEURL_PATH + "PurchaseAdmin/CreateProduct";
        }
        return utils.postJSON(url, data, callback);
    },
        _remove = function (Id, callback) {
            return utils.deleteJSON(global.BASEURL_PATH + "PurchaseAdmin/DeleteProduct?Id=" + Id, callback);
        },
        _getProductCategoryList = function () {
            return utils.getJSON(global.BASEURL_PATH + "PurchaseAdmin/GetProductCategoryList");
        },
        _getProductList = function () {
            return utils.getJSON(global.BASEURL_PATH + "PurchaseAdmin/GetProductList");
        };

    var service = {
        save: _save,
        getProductList: _getProductList,
        getProductCategoryList: _getProductCategoryList,
        remove: _remove
    };

    return (service);
};
