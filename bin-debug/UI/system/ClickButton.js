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
        var bcircle = new egret.Bitmap(RES.getRes("doubleCircle"));
        bcircle.width = _this.FIX;
        bcircle.height = _this.FIX;
        // _loc3_["transform"].colorTransform = new egret.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);
        _this.before.addChild(bcircle);
        var bf = new egret.Bitmap(RES.getRes(icon));
        _this.before.addChild(bf);
        _this.setMcPosition(bf);
        var acircle = new egret.Bitmap(RES.getRes("doubleCircle"));
        ;
        acircle.width = _this.FIX;
        acircle.height = _this.FIX;
        _this.after.addChild(acircle);
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
    ClickButton.prototype.setMcPosition = function (dis) {
        var scale = 0;
        if (dis.width > dis.height) {
            scale = this.FIX / 2 / dis.width;
        }
        else {
            scale = this.FIX / 2 / dis.height;
        }
        dis.scaleX = scale;
        dis.scaleY = scale;
        dis.x = (this.FIX - dis.width * scale) >> 1;
        dis.y = (this.FIX - dis.height * scale) >> 1;
    };
    ClickButton.prototype.setDown = function () {
        _super.prototype.setDown.call(this);
        this.setBefore();
    };
    return ClickButton;
}(ButtonCell));
__reflect(ClickButton.prototype, "ClickButton");
