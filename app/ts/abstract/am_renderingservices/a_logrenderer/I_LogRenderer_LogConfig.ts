import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amTransversalServicesLogService  = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

export module am_renderingservices
{
  export interface I_LogRenderer_LogConfig extends amGeneral.am_general.I_Interface
  {
    _name: string;    
    
   setFileInfo(fileInfo : amGeneralFileInfo.am_general.A_FileInfo,  fileUrlInfo : amGeneralFileInfo.am_general.A_FileInfo);    
   
  }
} 