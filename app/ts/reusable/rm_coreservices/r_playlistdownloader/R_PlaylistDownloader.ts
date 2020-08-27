import amCoreServicesPlaylistDownloader  = require("../../../../../app/ts/abstract/am_coreservices/a_playlistdownloader/A_PlaylistDownloader");
import amCoreServicesIPlaylistDownloader = require("../../../../../app/ts/abstract/am_coreservices/a_playlistdownloader/I_PlaylistDownloader");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import rmGeneral    = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");

import rmCoreServiceIImplPlaylistDownloader = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistdownloader/IImpl_PlaylistDownloader_R");


export module rm_coreservices
{
  export class R_PlaylistDownloader extends  rmGeneral.rm_general.R_Service 
                                 implements amCoreServicesPlaylistDownloader.am_coreservices.A_PlaylistDownloader
  {
    //---------- interfaces
    _iPlaylistDownloader : amCoreServicesIPlaylistDownloader.am_coreservices.I_PlaylistDownloader ;

    //----------- composants 
    _aLogService : amTransversalServicesLogService.am_transversalservices.A_LogService; 

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iPlaylistDownloader = new rmCoreServiceIImplPlaylistDownloader.rm_coreservices.IImpl_PlaylistDownloader_R(this) ;

      this._aLogService = aLogService;
    }

  }
} 