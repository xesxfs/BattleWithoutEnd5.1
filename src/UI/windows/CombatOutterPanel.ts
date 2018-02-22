class CombatOutterPanel extends OutterPanel {
	public constructor() {
		super(390, 700);
		this.setInner();
	}
	public setInner() {
		this.innerPanel = new CombatInnerPanel();
		this.viewport = this.innerPanel;
	}
}