class MagicOutterPanel extends OutterPanel {
	public constructor() {
		super(390, 700);
		this.setInner();
	}
	public setInner() {
		this.innerPanel = new MagicInnerPanel();
		this.viewport = this.innerPanel;
	}
}