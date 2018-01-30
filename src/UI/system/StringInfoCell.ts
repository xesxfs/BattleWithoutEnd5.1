class StringInfoCell extends egret.Sprite {
	public infoWindow: StringInfoWindow;
	public textField: egret.TextField;
	public info: string;
	private w: number = 0;
	private size: number = 16;

	public constructor(text: string, info: string, w: number = 100) {
		super();
		this.infoWindow = iGlobal.Global.stringInfoWindow;
		this.textField = iGlobal.Global.getTextField(16);
		this.info = info;
		this.w = w;
		this.addChild(this.textField);
		this.setText(text);
		this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMouseMove, this);
		this.addEventListener(egret.TouchEvent.TOUCH_END, this.onMouseOut, this);
		this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onMouseOut, this);
		this.touchChildren = false;
	}

	public onMouseMove(e: egret.TouchEvent) {
		var p: egret.Point = this.localToGlobal(e.localX + 15, e.localY + 15);
		this.infoWindow.x = p.x;
		this.infoWindow.y = p.y;
		if (this.infoWindow.x + this.infoWindow.width > iGlobal.Global.stage.stageWidth) {
			this.infoWindow.x = this.infoWindow.x - this.infoWindow.width - 30;
		}
	}

	public onMouseOver(e: egret.TouchEvent) {
		this.filters = [new egret.GlowFilter(5066061, 0.66, 13, 13)];
		if (this.parent) {
			this.parent.addChildAt(this, this.parent.numChildren - 1);
		}
		iGlobal.Global.setStringInfoWindow(this.info);
	}

	public onMouseOut(e: egret.TouchEvent) {
		this.filters = [];
		iGlobal.Global.hideInfoWindow();
	}

	public setInfo(info: string) {
		this.info = info;
	}

	public setText(text: string) {
		var i: number = 0;
		this.textField.width = this.w + 100;
		this.textField.text = text;
		this.textField.width = this.textField.textWidth + 6;
		if (this.textField.width > this.w) {
			this.removeChild(this.textField);
			i = 1;
			while (i < this.size) {
				this.textField = iGlobal.Global.getTextField(this.size - i);
				this.textField.width = this.w + 100;
				this.textField.text = text;
				this.textField.width = this.textField.textWidth + 6;
				if (this.textField.width < this.w) {
					break;
				}
				i++;
			}
			this.addChild(this.textField);
		}
		this.graphics.clear();
		this.graphics.beginFill(16777215, 0.95);
		this.graphics.drawRoundRect(0, 0, this.textField.textWidth + 6, this.textField.textHeight + 2, 3);
		this.graphics.endFill();
	}
}
