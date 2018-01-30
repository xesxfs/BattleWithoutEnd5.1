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
var OtherWindow = (function (_super) {
    __extends(OtherWindow, _super);
    function OtherWindow() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    OtherWindow.prototype.init = function () {
        var bsp = new BasicCell(200, 540);
        this.addChild(bsp);
        this.setHelp();
        this.setMap();
        this.setShop();
        this.setSpecialShop();
        this.setRebirth();
        this.setSave();
    };
    OtherWindow.prototype.setHelp = function () {
        var helpDown = null;
        helpDown = function () {
            iGlobal.Global.stage.addChild(iGlobal.Global.helpPanel);
            iGlobal.Global.helpPanel.visible = true;
            this.setBefore();
        };
        var help = new ClickButton("button_help", 50);
        this.addChild(help);
        help.x = 10;
        help.y = 100;
        help.downFunction = helpDown;
        var help_text = new StringCell("帮助", 100, 32);
        this.addChild(help_text);
        help_text.x = 100;
        help_text.y = 100;
    };
    OtherWindow.prototype.setMap = function () {
        var _self__ = this;
        var mapDown = null;
        mapDown = function () {
            iGlobal.Global.stage.addChild(_self__.mapPanel);
            _self__.mapPanel.visible = true;
        };
        this.mapPanel = new MapPanel();
        var mapButton = new ClickButton("button_map", 50);
        this.addChild(mapButton);
        mapButton.x = 10;
        mapButton.y = 10;
        mapButton.downFunction = mapDown;
        var text = new StringCell("地图", 100, 32);
        this.addChild(text);
        text.x = 100;
        text.y = 10;
    };
    OtherWindow.prototype.setShop = function () {
        var shopDown = null;
        shopDown = function () {
            iGlobal.Global.stage.addChild(iGlobal.Global.shopPanel);
            iGlobal.Global.shopPanel.visible = true;
            this["setBefore"]();
        };
        var shop = new ClickButton("button_shop", 50);
        this.addChild(shop);
        shop.x = 10;
        shop.y = 200;
        shop.downFunction = shopDown;
        var shop_text = new StringCell("商店", 100, 32);
        this.addChild(shop_text);
        shop_text.x = 100;
        shop_text.y = 200;
    };
    OtherWindow.prototype.setSpecialShop = function () {
        var specialShopDown = null;
        specialShopDown = function () {
            iGlobal.Global.stage.addChild(iGlobal.Global.specialShopPanel);
            iGlobal.Global.specialShopPanel.visible = true;
            this["setBefore"]();
        };
        var specialShop = new ClickButton("button_shop", 50);
        this.addChild(specialShop);
        specialShop.x = 10;
        specialShop.y = 280;
        specialShop.downFunction = specialShopDown;
        var specialShop_text = new StringCell("特殊商店", 150, 32);
        this.addChild(specialShop_text);
        specialShop_text.x = 60;
        specialShop_text.y = 280;
    };
    OtherWindow.prototype.setRebirth = function () {
        var _self__ = this;
        var rebirthDown = null;
        rebirthDown = function () {
            var raceScene = App.runScene(SceneConst.RaceScene);
            Tool.Effect.gradientIn(raceScene);
            _self__.rebirth.touchEnabled = false;
            _self__.rebirth.touchChildren = false;
            iData.iPlayer.TitleList.updateTitleInfo("reborn");
            iGlobal.Player.caculate = (0);
        };
        this.rebirth = new ClickButton("button_rebirth", 50);
        this.addChild(this.rebirth);
        this.rebirth.x = 10;
        this.rebirth.y = 350;
        this.rebirth.downFunction = rebirthDown;
        this.updateBirth();
        var rebirth_text = new StringCell("转生", 100, 32);
        this.addChild(rebirth_text);
        rebirth_text.x = 100;
        rebirth_text.y = 350;
        var intro = new StringCell("当你达到20岁之后", 150, 16);
        this.addChild(intro);
        intro.x = 35;
        intro.y = 400;
        intro = new StringCell("可以选择转生", 150, 16);
        this.addChild(intro);
        intro.x = 40;
        intro.y = 420;
        intro = new StringCell("技能和装备会保留", 150, 16);
        this.addChild(intro);
        intro.x = 40;
        intro.y = 440;
    };
    OtherWindow.prototype.setSave = function () {
        var saveDown = null;
        saveDown = function () {
            iGlobal.Player.save();
            MainScene.allInfoPanel.addText("记录已经保存!");
        };
        var save = new ClickButton("button_save", 50);
        this.addChild(save);
        save.x = 10;
        save.y = 470;
        save.downFunction = saveDown;
        var save_text = new StringCell("保存", 100, 32);
        this.addChild(save_text);
        save_text.x = 100;
        save_text.y = 470;
        var s_t = new StringCell("自动保存/30s", 100, 16);
        this.addChild(s_t);
        s_t.x = 80;
        s_t.y = 510;
    };
    OtherWindow.prototype.updateBirth = function () {
        if (iGlobal.Player.age >= 20) {
            this.rebirth.touchEnabled = true;
            this.rebirth.touchChildren = true;
        }
        else {
            this.rebirth.touchEnabled = false;
            this.rebirth.touchChildren = false;
        }
    };
    return OtherWindow;
}(IWindow));
__reflect(OtherWindow.prototype, "OtherWindow");