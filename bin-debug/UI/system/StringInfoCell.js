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
var StringInfoCell = (function (_super) {
    __extends(StringInfoCell, _super);
    function StringInfoCell(text, info, w) {
        if (w === void 0) { w = 100; }
        var _this = _super.call(this) || this;
        _this.w = 0;
        _this.size = 16;
        _this.infoWindow = iGlobal.Global.stringInfoWindow;
        _this.textField = iGlobal.Global.getTextField(26);
        _this.info = info;
        _this.w = w;
        _this.addChild(_this.textField);
        _this.setText(text);
        _this.addEventListener(egret.TouchEvent.TOUCH_MOVE, _this.onMouseMove, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.onMouseOut, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, _this.onMouseOut, _this);
        _this.touchChildren = false;
        return _this;
    }
    StringInfoCell.prototype.onMouseMove = function (e) {
        var p = this.localToGlobal(e.localX + 15, e.localY + 15);
        this.infoWindow.x = p.x;
        this.infoWindow.y = p.y;
        if (this.infoWindow.x + this.infoWindow.width > iGlobal.Global.stage.stageWidth) {
            this.infoWindow.x = this.infoWindow.x - this.infoWindow.width - 30;
        }
    };
    StringInfoCell.prototype.onMouseOver = function (e) {
        this.filters = [new egret.GlowFilter(5066061, 0.66, 13, 13)];
        if (this.parent) {
            this.parent.addChildAt(this, this.parent.numChildren - 1);
        }
        iGlobal.Global.setStringInfoWindow(this.info);
    };
    StringInfoCell.prototype.onMouseOut = function (e) {
        this.filters = [];
        iGlobal.Global.hideInfoWindow();
    };
    StringInfoCell.prototype.setInfo = function (info) {
        this.info = info;
    };
    StringInfoCell.prototype.setText = function (text) {
        // var i: number = 0;
        // this.textField.width = this.w + 100;
        this.textField.textFlow = iGlobal.Global.htmlParse.parser(text);
        // this.textField.width = this.textField.textWidth + 6;
        // if (this.textField.width > this.w) {
        // 	this.removeChild(this.textField);
        // 	i = 1;
        // 	while (i < this.size) {
        // 		this.textField = iGlobal.Global.getTextField(this.size - i);
        // 		this.textField.width = this.w + 100;
        // 		this.textField.text = text;
        // 		this.textField.width = this.textField.textWidth + 6;
        // 		if (this.textField.width < this.w) {
        // 			break;
        // 		}
        // 		i++;
        // 	}
        // 	this.addChild(this.textField);
        // }
        this.graphics.clear();
        this.graphics.beginFill(16777215, 0.95);
        this.graphics.drawRoundRect(0, 0, this.textField.textWidth + 6, this.textField.textHeight + 2, 3);
        this.graphics.endFill();
    };
    return StringInfoCell;
}(egret.Sprite));
__reflect(StringInfoCell.prototype, "StringInfoCell");
