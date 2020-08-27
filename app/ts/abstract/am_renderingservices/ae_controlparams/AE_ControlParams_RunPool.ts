import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amControlParamsRun = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralConfig  = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

export module am_renderingservices
{
  export interface AE_ControlParams_RunPool extends amGeneral.am_general.A_Entity
  {
    initPool( nbPrepareParams : number, error    : amGeneralError.am_general.A_Error) : number;

    addRunParams(controlRunParams : amControlParamsRun.am_renderingservices.AE_ControlParams_Run) : number ;

    reset() : void;
    copy(src : AE_ControlParams_RunPool) : number;

    getRunParamsList() : Array<amControlParamsRun.am_renderingservices.AE_ControlParams_Run> ;
    
    getFreeRunParams() : amControlParamsRun.am_renderingservices.AE_ControlParams_Run;
    releaseRunParams(controlRunParams : amControlParamsRun.am_renderingservices.AE_ControlParams_Run) : boolean;
  }
} 