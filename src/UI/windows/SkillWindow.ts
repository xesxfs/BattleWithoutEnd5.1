class SkillWindow extends IWindow {
	public panel: OutterPanel;
	private combatPanel: CombatOutterPanel;
	private magicPanel: MagicOutterPanel;
	private passivePanel: PassiveOutterPanel;

	public constructor() {
		super();
		var _self__ = this;
		var passive: StringButton = null;
		var combatDown: Function = null;
		var magicDown: Function = null;
		var passiveDown: Function = null;
		combatDown = function () {
			removePanel();
			_self__.panel = _self__.combatPanel;
			_self__.addChild(_self__.panel);
			_self__.panel.y = 55;
		};
		magicDown = function () {
			removePanel();
			_self__.panel = _self__.magicPanel;
			_self__.addChild(_self__.panel);
			_self__.panel.y = 55;
		};
		passiveDown = function () {
			removePanel();
			_self__.panel = _self__.passivePanel;
			_self__.addChild(_self__.panel);
			_self__.panel.y = 55;
		};
		var removePanel: Function = function () {
			if (_self__.panel) {
				_self__.removeChild(_self__.panel);
			}
		};
		var buttonSprite: egret.Sprite = new egret.Sprite();
		this.addChild(buttonSprite);
		var combat: StringButton = new StringButton("战斗", iGlobal.Global.RED);
		combat.x = 20;
		buttonSprite.addChild(combat);
		var magic: StringButton = new StringButton("魔法", iGlobal.Global.BLUE);
		buttonSprite.addChild(magic);
		magic.x = 130 + combat.x;
		passive = new StringButton("被动", iGlobal.Global.YELLOW);
		buttonSprite.addChild(passive);
		passive.x = 130 * 2 + combat.x;
		var buttonGroup: ButtonGroup = new ButtonGroup();
		buttonGroup.addButton(combat);
		buttonGroup.addButton(magic);
		buttonGroup.addButton(passive);
		this.combatPanel = new CombatOutterPanel();
		this.magicPanel = new MagicOutterPanel();
		this.passivePanel = new PassiveOutterPanel();
		Emitter.addEventListener(Tool.MyEvent.Update, this.onUpdate, this);
		combat.downFunction = combatDown;
		magic.downFunction = magicDown;
		passive.downFunction = passiveDown;
	}

	public onUpdate(e: egret.Event = null) {
		((this.combatPanel.innerPanel as CombatInnerPanel)).update();
		((this.magicPanel.innerPanel as MagicInnerPanel)).update();
		((this.passivePanel.innerPanel as PassiveInnerPanel)).update();
		iGlobal.Player.updateSkillInfo();
	}

}