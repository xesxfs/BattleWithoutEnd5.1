class TitleWindow extends IWindow {
	private panel: TitleInnerPanel;
	public constructor() {
		super();
		var outter: TitleOutterPanel = new TitleOutterPanel();
		this.panel = (outter.innerPanel as TitleInnerPanel);
		this.addChild(outter);
		outter.x = 0;
		outter.y = 0;
	}

	public update() {
		this.panel.onUpdate();
	}


}