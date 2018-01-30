class MagicInnerPanel extends InnerPanel {
	public constructor() {
		super();
		this.listSprite = new egret.Sprite();
		this.addChild(this.listSprite);
	}


	public listSprite: egret.Sprite;
	public Gap: number = 50;

	private init() {
		var cell: ActiveSkillCell = null;
		var mIdx: number = (0);
		var skillIdx: number = (0);
		while (skillIdx < iGlobal.Player.skillList.length) {
			if ((iGlobal.Player.skillList[skillIdx] instanceof iData.iSkill.ActiveSkill) && iGlobal.Player.skillList[skillIdx].skillData.category == iData.iSkill.SkillCategory.MAGIC) {
				cell = new ActiveSkillCell(iGlobal.Player.skillList[skillIdx]);
				this.listSprite.addChild(cell);
				cell.y = this.Gap * mIdx;
				mIdx++;
			}
			skillIdx++;
		}
	}

	public update() {
		var sIdx: number = (0);
		while (sIdx < this.listSprite.numChildren) {
			((this.listSprite.getChildAt(sIdx) as ActiveSkillCell)).update();
			sIdx++;
		}
		this.addCell();
	}

	public addCell() {
		var cell: ActiveSkillCell = null;
		var mIdx: number = (0);
		var sIdx: number = (0);
		while (sIdx < iGlobal.Player.skillList.length) {
			if ((iGlobal.Player.skillList[sIdx] instanceof iData.iSkill.ActiveSkill) && iGlobal.Player.skillList[sIdx].skillData.category == iData.iSkill.SkillCategory.MAGIC) {
				mIdx++;
				if (mIdx > this.listSprite.numChildren) {
					cell = new ActiveSkillCell(iGlobal.Player.skillList[sIdx]);
					this.listSprite.addChild(cell);
					cell.y = this.Gap * (mIdx - 1);
				}
			}
			sIdx++;
		}
	}

}
