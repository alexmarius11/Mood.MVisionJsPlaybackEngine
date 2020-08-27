import amGeneralSignageInfo     = require("../../../../../app/ts/abstract/am_general/a_signageinfo/A_SignageInfo");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_SignageInfo  extends rmGeneralEntity.rm_general.R_Entity
                              implements amGeneralSignageInfo.am_general.A_SignageInfo
  {
    //--- properties
    _portraitMode: string;
		_ismMethod : string;
		_digitalAudioInputMode : string
		_checkScreen : string;

    //----------- constructor 
    constructor()  
    {  
      super();
      this._portraitMode = "";
      this._ismMethod    = "";
      this._digitalAudioInputMode = "";
      this._checkScreen = "";
    }

    //----------------------------------
    public getPortraitMode() : string
    {
      return this._portraitMode;
    }

    //----------------------------------
    public setPortraitMode(portraitMode : string) : void
    {
      this._portraitMode = portraitMode;
    }

    //----------------------------------
    public getISMMethod() : string
    {
      return this._ismMethod;
    }

    //----------------------------------
    public setISMMethod(ismMethod : string) : void
    {
      this._ismMethod = ismMethod;
    }
    
    //----------------------------------
    public getDigitalAudioInputMode() : string
    {
      return this._digitalAudioInputMode;
    }

    //----------------------------------
    public setDigitalAudioInputMode(digitalAudioInputMode : string) : void
    {
      this._digitalAudioInputMode = digitalAudioInputMode;
    }

    //----------------------------------
    public getCheckScreen() : string
    {
      return this._checkScreen;
    }

    //----------------------------------
    public setCheckScreen(checkScreen : string) : void
    {
      this._checkScreen = checkScreen;
    }

  }
} 