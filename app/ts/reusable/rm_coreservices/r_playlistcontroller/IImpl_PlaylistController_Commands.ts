import amCoreServicesIPlaylistControllerCommands = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/I_PlaylistController_Commands");

import rmCoreServicesPlaylistController = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/R_PlaylistController");
                                                                                                          
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amPrepareParams = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");
import amStopParams    = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Stop");

export module rm_coreservices
{
  export class IImpl_PlaylistController_Commands implements  amCoreServicesIPlaylistControllerCommands.am_coreservices.I_PlaylistController_Commands
  {
    _name: string;    

    //----------- owner
    _owner: rmCoreServicesPlaylistController.rm_coreservices.R_PlaylistController;

    //----------- constructor 
    constructor(owner: rmCoreServicesPlaylistController.rm_coreservices.R_PlaylistController)  
    {
      this._owner = owner;  
    }

    //------------------
    public cmd_getNewZoneId() : number
    {
      return this._owner.cmd_getNewZoneId();
    }

    //------------------
    public cmd_getNewPreparedParam(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : amPrepareParams.am_renderingservices.AE_ControlParams_Prepare
    {
      return this._owner.cmd_getNewPreparedParam(error, context, callback);
    }

    //------------------
    public cmd_freeNewPreparedParam(prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      return this._owner.cmd_freeNewPreparedParam(prepareParams, error, context, callback);
    }
    
    //---------------
    public cmd_createZone(zoneId : number, prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      this._owner.cmd_createZone(zoneId, prepareParams, error, context, callback);
    }  

    //---------------
    public cmd_stopZone( zoneId : number, stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop,
                            error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void

    {
      this._owner.cmd_stopZone(zoneId, stopParams, error, context, callback);
    }

    //---------------
    public cmd_destroyZone( zoneId : number, stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop,
                            error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void

    {
      this._owner.cmd_destroyZone(zoneId, stopParams, error, context, callback);
    }

    //---------------
    public cmd_prepareNextMediaItem(zoneId : number, prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      this._owner.cmd_prepareNextMediaItem(zoneId, prepareParams, error, context, callback);
    }

    //---------------
    public cmd_playNextMediaItem(zoneId : number, runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      this._owner.cmd_playNextMediaItem(zoneId, runParams, error, context, callback);
    }

    //-----------------
    public cmd_prepareAndPlayNextMediaItem( zoneId : number, 
                                            prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                            stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop, 
                                            runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                                            error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      this._owner.cmd_prepareAndPlayNextMediaItem(zoneId, prepareParams, stopParams, runParams, error, context, callback);
    }

    //--------------- 
    public cmd_changeDesign( iOldDesign : number, iNewDesign: number, designs: any, 
                             aFileStorage: string, aUrlStorage : string,  
                             error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
  
    {
      this._owner.cmd_changeDesign(iOldDesign, iNewDesign, designs, aFileStorage, aUrlStorage, error, context, callback);
    }
  }
} 