class AllInfoPanel extends BasicCell {
	public panel:AllInfoInnerPanel;

	public constructor() {
		super(400, 655);
		var out: AllInfoOutterPanel = new AllInfoOutterPanel();
		this.addChild(out);
		out.y = 10;
		this.panel = out.innerPanel as AllInfoInnerPanel;
	}

	public addText(text: string, toggle: string = "other") {
		if (iGlobal.Global[toggle + "_toggle"]) {
			this.panel.addText(text);
			return;
		}
	}

}