class TitleWindow extends IWindow {
	private panel: TitleInnerPanel;
	public constructor() {
		super();
		var outter: TitleOutterPanel = new TitleOutterPanel();
		this.panel = (outter.innerPanel as TitleInnerPanel);
		this.addChild(outter);		
	}

	public update() {
		this.panel.onUpdate();
	}


}