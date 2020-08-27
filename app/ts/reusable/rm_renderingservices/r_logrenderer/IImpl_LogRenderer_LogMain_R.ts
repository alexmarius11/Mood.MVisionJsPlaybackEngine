import amRenderingServicesLogRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_logrenderer/I_LogRenderer_LogMain");

import amGeneralFileInfo  = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralError     = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext   = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amTransversalServiceIUtilsFiles = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/A_UtilsService");

import rmRenderingServicesLogRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_logrenderer/R_LogRenderer");
                                                     
                                                     
export module rm_renderingservices
{
  export class IImpl_LogRenderer_LogMain_R implements amRenderingServicesLogRenderer.am_renderingservices.I_LogRenderer_LogMain
  {
    _name: string;    
    _aUtilsService : amTransversalServiceIUtilsFiles.am_transversalservices.A_UtilsService;

    //----------- owner
    _owner: rmRenderingServicesLogRenderer.rm_renderingservices.R_LogRenderer;

    //----------- constructor 
    constructor(owner: rmRenderingServicesLogRenderer.rm_renderingservices.R_LogRenderer)  
    {
      this._owner = owner;  
    }

    //-----------------------------
    //  Log file functions
    //-----------------------------

    //---------------------------------
    public action_createLogRenderer()
    {
      var strDisplayLogRenderer = 
      '<hr><center>' +
          '<div>' +
            '<div><h3>Display Log Messages'+ //</div>'+
            //'<div>' +
               ' Log File: <input readonly id="idLogFileStorage" value="'+this._owner._fileInfo.getStorage()+'"/>' 
                       + '<input readonly id="idLogFilePath" value="'+this._owner._fileInfo.getPath()+'"/>' 
                       + '<input readonly id="idLogFileName" value="'+this._owner._fileInfo.getName()+'"/> </h3>' +
            '</div>' +
            '<div><textarea  id="log.renderer.msg" rows="10" cols="200" style="font-size: 10px;"> ' +
            '</textarea></div>' + 
            //'<img width="30%" src=\'http://127.0.0.1:9080/external/usb/2/' + filePath + fileName + '\'>' +
            '<div>' +
              '<button type="button" onclick="javascript:global_SDKRenderer.eraseLogRenderer();">Clear Log Messages</button>' +
              '<button type="button" onclick="javascript:global_SDKRenderer.hideLogRenderer();">Close Log Messages</button>' +
              //'<button type="button" onclick="javascript:global_SDKRenderer.viewLogFile();">View Full Log File</button>' +
            '</div>' +
          '</div>' +
      '</center></hr>' ;
      document.getElementById("log.renderer").innerHTML = strDisplayLogRenderer;
      //document.getElementById("log.renderer").style.visibility = "hidden";

    }

    //---------------------------------
    public action_displayLogRenderer()
    {
      //document.getElementById("log.renderer").style.visibility = "visible";
      this.action_createLogRenderer();
    }

    //---------------------------------
    public action_hideLogRenderer()
    {
      //document.getElementById("log.renderer").style.visibility = "hidden";
      document.getElementById("log.renderer").innerHTML = "";
    }

    //---------------------------------
    public action_eraseLogRenderer()
    {
      document.getElementById("log.renderer.msg").innerHTML = "";
    }

    //---------------------------------
    public action_viewLogFile()
    {
      
    }

    //---------------------------------
    public action_closeViewLogFile()
    {
      
    }

    //---------------------------------
    public render_notify_log(context)
    {
      var elemLogRendererMsg = document.getElementById("log.renderer.msg");
      if (elemLogRendererMsg !== null)
        elemLogRendererMsg.innerHTML += context._result;
    }

    //---------------------------------
    public action_log(logMsgLevel: number, logMsg: string, callback)
    {
      var error: amGeneralError.am_general.A_Error      = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var context:amGeneralContext.am_general.A_Context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
      context.setRemoteCallback(false);
      this._owner._aTargetLog._iLogMain.log(logMsgLevel, logMsg, error, context, callback);          
      //var callbackLog = function callbackLog(ctx)
      //{
        //var a = 1;
      //}
      //context.setRemoteCallback(true);
      //aLogService._iLogMain.log( 4, "clientNodejs"+ "\t\t" + "Starts System Configuration Application : ok", error, context, callbackLog);          
    }

    //---------------------------------------------------------------
    public logStartAction(logMsg : string) : void
    {
      var errorLog: amGeneralError.am_general.A_Error      = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var contextLog:amGeneralContext.am_general.A_Context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
      var owner = this._owner;
      var callbackLog = function callbackLog(ctx)
      {
        owner._iLogMainRenderer.render_notify_log(ctx);
      }
      //contextLog.setRemoteCallback(true);
      owner._aTargetLog._iLogMain.log(4, logMsg, errorLog, contextLog, callbackLog);
    }
    
    //---------------------------------------------------------------
    public logEndAction(logMsg : string, context) : void
    {
      var errorLog: amGeneralError.am_general.A_Error      = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var contextLog:amGeneralContext.am_general.A_Context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
      var owner = this._owner;
      var callbackLog = function callbackLog(ctx)
      {
        owner._iLogMainRenderer.render_notify_log(ctx);
      }
      //contextLog.setRemoteCallback(true);
      if ( (context._error === null) || (context._error._id == 0))
        owner._aTargetLog._iLogMain.log(4, logMsg + " - ok", errorLog, contextLog, callbackLog);
      else 
        owner._aTargetLog._iLogMain.log(2, logMsg + " - error : " + context._error._msg, errorLog, contextLog, callbackLog);
     }

    //=====================================================================
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
