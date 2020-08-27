import amTransversalServices = require("../../../../../app/ts/abstract/am_transversalservices/a_xmlconfigurator/I_XmlConfigurator_Main");

import rmTransversalServices = require("../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator/R_XmlConfigurator");
import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
                                                                                                
//---
export module rm_transversalservices
{
  export class IImpl_XmlConfigurator_Main_R implements amTransversalServices.am_transversalservices.I_XmlConfigurator_Main
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServices.rm_transversalservices.R_XmlConfigurator;

    //----------- constructor 
    constructor(owner: rmTransversalServices.rm_transversalservices.R_XmlConfigurator)  
    {
      this._owner = owner;  
    }

    //---------------------------
    public getXmlJsonObject(fileStorage : string, fileFolder: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      return this._owner.getXmlJsonObject(fileStorage, fileFolder, fileName, error, context, callback);    
    }
    
  }
} 