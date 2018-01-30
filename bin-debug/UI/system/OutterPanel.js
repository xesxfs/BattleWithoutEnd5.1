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
var OutterPanel = (function (_super) {
    __extends(OutterPanel, _super);
    function OutterPanel(w, h) {
        var _this = _super.call(this) || this;
        _this.width = w;
        _this.height = h;
        _this.scrollPolicyV = eui.ScrollPolicy.ON;
        _this.scrollPolicyH = eui.ScrollPolicy.OFF;
        return _this;
    }
    OutterPanel.prototype.setInner = function () {
        this.innerPanel = new InnerPanel();
        this.viewport = this.innerPanel;
    };
    return OutterPanel;
}(eui.Scroller));
__reflect(OutterPanel.prototype, "OutterPanel");
