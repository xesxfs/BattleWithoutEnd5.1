class PetIconCell extends egret.Sprite {
	private SIZE: number = 80;

	public constructor(pet: iData.iPet.Pet = null) {
		super();
		var _loc2_: egret.Bitmap = null;
		var _loc3_: egret.Sprite = null;
		if (pet == null) {
			_loc2_ = new egret.Bitmap(RES.getRes("mc_mode_png"));
		}
		else {
			// _loc2_ = new (<any>flash.getDefinitionByName("pet_" + param1.mc_name))();
		}
		this.addChild(_loc2_);
		_loc2_.width = this.SIZE;
		_loc2_.height = this.SIZE;
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