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
var TitleCell = (function (_super) {
    __extends(TitleCell, _super);
    function TitleCell(param1) {
        var _this = _super.call(this, 200, 50) || this;
        _this.yellow = 14922250;
        _this.touchEnabled = true;
        _this.title = param1;
        _this.bg = new egret.Sprite();
        _this.bg.graphics.lineStyle(1, 13487565, 0.8);
        _this.bg.graphics.beginFill(16777215, 0.95);
        _this.bg.graphics.drawRect(0, 0, 200, 50);
        _this.bg.graphics.endFill();
        _this.addChild(_this.bg);
        _this.setInfo();
        _this.setBg();
        _this.addEventListener(egret.TouchEvent.TOUCH_MOVE, _this.onMouseOver, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, _this.onMouseOut, _this);
        _this.setListener();
        return _this;
    }
    TitleCell.prototype.onMouseDown = function (param1) {
        var _self__ = this;
        iGlobal.Player.setTitle(this.title);
        Emitter.dispatchEvent(Tool.MyEvent.Update);
    };
    TitleCell.prototype.setListener = function () {
        if (this.title.isGot) {
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onMouseDown, this);
        }
    };
    TitleCell.prototype.setBg = function () {
        if (this.title.isGot) {
            // 	this.bg["transform"].colorTransform = new flash.ColorTransform();
        }
        else {
            // 	this.bg["transform"].colorTransform = new flash.ColorTransform(0, 0, 0, 0.8, 200, 200, 200);
        }
    };
    TitleCell.prototype.update = function () {
        if (iGlobal.Player.title == this.title) {
            // this.bg["transform"].colorTransform = new flash.ColorTransform(0.9, 0.7, 0, 1, 0, 0, 0, 0);
            // this.text["transform"].colorTransform = new flash.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);
        }
        else {
            this.setBg();
            // this.text["transform"].colorTransform = new flash.ColorTransform();
        }
        this.setListener();
    };
    TitleCell.prototype.setInfo = function () {
        this.text = new StringCell(this.title.realName.toUpperCase(), 180, 24);
        this.addChild(this.text);
        this.text.x = 10;
        this.text.y = 10;
        this.infoWindow = new ItemInfoWindow(this.title.getDescription());
    };
    TitleCell.prototype.onMouseOver = function (param1) {
        // this.filters = [new egret.GlowFilter(5066061, 0.66, 13, 13)];
        if (this.parent) {
            this.parent.addChildAt(this, this.parent.numChildren - 1);
        }
        this.addInfoWindow();
    };
    TitleCell.prototype.onMouseOut = function (param1) {
        // this.filters = [];
        this.removeInfoWindow();
    };
    TitleCell.prototype.addInfoWindow = function () {
        this.infoWindow = new ItemInfoWindow(this.title.getDescription());
        this.addChild(this.infoWindow);
        this.infoWindow.x = -135;
        this.infoWindow.y = 0;
        var p = this.localToGlobal(0, 0);
        if (p.y + this.infoWindow.height > iGlobal.Global.stage.stageHeight) {
            p = this.globalToLocal(0, iGlobal.Global.stage.stageHeight - this.infoWindow.height);
            this.infoWindow.y = p.y;
        }
    };
    TitleCell.prototype.removeInfoWindow = function () {
        if (this.contains(this.infoWindow)) {
            this.removeChild(this.infoWindow);
        }
    };
    return TitleCell;
}(BasicCell));
__reflect(TitleCell.prototype, "TitleCell");
