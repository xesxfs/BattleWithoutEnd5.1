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
var Bar = (function (_super) {
    __extends(Bar, _super);
    function Bar(w, max, color, text) {
        if (text === void 0) { text = ""; }
        var _this = _super.call(this) || this;
        _this._max = 0;
        _this._value = 0;
        _this._aim = 0;
        _this.RATIO = 0.1;
        _this.w = 0;
        _this.fcolor = 0;
        _this.isMouseOver = false;
        _this.infoWindow = iGlobal.Global.stringInfoWindow;
        _this.w = w;
        _this._max = max;
        _this.fcolor = color;
        _this.text = text;
        _this.drawBg();
        _this.line = new egret.Sprite();
        _this.addChild(_this.line);
        _this.updateMc();
        _this.addEventListener(egret.Event.ENTER_FRAME, _this.onEnterFrame, _this, null);
        _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onMouseOver, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, _this.onMouseOut, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.onMouseOut, _this);
        return _this;
    }
    Bar.prototype.onMouseOver = function (e) {
        this.filters = [new egret.GlowFilter(this.fcolor, 0.66, 4, 4)];
        var point = this.localToGlobal(e.localX + 15, e.localY + 15);
        this.infoWindow.x = point.x;
        this.infoWindow.y = point.y;
        this.isMouseOver = true;
        iGlobal.Global.setStringInfoWindow(this.text + (this._value >> 0) + "/" + this._max);
    };
    Bar.prototype.onMouseOut = function (e) {
        this.filters = [];
        this.isMouseOver = false;
        iGlobal.Global.hideInfoWindow();
    };
    Bar.prototype.updateMc = function () {
        this.line.graphics.clear();
        this.line.graphics.lineStyle(2, 15066597);
        this.line.graphics.moveTo(0, 0);
        this.line.graphics.lineTo(this.w, 0);
        this.line.graphics.lineStyle(2, this.fcolor);
        this.line.graphics.moveTo(0, 0);
        if (this._value < 0) {
            this.line.graphics.lineTo(0, 0);
        }
        else if (this._value > this._max) {
            this.line.graphics.lineTo(this.w, 0);
        }
        else {
            this.line.graphics.lineTo(this._value / this._max * this.w, 0);
        }
    };
    Bar.prototype.onEnterFrame = function (e) {
        if (Math.abs(this._aim - this._value) > this._max / 100) {
            this._value = this._value + (this._aim - this._value) * this.RATIO;
        }
        else {
            this._value = this._aim;
        }
        this.updateMc();
    };
    Object.defineProperty(Bar.prototype, "Max", {
        set: function (max) {
            this._max = max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bar.prototype, "Value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._aim = value;
            if (this.isMouseOver) {
                iGlobal.Global.setStringInfoWindow(this.text + (this._value >> 0) + "/" + this._max);
            }
        },
        enumerable: true,
        configurable: true
    });
    Bar.prototype.drawBg = function () {
        this.bg = new egret.Sprite();
        this.addChild(this.bg);
        this.bg.graphics.beginFill(4095, 0);
        this.bg.graphics.drawRect(-3, 0, this.w, 8);
        this.bg.graphics.endFill();
    };
    return Bar;
}(egret.Sprite));
__reflect(Bar.prototype, "Bar");
