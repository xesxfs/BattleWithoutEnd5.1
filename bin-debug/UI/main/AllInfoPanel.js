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
var AllInfoPanel = (function (_super) {
    __extends(AllInfoPanel, _super);
    function AllInfoPanel() {
        var _this = _super.call(this, 405, 655) || this;
        var out = new AllInfoOutterPanel();
        _this.addChild(out);
        out.y = 10;
        _this.panel = out.innerPanel;
        return _this;
    }
    AllInfoPanel.prototype.addText = function (text, toggle) {
        if (toggle === void 0) { toggle = "other"; }
        if (iGlobal.Global[toggle + "_toggle"]) {
            this.panel.addText(text);
            return;
        }
    };
    return AllInfoPanel;
}(BasicCell));
__reflect(AllInfoPanel.prototype, "AllInfoPanel");
