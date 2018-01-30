class StringInfoWindow extends InfoWindow {
	private textField: egret.TextField;
	public constructor() {
		super(0, 0);
		this.textField = iGlobal.Global.getTextField(20);
		this.textField.textAlign = egret.HorizontalAlign.LEFT;
		this.textField.multiline = true;
		this.addChild(this.textField);
		this.touchChildren = false;
		this.touchEnabled = false;
	}
	
	public setText(text: string) {
		var width: number = 0;
		var height: number = 0;
		this.graphics.clear();
		this.textField.text = text;
		this.textField.width = 300;
		var txtWidth: number = (this.textField.textWidth);
		if (txtWidth < 200) {
			width = (txtWidth + 4);
			height = (this.textField.textHeight + 2);
			this.textField.width = width + 2;
		}
		else {
			this.textField.width = 200;
			width = (204);
			height = (this.textField.height + 2);
		}
		super.draw(width, height);
	}
}