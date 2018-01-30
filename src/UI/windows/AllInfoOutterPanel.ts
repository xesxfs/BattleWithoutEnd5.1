class AllInfoOutterPanel extends OutterPanel {
	public constructor() {
		super(400, 655);
		this.setInnerPanel();
	}

	protected setInnerPanel() {
		this.innerPanel = new AllInfoInnerPanel();
		this.viewport = this.innerPanel;
	}
}