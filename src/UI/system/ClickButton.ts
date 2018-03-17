class ClickButton extends ButtonCell {
	private FIX: number = 20;
	public constructor(icon: string, fix: number) {
		super();
		this.touchEnabled = true;
		fix = (fix);
		this.FIX = (fix);
		var bcircle = new egret.Bitmap(RES.getRes("doubleCircle"));
		bcircle.width = this.FIX;
		bcircle.height = this.FIX;
		// _loc3_["transform"].colorTransform = new egret.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);
		this.before.addChild(bcircle);
		var bf = new egret.Bitmap(RES.getRes(icon));
		this.before.addChild(bf);
		this.setMcPosition(bf);
		var acircle = new egret.Bitmap(RES.getRes("doubleCircle"));;
		acircle.width = this.FIX;
		acircle.height = this.FIX;
		this.after.addChild(acircle);
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
	private setMcPosition(dis: egret.DisplayObject) {
		var scale: number = 0;
		if (dis.width > dis.height) {
			scale = this.FIX / 2 / dis.width;
		}
		else {
			scale = this.FIX / 2 / dis.height;
		}
		dis.scaleX = scale;
		dis.scaleY = scale;
		dis.x = (this.FIX - dis.width * scale) >> 1;
		dis.y = (this.FIX - dis.height * scale) >> 1;
	}

	public setDown() {
		super.setDown();
		this.setBefore();
	}

}