var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var SoundManager = (function (_super) {
    __extends(SoundManager, _super);
    function SoundManager() {
        var _this = _super.call(this) || this;
        _this.soundList = {}; //声音列表
        _this._allowPlayEffect = true; //是否允许播放音效
        _this._allowPlayBGM = true; //是否允许播放背景音乐
        _this._effectVolume = 1; //音效音量
        _this._bgmVolume = 1; //背景音量
        _this.girlCard = []; //女生出牌
        _this.girlAct = []; //女生动作
        _this.boyCard = []; //男生出牌
        _this.boyAct = []; //男生动作
        _this.gd_girlCard = []; //广东话
        _this.gd_girlAct = [];
        _this.gd_boyCard = [];
        _this.gd_boyAct = [];
        _this.boyChat = []; //聊天语音
        _this.girlChat = [];
        _this.gd_boyChat = [];
        _this.gd_girlChat = [];
        _this.isGuangDongSpeak = false; //游戏广东话、普通话
        return _this;
    }
    /**
     * 播放音效
     * @param soundName 声音名
     * @param startTime 播放起始位置
     * @param loops 循环次数
     */
    SoundManager.prototype.playEffect = function (soundName, startTime, loops) {
        if (startTime === void 0) { startTime = 0; }
        if (loops === void 0) { loops = 1; }
        if (this.allowPlayEffect == false) {
            return;
        }
        //从声音列表中获取,声音列表中不存在，则从加载资源中获取
        var sound = this.soundList[soundName];
        if (sound == null) {
            sound = RES.getRes(soundName);
            if (sound != null) {
                this.soundList[soundName] = sound;
            }
            else {
                //TODO 从resource/assets中加载，则使用一个加载一个，而不需要全部加载
            }
        }
        if (sound) {
            sound.type = egret.Sound.EFFECT;
            var channel = sound.play(startTime, loops);
            channel.volume = this._effectVolume;
        }
    };
    /**
     * 播放背景音乐
     * @param bgmName 背景音名
     * @param startTime 播放起始位置
     * @param loops 循环次数
     */
    SoundManager.prototype.playBGM = function (bgmName, startTime, loops) {
        if (startTime === void 0) { startTime = 0; }
        if (loops === void 0) { loops = Number.MAX_VALUE; }
        this.stopBGM();
        var bgm = this.soundList[bgmName];
        if (bgm == null) {
            bgm = RES.getRes(bgmName);
            bgm && (this.soundList[bgmName] = bgm);
        }
        if (bgm) {
            bgm.type = egret.Sound.MUSIC;
            this.bgmChannel = bgm.play(startTime, loops);
            this.bgmChannel.volume = this._bgmVolume;
        }
    };
    /**停止背景音乐*/
    SoundManager.prototype.stopBGM = function () {
        if (this.bgmChannel) {
            this.bgmChannel.stop();
            this.bgmChannel = null;
        }
    };
    Object.defineProperty(SoundManager.prototype, "allowPlayEffect", {
        /**获取是否允许播放音效*/
        get: function () {
            return this._allowPlayEffect;
        },
        /**设置是否允许播放音效*/
        set: function (bAllow) {
            this._allowPlayEffect = bAllow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoundManager.prototype, "allowPlayBGM", {
        /**获取是否允许播放背景音*/
        get: function () {
            return this._allowPlayBGM;
        },
        /**设置是否允许播放背景音*/
        set: function (bAllow) {
            this._allowPlayBGM = bAllow;
            if (this._allowPlayBGM == false) {
                this.stopBGM();
            }
            else {
                this.playBGM(SoundManager.bgm);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoundManager.prototype, "effectVolume", {
        /**获取音效音量*/
        get: function () {
            return this._effectVolume;
        },
        /**设置音效音量*/
        set: function (value) {
            this._effectVolume = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoundManager.prototype, "bgmVolume", {
        /**获取BGM音量*/
        get: function () {
            return this._bgmVolume;
        },
        /**设置BGM音量*/
        set: function (value) {
            this._bgmVolume = value;
            if (this.bgmChannel) {
                this.bgmChannel.volume = this._bgmVolume;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**停止所有声音 */
    SoundManager.prototype.stopAllSound = function () {
        this.stopBGM();
    };
    SoundManager.win = "audio_win_mp3"; //胜利
    SoundManager.lose = "audio_lose_mp3"; //输
    SoundManager.warn = "audio_warn_mp3"; //倒计时小于3秒
    SoundManager.hall_click = "audio_button_click_mp3"; //大厅点击按钮
    SoundManager.clickCard = "audio_card_click_mp3"; //点击牌
    SoundManager.enter = "audio_enter_mp3"; //玩家进入
    SoundManager.bgm = "Audio_Game_Back_mp3"; //背景音乐
    SoundManager.user_left = "audio_left_mp3"; //玩家离开
    SoundManager.liuju = "audio_liuju_mp3"; //流局
    SoundManager.ready = "audio_ready_mp3"; //准备
    SoundManager.shazi = "audio_shaizi_mp3"; //骰子
    SoundManager.tuoGuan = "audio_tuo_guan_mp3"; //托管
    SoundManager.button = "audio_button_click_mp3"; //按钮
    return SoundManager;
}(SingleClass));
__reflect(SoundManager.prototype, "SoundManager");
