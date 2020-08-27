import amIRenderingControllerConfig = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/I_RenderingController_Config");

import amPlaybackScreenSaverConfig = require("../../../../../app/ts/abstract/am_playback/ae_screensaverconfig/AE_ScreenSaverConfig");

import rmCoreServicesRenderingController = require("../../../../../app/ts/reusable/rm_coreservices/r_renderingcontroller/R_RenderingController");
                                                     
                                                     

export module rm_coreservices
{
  export class IImpl_RenderingController_Config implements amIRenderingControllerConfig.am_coreservices.I_RenderingController_Config
  {
    _name: string;    

    //----------- owner
    _owner: rmCoreServicesRenderingController.rm_coreservices.R_RenderingController;

    //----------- constructor 
    constructor(owner: rmCoreServicesRenderingController.rm_coreservices.R_RenderingController)  
    {
      this._owner = owner;  
    }

    /*
    //-----------------------------------
    public setScreenSaverConfig(aScreenSaverConfig: amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig)
    {
      return this._owner.setScreenSaverConfig(aScreenSaverConfig);
    }

    //-----------------------------------
    public getScreenSaverConfig() : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig
    {
      return this._owner.getScreenSaverConfig();
    }*/
  }
} 