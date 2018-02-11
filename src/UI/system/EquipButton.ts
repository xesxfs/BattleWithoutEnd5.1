class EquipButton extends ButtonCell {

	private FIX: number = 40;
	public constructor(param1: string) {
		super();
		this.touchEnabled = true;
		var circle1: egret.Bitmap = new egret.Bitmap(RES.getRes("doubleCircle"));
		circle1.width = this.FIX;
		circle1.height = this.FIX;
		this.before.addChild(circle1);

		var icon1: egret.Bitmap = new egret.Bitmap(RES.getRes("mc_" + param1));
		this.before.addChild(icon1);
		// this.setMcPosition(_loc3_);
		this.setCenter(icon1);

		var circle2: egret.Bitmap = new egret.Bitmap(RES.getRes("doubleCircle"));
		circle2.width = this.FIX;
		circle2.height = this.FIX;
		this.after.addChild(circle2);
		var icon2: egret.Bitmap = new egret.Bitmap(RES.getRes("mc_" + param1));
		this.after.addChild(icon2);
		this.setCenter(icon2);
		// this.setMcPosition(_loc5_);
	}

	private setCenter(dis: egret.DisplayObject) {
		dis.y = (this.height - dis.height) >> 1;
		dis.x = (this.width - dis.width) >> 1;
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
