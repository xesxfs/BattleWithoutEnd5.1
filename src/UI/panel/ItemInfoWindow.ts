class ItemInfoWindow extends InfoWindow {
	private text: egret.TextField;
	public constructor(text: string) {
		super(0, 0);
		this.text = iGlobal.Global.getTextField(24);
		this.text.multiline = true;
		this.text.width = 130;
		this.addChild(this.text);
		this.text.textFlow = iGlobal.Global.htmlParse.parser(text);

	}

	public draw(width: number, height: number) {
		this.graphics.clear();
		// super.draw(130, this.text.textHeight + 5);
	}

	public set TEXT(txt: string) {
		this.text.textFlow = iGlobal.Global.htmlParse.parse(txt);
		this.draw(0, 0);
	}


}