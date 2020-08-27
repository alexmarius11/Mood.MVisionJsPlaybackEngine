import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amControlParamsPrepare = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralConfig  = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

export module am_renderingservices
{
  export interface AE_ControlParams_PreparePool extends amGeneral.am_general.A_Entity
  {
    initPool(nbPrepareParams : number, error : amGeneralError.am_general.A_Error) : number;
    
    addPrepareParams(controlPrepareParams : amControlParamsPrepare.am_renderingservices.AE_ControlParams_Prepare) : number ;

    reset() : void;
    copy(src : AE_ControlParams_PreparePool) : number;

    getPrepareParamsList() : Array<amControlParamsPrepare.am_renderingservices.AE_ControlParams_Prepare> ;
    
    getFreePrepareParams() : amControlParamsPrepare.am_renderingservices.AE_ControlParams_Prepare;
    releasePrepareParams(controlPrepareParams : amControlParamsPrepare.am_renderingservices.AE_ControlParams_Prepare) : boolean;
  }
} 