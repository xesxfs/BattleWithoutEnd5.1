var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iPet;
    (function (iPet) {
        var iPetSkill;
        (function (iPetSkill) {
            var PetSkillData = (function () {
                function PetSkillData(name, realName, setList, behaveFunction, desFunction) {
                    this.setList = setList;
                    this.name = name;
                    this.realName = realName;
                    this.behaveFunction = behaveFunction;
                    this.desFunction = desFunction;
                }
                return PetSkillData;
            }());
            iPetSkill.PetSkillData = PetSkillData;
            __reflect(PetSkillData.prototype, "iData.iPet.iPetSkill.PetSkillData");
        })(iPetSkill = iPet.iPetSkill || (iPet.iPetSkill = {}));
    })(iPet = iData.iPet || (iData.iPet = {}));
})(iData || (iData = {}));
