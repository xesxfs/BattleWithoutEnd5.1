class Bar extends egret.Sprite {
	public infoWindow: StringInfoWindow;
	private line: egret.Sprite;
	private bg: egret.Sprite;
	private _max: number = 0;
	private _value: number = 0;
	private _aim: number = 0;
	private RATIO: number = 0.1;
	private w: number = 0;
	private fcolor: number = 0;
	private text: string;
	private isMouseOver: boolean = false;

	public constructor(w: number, max: number, color: number, text: string = "") {
		super();
		this.infoWindow = iGlobal.Global.stringInfoWindow;
		this.w = w;
		this._max = max;
		this.fcolor = color;
		this.text = text;
		this.drawBg();
		this.line = new egret.Sprite();
		this.addChild(this.line);
		this.updateMc();
		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this, null);
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onMouseOver, this);
		this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onMouseOut, this);
		this.addEventListener(egret.TouchEvent.TOUCH_END, this.onMouseOut, this);
	}

	private onMouseOver(e: egret.TouchEvent) {
		this.filters = [new egret.GlowFilter(this.fcolor, 0.66, 4, 4)];
		var point: egret.Point = this.localToGlobal(e.localX + 15, e.localY + 15);
		this.infoWindow.x = point.x;
		this.infoWindow.y = point.y;
		this.isMouseOver = true;
		iGlobal.Global.setStringInfoWindow(this.text + (this._value >> 0) + "/" + this._max);
	}

	private onMouseOut(e: egret.Event) {
		this.filters = [];
		this.isMouseOver = false;
		iGlobal.Global.hideInfoWindow();
	}

	private updateMc() {
		this.line.graphics.clear();
		this.line.graphics.lineStyle(2, 15066597);
		this.line.graphics.moveTo(0, 0);
		this.line.graphics.lineTo(this.w, 0);
		this.line.graphics.lineStyle(2, this.fcolor);
		this.line.graphics.moveTo(0, 0);
		if (this._value < 0) {
			this.line.graphics.lineTo(0, 0);
		}
		else if (this._value > this._max) {
			this.line.graphics.lineTo(this.w, 0);
		}
		else {
			this.line.graphics.lineTo(this._value / this._max * this.w, 0);
		}
	}

	public onEnterFrame(e: egret.Event) {
		if (Math.abs(this._aim - this._value) > this._max / 100) {
			this._value = this._value + (this._aim - this._value) * this.RATIO;
		}
		else {
			this._value = this._aim;
		}
		this.updateMc();
	}

	public set Max(max: number) {
		this._max = max;
	}

	public set Value(value: number) {
		this._aim = value;
		if (this.isMouseOver) {
			iGlobal.Global.setStringInfoWindow(this.text + (this._value >> 0) + "/" + this._max);
		}
	}

	public get Value(): number {
		return this._value;
	}

	private drawBg() {
		this.bg = new egret.Sprite();
		this.addChild(this.bg);
		this.bg.graphics.beginFill(4095, 0);
		this.bg.graphics.drawRect(-3, 0, this.w, 8);
		this.bg.graphics.endFill();
	}
}