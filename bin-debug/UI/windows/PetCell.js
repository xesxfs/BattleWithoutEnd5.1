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
var PetCell = (function (_super) {
    __extends(PetCell, _super);
    function PetCell(pet) {
        var _this = _super.call(this, 385, 80) || this;
        _this.Fix = 60;
        _this.pet = pet;
        _this.init();
        return _this;
    }
    PetCell.prototype.init = function () {
        this.be_mc = new egret.Sprite();
        var icon1 = new egret.Bitmap(RES.getRes("pet_" + this.pet.mc_name));
        this.be_mc.addChild(icon1);
        this.before.addChild(this.be_mc);
        icon1.width = this.Fix;
        icon1.height = this.Fix;
        this.be_mc.x = 10;
        this.be_mc.y = (this.height - this.be_mc.height) >> 1;
        this.af_mc = new egret.Sprite();
        var icon2 = new egret.Bitmap(RES.getRes("pet_" + this.pet.mc_name));
        this.af_mc.addChild(icon2);
        this.after.addChild(this.af_mc);
        icon2.width = this.Fix;
        icon2.height = this.Fix;
        this.af_mc.x = 10;
        this.af_mc.y = (this.height - this.be_mc.height) >> 1;
        // this.af_mc["transform"].colorTransform = new flash.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);
        this.text = iGlobal.Global.getTextField(28);
        this.text.textFlow = iGlobal.Global.htmlParse.parser(this.pet.realName);
        if (this.pet.level) {
            this.text.textFlow = iGlobal.Global.htmlParse.parser(this.text.text + (" Lv." + this.pet.level));
        }
        this.addChild(this.text);
        this.text.x = this.be_mc.x + this.be_mc.width + 10;
        this.text.y = (this.height - this.text.height) >> 1;
        this.setEquipButton();
        this.setMoneyButton();
        // this.infoWindow = new PetInfoWindow(this.pet);
    };
    PetCell.prototype.setEquipButton = function () {
        var _self__ = this;
        var equipDown = null;
        equipDown = function () {
            iGlobal.Player.removePet(_self__.pet);
            iGlobal.Player.setPet(_self__.pet);
            Emitter.dispatchEvent(Tool.MyEvent.Update);
        };
        var equipButton = new EquipButton("equip");
        this.addChild(equipButton);
        equipButton.x = 260;
        equipButton.y = (this.height - equipButton.height) >> 1;
        equipButton.downFunction = equipDown;
    };
    PetCell.prototype.setMoneyButton = function () {
        var _self__ = this;
        var moneyDown = null;
        moneyDown = function () {
            iGlobal.Player.removePet(_self__.pet);
            Emitter.dispatchEvent(Tool.MyEvent.Update);
        };
        var moneyButton = new EquipButton("money");
        this.addChild(moneyButton);
        moneyButton.x = 320;
        moneyButton.y = (this.height - moneyButton.height) >> 1;
        moneyButton.downFunction = moneyDown;
    };
    PetCell.prototype.update = function () {
        this.infoWindow.draw(0, 0);
        this.text.textFlow = iGlobal.Global.htmlParse.parser(this.pet.realName);
        if (this.pet.level) {
            this.text.textFlow = iGlobal.Global.htmlParse.parser(this.text.text + (" Lv." + this.pet.level));
        }
    };
    return PetCell;
}(AdvancedCell));
__reflect(PetCell.prototype, "PetCell");
