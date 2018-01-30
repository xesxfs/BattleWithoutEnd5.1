class ItemInnerPanel extends InnerPanel {
	private Gap: number = 50;
	public selectCell: EquipmentCell;
	public buttonGroup: ButtonGroup;
	private listSprite: egret.Sprite;
	private listSpriteArray: Array<egret.Sprite>;
	private text: egret.TextField;
	public constructor() {
		super();
		this.text = iGlobal.Global.getTextField(32, 16777215);
		var topSp: egret.Sprite = new egret.Sprite();
		topSp.graphics.beginFill(0, 0);
		topSp.graphics.drawRect(0, 0, 20, 20);
		topSp.graphics.endFill();
		this.addChild(topSp);
		this.text.width = 200;
		this.addChild(this.text);
		this.update();
		Emitter.addEventListener(Tool.MyEvent.Update, this.onUpdate, this);
	}


	private setSelectedCell(cell: EquipmentCell) {
		let _self__ = this
		this.selectCell = cell;
		Emitter.dispatchEvent(Tool.MyEvent.Change);
	}

	public update() {
		if (MainScene.otherPanel) {
			if (MainScene.otherPanel.itemWindow) {
				MainScene.otherPanel.itemWindow.removeCurrentItem();
			}
		}
		this.updateList();
	}

	private updateList() {
		let _self__ = this
		var cell: EquipmentCell = null;
		if (this.listSprite) {
			this.removeChild(this.listSprite);
		}
		this.listSprite = new egret.Sprite();
		this.addChild(this.listSprite);
		this.listSpriteArray = new Array<egret.Sprite>();
		this.buttonGroup = new ButtonGroup();
		var length: number = iGlobal.Player.itemList.length;
		var i: number = (0);
		while (i < length) {
			var onDown: Function = function () {
				_self__.setSelectedCell(this);
				if (MainScene.otherPanel) {
					if (MainScene.otherPanel.itemWindow) {
						MainScene.otherPanel.itemWindow.removeCurrentItem();
					}
				}
			};
			cell = new EquipmentCell(iGlobal.Player.itemList[i]);
			this.listSprite.addChild(cell);
			cell.y = i * this.Gap;
			this.buttonGroup.addButton(cell);
			this.listSpriteArray.push(cell);
			cell.downFunction = onDown;
			i++;
		}

		this.contentH = (length + 1) * this.Gap;
	}

	private updateText() {
		this.text.textFlow = iGlobal.Global.htmlParse.parse("<p align=\'center\'>" + iGlobal.Player.itemList.length + "/" + iGlobal.Player.BAGMAX + "</p>");
		this.text.y = iGlobal.Player.itemList.length * this.Gap;
	}

	public addOneCell() {
		var _self__ = this;
		var onDown: Function = null;
		onDown = function () {
			_self__.setSelectedCell(this);
		};
		var cell: EquipmentCell = new EquipmentCell(iGlobal.Player.itemList[iGlobal.Player.itemList.length - 1]);
		this.listSprite.addChild(cell);
		cell.y = (iGlobal.Player.itemList.length - 1) * this.Gap;
		this.buttonGroup.addButton(cell);
		cell.downFunction = onDown;
		this.contentH = (iGlobal.Player.itemList.length + 1) * this.Gap;
	}

	private onUpdate(e: egret.Event) {
		this.update();
	}
}