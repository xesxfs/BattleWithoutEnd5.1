var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iGlobal;
(function (iGlobal) {
    var Global = (function () {
        function Global() {
        }
        Global.init = function (stage) {
            iGlobal.Global.stage = stage;
            iGlobal.Global.stringInfoWindow = new StringInfoWindow();
            App.LayerManager.msgLayer.addChild(iGlobal.Global.stringInfoWindow);
            iGlobal.Global.itemInfoWindow = new ItemInfoWindow("");
            App.LayerManager.msgLayer.addChild(iGlobal.Global.itemInfoWindow);
            iGlobal.Global.itemInfoWindow.visible = false;
            //flash.Font["registerFont"](font_nesb);
        };
        Global.getTextField = function (size, color) {
            if (size === void 0) { size = 16; }
            if (color === void 0) { color = 0x000000; }
            // var _loc3_:flash.TextFormat = new flash.TextFormat("RTWS YueGothic Trial Regular",param1,param2);
            var textField = new egret.TextField();
            textField.textAlign = egret.HorizontalAlign.CENTER;
            textField.textAlign = egret.VerticalAlign.MIDDLE;
            textField.size = size;
            textField.textColor = color;
            // _loc4_.embedFonts = true;
            // _loc4_.defaultTextFormat = _loc3_;
            // _loc4_["selectable"] = false;
            textField.multiline = false;
            textField.wordWrap = true;
            return textField;
        };
        Global.setStringInfoWindow = function (param1) {
            iGlobal.Global.stringInfoWindow.setText(param1);
            iGlobal.Global.stringInfoWindow.visible = true;
            if (iGlobal.Global.stringInfoWindow.parent) {
                iGlobal.Global.stringInfoWindow.parent.addChildAt(iGlobal.Global.stringInfoWindow, iGlobal.Global.stringInfoWindow.parent.numChildren - 1);
            }
        };
        Global.hideInfoWindow = function () {
            iGlobal.Global.stringInfoWindow.visible = false;
        };
        Global.setItemInfoWindow = function (param1) {
            iGlobal.Global.itemInfoWindow.TEXT = param1;
            iGlobal.Global.itemInfoWindow.visible = true;
            if (iGlobal.Global.itemInfoWindow.parent) {
                iGlobal.Global.itemInfoWindow.parent.addChildAt(iGlobal.Global.itemInfoWindow, iGlobal.Global.itemInfoWindow.parent.numChildren - 1);
            }
        };
        Global.hideItemInfoWindow = function () {
            iGlobal.Global.itemInfoWindow.visible = false;
        };
        Global.playSound = function () {
            iGlobal.Global.soundChannel = iGlobal.Global.sound.play();
        };
        Global.soundOut = function () {
            var timer = null;
            var n = 0;
            if (iGlobal.Global.soundChannel) {
                var onTimer = function (event) {
                    iGlobal.Global.soundChannel.volume = (1 - 0.05 * n);
                    n++;
                };
                timer = new egret.Timer(100, 21);
                timer.addEventListener(egret.TimerEvent.TIMER, onTimer, null);
                n = 0;
                timer.start();
            }
        };
        Global.htmlParse = new egret.HtmlTextParser();
        return Global;
    }());
    iGlobal.Global = Global;
    __reflect(Global.prototype, "iGlobal.Global");
})(iGlobal || (iGlobal = {}));
iGlobal.Global.map = new iData.iMap.Map(iData.iMap.MapList.list[0]);
iGlobal.Global.RED = 16728128;
iGlobal.Global.BLUE = 4874455;
iGlobal.Global.YELLOW = 16754240;
iGlobal.Global.GREEN = 8056380;
iGlobal.Global.battle = "battle";
iGlobal.Global.battle_toggle = true;
iGlobal.Global.battleIntro = "battleIntro";
iGlobal.Global.battleIntro_toggle = true;
iGlobal.Global.money = "money";
iGlobal.Global.money_toggle = true;
iGlobal.Global.exp = "exp";
iGlobal.Global.exp_toggle = true;
iGlobal.Global.item = "item";
iGlobal.Global.item_toggle = true;
iGlobal.Global.other = "other";
iGlobal.Global.other_toggle = true;
iGlobal.Global.item0 = "item0";
iGlobal.Global.item1 = "item1";
iGlobal.Global.item2 = "item2";
iGlobal.Global.item3 = "item3";
iGlobal.Global.item4 = "item4";
iGlobal.Global.item5 = "item5";
iGlobal.Global.item0_toggle = true;
iGlobal.Global.item1_toggle = true;
iGlobal.Global.item2_toggle = true;
iGlobal.Global.item3_toggle = true;
iGlobal.Global.item4_toggle = true;
iGlobal.Global.item5_toggle = true;
iGlobal.Global.sword = "sword";
iGlobal.Global.axe = "axe";
iGlobal.Global.bow = "bow";
iGlobal.Global.crossbow = "crossbow";
iGlobal.Global.sceptre = "sceptre";
iGlobal.Global.staff = "staff";
iGlobal.Global.tome = "tome";
iGlobal.Global.shield = "shield";
iGlobal.Global.dagger = "dagger";
iGlobal.Global.suit = "suit";
iGlobal.Global.jerkin = "jerkin";
iGlobal.Global.breastplate = "breastplate";
iGlobal.Global.fur_hat = "fur_hat";
iGlobal.Global.felt_hat = "felt_hat";
iGlobal.Global.helm = "helm";
iGlobal.Global.shoes = "Shoes";
iGlobal.Global.boots = "Boots";
iGlobal.Global.greaves = "Greaves";
iGlobal.Global.necklace = "necklace";
iGlobal.Global.ring = "ring";
iGlobal.Global.sword_toggle = true;
iGlobal.Global.axe_toggle = true;
iGlobal.Global.bow_toggle = true;
iGlobal.Global.crossbow_toggle = true;
iGlobal.Global.sceptre_toggle = true;
iGlobal.Global.staff_toggle = true;
iGlobal.Global.tome_toggle = true;
iGlobal.Global.shield_toggle = true;
iGlobal.Global.dagger_toggle = true;
iGlobal.Global.body_light_toggle = true;
iGlobal.Global.body_medium_toggle = true;
iGlobal.Global.body_heavy_toggle = true;
iGlobal.Global.head_light_toggle = true;
iGlobal.Global.head_medium_toggle = true;
iGlobal.Global.head_heavy_toggle = true;
iGlobal.Global.feet_light_toggle = true;
iGlobal.Global.feet_medium_toggle = true;
iGlobal.Global.feet_heavy_toggle = true;
iGlobal.Global.necklace_toggle = true;
iGlobal.Global.ring_toggle = true;
iGlobal.Global.autoSell_toggle = true;
// iGlobal.Global.sound = new blow_sound();
iGlobal.Global.sound_toggle = true;
