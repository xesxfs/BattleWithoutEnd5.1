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
var CombatInnerPanel = (function (_super) {
    __extends(CombatInnerPanel, _super);
    function CombatInnerPanel() {
        var _this = _super.call(this) || this;
        _this.Gap = 80;
        _this.init();
        return _this;
    }
    CombatInnerPanel.prototype.init = function () {
        this.listSprite = new egret.Sprite();
        this.addChild(this.listSprite);
        var cell = null;
        var combatIdx = 0;
        var skillIdx = 0;
        while (skillIdx < iGlobal.Player.skillList.length) {
            if ((iGlobal.Player.skillList[skillIdx] instanceof iData.iSkill.ActiveSkill) && iGlobal.Player.skillList[skillIdx].skillData.category != iData.iSkill.SkillCategory.MAGIC) {
                cell = new ActiveSkillCell(iGlobal.Player.skillList[skillIdx]);
                this.listSprite.addChild(cell);
                cell.y = this.Gap * combatIdx;
                combatIdx++;
            }
            skillIdx++;
        }
    };
    CombatInnerPanel.prototype.update = function () {
        var idx = 0;
        while (idx < this.listSprite.numChildren) {
            this.listSprite.getChildAt(idx).update();
            idx++;
        }
        this.addCell();
    };
    CombatInnerPanel.prototype.addCell = function () {
        var skillCell = null;
        var combatIdx = 0;
        var skillIdx = (0);
        while (skillIdx < iGlobal.Player.skillList.length) {
            if ((iGlobal.Player.skillList[skillIdx] instanceof iData.iSkill.ActiveSkill) && iGlobal.Player.skillList[skillIdx].skillData.category != iData.iSkill.SkillCategory.MAGIC) {
                combatIdx++;
                if (combatIdx > this.listSprite.numChildren) {
                    skillCell = new ActiveSkillCell(iGlobal.Player.skillList[skillIdx]);
                    this.listSprite.addChild(skillCell);
                    skillCell.y = this.Gap * (combatIdx - 1);
                }
            }
            skillIdx++;
        }
    };
    return CombatInnerPanel;
}(InnerPanel));
__reflect(CombatInnerPanel.prototype, "CombatInnerPanel");
