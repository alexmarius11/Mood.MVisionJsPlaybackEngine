import amNonRenderingServices = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_envupdaterservice/I_EnvUpdaterService");

import rmNonRenderingServices = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_envupdaterservice/R_EnvUpdaterService");
                                                     
                                                     

export module rm_nonrenderingservices
{
  export class IImpl_EnvUpdaterService_R implements amNonRenderingServices.am_nonrenderingservices.I_EnvUpdaterService
  {
    _name: string;    

    //----------- owner
    _owner: rmNonRenderingServices.rm_nonrenderingservices.R_EnvUpdaterService;

    //----------- constructor 
    constructor(owner: rmNonRenderingServices.rm_nonrenderingservices.R_EnvUpdaterService)  
    {
      this._owner = owner;  
    }
  }
} 