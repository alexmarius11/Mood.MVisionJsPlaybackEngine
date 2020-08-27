import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amControlParamsStatus = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Status");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralConfig  = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

export module am_renderingservices
{
  export interface AE_ControlParams_StatusPool extends amGeneral.am_general.A_Entity
  {

    initPool( nbPrepareParams : number, error    : amGeneralError.am_general.A_Error) : number;

    addStatusParams(controlStatusParams : amControlParamsStatus.am_renderingservices.AE_ControlParams_Status) : number ;

    reset() : void;
    copy(src : AE_ControlParams_StatusPool) : number;

    getStatusParamsList() : Array<amControlParamsStatus.am_renderingservices.AE_ControlParams_Status> ;
    
    getFreeStatusParams() : amControlParamsStatus.am_renderingservices.AE_ControlParams_Status;
    releaseStatusParams(controlStatusParams : amControlParamsStatus.am_renderingservices.AE_ControlParams_Status) : boolean;
  }
} 