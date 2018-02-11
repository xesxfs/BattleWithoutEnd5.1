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
var EquipButton = (function (_super) {
    __extends(EquipButton, _super);
    function EquipButton(param1) {
        var _this = _super.call(this) || this;
        _this.FIX = 40;
        _this.touchEnabled = true;
        var circle1 = new egret.Bitmap(RES.getRes("doubleCircle"));
        circle1.width = _this.FIX;
        circle1.height = _this.FIX;
        _this.before.addChild(circle1);
        var icon1 = new egret.Bitmap(RES.getRes("mc_" + param1));
        _this.before.addChild(icon1);
        // this.setMcPosition(_loc3_);
        _this.setCenter(icon1);
        var circle2 = new egret.Bitmap(RES.getRes("doubleCircle"));
        circle2.width = _this.FIX;
        circle2.height = _this.FIX;
        _this.after.addChild(circle2);
        var icon2 = new egret.Bitmap(RES.getRes("mc_" + param1));
        _this.after.addChild(icon2);
        _this.setCenter(icon2);
        return _this;
        // this.setMcPosition(_loc5_);
    }
    EquipButton.prototype.setCenter = function (dis) {
        dis.y = (this.height - dis.height) >> 1;
        dis.x = (this.width - dis.width) >> 1;
    };
    EquipButton.prototype.setMcPosition = function (param1) {
        var _loc2_ = 0;
        if (param1.width > param1.height) {
            _loc2_ = 10 / param1.width;
        }
        else {
            _loc2_ = 10 / param1.height;
        }
        param1.scaleX = _loc2_;
        param1.scaleY = _loc2_;
        param1.x = this.FIX / 2 - param1.width / 2;
        param1.y = this.FIX / 2 - param1.height / 2;
    };
    return EquipButton;
}(ButtonCell));
__reflect(EquipButton.prototype, "EquipButton");
