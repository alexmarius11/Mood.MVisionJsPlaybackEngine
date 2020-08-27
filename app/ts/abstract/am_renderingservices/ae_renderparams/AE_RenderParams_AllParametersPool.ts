import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amRenderParametersAllParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_AllParameters");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

export module am_renderingservices
{
  export interface AE_RenderParams_AllParametersPool extends amGeneral.am_general.A_Entity
  {

    initPool(nbRenderParams: number, error: amGeneralError.am_general.A_Error) : number;
    addRenderParams(renderParams : amRenderParametersAllParameters.am_renderingservices.AE_RenderParams_AllParameters) : void ;

    reset() : void;
    copy(src : AE_RenderParams_AllParametersPool) : number;

    getAllParametersList() : Array<amRenderParametersAllParameters.am_renderingservices.AE_RenderParams_AllParameters> ;
    
    getFreeRenderParams() : amRenderParametersAllParameters.am_renderingservices.AE_RenderParams_AllParameters;
    releaseRenderParams(renderParams : amRenderParametersAllParameters.am_renderingservices.AE_RenderParams_AllParameters) : boolean;
  }
} 