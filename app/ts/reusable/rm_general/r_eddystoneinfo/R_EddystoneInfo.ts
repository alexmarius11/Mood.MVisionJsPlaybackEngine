import amGeneralEddystoneInfo     = require("../../../../../app/ts/abstract/am_general/a_eddystoneinfo/A_EddystoneInfo");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_EddystoneInfo  extends rmGeneralEntity.rm_general.R_Entity
                             implements amGeneralEddystoneInfo.am_general.A_EddystoneInfo
  {
    //--- properties
		_enabled    : boolean;
		_frameType  : string ; 
		_frameData  : string ; ///"http://www.lge.com"

    //----------- constructor 
    constructor()  
    {  
      super();
      this._enabled    = false; //: true,
      this._frameType  = "url"; // frame : DeviceInfo.EddystoneFrame.URL,
      this._frameData  = "" ;   //: "http://www.lge.com"
    }

    //------------------------------
    public isEnabled() : boolean
    {
      return this._enabled;
    }
    //------------------------------
    public setEnabled(enabled : boolean) : void
    {
      this._enabled = enabled;
    }

    //------------------------------
    public getFrameType() : string
    {
      return this._frameType;
    }

    //------------------------------
    public setFrameType(frameType : string) : void
    {
      this._frameType = frameType;
    }

    //------------------------------
    public getFrameData() : string
    {
      return this._frameData;
    }

    //------------------------------
    public setFramedata(frameData : string) : void 
    {
      this._frameData = frameData;
    }

  }
} 