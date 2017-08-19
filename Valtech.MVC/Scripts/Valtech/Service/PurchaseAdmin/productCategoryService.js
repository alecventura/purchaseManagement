function productCategoryService() {
    'use strict'

    var _save = function (isUpdate, data, callback) {
        var url = null;
        if (isUpdate) {
            url = global.BASEURL_PATH + "PurchaseAdmin/UpdateProductCategory";
        } else {
            url = global.BASEURL_PATH + "PurchaseAdmin/CreateProductCategory";
        }
        return utils.postJSON(url, data, callback);
    },
        _remove = function (Id, callback) {
            return utils.deleteJSON(global.BASEURL_PATH + "PurchaseAdmin/DeleteProductCategory?Id=" + Id, callback);
        },
        _getProductCategoryList = function () {
            return utils.getJSON(global.BASEURL_PATH + "PurchaseAdmin/GetProductCategoryList");
        };

    var service = {
        save: _save,
        getProductCategoryList: _getProductCategoryList,
        remove: _remove
    };

    return (service);
};
