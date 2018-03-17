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
var ForgeButton = (function (_super) {
    __extends(ForgeButton, _super);
    function ForgeButton() {
        var _this = _super.call(this) || this;
        _this.R = 100;
        _this.touchEnabled = true;
        var bitmapData = RES.getRes("mc_forge");
        var bf = new egret.Bitmap(bitmapData);
        var af = new egret.Bitmap(bitmapData);
        _this.before.addChild(bf);
        _this.after.addChild(af);
        bf.height = _this.R;
        bf.width = _this.R;
        af.height = _this.R;
        af.width = _this.R;
        return _this;
    }
    return ForgeButton;
}(ButtonCell));
__reflect(ForgeButton.prototype, "ForgeButton");
