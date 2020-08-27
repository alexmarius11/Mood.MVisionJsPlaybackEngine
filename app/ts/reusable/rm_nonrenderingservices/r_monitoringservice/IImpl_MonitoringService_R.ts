import amNonRenderingServices = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_monitoringservice/I_MonitoringService");

import rmNonRenderingServices = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_monitoringservice/R_MonitoringService");
                                                     
                                                     

export module rm_nonrenderingservices
{
  export class IImpl_MonitoringService_R implements amNonRenderingServices.am_nonrenderingservices.I_MonitoringService
  {
    _name: string;    

    //----------- owner
    _owner: rmNonRenderingServices.rm_nonrenderingservices.R_MonitoringService;

    //----------- constructor 
    constructor(owner: rmNonRenderingServices.rm_nonrenderingservices.R_MonitoringService)  
    {
      this._owner = owner;  
    }
  }
} 