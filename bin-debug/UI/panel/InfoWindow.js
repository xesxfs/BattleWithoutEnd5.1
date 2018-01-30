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
var InfoWindow = (function (_super) {
    __extends(InfoWindow, _super);
    function InfoWindow(width, height) {
        var _this = _super.call(this, width, height) || this;
        _this.touchEnabled = false;
        _this.touchChildren = false;
        return _this;
    }
    InfoWindow.prototype.draw = function (width, height) {
        this.graphics.lineStyle(1, 13487565, 0.8);
        _super.prototype.draw.call(this, width, height);
        this.filters = [new egret.GlowFilter(5066061, 0.66, 13, 13)];
    };
    return InfoWindow;
}(BasicCell));
__reflect(InfoWindow.prototype, "InfoWindow");
