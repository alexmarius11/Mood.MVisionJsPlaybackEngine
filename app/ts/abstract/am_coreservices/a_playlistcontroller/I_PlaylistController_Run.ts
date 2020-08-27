import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralService              = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amGeneralError    = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext  = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
//import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

//import amPlaylist      = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_MainPlaylist");
import amGeneralQueue = require("../../../../../app/ts/abstract/am_general/ae_queue/AE_Queue");
import amGeneralEvent = require("../../../../../app/ts/abstract/am_general/ae_event/AE_Event");

export module am_coreservices
{
  export interface I_PlaylistController_Run extends amGeneral.am_general.I_Interface
  {
    _name: string;    
    
    startMainLoop(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void;
    endMainLoop(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void;
    mainLoop(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void;
          
    receiveEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                          context: amGeneralContext.am_general.A_Context, callback): void;

  }
  
} 