import amNonRenderingServices = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_chronservice/I_ChronService");

import rmNonRenderingServices = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_chronservice/R_ChronService");
                                                     
                                                     

export module rm_nonrenderingservices
{
  export class IImpl_ChronService_R implements amNonRenderingServices.am_nonrenderingservices.I_ChronService
  {
    _name: string;    

    //----------- owner
    _owner: rmNonRenderingServices.rm_nonrenderingservices.R_ChronService;

    //----------- constructor 
    constructor(owner: rmNonRenderingServices.rm_nonrenderingservices.R_ChronService)  
    {
      this._owner = owner;  
    }
  }
} 