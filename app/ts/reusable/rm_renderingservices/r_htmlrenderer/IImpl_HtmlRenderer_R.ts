import amRenderingServices = require("../../../../../app/ts/abstract/am_renderingservices/a_htmlrenderer/I_HtmlRenderer");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_htmlrenderer/R_HtmlRenderer");
                                                     
                                                     

export module rm_renderingservices
{
  export class IImpl_HtmlRenderer_R implements amRenderingServices.am_renderingservices.I_HtmlRenderer
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.R_HtmlRenderer;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.R_HtmlRenderer)  
    {
      this._owner = owner;  
    }
  }
} 