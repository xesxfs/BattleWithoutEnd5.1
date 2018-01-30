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
        var PassiveSkillData = (function (_super) {
            __extends(PassiveSkillData, _super);
            function PassiveSkillData(param1, param2, param3, param4, param5, param6, param7) {
                return _super.call(this, param1, param2, param3, param4, param5, param6, param7) || this;
            }
            return PassiveSkillData;
        }(iData.iSkill.SkillData));
        iSkill.PassiveSkillData = PassiveSkillData;
        __reflect(PassiveSkillData.prototype, "iData.iSkill.PassiveSkillData");
    })(iSkill = iData.iSkill || (iData.iSkill = {}));
})(iData || (iData = {}));
