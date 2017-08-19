function paymentMethodResource() {
    'use strict'
    var geral = geralResource();

    var _enUS = {
        saveSuccess: 'Payment method successfully saved!',
        deleteSuccess: 'Payment method successfully removed!',

        title: 'Payment methods',
        };

    _enUS.Validation = _.extend(geral.Validation, _enUS.Validation);
    return _.extend(geral, _enUS);
};
