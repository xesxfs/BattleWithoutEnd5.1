var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iNumber;
    (function (iNumber) {
        var RangeNumber = (function () {
            function RangeNumber(min, max) {
                this.min = 0;
                this.max = 0;
                this.min = min;
                this.max = max;
            }
            return RangeNumber;
        }());
        iNumber.RangeNumber = RangeNumber;
        __reflect(RangeNumber.prototype, "iData.iNumber.RangeNumber");
    })(iNumber = iData.iNumber || (iData.iNumber = {}));
})(iData || (iData = {}));
