class PetIconCell extends egret.Sprite {
	private SIZE: number = 80;

	public constructor(pet: iData.iPet.Pet = null) {
		super();
		this.touchEnabled = true;
		var petIcon: egret.Bitmap = null;
		// var _loc3_: egret.Sprite = null;
		if (pet == null) {
			petIcon = new egret.Bitmap(RES.getRes("mc_mode"));
		}
		else {
			petIcon = new egret.Bitmap(RES.getRes("pet_" + pet.mc_name));
		}
		this.addChild(petIcon);
		petIcon.width = this.SIZE;
		petIcon.height = this.SIZE;
		if (pet == null) {
			// _loc3_ = new mc_mode();
		}
		else {
			// _loc3_ = new (<any>flash.getDefinitionByName("pet_" + param1.mc_name))();
		}
		// this.after.addChild(_loc3_);
		// _loc3_.width = this.SIZE;
		// _loc3_.height = this.SIZE;
	}
}