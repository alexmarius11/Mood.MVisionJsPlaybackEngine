import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
                                                     
import amPrepareParams = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");


export module am_renderingservices
{
  export interface I_RenderingService_Config extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    getCrtPrepareParams() : amPrepareParams.am_renderingservices.AE_ControlParams_Prepare;
    setCrtPrepareParams(crtPrepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare) : void;

    getPrevPrepareParams() : amPrepareParams.am_renderingservices.AE_ControlParams_Prepare;
    setPrevPrepareParams(prevPrepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare) : void;

  }
} 