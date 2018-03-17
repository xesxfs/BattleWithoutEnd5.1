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
var ActiveSkillCell = (function (_super) {
    __extends(ActiveSkillCell, _super);
    function ActiveSkillCell(skill) {
        var _this = _super.call(this, skill) || this;
        _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onMouseDown, _this);
        return _this;
    }
    ActiveSkillCell.prototype.onMouseDown = function (e) {
        if (!(e.target instanceof ActiveSkillCell)) {
            return;
        }
        if (iGlobal.Player.isSkillEquiped(this.skill)) {
            iGlobal.Player.unequipSkill(this.skill);
        }
        else {
            iGlobal.Player.equipSkill(this.skill);
        }
        this.updateEquip();
    };
    ActiveSkillCell.prototype.updateEquip = function () {
        if (iGlobal.Player.isSkillEquiped(this.skill)) {
            // this.bg["transform"].colorTransform = new flash.ColorTransform(0.9, 0.7, 0, 1, 0, 0, 0, 0);
            // this.mc["transform"].colorTransform = new flash.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);
            // this.text["transform"].colorTransform = new flash.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);
        }
        else {
            // this.bg["transform"].colorTransform = new flash.ColorTransform();
            // this.mc["transform"].colorTransform = new flash.ColorTransform();
            // this.text["transform"].colorTransform = new flash.ColorTransform();
        }
    };
    return ActiveSkillCell;
}(SkillCell));
__reflect(ActiveSkillCell.prototype, "ActiveSkillCell");
