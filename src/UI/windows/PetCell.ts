class PetCell extends AdvancedCell {

	public pet: iData.iPet.Pet;
	protected be_mc: egret.Sprite;
	protected af_mc: egret.Sprite;

	public constructor(param1: iData.iPet.Pet) {
		super(200, 50);
		this.pet = param1;
		this.init();
	}

	private init() {
		this.be_mc = new egret.Sprite();
		this.be_mc.addChild(new egret.Bitmap(RES.getRes("pet_" + this.pet.mc_name)));
		this.before.addChild(this.be_mc);
		this.be_mc.width = 30;
		this.be_mc.height = 30;
		this.be_mc.x = 10;
		this.be_mc.y = 10;
		this.af_mc = new egret.Sprite();
		this.af_mc.addChild(new egret.Bitmap(RES.getRes("pet_" + this.pet.mc_name)));
		this.after.addChild(this.af_mc);
		this.af_mc.width = 30;
		this.af_mc.height = 30;
		this.af_mc.x = 10;
		this.af_mc.y = 10;
		// this.af_mc["transform"].colorTransform = new flash.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);
		this.text = iGlobal.Global.getTextField(20);
		this.text.width = 120;
		this.text.textFlow = iGlobal.Global.htmlParse.parser(this.pet.realName);
		if (this.pet.level) {
			this.text.textFlow = iGlobal.Global.htmlParse.parser(this.text.textFlow + (" Lv." + this.pet.level));
		}
		this.addChild(this.text);
		this.text.x = 50;
		this.text.y = 10;
		this.setEquipButton();
		this.setMoneyButton();
		// this.infoWindow = new PetInfoWindow(this.pet);
	}

	protected setEquipButton() {
		var _self__: any = this;
		var equipDown: Function = null;
		equipDown = function () {
			iGlobal.Player.removePet(_self__.pet);
			iGlobal.Player.setPet(_self__.pet);
			Emitter.dispatchEvent(Tool.MyEvent.Update);
		};
		var equipButton: EquipButton = new EquipButton("equip");
		this.addChild(equipButton);
		equipButton.x = 150;
		equipButton.y = 15;
		equipButton.downFunction = equipDown;
	}

	protected setMoneyButton() {
		var _self__: any = this;
		var moneyDown: Function = null;
		moneyDown = function () {
			iGlobal.Player.removePet(_self__.pet);
			Emitter.dispatchEvent(Tool.MyEvent.Update);
		};
		var moneyButton: EquipButton = new EquipButton("money");
		this.addChild(moneyButton);
		moneyButton.x = 172;
		moneyButton.y = 15;
		moneyButton.downFunction = moneyDown;
	}

	public update() {
		this.infoWindow.draw(0, 0);
		this.text.textFlow = iGlobal.Global.htmlParse.parser(this.pet.realName);
		if (this.pet.level) {
			this.text.textFlow = iGlobal.Global.htmlParse.parser(this.text.textFlow + (" Lv." + this.pet.level));
		}
	}

}