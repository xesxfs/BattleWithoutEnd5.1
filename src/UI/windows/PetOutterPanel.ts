class PetOutterPanel extends OutterPanel {
	public constructor() {
		super(390, 700)
		this.setInner();
	}
	public setInner() {
		this.innerPanel = new PetInnerPanel();
		this.viewport = this.innerPanel;
	}
}