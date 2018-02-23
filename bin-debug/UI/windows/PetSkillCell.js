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
var PetSkillCell = (function (_super) {
    __extends(PetSkillCell, _super);
    function PetSkillCell(petSkill) {
        var _this = _super.call(this) || this;
        _this.SIZE = 60;
        _this.touchEnabled = true;
        _this.petSkill = petSkill;
        var bgsp = new egret.Sprite();
        bgsp.graphics.beginFill(0, 0);
        bgsp.graphics.drawCircle(15, 15, 30);
        bgsp.graphics.endFill();
        _this.addChild(bgsp);
        // var _loc3_: egret.Sprite = <any>new (<any>flash.getDefinitionByName("pSkill_" + tool.MyMath.StringFormChange(this.petSkill.skillData.name.toLowerCase(), " ", "_")))();
        var icon = new egret.Bitmap(RES.getRes("pSkill_" + Tool.MyMath.StringFormChange(_this.petSkill.skillData.name.toLowerCase(), " ", "_")));
        if (_this.petSkill.level) {
            // _loc3_.filters = [new egret.GlowFilter(16711680, 0.66, 5, 5)];
        }
        _this.before.addChild(icon);
        icon.width = _this.SIZE;
        icon.height = _this.SIZE;
        return _this;
        // _loc3_ = new (<any>flash.getDefinitionByName("pSkill_" + tool.MyMath.StringFormChange(this.petSkill.skillData.name.toLowerCase(), " ", "_")))();
        // this.after["transform"].colorTransform = new flash.ColorTransform(0, 0, 0, 1, 227, 178, 10, 5);
        // this.after.addChild(_loc3_);
        // _loc3_.width = this.SIZE;
        // _loc3_.height = this.SIZE;
    }
    return PetSkillCell;
}(ButtonCell));
__reflect(PetSkillCell.prototype, "PetSkillCell");
