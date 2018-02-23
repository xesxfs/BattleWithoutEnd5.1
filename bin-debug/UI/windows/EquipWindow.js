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
var EquipWindow = (function (_super) {
    __extends(EquipWindow, _super);
    function EquipWindow() {
        var _this = _super.call(this) || this;
        _this.SC = 0.8;
        _this.SY = 30;
        // var bgs: egret.Sprite = new BasicCell(300, 700);
        // this.addChild(bgs);
        var p1 = new egret.Bitmap(RES.getRes("people_use"));
        _this.addChild(p1);
        p1.scaleX = _this.SC;
        p1.scaleY = _this.SC;
        p1.y = _this.SY;
        _this.bg2 = new egret.Sprite();
        _this.addChild(_this.bg2);
        // this.bg2.addChild(new egret.Bitmap(RES.getRes("people_use2")));
        _this.bg2.scaleX = _this.SC;
        _this.bg2.scaleY = _this.SC;
        _this.bg2.y = _this.SY;
        _this.spList = new Array();
        _this.update();
        return _this;
    }
    EquipWindow.prototype.update = function () {
        var _self__ = this;
        var i = (0);
        i = (this.spList.length);
        while (i > 0) {
            this.bg2.removeChild(this.spList.pop());
            i--;
        }
        var list = ["head", "feet", "body", "necklace", "ring", "leftHand", "rightHand"];
        i = (0);
        while (i < list.length) {
            var equipDown = function () {
                this.setBefore();
                if (this.equip) {
                    if (iGlobal.Player.addItem(this.equip)) {
                        iGlobal.Player[this.position] = null;
                        _self__.update();
                        iGlobal.Player.updateAllInfo();
                        iGlobal.Player.updateBattleSkillWindow();
                    }
                }
            };
            this[list[i]] = new EquipCell(iGlobal.Player[list[i]], list[i]);
            this.bg2.addChild(this[list[i]]);
            this.spList.push(this[list[i]]);
            (this[list[i]]).downFunction = equipDown;
            i++;
        }
        this.pet = new PetIconCell(iGlobal.Player.pet);
        this.bg2.addChild(this.pet);
        this.spList.push(this.pet);
        this.pet.x = 60;
        this.pet.y = 600;
        this.head.x = 205;
        this.head.y = -70;
        this.feet.x = 205;
        this.feet.y = 455;
        this.body.x = 385;
        this.body.y = 280;
        this.necklace.x = 375;
        this.necklace.y = 80;
        this.ring.x = 10;
        this.ring.y = 100;
        this.leftHand.x = 5;
        this.leftHand.y = 210;
        this.rightHand.x = 410;
        this.rightHand.y = 200;
        this.setPetInfo();
    };
    EquipWindow.prototype.setPetInfo = function () {
        if (this.petSp) {
            if (this.contains(this.petSp)) {
                this.removeChild(this.petSp);
            }
        }
        if (this.petSkillSp) {
            if (this.contains(this.petSkillSp)) {
                this.removeChild(this.petSkillSp);
            }
        }
        var petX = (20);
        var petY = (560);
        var xGap = (50);
        var xGap2 = (170);
        var yGap = (30);
        this.petSp = new egret.Sprite();
        this.petSp.x = petX;
        this.petSp.y = petY;
        this.addChild(this.petSp);
        var cellList = new Array();
        var petCell = new StringCell("宠物", 100, 22);
        cellList.push(petCell);
        this._name = new StringCell("Fox", 150, 22);
        cellList.push(this._name);
        cellList.push(new StringCell("Hp", 100, 22));
        cellList.push(this.hp = new StringCell("100", 100, 22));
        cellList.push(new StringCell("Mp", 100, 22));
        cellList.push(this.mp = new StringCell("100", 100, 22));
        cellList.push(new StringCell("攻击", 100, 22));
        cellList.push(this.attack = new StringCell("20~30", 100, 22));
        cellList.push(new StringCell("平衡", 100, 22));
        cellList.push(this.balance = new StringCell("50", 100, 22));
        cellList.push(new StringCell("暴击", 100, 22));
        cellList.push(this.cri = new StringCell("50", 100, 22));
        cellList.push(new StringCell("暴倍", 100, 22));
        cellList.push(this.cri_mul = new StringCell("200%", 100, 22));
        cellList.push(new StringCell("防御", 100, 22));
        cellList.push(this.def = new StringCell("10", 100, 22));
        cellList.push(new StringCell("护甲", 100, 22));
        cellList.push(this.pro = new StringCell("10", 100, 22));
        cellList.push(new StringCell("魔攻", 100, 22));
        cellList.push(this.magatt = new StringCell("100%", 100, 22));
        var length = (cellList.length);
        var i = (0);
        while (i < length) {
            this.petSp.addChild(cellList[i]);
            cellList[i].x = xGap * (i % 2) + xGap2 * (i / 10 >> 0);
            cellList[i].y = yGap + yGap * (i % 10 / 2 >> 0);
            i++;
        }
        this.petSkillSp = new egret.Sprite();
        this.petSkillSp.x = 20;
        this.petSkillSp.y = 760;
        this.addChild(this.petSkillSp);
        this.updatePetInfo();
    };
    EquipWindow.prototype.updatePetInfo = function () {
        var i = (0);
        var pCell = null;
        if (!iGlobal.Player.pet) {
            this.petSp.visible = false;
            this.petSkillSp.visible = false;
            return;
        }
        this.petSp.visible = true;
        this.petSkillSp.visible = true;
        this._name.setText(iGlobal.Player.pet.realName);
        this.hp.setText(~~iGlobal.Player.pet.hp + "");
        this.mp.setText(~~iGlobal.Player.pet.mp + "");
        this.attack.setText(~~iGlobal.Player.pet.attmin + "~" + ~~iGlobal.Player.pet.attmax + "");
        this.balance.setText(~~iGlobal.Player.pet.balance + "");
        this.cri.setText(~~iGlobal.Player.pet.cri + "");
        this.def.setText(~~iGlobal.Player.pet.defence + "");
        this.pro.setText(~~iGlobal.Player.pet.pro + "");
        this.magatt.setText(~~iGlobal.Player.pet.magicatt + "%");
        this.cri_mul.setText(~~iGlobal.Player.pet.crimul + "%");
        i = (this.petSkillSp.numChildren - 1);
        while (i >= 0) {
            this.petSkillSp.removeChildAt(i);
            i--;
        }
        i = (0);
        while (i < iGlobal.Player.pet.skillList.length) {
            pCell = new PetSkillCell(iGlobal.Player.pet.skillList[i]);
            this.petSkillSp.addChild(pCell);
            pCell.x = i * 60 + 2 + i * 20;
            i++;
        }
    };
    return EquipWindow;
}(IWindow));
__reflect(EquipWindow.prototype, "EquipWindow");
