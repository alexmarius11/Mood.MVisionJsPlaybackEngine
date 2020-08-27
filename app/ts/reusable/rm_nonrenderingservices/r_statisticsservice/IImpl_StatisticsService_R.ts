import amNonRenderingServices = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_statisticsservice/I_StatisticsService");

import rmNonRenderingServices = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_statisticsservice/R_StatisticsService");
                                                     
                                                     

export module rm_nonrenderingservices
{
  export class IImpl_StatisticsService_R implements amNonRenderingServices.am_nonrenderingservices.I_StatisticsService
  {
    _name: string;    

    //----------- owner
    _owner: rmNonRenderingServices.rm_nonrenderingservices.R_StatisticsService;

    //----------- constructor 
    constructor(owner: rmNonRenderingServices.rm_nonrenderingservices.R_StatisticsService)  
    {
      this._owner = owner;  
    }
  }
} 