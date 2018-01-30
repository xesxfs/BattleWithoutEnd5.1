class BaseUI extends eui.Component {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onEnable, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
	}

	/**组件创建完毕*/
	protected childrenCreated() {
		super.childrenCreated();

	}

	/**添加到场景中*/
	protected onEnable() {

	}

	/**从场景中移除*/
	protected onRemove() {

	}

	/**设置居中对齐*/
	public setCenter() {
		this.horizontalCenter = 0;
		this.verticalCenter = 0;

	}

	/**设置底部对齐*/
	public setBottom() {
		this.bottom = 0;
	}


	/**移除*/
	public remove() {
		this.parent && this.parent.removeChild(this);
	}

}