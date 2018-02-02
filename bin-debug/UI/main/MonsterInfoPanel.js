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
var MonsterInfoPanel = (function (_super) {
    __extends(MonsterInfoPanel, _super);
    function MonsterInfoPanel() {
        var _this = _super.call(this, 310, 150) || this;
        _this.beginX = 10;
        _this.beginY = 10;
        _this.yGap = 50;
        _this.sXGap = 70;
        _this.RED = "#ff4040";
        _this.BLUE = "#4a60d7";
        _this.YELLOW = "#FFA640";
        _this.GREEN = "#7AEE3C";
        _this.BROWN = "#bf7130";
        _this.PURPLE = "#BC38d3";
        _this.PINK = "#EE6b9c";
        _this.setPosition();
        return _this;
    }
    MonsterInfoPanel.prototype.setPosition = function () {
        var monCell = new StringCell("怪物");
        this.addChild(monCell);
        monCell.x = this.beginX;
        monCell.y = this.beginY;
        this._name = new StringCell("Boss Red Fox", 120, 22);
        this.addChild(this._name);
        this._name.x = this.beginX + this.sXGap;
        this._name.y = this.beginY;
        this.createBossIcon();
        this.title = new StringInfoCell("the Tanker", "Default", 120);
        this.addChild(this.title);
        this.title.x = this.beginX + this.sXGap;
        this.title.y = this.beginY + 35;
        var hpCell = new StringCell("HP");
        this.addChild(hpCell);
        hpCell.x = this.beginX;
        hpCell.y = this.beginY + this.yGap + 25;
        this.hp = new Bar(100, 100, 12522257);
        this.addChild(this.hp);
        this.hp.x = this.beginX + 70;
        this.hp.y = this.beginY + this.yGap + 40;
        var cpCell = new StringCell("战斗力");
        this.addChild(cpCell);
        cpCell.x = this.beginX;
        cpCell.y = this.beginY + this.yGap * 2 + 5;
        this.cp = new StringCell("100");
        this.addChild(this.cp);
        this.cp.x = this.beginX + this.sXGap + 30;
        this.cp.y = this.beginY + this.yGap * 2 + 5;
        this.buffSprite = new egret.Sprite();
    };
    MonsterInfoPanel.prototype.createBossIcon = function () {
        this.bossIcon = new egret.Bitmap(RES.getRes("boss_icon"));
        this.bossIcon.visible = false;
        this.addChild(this.bossIcon);
        this.bossIcon.x = this.beginX + 20;
        this.bossIcon.y = this.beginY + 30;
        this.bossIcon.width = 30;
        this.bossIcon.height = 30;
    };
    MonsterInfoPanel.prototype.update = function () {
        this.setCpRatioTitleAndName();
        this.setTitle();
        this.cp.setText(MainScene.battle.monster.CP + "");
        this.updateHp();
        this.updateBuff();
        this.updateBoss();
    };
    MonsterInfoPanel.prototype.updateBoss = function () {
        if (MainScene.battle.monster instanceof iData.iMonster.Boss) {
            this.bossIcon.visible = true;
            return;
        }
        this.bossIcon.visible = false;
    };
    MonsterInfoPanel.prototype.updateHp = function () {
        this.hp.Max = MainScene.battle.monster.hp;
        this.hp.Value = MainScene.battle.monsterHp;
    };
    MonsterInfoPanel.prototype.setCpRatioTitleAndName = function () {
        var color = null;
        var title = null;
        var cp = MainScene.battle.monster.CP / iGlobal.Player.combatPower;
        if (cp < 0.8) {
            color = this.PINK;
            title = "非常弱小的";
        }
        else if (cp < 1) {
            color = this.PURPLE;
            title = "弱小的";
        }
        else if (cp < 1.4) {
            color = this.BROWN;
            title = "普通的";
        }
        else if (cp < 2) {
            color = this.GREEN;
            title = "强大的";
        }
        else if (cp < 3) {
            color = this.YELLOW;
            title = "厉害的";
        }
        else {
            color = this.RED;
            title = "BOSS";
        }
        var showText = "<font color=" + color + ">" + title + "</font> " + MainScene.battle.monster.data.realName;
        this._name.setText(showText);
    };
    MonsterInfoPanel.prototype.setTitle = function () {
        if (MainScene.battle.monster.title) {
            this.title.setText(MainScene.battle.monster.title.name);
            this.title.setInfo(MainScene.battle.monster.title.description);
            this.title.visible = true;
        }
        else {
            this.title.setText("");
            this.title.visible = false;
        }
    };
    MonsterInfoPanel.prototype.updateBuff = function () {
        var buffIcon = null;
        if (this.contains(this.buffSprite)) {
            this.removeChild(this.buffSprite);
        }
        this.buffSprite = new egret.Sprite();
        this.addChild(this.buffSprite);
        this.buffSprite.x = this.beginX;
        this.buffSprite.y = this.beginY + 50;
        var length = MainScene.battle.monster.buffList;
        var i = (0);
        while (i < length.length) {
            buffIcon = new egret.Bitmap(RES.getRes("buff_" + length[i].name));
            buffIcon.width = 30;
            buffIcon.height = 30;
            this.buffSprite.addChild(buffIcon);
            buffIcon.x = i * 40;
            i++;
        }
    };
    return MonsterInfoPanel;
}(BasicCell));
__reflect(MonsterInfoPanel.prototype, "MonsterInfoPanel");
