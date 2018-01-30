
class SoundManager extends SingleClass {
    private soundList = {};                    //声音列表
    private bgmChannel: egret.SoundChannel;     //背景音声道
    private _allowPlayEffect: boolean = true;   //是否允许播放音效
    private _allowPlayBGM: boolean = true;      //是否允许播放背景音乐
    private _effectVolume: number = 1;          //音效音量
    private _bgmVolume: number = 1;             //背景音量

    private girlCard = [];                     //女生出牌
    private girlAct = [];                      //女生动作
    private boyCard = [];                      //男生出牌
    private boyAct = [];                       //男生动作

    private gd_girlCard = [];                  //广东话
    private gd_girlAct = [];
    private gd_boyCard = [];
    private gd_boyAct = [];

    private boyChat = [];                      //聊天语音
    private girlChat = [];
    private gd_boyChat = [];
    private gd_girlChat = [];

    public isGuangDongSpeak: boolean = false; //游戏广东话、普通话

    public static win: string = "audio_win_mp3";                  //胜利
    public static lose: string = "audio_lose_mp3";                //输
    public static warn: string = "audio_warn_mp3";                //倒计时小于3秒
    public static hall_click: string = "audio_button_click_mp3";  //大厅点击按钮
    public static clickCard: string = "audio_card_click_mp3";     //点击牌
    public static enter: string = "audio_enter_mp3";              //玩家进入
    public static bgm: string = "Audio_Game_Back_mp3";            //背景音乐
    public static user_left: string = "audio_left_mp3";           //玩家离开
    public static liuju: string = "audio_liuju_mp3";              //流局
    public static ready: string = "audio_ready_mp3";              //准备
    public static shazi: string = "audio_shaizi_mp3";             //骰子
    public static tuoGuan: string = "audio_tuo_guan_mp3";         //托管
    public static button: string = "audio_button_click_mp3"       //按钮

    public constructor() {
        super();
    }



	/**
	 * 播放音效
	 * @param soundName 声音名
	 * @param startTime 播放起始位置
	 * @param loops 循环次数
	 */
    public playEffect(soundName: string, startTime: number = 0, loops: number = 1) {
        if (this.allowPlayEffect == false) {
            return;
        }
        //从声音列表中获取,声音列表中不存在，则从加载资源中获取
        var sound: egret.Sound = this.soundList[soundName];
        if (sound == null) {
            sound = RES.getRes(soundName);
            if (sound != null) {
                this.soundList[soundName] = sound
            } else {
                //TODO 从resource/assets中加载，则使用一个加载一个，而不需要全部加载
            }
        }
        if (sound) {
            sound.type = egret.Sound.EFFECT;
            var channel: egret.SoundChannel = sound.play(startTime, loops);
            channel.volume = this._effectVolume;
        }
    }

	/**
	 * 播放背景音乐
	 * @param bgmName 背景音名
	 * @param startTime 播放起始位置
	 * @param loops 循环次数
	 */
    public playBGM(bgmName: string, startTime: number = 0, loops: number = Number.MAX_VALUE) {

        this.stopBGM();
        var bgm: egret.Sound = this.soundList[bgmName];
        if (bgm == null) {
            bgm = RES.getRes(bgmName);
            bgm && (this.soundList[bgmName] = bgm);
        }
        if (bgm) {
            bgm.type = egret.Sound.MUSIC;
            this.bgmChannel = bgm.play(startTime, loops);
            this.bgmChannel.volume = this._bgmVolume;
        }

    }

    /**停止背景音乐*/
    public stopBGM() {
        if (this.bgmChannel) {
            this.bgmChannel.stop();
            this.bgmChannel = null;
        }
    }

    /**获取是否允许播放音效*/
    public get allowPlayEffect() {
        return this._allowPlayEffect;
    }

    /**设置是否允许播放音效*/
    public set allowPlayEffect(bAllow: boolean) {
        this._allowPlayEffect = bAllow;
    }

    /**获取是否允许播放背景音*/
    public get allowPlayBGM() {
        return this._allowPlayBGM;
    }

    /**设置是否允许播放背景音*/
    public set allowPlayBGM(bAllow: boolean) {
        this._allowPlayBGM = bAllow;
        if (this._allowPlayBGM == false) {
            this.stopBGM();
        } else {
            this.playBGM(SoundManager.bgm);
        }
    }

    /**获取音效音量*/
    public get effectVolume() {
        return this._effectVolume;
    }

    /**设置音效音量*/
    public set effectVolume(value: number) {
        this._effectVolume = value;
    }

    /**获取BGM音量*/
    public get bgmVolume() {
        return this._bgmVolume;
    }

    /**设置BGM音量*/
    public set bgmVolume(value: number) {
        this._bgmVolume = value;
        if (this.bgmChannel) {
            this.bgmChannel.volume = this._bgmVolume;
        }
    }

    /**停止所有声音 */
    public stopAllSound() {
        this.stopBGM();
    }
}
