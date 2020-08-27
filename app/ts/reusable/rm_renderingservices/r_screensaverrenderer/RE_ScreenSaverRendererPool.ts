import amConfigurationServicesServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amScreenSaverRenderer     = require("../../../../../app/ts/abstract/am_renderingservices/a_screenSaverrenderer/A_ScreenSaverRenderer");
import amScreenSaverRendererPool     = require("../../../../../app/ts/abstract/am_renderingservices/a_screenSaverrenderer/AE_ScreenSaverRendererPool");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amPlaybackScreenSaverConfig = require("../../../../../app/ts/abstract/am_playback/ae_screensaverconfig/AE_ScreenSaverConfig");



import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_ScreenSaverRendererPool  extends rmGeneralEntity.rm_general.R_Entity
                                implements amScreenSaverRendererPool.am_renderingservices.AE_ScreenSaverRendererPool
                                            
  {
    //---  properties 
    _aScreenSaverConfig : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig;
    _screenSaverRendererList : Array<amScreenSaverRenderer.am_renderingservices.A_ScreenSaverRenderer>;   

    //---------------------------
    constructor()
    {
      super();

      this._screenSaverRendererList   = new Array<amScreenSaverRenderer.am_renderingservices.A_ScreenSaverRenderer>();   
    }

    //--------------------------------------------
    public initPool(nbScreenSaverRenderers: number, error: amGeneralError.am_general.A_Error) : number
    {
      var i = 0;     
      var newScreenSaverRenderer: amScreenSaverRenderer.am_renderingservices.A_ScreenSaverRenderer = null;
      var errorNo = 1;
      for (i = 0; i < nbScreenSaverRenderers; i++)
      {
        newScreenSaverRenderer = this._aSrvLocator._iServiceCreation.createDefaultService_ScreenSaverRenderer(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, i, error);
        if (error.isError())
        {
          errorNo =1;
          break;
        }
        newScreenSaverRenderer._iService.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
        newScreenSaverRenderer._iScreenSaverRendererConfig.setScreenSaverConfig(this._aScreenSaverConfig);
        this.addScreenSaverRenderer(newScreenSaverRenderer);
      }
      return errorNo ;
    }

    //----------------------------------
    public setScreenSaverConfig(aScreenSaverConfig : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig)
    {
      this._aScreenSaverConfig = aScreenSaverConfig;
    }

    //-----------------------------
    public getScreenSaverConfig() : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig
    {
      return this._aScreenSaverConfig;
    }

    //--------------------------
    public addScreenSaverRenderer(screenSaverRenderer : amScreenSaverRenderer.am_renderingservices.A_ScreenSaverRenderer) : void 
    {
      this._screenSaverRendererList.push(screenSaverRenderer);
    }

    //--------------------------
    public reset() : void
    {
      var i = 0;           
      for (i = 0; i < this._screenSaverRendererList.length; i++)
      {
        this._screenSaverRendererList[i].reset();
      }
    }    


    //------------
    public copy(src : amScreenSaverRendererPool.am_renderingservices.AE_ScreenSaverRendererPool) : number
    {
      if (src == null)
        return 1;
      return 0;
    }

    //-----------------------------
    public getScreenSaverRendererList() : Array<amScreenSaverRenderer.am_renderingservices.A_ScreenSaverRenderer>
    {
      return this._screenSaverRendererList;
    }
  
  
    //--------------------------
  public getFreeScreenSaverRenderer() : amScreenSaverRenderer.am_renderingservices.A_ScreenSaverRenderer
  {
    var freeRenderParams: amScreenSaverRenderer.am_renderingservices.A_ScreenSaverRenderer = null;
    var i = 0;     
    for (i = 0; i < this._screenSaverRendererList.length; i++)
    {
      if (this._screenSaverRendererList[i] == null)
        continue;
      if (! this._screenSaverRendererList[i].isFree())
        continue;
      if (! this._screenSaverRendererList[i].setIsFree(false))  
        continue;
      freeRenderParams = this._screenSaverRendererList[i];
      break; 
    }
    return freeRenderParams;
  }
  
  //--------------------------
  public releaseScreenSaverRenderer(screenSaverRenderer : amScreenSaverRenderer.am_renderingservices.A_ScreenSaverRenderer) : boolean
  {
    if (screenSaverRenderer == null)
      return false;
    screenSaverRenderer.setIsFree(false);
    return true;
  }

  }
} 

