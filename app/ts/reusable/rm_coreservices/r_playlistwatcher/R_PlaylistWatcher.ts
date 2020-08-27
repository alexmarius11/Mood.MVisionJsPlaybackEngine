import amCoreServicesPlaylistWatcher  = require("../../../../../app/ts/abstract/am_coreservices/a_playlistwatcher/A_PlaylistWatcher");
import amCoreServicesIPlaylistWatcher = require("../../../../../app/ts/abstract/am_coreservices/a_playlistwatcher/I_PlaylistWatcher");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import rmGeneral    = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");

import rmCoreServiceIImplPlaylistWatcher = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistwatcher/IImpl_PlaylistWatcher_R");


export module rm_coreservices
{
  export class R_PlaylistWatcher extends  rmGeneral.rm_general.R_Service 
                                 implements amCoreServicesPlaylistWatcher.am_coreservices.A_PlaylistWatcher
  {
    //---------- interfaces
    _iPlaylistWatcher : amCoreServicesIPlaylistWatcher.am_coreservices.I_PlaylistWatcher ;

    //----------- composants 
    _aLogService : amTransversalServicesLogService.am_transversalservices.A_LogService; 

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iPlaylistWatcher = new rmCoreServiceIImplPlaylistWatcher.rm_coreservices.IImpl_PlaylistWatcher_R(this) ;

      this._aLogService = aLogService;
    }

  }
} 