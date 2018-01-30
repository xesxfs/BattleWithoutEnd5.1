class TitleInnerPanel extends InnerPanel {
	private Gap: number = 50;
	private listSprite: egret.Sprite;

	public constructor() {
		super();
		var cell: TitleCell = null;
		this.listSprite = new egret.Sprite();
		this.addChild(this.listSprite);
		var titleList: Array<iData.iPlayer.Title> = iData.iPlayer.TitleList.list;
		var l: number = (titleList.length);
		var i: number = (0);
		while (i < l) {
			cell = new TitleCell(titleList[i]);
			this.listSprite.addChild(cell);
			cell.y = this.Gap * i;
			i++;
		}
		this.contentH = (l + 1) * this.Gap;
		Emitter.addEventListener(Tool.MyEvent.Update, this.onUpdate, this);
	}

	public onUpdate(e: egret.Event = null) {
		var i: number = (0);
		while (i < this.listSprite.numChildren) {
			(this.listSprite.getChildAt(i) as TitleCell).update();
			i++;
		}
	}
}