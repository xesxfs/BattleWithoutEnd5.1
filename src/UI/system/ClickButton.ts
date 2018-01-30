class ClickButton extends ButtonCell {
	private FIX: number = 20;
	public constructor(icon: string, fix: number) {
		super();
		this.touchEnabled = true;
		fix = (fix);
		this.FIX = (fix);
		var _loc3_ = new egret.Bitmap(RES.getRes("doubleCircle"));
		_loc3_.width = this.FIX;
		_loc3_.height = this.FIX;
		// _loc3_["transform"].colorTransform = new egret.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);
		this.before.addChild(_loc3_);
		var bf = new egret.Bitmap(RES.getRes(icon));
		// this.before.addChild(bf);
		// this.setMcPosition(bf);
		var _loc5_ = new egret.Bitmap(RES.getRes("doubleCircle"));;
		_loc5_.width = this.FIX;
		_loc5_.height = this.FIX;
		this.after.addChild(_loc5_);
		var af = new egret.Bitmap(RES.getRes(icon));
		// _loc6_["transform"].colorTransform = new egret.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);	
		egret.ColorMatrixFilter
		// this.after.addChild(af);
		// this.setMcPosition(af);
		var colorMatrix = [
			0.3, 0.6, 0, 0, 0,
			0.3, 0.6, 0, 0, 0,
			0.3, 0.6, 0, 0, 0,
			0, 0, 0, 1, 0
		];
		var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
		// this.after.filters = [colorFlilter];


	}
	private setMcPosition(param1: egret.DisplayObject) {
		var _loc2_: number = 0;
		if (param1.width > param1.height) {
			_loc2_ = this.FIX / 2 / param1.width;
		}
		else {
			_loc2_ = this.FIX / 2 / param1.height;
		}
		param1.scaleX = _loc2_;
		param1.scaleY = _loc2_;
		param1.x = this.FIX / 2 - param1.width / 2;
		param1.y = this.FIX / 2 - param1.height / 2;
	}

	public setDown() {
		super.setDown();
		this.setBefore();
	}

}