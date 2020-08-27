import amRenderingServices = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingzone/I_RenderingZone");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingzone/R_RenderingZone");
      
import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
                                                     
import amPrepareParams = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");
import amStopParams    = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Stop");
                                                    

export module rm_renderingservices
{
  export class IImpl_RenderingZone_R implements amRenderingServices.am_renderingservices.I_RenderingZone
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.R_RenderingZone;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.R_RenderingZone)  
    {
      this._owner = owner;  
    }

    //---------------------
    public stopZone( stopParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                     error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      return this._owner.stopZone( stopParams, error, context, callback) ;
    }

    //---------------------
    public destroyZone( stopParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      return this._owner.destroyZone( stopParams, error, context, callback) ;
    }

  }
} 