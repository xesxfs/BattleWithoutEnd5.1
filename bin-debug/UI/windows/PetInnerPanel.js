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
var PetInnerPanel = (function (_super) {
    __extends(PetInnerPanel, _super);
    function PetInnerPanel() {
        var _this = _super.call(this) || this;
        _this.Gap = 85;
        _this.update();
        Emitter.addEventListener(Tool.MyEvent.Update, _this.onUpdate, _this);
        return _this;
    }
    PetInnerPanel.prototype.onUpdate = function (e) {
        this.update();
    };
    PetInnerPanel.prototype.update = function () {
        this.updateList();
    };
    PetInnerPanel.prototype.updateList = function () {
        var cell = null;
        if (this.listSprite) {
            this.removeChild(this.listSprite);
        }
        this.listSprite = new egret.Sprite();
        this.addChild(this.listSprite);
        this.buttonGroup = new ButtonGroup();
        var length = (iGlobal.Player.petList.length);
        var i = (0);
        while (i < length) {
            cell = new PetCell(iGlobal.Player.petList[i]);
            this.listSprite.addChild(cell);
            cell.y = i * this.Gap;
            this.buttonGroup.addButton(cell);
            i++;
        }
        this.contentH = (length + 1) * this.Gap;
    };
    return PetInnerPanel;
}(InnerPanel));
__reflect(PetInnerPanel.prototype, "PetInnerPanel");
