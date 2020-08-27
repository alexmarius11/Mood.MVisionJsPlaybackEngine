import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFirmwareProperties = require("../../../../../app/ts/abstract/am_general/a_firmwareproperties/A_FirmwareProperties");

export module am_transversalservices
{
  export interface I_SDK_FirmwareSetup extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    downloadFirmware(firmwareProperties: amGeneralFirmwareProperties.am_general.A_FirmwareProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_downloadFirmware(firmwareProperties: amGeneralFirmwareProperties.am_general.A_FirmwareProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    upgradeFirmware(firmwareProperties: amGeneralFirmwareProperties.am_general.A_FirmwareProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_upgradeFirmware(firmwareProperties: amGeneralFirmwareProperties.am_general.A_FirmwareProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getFirmwareUpgradeStatus(firmwareProperties: amGeneralFirmwareProperties.am_general.A_FirmwareProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void         
    promise_getFirmwareUpgradeStatus(firmwareProperties: amGeneralFirmwareProperties.am_general.A_FirmwareProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    
  }
} 