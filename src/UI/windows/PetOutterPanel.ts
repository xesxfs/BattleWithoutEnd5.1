class PetOutterPanel extends OutterPanel {
	public constructor() {
		super(200, 495)
		this.setInner();
	}
	public setInner() {
		this.innerPanel = new PetInnerPanel();
		this.viewport = this.innerPanel;
	}
}