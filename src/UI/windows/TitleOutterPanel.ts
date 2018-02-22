class TitleOutterPanel extends OutterPanel {
	public constructor() {
		super(400, 700);
		this.setInner();
	}
	public setInner() {
		this.innerPanel = new TitleInnerPanel();
		this.viewport = this.innerPanel;
	}
	

}