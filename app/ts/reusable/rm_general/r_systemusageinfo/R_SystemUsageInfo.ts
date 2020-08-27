import amGeneralSystemUsageInfo     = require("../../../../../app/ts/abstract/am_general/a_systemusageinfo/A_SystemUsageInfo");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_SystemUsageInfo  extends rmGeneralEntity.rm_general.R_Entity
                             implements amGeneralSystemUsageInfo.am_general.A_SystemUsageInfo
  {
    //--- properties

    //----------- constructor 
    constructor()  
    {  
      super();
    }


  }
} 