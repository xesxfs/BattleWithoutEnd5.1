class OtherPanel extends egret.Sprite {

	public itemWindow: ItemWindow;
	public equipWindow: EquipWindow;
	public petWindow: PetWindow;
	public systemWindow: SystemWindow;
	public titleWindow: TitleWindow;
	public skillWindow: SkillWindow;
	public otherWindow: OtherWindow;
	public window: egret.DisplayObjectContainer;
	private array: Array<MenuButton>;
	public constructor() {
		super();
		var _self__ = this;
		this.array = [];
		var buttonGroup: ButtonGroup = new ButtonGroup();
		var buttonGroup1 = new ButtonGroup();
		var list: Array<string> = ["item", "equip", "pet", "skill", "title", "system", "info"];
		var list2: Array<string> = ["背包", "装备", "宠物", "技能", "称号", "设置", "其他"];
		var i: number = (0);
		var cell: MenuButton = null;
		var left: ButtonCell = null;
		var leftDown: Function = null;
		var right: ButtonCell = null;
		var rightDown: Function = null;
		var onEnterFrame: Function = null;
		var b: number;
		leftDown = function () {
			right.visible = true;
			left.visible = false;
			b = _self__.stage.stageWidth-200
			_self__.addEventListener(egret.Event.ENTER_FRAME, onEnterFrame, _self__);

		};
		rightDown = function () {
			left.visible = true;
			right.visible = false;
			b = _self__.stage.stageWidth;
			_self__.addEventListener(egret.Event.ENTER_FRAME, onEnterFrame, _self__);

		};
		onEnterFrame = function (e: egret.Event) {
			_self__.x = _self__.x + (b - _self__.x) * 0.5;
			if (Math.abs(_self__.x - b) < 1) {
				_self__.x = b;
				_self__.removeEventListener(egret.Event.ENTER_FRAME, onEnterFrame, _self__);
			}
		};

		while (i < list.length) {
			cell = new MenuButton("before_" + list[i], "after_" + list[i], list2[i]);
			cell.y = (i + 1) * 40;
			cell.x = -40;
			this.addChild(cell);
			buttonGroup.addButton(cell);
			this.array.push(cell);
			i++;
		}

		left = new MenuButton("after_arrow_left", "before_arrow_left", "向左");
		this.addChild(left);
		left.x = -40;
		left.downFunction = leftDown;
		right = new MenuButton("after_arrow_right", "before_arrow_right", "向右");
		this.addChild(right);
		right.x = -40;
		right.visible = false;
		right.downFunction = rightDown;
		buttonGroup.addButton(left);
		buttonGroup.addButton(right);

		this.init();
		this.setFunction();
	}

	private init() {
		this.itemWindow = new ItemWindow();
		this.equipWindow = new EquipWindow();
		this.petWindow = new PetWindow();
		this.skillWindow = new SkillWindow();
		this.titleWindow = new TitleWindow();
		this.systemWindow = new SystemWindow();
		this.otherWindow = new OtherWindow();
		this.setFunction();
		var bg: egret.Sprite = new BasicCell(200, 540);
		this.addChildAt(bg, 0);
	}

	private setFunction() {
		var _self__ = this;
		var addWindow0: Function = null;
		var addWindow1: Function = null;
		var addWindow2: Function = null;
		var addWindow3: Function = null;
		var addWindow4: Function = null;
		var addWindow5: Function = null;
		var addWindow6: Function = null;
		addWindow0 = function () {
			removeWindow();
			_self__.window = _self__.itemWindow;
			addWindow();
		};
		addWindow1 = function () {
			removeWindow();
			_self__.window = _self__.equipWindow;
			addWindow();
		};
		addWindow2 = function () {
			removeWindow();
			_self__.window = _self__.petWindow;
			addWindow();
		};
		addWindow3 = function () {
			removeWindow();
			_self__.window = _self__.skillWindow;
			addWindow();
		};
		addWindow4 = function () {
			removeWindow();
			_self__.window = _self__.titleWindow;
			addWindow();
		};
		addWindow5 = function () {
			removeWindow();
			_self__.window = _self__.systemWindow;
			addWindow();
		};
		addWindow6 = function () {
			removeWindow();
			_self__.window = _self__.otherWindow;
			addWindow();
		};
		var removeWindow: Function = function () {
			if (_self__.window) {
				_self__.removeChild(_self__.window);
			}
		};
		var addWindow: Function = function () {
			_self__.addChild(_self__.window);
			_self__.window.y = 40;
		};
		this.array[0].downFunction = addWindow0;
		this.array[1].downFunction = addWindow1;
		this.array[2].downFunction = addWindow2;
		this.array[3].downFunction = addWindow3;
		this.array[4].downFunction = addWindow4;
		this.array[5].downFunction = addWindow5;
		this.array[6].downFunction = addWindow6;
	}


}


