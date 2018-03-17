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
var PetOutterPanel = (function (_super) {
    __extends(PetOutterPanel, _super);
    function PetOutterPanel() {
        var _this = _super.call(this, 390, 700) || this;
        _this.setInner();
        return _this;
    }
    PetOutterPanel.prototype.setInner = function () {
        this.innerPanel = new PetInnerPanel();
        this.viewport = this.innerPanel;
    };
    return PetOutterPanel;
}(OutterPanel));
__reflect(PetOutterPanel.prototype, "PetOutterPanel");
