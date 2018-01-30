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
var StringButton = (function (_super) {
    __extends(StringButton, _super);
    function StringButton(text, color) {
        var _this = _super.call(this) || this;
        _this.color = 0;
        _this.touchEnabled = true;
        _this.bg = new BasicCell(66, 25);
        _this.addChildAt(_this.bg, 0);
        _this.text = text;
        _this.color = (color);
        _this.init();
        return _this;
    }
    StringButton.prototype.init = function () {
        var text = iGlobal.Global.getTextField(18);
        text.textFlow = iGlobal.Global.htmlParse.parse("<p align=\'center\'>" + this.text + "</p>");
        text.width = 60;
        this.before.addChild(text);
        text.x = 2;
        text.y = 2;
        text.textColor = this.color;
        var atext = iGlobal.Global.getTextField(18);
        atext.textFlow = iGlobal.Global.htmlParse.parse("<p align=\'center\'>" + this.text + "</p>");
        atext.width = 60;
        this.after.addChild(atext);
        atext.x = 2;
        atext.y = 2;
        atext.textColor = (this.color);
    };
    StringButton.prototype.setBefore = function () {
        _super.prototype.setBefore.call(this);
        // this.filters = [];
    };
    StringButton.prototype.setDown = function () {
        _super.prototype.setDown.call(this);
        // this.filters = [new flash.GlowFilter(5066061, 0.66, 13, 13)];
        if (this.parent) {
            this.parent.addChildAt(this, this.parent.numChildren - 1);
        }
    };
    return StringButton;
}(ButtonCell));
__reflect(StringButton.prototype, "StringButton");
