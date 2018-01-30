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
var BattleSkillPanel = (function (_super) {
    __extends(BattleSkillPanel, _super);
    function BattleSkillPanel() {
        var _this = _super.call(this) || this;
        _this.GAP = 35;
        _this.yStart = 5;
        _this.xStart1 = 5;
        _this.xStart2 = 15;
        _this.init();
        return _this;
    }
    BattleSkillPanel.prototype.init = function () {
        this.att = new StringCell("攻击", 100, 24);
        this.def = new StringCell("防御", 100, 24);
        this.bg = new egret.Sprite();
        this.addChild(this.bg);
        this.panel = new egret.Sprite();
        this.attPanel = new egret.Sprite();
        this.defPanel = new egret.Sprite();
        this.addChild(this.panel);
        this.update();
    };
    BattleSkillPanel.prototype.update = function () {
        var curSpellChance = 0;
        var skillIndex = 0;
        var skillLab = null;
        this.remove();
        var skillList = iGlobal.Player.attackSkillList;
        var skillLength = skillList.length;
        if (skillLength > 0) {
            this.panel.addChild(this.att);
            this.att.x = this.xStart1;
            this.att.y = this.yStart;
            curSpellChance = iGlobal.Player.spellChance + 20 + skillLength * 5;
            if (curSpellChance > 95) {
                curSpellChance = 95;
            }
            skillIndex = 0;
            while (skillIndex < skillLength) {
                skillLab = new eui.Label(skillList[skillIndex].skillData.realName + "  " + (curSpellChance / skillLength * 100 >> 0) / 100 + "%");
                skillLab.textColor = 0x000000;
                this.attPanel.addChild(skillLab);
                skillLab.y = this.GAP * skillIndex;
                skillIndex++;
            }
            this.panel.addChild(this.attPanel);
            this.attPanel.x = this.xStart2;
            this.attPanel.y = this.yStart + 30;
        }
        skillList = iGlobal.Player.defenceSkillList;
        skillLength = skillList.length;
        if (skillLength > 0) {
            this.panel.addChild(this.def);
            this.def.x = this.xStart1;
            this.def.y = this.attPanel.y + this.attPanel.height;
            curSpellChance = iGlobal.Player.spellChance + skillLength * 20;
            if (curSpellChance > 95) {
                curSpellChance = 95;
            }
            skillIndex = 0;
            while (skillIndex < skillLength) {
                skillLab = new eui.Label(skillList[skillIndex].skillData.realName + "  " + (curSpellChance / skillLength * 100 >> 0) / 100 + "%");
                skillLab.textColor = 0x000000;
                this.defPanel.addChild(skillLab);
                skillLab.y = this.GAP * skillIndex;
                skillIndex++;
            }
            this.panel.addChild(this.defPanel);
            this.defPanel.x = this.xStart2;
            this.defPanel.y = this.def.y + 30;
        }
        this.drawBg();
    };
    BattleSkillPanel.prototype.remove = function () {
        if (this.panel.contains(this.att)) {
            this.panel.removeChild(this.att);
        }
        if (this.panel.contains(this.def)) {
            this.panel.removeChild(this.def);
        }
        this.attPanel.removeChildren();
        this.defPanel.removeChildren();
    };
    BattleSkillPanel.prototype.drawBg = function () {
        this.bg.graphics.clear();
        this.bg.graphics.beginFill(16777215, 0);
        this.bg.graphics.drawRect(0, 0, 170, this.height);
        this.bg.graphics.endFill();
    };
    return BattleSkillPanel;
}(egret.Sprite));
__reflect(BattleSkillPanel.prototype, "BattleSkillPanel");
