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
var ShopPanel = (function (_super) {
    __extends(ShopPanel, _super);
    function ShopPanel() {
        var _this = _super.call(this, 640, 1136) || this;
        _this.gap = 80;
        _this.startX1 = 50;
        _this.startY1 = 110;
        _this.startX2 = 250;
        _this.graphics.lineStyle(2, 7631988);
        _this.graphics.drawRect(0, 0, 600, 1130);
        _this.init();
        return _this;
    }
    ShopPanel.prototype.init = function () {
        var _self_ = undefined;
        var hideDown = null;
        hideDown = function () {
            _self_.visible = false;
            this["setBefore"]();
        };
        this.time = new StringCell("1200", 100, 32);
        this.addChild(this.time);
        this.time.x = 450;
        this.time.y = 460;
        this.gold = new StringCell("金钱", 200, 32);
        this.addChild(this.gold);
        this.gold.x = 30;
        this.gold.y = 460;
        var title = new StringCell("商店", 300, 54);
        this.addChild(title);
        title.x = 200;
        title.y = 10;
        var equip_text = new StringCell("出售", 100, 32);
        this.addChild(equip_text);
        equip_text.x = 100;
        equip_text.y = 70;
        var gamble_text = new StringCell("赌博", 100, 32);
        this.addChild(gamble_text);
        gamble_text.x = 350;
        gamble_text.y = 70;
        this.itemPanel = new egret.Sprite();
        this.addChild(this.itemPanel);
        this.itemPanel.x = this.startX1;
        this.itemPanel.y = this.startY1;
        this.updateTime();
        var hide = new FlickerButton("退出", 100, 48);
        this.addChild(hide);
        hide.x = 420;
        hide.y = 10;
        hide.downFunction = hideDown;
        _self_ = this;
        this.updateShop();
    };
    ShopPanel.prototype.updateTime = function () {
        var t1 = (iGlobal.Player.caculate % 600);
        t1 = (600 - t1);
        var t2 = (t1 / 120);
        var t3 = ((t1 - t2 * 120) / 2);
        this.time.setText(t2 + ":" + t3);
        this.gold.setText("金钱: " + iGlobal.Player.gold);
    };
    ShopPanel.prototype.updateMoneyButton = function () {
        var cell;
        var i = (0);
        while (i < this.itemPanel.numChildren) {
            cell = this.itemPanel.getChildAt(i);
            if ((cell instanceof GambleCell)) {
                (cell).updateMoneyButton();
            }
            else {
                (cell).updateMoneyButton();
            }
            i++;
        }
    };
    ShopPanel.prototype.updateShop = function () {
        var length = (0);
        var randData = 0;
        var eData = null;
        var equiment = null;
        var shopCell = null;
        var gCell = null;
        length = (this.itemPanel.numChildren - 1);
        while (length >= 0) {
            this.itemPanel.removeChildAt(length);
            length--;
        }
        length = (0);
        while (length < 7) {
            randData = Math.random() * 3 * (1 + iGlobal.Player.luck / 400) * (1 + iGlobal.Player.combatPower / 1000);
            eData = iData.iItem.EquipmentList.list[iData.iItem.EquipmentList.list.length * Math.random() >> 0];
            if ((eData instanceof iData.iItem.WeaponData)) {
                equiment = new iData.iItem.Weapon(eData, randData);
            }
            else {
                equiment = new iData.iItem.Equipment(eData, randData);
            }
            shopCell = new ShopCell(equiment);
            this.itemPanel.addChild(shopCell);
            shopCell.x = 0;
            shopCell.y = length * this.gap;
            length++;
        }
        length = (0);
        while (length < 7) {
            randData = Math.random() * 6 * (1 + iGlobal.Player.luck / 200) * (1 + iGlobal.Player.combatPower / 700);
            eData = iData.iItem.EquipmentList.list[iData.iItem.EquipmentList.list.length * Math.random() >> 0];
            if ((eData instanceof iData.iItem.WeaponData)) {
                equiment = new iData.iItem.Weapon(eData, randData);
            }
            else {
                equiment = new iData.iItem.Equipment(eData, randData);
            }
            gCell = new GambleCell(equiment);
            this.itemPanel.addChild(gCell);
            gCell.x = this.startX2;
            gCell.y = length * this.gap;
            length++;
        }
    };
    return ShopPanel;
}(BasicCell));
__reflect(ShopPanel.prototype, "ShopPanel");
