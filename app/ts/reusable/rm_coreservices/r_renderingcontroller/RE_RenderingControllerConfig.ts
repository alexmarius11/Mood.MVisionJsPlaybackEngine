
import amRenderingControllerConfig  = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/AE_RenderingControllerConfig");

import amPlaybackScreenSaverConfig = require("../../../../../app/ts/abstract/am_playback/ae_screensaverconfig/AE_ScreenSaverConfig");

import rmConfig    = require("../../../../../app/ts/reusable/rm_general/re_config/RE_Config");

export module rm_coreservices
{
  export class RE_RenderingControllerConfig  extends    rmConfig.rm_general.RE_Config
                                             implements amRenderingControllerConfig.am_coreservices.AE_RenderingControllerConfig
  {

    //----------- properties
    _aScreenSaverConfig : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig;

    _renderingZones_initialPoolNb  : number;
    _imageRenderers_initialPoolNb : number;
    _videoRenderers_initialPoolNb : number;
    _videoStreamRenderers_initialPoolNb : number;
    _htmlRenderers_initialPoolNb : number;
    _htmlTemplateRenderers_initialPoolNb : number;
    _fillRectRenderers_initialPoolNb : number;
    _screenSaverRenderers_initialPoolNb : number;
    _backgroundRenderers_initialPoolNb : number;
    _tvHdmiPassThroughSrv_initialPoolNb : number;
    _flashRenderers_initialPoolNb : number;

    //----
    _htmlZones_initialPoolNb  : number;

    //----
    _rootDivId  : string;

    //------------------
    constructor()
    {
      super();
      
      this._renderingZones_initialPoolNb  = 0;
      this._imageRenderers_initialPoolNb  = 0;
      this._videoRenderers_initialPoolNb = 0;
      this._videoStreamRenderers_initialPoolNb = 0;
      this._htmlRenderers_initialPoolNb = 0;
      this._htmlTemplateRenderers_initialPoolNb = 0;
      this._fillRectRenderers_initialPoolNb = 0;
      this._screenSaverRenderers_initialPoolNb = 0;
      this._backgroundRenderers_initialPoolNb = 0;
      this._tvHdmiPassThroughSrv_initialPoolNb = 0;
      this._flashRenderers_initialPoolNb = 0;
      //----
      this._htmlZones_initialPoolNb = 0;
      //----
      this._rootDivId = "";
      //----
      this._aScreenSaverConfig = null;
    }

    //------------------
    public getInitialPoolNb_OfRenderingZones() : number
    {
      return this._renderingZones_initialPoolNb ;
    }
    //------------------
    public setInitialPoolNb_OfRenderingZones(nbRenderingZones : number) : void
    {
      this._renderingZones_initialPoolNb = nbRenderingZones;
    }

    //------------------
    public getInitialPoolNb_OfImageRenderers() : number
    {
      return this._imageRenderers_initialPoolNb ;
    }
    //------------------
    public setInitialPoolNb_OfImageRenderers(nbImageRenderers : number) : void
    {
      this._imageRenderers_initialPoolNb = nbImageRenderers;
    }

    //------------------
    public getInitialPoolNb_OfVideoRenderers() : number
    {
      return this._videoRenderers_initialPoolNb ;
    }
    //------------------
    public setInitialPoolNb_OfVideoRenderers(nbVideoRenderers : number) : void
    {
      this._videoRenderers_initialPoolNb = nbVideoRenderers;
    }

    //------------------
    public getInitialPoolNb_OfVideoStreamRenderers() : number
    {
      return this._videoStreamRenderers_initialPoolNb ;
    }
    //------------------
    public setInitialPoolNb_OfVideoStreamRenderers(nbVideoStreamRenderers : number) : void
    {
      this._videoStreamRenderers_initialPoolNb = nbVideoStreamRenderers;
    }


    //------------------
    public getInitialPoolNb_OfHtmlRenderers() : number
    {
      return this._htmlRenderers_initialPoolNb ;
    }
    //------------------
    public setInitialPoolNb_OfHtmlRenderers(nbHtmlRenderers : number) : void
    {
      this._htmlRenderers_initialPoolNb  = nbHtmlRenderers;
    }

    //------------------
    public getInitialPoolNb_OfHtmlTemplateRenderers() : number
    {
      return this._htmlTemplateRenderers_initialPoolNb ;
    }
    //------------------
    public setInitialPoolNb_OfHtmlTemplateRenderers(nbHtmlTemplateRenderers : number) : void
    {
      this._htmlTemplateRenderers_initialPoolNb  = nbHtmlTemplateRenderers;
    }

    //------------------
    public getInitialPoolNb_OfScreenSaverRenderers() : number
    {
      return this._screenSaverRenderers_initialPoolNb ;
    }
    //------------------
    public setInitialPoolNb_OfScreenSaverRenderers(nbScreenSaverRenderers : number) : void
    {
      this._screenSaverRenderers_initialPoolNb = nbScreenSaverRenderers;
    }


    //------------------
    public getInitialPoolNb_OfFillRectRenderers() : number
    {
      return this._fillRectRenderers_initialPoolNb ;
    }
    //------------------
    public setInitialPoolNb_OfFillRectRenderers(nbFillRectRenderers : number) : void
    {
      this._fillRectRenderers_initialPoolNb = nbFillRectRenderers ;
    }

    //------------------
    public getInitialPoolNb_OfBackgroundRenderers() : number
    {
      return this._backgroundRenderers_initialPoolNb ;
    }
    //------------------
    public setInitialPoolNb_OfBackgroundRenderers(nbBackgroundRenderers : number) : void
    {
      this._backgroundRenderers_initialPoolNb = nbBackgroundRenderers;
    }

    //------------------
    public getInitialPoolNb_OfFlashRenderers() : number
    {
      return this._flashRenderers_initialPoolNb ;
    }
    //------------------
    public setInitialPoolNb_OfFlashRenderers(nbFlashRenderers : number) : void
    {
      this._flashRenderers_initialPoolNb = nbFlashRenderers;
    }
    //------------------
    public getInitialPoolNb_OfTvHdmiPassThroughSrv() : number
    {
      return this._tvHdmiPassThroughSrv_initialPoolNb ;
    }
    //------------------
    public setInitialPoolNb_OfTvHdmiPassThroughSrv(nbTvHdmiPassThroughSrv : number) : void
    {
      this._tvHdmiPassThroughSrv_initialPoolNb  = nbTvHdmiPassThroughSrv;
    }
    
    //------------------------
    //  implementation setup
    // -----------------------

    //------------------
    public getInitialPoolNb_OfHtmlZones() : number
    {
      return this._htmlZones_initialPoolNb ;
    }
    //------------------
    public setInitialPoolNb_OfHtmlZones(nbHtmlZones : number) : void
    {
      this._htmlZones_initialPoolNb = nbHtmlZones;
    }
   
    //---------------------------
    //  implementation of root div
    //----------------------------
    
    //------------------
    public getRootDivId() : string
    {
      return this._rootDivId ;
    }
    //------------------
    public setRootDivId(rootDivId : string) : void
    {
      this._rootDivId = rootDivId;
    }

    //---------------------
    // screen saver config 
    //----------------------

    //-----------------------------------
    public setScreenSaverConfig(aScreenSaverConfig: amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig)
    {
      this._aScreenSaverConfig = aScreenSaverConfig;
    }

    //-----------------------------------
    public getScreenSaverConfig() : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig
    {
      return this._aScreenSaverConfig;
    }

  }
} 