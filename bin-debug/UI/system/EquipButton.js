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
var EquipButton = (function (_super) {
    __extends(EquipButton, _super);
    function EquipButton(param1) {
        var _this = _super.call(this) || this;
        _this.FIX = 20;
        _this.touchEnabled = true;
        var _loc2_ = new egret.Bitmap(RES.getRes("doubleCircle"));
        _loc2_.width = _this.FIX;
        _loc2_.height = _this.FIX;
        // _loc2_["transform"].colorTransform = new flash.ColorTransform(1,1,1,1,255,255,255,0);
        _this.before.addChild(_loc2_);
        var _loc3_ = new egret.Bitmap(RES.getRes("mc_" + param1));
        _this.before.addChild(_loc3_);
        _this.setMcPosition(_loc3_);
        var _loc4_ = new egret.Bitmap(RES.getRes("doubleCircle"));
        _loc4_.width = _this.FIX;
        _loc4_.height = _this.FIX;
        _this.after.addChild(_loc4_);
        var _loc5_ = new egret.Bitmap(RES.getRes("mc_" + param1));
        // _loc5_["transform"].colorTransform = new flash.ColorTransform(1,1,1,1,255,255,255,0);
        _this.after.addChild(_loc5_);
        _this.setMcPosition(_loc5_);
        return _this;
    }
    EquipButton.prototype.setMcPosition = function (param1) {
        var _loc2_ = 0;
        if (param1.width > param1.height) {
            _loc2_ = 10 / param1.width;
        }
        else {
            _loc2_ = 10 / param1.height;
        }
        param1.scaleX = _loc2_;
        param1.scaleY = _loc2_;
        param1.x = this.FIX / 2 - param1.width / 2;
        param1.y = this.FIX / 2 - param1.height / 2;
    };
    return EquipButton;
}(ButtonCell));
__reflect(EquipButton.prototype, "EquipButton");
