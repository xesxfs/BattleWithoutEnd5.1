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
var SkillCell = (function (_super) {
    __extends(SkillCell, _super);
    function SkillCell(param1) {
        var _this = _super.call(this, 390, 70) || this;
        _this.yellow = 0xE3B20A;
        _this.touchEnabled = true;
        _this.skill = param1;
        _this.bg = new egret.Sprite();
        _this.bg.graphics.lineStyle(1, 13487565, 0.8);
        _this.bg.graphics.beginFill(16777215, 0.95);
        _this.bg.graphics.drawRect(0, 0, 390, 70);
        _this.bg.graphics.endFill();
        _this.addChildAt(_this.bg, 0);
        _this.setInfo();
        _this.setLvupButton();
        _this.update();
        _this.addEventListener(egret.TouchEvent.TOUCH_MOVE, _this.onMouseOver, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, _this.onMouseOut, _this);
        return _this;
    }
    SkillCell.prototype.setInfo = function () {
        this.mc = new egret.Bitmap(RES.getRes("mc_" + Tool.MyMath.StringFormChange(this.skill.skillData.name.toLowerCase(), " ", "_")));
        this.addChild(this.mc);
        this.mc.width = 50;
        this.mc.height = 50;
        this.mc.x = 10;
        this.mc.y = (this.height - this.mc.height) >> 1;
        this.text = iGlobal.Global.getTextField(32);
        // this.text.width = 140;
        this.text.text = this.skill.skillData.realName + " " + (15 - this.skill.level).toString(16).toUpperCase();
        this.addChild(this.text);
        this.text.x = this.mc.x + this.mc.width + 30;
        this.text.y = (this.height - this.text.height) >> 1;
        this.infoWindow = new ItemInfoWindow(this.skill.getDescription());
    };
    SkillCell.prototype.onMouseOver = function (e) {
        // this.filters = [new flash.GlowFilter(5066061, 0.66, 13, 13)];
        if (this.parent) {
            this.parent.addChildAt(this, this.parent.numChildren - 1);
        }
        // this.addInfoWindow();
    };
    SkillCell.prototype.onMouseOut = function (param1) {
        // this.filters = [];
        this.removeInfoWindow();
    };
    SkillCell.prototype.setLvupButton = function () {
        var _self__ = this;
        var lvupDown = null;
        lvupDown = function () {
            this["setBefore"]();
            _self__.skill.levelup();
            Emitter.dispatchEvent(Tool.MyEvent.Update);
        };
        this.lvupButton = new EquipButton("lvup");
        this.addChild(this.lvupButton);
        this.lvupButton.x = 280;
        this.lvupButton.y = (this.height - this.lvupButton.height) >> 1;
        this.lvupButton.downFunction = lvupDown;
    };
    SkillCell.prototype.update = function () {
        this.text.text = this.skill.skillData.realName + " " + (15 - this.skill.level).toString(16).toUpperCase();
        this.removeInfoWindow();
        this.infoWindow = new ItemInfoWindow(this.skill.getDescription());
        if (this.skill.canLevelup()) {
            this.lvupButton.visible = true;
        }
        else {
            this.lvupButton.visible = false;
        }
    };
    SkillCell.prototype.addInfoWindow = function () {
        this.addChild(this.infoWindow);
        this.infoWindow.x = -135;
        this.infoWindow.y = 0;
        var _loc1_ = this.localToGlobal(0, 0);
        if (_loc1_.y + this.infoWindow.height > iGlobal.Global.stage.stageHeight) {
            _loc1_ = this.globalToLocal(0, iGlobal.Global.stage.stageHeight - this.infoWindow.height);
            this.infoWindow.y = _loc1_.y;
        }
    };
    SkillCell.prototype.removeInfoWindow = function () {
        if (this.contains(this.infoWindow)) {
            this.removeChild(this.infoWindow);
        }
    };
    return SkillCell;
}(BasicCell));
__reflect(SkillCell.prototype, "SkillCell");
