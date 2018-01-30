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
var PeopleModel = (function (_super) {
    __extends(PeopleModel, _super);
    function PeopleModel(param1) {
        var _this = _super.call(this) || this;
        _this.age = 0;
        _this.touchEnabled = true;
        param1 = (param1);
        _this.age = (param1);
        _this.bg = new BasicCell(50, 100);
        _this.bg2 = new BasicCell(50, 100);
        // this.bg2["transform"].colorTransform = new egret.ColorTransform(0.9, 0.7, 0, 0.95);
        _this.init();
        return _this;
    }
    PeopleModel.prototype.init = function () {
        this.before.addChild(this.bg);
        this.after.addChild(this.bg2);
        this.p = new egret.Sprite();
        this.p2 = new egret.Sprite();
        this.before.addChild(this.p);
        this.after.addChild(this.p2);
        this.drawPeople(this.p, 7631988);
        this.drawPeople(this.p2, 16777215);
    };
    PeopleModel.prototype.drawPeople = function (sp, color) {
        color = (color);
        var ageMul = (this.age - 10);
        sp.y = 15 - ageMul * 3;
        sp.graphics.beginFill(color, 1);
        sp.graphics.drawCircle(25, 30, 10);
        sp.graphics.drawRect(15, 40, 20, 30 + ageMul);
        sp.graphics.drawRect(15, 70 + ageMul, 5, 8 + ageMul * 2);
        sp.graphics.drawRect(30, 70 + ageMul, 5, 8 + ageMul * 2);
        sp.graphics.drawRect(9, 40, 5, 15 + ageMul * 2);
        sp.graphics.drawRect(36, 40, 5, 15 + ageMul * 2);
        sp.graphics.endFill();
    };
    PeopleModel.prototype.setBefore = function () {
        _super.prototype.setBefore.call(this);
        this.filters = [];
    };
    PeopleModel.prototype.setDown = function () {
        _super.prototype.setDown.call(this);
        this.filters = [new egret.GlowFilter(5066061, 0.66, 13, 13)];
        if (this.parent) {
            this.parent.addChildAt(this, this.parent.numChildren - 1);
        }
    };
    return PeopleModel;
}(ButtonCell));
__reflect(PeopleModel.prototype, "PeopleModel");
