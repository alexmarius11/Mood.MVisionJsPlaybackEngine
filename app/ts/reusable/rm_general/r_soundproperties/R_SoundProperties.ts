import amGeneralSoundProperties     = require("../../../../../app/ts/abstract/am_general/a_soundproperties/A_SoundProperties");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_SoundProperties extends rmGeneralEntity.rm_general.R_Entity
                                  implements amGeneralSoundProperties.am_general.A_SoundProperties
  {
    _volumeLevel  : number ;
    _mute         : boolean;
    _soundBalance : number ;
    _soundMode    : string ;
    _soundSpeaker : string ;


    //----------- constructor 
    constructor()  
    {  
      super();

      this._volumeLevel  = 50;
      this._mute         = false;
      this._soundBalance = 50 ;
      this._soundMode    = "normal";
      this._soundSpeaker = "tvsignage";
    }
    
    //----------------------------
    public setVolumeLevel(volumeLevel: number)   : void
    {
      this._volumeLevel  = volumeLevel;
    }

    //------------------------------
    public getVolumeLevel() : number
    {
      return this._volumeLevel;
    }

    //---------------------------------------
    public setMute(mute: boolean)   : void
    {
      this._mute = mute;
    }

    //---------------------------------------
    public isMute() : boolean
    {
      return this._mute;
    }
    
    //--------------------------------
    public setSoundBalance(soundBalance: number)   : void
    {
      this._soundBalance = soundBalance ;
    }

    //---------------------------------
    public getSoundBalance() : number
    {
      return this._soundBalance ;
    }

    //----------------------------------
    //"normal"
    public setSoundMode(soundMode: string)   : void
    {
      this._soundMode  = soundMode;
    }

    //------------------------------------
    public getSoundMode() : string
    {
      return this._soundMode ;
    }

    //-----------------------------------
    public setSoundSpeaker(soundSpeaker: string)   : void
    {
      this._soundSpeaker = soundSpeaker;
    }

    //---------------------------
    public getSoundSpeaker() : string
    {
       return this._soundSpeaker;
    }

  }
} 