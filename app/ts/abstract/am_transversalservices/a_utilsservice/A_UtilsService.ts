import amGeneral = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amTransversalServicesIUtilsService   = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_UtilsService");
import amTransversalServicesIUtilsNumbers   = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_Utils_Numbers");
import amTransversalServicesIUtilsStrings   = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_Utils_Strings");
import amTransversalServicesIUtilsDateTime  = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_Utils_DateTime");
import amTransversalServicesIUtilsWeb       = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_Utils_Web");
import amTransversalServicesIUtilsFiles     = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_Utils_Files");
import amTransversalServicesIUtilsGuid      = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_Utils_Guid");
import amTransversalServicesIUtilsConvertor = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_Utils_Convertor");
import amTransversalServicesIUtilsXMLJson   = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_Utils_XMLJson");

export module am_transversalservices
{
  export interface A_UtilsService extends amGeneral.am_general.A_Service 
  {
    _iUtilsService   : amTransversalServicesIUtilsService.am_transversalservices.I_UtilsService ;
    _iUtilsNumbers   : amTransversalServicesIUtilsNumbers.am_transversalservices.I_Utils_Numbers ;
    _iUtilsStrings   : amTransversalServicesIUtilsStrings.am_transversalservices.I_Utils_Strings ;
    _iUtilsDateTime  : amTransversalServicesIUtilsDateTime.am_transversalservices.I_Utils_DateTime ;
    _iUtilsWeb       : amTransversalServicesIUtilsWeb.am_transversalservices.I_Utils_Web ;
    _iUtilsFiles     : amTransversalServicesIUtilsFiles.am_transversalservices.I_Utils_Files ;
    _iUtilsGuid      : amTransversalServicesIUtilsGuid.am_transversalservices.I_Utils_Guid ;
    _iUtilsConvertor : amTransversalServicesIUtilsConvertor.am_transversalservices.I_Utils_Convertor ;
    _iUtilsXMLJson   : amTransversalServicesIUtilsXMLJson.am_transversalservices.I_Utils_XMLJson ;
  }
} 