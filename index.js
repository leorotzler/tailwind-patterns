var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var patterns = function (_a) {
    var patterns = _a.patterns, colorCombinations = _a.colorCombinations, _b = _a.patternNameSpace, patternNameSpace = _b === void 0 ? "pattern" : _b;
    return function (_a) {
        var addUtilities = _a.addUtilities;
        var utlilties = {};
        Object.keys(patterns).forEach(function (key) {
            var patternName = key;
            var value = patterns[key];
            Object.keys(colorCombinations).forEach(function (combinationKey) {
                var _a;
                var colors = colorCombinations[combinationKey].split("|");
                var bgFillColor = encodeURIComponent(colors[0]);
                var patternFillColor = encodeURIComponent(colors[1] ? colors[1] : colors[0]);
                var uri = value
                    .replace("BACKGROUND_FILL", bgFillColor)
                    .replace("PATTERN_FILL", patternFillColor);
                utlilties = __assign(__assign({}, utlilties), (_a = {}, _a[".".concat(patternNameSpace, "-").concat(patternName, "-").concat(combinationKey)] = {
                    backgroundImage: uri,
                    backgroundColor: bgFillColor
                }, _a));
            });
            addUtilities(utlilties);
        });
    };
};
module.exports = patterns;
