class ButtonCell extends egret.Sprite {
	protected before: egret.Sprite;
	protected after: egret.Sprite;
	public buttonGroup: ButtonGroup;
	protected buttonDown: boolean = false;
	public downFunction: Function;
	public constructor() {
		super();
		this.before = new egret.Sprite();
		this.after = new egret.Sprite();
		this.addChild(this.before);
		this.addChild(this.after);
		this.after.visible = false;
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onMouseOver, this);
		this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onMouseOut, this);
		this.addEventListener(egret.TouchEvent.TOUCH_END, this.onMouseDown, this);
	}


	public onMouseOver(e: egret.TouchEvent) {

		// if (!this.buttonDown) {

	
		if (!this.buttonDown) {

			this.setAfter();
		}
	}

	public onMouseOut(e: egret.TouchEvent) {

		// if (!this.buttonDown) {


		if (!this.buttonDown) {

			this.setBefore();
		}
	}

	public onMouseDown(e: egret.TouchEvent) {

		if (this.buttonGroup) {
			this.buttonGroup.setDown(this);
		}
		else {
			this.setDown();
		}
	}


	public setAfter() {
		this.after.visible = true;
		this.before.visible = false;
	}

	public setBefore() {
		this.after.visible = false;
		this.before.visible = true;
		this.buttonDown = false;
	}

	public setDown() {
		if (!this.buttonDown) {
			this.buttonDown = true;
			if (this.downFunction) {
				this.downFunction();
			}
		}
		else {
			this.buttonDown = false;
			this.setBefore();
		}
	}
}