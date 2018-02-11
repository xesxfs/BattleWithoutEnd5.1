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
var ItemOutterPanel = (function (_super) {
    __extends(ItemOutterPanel, _super);
    function ItemOutterPanel() {
        var _this = _super.call(this, 300, 540) || this;
        _this.setInner();
        return _this;
    }
    ItemOutterPanel.prototype.setInner = function () {
        this.innerPanel = new ItemInnerPanel();
        this.viewport = this.innerPanel;
    };
    return ItemOutterPanel;
}(OutterPanel));
__reflect(ItemOutterPanel.prototype, "ItemOutterPanel");
