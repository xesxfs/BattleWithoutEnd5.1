class SpecialShopPanel extends BasicCell {
	private bag: ClickButton;
	private pet: ClickButton;
	private bag_cost: StringCell;
	private pet_cost: StringCell;
	private bCost: number = 0;
	private pCost: number = 0;

	public constructor() {
		super(550, 500);
		this.graphics.lineStyle(2, 7631988);
		this.graphics.drawRect(0, 0, 550, 500);
		this.init();
	}

	private init() {
		var _self__: any = this;
		var hideDown: Function = null;
		var bagDown: Function = null;
		var petDown: Function = null;
		hideDown = function () {
			_self__.visible = false;
			this["setBefore"]();
		};
		bagDown = function () {
			iGlobal.Player.loseMoney(_self__.bCost);
			iGlobal.Player.BAGMAX++;
			MainScene.otherPanel.itemWindow.updateBagText();
			this["setBefore"]();
		};
		petDown = function () {
			iGlobal.Player.loseMoney(_self__.pCost);
			iGlobal.Player.PETMAX++;
			MainScene.otherPanel.petWindow.update();
			this["setBefore"]();
		};
		var title: StringCell = new StringCell("特殊商店", 300, 54);
		this.addChild(title);
		title.x = 170;
		title.y = 10;
		var hide: FlickerButton = new FlickerButton("退出", 100, 48);
		this.addChild(hide);
		hide.x = 420;
		hide.y = 10;
		hide.downFunction = hideDown;
		
		this.bag = new ClickButton("button_bagSlot", 100);
		this.addChild(this.bag);
		this.bag.x = 50;
		this.bag.y = 100;
		this.bag.downFunction = bagDown;
		var bag_text: StringCell = new StringCell("背包拓展", 100, 32);
		this.addChild(bag_text);
		bag_text.x = 50;
		bag_text.y = 200;
		this.bag_cost = new StringCell("", 120, 32);
		this.addChild(this.bag_cost);
		this.bag_cost.x = 50;
		this.bag_cost.y = 250;
		this.pet = new ClickButton("button_petSlot", 100);
		this.addChild(this.pet);
		this.pet.x = 400;
		this.pet.y = 100;
		this.pet.downFunction = petDown;
		var pet_text: StringCell = new StringCell("宠物拓展", 100, 32);
		this.addChild(pet_text);
		pet_text.x = 400;
		pet_text.y = 200;
		this.pet_cost = new StringCell("", 120, 32);
		this.addChild(this.pet_cost);
		this.pet_cost.x = 400;
		this.pet_cost.y = 250;
		this.update();
	}

	public update() {
		this.bCost = ((iGlobal.Player.BAGMAX - 49) * 1000000);
		this.pCost = ((iGlobal.Player.PETMAX - 9) * 5000000);
		if (iGlobal.Player.BAGMAX >= 100) {
			this.bCost = (-1);
		}
		if (iGlobal.Player.PETMAX >= 20) {
			this.pCost = (-1);
		}
		if (iGlobal.Player.gold >= this.bCost && this.bCost != -1) {
			this.bag_cost.setText("$" + this.bCost);
			this.bag.touchChildren = true;
			this.bag.touchEnabled = true;
		}
		else if (iGlobal.Player.gold < this.bCost && this.bCost != -1) {
			this.bag_cost.setText("<font color=\'#ff4040\'>$" + this.bCost + "</font>");
			this.bag.touchChildren = false;
			this.bag.touchEnabled = false;
		}
		else {
			this.bag_cost.setText("最大");
			this.bag.touchChildren = false;
			this.bag.touchEnabled = false;
		}
		if (iGlobal.Player.gold >= this.pCost && this.pCost != -1) {
			this.pet_cost.setText("$" + this.pCost);
			this.pet.touchChildren = true;
			this.pet.touchEnabled = true;
		}
		else if (iGlobal.Player.gold < this.pCost && this.pCost != -1) {
			this.pet_cost.setText("<font color=\'#ff4040\'>$" + this.pCost + "</font>");
			this.pet.touchChildren = false;
			this.pet.touchEnabled = false;
		}
		else {
			this.pet_cost.setText("最大");
			this.pet.touchChildren = false;
			this.pet.touchEnabled = false;
		}
	}

}