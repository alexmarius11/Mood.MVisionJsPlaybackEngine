import amNonRenderingServices = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_purgeservice/I_PurgeService");

import rmNonRenderingServices = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_purgeservice/R_PurgeService");
                                                     
                                                     

export module rm_nonrenderingservices
{
  export class IImpl_PurgeService_R implements amNonRenderingServices.am_nonrenderingservices.I_PurgeService
  {
    _name: string;    

    //----------- owner
    _owner: rmNonRenderingServices.rm_nonrenderingservices.R_PurgeService;

    //----------- constructor 
    constructor(owner: rmNonRenderingServices.rm_nonrenderingservices.R_PurgeService)  
    {
      this._owner = owner;  
    }
  }
} 