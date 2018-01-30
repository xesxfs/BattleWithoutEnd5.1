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
var RaceButton = (function (_super) {
    __extends(RaceButton, _super);
    function RaceButton(b, a, race) {
        var _this = _super.call(this) || this;
        _this.PX = 50;
        _this.count = 0;
        _this.touchEnabled = true;
        var bsp = RES.getRes(b);
        bsp && (bsp = new egret.Bitmap(bsp)) && _this.before.addChild(bsp);
        var asp = RES.getRes(a);
        asp && (asp = new egret.Bitmap(asp)) && _this.after.addChild(asp);
        _this.bg = new egret.Sprite();
        // this.addChild(this.bg);
        var colorMatrix = [
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0
        ];
        _this.transform = new egret.ColorMatrixFilter(colorMatrix);
        _this.bg.filters = [_this.transform];
        _this.race = race;
        _this.before.width = _this.PX;
        _this.before.height = _this.PX;
        _this.after.height = _this.PX;
        _this.after.width = _this.PX;
        _this.setText();
        return _this;
    }
    RaceButton.prototype.setText = function () {
        this.text = iGlobal.Global.getTextField(32, 16777215);
        this.text.width = 200;
        this.text.text = this.race.name.toUpperCase();
        this.addChild(this.text);
        this.text.x = 5;
        this.text.y = 100;
        this.text.visible = false;
    };
    RaceButton.prototype.setAfter = function () {
        _super.prototype.setAfter.call(this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.overAnimation, this);
    };
    RaceButton.prototype.overAnimation = function (param1) {
        if (this.count <= 10) {
            this.bg.graphics.clear();
            this.bg.graphics.beginFill(16777215, 0.95);
            this.bg.graphics.drawRect(0 - this.count, 0 - this.count, this.PX + this.count * 2, this.PX + this.count * 2);
            this.bg.graphics.endFill();
            // this.bg["transform"].colorTransform = new flash.ColorTransform(1 - 0.01 * this.count, 1 - 0.03 * this.count, 1 - 0.1 * this.count, 0.1 * this.count);
            var colorMatrix = this.transform.matrix;
            this.setRGBAMatrix(colorMatrix, 1 - 0.01 * this.count, 1 - 0.03 * this.count, 1 - 0.1 * this.count, 0.1 * this.count);
            this.transform.matrix = colorMatrix;
            this.bg.filters = [new egret.GlowFilter(5066061, 0.66, 13, 13), this.transform];
        }
        if (this.count > 10) {
            this.bg.graphics.clear();
            this.bg.graphics.beginFill(16777215, 0.95);
            this.bg.graphics.drawRect(-10, -10, this.PX + 20 + 20 * (this.count - 10), this.PX + 20);
            this.bg.graphics.endFill();
            // this.bg["transform"].colorTransform = new flash.ColorTransform(0.9, 0.7, 0, 0.95);
            var colorMatrix = this.transform.matrix;
            this.setRGBAMatrix(colorMatrix, 0.9, 0.7, 0, 0.95);
            this.transform.matrix = colorMatrix;
            this.bg.filters = [new egret.GlowFilter(5066061, 0.66, 13 + (this.count - 10) * 1, 13 + (this.count - 10) * 1), this.transform];
            this.text.visible = true;
            this.text.alpha = (this.count - 10) * 0.1;
            this.text.filters = [new egret.GlowFilter(16777215, 0.66, 13 + (this.count - 10) * 1, 13 + (this.count - 10) * 1)];
        }
        this.count++;
        if (this.count > 20) {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.overAnimation, this);
        }
    };
    RaceButton.prototype.setRGBAMatrix = function (colorMatrix, r, g, b, a) {
        colorMatrix[0] = r;
        colorMatrix[6] = g;
        colorMatrix[12] = b;
        colorMatrix[18] = a;
    };
    RaceButton.prototype.setBefore = function () {
        _super.prototype.setBefore.call(this);
        // this.bg.graphics.clear();
        // this.removeEventListener(egret.Event.ENTER_FRAME, this.overAnimation, this);
        // this.count = (0);
        // this.filters = [];
        // this.text.visible = false;
    };
    RaceButton.prototype.setDown = function () {
        _super.prototype.setDown.call(this);
        this.filters = [new egret.GlowFilter(10027008, 0.66, 23, 23)];
    };
    return RaceButton;
}(ButtonCell));
__reflect(RaceButton.prototype, "RaceButton");
