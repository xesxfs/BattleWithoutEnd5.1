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
var TitleInnerPanel = (function (_super) {
    __extends(TitleInnerPanel, _super);
    function TitleInnerPanel() {
        var _this = _super.call(this) || this;
        _this.Gap = 50;
        var cell = null;
        _this.listSprite = new egret.Sprite();
        _this.addChild(_this.listSprite);
        var titleList = iData.iPlayer.TitleList.list;
        var l = (titleList.length);
        var i = (0);
        while (i < l) {
            cell = new TitleCell(titleList[i]);
            _this.listSprite.addChild(cell);
            cell.y = _this.Gap * i;
            i++;
        }
        _this.contentH = (l + 1) * _this.Gap;
        Emitter.addEventListener(Tool.MyEvent.Update, _this.onUpdate, _this);
        return _this;
    }
    TitleInnerPanel.prototype.onUpdate = function (e) {
        if (e === void 0) { e = null; }
        var i = (0);
        while (i < this.listSprite.numChildren) {
            this.listSprite.getChildAt(i).update();
            i++;
        }
    };
    return TitleInnerPanel;
}(InnerPanel));
__reflect(TitleInnerPanel.prototype, "TitleInnerPanel");
