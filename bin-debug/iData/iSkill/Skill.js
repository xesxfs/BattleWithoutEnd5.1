var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iSkill;
    (function (iSkill) {
        var Skill = (function () {
            function Skill(data) {
                this.level = 0;
                this.skillData = data;
                this.level = 0;
            }
            Skill.load = function (skillStr) {
                var skill = null;
                var arr = skillStr.split("#");
                var i = 0;
                while (i < iData.iSkill.SkillDataList.list.length) {
                    if (iData.iSkill.SkillDataList.list[i].name == arr[1]) {
                        if (iData.iSkill.SkillDataList.list[i] instanceof iData.iSkill.PassiveSkillData) {
                            skill = new iData.iSkill.PassiveSkill(iData.iSkill.SkillDataList.list[i]);
                        }
                        else {
                            skill = new iData.iSkill.ActiveSkill(iData.iSkill.SkillDataList.list[i]);
                        }
                        break;
                    }
                    i++;
                }
                skill.level = parseInt(arr[0]);
                return skill;
            };
            Skill.prototype.getDescription = function () {
                if (this.skillData.desFunction) {
                    return this.skillData.desFunction(this);
                }
                return "no function";
            };
            Skill.prototype.levelup = function () {
                iGlobal.Player.addAp(-this.skillData.lvupCostList[this.level + 1]);
                this.level++;
                MainScene.allInfoPanel.addText("<font color=\'#FF4040\'>Skill " + this.skillData.name + " level up to " + (15 - this.level).toString(16).toUpperCase() + "!</font>.");
                if (this.level == 14) {
                    iData.iPlayer.TitleList.updateTitleInfo(this.skillData.name);
                }
            };
            Skill.prototype.canLevelup = function () {
                if (this.level >= 14) {
                    return false;
                }
                if (this.skillData.lvupCostList[this.level + 1] > iGlobal.Player.ap) {
                    return false;
                }
                return true;
            };
            Skill.prototype.save = function () {
                var savestr = "";
                savestr = savestr + (this.level + "#" + this.skillData.name);
                return savestr;
            };
            return Skill;
        }());
        iSkill.Skill = Skill;
        __reflect(Skill.prototype, "iData.iSkill.Skill");
    })(iSkill = iData.iSkill || (iData.iSkill = {}));
})(iData || (iData = {}));
