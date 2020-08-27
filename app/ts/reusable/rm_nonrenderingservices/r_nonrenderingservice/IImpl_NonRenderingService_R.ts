import amRenderingServices = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_nonrenderingservice/I_NonRenderingService");

import rmNonRenderingServices = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_nonrenderingservice/R_NonRenderingService");
                                                     

export module rm_nonrenderingservices
{
  export class IImpl_NonRenderingService_R implements amRenderingServices.am_nonrenderingservices.I_NonRenderingService
  {
    _name: string;    

    //----------- owner
    _owner: rmNonRenderingServices.rm_nonrenderingservices.R_NonRenderingService;

    //----------- constructor 
    constructor(owner: rmNonRenderingServices.rm_nonrenderingservices.R_NonRenderingService)  
    {
      this._owner = owner;  
    }
  }
} 