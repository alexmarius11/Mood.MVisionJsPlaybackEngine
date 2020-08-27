import amCoreServicesIRenderingController = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/I_RenderingController");

import rmCoreServicesRenderingController = require("../../../../../app/ts/reusable/rm_coreservices/r_renderingcontroller/R_RenderingController");
                                                     
                                                     

export module rm_coreservices
{
  export class IImpl_RenderingController_R implements  amCoreServicesIRenderingController.am_coreservices.I_RenderingController
  {
    _name: string;    

    //----------- owner
    _owner: rmCoreServicesRenderingController.rm_coreservices.R_RenderingController;

    //----------- constructor 
    constructor(owner: rmCoreServicesRenderingController.rm_coreservices.R_RenderingController)  
    {
      this._owner = owner;  
    }
  }
} 