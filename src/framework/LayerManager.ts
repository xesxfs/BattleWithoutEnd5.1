

class LayerManager extends SingleClass {
    /**根容器*/
    private rootLayer: eui.UILayer;
    /**场景层*/
    public sceneLayer: eui.UILayer;
    /**弹框层*/
    public popLayer: eui.UILayer;
    /**消息层*/
    public msgLayer: eui.UILayer;


    public constructor() {
        super();
        this.init();
    }

    private init() {
        this.rootLayer = new eui.UILayer();
        this.rootLayer.percentWidth = 100;
        this.rootLayer.percentHeight = 100;
        this.rootLayer.touchEnabled = false;
        egret.MainContext.instance.stage.addChild(this.rootLayer);

        this.sceneLayer = new eui.UILayer();
        this.sceneLayer.touchEnabled = false;
        this.rootLayer.addChild(this.sceneLayer);

        this.popLayer = new eui.UILayer();
        this.popLayer.touchEnabled = false;
        this.rootLayer.addChild(this.popLayer);

        this.msgLayer = new eui.UILayer();
        this.msgLayer.touchEnabled = false;
        this.rootLayer.addChild(this.msgLayer);
    }



} 