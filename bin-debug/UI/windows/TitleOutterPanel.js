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
var TitleOutterPanel = (function (_super) {
    __extends(TitleOutterPanel, _super);
    function TitleOutterPanel() {
        var _this = _super.call(this, 400, 700) || this;
        _this.setInner();
        return _this;
    }
    TitleOutterPanel.prototype.setInner = function () {
        this.innerPanel = new TitleInnerPanel();
        this.viewport = this.innerPanel;
    };
    return TitleOutterPanel;
}(OutterPanel));
__reflect(TitleOutterPanel.prototype, "TitleOutterPanel");
