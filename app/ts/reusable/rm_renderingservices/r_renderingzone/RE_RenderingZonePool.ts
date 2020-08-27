import amConfigurationServicesServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amRenderingZone     = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingzone/A_RenderingZone");
import amRenderingZonePool     = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingzone/AE_RenderingZonePool");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amPlaybackScreenSaverConfig = require("../../../../../app/ts/abstract/am_playback/ae_screensaverconfig/AE_ScreenSaverConfig");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_RenderingZonePool  extends rmGeneralEntity.rm_general.R_Entity
                                     implements amRenderingZonePool.am_renderingservices.AE_RenderingZonePool
                                            
  {
    //---  properties 
    _aScreenSaverConfig : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig;
    _renderingZoneList  : Array<amRenderingZone.am_renderingservices.A_RenderingZone>;   
    _crtZoneIndex : number;

    //---------------------------
    constructor()
    {
      super();

      this._renderingZoneList   = new Array<amRenderingZone.am_renderingservices.A_RenderingZone>();   
      this._aScreenSaverConfig  = null;

      this._crtZoneIndex = 0;
    }

    //--------------------------------------------
    public initPool(nbRenderingZones: number, error: amGeneralError.am_general.A_Error) : number
    {
      var i = 0;     
      var newRenderingZone: amRenderingZone.am_renderingservices.A_RenderingZone = null;
      var errorNo = 1;
      for (i = 0; i < nbRenderingZones; i++)
      {
        newRenderingZone = this._aSrvLocator._iServiceCreation.createDefaultService_RenderingZone(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, i, error);
        if (error.isError())
        {
          errorNo =1;
          break;
        }
        newRenderingZone._iService.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
        newRenderingZone._iRenderingZoneConfig.setHtmlZoneId(i+1);
        newRenderingZone._iRenderingZoneConfig.setScreenSaverConfig(this._aScreenSaverConfig);
        this.addRenderingZone(newRenderingZone);
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
    public addRenderingZone(renderingZone : amRenderingZone.am_renderingservices.A_RenderingZone) : void 
    {
      this._renderingZoneList.push(renderingZone);
    }

    //--------------------------
    public reset() : void
    {
      var i = 0;           
      for (i = 0; i < this._renderingZoneList.length; i++)
      {
        this._renderingZoneList[i].reset();
      }
    }    


    //------------
    public copy(src : amRenderingZonePool.am_renderingservices.AE_RenderingZonePool) : number
    {
      if (src == null)
        return 1;
      return 0;
    }

    //-----------------------------
    public getRenderingZoneList() : Array<amRenderingZone.am_renderingservices.A_RenderingZone>
    {
      return this._renderingZoneList;
    }
  
    //-----------------------------
    public getRenderingZoneByZoneId(zoneId: number) : amRenderingZone.am_renderingservices.A_RenderingZone  
    {
      var foundRenderingZone: amRenderingZone.am_renderingservices.A_RenderingZone = null;
      var i = 0;     
      for (i = 0; i < this._renderingZoneList.length; i++)
      {
        if (this._renderingZoneList[i]._iRenderingZoneConfig.getZoneId() != zoneId)
          continue;
        foundRenderingZone = this._renderingZoneList[i];
        break; 
      }
      var a =1;
      if (foundRenderingZone == null)
      {
        a =2;
      }  
      return foundRenderingZone;
  
    }

  //--------------------------
  public getFreeRenderingZone_new() : amRenderingZone.am_renderingservices.A_RenderingZone
  {
    var freeRenderingZone: amRenderingZone.am_renderingservices.A_RenderingZone = null;
    var isFirstTime  = true;     
    var startZoneIdx = this._crtZoneIndex;
    while(true) 
    {
      if (this._crtZoneIndex >= this._renderingZoneList.length)
        this._crtZoneIndex = 0;
      if (! isFirstTime)
      {  
        isFirstTime  = false;     
        if (this._crtZoneIndex == startZoneIdx)
          break;
      }
      if (this._renderingZoneList[this._crtZoneIndex] == null)
      {
        this._crtZoneIndex++;
        continue;
      }
      if (! this._renderingZoneList[this._crtZoneIndex].isFree())
      {
        this._crtZoneIndex++;
        continue;
      }
      if (! this._renderingZoneList[this._crtZoneIndex].setIsFree(false))  
      {
        this._crtZoneIndex++;
        continue;
      }
      //console.log("allocated _crtZoneIndex : " + this._crtZoneIndex);
      freeRenderingZone = this._renderingZoneList[this._crtZoneIndex];
      this._crtZoneIndex++;
      break; 
    }
    return freeRenderingZone;
  }

  //--------------------------
  public getFreeRenderingZone() : amRenderingZone.am_renderingservices.A_RenderingZone
  {
    var freeRenderingZone: amRenderingZone.am_renderingservices.A_RenderingZone = null;
    var i = 0;     
    for (i = 0; i < this._renderingZoneList.length; i++)
    {
      if (this._renderingZoneList[i] == null)
        continue;
      if (! this._renderingZoneList[i].isFree())
        continue;
      if (! this._renderingZoneList[i].setIsFree(false))  
        continue;
      freeRenderingZone = this._renderingZoneList[i];
      break; 
    }
    return freeRenderingZone;
  }
  
  //--------------------------
  public releaseRenderingZone(renderingZone : amRenderingZone.am_renderingservices.A_RenderingZone) : boolean
  {
    if (renderingZone == null)
      return false;
    renderingZone.setIsFree(true);
    return true;
  }

  }
} 

