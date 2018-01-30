var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iItem;
    (function (iItem) {
        var WeaponCategory = (function () {
            /**武器类型 */
            function WeaponCategory() {
            }
            return WeaponCategory;
        }());
        iItem.WeaponCategory = WeaponCategory;
        __reflect(WeaponCategory.prototype, "iData.iItem.WeaponCategory");
    })(iItem = iData.iItem || (iData.iItem = {}));
})(iData || (iData = {}));
/**近战 */
iData.iItem.WeaponCategory.MELEE = "melee";
/**远程 弓箭 */
iData.iItem.WeaponCategory.RANGED = "ranged";
