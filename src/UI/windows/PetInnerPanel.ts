class PetInnerPanel extends InnerPanel {
	private Gap: number = 50;
	public selectCell: PetCell;
	public buttonGroup: ButtonGroup;
	private listSprite: egret.Sprite;

	public constructor() {
		super();
		this.update();
		Emitter.addEventListener(Tool.MyEvent.Update, this.onUpdate, this);
	}

	private onUpdate(e: egret.Event) {
		this.update();
	}

	public update() {
		this.updateList();
	}

	private updateList() {
		var cell: PetCell = null;
		if (this.listSprite) {
			this.removeChild(this.listSprite);
		}
		this.listSprite = new egret.Sprite();
		this.addChild(this.listSprite);
		this.buttonGroup = new ButtonGroup();
		var length: number = (iGlobal.Player.petList.length);
		var i: number = (0);
		while (i < length) {
			cell = new PetCell(iGlobal.Player.petList[i]);
			this.listSprite.addChild(cell);
			cell.y = i * this.Gap;
			this.buttonGroup.addButton(cell);
			i++;
		}
		this.contentH = (length + 1) * this.Gap
	}
}