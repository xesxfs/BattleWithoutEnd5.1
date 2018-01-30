class MonsterInfoPanel extends BasicCell {


	private beginX: number = 10;
	private beginY: number = 10;
	private yGap: number = 50;
	private sXGap: number = 50;
	private _name: StringCell;
	private title: StringInfoCell;
	private hp: Bar;
	private cp: StringCell;

	private buffSprite: egret.Sprite;
	private bossIcon: egret.Bitmap;
	public RED: string = "#ff4040";
	public BLUE: string = "#4a60d7";
	public YELLOW: string = "#FFA640";
	public GREEN: string = "#7AEE3C";
	public BROWN: string = "#bf7130";
	public PURPLE: string = "#BC38d3";
	public PINK: string = "#EE6b9c";

	public constructor() {
		super(185, 135);
		this.setPosition();
	}
	private setPosition() {
		var monCell = new StringCell("怪物");
		this.addChild(monCell);
		monCell.x = this.beginX;
		monCell.y = this.beginY;
		this._name = new StringCell("Boss Red Fox", 120, 16);
		this.addChild(this._name);
		this._name.x = this.beginX + this.sXGap;
		this._name.y = this.beginY;
		this.createBossIcon();
		this.title = new StringInfoCell("the Tanker", "Default", 120);
		this.addChild(this.title);
		this.title.x = this.beginX + this.sXGap;
		this.title.y = this.beginY + 20;
		var hpCell: StringCell = new StringCell("HP");
		this.addChild(hpCell);
		hpCell.x = this.beginX;
		hpCell.y = this.beginY + this.yGap + 30;
		this.hp = new Bar(100, 100, 12522257);
		this.addChild(this.hp);
		this.hp.x = this.beginX + 25;
		this.hp.y = this.beginY + this.yGap + 43;
		var cpCell: StringCell = new StringCell("战斗力");
		this.addChild(cpCell);
		cpCell.x = this.beginX;
		cpCell.y = this.beginY + this.yGap * 2;
		this.cp = new StringCell("100");
		this.addChild(this.cp);
		this.cp.x = this.beginX + this.sXGap;
		this.cp.y = this.beginY + this.yGap * 2;
		this.buffSprite = new egret.Sprite();
	}

	private createBossIcon() {
		this.bossIcon = new egret.Bitmap(RES.getRes("boss_icon"));	
		this.bossIcon.visible = false;
		this.addChild(this.bossIcon);
		this.bossIcon.x = this.beginX + 30;
		this.bossIcon.y = this.beginY + 22;
		this.bossIcon.width = 15;
		this.bossIcon.height = 15;
	}

	public update() {
		this.setCpRatioTitleAndName();
		this.setTitle();
		this.cp.setText(MainScene.battle.monster.CP + "");
		this.updateHp();
		this.updateBuff();
		this.updateBoss();
	}

	private updateBoss() {
		if (MainScene.battle.monster instanceof iData.iMonster.Boss) {
			this.bossIcon.visible = true;
			return;
		}
		this.bossIcon.visible = false;
	}

	public updateHp() {
		this.hp.Max = MainScene.battle.monster.hp;
		this.hp.Value = MainScene.battle.monsterHp;
	}

	private setCpRatioTitleAndName() {
		var color: string = null;
		var title: string = null;
		var cp: number = MainScene.battle.monster.CP / iGlobal.Player.combatPower;
		if (cp < 0.8) {
			color = this.PINK;
			title = "非常弱小的";
		}
		else if (cp < 1) {
			color = this.PURPLE;
			title = "弱小的";
		}
		else if (cp < 1.4) {
			color = this.BROWN;
			title = "普通的";
		}
		else if (cp < 2) {
			color = this.GREEN;
			title = "强大的";
		}
		else if (cp < 3) {
			color = this.YELLOW;
			title = "厉害的";
		}
		else {
			color = this.RED;
			title = "BOSS";
		}
		var showText: string = "<font color=\'" + color + "\'>" + title + "</font> " + MainScene.battle.monster.data.realName;
		this._name.setText(showText);
	}

	private setTitle() {
		if (MainScene.battle.monster.title) {
			this.title.setText(MainScene.battle.monster.title.name);
			this.title.setInfo(MainScene.battle.monster.title.description);
			this.title.visible = true;
		}
		else {
			this.title.setText("");
			this.title.visible = false;
		}
	}

	public updateBuff() {
		var buffIcon: egret.Bitmap = null;
		if (this.contains(this.buffSprite)) {
			this.removeChild(this.buffSprite);
		}
		this.buffSprite = new egret.Sprite();
		this.addChild(this.buffSprite);
		this.buffSprite.x = this.beginX;
		this.buffSprite.y = this.beginY + 50;
		var length: Array<iData.iSkill.iBuff.Buff> = MainScene.battle.monster.buffList;
		var i: number = (0);
		while (i < length.length) {
			buffIcon = new egret.Bitmap(RES.getRes("buff_" + length[i].name));
			buffIcon.width = 30;
			buffIcon.height = 30;
			this.buffSprite.addChild(buffIcon);
			buffIcon.x = i * 40;
			i++;
		}
	}

}