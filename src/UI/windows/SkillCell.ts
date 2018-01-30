class SkillCell extends BasicCell {
	public infoWindow: ItemInfoWindow;
	public text: egret.TextField;
	public skill: iData.iSkill.Skill;
	protected bg: egret.Sprite;
	protected mc: egret.Bitmap;
	protected yellow: number = 14922250;
	protected lvupButton: EquipButton;

	public constructor(param1: iData.iSkill.Skill) {
		super(200, 50);
		this.touchEnabled = true;
		this.skill = param1;
		this.bg = new egret.Sprite();
		this.bg.graphics.lineStyle(1, 13487565, 0.8);
		this.bg.graphics.beginFill(16777215, 0.95);
		this.bg.graphics.drawRect(0, 0, 200, 50);
		this.bg.graphics.endFill();
		this.addChildAt(this.bg, 0);
		this.setInfo();
		this.setLvupButton();
		this.update();
		this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMouseOver, this);
		this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onMouseOut, this);
	}

	private setInfo() {
		this.mc = new egret.Bitmap(RES.getRes("mc_" + Tool.MyMath.StringFormChange(this.skill.skillData.name.toLowerCase(), " ", "_")));
		this.addChild(this.mc);
		this.mc.width = 30;
		this.mc.height = 30;
		this.mc.x = 10;
		this.mc.y = 10;
		this.text = iGlobal.Global.getTextField(24);
		this.text.width = 140;
		this.text.text = this.skill.skillData.realName + " " + (15 - this.skill.level).toString(16).toUpperCase();
		this.addChild(this.text);
		this.text.x = 50;
		this.text.y = 10;
		this.infoWindow = new ItemInfoWindow(this.skill.getDescription());
	}

	public onMouseOver(param1: egret.TouchEvent) {
		// this.filters = [new flash.GlowFilter(5066061, 0.66, 13, 13)];
		if (this.parent) {
			this.parent.addChildAt(this, this.parent.numChildren - 1);
		}
		this.addInfoWindow();
	}

	public onMouseOut(param1: egret.TouchEvent) {
		// this.filters = [];
		this.removeInfoWindow();
	}

	private setLvupButton() {
		var _self__: any = this;
		var lvupDown: Function = null;
		lvupDown = function () {
			this["setBefore"]();
			_self__.skill.levelup();
			Emitter.dispatchEvent(Tool.MyEvent.Update);
		};
		this.lvupButton = new EquipButton("lvup");
		this.addChild(this.lvupButton);
		this.lvupButton.x = 172;
		this.lvupButton.y = 15;
		this.lvupButton.downFunction = lvupDown;
	}

	public update() {
		this.text.text = this.skill.skillData.realName + " " + (15 - this.skill.level).toString(16).toUpperCase();
		this.removeInfoWindow();
		this.infoWindow = new ItemInfoWindow(this.skill.getDescription());
		if (this.skill.canLevelup()) {
			this.lvupButton.visible = true;
		}
		else {
			this.lvupButton.visible = false;
		}
	}

	protected addInfoWindow() {
		this.addChild(this.infoWindow);
		this.infoWindow.x = -135;
		this.infoWindow.y = 0;
		var _loc1_: egret.Point = this.localToGlobal(0, 0);
		if (_loc1_.y + this.infoWindow.height > iGlobal.Global.stage.stageHeight) {
			_loc1_ = this.globalToLocal(0, iGlobal.Global.stage.stageHeight - this.infoWindow.height);
			this.infoWindow.y = _loc1_.y;
		}
	}

	protected removeInfoWindow() {
		if (this.contains(this.infoWindow)) {
			this.removeChild(this.infoWindow);
		}
	}
}