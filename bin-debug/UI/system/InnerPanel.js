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
var InnerPanel = (function (_super) {
    __extends(InnerPanel, _super);
    function InnerPanel() {
        var _this = _super.call(this) || this;
        _this.contentH = 0;
        return _this;
    }
    Object.defineProperty(InnerPanel.prototype, "contentHeight", {
        get: function () {
            return this.contentH + 20;
        },
        enumerable: true,
        configurable: true
    });
    return InnerPanel;
}(eui.Group));
__reflect(InnerPanel.prototype, "InnerPanel");
