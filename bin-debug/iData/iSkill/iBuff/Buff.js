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
    var iSkill;
    (function (iSkill) {
        var iBuff;
        (function (iBuff) {
            var Buff = (function (_super) {
                __extends(Buff, _super);
                function Buff(count) {
                    var _this = _super.call(this) || this;
                    _this.count = 0;
                    return _this;
                }
                Buff.prototype.run = function () {
                };
                Buff.prototype.combine = function (buff) {
                };
                Buff.prototype.isOver = function () {
                    if (this.count <= 0) {
                        return true;
                    }
                    return false;
                };
                return Buff;
            }(egret.HashObject));
            iBuff.Buff = Buff;
            __reflect(Buff.prototype, "iData.iSkill.iBuff.Buff");
        })(iBuff = iSkill.iBuff || (iSkill.iBuff = {}));
    })(iSkill = iData.iSkill || (iData.iSkill = {}));
})(iData || (iData = {}));
