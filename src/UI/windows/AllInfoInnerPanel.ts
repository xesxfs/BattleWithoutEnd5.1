class AllInfoInnerPanel extends InnerPanel {
	public list: Array<StringCell>;
	public listSprite: egret.Sprite;
	private bg: egret.Sprite;

	public constructor() {
		super();
		this.init();
	}

	private init() {
		this.list = new Array<StringCell>();
		this.listSprite = new egret.Sprite();
		this.bg = new egret.Sprite();
		this.addChild(this.bg);
		this.addChild(this.listSprite);
	}

	public addText(txt: string) {
		var cell = new StringCell(this.getTime() + txt, 385, 16);
		if (this.list.length > 100) {
			this.listSprite.removeChild(this.list.shift());
		}
		this.list.push(cell);
		this.listSprite.addChild(cell);
		this.tidy();
	}

	private tidy() {
		var length: number = (this.list.length);
		var i: number = (0);
		while (i < this.list.length) {
			this.list[i].y = i * 20;
			this.list[i].x = 10;
			i++;
		}
		if (this.listSprite.height > this.height && this.list.length < 100) {
			// this.y = this.y - 20;
			this.scrollV += 20;
		}
		this.drawBg();
		this.contentH = this.listSprite.height;
	}

	private getTime(): string {
		var time = new Date();
		var format = "[" + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + "]";
		return format;
	}

	private drawBg() {
		this.bg.graphics.clear();
		this.bg.graphics.beginFill(16777215, 0);
		this.bg.graphics.drawRect(0, 0, 400, this.height);
		this.bg.graphics.endFill();
	}
}