import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");

import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");
//import amGeneralContext                        = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
//import amGeneralFileInfo                       = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import amGeneralService                        = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");


import amRenderingServiceHtmlZone                = require("../../../../../app/ts/abstract/am_renderingservices/ae_htmlzone/AE_HtmlZone");
import amRenderingServicesHtmlZonePool           = require("../../../../../app/ts/abstract/am_renderingservices/as_htmlzonepool/AS_HtmlZonePool");
import amRenderingServicesIHtmlZonePoolControl   = require("../../../../../app/ts/abstract/am_renderingservices/as_htmlzonepool/I_HtmlZonePool_Control");
import amRenderingServicesIHtmlZonePoolConfig    = require("../../../../../app/ts/abstract/am_renderingservices/as_htmlzonepool/I_HtmlZonePool_Config");


import rmGeneral               = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");


import amTransversalServicesSDK         = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");
import amTransversalServicesUtilsService        = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/A_UtilsService");

import rmRenderingServicesIHtmlZonePoolConfig  = require("../../../../../app/ts/reusable/rm_renderingservices/rs_htmlzonepool/IImpl_HtmlZonePool_Config");
import rmRenderingServicesIHtmlZonePoolControl = require("../../../../../app/ts/reusable/rm_renderingservices/rs_htmlzonepool/IImpl_HtmlZonePool_Control");

export module rm_renderingservices
{
  export class RS_HtmlZonePool  extends rmGeneral.rm_general.R_Service 
                                implements amRenderingServicesHtmlZonePool.am_renderingservices.AS_HtmlZonePool
  {

    //---------- interfaces
    _iHtmlZonePool_Config  : amRenderingServicesIHtmlZonePoolConfig.am_renderingservices.I_HtmlZonePool_Config ;
    _iHtmlZonePool_Control : amRenderingServicesIHtmlZonePoolControl.am_renderingservices.I_HtmlZonePool_Control;

    _htmlZoneList: Array<amRenderingServiceHtmlZone.am_renderingservices.AE_HtmlZone>;

    //----------- composants 
    //_aTargetSDK : amTransversalServicesSDK.am_transversalservices.A_SDK_JsTV; 
    // _aUtilsService : amTransversalServicesUtilsService.am_transversalservices.A_UtilsService;
    //---------- properties
    // _fileInfo    : amGeneralFileInfo.am_general.A_FileInfo;
    // _fileUrlInfo : amGeneralFileInfo.am_general.A_FileInfo; 


    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {  
      super(aFactoryDescription, aServiceContainer, aLogService, error);
      
      this._iHtmlZonePool_Control    = new rmRenderingServicesIHtmlZonePoolControl.rm_renderingservices.IImpl_HtmlZonePool_Control(this);
      this._iHtmlZonePool_Config     = new rmRenderingServicesIHtmlZonePoolConfig.rm_renderingservices.IImpl_HtmlZonePool_Config(this) ;

      this._aLogService = aLogService;
      this._aUtilsService = null;

      //this._fileInfo    = null;
      //this._fileUrlInfo = null;
      //this._aTargetSDK  = null;      

      this._htmlZoneList = new Array<amRenderingServiceHtmlZone.am_renderingservices.AE_HtmlZone>();
    }


    //-----------------------------------------
    /*
    public setTargetService(targetService: amGeneralService.am_general.A_Service)
    {
      this._aTargetSDK = <amTransversalServicesSDK.am_transversalservices.A_SDK_JsTV>targetService;
    }*/

    //-----------------------------
    public getHtmlZones() : Array<amRenderingServiceHtmlZone.am_renderingservices.AE_HtmlZone>
    {
      return this._htmlZoneList;
    }
    
    //--------------------------
    public addHtmlZone(htmlZone : amRenderingServiceHtmlZone.am_renderingservices.AE_HtmlZone) : void 
    {
      this._htmlZoneList.push(htmlZone);
    }
    
    //--------------------------
    public getFreeHtmlZone() : amRenderingServiceHtmlZone.am_renderingservices.AE_HtmlZone
    {
      var freeHtmlZone: amRenderingServiceHtmlZone.am_renderingservices.AE_HtmlZone = null;
      if (this._htmlZoneList == null)
        return null;
      var i = 0;     
      for (i = 0; i < this._htmlZoneList.length; i++)
      {
        if (this._htmlZoneList[i] == null)
          continue;
        if (! this._htmlZoneList[i].isFree())
          continue;
        if (! this._htmlZoneList[i].setIsFree(false))  
          continue;
        freeHtmlZone = this._htmlZoneList[i];
        break; 
      }
      return freeHtmlZone;
    }
    
    //--------------------------
    public releaseHtmlZone(htmlZone : amRenderingServiceHtmlZone.am_renderingservices.AE_HtmlZone) : boolean
    {
      if (htmlZone == null)
        return false;
      htmlZone.setIsFree(false);
      return true;
    }
  }
} 