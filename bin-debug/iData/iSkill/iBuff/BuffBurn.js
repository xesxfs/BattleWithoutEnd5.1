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
            var BuffBurn = (function (_super) {
                __extends(BuffBurn, _super);
                function BuffBurn(count) {
                    var _this = _super.call(this, count) || this;
                    _this.name = "burn";
                    _this.count = count;
                    return _this;
                }
                BuffBurn.prototype.run = function () {
                    MainScene.battle.monsterHp = MainScene.battle.monsterHp - this.count;
                    MainScene.allInfoPanel.addText("<font color=\'#ff4040\'>灼伤</font>对" +
                        MainScene.battle.monster.nameHtml + "造成了<font color=\'#ff4040\'>" +
                        this.count + "</font>伤害", iGlobal.Global.battle);
                };
                BuffBurn.prototype.combine = function (buff) {
                    this.count = this.count + buff.count;
                };
                return BuffBurn;
            }(iData.iSkill.iBuff.Buff));
            iBuff.BuffBurn = BuffBurn;
            __reflect(BuffBurn.prototype, "iData.iSkill.iBuff.BuffBurn");
        })(iBuff = iSkill.iBuff || (iSkill.iBuff = {}));
    })(iSkill = iData.iSkill || (iData.iSkill = {}));
})(iData || (iData = {}));
