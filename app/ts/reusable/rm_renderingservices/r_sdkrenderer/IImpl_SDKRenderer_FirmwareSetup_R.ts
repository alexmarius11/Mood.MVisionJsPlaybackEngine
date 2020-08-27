import amRenderingServicesFirmwareSetupRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_sdkrenderer/I_SDKRenderer_FirmwareSetup");

import amGeneralFileInfo  = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralError     = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext   = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amTransversalServiceIUtilsFiles = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/A_UtilsService");

import rmRenderingServicesFileSystemRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/R_SDKRenderer");
                                                     
                                                     
export module rm_renderingservices
{
  export class IImpl_SDKRenderer_FirmwareSetup_R implements amRenderingServicesFirmwareSetupRenderer.am_renderingservices.I_SDKRenderer_FirmwareSetup
  {
    _name: string;    
    _aUtilsService : amTransversalServiceIUtilsFiles.am_transversalservices.A_UtilsService;

    //----------- owner
    _owner: rmRenderingServicesFileSystemRenderer.rm_renderingservices.R_SDKRenderer;

    //----------- constructor 
    constructor(owner: rmRenderingServicesFileSystemRenderer.rm_renderingservices.R_SDKRenderer)  
    {
      this._owner = owner;  
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


    //--------------------------------------
    //  
    //--------------------------------------
    
    
  }
} 
