import amNonRenderingServices = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_livecommandsservice/I_LiveCommandsService");

import rmNonRenderingServices = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_livecommandsservice/R_LiveCommandsService");
                                                     
                                                     

export module rm_nonrenderingservices
{
  export class IImpl_LiveCommandsService_R implements amNonRenderingServices.am_nonrenderingservices.I_LiveCommandsService
  {
    _name: string;    

    //----------- owner
    _owner: rmNonRenderingServices.rm_nonrenderingservices.R_LiveCommandsService;

    //----------- constructor 
    constructor(owner: rmNonRenderingServices.rm_nonrenderingservices.R_LiveCommandsService)  
    {
      this._owner = owner;  
    }
  }
} 