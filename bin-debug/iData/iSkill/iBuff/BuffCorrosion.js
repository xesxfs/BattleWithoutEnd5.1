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
            var BuffCorrosion = (function (_super) {
                __extends(BuffCorrosion, _super);
                function BuffCorrosion(count) {
                    var _this = _super.call(this, count) || this;
                    _this.name = "corrosion";
                    _this.count = count;
                    return _this;
                }
                BuffCorrosion.prototype.run = function () {
                };
                BuffCorrosion.prototype.combine = function (buff) {
                    this.count = this.count + buff.count;
                };
                return BuffCorrosion;
            }(iData.iSkill.iBuff.Buff));
            iBuff.BuffCorrosion = BuffCorrosion;
            __reflect(BuffCorrosion.prototype, "iData.iSkill.iBuff.BuffCorrosion");
        })(iBuff = iSkill.iBuff || (iSkill.iBuff = {}));
    })(iSkill = iData.iSkill || (iData.iSkill = {}));
})(iData || (iData = {}));
