class MainScene extends BaseScene {
	public constructor() {
		super();
		this.skinName = "MainSceneSkin";
	}
	public static allInfoPanel: AllInfoPanel;
	public static playerInfoPanel: PlayerInfoPanel;
	public static monsterInfoPanel: MonsterInfoPanel;
	public static petInfoPanel: PetInfoPanel;
	public static battleSkillPanel: BattleSkillPanel;
	public static lootPanel: LootPanel;
	public static otherPanel: OtherPanel;
	public static battle: iData.Battle;
	private gap: number = 1;


	protected childrenCreated(): void {
		this.init();
	}

	private init() {
		iGlobal.Global.init(this.stage);
		this.setPlayerInfo();
		this.setMonsterInfo();
		this.setPetInfo();
		this.setAllInfoPanel();
		this.setBattleSkillPanel();
		this.setLootPanel();
		this.setBattle();
		this.setOther();
		iGlobal.Global.shopPanel = new ShopPanel();
		iGlobal.Global.helpPanel = new HelpPanel();
		iGlobal.Global.specialShopPanel = new SpecialShopPanel();
	}

	private setBattle() {
		MainScene.battle = new iData.Battle();
		MainScene.battle.init();
	}


	private setPlayerInfo() {
		MainScene.playerInfoPanel = new PlayerInfoPanel();
		this.addChildAt(MainScene.playerInfoPanel, 0);
		// MainScene.playerInfoPanel.x = 10;
		// MainScene.playerInfoPanel.y = 10;
	}

	private setMonsterInfo() {
		MainScene.monsterInfoPanel = new MonsterInfoPanel();
		this.addChildAt(MainScene.monsterInfoPanel, 0);
		// MainScene.monsterInfoPanel.x = 10;
		MainScene.monsterInfoPanel.y = MainScene.playerInfoPanel.y + MainScene.playerInfoPanel.height + this.gap;
	}

	private setPetInfo() {
		MainScene.petInfoPanel = new PetInfoPanel();
		this.addChildAt(MainScene.petInfoPanel, 0);
		MainScene.petInfoPanel.x = MainScene.monsterInfoPanel.x + MainScene.monsterInfoPanel.width + this.gap;
		MainScene.petInfoPanel.y = MainScene.playerInfoPanel.y + MainScene.playerInfoPanel.height + this.gap;
	}

	private setOther() {
		MainScene.otherPanel = new OtherPanel();
		this.addChild(MainScene.otherPanel);
		MainScene.otherPanel.x = this.stage.stageWidth;
		MainScene.otherPanel.y = (this.stage.height - MainScene.otherPanel.height);
	}

	private setBattleSkillPanel() {
		MainScene.battleSkillPanel = new BattleSkillPanel();
		this.addChildAt(MainScene.battleSkillPanel, 0);
		MainScene.battleSkillPanel.x = MainScene.allInfoPanel.x + MainScene.allInfoPanel.width + this.gap;
		MainScene.battleSkillPanel.y = MainScene.petInfoPanel.y + MainScene.petInfoPanel.height + this.gap;
	}

	private setAllInfoPanel() {
		MainScene.allInfoPanel = new AllInfoPanel();
		this.addChildAt(MainScene.allInfoPanel, 0);
		// MainScene.allInfoPanel.x = 10;
		MainScene.allInfoPanel.y = MainScene.monsterInfoPanel.y + MainScene.monsterInfoPanel.height + this.gap;
	}

	private setLootPanel() {
		MainScene.lootPanel = new LootPanel();
		this.addChildAt(MainScene.lootPanel, 0);
		MainScene.lootPanel.x = MainScene.allInfoPanel.x + MainScene.allInfoPanel.width + this.gap;
		MainScene.lootPanel.y = MainScene.battleSkillPanel.y + MainScene.battleSkillPanel.height + this.gap;
	}


	/**添加到场景中*/
	protected onEnable() {

	}


	/**从场景中移除*/
	protected onRemove() {

	}

}