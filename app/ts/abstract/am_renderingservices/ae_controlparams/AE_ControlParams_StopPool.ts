import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amControlParamsStop = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Stop");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralConfig  = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

export module am_renderingservices
{
  export interface AE_ControlParams_StopPool extends amGeneral.am_general.A_Entity
  {

    initPool( nbPrepareParams : number, error    : amGeneralError.am_general.A_Error) : number;

    addStopParams(controlPrepareParams : amControlParamsStop.am_renderingservices.AE_ControlParams_Stop) : number ;

    reset() : void;
    copy(src : AE_ControlParams_StopPool) : number;

    getStopParamsList() : Array<amControlParamsStop.am_renderingservices.AE_ControlParams_Stop> ;
    
    getFreeStopParams() : amControlParamsStop.am_renderingservices.AE_ControlParams_Stop;
    releaseStopParams(controlPrepareParams : amControlParamsStop.am_renderingservices.AE_ControlParams_Stop) : boolean;
  }
} 