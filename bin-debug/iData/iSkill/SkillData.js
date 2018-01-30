var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iSkill;
    (function (iSkill) {
        var SkillData = (function () {
            function SkillData(name, realName, category, setList, param5, lvupCostList, desFunc) {
                this.name = name;
                this.realName = realName;
                this.category = category;
                this.statList = setList;
                this.effectList = param5;
                this.lvupCostList = lvupCostList;
                this.desFunction = desFunc;
            }
            return SkillData;
        }());
        iSkill.SkillData = SkillData;
        __reflect(SkillData.prototype, "iData.iSkill.SkillData");
    })(iSkill = iData.iSkill || (iData.iSkill = {}));
})(iData || (iData = {}));
