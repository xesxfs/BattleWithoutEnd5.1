class OutterPanel extends eui.Scroller {
	public innerPanel: InnerPanel;
	public constructor(w: number, h: number) {
		super();
		this.width = w;
		this.height = h;
		this.scrollPolicyV = eui.ScrollPolicy.ON;
		this.scrollPolicyH = eui.ScrollPolicy.OFF;
	}


	public setInner() {
		this.innerPanel = new InnerPanel();
		this.viewport = this.innerPanel;
	}
}