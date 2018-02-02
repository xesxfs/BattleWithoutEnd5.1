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
var PlayerInfoPanel = (function (_super) {
    __extends(PlayerInfoPanel, _super);
    function PlayerInfoPanel() {
        var _this = _super.call(this, 640, 250) || this;
        _this.beginX = 10;
        _this.beginY = 10;
        _this.sXGap = 50;
        _this.bXGap = 220;
        _this.yGap = 30;
        _this.setPosition();
        _this.update();
        return _this;
    }
    PlayerInfoPanel.prototype.setPosition = function () {
        var ncell = new StringCell("名字");
        this.addChild(ncell);
        ncell.x = this.beginX;
        ncell.y = this.beginY;
        this._name = new StringCell("Jason", 200);
        this.addChild(this._name);
        this._name.x = this.beginX + this.sXGap;
        this._name.y = this.beginY;
        var cellList = new Array();
        var raceCell = new StringCell("种族");
        cellList.push(raceCell);
        this.race = new StringCell(iGlobal.Player.race.name.toUpperCase());
        cellList.push(this.race);
        var ageCell = new StringCell("年龄");
        cellList.push(ageCell);
        this.age = new StringInfoCell("17", "还剩:");
        cellList.push(this.age);
        var _loc5_ = new StringCell("LV");
        cellList.push(_loc5_);
        this.lv = new StringCell("20");
        cellList.push(this.lv);
        cellList.push(new StringCell("HP"));
        cellList.push(this.hp = new Bar(80, 100, 12522257));
        cellList.push(new StringCell("MP"));
        cellList.push(this.mp = new Bar(80, 100, 424351));
        cellList.push(new StringCell("EXP"));
        cellList.push(this.exp = new Bar(80, 100, 7932074));
        cellList.push(new StringCell("金钱"));
        cellList.push(this.gold = new StringCell("23424"));
        cellList.push(new StringInfoCell("力量", "增加基础攻击力"));
        cellList.push(this.str = new StringCell("13"));
        cellList.push(new StringInfoCell("敏捷", "影响平衡，增加使用远程武器时候的攻击力"));
        cellList.push(this.dex = new StringCell("14"));
        cellList.push(new StringInfoCell("智力", "增加魔法伤害和技能释放率"));
        cellList.push(this.intelligence = new StringCell("123"));
        cellList.push(new StringInfoCell("意志", "影响暴击"));
        cellList.push(this.will = new StringCell("213"));
        cellList.push(new StringInfoCell("幸运", "影响暴击和...？"));
        cellList.push(this.luck = new StringCell("12"));
        cellList.push(new StringInfoCell("AP", "技能点，提升技能"));
        cellList.push(this.ap = new StringCell("23"));
        cellList.push(new StringInfoCell("战斗力", "显示了你当前的基础战斗力，不包括装备的加成 "));
        cellList.push(this.cp = new StringCell("100"));
        cellList.push(new StringInfoCell("攻击", "物理输出"));
        cellList.push(this.attack = new StringCell("12~23"));
        cellList.push(new StringInfoCell("平衡", "影响伤害的平衡，值越大，输出接近最大值的可能性越大"));
        cellList.push(this.balance = new StringCell("100"));
        cellList.push(new StringInfoCell("暴击", "暴击概率，可被对方护甲减少"));
        cellList.push(this.crit = new StringCell("50%"));
        cellList.push(new StringInfoCell("暴击倍数", "暴击倍数，影响暴击时造成输出的倍数"));
        cellList.push(this.crit_mul = new StringCell("100%"));
        cellList.push(new StringInfoCell("防御", "防御，直接抵消伤害"));
        cellList.push(this.defence = new StringCell("100"));
        cellList.push(new StringInfoCell("护甲", "护甲，按百分比抵消伤害，抵消多少百分比鼠标移到到护甲数值上有写"));
        cellList.push(this.protection = new StringInfoCell("100", "50%"));
        cellList.push(new StringInfoCell("无视护甲", "无视敌方护甲的数值"));
        cellList.push(this.pro_ignore = new StringCell("0"));
        var length = (cellList.length);
        var i = (0);
        while (i < length) {
            this.addChild(cellList[i]);
            cellList[i].x = this.beginX + this.sXGap * (i % 2) + this.bXGap * (i / 14 >> 0);
            cellList[i].y = this.beginY + this.yGap + this.yGap * (i % 14 / 2 >> 0);
            i++;
        }
        this.hp.x = this.beginX + 50;
        this.hp.y = this.hp.y + 13;
        this.mp.x = this.beginX + 50;
        this.mp.y = this.mp.y + 13;
        this.exp.x = this.beginX + 50;
        this.exp.y = this.exp.y + 13;
        this.crit_mul.x = this.crit_mul.x + 40;
        this.pro_ignore.x = this.pro_ignore.x + 40;
        this.cp.x = this.cp.x + 20;
    };
    PlayerInfoPanel.prototype.update = function () {
        if (iGlobal.Player.title) {
            this._name.setText(iGlobal.Player.title.realName + "" + iGlobal.Player.playerName);
        }
        else {
            this._name.setText(iGlobal.Player.playerName);
        }
        this.race.setText(iGlobal.Player.race.name.toUpperCase());
        this.age.setText(iGlobal.Player.age + "");
        var str = "";
        var race = iGlobal.Player.race;
        var age = (iGlobal.Player.age);
        var ageOffsize = (17 - age);
        if (ageOffsize < 1 && age <= 25) {
            ageOffsize = (1);
        }
        if (age < 25) {
            str = str + ("Hp   +" + (race.ageupList[age - 10].hp + 1) + "<br/>");
            str = str + ("Mp   +" + (race.ageupList[age - 10].mp + 1) + "<br/>");
            str = str + ("力量 +" + race.ageupList[age - 10].str + "<br/>");
            str = str + ("敏捷 +" + race.ageupList[age - 10].dex + "<br/>");
            str = str + ("意志 +" + race.ageupList[age - 10].will + "<br/>");
            str = str + ("智力 +" + race.ageupList[age - 10].intelligence + "<br/>");
            str = str + ("幸运 +" + race.ageupList[age - 10].luck + "<br/>");
            str = str + ("AP   +" + ageOffsize + "<br/>");
        }
        else {
            str = str + ("Hp   +" + 1 + "<br/>");
            str = str + ("Mp   +" + 1 + "<br/>");
            str = str + ("力量 +" + 0 + "<br/>");
            str = str + ("敏捷 +" + 0 + "<br/>");
            str = str + ("意志 +" + 0 + "<br/>");
            str = str + ("智力 +" + 0 + "<br/>");
            str = str + ("幸运 +" + 0 + "<br/>");
            str = str + ("AP   +" + 0 + "<br/>");
        }
        this.age.setInfo("年龄增长时:<br/>" + str + "长大还剩:" + this.timeToGrowup());
        this.lv.setText(iGlobal.Player.lv + "");
        if (iGlobal.Player.str < iGlobal.Player.basicStr) {
            this.str.setText(this.redText(iGlobal.Player.str + "") + "<font size=\'12\'>(" + iGlobal.Player.basicStr + ")</font>");
        }
        else {
            this.str.setText(this.greenText(iGlobal.Player.str + "") + "<font size=\'12\'>(" + iGlobal.Player.basicStr + ")</font>");
        }
        if (iGlobal.Player.dex < iGlobal.Player.basicDex) {
            this.dex.setText(this.redText(iGlobal.Player.dex + "") + "<font size=\'12\'>(" + iGlobal.Player.basicDex + ")</font>");
        }
        else {
            this.dex.setText(this.greenText(iGlobal.Player.dex + "") + "<font size=\'12\'>(" + iGlobal.Player.basicDex + ")</font>");
        }
        if (iGlobal.Player.intelligence < iGlobal.Player.basicInt) {
            this.intelligence.setText(this.redText(iGlobal.Player.intelligence + "") + "<font size=\'12\'>(" + iGlobal.Player.basicInt + ")</font>");
        }
        else {
            this.intelligence.setText(this.greenText(iGlobal.Player.intelligence + "") + "<font size=\'12\'>(" + iGlobal.Player.basicInt + ")</font>");
        }
        if (iGlobal.Player.will < iGlobal.Player.basicWill) {
            this.will.setText(this.redText(iGlobal.Player.will + "") + "<font size=\'12\'>(" + iGlobal.Player.basicWill + ")</font>");
        }
        else {
            this.will.setText(this.greenText(iGlobal.Player.will + "") + "<font size=\'12\'>(" + iGlobal.Player.basicWill + ")</font>");
        }
        if (iGlobal.Player.luck < iGlobal.Player.basicLuck) {
            this.luck.setText(this.redText(iGlobal.Player.luck + "") + "<font size=\'12\'>(" + iGlobal.Player.basicLuck + ")</font>");
        }
        else {
            this.luck.setText(this.greenText(iGlobal.Player.luck + "") + "<font size=\'12\'>(" + iGlobal.Player.basicLuck + ")</font>");
        }
        if (iGlobal.Player.attMin > iGlobal.Player.attMax) {
            this.attack.setText(iGlobal.Player.attMax + "~" + iGlobal.Player.attMin + "");
        }
        else {
            this.attack.setText(iGlobal.Player.attMin + "~" + iGlobal.Player.attMax + "");
        }
        this.balance.setText(iGlobal.Player.balance + "");
        this.crit.setText(iGlobal.Player.crit + "");
        this.defence.setText(iGlobal.Player.defence + "");
        this.protection.setText(iGlobal.Player.protection + "");
        this.protection.setInfo(this.caculatePro() + "%");
        this.gold.setText(iGlobal.Player.gold + "");
        this.ap.setText(iGlobal.Player.ap + "");
        this.cp.setText((iGlobal.Player.combatPower * 100 >> 0) / 100 + "");
        this.crit_mul.setText(iGlobal.Player.crit_mul + "%");
        this.pro_ignore.setText(iGlobal.Player.protectionIgnore + "");
        this.upDateHpAndMp();
    };
    PlayerInfoPanel.prototype.greenText = function (text) {
        return "<font color=\'#e3b20a\'>" + text + "</font>";
    };
    PlayerInfoPanel.prototype.redText = function (param1) {
        return "<font color=\'#ff4040\'>" + param1 + "</font>";
    };
    PlayerInfoPanel.prototype.caculatePro = function () {
        return iGlobal.Player.protection * 6 / (iGlobal.Player.protection * 6 + 100) * 100;
    };
    PlayerInfoPanel.prototype.upDateHpAndMp = function () {
        if (MainScene.battle) {
            this.hp.Value = MainScene.battle.playerHp;
            this.mp.Value = MainScene.battle.playerMp;
        }
        this.hp.Max = iGlobal.Player.hp;
        this.mp.Max = iGlobal.Player.mp;
    };
    PlayerInfoPanel.prototype.upDateExp = function () {
        this.exp.Value = iGlobal.Player.xp;
        this.exp.Max = iGlobal.Player.getLevelExp();
    };
    PlayerInfoPanel.prototype.timeToGrowup = function () {
        var count = (iGlobal.Player.caculate % 2400);
        count = (2400 - count);
        var min = (count / 120);
        var second = ((count - min * 120) / 2);
        return min + ":" + second;
    };
    return PlayerInfoPanel;
}(BasicCell));
__reflect(PlayerInfoPanel.prototype, "PlayerInfoPanel");
