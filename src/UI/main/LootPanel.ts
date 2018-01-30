class LootPanel extends BasicCell {


	private beginX: number = 10;
	private beginY: number = 30;
	private gap: number = 18;
	private fontSize: number = 20;
	private gapX: number = 100;
	private money_c: StringCell;
	private exp_c: StringCell;
	private basic_c: StringCell;
	private magic_c: StringCell;
	private rare_c: StringCell;
	private perfect_c: StringCell;
	private epic_c: StringCell;
	private legendary_c: StringCell;
	public money: number = 0;
	public exp: number = 0;
	public basic: number = 0;
	public magic: number = 0;
	public rare: number = 0;
	public perfect: number = 0;
	public epic: number = 0;
	public legendary: number = 0;

	public constructor() {
		super(170, 185);
		var cell: StringCell = new StringCell("当前地图掉落", 150, 24);
		this.addChild(cell);
		cell.x = 5;
		cell.y = 5;
		cell = new StringCell("<font color=\'#FFA640\'>$</font>", 100, this.fontSize);
		this.addChild(cell);
		cell.x = this.beginX;
		cell.y = this.beginY;
		cell = new StringCell("<font color=\'#4a60d7\'>EXP", 100, this.fontSize);
		this.addChild(cell);
		cell.x = this.beginX;
		cell.y = this.beginY + this.gap;
		cell = new StringCell("普通", 100, this.fontSize);
		this.addChild(cell);
		cell.x = this.beginX;
		cell.y = this.beginY + this.gap * 2;
		cell = new StringCell("<font color=\'" + iData.iItem.Equipment.GREEN + "\'>精品</font>", 100, this.fontSize);
		this.addChild(cell);
		cell.x = this.beginX;
		cell.y = this.beginY + this.gap * 3;
		cell = new StringCell("<font color=\'" + iData.iItem.Equipment.BLUE + "\'>稀有</font>", 100, this.fontSize);
		this.addChild(cell);
		cell.x = this.beginX;
		cell.y = this.beginY + this.gap * 4;
		cell = new StringCell("<font color=\'" + iData.iItem.Equipment.YELLOW + "\'>完美</font>", 100, this.fontSize);
		this.addChild(cell);
		cell.x = this.beginX;
		cell.y = this.beginY + this.gap * 5;
		cell = new StringCell("<font color=\'" + iData.iItem.Equipment.ORANGE + "\'>史诗</font>", 100, this.fontSize);
		this.addChild(cell);
		cell.x = this.beginX;
		cell.y = this.beginY + this.gap * 6;
		cell = new StringCell("<font color=\'" + iData.iItem.Equipment.PURPLE + "\'>传奇</font>", 100, this.fontSize);
		this.addChild(cell);
		cell.x = this.beginX;
		cell.y = this.beginY + this.gap * 7;
		this.money_c = new StringCell("0", 65, this.fontSize);
		this.addChild(this.money_c);
		this.money_c.x = this.beginX + this.gapX;
		this.money_c.y = this.beginY;
		this.exp_c = new StringCell("0", 65, this.fontSize);
		this.addChild(this.exp_c);
		this.exp_c.x = this.beginX + this.gapX;
		this.exp_c.y = this.beginY + this.gap * 1;
		this.basic_c = new StringCell("0", 65, this.fontSize);
		this.addChild(this.basic_c);
		this.basic_c.x = this.beginX + this.gapX;
		this.basic_c.y = this.beginY + this.gap * 2;
		this.magic_c = new StringCell("0", 65, this.fontSize);
		this.addChild(this.magic_c);
		this.magic_c.x = this.beginX + this.gapX;
		this.magic_c.y = this.beginY + this.gap * 3;
		this.rare_c = new StringCell("0", 65, this.fontSize);
		this.addChild(this.rare_c);
		this.rare_c.x = this.beginX + this.gapX;
		this.rare_c.y = this.beginY + this.gap * 4;
		this.perfect_c = new StringCell("0", 65, this.fontSize);
		this.addChild(this.perfect_c);
		this.perfect_c.x = this.beginX + this.gapX;
		this.perfect_c.y = this.beginY + this.gap * 5;
		this.epic_c = new StringCell("0", 65, this.fontSize);
		this.addChild(this.epic_c);
		this.epic_c.x = this.beginX + this.gapX;
		this.epic_c.y = this.beginY + this.gap * 6;
		this.legendary_c = new StringCell("0", 65, this.fontSize);
		this.addChild(this.legendary_c);
		this.legendary_c.x = this.beginX + this.gapX;
		this.legendary_c.y = this.beginY + this.gap * 7;
	}

	public reset() {
		this.money = (0);
		this.exp = (0);
		this.basic = (0);
		this.magic = (0);
		this.rare = (0);
		this.perfect = (0);
		this.epic = (0);
		this.legendary = (0);
	}

	public update() {
		this.money_c.setText(this.money + "");
		this.exp_c.setText(this.exp + "");
		this.basic_c.setText(this.basic + "");
		this.magic_c.setText(this.magic + "");
		this.rare_c.setText(this.rare + "");
		this.perfect_c.setText(this.perfect + "");
		this.epic_c.setText(this.epic + "");
		this.legendary_c.setText(this.legendary + "");
	}


}