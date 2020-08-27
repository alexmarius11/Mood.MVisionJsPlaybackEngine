import amGeneralIService       = require("../../../../../app/ts/abstract/am_general/a_service/I_Service");
import amGeneralIRemoteService = require("../../../../../app/ts/abstract/am_general/a_service/I_RemoteService");
import amGeneralIServiceConfig = require("../../../../../app/ts/abstract/am_general/a_service/I_Service_Config");

export module am_general
{
  export interface A_Service 
  {
    _name: string;

    _iService       : amGeneralIService.am_general.I_Service;
    _iServiceConfig : amGeneralIServiceConfig.am_general.I_Service_Config;
    _iRemoteService : amGeneralIRemoteService.am_general.I_RemoteService;
 }
} 