function productCategoryResource() {
    'use strict'
    var geral = geralResource();

    var _enUS = {
        saveSuccess: 'Product category successfully saved!',
        deleteSuccess: 'Product category successfully removed!',

        title: 'Product categories',
    };

    _enUS.Validation = _.extend(geral.Validation, _enUS.Validation);
    return _.extend(geral, _enUS);
};
