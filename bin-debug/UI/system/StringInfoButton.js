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
var StringInfoButton = (function (_super) {
    __extends(StringInfoButton, _super);
    function StringInfoButton(text, info) {
        return _super.call(this, text, info) || this;
    }
    StringInfoButton.prototype.onMouseOver = function (e) {
        _super.prototype.onMouseOver.call(this, e);
        this.graphics.clear();
        this.graphics.beginFill(14922250, 0.95);
        this.graphics.drawRoundRect(0, 0, this.textField.textWidth + 6, this.textField.textHeight + 2, 3);
        this.graphics.endFill();
        this.textField.textFlow = iGlobal.Global.htmlParse.parse("<font color=\'#ffffff\'>" + this.textField.text + "</font>");
    };
    StringInfoButton.prototype.onMouseOut = function (e) {
        _super.prototype.onMouseOut.call(this, e);
        this.graphics.clear();
        this.graphics.beginFill(16777215, 0.95);
        this.graphics.drawRoundRect(0, 0, this.textField.textWidth + 6, this.textField.textHeight + 2, 3);
        this.graphics.endFill();
        this.textField.textFlow = iGlobal.Global.htmlParse.parse("<font color=\'#ffffff\'>" + this.textField.text + "</font>");
    };
    StringInfoButton.prototype.onMouseDown = function (e) {
        if (this.downFunction) {
            this.downFunction();
        }
    };
    return StringInfoButton;
}(StringInfoCell));
__reflect(StringInfoButton.prototype, "StringInfoButton");
