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
var ToggleBox = (function (_super) {
    __extends(ToggleBox, _super);
    function ToggleBox(text, size, bDown) {
        if (bDown === void 0) { bDown = true; }
        var _this = _super.call(this) || this;
        _this.size = 0;
        _this.isDown = false;
        _this.touchEnabled = true;
        _this.size = (size);
        _this.text = iGlobal.Global.getTextField(size);
        _this.addChild(_this.text);
        _this.setText(text);
        _this.box = new egret.Sprite();
        // this.box.touchEnabled = true;
        _this.addChild(_this.box);
        if (bDown) {
            _this.setDown();
        }
        else {
            _this.setUp();
        }
        _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onMouseDown, _this);
        return _this;
    }
    ToggleBox.prototype.setText = function (html) {
        this.text.width = 300;
        this.text.textFlow = iGlobal.Global.htmlParse.parser(html);
        this.text.width = this.text.textWidth + 6;
        this.text.x = this.size + 2;
    };
    ToggleBox.prototype.setDown = function () {
        this.isDown = true;
        this.box.graphics.clear();
        this.box.graphics.lineStyle(2, 7631988);
        this.box.graphics.beginFill(14922250);
        this.box.graphics.drawRect(0, 0, this.size, this.size);
        this.box.graphics.endFill();
        if (this.downFunction) {
            this.downFunction();
        }
    };
    ToggleBox.prototype.setUp = function () {
        this.isDown = false;
        this.box.graphics.clear();
        this.box.graphics.beginFill(16777215, 0);
        this.box.graphics.lineStyle(2, 7631988);
        this.box.graphics.drawRect(0, 0, this.size, this.size);
        this.box.graphics.endFill();
        if (this.upFunction) {
            this.upFunction();
        }
    };
    ToggleBox.prototype.onMouseDown = function (e) {
        if (this.isDown) {
            this.setUp();
        }
        else {
            this.setDown();
        }
    };
    return ToggleBox;
}(egret.Sprite));
__reflect(ToggleBox.prototype, "ToggleBox");
