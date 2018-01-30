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
var PetWindow = (function (_super) {
    __extends(PetWindow, _super);
    function PetWindow() {
        var _this = _super.call(this) || this;
        _this.textBag = iGlobal.Global.getTextField(32, 7631988);
        var outterPanel = new PetOutterPanel();
        _this.addChild(outterPanel);
        outterPanel.x = 0;
        outterPanel.y = 40;
        _this.panel = outterPanel.innerPanel;
        _this.setBagText();
        Emitter.addEventListener(Tool.MyEvent.Update, _this.updateBagText, _this);
        return _this;
    }
    PetWindow.prototype.updateBagText = function (param1) {
        if (param1 === void 0) { param1 = null; }
        this.textBag.textFlow = iGlobal.Global.htmlParse.parse("<p align=\'center\'>" + iGlobal.Player.petList.length + "/" + iGlobal.Player.PETMAX + "</p>");
    };
    PetWindow.prototype.setBagText = function () {
        this.textBag.width = 200;
        this.textBag.textFlow = iGlobal.Global.htmlParse.parse("<p align=\'center\'>" + iGlobal.Player.petList.length + "/" + iGlobal.Player.PETMAX + "</p>");
        this.textBag.textAlign = egret.HorizontalAlign.CENTER;
        var tbg = new BasicCell(200, 40);
        this.addChild(tbg);
        tbg.x = 0;
        tbg.y = 0;
        this.textBag.width = 200;
        tbg.addChild(this.textBag);
    };
    PetWindow.prototype.update = function () {
        this.panel.update();
        this.updateBagText();
    };
    return PetWindow;
}(IWindow));
__reflect(PetWindow.prototype, "PetWindow");
