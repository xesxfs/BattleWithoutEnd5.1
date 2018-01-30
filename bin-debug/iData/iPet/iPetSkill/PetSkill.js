var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iPet;
    (function (iPet) {
        var iPetSkill;
        (function (iPetSkill) {
            var PetSkill = (function () {
                function PetSkill(skillData) {
                    this.level = 0;
                    this.skillData = skillData;
                    this.level = Math.random() * 2;
                }
                PetSkill.load = function (petSkillStr) {
                    var _loc3_ = null;
                    var _loc2_ = petSkillStr.split("$");
                    var _loc4_ = 0;
                    while (_loc4_ < iData.iPet.iPetSkill.PetSkillList.list.length) {
                        if (iData.iPet.iPetSkill.PetSkillList.list[_loc4_].name == _loc2_[0]) {
                            _loc3_ = new iData.iPet.iPetSkill.PetSkill(iData.iPet.iPetSkill.PetSkillList.list[_loc4_]);
                        }
                        _loc4_++;
                    }
                    _loc3_.level = _loc2_[1];
                    return _loc3_;
                };
                PetSkill.prototype.getName = function () {
                    if (this.level) {
                        return "Advanced " + this.skillData.name;
                    }
                    return this.skillData.name;
                };
                PetSkill.prototype.getRealName = function () {
                    if (this.level) {
                        return "进阶" + this.skillData.realName;
                    }
                    return this.skillData.realName;
                };
                PetSkill.prototype.getSetArray = function () {
                    if (this.level) {
                        return this.skillData.setList[1];
                    }
                    return this.skillData.setList[0];
                };
                PetSkill.prototype.save = function () {
                    var _loc1_ = "";
                    _loc1_ = _loc1_ + (this.skillData.name + "$" + this.level);
                    return _loc1_;
                };
                return PetSkill;
            }());
            iPetSkill.PetSkill = PetSkill;
            __reflect(PetSkill.prototype, "iData.iPet.iPetSkill.PetSkill");
        })(iPetSkill = iPet.iPetSkill || (iPet.iPetSkill = {}));
    })(iPet = iData.iPet || (iData.iPet = {}));
})(iData || (iData = {}));
