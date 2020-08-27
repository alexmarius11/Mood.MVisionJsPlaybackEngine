import amNonRenderingServices = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_sendlogservice/I_SendLogService");

import rmNonRenderingServices = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_sendlogservice/R_SendLogService");
                                                     
                                                     

export module rm_nonrenderingservices
{
  export class IImpl_SendLogService_R implements amNonRenderingServices.am_nonrenderingservices.I_SendLogService
  {
    _name: string;    

    //----------- owner
    _owner: rmNonRenderingServices.rm_nonrenderingservices.R_SendLogService;

    //----------- constructor 
    constructor(owner: rmNonRenderingServices.rm_nonrenderingservices.R_SendLogService)  
    {
      this._owner = owner;  
    }
  }
} 