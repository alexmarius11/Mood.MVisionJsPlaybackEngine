import amGeneralUsagePermissions     = require("../../../../../app/ts/abstract/am_general/a_usagepermissions/A_UsagePermissions");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_UsagePermissions  extends rmGeneralEntity.rm_general.R_Entity
                             implements amGeneralUsagePermissions.am_general.A_UsagePermissions
  {
    //--- properties
    _strRemoteKeyOperationMode: string; //remoteKeyOperationMode: Signage.KeyOperationMode.POWER_ONLY,
    _strLocalKeyOperationMode: string;  //localKeyOperationMode: Signage.KeyOperationMode.POWER_ONLY,

    //----------- constructor 
    constructor()  
    {  
      super();
      this._strRemoteKeyOperationMode = ""; 
      this._strLocalKeyOperationMode  = ""; 
      }

    //--------------------------------
    public getRemoteKeyOperationMode() : string
    {
      return this._strRemoteKeyOperationMode;
    }

    //--------------------------------
    public setRemoteKeyOperationMode(strRemoteKeyOperationMode: string) : void
    {
      this._strRemoteKeyOperationMode = strRemoteKeyOperationMode;
    }

    //--------------------------------
    public getLocalKeyOperationMode() : string
    {
      return this._strLocalKeyOperationMode;
    }

    //--------------------------------
    public setLocalKeyOperationMode(strLocalKeyOperationMode: string) : void
    {
      this._strLocalKeyOperationMode = strLocalKeyOperationMode;
    }

  }
} 