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
var MagicInnerPanel = (function (_super) {
    __extends(MagicInnerPanel, _super);
    function MagicInnerPanel() {
        var _this = _super.call(this) || this;
        _this.Gap = 80;
        _this.listSprite = new egret.Sprite();
        _this.addChild(_this.listSprite);
        _this.init();
        return _this;
    }
    MagicInnerPanel.prototype.init = function () {
        var cell = null;
        var mIdx = (0);
        var skillIdx = (0);
        while (skillIdx < iGlobal.Player.skillList.length) {
            if ((iGlobal.Player.skillList[skillIdx] instanceof iData.iSkill.ActiveSkill) && iGlobal.Player.skillList[skillIdx].skillData.category == iData.iSkill.SkillCategory.MAGIC) {
                cell = new ActiveSkillCell(iGlobal.Player.skillList[skillIdx]);
                this.listSprite.addChild(cell);
                cell.y = this.Gap * mIdx;
                mIdx++;
            }
            skillIdx++;
        }
    };
    MagicInnerPanel.prototype.update = function () {
        var sIdx = (0);
        while (sIdx < this.listSprite.numChildren) {
            (this.listSprite.getChildAt(sIdx)).update();
            sIdx++;
        }
        this.addCell();
    };
    MagicInnerPanel.prototype.addCell = function () {
        var cell = null;
        var mIdx = (0);
        var sIdx = (0);
        while (sIdx < iGlobal.Player.skillList.length) {
            if ((iGlobal.Player.skillList[sIdx] instanceof iData.iSkill.ActiveSkill) && iGlobal.Player.skillList[sIdx].skillData.category == iData.iSkill.SkillCategory.MAGIC) {
                mIdx++;
                if (mIdx > this.listSprite.numChildren) {
                    cell = new ActiveSkillCell(iGlobal.Player.skillList[sIdx]);
                    this.listSprite.addChild(cell);
                    cell.y = this.Gap * (mIdx - 1);
                }
            }
            sIdx++;
        }
    };
    return MagicInnerPanel;
}(InnerPanel));
__reflect(MagicInnerPanel.prototype, "MagicInnerPanel");
