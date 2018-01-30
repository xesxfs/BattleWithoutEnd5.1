var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var iData;
(function (iData) {
    var iItem;
    (function (iItem) {
        var Weapon = (function (_super) {
            __extends(Weapon, _super);
            function Weapon(wData, ratio, isBoos) {
                if (isBoos === void 0) { isBoos = false; }
                return _super.call(this, wData, ratio, isBoos) || this;
            }
            Weapon.prototype.setData = function (eData) {
                _super.prototype.setData.call(this, eData);
                //这里
                var param = eData;
                this.category = param.category;
            };
            Weapon.prototype.getCategory = function () {
                switch (this.category) {
                    case iData.iItem.WeaponCategory.RANGED:
                        return "远程";
                    case iData.iItem.WeaponCategory.MELEE:
                        return "近战";
                    default:
                        return this.category;
                }
            };
            return Weapon;
        }(iData.iItem.Equipment));
        iItem.Weapon = Weapon;
        __reflect(Weapon.prototype, "iData.iItem.Weapon");
    })(iItem = iData.iItem || (iData.iItem = {}));
})(iData || (iData = {}));
/**单手 */
iData.iItem.Weapon.ONEHAND = "one-handed";
/**不用手 */
iData.iItem.Weapon.OFFHAND = "off hand";
/**双手 */
iData.iItem.Weapon.TWOHAND = "two-handed";
