import amRenderingServiceIConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingservice/I_RenderingService_Config");

import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
                                                     
import amPrepareParams = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");


import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService");
                                                     

export module rm_renderingservices
{
  export class IImpl_RenderingService_Config implements amRenderingServiceIConfig.am_renderingservices.I_RenderingService_Config
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.R_RenderingService;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.R_RenderingService)  
    {
      this._owner = owner;  
    }

    //-------------------------
    public getCrtPrepareParams() : amPrepareParams.am_renderingservices.AE_ControlParams_Prepare
    {
      return this._owner.getCrtPrepareParams();
    }

    //--------------------------
    public setCrtPrepareParams(crtPrepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare) : void
    {
      return this._owner.setCrtPrepareParams(crtPrepareParams);    }

    //-------------------------
    public getPrevPrepareParams() : amPrepareParams.am_renderingservices.AE_ControlParams_Prepare
    {
      return this._owner.getPrevPrepareParams();
    }

    //--------------------------
    public setPrevPrepareParams(prevPrepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare) : void
    {
      return this._owner.setCrtPrepareParams(prevPrepareParams);
    }

  }
} 