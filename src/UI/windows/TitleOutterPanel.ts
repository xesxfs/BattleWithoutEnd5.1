class TitleOutterPanel extends OutterPanel {
	public constructor() {
		super(200, 540);
		this.setInner();
	}
	public setInner() {
		this.innerPanel = new TitleInnerPanel();
		this.viewport = this.innerPanel;
	}
	

}