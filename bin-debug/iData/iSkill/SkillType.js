var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iSkill;
    (function (iSkill) {
        var SkillType = (function () {
            function SkillType() {
            }
            return SkillType;
        }());
        iSkill.SkillType = SkillType;
        __reflect(SkillType.prototype, "iData.iSkill.SkillType");
    })(iSkill = iData.iSkill || (iData.iSkill = {}));
})(iData || (iData = {}));
iData.iSkill.SkillType.ATTACK = "attack";
iData.iSkill.SkillType.DEFENCE = "defence";
