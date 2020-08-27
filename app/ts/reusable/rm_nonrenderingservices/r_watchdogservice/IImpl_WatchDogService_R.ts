import amNonRenderingServices = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_watchdogservice/I_WatchDogService");

import rmNonRenderingServices = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_watchdogservice/R_WatchDogService");
                                                     
                                                     

export module rm_nonrenderingservices
{
  export class IImpl_WatchDogService_R implements amNonRenderingServices.am_nonrenderingservices.I_WatchDogService
  {
    _name: string;    

    //----------- owner
    _owner: rmNonRenderingServices.rm_nonrenderingservices.R_WatchDogService;

    //----------- constructor 
    constructor(owner: rmNonRenderingServices.rm_nonrenderingservices.R_WatchDogService)  
    {
      this._owner = owner;  
    }
  }
} 