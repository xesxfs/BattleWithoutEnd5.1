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
var PetInfoPanel = (function (_super) {
    __extends(PetInfoPanel, _super);
    function PetInfoPanel() {
        var _this = _super.call(this, 300, 140) || this;
        _this.beginX = 10;
        _this.beginY = 10;
        _this.yGap = 30;
        _this.sXGap = 50;
        _this.init();
        return _this;
    }
    PetInfoPanel.prototype.init = function () {
        var petcell = new StringCell("宠物");
        this.addChild(petcell);
        petcell.x = this.beginX;
        petcell.y = this.beginY;
        this._name = new StringCell("", 120);
        this.addChild(this._name);
        this._name.x = this.beginX + this.sXGap;
        this._name.y = this.beginY;
        var lvCell = new StringCell("Lv");
        this.addChild(lvCell);
        lvCell.x = this.beginX;
        lvCell.y = this.beginY + this.yGap;
        this.lv = new StringCell("");
        this.addChild(this.lv);
        this.lv.x = this.beginX + this.sXGap - 30;
        this.lv.y = this.beginY + this.yGap;
        var expCell = new StringCell("Exp");
        this.addChild(expCell);
        expCell.x = this.beginX;
        expCell.y = this.beginY + this.yGap * 2;
        this.exp = new Bar(100, 100, 7932074);
        this.addChild(this.exp);
        this.exp.x = this.beginX + 40;
        this.exp.y = this.beginY + this.yGap * 2 + 13;
        var hpcell = new StringCell("HP");
        this.addChild(hpcell);
        hpcell.x = this.beginX;
        hpcell.y = this.beginY + this.yGap * 3;
        this.hp = new Bar(100, 100, 12522257);
        this.addChild(this.hp);
        this.hp.x = this.beginX + 40;
        this.hp.y = this.beginY + this.yGap * 3 + 13;
    };
    PetInfoPanel.prototype.update = function () {
        if (MainScene.battle.pet) {
            this._name.setText(MainScene.battle.pet.realName);
            this.updateLv();
            this.updateHp();
            this.updateExp();
        }
        else {
            this._name.setText("");
            this.lv.setText("");
            this.hp.Value = 0;
            this.hp.Max = 1;
            this.exp.Value = 0;
            this.exp.Max = 1;
        }
    };
    PetInfoPanel.prototype.updateHp = function () {
        if (MainScene.battle.pet) {
            this.hp.Value = MainScene.battle.petHp;
            this.hp.Max = MainScene.battle.pet.hp;
        }
    };
    PetInfoPanel.prototype.updateExp = function () {
        if (MainScene.battle.pet) {
            this.exp.Value = MainScene.battle.pet.exp;
            this.exp.Max = MainScene.battle.pet.getLevelExp();
        }
    };
    PetInfoPanel.prototype.updateLv = function () {
        if (MainScene.battle.pet) {
            this.lv.setText(MainScene.battle.pet.level + "");
        }
    };
    return PetInfoPanel;
}(BasicCell));
__reflect(PetInfoPanel.prototype, "PetInfoPanel");
