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
        var ActiveSkillData = (function (_super) {
            __extends(ActiveSkillData, _super);
            function ActiveSkillData(param1, param2, type, param4, param5, param6, param7, setList, param9, behave) {
                if (behave === void 0) { behave = null; }
                var _this = _super.call(this, param1, param2, param4, param5, param6, param7, param9) || this;
                _this.type = type;
                _this.setList = setList;
                _this.behaveFunction = behave;
                return _this;
            }
            return ActiveSkillData;
        }(iData.iSkill.SkillData));
        iSkill.ActiveSkillData = ActiveSkillData;
        __reflect(ActiveSkillData.prototype, "iData.iSkill.ActiveSkillData");
    })(iSkill = iData.iSkill || (iData.iSkill = {}));
})(iData || (iData = {}));
