function zeroFill(number, width) {
    width -= number.toString().length;
    if (width > 0) {
        return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
    }
    return number + ""; // always return a string
};

ko.bindingHandlers.numberLength = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        var numberLengthSize = ko.unwrap(allBindingsAccessor.get('numberLengthSize'));
        var observable = valueAccessor(),
            formatted = ko.computed({
                read: function (key) {
                    var key = ko.unwrap(valueAccessor());
                    if (key) {
                        return zeroFill(key, numberLengthSize);
                    } else {
                        return '';
                    }
                },
                write: function (value) {
                    value = parseFloat(value.replace(/[^\.\d]/g, ""));
                    observable(isNaN(value) ? null : value); // Write to underlying storage 
                },
                disposeWhenNodeIsRemoved: element
            });

        //apply the actual value binding with our new computed
        ko.applyBindingsToNode(element, { value: formatted });
    },
    update: function (element, valueAccessor, allBindingsAccessor) {
        var numberLengthSize = ko.unwrap(allBindingsAccessor.get('numberLengthSize'));
        var observable = valueAccessor(),
            formatted = ko.computed({
                read: function (key) {
                    var key = ko.unwrap(valueAccessor());
                    if (key) {
                        return zeroFill(key, numberLengthSize);
                    } else {
                        return '';
                    }
                },
                write: function (value) {
                    value = parseFloat(value.replace(/[^\.\d]/g, ""));
                    observable(isNaN(value) ? null : value); // Write to underlying storage 
                },
                disposeWhenNodeIsRemoved: element
            });

        //apply the actual value binding with our new computed
        ko.applyBindingsToNode(element, { value: formatted });
    }
};
