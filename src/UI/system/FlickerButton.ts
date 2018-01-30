class FlickerButton extends ButtonCell {
	private bg: BasicCell;
	private count: number = 0;
	private flag: boolean = true;
	private flickerTime: number = 30;

	public constructor(text: string, width: number, height: number, fontSize: number = 32) {
		super();
		this.touchEnabled = true;
		this.bg = new BasicCell(width, height);
		this.addChild(this.bg);
		// this.bg.filters = [ColorTransform.colorTransform]
		var beforeText = iGlobal.Global.getTextField(fontSize);
		beforeText.text = text;
		this.before.addChild(beforeText);
		this.before.x = width / 2 - beforeText.textWidth / 2;
		this.before.y = height / 2 - beforeText.textHeight / 2;

		var afterText = iGlobal.Global.getTextField(fontSize, 0xFFFFFF);
		afterText.width = width;
		afterText.text = text;
		this.after.addChild(afterText);
		this.after.x = width / 2 - afterText.textWidth / 2;
		this.after.y = height / 2 - afterText.textHeight / 2;
		this.addEventListener(egret.Event.ENTER_FRAME, this.overAnimation, this);
	}

	private overAnimation(e: egret.Event) {	
		this.before.visible=false;
		this.after.visible=true;			
		if (this.count <= this.flickerTime) {
			this.filters = [new egret.GlowFilter(5066061, 0.66, 13 + this.count, 13 + this.count)];
			this.bg.filters =[  ColorTransform.transform(1 - 0.1 / this.flickerTime * this.count, 1 - 0.3 / this.flickerTime * this.count, 1 - 1 / this.flickerTime * this.count, 0.01 + 1 / this.flickerTime * this.count)];
		}
		if (this.count > this.flickerTime) {
			this.flag = false;
		}
		else if (this.count <= 0) {
			this.flag = true;
		}
		if (this.flag) {
			this.count++;
		}
		else {
			this.count--;
		}
	}

	public setBefore() {
		// super.setBefore();
		// this.removeEventListener(egret.Event.ENTER_FRAME, this.overAnimation, this);
		// this.count = (0);
		// this.bg.filters = [];
		// this.filters = [];
		// if (this.parent) {
		// 	this.parent.addChildAt(this, this.parent.numChildren - 1);
		// }
	}

	public setDown() {
		super.setDown();
		this.removeEventListener(egret.Event.ENTER_FRAME, this.overAnimation, this);
	}

}