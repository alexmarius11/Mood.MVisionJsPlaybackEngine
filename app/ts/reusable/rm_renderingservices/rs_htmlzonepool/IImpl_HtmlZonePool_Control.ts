import amRenderingServicesIHtmlZonePoolControl = require("../../../../../app/ts/abstract/am_renderingservices/as_htmlzonepool/I_HtmlZonePool_Control");

import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmRenderingServicesHtmlZonePool = require("../../../../../app/ts/reusable/rm_renderingservices/rs_htmlzonepool/RS_HtmlZonePool");
                                                                                                        

export module rm_renderingservices
{
  export class IImpl_HtmlZonePool_Control implements amRenderingServicesIHtmlZonePoolControl.am_renderingservices.I_HtmlZonePool_Control
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServicesHtmlZonePool.rm_renderingservices.RS_HtmlZonePool;

    //----------- constructor 
    constructor(owner: rmRenderingServicesHtmlZonePool.rm_renderingservices.RS_HtmlZonePool)  
    {
      this._owner = owner;  
    }

    //--------------------------
    /*
    public setFileInfo(fileInfo : amGeneralFileInfo.am_general.A_FileInfo,  fileUrlInfo : amGeneralFileInfo.am_general.A_FileInfo, 
                       error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void     

    {
      this._owner.setFileInfo(fileInfo,  fileUrlInfo,  error, context, callback) ;
    }*/

  }
} 
