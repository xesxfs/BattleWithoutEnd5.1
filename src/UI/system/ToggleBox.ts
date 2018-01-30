class ToggleBox extends egret.Sprite {
	private box: egret.Sprite;
	private size: number = 0;
	private text: egret.TextField;
	private isDown: boolean = false;
	public downFunction: Function;
	public upFunction: Function;
	public constructor(text: string, size: number, bDown: boolean = true) {
		super();
		this.size = (size);
		this.text = iGlobal.Global.getTextField(size);
		this.addChild(this.text);
		this.setText(text);
		this.box = new egret.Sprite();
		this.box.touchEnabled = true;
		this.addChild(this.box);
		if (bDown) {
			this.setDown();
		}
		else {
			this.setUp();
		}
		this.box.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onMouseDown, this);
	}

	public setText(html: string) {
		this.text.width = 300;
		this.text.textFlow = iGlobal.Global.htmlParse.parser(html);
		this.text.width = this.text.textWidth + 6;
		this.text.x = this.size + 2;
	}


	public setDown() {
		this.isDown = true;
		this.box.graphics.clear();
		this.box.graphics.lineStyle(2, 7631988);
		this.box.graphics.beginFill(14922250);
		this.box.graphics.drawRect(0, 0, this.size, this.size);
		this.box.graphics.endFill();
		if (this.downFunction) {
			this.downFunction();
		}
	}

	public setUp() {
		this.isDown = false;
		this.box.graphics.clear();
		this.box.graphics.beginFill(16777215, 0);
		this.box.graphics.lineStyle(2, 7631988);
		this.box.graphics.drawRect(0, 0, this.size, this.size);
		this.box.graphics.endFill();
		if (this.upFunction) {
			this.upFunction();
		}
	}

	private onMouseDown(e: egret.Event) {
		if (this.isDown) {
			this.setUp();
		}
		else {
			this.setDown();
		}
	}

}