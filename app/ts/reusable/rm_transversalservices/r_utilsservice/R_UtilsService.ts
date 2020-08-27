import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amTransversalServices  = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/A_UtilsService");
import amTransversalServicesIUtilsService   = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_UtilsService");
import amTransversalServicesIUtilsNumbers   = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_Utils_Numbers");
import amTransversalServicesIUtilsStrings   = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_Utils_Strings");
import amTransversalServicesIUtilsDateTime  = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_Utils_DateTime");
import amTransversalServicesIUtilsWeb       = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_Utils_Web");
import amTransversalServicesIUtilsFiles     = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_Utils_Files");
import amTransversalServicesIUtilsGuid      = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_Utils_Guid");
import amTransversalServicesIUtilsConvertor = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_Utils_Convertor");
import amTransversalServicesIUtilsXMLJson   = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_Utils_XMLJson");

import rmGeneral               = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");

import rmTransversalServicesIUtilsService   = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_UtilsService_R");
import rmTransversalServicesIUtilsNumbers   = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_Utils_Numbers_R");
import rmTransversalServicesIUtilsStrings   = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_Utils_Strings_R");
import rmTransversalServicesIUtilsDateTime  = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_Utils_DateTime_R");
import rmTransversalServicesIUtilsFiles     = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_Utils_Files_R");
import rmTransversalServicesIUtilsWeb       = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_Utils_Web_R");
import rmTransversalServicesIUtilsGuid      = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_Utils_Guid_R");
import rmTransversalServicesIUtilsConvertor = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_Utils_Convertor_R");
import rmTransversalServicesIUtilsXMLJson   = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/IImpl_Utils_XMLJson_R");

import amTransversalServicesSDKJsTV = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");

export module rm_transversalservices
{
  export class R_UtilsService extends rmGeneral.rm_general.R_Service 
                              implements amTransversalServices.am_transversalservices.A_UtilsService
  {
    //---------- interfaces
    _iUtilsService   : amTransversalServicesIUtilsService.am_transversalservices.I_UtilsService ;
    _iUtilsNumbers   : amTransversalServicesIUtilsNumbers.am_transversalservices.I_Utils_Numbers ;
    _iUtilsStrings   : amTransversalServicesIUtilsStrings.am_transversalservices.I_Utils_Strings ;
    _iUtilsDateTime  : amTransversalServicesIUtilsDateTime.am_transversalservices.I_Utils_DateTime ;
    _iUtilsWeb       : amTransversalServicesIUtilsWeb.am_transversalservices.I_Utils_Web ;
    _iUtilsFiles     : amTransversalServicesIUtilsFiles.am_transversalservices.I_Utils_Files ;
    _iUtilsGuid      : amTransversalServicesIUtilsGuid.am_transversalservices.I_Utils_Guid ;
    _iUtilsConvertor : amTransversalServicesIUtilsConvertor.am_transversalservices.I_Utils_Convertor ;
    _iUtilsXMLJson   : amTransversalServicesIUtilsXMLJson.am_transversalservices.I_Utils_XMLJson ;

    //----------- composants 
    _aLogService : amTransversalServicesLogService.am_transversalservices.A_LogService; 
    _aSDKJsTV    : amTransversalServicesSDKJsTV.am_transversalservices.A_SDK_JsTV; 

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);
      
      //this._aLogService = aLogService;
      //this._aSDKJsTV = aSDKJsTV;

      this._iUtilsService   = new rmTransversalServicesIUtilsService.rm_transversalservices.IImpl_UtilsService_R(this) ;
      this._iUtilsNumbers   = new rmTransversalServicesIUtilsNumbers.rm_transversalservices.IImpl_Utils_Numbers_R(this) ;
      this._iUtilsDateTime  = new rmTransversalServicesIUtilsDateTime.rm_transversalservices.IImpl_Utils_DateTime_R(this) ;
      this._iUtilsStrings   = new rmTransversalServicesIUtilsStrings.rm_transversalservices.IImpl_Utils_Strings_R(this) ;
      this._iUtilsFiles     = new rmTransversalServicesIUtilsFiles.rm_transversalservices.IImpl_Utils_Files_R(this) ;
      this._iUtilsWeb       = new rmTransversalServicesIUtilsWeb.rm_transversalservices.IImpl_Utils_Web_R(this) ;
      this._iUtilsGuid      = new rmTransversalServicesIUtilsGuid.rm_transversalservices.IImpl_Utils_Guid_R(this) ;
      this._iUtilsConvertor = new rmTransversalServicesIUtilsConvertor.rm_transversalservices.IImpl_Utils_Convertor_R(this) ;
      this._iUtilsXMLJson   = new rmTransversalServicesIUtilsXMLJson.rm_transversalservices.IImpl_Utils_XMLJson_R(this) ;
    }

  }
} 