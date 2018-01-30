var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iItem;
    (function (iItem) {
        var RangeStat = (function () {
            /***单个属性随机**/
            function RangeStat(name, min, changeRange) {
                this.valueMin = 0;
                this.changeRange = 0;
                this.name = name;
                this.valueMin = min;
                this.changeRange = changeRange;
            }
            return RangeStat;
        }());
        iItem.RangeStat = RangeStat;
        __reflect(RangeStat.prototype, "iData.iItem.RangeStat");
    })(iItem = iData.iItem || (iData.iItem = {}));
})(iData || (iData = {}));
