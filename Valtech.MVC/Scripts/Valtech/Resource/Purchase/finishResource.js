function finishResource() {
    'use strict'
    var geral = geralResource();

    var _enUS = {
        Price: 'Price',
        Quantity: 'Quantity',
        TotalPrice: 'Total price',
        confirm: 'Please confirm your products',
        SelectPayment: 'Select your payment',
        TotalQuantity: 'Quantity',

        title: 'Confirm and finish your purchase',
    };

    _enUS.Validation = _.extend(geral.Validation, _enUS.Validation);
    return _.extend(geral, _enUS);
};
