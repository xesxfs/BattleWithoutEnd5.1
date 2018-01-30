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
var AdvancedCell = (function (_super) {
    __extends(AdvancedCell, _super);
    function AdvancedCell(w, h) {
        var _this = _super.call(this) || this;
        // param1 = flash.checkInt(param1);
        // param2 = flash.checkInt(param2);
        _this.before.graphics.lineStyle(1, 13487565, 0.8);
        _this.before.graphics.beginFill(16777215, 0.95);
        _this.before.graphics.drawRect(0, 0, w, h);
        _this.before.graphics.endFill();
        _this.after.graphics.lineStyle(1, 13487565, 0.8);
        _this.after.graphics.beginFill(14922250, 0.95);
        _this.after.graphics.drawRect(0, 0, w, h);
        _this.after.graphics.endFill();
        return _this;
    }
    AdvancedCell.prototype.setAfter = function () {
        _super.prototype.setAfter.call(this);
        // this.filters = [new flash.GlowFilter(5066061,0.66,13,13)];
        // if(this.parent)
        // {
        // 	this.parent.addChildAt(this,this.parent.numChildren - 1);
        // }
        this.addInfoWindow();
        // this.text["transform"].colorTransform = new flash.ColorTransform(0,0,0,1,255,255,255,0);
    };
    AdvancedCell.prototype.setBefore = function () {
        _super.prototype.setBefore.call(this);
        this.filters = [];
        this.removeInfoWindow();
        // this.text["transform"].colorTransform = new flash.ColorTransform();
    };
    AdvancedCell.prototype.addInfoWindow = function () {
        this.addChild(this.infoWindow);
        this.infoWindow.x = -135;
        this.infoWindow.y = 0;
        var _loc1_ = this.localToGlobal(0, 0);
        if (_loc1_.y + this.infoWindow.height > iGlobal.Global.stage.stageHeight) {
            _loc1_ = this.globalToLocal(0, iGlobal.Global.stage.stageHeight - this.infoWindow.height);
            this.infoWindow.y = _loc1_.y;
        }
    };
    AdvancedCell.prototype.removeInfoWindow = function () {
        if (this.contains(this.infoWindow)) {
            this.removeChild(this.infoWindow);
        }
    };
    return AdvancedCell;
}(ButtonCell));
__reflect(AdvancedCell.prototype, "AdvancedCell");
