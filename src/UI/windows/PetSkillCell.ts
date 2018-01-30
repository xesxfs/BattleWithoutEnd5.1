class PetSkillCell extends ButtonCell {
	public petSkill: iData.iPet.iPetSkill.PetSkill;
	private SIZE: number = 30;
	public constructor(petSkill: iData.iPet.iPetSkill.PetSkill) {
		super();
		this.touchEnabled = true;

		this.petSkill = petSkill;
		var bgsp: egret.Sprite = new egret.Sprite();
		bgsp.graphics.beginFill(0, 0);
		bgsp.graphics.drawCircle(15, 15, 30);
		bgsp.graphics.endFill();
		this.addChild(bgsp);
		// var _loc3_: egret.Sprite = <any>new (<any>flash.getDefinitionByName("pSkill_" + tool.MyMath.StringFormChange(this.petSkill.skillData.name.toLowerCase(), " ", "_")))();
		if (this.petSkill.level) {
			// _loc3_.filters = [new egret.GlowFilter(16711680, 0.66, 5, 5)];
		}
		// this.before.addChild(_loc3_);
		// _loc3_.width = this.SIZE;
		// _loc3_.height = this.SIZE;
		// _loc3_ = new (<any>flash.getDefinitionByName("pSkill_" + tool.MyMath.StringFormChange(this.petSkill.skillData.name.toLowerCase(), " ", "_")))();
		// this.after["transform"].colorTransform = new flash.ColorTransform(0, 0, 0, 1, 227, 178, 10, 5);
		// this.after.addChild(_loc3_);
		// _loc3_.width = this.SIZE;
		// _loc3_.height = this.SIZE;
	}


	// public onMouseMove(param1: flash.MouseEvent) {
	// 	var _loc2_: egret.Point = flash.localToGlobal(this, new egret.Point(this["mouseX"] + 15, this["mouseY"] + 15));
	// 	this.infoWindow.x = _loc2_.x;
	// 	this.infoWindow.y = _loc2_.y;
	// 	if (_loc2_.x + 135 > iGlobal.Global.stage.stageWidth) {
	// 		this.infoWindow.x = this.infoWindow.x - 135;
	// 	}
	// 	if (_loc2_.y + this.infoWindow.height > iGlobal.Global.stage.stageHeight) {
	// 		this.infoWindow.y = this.infoWindow.y - (this.infoWindow.height - 15);
	// 	}
	// }
}