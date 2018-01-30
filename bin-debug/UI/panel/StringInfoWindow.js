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
var StringInfoWindow = (function (_super) {
    __extends(StringInfoWindow, _super);
    function StringInfoWindow() {
        var _this = _super.call(this, 0, 0) || this;
        _this.textField = iGlobal.Global.getTextField(20);
        _this.textField.textAlign = egret.HorizontalAlign.LEFT;
        _this.textField.multiline = true;
        _this.addChild(_this.textField);
        _this.touchChildren = false;
        _this.touchEnabled = false;
        return _this;
    }
    StringInfoWindow.prototype.setText = function (text) {
        var width = 0;
        var height = 0;
        this.graphics.clear();
        this.textField.text = text;
        this.textField.width = 300;
        var txtWidth = (this.textField.textWidth);
        if (txtWidth < 200) {
            width = (txtWidth + 4);
            height = (this.textField.textHeight + 2);
            this.textField.width = width + 2;
        }
        else {
            this.textField.width = 200;
            width = (204);
            height = (this.textField.height + 2);
        }
        _super.prototype.draw.call(this, width, height);
    };
    return StringInfoWindow;
}(InfoWindow));
__reflect(StringInfoWindow.prototype, "StringInfoWindow");
