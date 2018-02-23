class PetWindow extends IWindow {
	public constructor() {
		super();
		this.textBag = iGlobal.Global.getTextField(32, 0x747474);
		var outterPanel: PetOutterPanel = new PetOutterPanel();
		this.addChild(outterPanel);
		outterPanel.x = 0;
		outterPanel.y = 40;
		this.panel = outterPanel.innerPanel as PetInnerPanel;
		this.setBagText();
		Emitter.addEventListener(Tool.MyEvent.Update, this.updateBagText, this);
	}
	private panel: PetInnerPanel;
	private textBag: egret.TextField;

	private updateBagText(param1: egret.Event = null) {
		this.textBag.textFlow = iGlobal.Global.htmlParse.parse("<p align=\'center\'>" + iGlobal.Player.petList.length + "/" + iGlobal.Player.PETMAX + "</p>");
	}

	private setBagText() {
		this.textBag.width = 200;
		this.textBag.textFlow = iGlobal.Global.htmlParse.parse("<p align=\'center\'>" + iGlobal.Player.petList.length + "/" + iGlobal.Player.PETMAX + "</p>");
		this.textBag.textAlign = egret.HorizontalAlign.CENTER
		var tbg: egret.Sprite = new BasicCell(390, 40);
		this.addChild(tbg);
		tbg.x = 0;
		tbg.y = 0;
		this.textBag.x = (tbg.width - this.textBag.width) / 2;
		this.textBag.y = (tbg.height - this.textBag.height) / 2;
		tbg.addChild(this.textBag);

	}

	public update() {
		this.panel.update();
		this.updateBagText();
	}

}