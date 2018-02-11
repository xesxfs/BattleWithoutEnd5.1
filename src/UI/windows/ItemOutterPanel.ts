class ItemOutterPanel extends OutterPanel {
	public constructor() {
		super(300, 540);
		this.setInner();
	}

	public setInner() {
		this.innerPanel = new ItemInnerPanel();
		this.viewport = this.innerPanel;
	}
}