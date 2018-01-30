class MagicOutterPanel extends OutterPanel {
	public constructor() {
		super(200, 540);
		this.setInner();
	}
	public setInner() {
		this.innerPanel = new MagicInnerPanel();
		this.viewport = this.innerPanel;
	}
}