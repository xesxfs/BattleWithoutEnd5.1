class BasePanel extends BaseUI {
	public constructor() {
		super();
	}

	/**
 * 显示
 * @lock 是否锁定屏幕(增加半透明黑色背景)
 * @click 是否点击空白处可关闭弹框
 */
	public show(lock: boolean = true, click: boolean = true) {
		// App.PopUpManager.addPopUp(this, lock, click);
	}

	/**隐藏*/
	public hide() {
		// App.PopUpManager.removePopUp(this);
	}
}