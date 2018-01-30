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
var ClickButton = (function (_super) {
    __extends(ClickButton, _super);
    function ClickButton(icon, fix) {
        var _this = _super.call(this) || this;
        _this.FIX = 20;
        _this.touchEnabled = true;
        fix = (fix);
        _this.FIX = (fix);
        var _loc3_ = new egret.Bitmap(RES.getRes("doubleCircle"));
        _loc3_.width = _this.FIX;
        _loc3_.height = _this.FIX;
        // _loc3_["transform"].colorTransform = new egret.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);
        _this.before.addChild(_loc3_);
        var bf = new egret.Bitmap(RES.getRes(icon));
        // this.before.addChild(bf);
        // this.setMcPosition(bf);
        var _loc5_ = new egret.Bitmap(RES.getRes("doubleCircle"));
        ;
        _loc5_.width = _this.FIX;
        _loc5_.height = _this.FIX;
        _this.after.addChild(_loc5_);
        var af = new egret.Bitmap(RES.getRes(icon));
        // _loc6_["transform"].colorTransform = new egret.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);	
        egret.ColorMatrixFilter;
        // this.after.addChild(af);
        // this.setMcPosition(af);
        var colorMatrix = [
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0, 0, 0, 1, 0
        ];
        var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        return _this;
        // this.after.filters = [colorFlilter];
    }
    ClickButton.prototype.setMcPosition = function (param1) {
        var _loc2_ = 0;
        if (param1.width > param1.height) {
            _loc2_ = this.FIX / 2 / param1.width;
        }
        else {
            _loc2_ = this.FIX / 2 / param1.height;
        }
        param1.scaleX = _loc2_;
        param1.scaleY = _loc2_;
        param1.x = this.FIX / 2 - param1.width / 2;
        param1.y = this.FIX / 2 - param1.height / 2;
    };
    ClickButton.prototype.setDown = function () {
        _super.prototype.setDown.call(this);
        this.setBefore();
    };
    return ClickButton;
}(ButtonCell));
__reflect(ClickButton.prototype, "ClickButton");
