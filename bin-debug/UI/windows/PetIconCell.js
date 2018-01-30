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
var PetIconCell = (function (_super) {
    __extends(PetIconCell, _super);
    function PetIconCell(pet) {
        if (pet === void 0) { pet = null; }
        var _this = _super.call(this) || this;
        _this.SIZE = 80;
        var _loc2_ = null;
        var _loc3_ = null;
        if (pet == null) {
            _loc2_ = new egret.Bitmap(RES.getRes("mc_mode_png"));
        }
        else {
            // _loc2_ = new (<any>flash.getDefinitionByName("pet_" + param1.mc_name))();
        }
        _this.addChild(_loc2_);
        _loc2_.width = _this.SIZE;
        _loc2_.height = _this.SIZE;
        if (pet == null) {
            // _loc3_ = new mc_mode();
        }
        else {
            // _loc3_ = new (<any>flash.getDefinitionByName("pet_" + param1.mc_name))();
        }
        return _this;
        // this.after.addChild(_loc3_);
        // _loc3_.width = this.SIZE;
        // _loc3_.height = this.SIZE;
    }
    return PetIconCell;
}(egret.Sprite));
__reflect(PetIconCell.prototype, "PetIconCell");
