var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iSkill;
    (function (iSkill) {
        var SkillCategory = (function () {
            function SkillCategory() {
            }
            return SkillCategory;
        }());
        iSkill.SkillCategory = SkillCategory;
        __reflect(SkillCategory.prototype, "iData.iSkill.SkillCategory");
    })(iSkill = iData.iSkill || (iData.iSkill = {}));
})(iData || (iData = {}));
iData.iSkill.SkillCategory.ALL = "all";
iData.iSkill.SkillCategory.MELEE = "melee";
iData.iSkill.SkillCategory.RANGED = "ranged";
iData.iSkill.SkillCategory.MAGIC = "magic";
