ko.bindingHandlers.tooltip = {
    normalize: function (valueAccessor) {
        var value = ko.unwrap(valueAccessor());
        if (typeof value === "object" && "data" in value) {
            return value;
        } else {
            return { data: value };
        }
    },

    getOptions: function (element, valueAccessor) {
        var value = ko.bindingHandlers.tooltip.normalize(valueAccessor);
        return $.extend({}, ko.unwrap(value.data), {
            items: element,
        });
    },

    init: function (element, valueAccessor) {
        var options = ko.bindingHandlers.tooltip.getOptions(element, valueAccessor);
        $(element).tooltip(options);
    },

    update: function (element, valueAccessor) {
        var options = ko.bindingHandlers.tooltip.getOptions(element, valueAccessor);
        $(element).tooltip(options);
    }
};
