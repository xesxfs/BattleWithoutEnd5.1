class CombatInnerPanel extends InnerPanel {
	public constructor() {
		super();
		this.init();
	}

	public listSprite: egret.Sprite;
	private Gap: number = 50;

	public init() {
		this.listSprite=new egret.Sprite();
		this.addChild(this.listSprite);
		var cell: ActiveSkillCell = null;
		var combatIdx: number = 0;
		var skillIdx: number = 0;
		while (skillIdx < iGlobal.Player.skillList.length) {
			if ((iGlobal.Player.skillList[skillIdx] instanceof iData.iSkill.ActiveSkill) && iGlobal.Player.skillList[skillIdx].skillData.category != iData.iSkill.SkillCategory.MAGIC) {
				cell = new ActiveSkillCell(iGlobal.Player.skillList[skillIdx]);
				this.listSprite.addChild(cell);
				cell.y = this.Gap * combatIdx;
				combatIdx++;
			}
			skillIdx++;
		}
	}


	public update() {
		var idx: number = 0;
		while (idx < this.listSprite.numChildren) {
			(this.listSprite.getChildAt(idx) as ActiveSkillCell).update();
			idx++;
		}
		this.addCell();
	}

	public addCell() {
		var skillCell: ActiveSkillCell = null;
		var combatIdx: number = 0;
		var skillIdx: number = (0);
		while (skillIdx < iGlobal.Player.skillList.length) {
			if ((iGlobal.Player.skillList[skillIdx] instanceof iData.iSkill.ActiveSkill) && iGlobal.Player.skillList[skillIdx].skillData.category != iData.iSkill.SkillCategory.MAGIC) {
				combatIdx++;
				if (combatIdx > this.listSprite.numChildren) {
					skillCell = new ActiveSkillCell(iGlobal.Player.skillList[skillIdx]);
					this.listSprite.addChild(skillCell);
					skillCell.y = this.Gap * (combatIdx - 1);
				}
			}
			skillIdx++;
		}
	}

}