class StringButton extends ButtonCell {
	private bg: egret.Sprite;
	private text: string;
	private color: number = 0;

	public constructor(text: string, color: number) {
		super();
		this.touchEnabled = true;
		this.bg = new BasicCell(66, 25);
		this.addChildAt(this.bg, 0);
		this.text = text;
		this.color = (color);
		this.init();
	}

	private init() {
		var text: egret.TextField = iGlobal.Global.getTextField(18);
		text.textFlow = iGlobal.Global.htmlParse.parse("<p align=\'center\'>" + this.text + "</p>");
		text.width = 60;
		this.before.addChild(text);
		text.x = 2;
		text.y = 2;
		text.textColor = this.color;
		var atext: egret.TextField = iGlobal.Global.getTextField(18);
		atext.textFlow = iGlobal.Global.htmlParse.parse("<p align=\'center\'>" + this.text + "</p>");
		atext.width = 60;
		this.after.addChild(atext);
		atext.x = 2;
		atext.y = 2;
		atext.textColor = (this.color);
	}

	public setBefore() {
		super.setBefore();
		// this.filters = [];
	}

	public setDown() {
		super.setDown();
		// this.filters = [new flash.GlowFilter(5066061, 0.66, 13, 13)];
		if (this.parent) {
			this.parent.addChildAt(this, this.parent.numChildren - 1);
		}
	}

}