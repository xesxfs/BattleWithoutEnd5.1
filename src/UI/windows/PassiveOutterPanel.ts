class PassiveOutterPanel extends OutterPanel {
	public constructor() {
		super(200, 540);
		this.setInner();
	}
	public setInner() {
		this.innerPanel = new PassiveInnerPanel();
		this.viewport = this.innerPanel;
	}
}