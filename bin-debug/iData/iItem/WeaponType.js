var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iItem;
    (function (iItem) {
        var WeaponType = (function () {
            /**武器类型 */
            function WeaponType() {
            }
            return WeaponType;
        }());
        iItem.WeaponType = WeaponType;
        __reflect(WeaponType.prototype, "iData.iItem.WeaponType");
    })(iItem = iData.iItem || (iData.iItem = {}));
})(iData || (iData = {}));
iData.iItem.WeaponType.SWORD = "sword";
iData.iItem.WeaponType.AXE = "axe";
iData.iItem.WeaponType.BOW = "bow";
iData.iItem.WeaponType.CROSSBOW = "crossbow";
iData.iItem.WeaponType.STAFF = "staff";
iData.iItem.WeaponType.SCEPTRE = "sceptre";
iData.iItem.WeaponType.DAGGER = "dagger";
iData.iItem.WeaponType.SHIELD = "shield";
iData.iItem.WeaponType.TOME = "tome";
iData.iItem.WeaponType.SWORD_BASE = [new iData.iItem.Stat(iData.iItem.Stat.ATTACK, 2.5), new iData.iItem.Stat(iData.iItem.Stat.crit, 2)];
iData.iItem.WeaponType.AXE_BASE = [new iData.iItem.Stat(iData.iItem.Stat.ATTACK, 4), new iData.iItem.Stat(iData.iItem.Stat.hp, 5)];
iData.iItem.WeaponType.BOW_BASE = [new iData.iItem.Stat(iData.iItem.Stat.ATTACK, 3), new iData.iItem.Stat(iData.iItem.Stat.protectionIgnore, 1)];
iData.iItem.WeaponType.CROSSBOW_BASE = [new iData.iItem.Stat(iData.iItem.Stat.ATTACK, 4), new iData.iItem.Stat(iData.iItem.Stat.crit_mul, 3)];
iData.iItem.WeaponType.STAFF_BASE = [new iData.iItem.Stat(iData.iItem.Stat.mp, 5), new iData.iItem.Stat(iData.iItem.Stat.magicDamage, 1)];
iData.iItem.WeaponType.SCEPTRE_BASE = [new iData.iItem.Stat(iData.iItem.Stat.ATTACK, 2), new iData.iItem.Stat(iData.iItem.Stat.mp, 5)];
iData.iItem.WeaponType.DAGGER_BASE = [new iData.iItem.Stat(iData.iItem.Stat.crit_mul, 3)];
iData.iItem.WeaponType.SHIELD_BASE = [new iData.iItem.Stat(iData.iItem.Stat.defence, 3)];
iData.iItem.WeaponType.TOME_BASE = [new iData.iItem.Stat(iData.iItem.Stat.spellChance, 0.3)];
