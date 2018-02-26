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
var ButtonCell = (function (_super) {
    __extends(ButtonCell, _super);
    function ButtonCell() {
        var _this = _super.call(this) || this;
        _this.buttonDown = false;
        _this.before = new egret.Sprite();
        _this.after = new egret.Sprite();
        _this.addChild(_this.before);
        _this.addChild(_this.after);
        _this.after.visible = false;
        _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onMouseOver, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, _this.onMouseOut, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onMouseDown, _this);
        return _this;
    }
    ButtonCell.prototype.onMouseOver = function (e) {
        if (!this.buttonDown) {
            this.setAfter();
        }
    };
    ButtonCell.prototype.onMouseOut = function (e) {
        if (!this.buttonDown) {
            this.setBefore();
        }
    };
    ButtonCell.prototype.onMouseDown = function (e) {
        if (this.buttonGroup) {
            this.buttonGroup.setDown(this);
        }
        else {
            this.setDown();
        }
    };
    ButtonCell.prototype.setAfter = function () {
        this.after.visible = true;
    };
    ButtonCell.prototype.setBefore = function () {
        this.after.visible = false;
        this.buttonDown = false;
    };
    ButtonCell.prototype.setDown = function () {
        if (!this.buttonDown) {
            this.buttonDown = true;
            if (this.downFunction) {
                this.downFunction();
            }
        }
        else {
            this.buttonDown = false;
            this.setBefore();
        }
    };
    return ButtonCell;
}(egret.Sprite));
__reflect(ButtonCell.prototype, "ButtonCell");
