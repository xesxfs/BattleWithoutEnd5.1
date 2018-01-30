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
var ShopCell = (function (_super) {
    __extends(ShopCell, _super);
    function ShopCell(param1) {
        var _this = _super.call(this, param1) || this;
        _this.downFunction = _this.setBefore;
        _this.updateMoneyButton();
        return _this;
    }
    ShopCell.prototype.setEquipButton = function () {
    };
    ShopCell.prototype.updateMoneyButton = function () {
        if (iGlobal.Player.gold > this.equip.getSellMoney()) {
            this.moneyButton.touchChildren = true;
            this.moneyButton.touchEnabled = true;
            this.m_text = "";
        }
        else {
            this.moneyButton.touchChildren = false;
            this.moneyButton.touchEnabled = false;
            this.m_text = "<font color=\'#ff4040\'>Can\'t afford</font>";
        }
    };
    ShopCell.prototype.setMoneyButton = function () {
        var _self__ = this;
        var _this_ = undefined;
        var moneyDown = null;
        moneyDown = function () {
            if (iGlobal.Player.addItem(_self__.equip)) {
                iGlobal.Player.loseMoney(_self__.equip.getSellMoney());
                if (_this_.parent) {
                    _this_.parent.removeChild(_this_);
                }
            }
            this.setBefore();
        };
        this.moneyButton = new EquipButton("money");
        this.addChild(this.moneyButton);
        this.moneyButton.x = 172;
        this.moneyButton.y = 15;
        this.moneyButton.downFunction = moneyDown;
        _this_ = this;
    };
    ShopCell.prototype.addInfoWindow = function () {
        var _loc3_ = null;
        this.infoWindow = new ItemInfoWindow(this.equip.getSellDesciption() + this.m_text);
        this.addChild(this.infoWindow);
        this.infoWindow.x = 205;
        var _loc1_ = (0);
        var _loc2_ = this.localToGlobal(0, 0);
        if (_loc2_.y + this.infoWindow.height > iGlobal.Global.stage.stageHeight) {
            _loc2_ = this.globalToLocal(0, iGlobal.Global.stage.stageHeight - this.infoWindow.height);
            _loc1_ = (_loc2_.y);
        }
        this.infoWindow.y = _loc1_;
        if ((this.equip instanceof iData.iItem.Weapon)) {
            switch (this.equip.position) {
                case iData.iItem.Weapon.ONEHAND:
                    _loc3_ = "leftHand";
                    break;
                case iData.iItem.Weapon.OFFHAND:
                    _loc3_ = "rightHand";
                    break;
                case iData.iItem.Weapon.TWOHAND:
                    _loc3_ = "leftHand";
            }
        }
        else {
            _loc3_ = this.equip.position;
        }
        if (iGlobal.Player[_loc3_]) {
            this.equipedInfoWindow = new ItemInfoWindow(iGlobal.Player[_loc3_].getDescription());
            this.addChild(this.equipedInfoWindow);
            this.equipedInfoWindow.x = 340;
            this.equipedInfoWindow.y = _loc1_;
        }
    };
    return ShopCell;
}(EquipmentCell));
__reflect(ShopCell.prototype, "ShopCell");
