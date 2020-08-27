import amTransversalServicesIXmlConfiguratorSetup = require("../../../../../app/ts/abstract/am_transversalservices/a_xmlconfigurator/I_XmlConfigurator_Setup");

import rmTransversalServices = require("../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator/R_XmlConfigurator");
import amGeneralJsonXmlObject = require("../../../../../app/ts/abstract/am_general/a_xmljsonobject/A_XmlJsonObject");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
                                                                                                        
//----------
export module rm_transversalservices
{
  export class IImpl_XmlConfigurator_Setup_R implements amTransversalServicesIXmlConfiguratorSetup.am_transversalservices.I_XmlConfigurator_Setup
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServices.rm_transversalservices.R_XmlConfigurator;

    //----------- constructor 
    constructor(owner: rmTransversalServices.rm_transversalservices.R_XmlConfigurator)  
    {
      this._owner = owner;  
    }

    //-------------------
    public loadXMLFiles( fileInfoList: Array<amGeneralFileInfo.am_general.A_FileInfo>, error: amGeneralError.am_general.A_Error, 
                         context: amGeneralContext.am_general.A_Context, callback): void
    {
      return this._owner.loadXMLFiles(fileInfoList, error, context, callback);
    }
    
    //-------------------
    public loadTextFiles( fileInfoList: Array<amGeneralFileInfo.am_general.A_FileInfo>, error: amGeneralError.am_general.A_Error, 
                          context: amGeneralContext.am_general.A_Context, callback): void
    {
      return this._owner.loadTextFiles(fileInfoList, error, context, callback);
    }
                          
  }
} 