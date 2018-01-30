module Tool {
	export class MyEvent extends egret.Event {
		public static Change:string;
		public static Update:string;
		public static MyScroll:string;

		public constructor(even:string)
		{
			super(even);
		}

	}
}

Tool.MyEvent.Change = "change";
Tool.MyEvent.Update = "myupdate";
Tool.MyEvent.MyScroll = "myScroll";
// flash.extendsClass("tool.MyEvent","egret.Event")
