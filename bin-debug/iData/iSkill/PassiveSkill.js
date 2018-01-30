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
        var PassiveSkill = (function (_super) {
            __extends(PassiveSkill, _super);
            function PassiveSkill(skillData) {
                return _super.call(this, skillData) || this;
            }
            return PassiveSkill;
        }(iData.iSkill.Skill));
        iSkill.PassiveSkill = PassiveSkill;
        __reflect(PassiveSkill.prototype, "iData.iSkill.PassiveSkill");
    })(iSkill = iData.iSkill || (iData.iSkill = {}));
})(iData || (iData = {}));
