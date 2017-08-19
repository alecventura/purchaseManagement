function productResource() {
    'use strict'
    var geral = geralResource();

    var _enUS = {
        saveSuccess: 'Product successfully saved!',
        deleteSuccess: 'Product successfully removed!',
        Category: 'Category',
        Price: 'Price',

        title: 'Products',
    };

    _enUS.Validation = _.extend(geral.Validation, _enUS.Validation);
    return _.extend(geral, _enUS);
};
