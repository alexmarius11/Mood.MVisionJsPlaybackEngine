import amGeneralUsageData     = require("../../../../../app/ts/abstract/am_general/a_usagedata/A_UsageData");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_UsageData  extends rmGeneralEntity.rm_general.R_Entity
                             implements amGeneralUsageData.am_general.A_UsageData
  {
    //--- properties
    _systemUptime : string;
    _systemTotalUsed : string;

    //----------- constructor 
    constructor()  
    {  
      super();
      this._systemUptime = "";
      this._systemTotalUsed = "";
    }

    //----------------------------
    public getSystemUptime () : string 
    {
      return this._systemUptime;
    }

    //----------------------------
    public setSystemUptime (systemUptime : string) : void
    {
      this._systemUptime = systemUptime;
    }

    //----------------------------
    public getSystemTotalUsed () : string 
    {
      return this._systemTotalUsed;
    }

    //----------------------------
    public setSystemTotalUsed (systemTotalUsed : string) : void
    {
      this._systemTotalUsed = systemTotalUsed;
    }

  }
} 