class InnerPanel extends eui.Group {
	public contentH: number = 0;
	public constructor() {
		super();
	}

	public get contentHeight(): number {
		return this.contentH + 20;
	}

}