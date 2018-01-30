class MapPanel extends egret.Sprite {
	private bg: egret.Sprite;
	public constructor() {
		super();
		var _self_: any = this;
		var backDown: Function = null;
		var cell: MapCell = null;
		backDown = function () {
			_self_.parent.removeChild(_self_);
			this["setBefore"]();
		};
		this.bg = new BasicCell(800, 600);
		this.addChild(this.bg);
		var m = new egret.Bitmap(RES.getRes("map_mc"));
		this.addChild(m);
		var buttonGroup: ButtonGroup = new ButtonGroup();
		var length: number = (iData.iMap.MapList.list.length);
		var i: number = (0);
		while (i < length) {
			cell = new MapCell(iData.iMap.MapList.list[i]);
			this.addChild(cell);
			buttonGroup.addButton(cell);
			if (iData.iMap.MapList.list[i].name == iGlobal.Global.map.mapData.name) {
				cell.setAfter();
				// cell.onMouseDown(null);
			}
			i++;
		}
		var backButton: FlickerButton = new FlickerButton("返回", 100, 50);
		this.addChild(backButton);
		backButton.x = 0;
		backButton.y = 0;
		backButton.downFunction = backDown;

	}
}