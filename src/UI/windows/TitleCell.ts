class TitleCell extends BasicCell {
	public infoWindow: ItemInfoWindow;
	public text: StringCell;
	public title: iData.iPlayer.Title;
	protected bg: egret.Sprite;
	protected yellow: number = 14922250;

	public constructor(param1: iData.iPlayer.Title) {
		super(200, 50);
		this.touchEnabled = true;
		this.title = param1;
		this.bg = new egret.Sprite();
		this.bg.graphics.lineStyle(1, 13487565, 0.8);
		this.bg.graphics.beginFill(16777215, 0.95);
		this.bg.graphics.drawRect(0, 0, 200, 50);
		this.bg.graphics.endFill();
		this.addChild(this.bg);
		this.setInfo();
		this.setBg();
		this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMouseOver, this);
		this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onMouseOut, this);
		this.setListener();
	}

	private onMouseDown(param1: egret.Event) {
		var _self__: any = this;
		iGlobal.Player.setTitle(this.title);
		Emitter.dispatchEvent(Tool.MyEvent.Update);
	}

	private setListener() {
		if (this.title.isGot) {
			this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onMouseDown, this);
		}
	}

	private setBg() {
		if (this.title.isGot) {
			// 	this.bg["transform"].colorTransform = new flash.ColorTransform();
		}
		else {
			// 	this.bg["transform"].colorTransform = new flash.ColorTransform(0, 0, 0, 0.8, 200, 200, 200);
		}
	}

	public update() {
		if (iGlobal.Player.title == this.title) {
			// this.bg["transform"].colorTransform = new flash.ColorTransform(0.9, 0.7, 0, 1, 0, 0, 0, 0);
			// this.text["transform"].colorTransform = new flash.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);
		}
		else {
			this.setBg();
			// this.text["transform"].colorTransform = new flash.ColorTransform();
		}
		this.setListener();
	}

	private setInfo() {
		this.text = new StringCell(this.title.realName.toUpperCase(), 180, 24);
		this.addChild(this.text);
		this.text.x = 10;
		this.text.y = 10;
		this.infoWindow = new ItemInfoWindow(this.title.getDescription());
	}

	public onMouseOver(param1: egret.TouchEvent) {
		// this.filters = [new egret.GlowFilter(5066061, 0.66, 13, 13)];
		if (this.parent) {
			this.parent.addChildAt(this, this.parent.numChildren - 1);
		}
		this.addInfoWindow();
	}

	public onMouseOut(param1: egret.TouchEvent) {
		// this.filters = [];
		this.removeInfoWindow();
	}

	protected addInfoWindow() {
		this.infoWindow = new ItemInfoWindow(this.title.getDescription());
		this.addChild(this.infoWindow);
		this.infoWindow.x = -135;
		this.infoWindow.y = 0;
		var p: egret.Point = this.localToGlobal(0, 0);
		if (p.y + this.infoWindow.height > iGlobal.Global.stage.stageHeight) {
			p = this.globalToLocal(0, iGlobal.Global.stage.stageHeight - this.infoWindow.height);
			this.infoWindow.y = p.y;
		}
	}

	protected removeInfoWindow() {
		if (this.contains(this.infoWindow)) {
			this.removeChild(this.infoWindow);
		}
	}

}