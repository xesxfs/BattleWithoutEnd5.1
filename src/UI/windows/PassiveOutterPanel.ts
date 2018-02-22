class PassiveOutterPanel extends OutterPanel {
	public constructor() {
		super(390, 700);
		this.setInner();
	}
	public setInner() {
		this.innerPanel = new PassiveInnerPanel();
		this.viewport = this.innerPanel;
	}
}