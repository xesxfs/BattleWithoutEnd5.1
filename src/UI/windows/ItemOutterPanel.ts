class ItemOutterPanel extends OutterPanel {
	public constructor() {
		super(200, 540);
		this.setInner();
	}

	public setInner() {
		this.innerPanel = new ItemInnerPanel();
		this.viewport = this.innerPanel;
	}
}