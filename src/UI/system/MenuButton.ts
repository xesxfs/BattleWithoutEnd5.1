class MenuButton extends ButtonCell {
	private bg: egret.Sprite;
	private text: string;
	private infoWindow: StringInfoWindow;

	public constructor(bf: string, af: string, text: string, size: number = 80) {
		super();
		this.touchEnabled = true;
		this.bg = new BasicCell(size, size);
		let bfm = new egret.Bitmap(RES.getRes(bf))
		bfm.width = size;
		bfm.height = size;
		this.before.addChild(bfm);

		let afm = new egret.Bitmap(RES.getRes(af));
		afm.width = size;
		afm.height = size;
		this.after.addChild(afm);

		this.infoWindow = iGlobal.Global.stringInfoWindow;
		this.addChildAt(this.bg, 0);
		this.text = text;
	}

	public onMouseOver(e: egret.TouchEvent) {
		super.onMouseOver(e);
		var p: egret.Point = this.localToGlobal(e.localX + 15, e.localY + 15);
		this.infoWindow.x = p.x;
		this.infoWindow.y = p.y;
		if (this.infoWindow.x + this.infoWindow.width > iGlobal.Global.stage.stageWidth) {
			this.infoWindow.x = this.infoWindow.x - this.infoWindow.width - 10;
		}
		iGlobal.Global.setStringInfoWindow(this.text);
	}

	public onMouseOut(e: egret.TouchEvent) {
		super.onMouseOut(e);
		iGlobal.Global.hideInfoWindow();
	}

	public setBefore() {
		super.setBefore();
		this.filters = [];
	}

	public setDown() {
		super.setDown();
		// this.filters = [new flash.GlowFilter(5066061,0.66,13,13)];
		if (this.parent) {
			this.parent.addChildAt(this, this.parent.numChildren - 1);
		}
	}

}
