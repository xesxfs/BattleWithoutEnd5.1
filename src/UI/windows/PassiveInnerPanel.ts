class PassiveInnerPanel extends InnerPanel {
	public constructor() {
		super();
		this.init();
	}

	public listSprite: egret.Sprite;
	private Gap: number = 50;

	private init() {
		this.listSprite = new egret.Sprite();
		this.addChild(this.listSprite);
		var cell: SkillCell = null;
		var pIdx: number = (0);
		var idx: number = (0);
		while (idx < iGlobal.Player.skillList.length) {
			if ((iGlobal.Player.skillList[idx] instanceof iData.iSkill.PassiveSkill)) {
				cell = new SkillCell(iGlobal.Player.skillList[idx]);
				this.listSprite.addChild(cell);
				cell.y = this.Gap * pIdx;
				pIdx++;
			}
			idx++;
		}
	}

	public update() {
		var idx: number = (0);
		while (idx < this.listSprite.numChildren) {
			((this.listSprite.getChildAt(idx) as SkillCell)).update();
			idx++;
		}
		this.addCell();
	}

	public addCell() {
		var cell: SkillCell = null;
		var pIdx: number = (0);
		var sIdx: number = (0);
		while (sIdx < iGlobal.Player.skillList.length) {
			if ((iGlobal.Player.skillList[sIdx] instanceof iData.iSkill.PassiveSkill)) {
				pIdx++;
				if (pIdx > this.listSprite.numChildren) {
					cell = new SkillCell(iGlobal.Player.skillList[sIdx]);
					this.listSprite.addChild(cell);
					cell.y = this.Gap * (pIdx - 1);
				}
			}
			sIdx++;
		}
	}

}