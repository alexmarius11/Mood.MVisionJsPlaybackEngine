import amCoreServicesIPlaylistControllerRun = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/I_PlaylistController_Run");

import rmCoreServicesPlaylistController = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/R_PlaylistController");
                                                     
import amGeneralService              = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
                                                     
import amGeneralError    = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext  = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralQueue = require("../../../../../app/ts/abstract/am_general/ae_queue/AE_Queue");
import amGeneralEvent = require("../../../../../app/ts/abstract/am_general/ae_event/AE_Event");

import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

//import amPlaylist      = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_MainPlaylist");

export module rm_coreservices
{
  export class IImpl_PlaylistController_Run implements  amCoreServicesIPlaylistControllerRun.am_coreservices.I_PlaylistController_Run
  {
    _name: string;    

    //----------- owner
    _owner: rmCoreServicesPlaylistController.rm_coreservices.R_PlaylistController;

    //----------- constructor 
    constructor(owner: rmCoreServicesPlaylistController.rm_coreservices.R_PlaylistController)  
    {
      this._owner = owner;  
    }

    //-----------------------
    public startMainLoop(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      this._owner.startMainLoop(error, context, callback);
    }

    //-----------------------
    public endMainLoop(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      this._owner.endMainLoop(error, context, callback);
    }

    //-----------------------
    public mainLoop(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      this._owner.mainLoop(error, context, callback);
    }
          
    //-----------------------
    public receiveEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                          context: amGeneralContext.am_general.A_Context, callback): void
    {
      this._owner.receiveEvent( event, eventQueue, error, context, callback);
    }
    

  }
} 