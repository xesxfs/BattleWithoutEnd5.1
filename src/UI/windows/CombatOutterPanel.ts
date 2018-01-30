class CombatOutterPanel extends OutterPanel {
	public constructor() {
		super(200, 540);
		this.setInner();
	}
	public setInner() {
		this.innerPanel = new CombatInnerPanel();
		this.viewport = this.innerPanel;
	}
}