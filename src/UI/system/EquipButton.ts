class EquipButton extends ButtonCell {

	private FIX: number = 20;
	public constructor(param1: string) {
		super();
		this.touchEnabled = true;
		var _loc2_: egret.Bitmap = new egret.Bitmap(RES.getRes("doubleCircle"));
		_loc2_.width = this.FIX;
		_loc2_.height = this.FIX;
		// _loc2_["transform"].colorTransform = new flash.ColorTransform(1,1,1,1,255,255,255,0);
		this.before.addChild(_loc2_);
		var _loc3_: egret.Bitmap = new egret.Bitmap(RES.getRes("mc_" + param1));
		this.before.addChild(_loc3_);
		this.setMcPosition(_loc3_);
		var _loc4_: egret.Bitmap = new egret.Bitmap(RES.getRes("doubleCircle"));
		_loc4_.width = this.FIX;
		_loc4_.height = this.FIX;
		this.after.addChild(_loc4_);
		var _loc5_: egret.Bitmap = new egret.Bitmap(RES.getRes("mc_" + param1));
		// _loc5_["transform"].colorTransform = new flash.ColorTransform(1,1,1,1,255,255,255,0);
		this.after.addChild(_loc5_);
		this.setMcPosition(_loc5_);
	}

	private setMcPosition(param1: egret.DisplayObject) {
		var _loc2_: number = 0;
		if (param1.width > param1.height) {
			_loc2_ = 10 / param1.width;
		}
		else {
			_loc2_ = 10 / param1.height;
		}
		param1.scaleX = _loc2_;
		param1.scaleY = _loc2_;
		param1.x = this.FIX / 2 - param1.width / 2;
		param1.y = this.FIX / 2 - param1.height / 2;
	}

}
