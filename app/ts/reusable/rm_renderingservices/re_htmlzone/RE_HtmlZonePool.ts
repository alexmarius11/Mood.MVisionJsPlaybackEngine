import amConfigurationServicesServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amHtmlZone     = require("../../../../../app/ts/abstract/am_renderingservices/ae_htmlzone/AE_HtmLZone");
import amHtmlZonePool     = require("../../../../../app/ts/abstract/am_renderingservices/ae_htmlzone/AE_HtmLZonePool");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_HtmlZonePool  extends rmGeneralEntity.rm_general.R_Entity
                                implements amHtmlZonePool.am_renderingservices.AE_HtmlZonePool
                                            
  {
    _htmlZoneList    : Array<amHtmlZone.am_renderingservices.AE_HtmlZone>;   

    //---------------------------
    constructor()
    {
      super();

      this._htmlZoneList   = new Array<amHtmlZone.am_renderingservices.AE_HtmlZone>();   
    }

    
    //--------------------------------------------
    public initPool(nbHtmlZone: number, error: amGeneralError.am_general.A_Error) : number
    {
      var i = 0;     
      var newHtmlZone: amHtmlZone.am_renderingservices.AE_HtmlZone = null;
      var errorNo = 1;
      var divZoneId : string = "";
      var iHtmlZoneId: number = 0;
      for (i = 0; i < nbHtmlZone; i++)
      {
        newHtmlZone = this._aSrvLocator._iEntityCreation.createDefaultHtmlZone(error);
        if (error.isError())
        {
          errorNo =1;
          break;
        }
        newHtmlZone.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
        //---
        iHtmlZoneId = i + 1 ;
        if (iHtmlZoneId < 10)
          divZoneId = "z0" + iHtmlZoneId;
        else
          divZoneId = "z" + iHtmlZoneId;
        newHtmlZone.initHtml(divZoneId, error);
        //----
        this.addHtmlZone(newHtmlZone);
      }
      return errorNo ;
    }

    //--------------------------
    public addHtmlZone(htmlZone : amHtmlZone.am_renderingservices.AE_HtmlZone) : void 
    {
      this._htmlZoneList.push(htmlZone);
    }

    //--------------------------
    public reset() : void
    {
      var i = 0;           
      for (i = 0; i < this._htmlZoneList.length; i++)
      {
        this._htmlZoneList[i].reset();
      }
    }    


    //------------
    public copy(src : amHtmlZonePool.am_renderingservices.AE_HtmlZonePool) : number
    {
      if (src == null)
        return 1;
      return 0;
    }

    //-----------------------------
    public getHtmlZoneList() : Array<amHtmlZone.am_renderingservices.AE_HtmlZone>
    {
      return this._htmlZoneList;
    }
  
  
    //--------------------------
  public getFreeHtmlZone() : amHtmlZone.am_renderingservices.AE_HtmlZone
  {
    var freeRenderParams: amHtmlZone.am_renderingservices.AE_HtmlZone = null;
    var i = 0;     
    for (i = 0; i < this._htmlZoneList.length; i++)
    {
      if (this._htmlZoneList[i] == null)
        continue;
      if (! this._htmlZoneList[i].isFree())
        continue;
      if (! this._htmlZoneList[i].setIsFree(false))  
        continue;
      freeRenderParams = this._htmlZoneList[i];
      break; 
    }
    return freeRenderParams;
  }
  
  //--------------------------
  public releaseHtmlZone(htmlZone : amHtmlZone.am_renderingservices.AE_HtmlZone) : boolean
  {
    if (htmlZone == null)
      return false;
    htmlZone.setIsFree(false);
    return true;
  }

  }
} 

