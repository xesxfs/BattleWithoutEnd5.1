class PetCell extends AdvancedCell {

	public pet: iData.iPet.Pet;
	protected be_mc: egret.Sprite;
	protected af_mc: egret.Sprite;
	private Fix: number = 60;

	public constructor(pet: iData.iPet.Pet) {
		super(385, 80);
		this.pet = pet;
		this.init();
	}

	private init() {
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
	}

	protected setEquipButton() {
		var _self__ = this;
		var equipDown: Function = null;
		equipDown = function () {
			iGlobal.Player.removePet(_self__.pet);
			iGlobal.Player.setPet(_self__.pet);
			Emitter.dispatchEvent(Tool.MyEvent.Update);
		};
		var equipButton: EquipButton = new EquipButton("equip");
		this.addChild(equipButton);
		equipButton.x = 260;
		equipButton.y =  (this.height - equipButton.height)>>1;
		equipButton.downFunction = equipDown;
	}

	protected setMoneyButton() {
		var _self__ = this;
		var moneyDown: Function = null;
		moneyDown = function () {
			iGlobal.Player.removePet(_self__.pet);
			Emitter.dispatchEvent(Tool.MyEvent.Update);
		};
		var moneyButton: EquipButton = new EquipButton("money");
		this.addChild(moneyButton);
		moneyButton.x = 320;
		moneyButton.y =  (this.height - moneyButton.height)>>1;
		moneyButton.downFunction = moneyDown;
	}

	public update() {
		this.infoWindow.draw(0, 0);
		this.text.textFlow = iGlobal.Global.htmlParse.parser(this.pet.realName);
		if (this.pet.level) {
			this.text.textFlow = iGlobal.Global.htmlParse.parser(this.text.text + (" Lv." + this.pet.level));
		}
	}

}