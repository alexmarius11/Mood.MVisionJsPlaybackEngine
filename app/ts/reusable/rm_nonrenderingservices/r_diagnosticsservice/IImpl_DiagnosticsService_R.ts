import amNonRenderingServices = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_diagnosticsservice/I_DiagnosticsService");

import rmNonRenderingServices = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_diagnosticsservice/R_DiagnosticsService");
                                                     
                                                     

export module rm_nonrenderingservices
{
  export class IImpl_DiagnosticsService_R implements amNonRenderingServices.am_nonrenderingservices.I_DiagnosticsService
  {
    _name: string;    

    //----------- owner
    _owner: rmNonRenderingServices.rm_nonrenderingservices.R_DiagnosticsService;

    //----------- constructor 
    constructor(owner: rmNonRenderingServices.rm_nonrenderingservices.R_DiagnosticsService)  
    {
      this._owner = owner;  
    }
  }
} 