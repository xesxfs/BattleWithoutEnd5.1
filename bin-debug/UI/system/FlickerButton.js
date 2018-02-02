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
var FlickerButton = (function (_super) {
    __extends(FlickerButton, _super);
    function FlickerButton(text, width, height, fontSize) {
        if (fontSize === void 0) { fontSize = 32; }
        var _this = _super.call(this) || this;
        _this.count = 0;
        _this.flag = true;
        _this.flickerTime = 30;
        _this.touchEnabled = true;
        _this.bg = new BasicCell(width, height);
        // this.addChild(this.bg);
        // this.bg.filters = [ColorTransform.colorTransform]
        var beforeText = iGlobal.Global.getTextField(fontSize);
        beforeText.text = text;
        _this.before.addChild(beforeText);
        _this.before.x = width / 2 - beforeText.textWidth / 2;
        _this.before.y = height / 2 - beforeText.textHeight / 2;
        var afterText = iGlobal.Global.getTextField(fontSize, 0xFFFFFF);
        afterText.width = width;
        afterText.text = text;
        _this.after.addChild(afterText);
        _this.after.x = width / 2 - afterText.textWidth / 2;
        _this.after.y = height / 2 - afterText.textHeight / 2;
        _this.addEventListener(egret.Event.ENTER_FRAME, _this.overAnimation, _this);
        return _this;
    }
    FlickerButton.prototype.overAnimation = function (e) {
        this.before.visible = false;
        this.after.visible = true;
        if (this.count <= this.flickerTime) {
            this.filters = [new egret.GlowFilter(5066061, 0.66, 13 + this.count, 13 + this.count)];
            this.bg.filters = [ColorTransform.transform(1 - 0.1 / this.flickerTime * this.count, 1 - 0.3 / this.flickerTime * this.count, 1 - 1 / this.flickerTime * this.count, 0.01 + 1 / this.flickerTime * this.count)];
        }
        if (this.count > this.flickerTime) {
            this.flag = false;
        }
        else if (this.count <= 0) {
            this.flag = true;
        }
        if (this.flag) {
            this.count++;
        }
        else {
            this.count--;
        }
    };
    FlickerButton.prototype.setBefore = function () {
        // super.setBefore();
        // this.removeEventListener(egret.Event.ENTER_FRAME, this.overAnimation, this);
        // this.count = (0);
        // this.bg.filters = [];
        // this.filters = [];
        // if (this.parent) {
        // 	this.parent.addChildAt(this, this.parent.numChildren - 1);
        // }
    };
    FlickerButton.prototype.setDown = function () {
        _super.prototype.setDown.call(this);
        this.removeEventListener(egret.Event.ENTER_FRAME, this.overAnimation, this);
    };
    return FlickerButton;
}(ButtonCell));
__reflect(FlickerButton.prototype, "FlickerButton");
