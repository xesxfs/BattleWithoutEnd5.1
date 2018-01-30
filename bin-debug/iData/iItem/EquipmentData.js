var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iItem;
    (function (iItem) {
        var EquipmentData = (function () {
            function EquipmentData(pos, type, name, realName, stat, sortWeight) {
                /**排序权重 */
                this.sortWeight = 0;
                this.position = pos;
                this.type = type;
                this.name = name;
                this.realName = realName;
                this.stat = stat;
                this.sortWeight = sortWeight;
            }
            return EquipmentData;
        }());
        iItem.EquipmentData = EquipmentData;
        __reflect(EquipmentData.prototype, "iData.iItem.EquipmentData");
    })(iItem = iData.iItem || (iData.iItem = {}));
})(iData || (iData = {}));
