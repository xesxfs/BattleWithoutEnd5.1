class StringInfoButton extends StringInfoCell {
	public downFunction:Function;
	public constructor(text: string, info: string) {
		super(text, info);
	}

	public onMouseOver(e: egret.TouchEvent) {
		super.onMouseOver(e);
		this.graphics.clear();
		this.graphics.beginFill(14922250, 0.95);
		this.graphics.drawRoundRect(0, 0, this.textField.textWidth + 6, this.textField.textHeight + 2, 3);
		this.graphics.endFill();
		this.textField.textFlow = iGlobal.Global.htmlParse.parse("<font color=\'#ffffff\'>" + this.textField.text + "</font>");
	}

	public onMouseOut(e: egret.TouchEvent) {
		super.onMouseOut(e);
		this.graphics.clear();
		this.graphics.beginFill(16777215, 0.95);
		this.graphics.drawRoundRect(0, 0, this.textField.textWidth + 6, this.textField.textHeight + 2, 3);
		this.graphics.endFill();
			this.textField.textFlow = iGlobal.Global.htmlParse.parse("<font color=\'#ffffff\'>" + this.textField.text + "</font>");
	}

	public onMouseDown(e: egret.TouchEvent) {
		if (this.downFunction) {
			this.downFunction();
		}
	}
}