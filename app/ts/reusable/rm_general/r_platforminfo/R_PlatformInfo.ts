import amGeneralPlatformInfo     = require("../../../../../app/ts/abstract/am_general/a_platforminfo/A_PlatformInfo");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_PlatformInfo  extends rmGeneralEntity.rm_general.R_Entity
                             implements amGeneralPlatformInfo.am_general.A_PlatformInfo
  {
    //--- properties
    _hardwareVersion  : string;
    _modelName        : string;
    _osdResolution    : string;
    _platformName     : string;
    _sdkVersion       : string;
    _serialNumber     : string;
    _firmwareVersion  : string;

    //----------- constructor 
    constructor()  
    {  
      super();
      this._hardwareVersion  = "";
      this._modelName        = "";
      this._osdResolution    = "";
      this._platformName     = "";
      this._sdkVersion       = "";
      this._serialNumber     = "";
      this._firmwareVersion  = "";
    }

    //----------------------------------
    public getHardwareVersion() : string
    {
      return this._hardwareVersion;
    }

    //----------------------------------
    public getModelName() : string
    {
      return this._modelName;
    }

    //----------------------------------
    public getOSDResolution() : string
    {
      return this._osdResolution;
    }

    //----------------------------------
    public getPlatformName() : string
    {
      return this._osdResolution;
    }

    //----------------------------------
    public getSDKVersion() : string
    {
      return this._sdkVersion;
    }

    //----------------------------------
    public getSerialNumber() : string
    {
      return this._serialNumber;
    }

    //----------------------------------
    public getFirmwareVersion() : string
    {
      return this._serialNumber;
    }
    
  }
} 