class PeopleModel extends ButtonCell {
	public age: number = 0;
	public bg: BasicCell;
	public bg2: BasicCell;
	public p: egret.Sprite;
	public p2: egret.Sprite;

	public constructor(param1: number) {
		super();
		this.touchEnabled = true;
		param1 = (param1);
		this.age = (param1);
		this.bg = new BasicCell(50, 100);
		this.bg2 = new BasicCell(50, 100);
		// this.bg2["transform"].colorTransform = new egret.ColorTransform(0.9, 0.7, 0, 0.95);
		this.init();
	}

	private init() {
		this.before.addChild(this.bg);
		this.after.addChild(this.bg2);
		this.p = new egret.Sprite();
		this.p2 = new egret.Sprite();
		this.before.addChild(this.p);
		this.after.addChild(this.p2);
		this.drawPeople(this.p, 7631988);
		this.drawPeople(this.p2, 16777215);
	}

	private drawPeople(sp: egret.Sprite, color: number): any {
		color = (color);
		var ageMul: number = (this.age - 10);
		sp.y = 15 - ageMul * 3;
		sp.graphics.beginFill(color, 1);
		sp.graphics.drawCircle(25, 30, 10);
		sp.graphics.drawRect(15, 40, 20, 30 + ageMul);
		sp.graphics.drawRect(15, 70 + ageMul, 5, 8 + ageMul * 2);
		sp.graphics.drawRect(30, 70 + ageMul, 5, 8 + ageMul * 2);
		sp.graphics.drawRect(9, 40, 5, 15 + ageMul * 2);
		sp.graphics.drawRect(36, 40, 5, 15 + ageMul * 2);
		sp.graphics.endFill();
	}

	public setBefore() {
		super.setBefore();
		this.filters = [];
	}

	public setDown() {
		super.setDown();
		this.filters = [new egret.GlowFilter(5066061, 0.66, 13, 13)];
		if (this.parent) {
			this.parent.addChildAt(this, this.parent.numChildren - 1);
		}
	}
}