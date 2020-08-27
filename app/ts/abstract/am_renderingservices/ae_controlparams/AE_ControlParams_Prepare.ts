import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amRenderParametersAllParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_AllParameters");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

export module am_renderingservices
{
  export interface AE_ControlParams_Prepare extends amGeneral.am_general.A_Entity
  {
    reset() : void;
    copy(src : AE_ControlParams_Prepare) : number ;
    
	  getRenderParams() : amRenderParametersAllParameters.am_renderingservices.AE_RenderParams_AllParameters;
    
    isFree() : boolean ;
    setIsFree(isFree: boolean)  : boolean;

  }

} 