function successResource() {
    'use strict'
    var geral = geralResource();

    var _enUS = {
        title: 'Success!',
    };

    _enUS.Validation = _.extend(geral.Validation, _enUS.Validation);
    return _.extend(geral, _enUS);
};
