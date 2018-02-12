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
var MenuButton = (function (_super) {
    __extends(MenuButton, _super);
    function MenuButton(bf, af, text, size) {
        if (size === void 0) { size = 80; }
        var _this = _super.call(this) || this;
        _this.touchEnabled = true;
        _this.bg = new BasicCell(size, size);
        var bfm = new egret.Bitmap(RES.getRes(bf));
        bfm.width = size;
        bfm.height = size;
        _this.before.addChild(bfm);
        var afm = new egret.Bitmap(RES.getRes(af));
        afm.width = size;
        afm.height = size;
        _this.after.addChild(afm);
        _this.infoWindow = iGlobal.Global.stringInfoWindow;
        _this.addChildAt(_this.bg, 0);
        _this.text = text;
        return _this;
    }
    MenuButton.prototype.onMouseOver = function (e) {
        _super.prototype.onMouseOver.call(this, e);
        var p = this.localToGlobal(e.localX + 15, e.localY + 15);
        this.infoWindow.x = p.x;
        this.infoWindow.y = p.y;
        if (this.infoWindow.x + this.infoWindow.width > iGlobal.Global.stage.stageWidth) {
            this.infoWindow.x = this.infoWindow.x - this.infoWindow.width - 10;
        }
        iGlobal.Global.setStringInfoWindow(this.text);
    };
    MenuButton.prototype.onMouseOut = function (e) {
        _super.prototype.onMouseOut.call(this, e);
        iGlobal.Global.hideInfoWindow();
    };
    MenuButton.prototype.setBefore = function () {
        _super.prototype.setBefore.call(this);
        this.filters = [];
    };
    MenuButton.prototype.setDown = function () {
        _super.prototype.setDown.call(this);
        // this.filters = [new flash.GlowFilter(5066061,0.66,13,13)];
        if (this.parent) {
            this.parent.addChildAt(this, this.parent.numChildren - 1);
        }
    };
    return MenuButton;
}(ButtonCell));
__reflect(MenuButton.prototype, "MenuButton");
