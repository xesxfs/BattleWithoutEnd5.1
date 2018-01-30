class RaceButton extends ButtonCell {
	private PX: number = 50;
	private bg: egret.Sprite;
	private count: number = 0;
	public race: iData.Race;
	private text: egret.TextField;
	private transform: egret.ColorMatrixFilter;
	public constructor(b: string, a: string, race: iData.Race) {
		super();
		this.touchEnabled = true;
		let bsp = RES.getRes(b);
		bsp && (bsp = new egret.Bitmap(bsp)) && this.before.addChild(bsp);
		let asp = RES.getRes(a);
		asp && (asp = new egret.Bitmap(asp)) && this.after.addChild(asp);
		this.bg = new egret.Sprite();
		// this.addChild(this.bg);
		var colorMatrix = [
			1, 0, 0, 0, 0,
			0, 1, 0, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 0, 1, 0
		];
		this.transform = new egret.ColorMatrixFilter(colorMatrix);
		this.bg.filters = [this.transform];
		this.race = race;
		this.before.width = this.PX;
		this.before.height = this.PX;
		this.after.height = this.PX;
		this.after.width = this.PX;
		this.setText();
	}

	private setText() {
		this.text = iGlobal.Global.getTextField(32, 16777215);
		this.text.width = 200;
		this.text.text = this.race.name.toUpperCase();
		this.addChild(this.text);
		this.text.x = 5;
		this.text.y = 100;
		this.text.visible = false;
	}

	public setAfter() {
		super.setAfter();
		this.addEventListener(egret.Event.ENTER_FRAME, this.overAnimation, this);
	}

	private overAnimation(param1: egret.Event) {
		if (this.count <= 10) {
			this.bg.graphics.clear();
			this.bg.graphics.beginFill(16777215, 0.95);
			this.bg.graphics.drawRect(0 - this.count, 0 - this.count, this.PX + this.count * 2, this.PX + this.count * 2);
			this.bg.graphics.endFill();
			// this.bg["transform"].colorTransform = new flash.ColorTransform(1 - 0.01 * this.count, 1 - 0.03 * this.count, 1 - 0.1 * this.count, 0.1 * this.count);
			let colorMatrix = this.transform.matrix;
			this.setRGBAMatrix(colorMatrix, 1 - 0.01 * this.count, 1 - 0.03 * this.count, 1 - 0.1 * this.count, 0.1 * this.count);
			this.transform.matrix = colorMatrix;
			this.bg.filters = [new egret.GlowFilter(5066061, 0.66, 13, 13), this.transform];
		}
		if (this.count > 10) {
			this.bg.graphics.clear();
			this.bg.graphics.beginFill(16777215, 0.95);
			this.bg.graphics.drawRect(-10, -10, this.PX + 20 + 20 * (this.count - 10), this.PX + 20); this.bg.graphics.endFill();

			// this.bg["transform"].colorTransform = new flash.ColorTransform(0.9, 0.7, 0, 0.95);
			let colorMatrix = this.transform.matrix;
			this.setRGBAMatrix(colorMatrix, 0.9, 0.7, 0, 0.95);
			this.transform.matrix = colorMatrix;
			this.bg.filters = [new egret.GlowFilter(5066061, 0.66, 13 + (this.count - 10) * 1, 13 + (this.count - 10) * 1), this.transform];
			this.text.visible = true;
			this.text.alpha = (this.count - 10) * 0.1;
			this.text.filters = [new egret.GlowFilter(16777215, 0.66, 13 + (this.count - 10) * 1, 13 + (this.count - 10) * 1)];
		}
		this.count++;
		if (this.count > 20) {
			this.removeEventListener(egret.Event.ENTER_FRAME, this.overAnimation, this);
		}
	}

	private setRGBAMatrix(colorMatrix: Array<number>, r, g, b, a) {
		colorMatrix[0] = r;
		colorMatrix[6] = g;
		colorMatrix[12] = b;
		colorMatrix[18] = a;
	}

	public setBefore() {
		super.setBefore();
		// this.bg.graphics.clear();
		// this.removeEventListener(egret.Event.ENTER_FRAME, this.overAnimation, this);
		// this.count = (0);
		// this.filters = [];
		// this.text.visible = false;
	}

	public setDown() {
		super.setDown();
		this.filters = [new egret.GlowFilter(10027008, 0.66, 23, 23)];
	}
}