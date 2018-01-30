
/**
 *
 * @author chenwei
 *
 */
class Emitter {


    public constructor() {
    }

    private static _dispatcher: egret.EventDispatcher = new egret.EventDispatcher();

    public static emit(type: string,data?:any): void {
        
         var event = new egret.Event(type);    
         event.data=data;
        this._dispatcher.dispatchEvent(event);
    }


    public static dispatchEvent(type: string,data?:any){
        this.emit(type,data);
    }

    public static addEventListener(type: string,listener: Function,thisObject: any,useCapture?: boolean,priority?: number): void {

        this._dispatcher.addEventListener(type,listener,thisObject,useCapture,priority);

    }

    public static once(type: string,listener: Function,thisObject: any,useCapture?: boolean,priority?: number): void {

        this._dispatcher.once(type,listener,thisObject,useCapture,priority);

    }
    
    public static on(type: string,listener: Function,thisObject: any,useCapture?: boolean,priority?: number): void {
        this.addEventListener(type, listener, thisObject,useCapture, priority);
    }
    
    public static removeEventListener(type: string,listener: Function,thisObject: any,useCapture?: boolean): void {

        this._dispatcher.removeEventListener(type,listener,thisObject,useCapture);
    }

}
