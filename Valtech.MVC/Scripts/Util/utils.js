'use strict'

var Latinise = {}; Latinise.latin_map = { "Á": "A", "Ă": "A", "Ắ": "A", "Ặ": "A", "Ằ": "A", "Ẳ": "A", "Ẵ": "A", "Ǎ": "A", "Â": "A", "Ấ": "A", "Ậ": "A", "Ầ": "A", "Ẩ": "A", "Ẫ": "A", "Ä": "A", "Ǟ": "A", "Ȧ": "A", "Ǡ": "A", "Ạ": "A", "Ȁ": "A", "À": "A", "Ả": "A", "Ȃ": "A", "Ā": "A", "Ą": "A", "Å": "A", "Ǻ": "A", "Ḁ": "A", "Ⱥ": "A", "Ã": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ḃ": "B", "Ḅ": "B", "Ɓ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ć": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ĉ": "C", "Ċ": "C", "Ƈ": "C", "Ȼ": "C", "Ď": "D", "Ḑ": "D", "Ḓ": "D", "Ḋ": "D", "Ḍ": "D", "Ɗ": "D", "Ḏ": "D", "ǲ": "D", "ǅ": "D", "Đ": "D", "Ƌ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "É": "E", "Ĕ": "E", "Ě": "E", "Ȩ": "E", "Ḝ": "E", "Ê": "E", "Ế": "E", "Ệ": "E", "Ề": "E", "Ể": "E", "Ễ": "E", "Ḙ": "E", "Ë": "E", "Ė": "E", "Ẹ": "E", "Ȅ": "E", "È": "E", "Ẻ": "E", "Ȇ": "E", "Ē": "E", "Ḗ": "E", "Ḕ": "E", "Ę": "E", "Ɇ": "E", "Ẽ": "E", "Ḛ": "E", "Ꝫ": "ET", "Ḟ": "F", "Ƒ": "F", "Ǵ": "G", "Ğ": "G", "Ǧ": "G", "Ģ": "G", "Ĝ": "G", "Ġ": "G", "Ɠ": "G", "Ḡ": "G", "Ǥ": "G", "Ḫ": "H", "Ȟ": "H", "Ḩ": "H", "Ĥ": "H", "Ⱨ": "H", "Ḧ": "H", "Ḣ": "H", "Ḥ": "H", "Ħ": "H", "Í": "I", "Ĭ": "I", "Ǐ": "I", "Î": "I", "Ï": "I", "Ḯ": "I", "İ": "I", "Ị": "I", "Ȉ": "I", "Ì": "I", "Ỉ": "I", "Ȋ": "I", "Ī": "I", "Į": "I", "Ɨ": "I", "Ĩ": "I", "Ḭ": "I", "Ꝺ": "D", "Ꝼ": "F", "Ᵹ": "G", "Ꞃ": "R", "Ꞅ": "S", "Ꞇ": "T", "Ꝭ": "IS", "Ĵ": "J", "Ɉ": "J", "Ḱ": "K", "Ǩ": "K", "Ķ": "K", "Ⱪ": "K", "Ꝃ": "K", "Ḳ": "K", "Ƙ": "K", "Ḵ": "K", "Ꝁ": "K", "Ꝅ": "K", "Ĺ": "L", "Ƚ": "L", "Ľ": "L", "Ļ": "L", "Ḽ": "L", "Ḷ": "L", "Ḹ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ḻ": "L", "Ŀ": "L", "Ɫ": "L", "ǈ": "L", "Ł": "L", "Ǉ": "LJ", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ń": "N", "Ň": "N", "Ņ": "N", "Ṋ": "N", "Ṅ": "N", "Ṇ": "N", "Ǹ": "N", "Ɲ": "N", "Ṉ": "N", "Ƞ": "N", "ǋ": "N", "Ñ": "N", "Ǌ": "NJ", "Ó": "O", "Ŏ": "O", "Ǒ": "O", "Ô": "O", "Ố": "O", "Ộ": "O", "Ồ": "O", "Ổ": "O", "Ỗ": "O", "Ö": "O", "Ȫ": "O", "Ȯ": "O", "Ȱ": "O", "Ọ": "O", "Ő": "O", "Ȍ": "O", "Ò": "O", "Ỏ": "O", "Ơ": "O", "Ớ": "O", "Ợ": "O", "Ờ": "O", "Ở": "O", "Ỡ": "O", "Ȏ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ō": "O", "Ṓ": "O", "Ṑ": "O", "Ɵ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Õ": "O", "Ṍ": "O", "Ṏ": "O", "Ȭ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ɛ": "E", "Ɔ": "O", "Ȣ": "OU", "Ṕ": "P", "Ṗ": "P", "Ꝓ": "P", "Ƥ": "P", "Ꝕ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝙ": "Q", "Ꝗ": "Q", "Ŕ": "R", "Ř": "R", "Ŗ": "R", "Ṙ": "R", "Ṛ": "R", "Ṝ": "R", "Ȑ": "R", "Ȓ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꜿ": "C", "Ǝ": "E", "Ś": "S", "Ṥ": "S", "Š": "S", "Ṧ": "S", "Ş": "S", "Ŝ": "S", "Ș": "S", "Ṡ": "S", "Ṣ": "S", "Ṩ": "S", "Ť": "T", "Ţ": "T", "Ṱ": "T", "Ț": "T", "Ⱦ": "T", "Ṫ": "T", "Ṭ": "T", "Ƭ": "T", "Ṯ": "T", "Ʈ": "T", "Ŧ": "T", "Ɐ": "A", "Ꞁ": "L", "Ɯ": "M", "Ʌ": "V", "Ꜩ": "TZ", "Ú": "U", "Ŭ": "U", "Ǔ": "U", "Û": "U", "Ṷ": "U", "Ü": "U", "Ǘ": "U", "Ǚ": "U", "Ǜ": "U", "Ǖ": "U", "Ṳ": "U", "Ụ": "U", "Ű": "U", "Ȕ": "U", "Ù": "U", "Ủ": "U", "Ư": "U", "Ứ": "U", "Ự": "U", "Ừ": "U", "Ử": "U", "Ữ": "U", "Ȗ": "U", "Ū": "U", "Ṻ": "U", "Ų": "U", "Ů": "U", "Ũ": "U", "Ṹ": "U", "Ṵ": "U", "Ꝟ": "V", "Ṿ": "V", "Ʋ": "V", "Ṽ": "V", "Ꝡ": "VY", "Ẃ": "W", "Ŵ": "W", "Ẅ": "W", "Ẇ": "W", "Ẉ": "W", "Ẁ": "W", "Ⱳ": "W", "Ẍ": "X", "Ẋ": "X", "Ý": "Y", "Ŷ": "Y", "Ÿ": "Y", "Ẏ": "Y", "Ỵ": "Y", "Ỳ": "Y", "Ƴ": "Y", "Ỷ": "Y", "Ỿ": "Y", "Ȳ": "Y", "Ɏ": "Y", "Ỹ": "Y", "Ź": "Z", "Ž": "Z", "Ẑ": "Z", "Ⱬ": "Z", "Ż": "Z", "Ẓ": "Z", "Ȥ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ĳ": "IJ", "Œ": "OE", "ᴀ": "A", "ᴁ": "AE", "ʙ": "B", "ᴃ": "B", "ᴄ": "C", "ᴅ": "D", "ᴇ": "E", "ꜰ": "F", "ɢ": "G", "ʛ": "G", "ʜ": "H", "ɪ": "I", "ʁ": "R", "ᴊ": "J", "ᴋ": "K", "ʟ": "L", "ᴌ": "L", "ᴍ": "M", "ɴ": "N", "ᴏ": "O", "ɶ": "OE", "ᴐ": "O", "ᴕ": "OU", "ᴘ": "P", "ʀ": "R", "ᴎ": "N", "ᴙ": "R", "ꜱ": "S", "ᴛ": "T", "ⱻ": "E", "ᴚ": "R", "ᴜ": "U", "ᴠ": "V", "ᴡ": "W", "ʏ": "Y", "ᴢ": "Z", "á": "a", "ă": "a", "ắ": "a", "ặ": "a", "ằ": "a", "ẳ": "a", "ẵ": "a", "ǎ": "a", "â": "a", "ấ": "a", "ậ": "a", "ầ": "a", "ẩ": "a", "ẫ": "a", "ä": "a", "ǟ": "a", "ȧ": "a", "ǡ": "a", "ạ": "a", "ȁ": "a", "à": "a", "ả": "a", "ȃ": "a", "ā": "a", "ą": "a", "ᶏ": "a", "ẚ": "a", "å": "a", "ǻ": "a", "ḁ": "a", "ⱥ": "a", "ã": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ḃ": "b", "ḅ": "b", "ɓ": "b", "ḇ": "b", "ᵬ": "b", "ᶀ": "b", "ƀ": "b", "ƃ": "b", "ɵ": "o", "ć": "c", "č": "c", "ç": "c", "ḉ": "c", "ĉ": "c", "ɕ": "c", "ċ": "c", "ƈ": "c", "ȼ": "c", "ď": "d", "ḑ": "d", "ḓ": "d", "ȡ": "d", "ḋ": "d", "ḍ": "d", "ɗ": "d", "ᶑ": "d", "ḏ": "d", "ᵭ": "d", "ᶁ": "d", "đ": "d", "ɖ": "d", "ƌ": "d", "ı": "i", "ȷ": "j", "ɟ": "j", "ʄ": "j", "ǳ": "dz", "ǆ": "dz", "é": "e", "ĕ": "e", "ě": "e", "ȩ": "e", "ḝ": "e", "ê": "e", "ế": "e", "ệ": "e", "ề": "e", "ể": "e", "ễ": "e", "ḙ": "e", "ë": "e", "ė": "e", "ẹ": "e", "ȅ": "e", "è": "e", "ẻ": "e", "ȇ": "e", "ē": "e", "ḗ": "e", "ḕ": "e", "ⱸ": "e", "ę": "e", "ᶒ": "e", "ɇ": "e", "ẽ": "e", "ḛ": "e", "ꝫ": "et", "ḟ": "f", "ƒ": "f", "ᵮ": "f", "ᶂ": "f", "ǵ": "g", "ğ": "g", "ǧ": "g", "ģ": "g", "ĝ": "g", "ġ": "g", "ɠ": "g", "ḡ": "g", "ᶃ": "g", "ǥ": "g", "ḫ": "h", "ȟ": "h", "ḩ": "h", "ĥ": "h", "ⱨ": "h", "ḧ": "h", "ḣ": "h", "ḥ": "h", "ɦ": "h", "ẖ": "h", "ħ": "h", "ƕ": "hv", "í": "i", "ĭ": "i", "ǐ": "i", "î": "i", "ï": "i", "ḯ": "i", "ị": "i", "ȉ": "i", "ì": "i", "ỉ": "i", "ȋ": "i", "ī": "i", "į": "i", "ᶖ": "i", "ɨ": "i", "ĩ": "i", "ḭ": "i", "ꝺ": "d", "ꝼ": "f", "ᵹ": "g", "ꞃ": "r", "ꞅ": "s", "ꞇ": "t", "ꝭ": "is", "ǰ": "j", "ĵ": "j", "ʝ": "j", "ɉ": "j", "ḱ": "k", "ǩ": "k", "ķ": "k", "ⱪ": "k", "ꝃ": "k", "ḳ": "k", "ƙ": "k", "ḵ": "k", "ᶄ": "k", "ꝁ": "k", "ꝅ": "k", "ĺ": "l", "ƚ": "l", "ɬ": "l", "ľ": "l", "ļ": "l", "ḽ": "l", "ȴ": "l", "ḷ": "l", "ḹ": "l", "ⱡ": "l", "ꝉ": "l", "ḻ": "l", "ŀ": "l", "ɫ": "l", "ᶅ": "l", "ɭ": "l", "ł": "l", "ǉ": "lj", "ſ": "s", "ẜ": "s", "ẛ": "s", "ẝ": "s", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ᵯ": "m", "ᶆ": "m", "ń": "n", "ň": "n", "ņ": "n", "ṋ": "n", "ȵ": "n", "ṅ": "n", "ṇ": "n", "ǹ": "n", "ɲ": "n", "ṉ": "n", "ƞ": "n", "ᵰ": "n", "ᶇ": "n", "ɳ": "n", "ñ": "n", "ǌ": "nj", "ó": "o", "ŏ": "o", "ǒ": "o", "ô": "o", "ố": "o", "ộ": "o", "ồ": "o", "ổ": "o", "ỗ": "o", "ö": "o", "ȫ": "o", "ȯ": "o", "ȱ": "o", "ọ": "o", "ő": "o", "ȍ": "o", "ò": "o", "ỏ": "o", "ơ": "o", "ớ": "o", "ợ": "o", "ờ": "o", "ở": "o", "ỡ": "o", "ȏ": "o", "ꝋ": "o", "ꝍ": "o", "ⱺ": "o", "ō": "o", "ṓ": "o", "ṑ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "õ": "o", "ṍ": "o", "ṏ": "o", "ȭ": "o", "ƣ": "oi", "ꝏ": "oo", "ɛ": "e", "ᶓ": "e", "ɔ": "o", "ᶗ": "o", "ȣ": "ou", "ṕ": "p", "ṗ": "p", "ꝓ": "p", "ƥ": "p", "ᵱ": "p", "ᶈ": "p", "ꝕ": "p", "ᵽ": "p", "ꝑ": "p", "ꝙ": "q", "ʠ": "q", "ɋ": "q", "ꝗ": "q", "ŕ": "r", "ř": "r", "ŗ": "r", "ṙ": "r", "ṛ": "r", "ṝ": "r", "ȑ": "r", "ɾ": "r", "ᵳ": "r", "ȓ": "r", "ṟ": "r", "ɼ": "r", "ᵲ": "r", "ᶉ": "r", "ɍ": "r", "ɽ": "r", "ↄ": "c", "ꜿ": "c", "ɘ": "e", "ɿ": "r", "ś": "s", "ṥ": "s", "š": "s", "ṧ": "s", "ş": "s", "ŝ": "s", "ș": "s", "ṡ": "s", "ṣ": "s", "ṩ": "s", "ʂ": "s", "ᵴ": "s", "ᶊ": "s", "ȿ": "s", "ɡ": "g", "ᴑ": "o", "ᴓ": "o", "ᴝ": "u", "ť": "t", "ţ": "t", "ṱ": "t", "ț": "t", "ȶ": "t", "ẗ": "t", "ⱦ": "t", "ṫ": "t", "ṭ": "t", "ƭ": "t", "ṯ": "t", "ᵵ": "t", "ƫ": "t", "ʈ": "t", "ŧ": "t", "ᵺ": "th", "ɐ": "a", "ᴂ": "ae", "ǝ": "e", "ᵷ": "g", "ɥ": "h", "ʮ": "h", "ʯ": "h", "ᴉ": "i", "ʞ": "k", "ꞁ": "l", "ɯ": "m", "ɰ": "m", "ᴔ": "oe", "ɹ": "r", "ɻ": "r", "ɺ": "r", "ⱹ": "r", "ʇ": "t", "ʌ": "v", "ʍ": "w", "ʎ": "y", "ꜩ": "tz", "ú": "u", "ŭ": "u", "ǔ": "u", "û": "u", "ṷ": "u", "ü": "u", "ǘ": "u", "ǚ": "u", "ǜ": "u", "ǖ": "u", "ṳ": "u", "ụ": "u", "ű": "u", "ȕ": "u", "ù": "u", "ủ": "u", "ư": "u", "ứ": "u", "ự": "u", "ừ": "u", "ử": "u", "ữ": "u", "ȗ": "u", "ū": "u", "ṻ": "u", "ų": "u", "ᶙ": "u", "ů": "u", "ũ": "u", "ṹ": "u", "ṵ": "u", "ᵫ": "ue", "ꝸ": "um", "ⱴ": "v", "ꝟ": "v", "ṿ": "v", "ʋ": "v", "ᶌ": "v", "ⱱ": "v", "ṽ": "v", "ꝡ": "vy", "ẃ": "w", "ŵ": "w", "ẅ": "w", "ẇ": "w", "ẉ": "w", "ẁ": "w", "ⱳ": "w", "ẘ": "w", "ẍ": "x", "ẋ": "x", "ᶍ": "x", "ý": "y", "ŷ": "y", "ÿ": "y", "ẏ": "y", "ỵ": "y", "ỳ": "y", "ƴ": "y", "ỷ": "y", "ỿ": "y", "ȳ": "y", "ẙ": "y", "ɏ": "y", "ỹ": "y", "ź": "z", "ž": "z", "ẑ": "z", "ʑ": "z", "ⱬ": "z", "ż": "z", "ẓ": "z", "ȥ": "z", "ẕ": "z", "ᵶ": "z", "ᶎ": "z", "ʐ": "z", "ƶ": "z", "ɀ": "z", "ﬀ": "ff", "ﬃ": "ffi", "ﬄ": "ffl", "ﬁ": "fi", "ﬂ": "fl", "ĳ": "ij", "œ": "oe", "ﬆ": "st", "ₐ": "a", "ₑ": "e", "ᵢ": "i", "ⱼ": "j", "ₒ": "o", "ᵣ": "r", "ᵤ": "u", "ᵥ": "v", "ₓ": "x" };
String.prototype.latinise = function () { return this.replace(/[^A-Za-z0-9\[\] ]/g, function (a) { return Latinise.latin_map[a] || a }) };
String.prototype.latinize = String.prototype.latinise;
String.prototype.isLatin = function () { return this == this.latinise() };

var utils = {

    formatMoneyFromTextToFloat: function (value) {
        if (value) {
            var valor = null;
            if (global.idioma == 'pt-BR') {
                valor = value.replace(/\./g, '').replace(',', '.').trim();
            }
            else {
                valor = value.replace(/\,/g, '').trim();
            }
            valor = parseFloat(valor);
            if (valor > 0) {
                return valor;
            } else {
                return null;
            }
        } else {
            return null;
        }
    },

    formatCurrency: function (value) {
        if (!value) {
            return null;
        }
        if (global.idioma == 'pt-BR') {
            value = value.toString().replace('.', ',');
            value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

            var stringArray = value.split(',');
            if (stringArray.length > 1) {
                stringArray[1] = utils.zeroFillRigth(stringArray[1], 2);
            } else {
                stringArray[1] = '00'
            }

            return stringArray.join(',');
        } else {
            value = value.toString();
            var stringArray = value.split('.');
            if (stringArray.length > 1) {
                stringArray[1] = utils.zeroFillRigth(stringArray[1], 2);
            } else {
                stringArray[1] = '00'
            }
            return stringArray.join('.');
        };
    },

    sortBy: function (path, reverse, primer, then) { // http://jsfiddle.net/gfullam/sq9U7/
        var get = function (obj, path) {
            if (path) {
                path = path.split('.');
                for (var i = 0, len = path.length - 1; i < len; i++) {
                    obj = obj[path[i]];
                };
                return obj[path[len]];
            }
            return obj;
        },
            prime = function (obj) {
                return primer ? primer(get(obj, path)) : get(obj, path);
            };

        return function (a, b) {
            var A = prime(a),
                B = prime(b);

            if (typeof A === 'string') {
                A = A.latinise().toLowerCase();
            }

            if (typeof B === 'string') {
                B = B.latinise().toLowerCase();
            }

            return (
                (A < B) ? -1 :
                (A > B) ? 1 :
                (typeof then === 'function') ? then(a, b) : 0
            ) * [1, -1][+!!reverse];
        };
    },

    executeBootboxConfirm: function (message, callback) {
        if ($('.bootbox').length > 0) {
            return false;
        }
        var canExecute = true;
        bootbox.confirm(message, function (result) {
            if (result && canExecute) {
                callback();
                canExecute = false;
            }
        });
    },

    generateGuid: function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },

    parseDateReturnObj: function (date) {
        if (date == null)
            return null;
        var parsedDate = null;
        if (Object.prototype.toString.call(date) === '[object Date]') {
            parsedDate = date;
        } else {
            parsedDate = new Date(parseInt(date.substr(6)));
        }
        return parsedDate;
    },

    parseDate: function (date) {
        if (date == null)
            return null;
        var parsedDate = null;
        if (Object.prototype.toString.call(date) === '[object Date]') {
            parsedDate = date;
        } else {
            parsedDate = new Date(parseInt(date.substr(6)));
        }

        if (global.idioma == 'pt-BR') {
            return ('0' + parsedDate.getDate()).slice(-2) + '/' + ('0' + (parsedDate.getMonth() + 1)).slice(-2) + '/' + parsedDate.getFullYear();
        } else {
            return 'TODO: fazer internacionalização';
        }
    },

    parseDateAndTime: function (date) {
        if (date == null)
            return null;
        var parsedDate = null;
        if (Object.prototype.toString.call(date) === '[object Date]') {
            parsedDate = date;
        } else {
            parsedDate = new Date(parseInt(date.substr(6)));
        }

        if (global.idioma == 'pt-BR') {
            return ('0' + parsedDate.getDate()).slice(-2) + '/' + ('0' + (parsedDate.getMonth() + 1)).slice(-2) + '/' + parsedDate.getFullYear() + ' ' + ('0' + parsedDate.getHours()).slice(-2) + ':' + ('0' + parsedDate.getMinutes()).slice(-2);
        } else {
            return 'TODO: fazer internacionalização';
        }
    },

    setHighLight: function (originalArray, substring, attributeToCompare, makeSlice, sliceSize) {
        makeSlice = makeSlice != null ? makeSlice : true;
        sliceSize = sliceSize != null ? sliceSize : 6; // O slice é para pegar os 6 primeiros
        substring = substring.replace(new RegExp('\\(', 'g'), '\\(').replace(new RegExp('\\)', 'g'), '\\)').replace(new RegExp('\\{', 'g'), '\\{').replace(new RegExp('\\}', 'g'), '\\}').replace(new RegExp('\\.', 'g'), '\\.');
        var re = new RegExp(substring, "i");
        var newArray = originalArray.filter(function (item) {
            return re.test(item[attributeToCompare]);
        });
        if (makeSlice) {
            newArray = newArray.slice(0, sliceSize);
        }
        for (var i = 0; i < newArray.length; i++) {
            var html = '';
            html = newArray[i][attributeToCompare].replace(re, function (x) { return '<span class="highlightText">' + x + '</span>' });
            newArray[i].html = html;
        }
        return newArray;
    },

    parseJsDate: function (date) {
        if (date == null)
            return null;
        if (global.idioma == 'pt-BR') {
            var dd = date.getDate();
            var mm = date.getMonth() + 1; //January is 0!

            var yyyy = date.getFullYear();
            if (dd < 10) {
                dd = '0' + dd
            }
            if (mm < 10) {
                mm = '0' + mm
            }
            var date = dd + '/' + mm + '/' + yyyy;
            return date;
        } else {
            return 'TODO: fazer internacionalização';
        }
    },

    openCalendar: function (vm, event) {
        var picker = $(event.target).pickadate('picker')
        picker.open();
    },

    pickadateOptions: function (container) {
        var options = {
            monthsFull: lang.Pickadate.monthsFull,
            monthsShort: lang.Pickadate.monthsShort,
            weekdaysFull: lang.Pickadate.weekdaysFull,
            weekdaysShort: lang.Pickadate.weekdaysShort,
            // Buttons
            today: lang.Pickadate.today,
            clear: lang.Pickadate.clear,
            close: lang.Pickadate.close,

            // Tooltips
            labelMonthNext: lang.Pickadate.nextMonth,
            labelMonthPrev: lang.Pickadate.previousMonth,
            labelMonthSelect: lang.Pickadate.selectMonth,
            labelYearSelect: lang.Pickadate.selectYear,


            editable: true,
        }

        options.container = container;
        return options;
    },

    htmlError: '<span class="validation-error">{{message}}</span>',

    handleError: function (reponse) {
        switch (reponse.status) {
            case 400:
                utils.handleValidationErrors(reponse.responseText);
                break;
            case 403:
                window.location.href = global.BASEURL_PATH + 'Home/Forbidden'
                break
            case 404:
                window.location.href = global.BASEURL_PATH + 'Home/NotFound'
                break;
            case 500:
                window.location.href = global.BASEURL_PATH + 'Home/Error'
                break
        }
        utils.showLoading(false);
    },

    clearErrors: function () {
        $('.validation-error').remove();
    },

    showErrorMessage: function (message, key, params) {
        if (key == 'files') {
            var htmlId = null;
            var messageSplited = message.split('_');
            if (messageSplited.length > 1) {
                htmlId = messageSplited[1];
                message = messageSplited[0];
            }
        }

        var errorMessage = lang.Validation[message];
        if (errorMessage == null) {
            errorMessage = lang.Validation['ValidationMessageMissing'];
        }
        else {
            if (params && params.length > 0) {
                for (var i = 0; i < params.length; i++) {
                    var param = _.keys(params[i])[0].toString();
                    errorMessage = errorMessage.replace('{{' + param + '}}', params[i][param]);
                }
            }
        }

        var htmlElement = document.getElementById(key);
        if (htmlElement == null) {
            // Adicionado suporte para vários componentes de upload na mesma tela, mas vai mostrar mensagem de erro para todos eles:
            if (key == 'files') {
                if (htmlId) {
                    $('#' + htmlId + ' .k-upload-files').remove();
                    $('#' + htmlId + '.demo-section.k-content').append(utils.htmlError.replace('{{message}}', errorMessage));
                } else {
                    $('.demo-section.k-content').append(utils.htmlError.replace('{{message}}', errorMessage));
                }
            }
            else {
                noty({ text: errorMessage, timeout: 7500, type: 'error' });
            }
        } else {
            $('#' + key).append(utils.htmlError.replace('{{message}}', errorMessage));
        }
    },

    handleValidationErrors: function (responseText) {
        utils.clearErrors();
        if (lang == null) {
            return alert(responseText);
        }
        var errorObj = JSON.parse(responseText);
        if (Object.prototype.toString.call(errorObj) === '[object Array]') {
            for (var i = 0; i < errorObj.length; i++) {
                utils.showErrorMessage(errorObj[i].Message, errorObj[i].Key, errorObj[i].Params);
            }
        } else if (errorObj.Key != null && errorObj.Key.length > 0) {
            utils.showErrorMessage(errorObj.Message, errorObj.Key, errorObj.Params);
        }
        else {
            var errorMessage = lang.Validation[errorObj.errorString];
            noty({ text: errorMessage, timeout: 7500, type: 'error' });
        }
    },

    postJSON: function (path, data, callback) {
        return $.ajax({
            type: 'POST',
            url: path,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            success: function (data) {
                utils.clearErrors();
                if (callback)
                    callback(data)
            },
            failure: function (response) {
                utils.handleError(response);
            },
            error: function (response) {
                utils.handleError(response);
            }
        });
    },

    onlyPostJSON: function (path, data, callback) {
        return $.ajax({
            type: 'POST',
            url: path,
            data: JSON.stringify(data),
            success: function (data) {
                utils.clearErrors();
                callback(data)
            },
            contentType: 'application/json',
            failure: function (response) {
                utils.handleError(response);
            },
            error: function (response) {
                utils.handleError(response);
            }
        });
    },

    deleteJSON: function (path, callback) {
        return $.ajax({
            type: 'DELETE',
            url: path,
            success: function (data) {
                utils.clearErrors();
                callback(data)
            },
            failure: function (response) {
                utils.handleError(response);
            },
            error: function (response) {
                utils.handleError(response);
            }
        });
    },

    getJSON: function (path, callback, handleError) {
        return $.ajax({
            type: 'GET',
            url: path,
            dataType: "json",
            success: callback,
            cache: false,
            failure: function (response) {
                if (handleError) {
                    handleError(response);
                } else {
                    utils.handleError(response);
                }
            },
            error: function (response) {
                if (handleError) {
                    handleError(response);
                } else {
                    utils.handleError(response);
                }
            }
        });
    },

    // Be aware of using this on client because username and password will be stored on client side
    getJsonWithBasicAuthentication: function (path, username, password, callback, handleError) {
        return $.ajax({
            type: 'GET',
            url: path,
            dataType: "json",
            success: callback,
            cache: false,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
            },
            failure: function (response) {
                if (handleError) {
                    handleError(response);
                } else {
                    utils.handleError(response);
                }
            },
            error: function (response) {
                if (handleError) {
                    handleError(response);
                } else {
                    utils.handleError(response);
                }
            }
        });
    },

    getQueryStringValue: function (key) {
        var value = unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
        if (value === 'null') {
            return null
        }
        return value;
    },

    showLoading: function (mostrar) {
        var loadElement = '<div class="loading"><img src="' + global.BASEURL_PATH + '/Content/img/loading.gif" id="loading-indicator"/></div>';
        if (mostrar) {
            $('body').append(loadElement);
        } else {
            $('.loading').remove()
        }
    },

    uploadReset: function (id) {
        if (id) {
            //if an id is passed as a param, only reset the element's child upload controls (in case many upload widgets exist)
            $("#" + id + " .k-upload-files").remove();
            $("#" + id + " .k-upload-status").remove();
            $("#" + id + " .k-upload.k-header").addClass("k-upload-empty");
            $("#" + id + " .k-upload-button").removeClass("k-state-focused");
        } else {
            //reset all the upload things!
            $(".k-upload-files").remove();
            $(".k-upload-status").remove();
            $(".k-upload.k-header").addClass("k-upload-empty");
            $(".k-upload-button").removeClass("k-state-focused");
        }
    },

    zeroFill: function (number, width) {
        width -= number.toString().length;
        if (width > 0) {
            return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
        }
        return number + ""; // always return a string
    },

    zeroFillRigth: function (number, width) {
        width -= number.toString().length;
        if (width > 0) {
            return number + new Array(width + (/\./.test(number) ? 2 : 1)).join('0');
        }
        return number + ""; // always return a string
    },

    validarCpf: function (cpf) {
        if (cpf == null) {
            return false;
        }
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf == '') return false;
        // Elimina CPFs invalidos conhecidos    
        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            return false;
        // Valida 1o digito 
        var add = 0;
        for (var i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
        var rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(9)))
            return false;
        // Valida 2o digito 
        add = 0;
        for (i = 0; i < 10; i++)
            add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(10)))
            return false;
        return true;
    },

    validarCnpj: function (cnpj) {
        if (cnpj == null) {
            return false;
        }
        cnpj = cnpj.replace(/[^\d]+/g, '');

        if (cnpj == '') return false;

        if (cnpj.length != 14)
            return false;

        // Elimina CNPJs invalidos conhecidos
        if (cnpj == "00000000000000" ||
            cnpj == "11111111111111" ||
            cnpj == "22222222222222" ||
            cnpj == "33333333333333" ||
            cnpj == "44444444444444" ||
            cnpj == "55555555555555" ||
            cnpj == "66666666666666" ||
            cnpj == "77777777777777" ||
            cnpj == "88888888888888" ||
            cnpj == "99999999999999")
            return false;

        // Valida DVs
        var tamanho, numeros, digitos, soma, pos, resultado;
        tamanho = cnpj.length - 2
        numeros = cnpj.substring(0, tamanho);
        digitos = cnpj.substring(tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (var i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;

        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;

        return true;
    },

    kendoUploaderOptions: function (options) {
        options = options || {};
        return {
            localization: options.localization || {
                select: lang.UploadButton,
                uploadSelectedFiles: lang.AdicionarButton,
                headerStatusUploaded: lang.Concluido
            },
            async: options.async || {
                autoUpload: options.autoUpload || false,
                saveUrl: options.saveUrl,
                batch: options.batch || false,
                removeUrl: options.removeUrl || null
            },
            showFileList: options.showFileList || true,
            multiple: options.multiple || false,
            complete: options.complete || function (e) {
                if (options.multiple) {
                    utils.showLoading(false);
                }
            },
            success: options.success || function (e) {
                if (!options.multiple) {
                    utils.showLoading(false);
                }
            },
            error: options.error || function (e) {
                utils.handleError(e.XMLHttpRequest);
                $(".k-retry").parent().hide();
                var element = $(e)[0].sender.element.parent().parent().parent();
                element.append('<button type="button" class="k-button k-upload-selected">Adicionar</button>');
                if (options.hideUploadButton) {
                    setTimeout(function () {
                        var kendoUploadButton = $(".k-upload-selected");
                        kendoUploadButton.hide();
                    }, 1);
                }
                $('.k-button.k-upload-selected').click(function () { $(".k-retry").click() });
                $('.k-upload-status.k-upload-status-total').remove();
                utils.showLoading(false);
            },
            upload: options.upload || function (e) {
                utils.showLoading(true);
                if (options.uploadUrl) {
                    e.sender.options.async.saveUrl = options.uploadUrl();
                }
                if (options.data) {
                    e.data = utils.getType(options.data) == '[object Function]' ? options.data() : options.data;
                }
            },
            select: options.select || function (e) {
                var validExtensions = options.validExtensions || ['.PDF', '.DOC', '.DOCX', '.XLS', '.XLSX', '.TXT', '.PNG', '.BMP', '.JPG', '.ODT', '.ODS'];
                var fileSize = options.fileSize || (20 * 1000 * 1000);
                $.each(e.files, function (index, value) {
                    if (validExtensions.indexOf(value.extension.toUpperCase()) < 0) {
                        noty({ text: lang.Validation["ArquivoFormatoIncorreto"], timeout: 7500, type: 'error' });
                        e.preventDefault();
                        utils.uploadReset(e.sender.element.get(0).id);
                    }
                    else if (value.size > fileSize) {
                        noty({ text: lang.Validation["ArquivoTamanho"], timeout: 7500, type: 'error' });
                        e.preventDefault();
                        utils.uploadReset(e.sender.element.get(0).id);
                    }

                    var valid = true;
                    if (options.uploadValidationFile) {
                        valid = options.uploadValidationFile(value);
                    }
                    if (!valid) {
                        e.preventDefault();
                    }
                });

                if (options.hideUploadButton) {
                    setTimeout(function () {
                        var kendoUploadButton = $(".k-upload-selected");
                        kendoUploadButton.hide();
                    }, 1);
                }
            }
        }
    },

    getType: function (data) {
        var x = {};
        return x.toString.call(data);

        // [object Function]
    },

    simNaoList: [{ id: 'Sim', value: 'true' }, { id: 'Nao', value: 'false' }],

    simboloXis: "url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDM1NyAzNTciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM1NyAzNTc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iY2xvc2UiPgoJCTxwb2x5Z29uIHBvaW50cz0iMzU3LDM1LjcgMzIxLjMsMCAxNzguNSwxNDIuOCAzNS43LDAgMCwzNS43IDE0Mi44LDE3OC41IDAsMzIxLjMgMzUuNywzNTcgMTc4LjUsMjE0LjIgMzIxLjMsMzU3IDM1NywzMjEuMyAgICAgMjE0LjIsMTc4LjUgICAiIGZpbGw9IiMzMzMzMzMiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K)",
    simboloSetaCima: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMS8yOC8xNjsMA7EAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAnklEQVQ4jZ2S0Q2AIAwFHyygG+g2rOEIJC7QBRzIbRxBJ8APKamxVeF9QVN6lxSXUoIVF5YJwJjWmaweb76+QgCiC0tfPSDTBwAdgNhiQOJsWqgDBJ1jWlgGpNRUi8cAhf5q4eQaM2HLzVoOXGvdLYP48li1KAY/6KqFNPiiS4uJL17Qzc+ipPR6UfhD5wx5W/ANdA6xQS39ZsEDWkMnsPMuKZijk4EAAAAASUVORK5CYII=)",
    simboloSetaBaixo: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMS8yOC8xNjsMA7EAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAlElEQVQ4jZ3OuxHDIBBF0buMc7sERdRJCbQnRVYHqILnxGaMgJFgIz4D99gKCXgyN4cD4uRjgGgrvID3hGL30uK8lCYVAcAksZmNKnYvLQAOYEIRfguTBDCiyPUsGFSE/00W3FQU9UJwUxHOB4XgQlHVK8GFoqo3BR1Fs94UdBTNeldwUqReHeDRu/BS2szi95PufACO21cnW68EwwAAAABJRU5ErkJggg==)",
    simboloCirculo: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMS8yOC8xNjsMA7EAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAArklEQVQ4jdWTQRHCMBBFX2IAJNQBSFgHICEooxJAQVMH1AESWgXLIQlNmYEQeuIdN/t/dnb2G1VlgTcOOAKH5QNX4IJomxfN08CbLeCBHZ8ZAEF0nA2C+A5sCuLEBDSIjjYNXiEm9vowQYcDzhXinJMF3I9iAGe0Q8t977Hlln8w6Ffoewu0KwzadIk3yif8yoDoPu1ACOf5LVPUxCWGYDSEoJR/jjmAPI2Jyjg/AIUnOqjKNoS8AAAAAElFTkSuQmCC)",

    tratarSerieIndicadores: function (obj, variacaoTempo) {
        // Seta as series de indicadores (positivos ou negativos):      
        _.each(obj.series[0].data, function (valor, i) {
            // Se não há dados para o periodo atual ou o periodo anterior, não pode fazer comparação
            obj.yMax = Math.max(Math.max.apply(null, obj.series[0].data), Math.max.apply(null, obj.series[1].data));
            var valorAnoAnterior = obj.series[0].data[i] || 0;
            var valorAnoCorrente = obj.series[1].data[i] || 0;
            var ySimboloVariacao = Math.max(valorAnoCorrente, valorAnoAnterior) + obj.yMax * 0.2;

            if (obj.series[0].data[i] == null || obj.series[1].data[i] == null) {

                obj.series[2].data[i] = {
                    y: ySimboloVariacao,
                    marker: {
                        //symbol: "triangle",
                        symbol: utils.simboloXis,
                        lineWidth: 5,
                        radius: 16,
                        height: 16,
                        width: 16,
                    },
                    semDados: true
                }
            } else {
                var simboloVariacao;
                var variacao = valorAnoCorrente - valorAnoAnterior;
                if (variacao < 0 && variacaoTempo) {
                    simboloVariacao = utils.simboloSetaCima;
                } else if (variacao > 0 && !variacaoTempo) {
                    simboloVariacao = utils.simboloSetaCima;
                } else if (variacao === 0) {
                    simboloVariacao = utils.simboloCirculo;
                } else {
                    simboloVariacao = utils.simboloSetaBaixo;
                }

                var marker = {
                    symbol: simboloVariacao,
                    radius: 16,
                    height: 16,
                    width: 16,
                    states: {
                        hover: {
                            enable: false
                        }
                    }
                };

                obj.series[2].data[i] = {
                    y: ySimboloVariacao,
                    marker: marker,
                    states: {
                        hover: {
                            enable: false
                        }
                    }
                }
            }

        });
        return obj;
    },
};