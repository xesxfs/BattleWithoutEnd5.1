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
    var iNumber;
    (function (iNumber) {
        var DamageNumber = (function (_super) {
            __extends(DamageNumber, _super);
            function DamageNumber(min, max) {
                return _super.call(this, min, max) || this;
            }
            DamageNumber.prototype.getByBalance = function (param1) {
                // param1 = param1;
                return 1;
            };
            return DamageNumber;
        }(iData.iNumber.RangeNumber));
        iNumber.DamageNumber = DamageNumber;
        __reflect(DamageNumber.prototype, "iData.iNumber.DamageNumber");
    })(iNumber = iData.iNumber || (iData.iNumber = {}));
})(iData || (iData = {}));
