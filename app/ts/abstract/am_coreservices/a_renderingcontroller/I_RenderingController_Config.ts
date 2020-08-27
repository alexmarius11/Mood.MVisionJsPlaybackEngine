import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amPrepareParams = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");

export module am_coreservices
{
  export interface I_RenderingController_Config extends amGeneral.am_general.I_Interface
  {
    _name: string;    

  }
} 