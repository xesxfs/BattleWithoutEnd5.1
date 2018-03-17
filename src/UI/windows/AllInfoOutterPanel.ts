class AllInfoOutterPanel extends OutterPanel {
	public constructor() {
		super(405, 655);
		this.setInnerPanel();
	}

	protected setInnerPanel() {
		this.innerPanel = new AllInfoInnerPanel();
		this.viewport = this.innerPanel;
	}
}