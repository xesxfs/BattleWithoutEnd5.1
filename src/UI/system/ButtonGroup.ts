class ButtonGroup {
	private buttonList: Array<ButtonCell>;
	public constructor() {
		this.buttonList = new Array<ButtonCell>();
	}

	public addButton(cell: ButtonCell): boolean {
		var length: number = this.buttonList.length;
		var idx: number = 0;
		while (idx < length) {
			if (this.buttonList[idx] == cell) {
				return false;
			}
			idx++;
		}
		this.buttonList.push(cell);
		cell.buttonGroup = this;
		return true;
	}

	public setDown(cell: ButtonCell) {
		var length: number = this.buttonList.length;
		var idx: number = 0;
		while (idx < length) {
			if (this.buttonList[idx] == cell) {
				cell.setDown();
			}
			else {
				this.buttonList[idx].setBefore();
			}
			idx++;
		}
	}
}