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
var EquipCell = (function (_super) {
    __extends(EquipCell, _super);
    function EquipCell(data, pos) {
        if (data === void 0) { data = null; }
        if (pos === void 0) { pos = ""; }
        var _this = _super.call(this) || this;
        _this.SIZE = 80;
        _this.touchEnabled = true;
        var icon = null;
        _this.infoWindow = iGlobal.Global.itemInfoWindow;
        _this.position = pos;
        _this.equip = data;
        var bsp = new egret.Sprite();
        bsp.graphics.beginFill(16777215);
        bsp.graphics.drawCircle(40, 40, 39);
        bsp.graphics.endFill();
        _this.before.addChild(bsp);
        if (data == null) {
            icon = new egret.Bitmap(RES.getRes("mc_mode"));
        }
        else {
            if ((_this.equip instanceof iData.iItem.Weapon)) {
                icon = new egret.Bitmap(RES.getRes("mc_" + _this.equip.type));
            }
            else {
                icon = new egret.Bitmap(RES.getRes("mc_" + _this.equip.position + "_" + _this.equip.type));
            }
            // _loc4_["transform"].colorTransform = new egret.ColorTransform(0, 0, 0, 1, this.equip.getColorInHex() >> 16, this.equip.getColorInHex() >> 8 & 255, this.equip.getColorInHex() & 255);
            if (_this.equip.level >= 7) {
                bsp.filters = [new egret.GlowFilter(16711680, 0.66, _this.equip.level + 3, _this.equip.level + 3)];
            }
        }
        _this.before.addChild(icon);
        icon.width = _this.SIZE;
        icon.height = _this.SIZE;
        if (data == null) {
            icon = new egret.Bitmap(RES.getRes("mc_mode"));
        }
        else {
            if ((_this.equip instanceof iData.iItem.Weapon)) {
                icon = new egret.Bitmap(RES.getRes("mc_" + _this.equip.type));
            }
            else {
                icon = new egret.Bitmap(RES.getRes("mc_" + _this.equip.position + "_" + _this.equip.type));
            }
            // this.after["transform"].colorTransform = new flash.ColorTransform(0, 0, 0, 1, 227, 178, 10, 5);
        }
        _this.after.addChild(icon);
        icon.width = _this.SIZE;
        icon.height = _this.SIZE;
        // this.downFunction = flash.bind(this.setBefore, this);
        _this.addEventListener(egret.TouchEvent.TOUCH_MOVE, _this.onMouseMove, _this);
        return _this;
    }
    EquipCell.prototype.onMouseMove = function (e) {
        var p = this.localToGlobal(e.localX + 15, e.localY + 15);
        this.infoWindow.x = p.x;
        this.infoWindow.y = p.y;
        if (p.x + 135 > iGlobal.Global.stage.stageWidth) {
            this.infoWindow.x = this.infoWindow.x - 135;
        }
    };
    EquipCell.prototype.setBefore = function () {
        _super.prototype.setBefore.call(this);
        iGlobal.Global.hideItemInfoWindow();
    };
    EquipCell.prototype.setAfter = function () {
        _super.prototype.setAfter.call(this);
        if (this.equip) {
            iGlobal.Global.setItemInfoWindow(this.equip.getDescription());
        }
    };
    return EquipCell;
}(ButtonCell));
__reflect(EquipCell.prototype, "EquipCell");
