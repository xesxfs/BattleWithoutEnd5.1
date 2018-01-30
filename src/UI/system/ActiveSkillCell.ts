class ActiveSkillCell extends SkillCell {
	public constructor(param1: iData.iSkill.Skill) {
		super(param1);
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onMouseDown, this);
	}

	private onMouseDown(param1: egret.TouchEvent) {
		if (!(param1.target instanceof ActiveSkillCell)) {
			return;
		}
		if (iGlobal.Player.isSkillEquiped(this.skill)) {
			iGlobal.Player.unequipSkill(this.skill);
		}
		else {
			iGlobal.Player.equipSkill(this.skill);
		}
		this.updateEquip();
	}

	public updateEquip() {
		if (iGlobal.Player.isSkillEquiped(this.skill)) {
			// this.bg["transform"].colorTransform = new flash.ColorTransform(0.9, 0.7, 0, 1, 0, 0, 0, 0);
			// this.mc["transform"].colorTransform = new flash.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);
			// this.text["transform"].colorTransform = new flash.ColorTransform(1, 1, 1, 1, 255, 255, 255, 0);
		}
		else {
			// this.bg["transform"].colorTransform = new flash.ColorTransform();
			// this.mc["transform"].colorTransform = new flash.ColorTransform();
			// this.text["transform"].colorTransform = new flash.ColorTransform();
		}
	}

}