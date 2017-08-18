ko.bindingHandlers.sort = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var asc = false;
        element.style.cursor = 'pointer';

        element.onclick = function () {
            var value = valueAccessor();
            var prop = value.prop;
            var data = value.arr;
            var lang = value.lang;

            asc = !asc;

            data.sort(function (left, right) {
                var rec1 = left;
                var rec2 = right;

                if (!asc) {
                    rec1 = right;
                    rec2 = left;
                }

                var props = prop.split('.');
                for (var i in props) {
                    var propName = props[i];
                    var parenIndex = propName.indexOf('()');
                    if (parenIndex > 0) {
                        propName = propName.substring(0, parenIndex);
                        rec1 = rec1[propName]();
                        rec2 = rec2[propName]();
                    } else {
                        rec1 = rec1[propName];
                        rec2 = rec2[propName];
                    }
                }
                if (lang != null && rec1 != null && rec2 != null) {
                    rec1 = lang[rec1]();
                    rec2 = lang[rec2]();
                }
                if (typeof (rec1) == 'number') {
                    rec1 = rec1 == null ? -99999 : rec1;
                    rec2 = rec2 == null ? -99999 : rec2;

                    return rec1 < rec2 ? 0 : 1;
                }
                rec2 = rec2 == null ? '' : rec2;
                rec1 = rec1 == null ? '' : rec1;

                rec2 = rec2.latinize(); // remove as acentuações e caracteres especiais
                rec1 = rec1.latinize(); // remove as acentuações e caracteres especiais

                return rec1.toLowerCase() == rec2.toLowerCase() ? 0 : rec1.toLowerCase() < rec2.toLowerCase() ? -1 : 1;
            });
        };
    }
};
