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
var EquipmentCell = (function (_super) {
    __extends(EquipmentCell, _super);
    function EquipmentCell(equip) {
        var _this = _super.call(this, 200, 50) || this;
        _this.equip = equip;
        _this.touchEnabled = true;
        _this.init();
        return _this;
    }
    EquipmentCell.prototype.init = function () {
        this.filter_mc = new egret.Sprite();
        this.filter_mc.graphics.beginFill(16777215);
        this.filter_mc.graphics.drawCircle(15, 15, 14);
        this.filter_mc.graphics.endFill();
        this.before.addChild(this.filter_mc);
        this.filter_mc.x = 10;
        this.filter_mc.y = 10;
        if (this.equip instanceof iData.iItem.Weapon) {
            this.be_mc = (new egret.Bitmap(RES.getRes("mc_" + this.equip.type)));
        }
        else {
            this.be_mc = (new egret.Bitmap(RES.getRes("mc_" + this.equip.position + "_" + this.equip.type)));
        }
        this.before.addChild(this.be_mc);
        this.be_mc.width = 30;
        this.be_mc.height = 30;
        this.be_mc.x = 10;
        this.be_mc.y = 10;
        if ((this.equip instanceof iData.iItem.Weapon)) {
            this.af_mc = (new egret.Bitmap(RES.getRes("mc_" + this.equip.type)));
        }
        else {
            this.af_mc = (new egret.Bitmap(RES.getRes("mc_" + this.equip.position + "_" + this.equip.type)));
        }
        this.after.addChild(this.af_mc);
        this.af_mc.width = 30;
        this.af_mc.height = 30;
        this.af_mc.x = 10;
        this.af_mc.y = 10;
        // this.af_mc["transform"].colorTransform = new flash.ColorTransform(1,1,1,1,255,255,255,0);
        this.text = iGlobal.Global.getTextField(24);
        this.text.width = 110;
        this.text.textFlow = iGlobal.Global.htmlParse.parse(this.equip.getNameHTML());
        if (this.equip.level) {
            this.text.textFlow = iGlobal.Global.htmlParse.parse(this.text.text + (" +" + this.equip.level));
        }
        this.addChild(this.text);
        this.text.x = 50;
        this.text.y = 10;
        this.setEquipButton();
        this.setMoneyButton();
        this.setFilter();
        this.infoWindow = new ItemInfoWindow(this.equip.getDescription());
    };
    EquipmentCell.prototype.update = function () {
        this.removeInfoWindow();
        this.infoWindow = new ItemInfoWindow(this.equip.getDescription());
        this.text.textFlow = iGlobal.Global.htmlParse.parse(this.equip.getNameHTML());
        if (this.equip.level) {
            this.text.textFlow = iGlobal.Global.htmlParse.parse(this.text.text + (" +" + this.equip.level));
        }
        this.html = this.equip.getNameHTML() + " +" + this.equip.level;
        if (this.buttonDown) {
            this.addInfoWindow();
        }
        this.setFilter();
    };
    EquipmentCell.prototype.setFilter = function () {
        if (this.equip.level >= 7) {
            this.filter_mc.filters = [new egret.GlowFilter(16711680, 0.66, this.equip.level + 3, this.equip.level + 3)];
            this.af_mc.filters = [new egret.GlowFilter(5066061, 0.66, 13, 13)];
            this.text.filters = [new egret.GlowFilter(16777215, 0.66, 5, 5)];
        }
    };
    EquipmentCell.prototype.setEquipButton = function () {
        var _self__ = this;
        var equipDown = null;
        equipDown = function () {
            iGlobal.Player.removeItem(_self__.equip);
            iGlobal.Player.equip(_self__.equip);
            Emitter.dispatchEvent(Tool.MyEvent.Update);
        };
        var equipButton = new EquipButton("equip");
        this.addChild(equipButton);
        equipButton.x = 150;
        equipButton.y = 15;
        equipButton.downFunction = equipDown;
    };
    EquipmentCell.prototype.setMoneyButton = function () {
        var _self__ = this;
        var moneyDown = null;
        moneyDown = function () {
            iGlobal.Player.removeItem(_self__.equip);
            iGlobal.Player.addMoney(_self__.equip.getMoney());
            Emitter.dispatchEvent(Tool.MyEvent.Update);
        };
        var moneyButton = new EquipButton("money");
        this.addChild(moneyButton);
        moneyButton.x = 172;
        moneyButton.y = 15;
        moneyButton.downFunction = moneyDown;
    };
    EquipmentCell.prototype.addInfoWindow = function () {
        var pos = null;
        var point = null;
        _super.prototype.addInfoWindow.call(this);
        if ((this.equip instanceof iData.iItem.Weapon)) {
            switch (this.equip.position) {
                case iData.iItem.Weapon.ONEHAND:
                    pos = "leftHand";
                    break;
                case iData.iItem.Weapon.OFFHAND:
                    pos = "rightHand";
                    break;
                case iData.iItem.Weapon.TWOHAND:
                    pos = "leftHand";
            }
        }
        else {
            pos = this.equip.position;
        }
        if (iGlobal.Player[pos]) {
            this.equipedInfoWindow = new ItemInfoWindow(iGlobal.Player[pos].getDescription());
            this.addChild(this.equipedInfoWindow);
            this.equipedInfoWindow.x = -270;
            this.equipedInfoWindow.y = 0;
            point = this.localToGlobal(0, 0);
            if (point.y + this.equipedInfoWindow.height > iGlobal.Global.stage.stageHeight) {
                point = this.globalToLocal(0, iGlobal.Global.stage.stageHeight - this.equipedInfoWindow.height);
                this.equipedInfoWindow.y = point.y;
            }
        }
    };
    EquipmentCell.prototype.removeInfoWindow = function () {
        _super.prototype.removeInfoWindow.call(this);
        if (this.equipedInfoWindow) {
            this.removeChild(this.equipedInfoWindow);
            this.equipedInfoWindow = null;
        }
    };
    return EquipmentCell;
}(AdvancedCell));
__reflect(EquipmentCell.prototype, "EquipmentCell");
