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
var ItemInfoWindow = (function (_super) {
    __extends(ItemInfoWindow, _super);
    function ItemInfoWindow(text) {
        var _this = _super.call(this, 0, 0) || this;
        _this.text = iGlobal.Global.getTextField(24);
        _this.text.multiline = true;
        _this.text.width = 130;
        _this.addChild(_this.text);
        _this.text.textFlow = iGlobal.Global.htmlParse.parser(text);
        return _this;
    }
    ItemInfoWindow.prototype.draw = function (width, height) {
        this.graphics.clear();
        // super.draw(130, this.text.textHeight + 5);
    };
    Object.defineProperty(ItemInfoWindow.prototype, "TEXT", {
        set: function (txt) {
            this.text.textFlow = iGlobal.Global.htmlParse.parse(txt);
            this.draw(0, 0);
        },
        enumerable: true,
        configurable: true
    });
    return ItemInfoWindow;
}(InfoWindow));
__reflect(ItemInfoWindow.prototype, "ItemInfoWindow");
