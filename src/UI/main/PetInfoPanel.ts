class PetInfoPanel extends BasicCell {


	private beginX: number = 10;
	private beginY: number = 10;
	private yGap: number = 20;
	private sXGap: number = 50;
	private _name: StringCell;
	private lv: StringCell;
	private hp: Bar;
	private exp: Bar;

	public constructor() {
		super(185, 80);
		this.init();
	}

	private init() {
		var petcell: StringCell = new StringCell("宠物");
		this.addChild(petcell);
		petcell.x = this.beginX;
		petcell.y = this.beginY;
		this._name = new StringCell("", 120);
		this.addChild(this._name);
		this._name.x = this.beginX + this.sXGap;
		this._name.y = this.beginY;
		var lvCell: StringCell = new StringCell("Lv");
		this.addChild(lvCell);
		lvCell.x = this.beginX;
		lvCell.y = this.beginY + this.yGap;
		this.lv = new StringCell("");
		this.addChild(this.lv);
		this.lv.x = this.beginX + this.sXGap - 30;
		this.lv.y = this.beginY + this.yGap;
		var expCell: StringCell = new StringCell("Exp");
		this.addChild(expCell);
		expCell.x = this.beginX + 50;
		expCell.y = this.beginY + this.yGap;
		this.exp = new Bar(50, 100, 7932074);
		this.addChild(this.exp);
		this.exp.x = this.beginX + 80;
		this.exp.y = this.beginY + this.yGap + 13;
		var hpcell: StringCell = new StringCell("HP");
		this.addChild(hpcell);
		hpcell.x = this.beginX;
		hpcell.y = this.beginY + this.yGap * 2;
		this.hp = new Bar(100, 100, 12522257);
		this.addChild(this.hp);
		this.hp.x = this.beginX + 25;
		this.hp.y = this.beginY + this.yGap * 2 + 13;
	}


	public update() {
		if (MainScene.battle.pet) {
			this._name.setText(MainScene.battle.pet.realName);
			this.updateLv();
			this.updateHp();
			this.updateExp();
		}
		else {
			this._name.setText("");
			this.lv.setText("");
			this.hp.Value = 0;
			this.hp.Max = 1;
			this.exp.Value = 0;
			this.exp.Max = 1;
		}
	}

	public updateHp() {
		if (MainScene.battle.pet) {
			this.hp.Value = MainScene.battle.petHp;
			this.hp.Max = MainScene.battle.pet.hp;
		}
	}

	public updateExp() {
		if (MainScene.battle.pet) {
			this.exp.Value = MainScene.battle.pet.exp;
			this.exp.Max = MainScene.battle.pet.getLevelExp();
		}
	}

	public updateLv() {
		if (MainScene.battle.pet) {
			this.lv.setText(MainScene.battle.pet.level + "");
		}
	}

}