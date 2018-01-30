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
var GambleCell = (function (_super) {
    __extends(GambleCell, _super);
    function GambleCell(param1) {
        var _this = _super.call(this, param1) || this;
        _this.money = 0;
        _this.money = (10000 + Math.random() * 100000 * (1 + iGlobal.Player.combatPower / 700));
        _this.text.text = _this.equip.realName + "?";
        _this.downFunction = _this.setBefore;
        _this.updateMoneyButton();
        return _this;
    }
    GambleCell.prototype.setEquipButton = function () {
    };
    GambleCell.prototype.updateMoneyButton = function () {
        if (iGlobal.Player.gold > this.money) {
            this.moneyButton.touchChildren = true;
            this.moneyButton.touchEnabled = true;
            this.m_text = "<p align=\'right\'>$ " + this.money + "</p>";
        }
        else {
            this.moneyButton.touchChildren = false;
            this.moneyButton.touchEnabled = false;
            this.m_text = "<p align=\'right\'><font color=\'#ff4040\'>$ " + this.money + "</font></p>";
        }
    };
    GambleCell.prototype.setMoneyButton = function () {
        var _self__ = this;
        var _this_ = undefined;
        var moneyDown = null;
        moneyDown = function () {
            if (iGlobal.Player.addItem(_self__.equip)) {
                iGlobal.Player.loseMoney(_self__.money);
                if (_this_.parent) {
                    _this_.parent.removeChild(_this_);
                }
                iGlobal.Player.save();
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
    GambleCell.prototype.addInfoWindow = function () {
        this.infoWindow = new ItemInfoWindow("<p align=\'center\'>???</p>" + this.m_text);
        this.addChild(this.infoWindow);
        this.infoWindow.x = -135;
        var _loc1_ = (0);
        var _loc2_ = this.localToGlobal(0, 0);
        if (_loc2_.y + this.infoWindow.height > iGlobal.Global.stage.stageHeight) {
            _loc2_ = this.globalToLocal(0, iGlobal.Global.stage.stageHeight - this.infoWindow.height);
            _loc1_ = (_loc2_.y);
        }
        this.infoWindow.y = _loc1_;
    };
    return GambleCell;
}(EquipmentCell));
__reflect(GambleCell.prototype, "GambleCell");
