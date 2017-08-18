var validate;

validate = (function (_this) {
    return function (value, options, readFormat, moment) {
        var valueDate;
        if (value && (moment(value).isValid() || moment(value, readFormat).isValid())) {
            if (moment(value, readFormat).isValid()) {
                valueDate = moment(value, readFormat);
            } else if (moment(value).isValid()) {
                valueDate = moment(value);
            }
            if (options == null) {
                return valueDate;
            }
            if ((options.min != null) && (options.max == null)) {
                if (valueDate.isAfter(options.min) || valueDate.isSame(options.min)) {
                    return valueDate;
                }
                return null;
            } else if ((options.max != null) && (options.min == null)) {
                if (valueDate.isBefore(options.max) || valueDate.isSame(options.max)) {
                    return valueDate;
                }
                return null;
            } else if ((options.max != null) && (options.min != null)) {
                if ((valueDate.isBefore(options.max) || valueDate.isSame(options.max)) && (valueDate.isAfter(options.min) || valueDate.isSame(options.min))) {
                    return valueDate;
                }
                return null;
            } else if (!((options.min != null) && (options.max != null))) {
                return valueDate;
            }
        }
        return null;
    };

})(this);

ko.bindingHandlers.pickadate = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        var $element, $input, $parent, observable, options, picker, readFormat, validValue, value;
        observable = valueAccessor();
        if (!_.isFunction(observable.componentUpdate)) {
            observable.withComponent();
        }
        value = observable();
        $element = $(element);
        options = ko.unwrap(allBindingsAccessor.get('pickadateOptions'));
        options.editable = options.editable || false;
        options.selectMonths = options.selectMonths || true;
        options.selectYears = options.selectYears || true;
        options.min = options.min || new Date(2012, 0, 1);
        options.max = options.max || new Date(new Date().getFullYear() + 10, 11, 31);
        readFormat = allBindingsAccessor.get('readFormat');
        $input = $element.pickadate(options);
        picker = $input.pickadate('picker');
        $input.prop('readonly', true);
        validValue = validate(value, options, readFormat, moment);
        if (validValue != null) {
            picker.set('select', validValue.toDate());
        }
        picker.on("set", function (data) {
            var date;
            if (data.select) {
                date = moment(data.select);
                return observable.componentUpdate(date.toDate());
            } else if (data.highlight && data.highlight.length == 3) {
                date = new Date(parseInt(data.highlight[0]), data.highlight[1], data.highlight[2]);
                return observable.componentUpdate(date);
            } else {
                return observable.componentUpdate(null);
            }
        });
        $parent = $element.parent();
        if (options != null ? options.appendButtonSelector : void 0) {
            return $(options != null ? options.appendButtonSelector : void 0, $parent).click(function (event) {
                event.stopPropagation();
                return picker.open();
            });
        }

    },
    update: function (element, valueAccessor, allBindingsAccessor) {

        var observable, options, picker, readFormat, validValue, value;
        observable = valueAccessor();
        value = observable();
        options = ko.unwrap(allBindingsAccessor.get('pickadateOptions'));
        options.editable = false;
        readFormat = allBindingsAccessor.get('readFormat');
        //if (_.isFunction(observable.isModifiedByComponent) && observable.isModifiedByComponent()) {
        //    return;
        //}
        picker = $(element).pickadate('picker');
        validValue = validate(value, options, readFormat, moment);
        if (validValue != null) {
            return picker.set('select', validValue.toDate());
        } else {
            return picker.clear();
        }


    }
};
