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
var PassiveInnerPanel = (function (_super) {
    __extends(PassiveInnerPanel, _super);
    function PassiveInnerPanel() {
        var _this = _super.call(this) || this;
        _this.Gap = 80;
        _this.init();
        return _this;
    }
    PassiveInnerPanel.prototype.init = function () {
        this.listSprite = new egret.Sprite();
        this.addChild(this.listSprite);
        var cell = null;
        var pIdx = (0);
        var idx = (0);
        while (idx < iGlobal.Player.skillList.length) {
            if ((iGlobal.Player.skillList[idx] instanceof iData.iSkill.PassiveSkill)) {
                cell = new SkillCell(iGlobal.Player.skillList[idx]);
                this.listSprite.addChild(cell);
                cell.y = this.Gap * pIdx;
                pIdx++;
            }
            idx++;
        }
    };
    PassiveInnerPanel.prototype.update = function () {
        var idx = (0);
        while (idx < this.listSprite.numChildren) {
            (this.listSprite.getChildAt(idx)).update();
            idx++;
        }
        this.addCell();
    };
    PassiveInnerPanel.prototype.addCell = function () {
        var cell = null;
        var pIdx = (0);
        var sIdx = (0);
        while (sIdx < iGlobal.Player.skillList.length) {
            if ((iGlobal.Player.skillList[sIdx] instanceof iData.iSkill.PassiveSkill)) {
                pIdx++;
                if (pIdx > this.listSprite.numChildren) {
                    cell = new SkillCell(iGlobal.Player.skillList[sIdx]);
                    this.listSprite.addChild(cell);
                    cell.y = this.Gap * (pIdx - 1);
                }
            }
            sIdx++;
        }
    };
    return PassiveInnerPanel;
}(InnerPanel));
__reflect(PassiveInnerPanel.prototype, "PassiveInnerPanel");
