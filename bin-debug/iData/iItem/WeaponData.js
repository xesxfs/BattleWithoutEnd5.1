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
        var WeaponData = (function (_super) {
            __extends(WeaponData, _super);
            function WeaponData(pos, type, name, realName, stat, category, sortWeight) {
                var _this = _super.call(this, pos, type, name, realName, stat, sortWeight) || this;
                // param7 = param7;
                _this.category = category;
                return _this;
            }
            return WeaponData;
        }(iData.iItem.EquipmentData));
        iItem.WeaponData = WeaponData;
        __reflect(WeaponData.prototype, "iData.iItem.WeaponData");
    })(iItem = iData.iItem || (iData.iItem = {}));
})(iData || (iData = {}));
