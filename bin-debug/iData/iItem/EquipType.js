var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iItem;
    (function (iItem) {
        var EquipType = (function () {
            /**装备类型 */
            function EquipType() {
            }
            return EquipType;
        }());
        iItem.EquipType = EquipType;
        __reflect(EquipType.prototype, "iData.iItem.EquipType");
    })(iItem = iData.iItem || (iData.iItem = {}));
})(iData || (iData = {}));
/**重甲 */
iData.iItem.EquipType.HEAVY = "heavy";
/**皮甲 */
iData.iItem.EquipType.MEDIUM = "medium";
/**轻甲 */
iData.iItem.EquipType.LIGHT = "light";
/**配饰*/
iData.iItem.EquipType.ACCESORY = "accesory";
iData.iItem.EquipType.HEAVY_BASE = [new iData.iItem.Stat(iData.iItem.Stat.defence, 2), new iData.iItem.Stat(iData.iItem.Stat.protection, 1)];
iData.iItem.EquipType.MEDIUM_BASE = [new iData.iItem.Stat(iData.iItem.Stat.hp, 5), new iData.iItem.Stat(iData.iItem.Stat.protection, 1)];
iData.iItem.EquipType.LIGHT_BASE = [new iData.iItem.Stat(iData.iItem.Stat.hp, 5), new iData.iItem.Stat(iData.iItem.Stat.defence, 2)];
iData.iItem.EquipType.ACCESORY_BASE = new Array();
