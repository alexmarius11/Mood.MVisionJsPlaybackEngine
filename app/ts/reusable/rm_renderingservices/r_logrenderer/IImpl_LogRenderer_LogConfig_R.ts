import amRenderingServicesILogConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_logrenderer/I_LogRenderer_LogConfig");

import amGeneralFileInfo  = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralError     = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext   = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amTransversalServiceIUtilsFiles = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/A_UtilsService");

import rmRenderingServicesLogRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_logrenderer/R_LogRenderer");
                                                     
                                                     
export module rm_renderingservices
{
  export class IImpl_LogRenderer_LogConfig_R implements amRenderingServicesILogConfig.am_renderingservices.I_LogRenderer_LogConfig
  {
    _name: string;    

    _aUtilsService : amTransversalServiceIUtilsFiles.am_transversalservices.A_UtilsService;

    //----------- owner
    _owner:  rmRenderingServicesLogRenderer.rm_renderingservices.R_LogRenderer;

    //----------- constructor 
    constructor(owner:  rmRenderingServicesLogRenderer.rm_renderingservices.R_LogRenderer)  
    {
      this._owner = owner;  
    }
    
    //---------------------------------------------------------------
    public setFileInfo(fileInfo : amGeneralFileInfo.am_general.A_FileInfo,  fileUrlInfo : amGeneralFileInfo.am_general.A_FileInfo)    
    {
      this._owner.setFileInfo(fileInfo,  fileUrlInfo);    
    }

    //---------------------------------------------------------------
    public render_home()
    {
      this.render_mainmenu(null);
    }


    //---------------------------------------------------------------
    public render_mainmenu(context)
    {
      var storageName="";
      var folderName="";
      document.getElementById("sdk.filesystem-renderer.mainmenu").innerHTML 
               =  
               '<button style="background-color: lightgray;" type="button" onclick="javascript:global_SDKRenderer.displayNewFile(\'' + storageName + '\',\''  + folderName + '\');">New File</button>' 
             + '<button style="background-color: lightgray;" type="button" onclick="javascript:global_SDKRenderer.displayNewFolder(\''+ storageName + '\',\''  + folderName + '\');">New Folder</button>' 
            ;
    }

    //---------------------------------------------------------------
    public action_eraseAll()
    {
    }

    //---------------------------------------------------------------
    public action_eraseAllOpenDialogPanels()
    {
    }
    
  }
} 
