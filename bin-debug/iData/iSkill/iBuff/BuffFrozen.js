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
            var BuffFrozen = (function (_super) {
                __extends(BuffFrozen, _super);
                function BuffFrozen(count) {
                    var _this = _super.call(this, count) || this;
                    _this.name = "frozen";
                    _this.count = count;
                    return _this;
                }
                BuffFrozen.prototype.run = function () {
                    this.count--;
                    MainScene.allInfoPanel.addText(MainScene.battle.monster.nameHtml + "被<font color=\'#ff4040\'>冰冻了!</font>", iGlobal.Global.battle);
                };
                BuffFrozen.prototype.combine = function (buff) {
                    this.count = buff.count;
                };
                return BuffFrozen;
            }(iData.iSkill.iBuff.Buff));
            iBuff.BuffFrozen = BuffFrozen;
            __reflect(BuffFrozen.prototype, "iData.iSkill.iBuff.BuffFrozen");
        })(iBuff = iSkill.iBuff || (iSkill.iBuff = {}));
    })(iSkill = iData.iSkill || (iData.iSkill = {}));
})(iData || (iData = {}));
