function startResource() {
    'use strict'
    var geral = geralResource();

    var _enUS = {
        addedSuccess: 'Product successfully added to your cart!',
        deleteSuccess: 'Product successfully removed from your cart!',
        Category: 'Category',
        Price: 'Price',
        productsAvailable: 'Products available',
        MinPrice: 'Initial price',
        MaxPrice: 'Final price',
        Quantity: 'Quantity',
        AddToCart: 'Add to cart ',
        cartProducts: 'Products in cart',
        TotalPrice: 'Total price',
        Filter: 'Filter',

        title: 'Buy now!',
    };

    _enUS.Validation = _.extend(geral.Validation, _enUS.Validation);
    return _.extend(geral, _enUS);
};
