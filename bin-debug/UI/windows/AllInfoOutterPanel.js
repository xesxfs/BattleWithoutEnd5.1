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
var AllInfoOutterPanel = (function (_super) {
    __extends(AllInfoOutterPanel, _super);
    function AllInfoOutterPanel() {
        var _this = _super.call(this, 405, 655) || this;
        _this.setInnerPanel();
        return _this;
    }
    AllInfoOutterPanel.prototype.setInnerPanel = function () {
        this.innerPanel = new AllInfoInnerPanel();
        this.viewport = this.innerPanel;
    };
    return AllInfoOutterPanel;
}(OutterPanel));
__reflect(AllInfoOutterPanel.prototype, "AllInfoOutterPanel");
