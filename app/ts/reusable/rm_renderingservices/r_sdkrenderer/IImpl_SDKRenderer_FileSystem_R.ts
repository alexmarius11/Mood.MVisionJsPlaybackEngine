import amRenderingServicesFileSystemRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_sdkrenderer/I_SDKRenderer_FileSystem");

import amGeneralDateTime  = require("../../../../../app/ts/abstract/am_general/a_datetime/A_DateTime");
import amGeneralFileInfo  = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralError     = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext   = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralShaProperties  = require("../../../../../app/ts/abstract/am_general/a_shaproperties/A_ShaProperties");

import amPlaybackHardwareSettings  = require("../../../../../app/ts/abstract/am_playback/a_hardwaresettings/A_HardwareSettings");
import amPlaybackOpeningHours      = require("../../../../../app/ts/abstract/am_playback/a_openinghours/A_OpeningHours");
import amPlaybackDayOpeningHours      = require("../../../../../app/ts/abstract/am_playback/a_openinghours/A_DayOpeningHours");

import amTransversalServiceIUtilsFiles = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/A_UtilsService");

import rmRenderingServicesFileSystemRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/R_SDKRenderer");
                                                     
declare var videojs: any;
                                          
export module rm_renderingservices
{
  export class IImpl_SDKRenderer_FileSystem_R implements amRenderingServicesFileSystemRenderer.am_renderingservices.I_SDKRenderer_FileSystem
  {
    _name: string;    
    _startFolder : amGeneralFileInfo.am_general.A_FileInfo;
    _startUrlFolder : amGeneralFileInfo.am_general.A_FileInfo; 
    _startUrlDomainFolder : amGeneralFileInfo.am_general.A_FileInfo; 
    _aUtilsService : amTransversalServiceIUtilsFiles.am_transversalservices.A_UtilsService;

    _aHardwareSettings: amPlaybackHardwareSettings.am_playback.A_HardwareSettings ;
    _aOpeningHours: amPlaybackOpeningHours.am_playback.A_OpeningHours;

    //----------- owner
    _owner: rmRenderingServicesFileSystemRenderer.rm_renderingservices.R_SDKRenderer;

    //----------- constructor 
    constructor(owner: rmRenderingServicesFileSystemRenderer.rm_renderingservices.R_SDKRenderer)  
    {
      this._owner = owner;  
      this._startFolder          = null;
      this._startUrlFolder       = null;
      this._startUrlDomainFolder = null; 

      this._aHardwareSettings = null ;
      this._aOpeningHours     = null ;
  
    }

    
    //---------------------------------------------------------------
    public setStartFolder(startFolder : amGeneralFileInfo.am_general.A_FileInfo, 
                          startUrlFolder : amGeneralFileInfo.am_general.A_FileInfo, 
                          startUrlDomainFolder: amGeneralFileInfo.am_general.A_FileInfo) : void

    {
      this._startFolder          = startFolder;
      this._startUrlFolder       = startUrlFolder;
      this._startUrlDomainFolder = startUrlDomainFolder; 
    }

    //---------------------------------------------------------------
    public render_home()
    {
      this.render_mainmenu(this._startFolder.getStorage(), this._startFolder.getPath());
      this.action_getFileList(this._startFolder.getStorage(), this._startFolder.getPath());
    }

    //--------------------------------------
    public render_allfilesystem(context)
    {
      this.render_mainmenu(context._objectResult._storage, context._objectResult._path);
      this.render_file_list(context);
    }

    //---------------------------------------------------------------
    public render_mainmenu(storageName: string, folderName: string)
    {
      document.getElementById("sdk.filesystem-renderer.mainmenu").innerHTML 
               =  
               '<button style="background-color: lightgray;" type="button" onclick="javascript:global_SDKRenderer.displayNewFile(\'' + storageName + '\',\''  + folderName + '\');">New File</button>' 
             + '<button style="background-color: lightgray;" type="button" onclick="javascript:global_SDKRenderer.displayNewFolder(\''+ storageName + '\',\''  + folderName + '\');">New Folder</button>' 
             + '<button style="background-color: lightgray;" type="button" onclick="javascript:global_SDKRenderer.displayDownloadFile(\'' +
                    'https://sample-videos.com/img/Sample-jpg-image-200kb.jpg\',\''+ storageName + '\',\''  + folderName + '\',\'Sample-jpg-image-200kb.jpg\');">Download File</button>' +
               '<button style="background-color: lightgray;" type="button" onclick="javascript:global_SDKRenderer.displayLogRenderer();">Display Log Messages</button>' +
               '<button style="background-color: lightgray;" type="button" onclick="javascript:global_SDKRenderer.displayHardwareSettings();">Display HardwareSettings</button>' +
               '<button style="background-color: lightgray;" type="button" onclick="javascript:global_SDKRenderer.displayOpeningHours();">Display OpeningHours</button>' ;
            ;
    }

    //---------------------------------------------------------------
    public action_eraseAllOpenDialogPanels()
    {
      this.action_eraseDisplayNewFolder();
      this.action_eraseDisplayFile();
      this.action_eraseDisplayDeleteFile();
      this.action_eraseDisplayCopyFile();
      this.action_eraseDisplayMoveFile();
      this.action_eraseDisplayDownloadFile();
      this.action_eraseDisplayUploadFile();
      this.action_eraseDisplayUnzipFile();
      this.action_eraseDisplayZipFile();

      this.action_eraseDisplayDeleteFolder();
      this.action_eraseDisplayCopyFolder();
      this.action_eraseDisplayMoveFolder();
      this.action_eraseDisplayZipFolder();

      this.erase_display_imageFile();
      this.erase_display_videoFile();
      this.erase_display_streamFile();

      this.action_eraseDisplayComputeAndSaveShaFile();

      this.action_closeHardwareSettings();
      this.action_closeOpeningHours();
    }


    //--------------------------------------
    //  display Folder File list functions
    //--------------------------------------
    
    //---------------------------------------------------------------
    public action_getFileList(storageName: string, folderName: string)
    {
      this.action_eraseAllOpenDialogPanels();

      var error: amGeneralError.am_general.A_Error      = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var context:amGeneralContext.am_general.A_Context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();

      var folderName2 = this._owner._aUtilsService._iUtilsFiles.addSlashToFolderNameIfNeeded(folderName);
      
      this._owner._aSDKJsTV._iSDKFileSystem.getFileList2(storageName, folderName2, error, context,null);
    }

    //---------------------------------------------------------------
    public render_file_list(context)
    {
      console.log("ctx: ", context);
      var strFileSystem = "";
      var error:amGeneralError.am_general.A_Error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var aDateTime:amGeneralDateTime.am_general.A_DateTime = this._owner._aServiceLocator._iEntityCreation.createDefaultDateTime(error);
      //aDateTime.setDateTime(2019,6,19,17,3,54,0);
      var format: string = "dd/LL/yyyy HH:mm:ss";
      var locale: string = "default";
      var strCreationDate = "";
      var strFileContentType  = "";
      //strFileSystem += "<p>ret-get-file-list</p><p>" + JSON.stringify(ctx) + "</p>";
      //strFileSystem += "<h3> +
      strFileSystem += "<hr><center><table width='80%'>"+
                                                         "<tr width='100%' >" +
                                                           '<td width="4%"><b><input type="checkbox" value="" ng-model="FM.selectAll"></b></td>' +
                                                           '<td width="4%"><b>Type</b></td>' +
                                                           '<td width="20%"><b>Name</b></td>' +
                                                           '<td width="4%"><b>Ext</b></td>' +
                                                           '<td width="4%"><b>Content</b></td>' +
                                                           '<td width="10%"><b>Size</b></td>' +
                                                           '<td width="16%"><b>Creation Date</b></td>' +
                                                           '<td width="4%"><b>Delete</b></td>' +
                                                           '<td width="4%"><b>Copy</b></td>' +
                                                           '<td width="4%"><b>Move</b></td>' +
                                                           '<td width="4%"><b>Unzip</b></td>' +
                                                           '<td width="4%"><b>Zip</b></td>' +
                                                           '<td width="4%"><b>Upload</b></td>' +
                                                           '<td width="4%"><b>Sha</b></td>' +
                                                          '</tr>' ;
                                                          //"<tbody width='100%' >" ;

       var fList = context._arrayResult;
       //var strFileTblLines = "";
       //var strFileTblLine  = "";
       
       var parentFolder = this._owner._aUtilsService._iUtilsFiles.getParentFolderName(context._objectResult._path);
       var strFileExt = "";

       strFileSystem += '<tr style="nth-child(even) {background: #CCC};nth-child(odd){background: #FFF}" width="100%" class="sortable" ng-repeat="file in FM.curFiles | orderBy:\'folder\'">' +
                          '<td width="4%"><input type="checkbox" value="{{file.name}}" ng-model="file.selected"></td>'  +
                          '<td width="4%">' + 'folder' + '</td>' +
                          '<td width="20%"><a href="javascript:global_SDKRenderer.displayFolderFileList(\'' + context._objectResult._storage + '\',\'' + parentFolder + '/\' )" >' 
                                                  + ' .. ' + '</a></td> ' +
                          '<td width="4%"><small>' + strFileExt + '</small></td>' +
                          '<td width="4%"><small>' + strFileContentType + '</small></td>' +
                          '<td width="10%"><small>' + '0' + '</small></td>' +
                          '<td width="16%">' +  '</td>' +
                          '<td width="4%">' +  '</td>' +
                          '<td width="4%">' +  '</td>' +
                          '<td width="4%">' +  '</td>' +
                          '<td width="4%">' +  '</td>' +
                          '<td width="4%">' +  '</td>' +
                          '<td width="4%">' +  '</td>' +
                          '<td width="4%">' +  '</td>' +
                        '</tr>' ; //context._objectResult._path
       var displayDeleteCmd = "";
       var displayCopyCmd = "";
       var displayMoveCmd = "";
       var displayZipCmd = "";
       var displayUnzipCmd = "";
       var displayUploadCmd = "";
       var displayShaCmd = "";
       var fileSize = "";
       var displayCmd = "";
       //else if (strFileContentType == "video")
       //displayCmd = '<a href="javascript:global_SDKRenderer.start_display_videoFile(\'' + fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' 
         //                                                                             + fList[i]._fileName + '\' )" >' + fList[i]._fileName + '</a>';

       for (var i =  0; i < fList.length; i++)  
       {
         /*if ((i == 0)) // && (parentFolder != ""))
         {
         }*/
         if (fList[i]._type == "file")
         {
            strCreationDate = this._owner._aUtilsService._iUtilsDateTime.formatDateTimeFromISO(fList[i]. _creationDate, format, locale);
            strFileExt      = this._owner._aUtilsService._iUtilsFiles.getFileExtension(fList[i]._fileName);
            strFileContentType  = this._owner._aUtilsService._iUtilsFiles.getFileContentType(strFileExt);;
            fileSize = this._owner._aUtilsService._iUtilsFiles.formatFileSize(fList[i]._size, 2, "iec") ;
            if (strFileContentType == "image")
              displayCmd = '<a href="javascript:global_SDKRenderer.start_display_imageFile(\'' + fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' 
                                                                                               + fList[i]._fileName + '\' )" >' + fList[i]._fileName + '</a>';
            else if (strFileContentType == "video")
              displayCmd = '<a href="javascript:global_SDKRenderer.start_display_videoFile(\'' + fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' 
                                                                                               + fList[i]._fileName + '\' )" >' + fList[i]._fileName + '</a>';
            else if (strFileContentType == "stream")
              displayCmd = '<a href="javascript:global_SDKRenderer.start_display_streamFile(\'' + fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' 
                                                                                                + fList[i]._fileName + '\' )" >' + fList[i]._fileName + '</a>';
            else
              displayCmd = '<a href="javascript:global_SDKRenderer.displayFile(\'' + fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' 
                                                                                   + fList[i]._fileName + '\' )" >' + fList[i]._fileName + '</a>';

            displayDeleteCmd = '<a href="javascript:global_SDKRenderer.displayDeleteFile(\''+fList[i]._storage+'\',\''+fList[i]._path+'\',\''+fList[i]._fileName+'\')">'
                               +'<small>Delete</small></a>';
            displayCopyCmd   = '<a href="javascript:global_SDKRenderer.displayCopyFile(\'' +
                               fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' + fList[i]._fileName + '\',\'' + 
                               fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' + fList[i]._fileName + '_copy\'' + ');" >' + '<small>Copy</small>' + '</a>';
            displayMoveCmd =  '<a href="javascript:global_SDKRenderer.displayMoveFile(\'' +
                               fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' + fList[i]._fileName + '\',\'' + 
                               fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' + fList[i]._fileName + '_move\'' + ');" >' + '<small>Move</small>' + '</a>';
            displayZipCmd = '<a href="javascript:global_SDKRenderer.displayZipFile(\'' + 
                              fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' + fList[i]._fileName + '\',\'' + 
                              fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' + fList[i]._fileName + '.zip\'' + ');" >' + '<small>Zip</small>' + '</a>';
            displayUnzipCmd = '<a href="javascript:global_SDKRenderer.displayUnzipFile(\'' + 
                                fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' + fList[i]._fileName + '\',\'' + 
                                fList[i]._storage + '\',\'' + fList[i]._path + '\');" >' + '<small>Unzip</small>' + '</a>';
            displayUploadCmd = '<a href="javascript:global_SDKRenderer.displayUploadFile(\'' + 
                                fList[i]._storage + '\',\'' + fList[i]._path  + '\',\'' + fList[i]._fileName + '\',\'' + 
                                "http://flash.ro/jsp/upload/UploadFile.jsp" + '\',\'' +  ''  +  '\',\'' +  ''  +  '\' );" >' + '<small>Upload</small>' + '</a>';

            displayShaCmd   = '<a href="javascript:global_SDKRenderer.displayComputeAndSaveShaFile(\'' +
                                fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' + fList[i]._fileName + '\',\'' + 
                                fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' + fList[i]._fileName + '.sha\'' + ');" >' + '<small>Sha</small>' + '</a>';
             
            strFileSystem += '<tr width="100%" class="sortable" ng-repeat="file in FM.curFiles | orderBy:\'folder\'">' +
                   '<td width="4%"><input type="checkbox" value="{{file.name}}" ng-model="file.selected"></td>'  +
                   '<td width="4%">' + fList[i]._type + '</td>' +
                   '<td width="20%">' + displayCmd + '</td> ' +
                   '<td width="4%"><small>' + strFileExt + '</small></td>' +
                   '<td width="4%"><small>' + strFileContentType + '</small></td>' +
                   '<td width="10%"><small>' + fileSize + '</small></td>' +
                   '<td width="16%"><small>' + strCreationDate + '</small></td>' +
                   '<td width="4%">'  + displayDeleteCmd + '</td> ' +
                   '<td width="4%">'  + displayCopyCmd   +'</td> ' +
                    '<td width="4%">' + displayMoveCmd   +'</td> ' +
                    '<td width="4%">' + displayUnzipCmd  + '</td>' +
                    '<td width="4%">' + displayZipCmd    +'</td> ' +
                    '<td width="4%">' + displayUploadCmd + '</td>' +
                    '<td width="4%">' + displayShaCmd + '</td>' +
                  '</tr>' ;
 
          }else{

            strCreationDate = this._owner._aUtilsService._iUtilsDateTime.formatDateTimeFromISO(fList[i]. _creationDate, format, locale);
            strFileExt      = "";
            strFileContentType  = "";
            fileSize = fList[i]._size ;
            displayDeleteCmd = '<a href="javascript:global_SDKRenderer.displayDeleteFolder(\'' + fList[i]._storage + '\',\'' + fList[i]._path + fList[i]._fileName + '\' )" >'
                                + '<small>Delete</small>' + '</a>';
            displayCopyCmd   ='<a href="javascript:global_SDKRenderer.displayCopyFolder(\'' +
                                fList[i]._storage + '\',\'' + fList[i]._path + fList[i]._fileName + '\',\''  + 
                                fList[i]._storage + '\',\'' + fList[i]._path + fList[i]._fileName +  '_copy\'' + ')" >' 
                                + '<small>Copy</small>' + '</a>';
            displayMoveCmd = '<a href="javascript:global_SDKRenderer.displayMoveFolder(\'' +
                                fList[i]._storage + '\',\'' + fList[i]._path + fList[i]._fileName + '\',\'' +
                                fList[i]._storage + '\',\'' + fList[i]._path + fList[i]._fileName + '_move\'' + ')" >' 
                                + '<small>Move</small>' + '</a>';  
            displayUnzipCmd = '';  
            displayZipCmd   = '<a href="javascript:global_SDKRenderer.displayZipFolder(\'' +
                                fList[i]._storage + '\',\'' + fList[i]._path + fList[i]._fileName + '\',\'' + 
                                fList[i]._storage + '\',\'' + fList[i]._path + '\',\'' + 'archive.zip\'' + ')" >' 
                                + '<small>Zip</small>' + '</a>';
            displayUploadCmd = '';  
            displayShaCmd    = '';  
            strFileSystem += '<tr width="100%" class="sortable" ng-repeat="file in FM.curFiles | orderBy:\'folder\'">' +
                   '<td width="4%"><input type="checkbox" value="{{file.name}}" ng-model="file.selected"></td>'  +
                   '<td width="4%">' + fList[i]._type + '</td>' +
                   '<td width="20%"><a href="javascript:global_SDKRenderer.displayFolderFileList(\'' +fList[i]._storage+ '\',\'' + fList[i]._path + fList[i]._fileName + '/\' )" >' 
                                           + fList[i]._fileName + '</a></td> ' +
                   '<td width="4%"><small>' + strFileExt + '</small></td>' +
                   '<td width="4%"><small>' + strFileContentType + '</small></td>' +
                   '<td width="10%"><small>' + fileSize + '</small></td>' +
                   '<td width="16%"><small>' + strCreationDate + '</small></td>' +
                   '<td width="4%">'  + displayDeleteCmd +'</td> ' +
                   '<td width="4%">'  + displayCopyCmd   +'</td> ' +
                   '<td width="4%">'  + displayMoveCmd   +'</td> ' +
                   '<td width="4%">'  + displayUnzipCmd  + '</td>' +
                   '<td width="4%">'  + displayZipCmd    + '</td>' +
                   '<td width="4%">'  + displayUploadCmd + '</td>' +
                   '<td width="4%">' + displayShaCmd + '</td>' +
                  '</tr>' ;
                  //fList[i]._path +  + ' '+ fList[i]._fileName + ' '+
         }
      }
      strFileSystem += 
                                    //"</tbody>" +
                                  "</table></center><hr>" ;
      var strCurrentFolder = '<center><h4>Current Folder: ' + context._objectResult._storage + context._objectResult._path + '</h4></center>';                                  
      document.getElementById("sdk.filesystem-renderer.filelist").innerHTML = strCurrentFolder + strFileSystem;
      //document.getElementById("filesystem").innerHTML += JSON.stringify(context) ;

    }  


    //====================================================
    //  Manage Files functions
    //====================================================

    //--------------------------------------
    //  display File functions
    //--------------------------------------


    //---------------------------------------------------------------
    public action_displayFile(storageName: string, folderName: string, fileName: string)
    {
      this.action_eraseAllOpenDialogPanels();

      //alert("action_displayfile");
      var error: amGeneralError.am_general.A_Error      = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var context:amGeneralContext.am_general.A_Context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();

      this._owner._aSDKJsTV._iSDKFileSystem.readTextFile2(storageName, folderName, fileName, error, context, null);
          //this._owner._aSDKJsTV._iSDKFileSystem.getFileList(this._startFolder.getFullPath(),error,context,null);
    }

    //---------------------------------------------------------------
    public action_displayNewFile(storageName: string, folderName: string)
    {
      this.action_eraseAllOpenDialogPanels();

      var context:amGeneralContext.am_general.A_Context    = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
      var error:amGeneralError.am_general.A_Error          = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var fileInfo:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo.setStorage(storageName);
      fileInfo.setPath(folderName);
      fileInfo.setName("NewFile.txt");
      context.setResult("");
      context.setObjectResult(fileInfo);
      this.render_text_file(context);
    }    

    //---------------------------------------------------------------
    public render_text_file(context)
    {
      //document.getElementById("filesystem").innerHTML = JSON.stringify(context);
      var fileContent = context._result;
      var fileName    = context._objectResult._fileName;
      var fileStorage = context._objectResult._storage;
      var filePath    = context._objectResult._path;
      var strDisplayFile = 
        '<hr><center>' +
            '<div>' +
              '<div><h3>Display File</h3></div>'+
              '<div>' +
                 '<h4>File: <input id="idFileStorage" value="'+fileStorage+'"/>' 
                         + '<input id="idFilePath" value="'+filePath+'"/>' 
                         + '<input id="idFileName" value="'+fileName+'"/> </h4>' +
              '</div>' +
              '<div id="display-file-body"><textarea id="idFileContent" rows="12" cols="160">' +              
                 fileContent +          
              '</textarea></div>' + 
              //'<img width="30%" src=\'http://127.0.0.1:9080/external/usb/2/' + filePath + fileName + '\'>' +
              '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayFile();">Close</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.saveFile(document.getElementById(\'idFileStorage\').value, document.getElementById(\'idFilePath\').value, document.getElementById(\'idFileName\').value, document.getElementById(\'idFileContent\').value  );">Save</button>' +
              '</div>' +
            '</div>' +
        '</center><hr>' ;
        document.getElementById("sdk.filesystem-renderer.displayfile").innerHTML = strDisplayFile;
    }
    
    //---------------------------------------------------------------
    public action_eraseDisplayFile()
    {
      document.getElementById("sdk.filesystem-renderer.displayfile").innerHTML = "";
    }

    //---------------------------------------------------------------
    public action_saveFile(storageName: string, folderName: string, fileName: string, fileContent: string)
    {
      //alert("action_displayfile");
      var error: amGeneralError.am_general.A_Error      = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var context:amGeneralContext.am_general.A_Context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();

      this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_saveFile\t\tstart save text file : " + storageName + folderName + fileName);
      /*
      var owner = this._owner;
      var errorLog: amGeneralError.am_general.A_Error      = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var contextLog:amGeneralContext.am_general.A_Context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
      var callbackLog = function callbackLog(ctx)
      {
        owner._aLogRenderer._iLogMainRenderer.render_notify_log(ctx);
      }
      //contextLog.setRemoteCallback(true);
      this._owner._aLogRenderer._aTargetLog._iLogMain.log(4, "sdkrenderer.file-system.action_saveFile\t\tstart save text file : " 
                                                                + storageName + folderName + fileName, errorLog, contextLog, callbackLog);
      */
      
      this._owner._aSDKJsTV._iSDKFileSystem.writeTextFile2(storageName, folderName, fileName, fileContent, error, context, null);
                                                                
    }    

    //---------------------------------------------------------------
    public render_notify_writeTextFile2(context)
    {
      this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_saveFile\t\tend save text file : " 
                                                               + context._objectResult._storage + context._objectResult._path + context._objectResult._fileName, context);
      /*
      var errorLog: amGeneralError.am_general.A_Error      = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var contextLog:amGeneralContext.am_general.A_Context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
      var owner = this._owner;
      var callbackLog = function callbackLog(ctx)
      {
        owner._aLogRenderer._iLogMainRenderer.render_notify_log(ctx);
      }
      //contextLog.setRemoteCallback(true);
      if ( (context._error === null) || (context._error._id == 0))
        this._owner._aLogRenderer._aTargetLog._iLogMain.log(4, "sdkrenderer.file-system.action_saveFile\t\tend save text file : " 
                                                                + context._objectResult._storage + context._objectResult._path + context._objectResult._fileName + " - ok", 
                                                                errorLog, contextLog, callbackLog);
      else 
        this._owner._aLogRenderer._aTargetLog._iLogMain.log(2, "sdkrenderer.file-system.action_saveFile\t\tend save text file : " 
                                                                + context._objectResult._storage + context._objectResult._path + context._objectResult._fileName 
                                                                + " - error : " + context._error._msg,
                                                                   errorLog, contextLog, callbackLog);
      */
      this.action_getFileList(context._objectResult._storage, context._objectResult._path);
    }
    

    //----------------
    //  delete file
    //----------------

    //---------------------------------------------------------------
    public action_displayDeleteFile(storageName: string, folderName: string, fileName: string)
    {
      this.action_eraseAllOpenDialogPanels();

      var context:amGeneralContext.am_general.A_Context    = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
      var error:amGeneralError.am_general.A_Error          = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var fileInfo:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo.setStorage(storageName);
      fileInfo.setPath(folderName);
      fileInfo.setName(fileName);
      context.setResult("");
      context.setObjectResult(fileInfo);
      this.render_displayDeleteFile(context);
    }    

    //-------------------------------------------------------
    public render_displayDeleteFile(context)
    {
      var fileName    = context._objectResult._fileName;
      var fileStorage = context._objectResult._storage;
      var filePath    = context._objectResult._path;
      var strDisplayDeleteFile = 
        '<hr><center>' +
            '<div>' +
              '<div><h3>Delete File</h3></div>'+
              '<div>' +
                 '<h4>Are you sure to delete the file: <input readonly id="idDelFileStorage" value="'+fileStorage+'"/>' 
                         + '<input readonly id="idDelFilePath" value="'+filePath+'"/>' 
                         + '<input readonly id="idDelFileName" value="'+fileName+'"/> </h4>' +
              '</div>' +
              '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayDeleteFile();">Cancel</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.deleteFile(document.getElementById(\'idDelFileStorage\').value, document.getElementById(\'idDelFilePath\').value, document.getElementById(\'idDelFileName\').value );">Delete File</button>' +
              '</div>' +
            '</div>' +
        '</center><hr>' ;
        document.getElementById("sdk.filesystem-renderer.display-deletefile").innerHTML = strDisplayDeleteFile;
    }

    //---------------------------------------------------------------
    public action_eraseDisplayDeleteFile()
    {
      document.getElementById("sdk.filesystem-renderer.display-deletefile").innerHTML = "";
    }    

    //---------------------------------------------------------------
    public action_deleteFile(storageName: string, folderName: string, fileName: string)
    {
      var error: amGeneralError.am_general.A_Error      = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var context:amGeneralContext.am_general.A_Context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();

      this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_deletefile\t\tstart delete file : " + storageName + folderName + fileName);
      this._owner._aSDKJsTV._iSDKFileSystem.removeFile2(storageName, folderName, fileName, error, context, null);
    }    

    //---------------------------------------------------------------
    public render_notify_deleteFile2(context)
    {
      this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_deleteFile\t\tend delete file : " 
                                                + context._objectResult._storage + context._objectResult._path + context._objectResult._fileName, context);

      this.action_getFileList(context._objectResult._storage, context._objectResult._path);
    }

    //--------------------------------------
    //  copy file
    //--------------------------------------
    
    //---------------------------------------------------------------
    public action_displayCopyFile(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string)
    {
      this.action_eraseAllOpenDialogPanels();

      var context:amGeneralContext.am_general.A_Context    = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
      var error:amGeneralError.am_general.A_Error          = this._owner._aServiceLocator._iEntityCreation.createDefaultError();

      var fileInfo:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo.setStorage(srcStorageName);
      fileInfo.setPath(srcFolderName);
      fileInfo.setName(srcFileName);
      context.setResult("");
      context.setObjectResult(fileInfo);

      var fileInfo2:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo2.setStorage(dstStorageName);
      fileInfo2.setPath(dstFolderName);
      fileInfo2.setName(dstFileName);
      context.setObject2Result(fileInfo2);

      this.render_copyFile(context);
    }    

    //-------------------------------------------------------
    public render_copyFile(context)
    {
      var srcStorageName = context._objectResult._storage;
      var srcFolderName  = context._objectResult._path;
      var srcFileName    = context._objectResult._fileName;

      var dstStorageName = context._object2Result._storage;
      var dstFolderName  = context._object2Result._path;
      var dstFileName    = context._object2Result._fileName;

      var strDisplayCopyFile = 
        '<hr><center>' +
            '<div>' +
            '<div><h3>Copy File</h3></div>'+
              '<div>' +
                 '<h4>Source File: <input id="idCopyFileSrcStorageName" value="'+ srcStorageName +'"/>' 
                                + '<input id="idCopyFileSrcFolderName"  value="'+ srcFolderName+'"/>' 
                                + '<input id="idCopyFileSrcFileName"    value="'+ srcFileName+'"/> </h4>' +
              '</div>' +
              '<div>' +
                 '<h4>Destination File: <input id="idCopyFileDstStorageName" value="'+ dstStorageName +'"/>' 
                                      + '<input id="idCopyFileDstFolderName" value="'+ dstFolderName+'"/>' 
                                      + '<input id="idCopyFileDstFileName"   value="'+ dstFileName+'"/> </h4>' +
              '</div>' +
              '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayCopyFile();">Cancel</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.copyFile('+
                    'document.getElementById(\'idCopyFileSrcStorageName\').value, document.getElementById(\'idCopyFileSrcFolderName\').value, document.getElementById(\'idCopyFileSrcFileName\').value,'+
                    'document.getElementById(\'idCopyFileDstStorageName\').value, document.getElementById(\'idCopyFileDstFolderName\').value, document.getElementById(\'idCopyFileDstFileName\').value'+
                      ');">Copy File</button>' +
              '</div>' +
            '</div>' +
        '</center><hr>' ;
        document.getElementById("sdk.filesystem-renderer.display-copyfile").innerHTML = strDisplayCopyFile;
    }

    //---------------------------------------------------------------
    public action_eraseDisplayCopyFile()
    {
      document.getElementById("sdk.filesystem-renderer.display-copyfile").innerHTML = "";
    }    

    //---------------------------------------------------------------
    public action_copyFile(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string)
    {
      var error: amGeneralError.am_general.A_Error      = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var context:amGeneralContext.am_general.A_Context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
      //document.getElementById("sdk.message").innerHTML += "<p>Renderer.action_copyFile</p>";
      this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_copyfile\t\tstart copy file : " 
                                                                            + srcStorageName + srcFolderName + srcFileName + " to " 
                                                                            + dstStorageName + dstFolderName + dstFileName );
      this._owner._aSDKJsTV._iSDKFileSystem.copyFile2(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, null);
    }    

    //---------------------------------------------------------------
    public render_notify_copyFile2(context)
    {
      this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_copyFile\t\tend copy file : " + context._result,
                                                      //+ context._object2Result._storage + context._object2Result._path + context._object2Result._fileName + " to "
                                                      //+ context._objectResult._storage + context._objectResult._path + context._objectResult._fileName, 
                                                      context);

      this.action_getFileList(context._objectResult._storage, context._objectResult._path);
    }

    //--------------------------------------
    //  move file
    //--------------------------------------
    
    //---------------------------------------------------------------
    public action_displayMoveFile(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string)
    {
      this.action_eraseAllOpenDialogPanels();

      var context:amGeneralContext.am_general.A_Context    = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
      var error:amGeneralError.am_general.A_Error          = this._owner._aServiceLocator._iEntityCreation.createDefaultError();

      var fileInfo:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo.setStorage(srcStorageName);
      fileInfo.setPath(srcFolderName);
      fileInfo.setName(srcFileName);
      context.setResult("");
      context.setObjectResult(fileInfo);

      var fileInfo2:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo2.setStorage(dstStorageName);
      fileInfo2.setPath(dstFolderName);
      fileInfo2.setName(dstFileName);
      context.setObject2Result(fileInfo2);

      this.render_moveFile(context);
    }    

    //-------------------------------------------------------
    public render_moveFile(context)
    {
      var srcStorageName = context._objectResult._storage;
      var srcFolderName  = context._objectResult._path;
      var srcFileName    = context._objectResult._fileName;

      var dstStorageName = context._object2Result._storage;
      var dstFolderName  = context._object2Result._path;
      var dstFileName    = context._object2Result._fileName;

      var strDisplayMoveFile = 
        '<hr><center>' +
            '<div>' +
            '<div><h3>Move File</h3></div>'+
              '<div>' +
                 '<h4>Source File: <input id="idMoveFileSrcStorageName" value="'+ srcStorageName +'"/>' 
                                + '<input id="idMoveFileSrcFolderName"  value="'+ srcFolderName+'"/>' 
                                + '<input id="idMoveFileSrcFileName"    value="'+ srcFileName+'"/> </h4>' +
              '</div>' +
              '<div>' +
                 '<h4>Destination File: <input id="idMoveFileDstStorageName" value="'+ dstStorageName +'"/>' 
                                      + '<input id="idMoveFileDstFolderName" value="'+ dstFolderName+'"/>' 
                                      + '<input id="idMoveFileDstFileName"   value="'+ dstFileName+'"/> </h4>' +
              '</div>' +
              '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayMoveFile();">Cancel</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.moveFile('+
                    'document.getElementById(\'idMoveFileSrcStorageName\').value, document.getElementById(\'idMoveFileSrcFolderName\').value, document.getElementById(\'idMoveFileSrcFileName\').value,'+
                    'document.getElementById(\'idMoveFileDstStorageName\').value, document.getElementById(\'idMoveFileDstFolderName\').value, document.getElementById(\'idMoveFileDstFileName\').value'+
                      ');">Move File</button>' +
              '</div>' +
            '</div>' +
        '</center><hr>' ;
        document.getElementById("sdk.filesystem-renderer.display-movefile").innerHTML = strDisplayMoveFile;
    }

    //---------------------------------------------------------------
    public action_eraseDisplayMoveFile()
    {
      document.getElementById("sdk.filesystem-renderer.display-movefile").innerHTML = "";
    }    

    //---------------------------------------------------------------
    public action_moveFile(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string)
    {
      var error: amGeneralError.am_general.A_Error      = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var context:amGeneralContext.am_general.A_Context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();

      this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_movefile\t\tstart move file : " 
                                                                            + srcStorageName + srcFolderName + srcFileName + " to " 
                                                                            + dstStorageName + dstFolderName + dstFileName );
      this._owner._aSDKJsTV._iSDKFileSystem.moveFile2(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, null);
    }    

    //---------------------------------------------------------------
    public render_notify_moveFile2(context)
    {
      this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_moveFile\t\tend move file : " + context._result,
                                                      //+ context._object2Result._storage + context._object2Result._path + context._object2Result._fileName + " to "
                                                      //+ context._objectResult._storage + context._objectResult._path + context._objectResult._fileName, 
                                                      context);
      this.action_getFileList(context._objectResult._storage, context._objectResult._path);
    }

    //--------------------------------------
    //  download file
    //--------------------------------------
    
    //---------------------------------------------------------------
    public action_displayDownloadFile(remoteUrlName: string, dstStorageName: string, dstFolderName: string, dstFileName: string)
    {
      this.action_eraseAllOpenDialogPanels();

      var context:amGeneralContext.am_general.A_Context    = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
      var error:amGeneralError.am_general.A_Error          = this._owner._aServiceLocator._iEntityCreation.createDefaultError();

      var fileInfo:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo.setStorage(remoteUrlName);
      fileInfo.setPath("");
      fileInfo.setName("");
      context.setResult("");
      context.setObjectResult(fileInfo);

      var fileInfo2:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo2.setStorage(dstStorageName);
      fileInfo2.setPath(dstFolderName);
      fileInfo2.setName(dstFileName);
      context.setObject2Result(fileInfo2);

      this.render_downloadFile(context);
    }    

    //-------------------------------------------------------
    public render_downloadFile(context)
    {
      var remoteUrlName = context._objectResult._storage;

      var dstStorageName = context._object2Result._storage;
      var dstFolderName  = context._object2Result._path;
      var dstFileName    = context._object2Result._fileName;
      var strDisplayDownloadFile = 
        '<hr><center>' +
            '<div>' +
              '<div><h3>Download File</h3></div>'+
              '<div>' +
                 '<h4>Url: <input id="idDownloadRemoteUrlName" value="'+ remoteUrlName +'" size="60" maxlength="512"/></h4>' +
              '</div>' +
              '<div>' +
                 '<h4>Destination File:'+ 
                  '<input id="idDownloadDstStorageName" value="'+ dstStorageName +'"/>' 
                + '<input id="idDownloadDstFolderName" value="'+ dstFolderName +'"/>' 
                + '<input id="idDownloadDstFileName" value="'+ dstFileName+'"/></h4>' +
              '</div>' +
              '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayDownloadFile();">Cancel</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.downloadFile('+
                          'document.getElementById(\'idDownloadRemoteUrlName\').value, document.getElementById(\'idDownloadDstStorageName\').value,'+ 
                          'document.getElementById(\'idDownloadDstFolderName\').value, document.getElementById(\'idDownloadDstFileName\').value);">Download File</button>' +
              '</div>' +
            '</div>' +
        '</center><hr>' ;
        document.getElementById("sdk.filesystem-renderer.display-downloadfile").innerHTML = strDisplayDownloadFile;
    }

    //---------------------------------------------------------------
    public action_eraseDisplayDownloadFile()
    {
      document.getElementById("sdk.filesystem-renderer.display-downloadfile").innerHTML = "";
    }    

    //---------------------------------------------------------------
    public action_downloadFile(srcUrlFullName: string, dstStorageName: string, dstFolderName: string, dstFileName: string)
    {
      var error: amGeneralError.am_general.A_Error      = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var context:amGeneralContext.am_general.A_Context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();

      this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_downloadfile\t\tstart download file from: " 
                                                                            + srcUrlFullName + " to " 
                                                                            + dstStorageName + dstFolderName + dstFileName );
      this._owner._aSDKJsTV._iSDKFileSystem.downloadFile2(srcUrlFullName, dstStorageName, dstFolderName, dstFileName, error, context, null);
    }    

    //---------------------------------------------------------------
    public render_notify_downloadFile2(context)
    {
      this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_downloadFile\t\tend download file : " + context._result,
                                                      //+ context._object2Result._storage + context._object2Result._path + context._object2Result._fileName + " to "
                                                      //+ context._objectResult._storage + context._objectResult._path + context._objectResult._fileName, 
                                                      context);
      this.action_getFileList(context._objectResult._storage, context._objectResult._path);
    }

    //--------------------------------------
    //  upload file
    //--------------------------------------
    
    //---------------------------------------------------------------
    public action_displayUploadFile(srcStorageName: string, srcFolderName: string, srcFileName: string, remoteUrlName: string, remoteFolderName: string, remoteFileName: string)
    {
      this.action_eraseAllOpenDialogPanels();

      var context:amGeneralContext.am_general.A_Context    = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
      var error:amGeneralError.am_general.A_Error          = this._owner._aServiceLocator._iEntityCreation.createDefaultError();

      var fileInfo:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo.setStorage(srcStorageName);
      fileInfo.setPath(srcFolderName);
      fileInfo.setName(srcFileName);
      context.setResult("");
      context.setObjectResult(fileInfo);

      var fileInfo2:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo2.setStorage(remoteUrlName);
      fileInfo2.setPath(remoteFolderName);
      fileInfo2.setName(remoteFileName);
      context.setObject2Result(fileInfo2);

      this.render_uploadFile(context);
    }    

    //-------------------------------------------------------
    public render_uploadFile(context)
    {
      var srcStorageName = context._objectResult._storage;
      var srcFolderName  = context._objectResult._path;
      var srcFileName    = context._objectResult._fileName;

      var remoteUrlName     = context._object2Result._storage;
      var remoteFolderName  = context._object2Result._path;
      var remoteFileName    = context._object2Result._fileName;

      var strDisplayUploadFile = 
        '<hr><center>' +
            '<div>' +
            '<div><h3>Upload File</h3></div>'+
              '<div>' +
                 '<h4>Source File: <input id="idUploadFileSrcStorageName" value="'+ srcStorageName +'"/>' 
                                + '<input id="idUploadFileSrcFolderName"  value="'+ srcFolderName+'"/>' 
                                + '<input id="idUploadFileSrcFileName"    value="'+ srcFileName+'"/> </h4>' +
              '</div>' +
              '<div>' +
                 '<h4>Destination Url: <input id="idUploadFileRemoteUrlName"    value="'+ remoteUrlName +'"/>' 
                                    + '<input id="idUploadFileRemoteFolderName" value="'+ remoteFolderName+'"/>' 
                                    + '<input id="idUploadFileRemoteFileName"   value="'+ remoteFileName+'"/> </h4>' +
              '</div>' +
              '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayUploadFile();">Cancel</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.uploadFile('+
                    'document.getElementById(\'idUploadFileSrcStorageName\').value, document.getElementById(\'idUploadFileSrcFolderName\').value, document.getElementById(\'idUploadFileSrcFileName\').value,'+
                    'document.getElementById(\'idUploadFileRemoteUrlName\').value, document.getElementById(\'idUploadFileRemoteFolderName\').value, document.getElementById(\'idUploadFileRemoteFileName\').value'+
                      ');">Upload File</button>' +
              '</div>' +
            '</div>' +
        '</center><hr>' ;
        document.getElementById("sdk.filesystem-renderer.display-uploadfile").innerHTML = strDisplayUploadFile;
    }

    //---------------------------------------------------------------
    public action_eraseDisplayUploadFile()
    {
      document.getElementById("sdk.filesystem-renderer.display-uploadfile").innerHTML = "";
    }    

    //---------------------------------------------------------------
    public action_uploadFile(srcStorageName: string, srcFolderName: string, srcFileName: string, remoteUrlName: string, remoteFolderName: string, remoteFileName: string)
    {
      var error: amGeneralError.am_general.A_Error      = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var context:amGeneralContext.am_general.A_Context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();

      this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_uploadfile\t\tstart upload file : " 
                                                                            + srcStorageName + srcFolderName + srcFileName + " to " 
                                                                            + remoteUrlName + " (" + remoteFolderName + "," + remoteFileName + ")" );
      this._owner._aSDKJsTV._iSDKFileSystem.uploadFile2(srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, null);
    }    

    //---------------------------------------------------------------
    public render_notify_uploadFile2(context)
    {
      this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_uploadFile\t\tend upload file : " + context._result,
                                                      //+ context._object2Result._storage + context._object2Result._path + context._object2Result._fileName + " to "
                                                      //+ context._objectResult._storage + context._objectResult._path + context._objectResult._fileName, 
                                                      context);
      this.action_getFileList(context._objectResult._storage, context._objectResult._path);
    }

    //--------------------------------------
    //  unzip file
    //--------------------------------------
    
    //---------------------------------------------------------------
    public action_displayUnzipFile(zipStorageName: string, zipFolderName: string, zipFileName: string, unzipStorageName: string, unzipFolderName: string)
    {
      this.action_eraseAllOpenDialogPanels();

      var context:amGeneralContext.am_general.A_Context    = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
      var error:amGeneralError.am_general.A_Error          = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      
      var fileInfo:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo.setStorage(zipStorageName);
      fileInfo.setPath(zipFolderName);
      fileInfo.setName(zipFileName);
      context.setResult("");
      context.setObjectResult(fileInfo);

      var fileInfo2:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo2.setStorage(unzipStorageName);
      fileInfo2.setPath(unzipFolderName);
      fileInfo2.setName("newunzipfolder");
      context.setObject2Result(fileInfo2);

      this.render_unzipFile(context);
    }    

    //-------------------------------------------------------
    public render_unzipFile(context)
    {
      var zipStorageName = context._objectResult._storage;
      var zipFolderName  = context._objectResult._path;
      var zipFileName    = context._objectResult._fileName;

      var dstStorageName = context._object2Result._storage;
      var dstFolderName  = context._object2Result._path + context._object2Result._fileName;

      var strDisplayUnzipFile = 
        '<hr><center>' +
            '<div>' +
            '<div><h3>Unzip File</h3></div>'+
              '<div>' +
                 '<h4>Zip File: <input id="idUnzipFileZipStorageName" value="'+ zipStorageName +'"/>' 
                             + '<input id="idUnzipFileZipFolderName"  value="'+ zipFolderName+'"/>' 
                             + '<input id="idUnzipFileZipFileName"    value="'+ zipFileName+'"/> </h4>' +
              '</div>' +
              '<div>' +
                 '<h4>Destination Folder: <input id="idUnzipFileDstStorageName" value="'+ dstStorageName +'"/>' + 
                                         '<input id="idUnzipFileDstFolderName" value="'+ dstFolderName+'"/>' +
                 '</h4>' +
              '</div>' +
              '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayUnzipFile();">Cancel</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.unzipFile('+
                    'document.getElementById(\'idUnzipFileZipStorageName\').value, document.getElementById(\'idUnzipFileZipFolderName\').value, document.getElementById(\'idUnzipFileZipFileName\').value,'+
                    'document.getElementById(\'idUnzipFileDstStorageName\').value, document.getElementById(\'idUnzipFileDstFolderName\').value'+
                      ');">Unzip File</button>' +
              '</div>' +
            '</div>' +
        '</center><hr>' ;
        document.getElementById("sdk.filesystem-renderer.display-unzipfile").innerHTML = strDisplayUnzipFile;
    }

    //---------------------------------------------------------------
    public action_eraseDisplayUnzipFile()
    {
      document.getElementById("sdk.filesystem-renderer.display-unzipfile").innerHTML = "";
    }    

    //---------------------------------------------------------------
    public action_unzipFile(zipStorageName: string, zipFolderName: string, zipFileName: string, unzipStorageName: string, unzipFolderName: string)
    {
      var error: amGeneralError.am_general.A_Error      = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var context:amGeneralContext.am_general.A_Context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();

      this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_unzipfile\t\tstart unzip file : " 
                                                                            + zipStorageName + zipFolderName + zipFileName + " to " 
                                                                            + unzipStorageName + unzipFolderName );
      this._owner._aSDKJsTV._iSDKFileSystem.unzipFile2(zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, null);
    }    

    //---------------------------------------------------------------
    public render_notify_unzipFile2(context)
    {
      this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_unzipFile\t\tend unzip file : " + context._result,
                                                      //+ context._object2Result._storage + context._object2Result._path + context._object2Result._fileName + " to "
                                                      //+ context._objectResult._storage + context._objectResult._path + context._objectResult._fileName, 
                                                      context);
      this.action_getFileList(context._objectResult._storage, context._objectResult._path);
    }

    //--------------------------------------
    //  zip file
    //--------------------------------------
    
    //---------------------------------------------------------------
    public action_displayZipFile(storageName: string, folderName: string, fileName: string, zipStorageName: string, zipFolderName: string, zipFileName: string)
    {
      this.action_eraseAllOpenDialogPanels();

      var context:amGeneralContext.am_general.A_Context    = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
      var error:amGeneralError.am_general.A_Error          = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      
      var fileInfo:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo.setStorage(storageName);
      fileInfo.setPath(folderName);
      fileInfo.setName(fileName);
      context.setResult("");
      context.setObjectResult(fileInfo);

      var fileInfo2:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo2.setStorage(zipStorageName);
      fileInfo2.setPath(zipFolderName);
      fileInfo2.setName(zipFileName);
      context.setObject2Result(fileInfo2);

      this.render_zipFile(context);
    }    

    //-------------------------------------------------------
    public render_zipFile(context)
    {
      var srcStorageName = context._objectResult._storage;
      var srcFolderName  = context._objectResult._path;
      var srcFileName    = context._objectResult._fileName;

      var zipStorageName = context._object2Result._storage;
      var zipFolderName  = context._object2Result._path;
      var zipFileName    = context._object2Result._fileName;

      var strDisplayZipFile = 
        '<hr><center>' +
            '<div>' +
            '<div><h3>Zip File</h3></div>'+
              '<div>' +
                 '<h4>Source File: <input id="idZipFileSrcStorageName" value="'+ srcStorageName +'"/>' 
                                + '<input id="idZipFileSrcFolderName"  value="'+ srcFolderName+'"/>' 
                                + '<input id="idZipFileSrcFileName"    value="'+ srcFileName+'"/> </h4>' +
              '</div>' +
              '<div>' +
                 '<h4>Zip File: <input id="idZipFileZipStorageName" value="'+ zipStorageName +'"/>' 
                             + '<input id="idZipFileZipFolderName" value="' + zipFolderName+'"/>' 
                             + '<input id="idZipFileZipFileName"   value="' + zipFileName+'"/> </h4>' +
              '</div>' +
              '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayZipFile();">Cancel</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.zipFile('+
                    'document.getElementById(\'idZipFileSrcStorageName\').value, document.getElementById(\'idZipFileSrcFolderName\').value, document.getElementById(\'idZipFileSrcFileName\').value,'+
                    'document.getElementById(\'idZipFileZipStorageName\').value, document.getElementById(\'idZipFileZipFolderName\').value, document.getElementById(\'idZipFileZipFileName\').value'+
                      ');">Zip File</button>' +
              '</div>' +
            '</div>' +
        '</center><hr>' ;
        document.getElementById("sdk.filesystem-renderer.display-zipfile").innerHTML = strDisplayZipFile;
    }

    //---------------------------------------------------------------
    public action_eraseDisplayZipFile()
    {
      document.getElementById("sdk.filesystem-renderer.display-zipfile").innerHTML = "";
    }    

    //---------------------------------------------------------------
    public action_zipFile(storageName: string, folderName: string, fileName: string, zipStorageName: string, zipFolderName: string, zipFileName: string)
    {
      var error: amGeneralError.am_general.A_Error      = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var context:amGeneralContext.am_general.A_Context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();

      this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_zipfile\t\tstart zip file : " 
                                                                            + storageName + folderName + fileName + " to " 
                                                                            + zipStorageName + zipFolderName + zipFileName);
      this._owner._aSDKJsTV._iSDKFileSystem.zipFile2(storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, null);
    }    

    //---------------------------------------------------------------
    public render_notify_zipFile2(context)
    {
      this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_zipFile\t\tend zip file : " + context._result,
                                                      //+ context._object2Result._storage + context._object2Result._path + context._object2Result._fileName + " to "
                                                      //+ context._objectResult._storage + context._objectResult._path + context._objectResult._fileName, 
                                                      context);
      this.action_getFileList(context._objectResult._storage, context._objectResult._path);
    }

    //====================================================
    //  Manage Folders functions
    //====================================================

    //---------------------------------------------------------------
    public action_displayNewFolder(storageName: string, folderName: string)
    {
      this.action_eraseAllOpenDialogPanels();

      var context:amGeneralContext.am_general.A_Context    = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
      var error:amGeneralError.am_general.A_Error          = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var fileInfo:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo.setStorage(storageName);
      fileInfo.setPath(folderName + "NewFolder/");
      fileInfo.setName("");
      context.setResult("");
      context.setObjectResult(fileInfo);
      this.render_folder(context);
    }    

    //---------------------------------------------------------------
    public render_folder(context)
    {
      //document.getElementById("filesystem").innerHTML = JSON.stringify(context);
      var folderStorage = context._objectResult._storage;
      var folderPath    = context._objectResult._path;
      var strDisplayFolder = 
        '<hr><center>' +
            '<div>' +
              '<div><h3>Create Folder</h3></div>'+
              '<div>' +
                  '<h4>Folder: <input id="idFolderStorage" value="'+folderStorage+'"/>' +
                              '<input id="idFolderPath" value="'+folderPath+'"/>' +
              '</div>' +
              '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayNewFolder();">Close</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.createFolder(document.getElementById(\'idFolderStorage\').value, document.getElementById(\'idFolderPath\').value);">Create Folder</button>' +
              '</div>' +
            '</div>' +
        '</center><hr>' ;
        document.getElementById("sdk.filesystem-renderer.displayfolder").innerHTML = strDisplayFolder;
    }

    //---------------------------------------------------------------
    public action_eraseDisplayNewFolder()
    {
      document.getElementById("sdk.filesystem-renderer.displayfolder").innerHTML = "";
    }    

    //---------------------------------------------------------------
    public action_createFolder(storageName: string, folderName: string)
    {
      var error: amGeneralError.am_general.A_Error      = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var context:amGeneralContext.am_general.A_Context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
    
      this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_createfolder\t\tstart create folder : " 
                                                                            + storageName + folderName );
      this._owner._aSDKJsTV._iSDKFileSystem.createFolder2(storageName, folderName, error, context, null);
    }    

    //---------------------------------------------------------------
    public render_notify_createFolder2(context)
    {
      //document.getElementById("sdk.message").innerHTML += "<p> parent-folder" + parentFolder + "</p>";
      //document.getElementById("sdk.message").innerHTML += "<p>notify crt-storage "    + context._objectResult._storage + "</p>";
      //document.getElementById("sdk.message").innerHTML += "<p>notify crt-folder "    + context._objectResult._path + "</p>";
      this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_createFolder\t\tend create folder : " + context._result,
                                                  //+ context._object2Result._storage + context._object2Result._path + context._object2Result._fileName + " to "
                                                  //+ context._objectResult._storage + context._objectResult._path + context._objectResult._fileName, 
                                                  context);

      this.action_getFileList(context._objectResult._storage, context._objectResult._path);
    }

    //-------------------------
    // delete folder functions
    //-------------------------
    
    //---------------------------------------------------------------
    public action_displayDeleteFolder(storageName: string, folderName: string)
    {
      this.action_eraseAllOpenDialogPanels();

      var context:amGeneralContext.am_general.A_Context    = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
      var error:amGeneralError.am_general.A_Error          = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var fileInfo:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo.setStorage(storageName);
      fileInfo.setPath(folderName);
      fileInfo.setName("");
      context.setResult("");
      context.setObjectResult(fileInfo);
      this.render_deleteFolder(context);
    }

    //--------------------------------------------------
    public render_deleteFolder(context)
    {
      //document.getElementById("filesystem").innerHTML = JSON.stringify(context);
      var folderStorage = context._objectResult._storage;
      var folderPath    = context._objectResult._path;
      var strDeleteFolder = 
        '<hr><center>' +
            '<div>' +
              '<div><h3>Delete Folder</h3></div>'+
              '<div>' +
                  '<h4>Are you sure to delete Folder (and all its content) : <input readonly id="idDelFolderStorage" value="'+folderStorage+'"/>' +
                              '<input readonly id="idDelFolderPath" value="'+folderPath+'"/>' +
              '</div>' +
              '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayDeleteFolder();">Cancel</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.deleteFolder'+
                       '(document.getElementById(\'idDelFolderStorage\').value, document.getElementById(\'idDelFolderPath\').value);">Delete Folder</button>' +
              '</div>' +
            '</div>' +
        '</center><hr>' ;
        document.getElementById("sdk.filesystem-renderer.display-deletefolder").innerHTML = strDeleteFolder;
    }

    //---------------------------------------------------------------
    public action_eraseDisplayDeleteFolder()
    {
      document.getElementById("sdk.filesystem-renderer.display-deletefolder").innerHTML = "";
    }

    //---------------------------------------------------------------
    public action_deleteFolder(storageName: string, folderName: string)
    {
      var error: amGeneralError.am_general.A_Error      = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var context:amGeneralContext.am_general.A_Context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
    
      this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_deletefolder\t\tstart delete folder : " 
                                                                            + storageName + folderName );
      this._owner._aSDKJsTV._iSDKFileSystem.deleteFolder2(storageName, folderName, error, context, null);
    }

    //---------------------------------------------------------------
    public render_notify_deleteFolder2(context)
    {
      var parentFolder = this._owner._aUtilsService._iUtilsFiles.getParentFolderName(context._objectResult._path);
      this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_deleteFolder\t\tend delete folder : " + context._result,
                                                  //+ context._object2Result._storage + context._object2Result._path + context._object2Result._fileName + " to "
                                                  //+ context._objectResult._storage + context._objectResult._path + context._objectResult._fileName, 
                                                  context);

      this.action_getFileList(context._objectResult._storage, parentFolder);
    }

    //-------------------------
    // copy folder functions
    //-------------------------
    
    //---------------------------------------------------------------
    public action_displayCopyFolder(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string)
    {
      this.action_eraseAllOpenDialogPanels();

      var context:amGeneralContext.am_general.A_Context    = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
      var error:amGeneralError.am_general.A_Error          = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      
      var fileInfo:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo.setStorage(srcStorageName);
      fileInfo.setPath(srcFolderName);
      fileInfo.setName("");
      context.setResult("");
      context.setObjectResult(fileInfo);

      var fileInfo2:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo2.setStorage(dstStorageName);
      fileInfo2.setPath(dstFolderName);
      fileInfo2.setName("");
      context.setObject2Result(fileInfo2);

      this.render_copyFolder(context);
    }

    //--------------------------------------------------
    public render_copyFolder(context)
    {
      var srcStorageName = context._objectResult._storage;
      var srcFolderName  = context._objectResult._path;

      var dstStorageName = context._object2Result._storage;
      var dstFolderName  = context._object2Result._path;

      var strDisplayCopyFolder = 
        '<hr><center>' +
            '<div>' +
            '<div><h3>Copy Folder</h3></div>'+
              '<div>' +
                 '<h4>Source Folder: <input id="idCopyFolderSrcStorageName" value="'+ srcStorageName +'"/>' + 
                                    '<input id="idCopyFolderSrcFolderName"  value="'+ srcFolderName+'"/>' +
              '</div>' +
              '<div>' +
                 '<h4>Destination Folder: <input id="idCopyFolderDstStorageName" value="'+ dstStorageName +'"/>' +
                                        '<input id="idCopyFolderDstFolderName" value="'+ dstFolderName+'"/>' +
              '</div>' +
              '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayCopyFolder();">Cancel</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.copyFolder('+
                    'document.getElementById(\'idCopyFolderSrcStorageName\').value, document.getElementById(\'idCopyFolderSrcFolderName\').value, '+
                    'document.getElementById(\'idCopyFolderDstStorageName\').value, document.getElementById(\'idCopyFolderDstFolderName\').value '+
                      ');">Copy Folder</button>' +
              '</div>' +
            '</div>' +
        '</center><hr>' ;
        document.getElementById("sdk.filesystem-renderer.display-copyfolder").innerHTML = strDisplayCopyFolder;
    }

    //---------------------------------------------------------------
    public action_eraseDisplayCopyFolder()
    {
      document.getElementById("sdk.filesystem-renderer.display-copyfolder").innerHTML = "";
    }

    //---------------------------------------------------------------
    public action_copyFolder(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string)
    {
      var error: amGeneralError.am_general.A_Error      = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var context:amGeneralContext.am_general.A_Context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();

      this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_copyfolder\t\tstart copy folder : " 
                                                                  + srcStorageName + srcFolderName + " to " 
                                                                  + dstStorageName + dstFolderName );      
      this._owner._aSDKJsTV._iSDKFileSystem.copyFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, null);
    }

    //---------------------------------------------------------------
    public render_notify_copyFolder2(context)
    {
      this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_copyFolder\t\tend copy folder : " + context._result,
                                               //+ context._object2Result._storage + context._object2Result._path + context._object2Result._fileName + " to "
                                               //+ context._objectResult._storage + context._objectResult._path + context._objectResult._fileName, 
                                               context);

      this.action_getFileList(context._objectResult._storage, context._objectResult._path);
    }

    //-------------------------
    // move folder functions
    //-------------------------
    
    //---------------------------------------------------------------
    public action_displayMoveFolder(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string)
    {
      this.action_eraseAllOpenDialogPanels();

      var context:amGeneralContext.am_general.A_Context    = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
      var error:amGeneralError.am_general.A_Error          = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      
      var fileInfo:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo.setStorage(srcStorageName);
      fileInfo.setPath(srcFolderName);
      fileInfo.setName("");
      context.setResult("");
      context.setObjectResult(fileInfo);

      var fileInfo2:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo2.setStorage(dstStorageName);
      fileInfo2.setPath(dstFolderName);
      fileInfo2.setName("");
      context.setObject2Result(fileInfo2);

      this.render_moveFolder(context);
    }

    //--------------------------------------------------
    public render_moveFolder(context)
    {
      var srcStorageName = context._objectResult._storage;
      var srcFolderName  = context._objectResult._path;

      var dstStorageName = context._object2Result._storage;
      var dstFolderName  = context._object2Result._path;

      var strDisplayMoveFolder = 
        '<hr><center>' +
            '<div>' +
            '<div><h3>Move Folder</h3></div>'+
              '<div>' +
                 '<h4>Source Folder: <input id="idMoveFolderSrcStorageName" value="'+ srcStorageName +'"/>' + 
                                    '<input id="idMoveFolderSrcFolderName"  value="'+ srcFolderName+'"/>' +
              '</div>' +
              '<div>' +
                 '<h4>Destination Folder: <input id="idMoveFolderDstStorageName" value="'+ dstStorageName +'"/>' +
                                        '<input id="idMoveFolderDstFolderName" value="'+ dstFolderName+'"/>' +
              '</div>' +
              '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayMoveFolder();">Cancel</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.moveFolder('+
                    'document.getElementById(\'idMoveFolderSrcStorageName\').value, document.getElementById(\'idMoveFolderSrcFolderName\').value, '+
                    'document.getElementById(\'idMoveFolderDstStorageName\').value, document.getElementById(\'idMoveFolderDstFolderName\').value '+
                      ');">Move Folder</button>' +
              '</div>' +
            '</div>' +
        '</center><hr>' ;
        document.getElementById("sdk.filesystem-renderer.display-movefolder").innerHTML = strDisplayMoveFolder;
    }

    //---------------------------------------------------------------
    public action_eraseDisplayMoveFolder()
    {
      document.getElementById("sdk.filesystem-renderer.display-movefolder").innerHTML = "";
    }npm

    //---------------------------------------------------------------
    public action_moveFolder(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string)
    {
      var error: amGeneralError.am_general.A_Error      = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var context:amGeneralContext.am_general.A_Context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
    
      this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_movefolder\t\tstart move folder : " 
                                                                  + srcStorageName + srcFolderName + " to " 
                                                                  + dstStorageName + dstFolderName );      
      this._owner._aSDKJsTV._iSDKFileSystem.moveFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, null);
    }

    //---------------------------------------------------------------
    public render_notify_moveFolder2(context)
    {
      this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_moveFolder\t\tend move folder : " + context._result,
                                               //+ context._object2Result._storage + context._object2Result._path + context._object2Result._fileName + " to "
                                               //+ context._objectResult._storage + context._objectResult._path + context._objectResult._fileName, 
                                               context);

      this.action_getFileList(context._objectResult._storage, context._objectResult._path);
    }
    
    //-------------------------
    // zip folder functions
    //-------------------------
    
    //---------------------------------------------------------------
    public action_displayZipFolder(storageName: string, folderName: string, zipStorageName: string, zipFolderName: string, zipFileName: string)
    {
      this.action_eraseAllOpenDialogPanels();

      var context:amGeneralContext.am_general.A_Context    = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
      var error:amGeneralError.am_general.A_Error          = this._owner._aServiceLocator._iEntityCreation.createDefaultError();

      var fileInfo:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo.setStorage(storageName);
      fileInfo.setPath(folderName);
      fileInfo.setName("");
      context.setResult("");
      context.setObjectResult(fileInfo);
      
      var fileInfo2:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo2.setStorage(zipStorageName);
      fileInfo2.setPath(zipFolderName);
      fileInfo2.setName(zipFileName);
      context.setObject2Result(fileInfo2);

      this.render_zipFolder(context);
    }

    //--------------------------------------------------
    public render_zipFolder(context)
    {
      var srcStorageName = context._objectResult._storage;
      var srcFolderName  = context._objectResult._path;

      var zipStorageName = context._object2Result._storage;
      var zipFolderName  = context._object2Result._path;
      var zipFileName    = context._object2Result._fileName;

      var strDisplayZipFolder = 
        '<hr><center>' +
            '<div>' +
            '<div><h3>Zip Folder</h3></div>'+
              '<div>' +
                 '<h4>Source File: <input id="idZipFolderSrcStorageName" value="'+ srcStorageName +'"/>' 
                                + '<input id="idZipFolderSrcFolderName"  value="'+ srcFolderName+'"/></h4>' +
              '</div>' +
              '<div>' +
                 '<h4>Zip File: <input id="idZipFolderZipStorageName" value="'+ zipStorageName +'"/>' 
                             + '<input id="idZipFolderZipFolderName"  value="' + zipFolderName+'"/>' 
                             + '<input id="idZipFolderZipFileName"    value="' + zipFileName+'"/> </h4>' +
              '</div>' +
              '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayZipFolder();">Cancel</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.zipFolder('+
                    'document.getElementById(\'idZipFolderSrcStorageName\').value, document.getElementById(\'idZipFolderSrcFolderName\').value,'+
                    'document.getElementById(\'idZipFolderZipStorageName\').value, document.getElementById(\'idZipFolderZipFolderName\').value, document.getElementById(\'idZipFolderZipFileName\').value'+
                      ');">Zip Folder</button>' +
              '</div>' +
            '</div>' +
        '</center><hr>' ;
        document.getElementById("sdk.filesystem-renderer.display-zipfolder").innerHTML = strDisplayZipFolder;
    }

    //---------------------------------------------------------------
    public action_eraseDisplayZipFolder()
    {
      document.getElementById("sdk.filesystem-renderer.display-zipfolder").innerHTML = "";
    }

    //---------------------------------------------------------------
    public action_zipFolder(storageName: string, folderName: string, zipStorageName: string, zipFolderName: string, zipFileName: string)
    {
      var error: amGeneralError.am_general.A_Error      = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var context:amGeneralContext.am_general.A_Context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
    
      this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_zipfolder\t\tstart zip folder : " 
                                                                            + storageName + folderName + " to " 
                                                                            + zipStorageName + zipFolderName + zipFileName);
      this._owner._aSDKJsTV._iSDKFileSystem.zipFolder2(storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, null);
    }

    //---------------------------------------------------------------
    public render_notify_zipFolder2(context)
    {
      this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_zipFolder\t\tend zip folder : " + context._result,
                                                      //+ context._object2Result._storage + context._object2Result._path + context._object2Result._fileName + " to "
                                                      //+ context._objectResult._storage + context._objectResult._path + context._objectResult._fileName, 
                                                      context);
      this.action_getFileList(context._objectResult._storage, context._objectResult._path);
    }
    
    //=========================
    //  display image function
    //=========================
    //---------------------------------------------------------------
    public start_display_imageFile(imgStorageName: string, imgFolderName: string, imgFileName: string)  : void
    {
      this.action_eraseAllOpenDialogPanels();

      var error: amGeneralError.am_general.A_Error      = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var context:amGeneralContext.am_general.A_Context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();

      this.get_renderinginfo_imageFile(imgStorageName, imgFolderName, imgFileName, error, context, null) ;
    }

    //-----------------------------------
    public get_renderinginfo_imageFile(imgStorageName: string, imgFolderName: string, imgFileName: string, 
                                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var imgFileInfo:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      imgFileInfo.setStorage(imgStorageName);
      imgFileInfo.setPath(imgFolderName);
      imgFileInfo.setName(imgFileName);
      context.setObjectResult(imgFileInfo);      

      this.generate_rendering_imageFile(context);
    }

    //-------------------------------------------
    public  generate_rendering_imageFile (context: any)  : void
    {
      //var fileContent = context._result;
      var storageName = context._objectResult._storage;
      var folderName  = context._objectResult._path;
      var fileName    = context._objectResult._fileName;
      // 'http://127.0.0.1:9080/external/usb/2/'

      var strImageUrl = this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlFolder);

      /*
      strImageUrl  = "http://127.0.0.1:9080/" + folderName + fileName ;
      var strImageUrl1 = "http://127.0.0.1:9080/external/usb/16/" + folderName + fileName ;
      var strImageUrl2 = "http://127.0.0.1:9080/external/usb/1/" + folderName + fileName ;
      var strImageUrl3 = "http://127.0.0.1:9080/external/usb/2/" + folderName + fileName ;
      var strImageUrl4 = "http://127.0.0.1:9080/external/usb/3/" + folderName + fileName ;
      var strImageUrl5 = "http://127.0.0.1:9080/external/usb/4/" + folderName + fileName ;

      var strImageUrla  = "http://127.0.0.1:9080" + folderName + fileName ;
      var strImageUrla1 = "http://127.0.0.1:9080/external/usb/16" + folderName + fileName ;
      var strImageUrla2 = "http://127.0.0.1:9080/external/usb/1" + folderName + fileName ;
      var strImageUrla3 = "http://127.0.0.1:9080/external/usb/2" + folderName + fileName ;
      var strImageUrla4 = "http://127.0.0.1:9080/external/usb/3" + folderName + fileName ;
      var strImageUrla5 = "http://127.0.0.1:9080/external/usb/4" + folderName + fileName ;
      */
      //document.getElementById("sdk.message").innerHTML += strImageUrl;

      //var strImageUrl = "HTTPMsg2.png" ;//+ storageName + folderName + fileName;
      var strDisplayImage = 
        '<hr><center>' +
            '<div>' +
              '<div><h3>Display Image</h3></div>'+
              '<div>' +
                 '<h4>File: <input readonly id="idImgStorageName" value="'+storageName+'"/>' 
                         + '<input readonly id="idImgPathName" value="'+folderName+'"/>' 
                         + '<input readonly id="idImgFileName" value="'+fileName+'"/> </h4>' +
              '</div>' +
              '<div id="displayimage">' + 
                 '<img width="50%" src=\'' + strImageUrl + '\'>' +
                 //'<img width="10%" src=\'' + strImageUrl + '\'>' +
                 //'<img width="10%" src=\'' + strImageUrl1 + '\'>' +
                 //'<img width="10%" src=\'' + strImageUrl2 + '\'>' +
                 //'<img width="10%" src=\'' + strImageUrl3 + '\'>' +
                 //'<img width="10%" src=\'' + strImageUrl4 + '\'>' +
                 //'<img width="10%" src=\'' + strImageUrl5 + '\'>' +
                 //'<br>' + 
                 //'<img width="10%" src=\'' + strImageUrla + '\'>' +
                 //'<img width="10%" src=\'' + strImageUrla1 + '\'>' +
                 //'<img width="10%" src=\'' + strImageUrla2 + '\'>' +
                 //'<img width="10%" src=\'' + strImageUrla3 + '\'>' +
                 //'<img width="10%" src=\'' + strImageUrla4 + '\'>' +
                 //'<img width="10%" src=\'' + strImageUrla5 + '\'>' +
              '</div>' + 
              '<div>'  +
                '<button type="button" onclick="javascript:global_SDKRenderer.erase_display_imageFile();">Close</button>' +
              '</div>' +
            '</div>' +
        '</center><hr>' ;
        context._result = strDisplayImage;
        this.do_display_imageFile(context)
    }

    //---------------------------------------------------------------
    public do_display_imageFile(context: any) : void
    {
      document.getElementById("sdk.filesystem-renderer.displayimage").innerHTML = context._result;

      var storageName = context._objectResult._storage;
      var folderName  = context._objectResult._path;
      var fileName    = context._objectResult._fileName;

      var strImageUrl = this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlFolder);

      document.getElementById("sdk.filesystem-renderer.displayimage").innerHTML += strImageUrl;
      
      this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.do_displayImageFile\t\tstart display image file : " 
                                                                 + storageName + folderName + fileName + " from url "  + strImageUrl);
    }

    //---------------------------------------------------------------
    public erase_display_imageFile() : void
    {
      if (document.getElementById("sdk.filesystem-renderer.displayimage").innerHTML != "")
        this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.erase_display_imageFile\t\tend displaying image. " );

      document.getElementById("sdk.filesystem-renderer.displayimage").innerHTML = "";
                                                                 //+ storageName + folderName + fileName + " from url "  + strVideoUrl);
    }


    //=========================
    //  display video function
    //=========================
    //---------------------------------------------------------------
    public start_display_videoFile(imgStorageName: string, imgFolderName: string, imgFileName: string)  : void
    {
      this.action_eraseAllOpenDialogPanels();

      var error: amGeneralError.am_general.A_Error      = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var context:amGeneralContext.am_general.A_Context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();

      this.get_renderinginfo_videoFile(imgStorageName, imgFolderName, imgFileName, error, context, null) ;
    }

    //-----------------------------------
    public get_renderinginfo_videoFile(imgStorageName: string, imgFolderName: string, imgFileName: string, 
                                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var imgFileInfo:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      imgFileInfo.setStorage(imgStorageName);
      imgFileInfo.setPath(imgFolderName);
      imgFileInfo.setName(imgFileName);
      context.setObjectResult(imgFileInfo);      

      this.generate_rendering_videoFile(context);
    }

    //-------------------------------------------
    public  generate_rendering_videoFile (context: any)  : void
    {
      //var fileContent = context._result;
      var storageName = context._objectResult._storage;
      var folderName  = context._objectResult._path;
      var fileName    = context._objectResult._fileName;
      // 'http://127.0.0.1:9080/external/usb/2/'
      // 'document.getElementById(\'video_04001\').addEventListener(\'ended\',myHandler_for_video_in_zone04,false);' +
      var strVideoUrl = this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlFolder);
      //this._startUrlFolder.getStorage._owner.//var strVideoSub = strVideoUrl.replace("9080", "3000") + ".vtt";
      //var strVideoSub = strVideoUrl + ".vtt";
      var strVideoSub = this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlDomainFolder);
      strVideoSub = strVideoSub + ".vtt";

      //document.getElementById("sdk.message").innerHTML += strImageUrl;

      //var strImageUrl = "HTTPMsg2.png" ;//+ storageName + folderName + fileName;
      //style="position: absolute; width: 800px; height: 600px; visibility:visible"
      var strVideoDisplay = 
        '<hr><center>' +
            '<div>' +
              '<div><h3>Display Video</h3></div>'+
              '<div>' +
                 '<h4>File: <input readonly id="idVideoStorageName" value="'+storageName+'"/>' 
                         + '<input readonly id="idVideoPathName" value="'+folderName+'"/>' 
                         + '<input readonly id="idVideoFileName" value="'+fileName+'"/> </h4>' +
              '</div>' +
              '<div id="zone_04">' +     
                //'<video id="video_04001"  style="width: 50%;" preload autobuffer loop autoplay playsinline controls>' +
                  // '<source src=\'' + strVideoUrl + '\' type="video/mp4">' +
                   //'<track label="English" kind="subtitles" srclang="en" src=\'' + strVideoSub + '\' default>'+
                //'Your browser does not support HTML5 video.' +
                //'</video>' +
                //'<script type="text/javascript">' + 
                //'document.getElementById(\'video_04001\').play();' +
                //'document.getElementById(\'video_04001\').muted = false;' +
                //'</script>' +
              '</div>' +
              '<div>'  +
                '<button type="button" onclick="javascript:global_SDKRenderer.erase_display_videoFile();">Close</button>' +
              '</div>' +
            '</div>' +
        '</center><hr>' ;
        context._result = strVideoDisplay;

        var video:HTMLVideoElement = <HTMLVideoElement>document.getElementById("sdk.filesystem-renderer.video2");
          
        //video.setAttribute("width", "960");
        //video.setAttribute("height", "540");
        //video.setAttribute("controls","controls");  
        //video.style.position = 'relative';
        video.style.display = 'block';
        video.src = strVideoUrl ; 
        //video.style.visibility = 'visible';
        video.style.objectFit = 'fill';
        //var scriptNode = document.createElement("script");
        //scriptNode.innerHTML = "var player = videojs('sdk.filesystem-renderer.video');"+ 
        //                       " player.src({src: '" + streamUrl + "',"+
        //                       " type: 'application/x-mpegURL'}); player.play(); "
        //video.appendChild(scriptNode);
        video.play();
        this.do_display_videoFile(context)
    }
    /*
      You should not use the innerHTML property but rather the appendChild method of the Node: a node in a document tree [HTML DOM]. This way you are able to later call your injected code.
      Make sure that you understand that node.innerHTML is not the same as node.appendChild. You might want to spend some time on the Javascript Client Reference for more details and the DOM. Hope the following helps...
      Sample injection works:

      <html>
        <head>
          <title>test</title>
            <script language="javascript" type="text/javascript">
              function doOnLoad(){
                addScript('inject',"function foo(){ alert('injected'); }");
              }


              function addScript(inject,code)
              {
                var _in = document.getElementById('inject');
                var scriptNode = document.createElement('script');
                scriptNode.innerHTML = code;
                _in.appendChild(scriptNode);
              }

            </script>
         </head>
         <body onload="doOnLoad();">
           <div id="header">some content</div>
           <div id="inject"></div>
           <input type="button" onclick="foo(); return false;" value="Test Injected" />
         </body>
        </html>

    */
    //---------------------------------------------------------------
    public do_display_videoFile(context: any) : void
    {
      document.getElementById("sdk.filesystem-renderer.displayvideo").innerHTML = context._result;

      var storageName = context._objectResult._storage;
      var folderName  = context._objectResult._path;
      var fileName    = context._objectResult._fileName;

      var strVideoUrl = this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlFolder);

      document.getElementById("sdk.filesystem-renderer.displayvideo").innerHTML += "<a href='vlc://"+strVideoUrl+"'><center><small>"+strVideoUrl+"</small></center></a>";
  
      this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.do_displayVideoFile\t\tstart playing video file : " 
                                                                 + storageName + folderName + fileName + " from url "  + strVideoUrl);

    }

    //---------------------------------------------------------------
    public erase_display_videoFile() : void
    {
      if (document.getElementById("sdk.filesystem-renderer.displayvideo").innerHTML != "")
        this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.erase_display_videoFile\t\tend playing video. " );
                                                                 //+ storageName + folderName + fileName + " from url "  + strVideoUrl);
      /*
      var crtVideo:HTMLVideoElement = <HTMLVideoElement>document.getElementById("video_04001");
      if (crtVideo != null)
      {
        try{
         crtVideo.pause();
         crtVideo.removeAttribute("src");
         crtVideo.load();
        }catch(e)
        {

        }
      }*/
      var crtVideoContainer = document.getElementById("sdk.filesystem-renderer.displayvideo");
      if (crtVideoContainer.innerHTML != "")
        document.getElementById("sdk.filesystem-renderer.displayvideo").innerHTML = "";
      
        var video:HTMLVideoElement = <HTMLVideoElement>document.getElementById("sdk.filesystem-renderer.video2");
        if (video != null)
        {
          try{
            video.pause();
            video.style.display = 'none';
            video.removeAttribute("src");
            video.load();
           }catch(e)
           {
   
           }
        }
  
    }



    //=========================
    //  display stream function
    //=========================
    //---------------------------------------------------------------
    public start_display_streamFile(imgStorageName: string, imgFolderName: string, imgFileName: string)  : void
    {
      this.action_eraseAllOpenDialogPanels();

      var error: amGeneralError.am_general.A_Error      = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var context:amGeneralContext.am_general.A_Context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();

      this.get_renderinginfo_streamFile(imgStorageName, imgFolderName, imgFileName, error, context, null) ;
    }

    //-----------------------------------
    public get_renderinginfo_streamFile(imgStorageName: string, imgFolderName: string, imgFileName: string, 
                                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var imgFileInfo:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      imgFileInfo.setStorage(imgStorageName);
      imgFileInfo.setPath(imgFolderName);
      imgFileInfo.setName(imgFileName);
      context.setObjectResult(imgFileInfo);      

      this.generate_rendering_streamFile(context);
    }

    //-------------------------------------------
    public  generate_rendering_streamFile (context: any)  : void
    {
      //var fileContent = context._result;
      var storageName = context._objectResult._storage;
      var folderName  = context._objectResult._path;
      var fileName    = context._objectResult._fileName;
      // 'http://127.0.0.1:9080/external/usb/2/'
      // 'document.getElementById(\'video_04001\').addEventListener(\'ended\',myHandler_for_video_in_zone04,false);' +
      var strStreamUrl = this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlDomainFolder);
      //this._startUrlFolder.getStorage._owner.//var strVideoSub = strVideoUrl.replace("9080", "3000") + ".vtt";
      //var strVideoSub = strVideoUrl + ".vtt";
      var strStreamSub = this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlDomainFolder);
      strStreamSub = strStreamSub + ".vtt";

      var xhttp = new XMLHttpRequest();
      var self = this;
      xhttp.onreadystatechange = function() 
      {
         if (this.readyState == 4 && this.status == 200) {
           // Action to be performed when the document is read;
           var streamUrl = xhttp.responseText;
        //document.getElementById("sdk.message").innerHTML += strImageUrl;

        //var strImageUrl = "HTTPMsg2.png" ;//+ storageName + folderName + fileName;
        //style="position: absolute; width: 800px; height: 600px; visibility:visible"
        var strStreamDisplay = 
          '<hr><center>' +
              '<div>' +
                '<div><h3>Display Stream</h3></div>'+
                '<div>' +
                  '<h4>File: <input readonly id="idStreamStorageName" value="'+storageName+'"/>' 
                          + '<input readonly id="idStreamPathName" value="'+folderName+'"/>' 
                          + '<input readonly id="idStreamFileName" value="'+fileName+'"/> </h4>' +
                '</div>' +
                /*
                '<div id="zone_04">' +     
                  '<video id="stream_03001"  style="width: 50%;" preload autobuffer loop autoplay playsinline controls>' +
                    '<source src=\'' + streamUrl + '\' type="video/mp4">' +
                    '<track label="English" kind="subtitles" srclang="en" src=\'' + strStreamSub + '\' default>'+
                  'Your browser does not support HTML5 video.' +
                  '</video>' +
                  '<script type="text/javascript">' + 
                  'document.getElementById(\'stream_03001\').play();' +
                  'document.getElementById(\'stream_03001\').muted = false;' +
                  '</script>' +
                '</div>' +
                */
               '<div class="container">' +
               '<!-- ' +
                 '-- Your video element. Just like regular HTML5 video.' +
                 '-->' +
               '<video id="example-video" width=960 height=540 class="video-js  vjs-default-skin"  style="object-fit:fill;" muted controls playsinline data-setup=\'{"muted": true}\'>' +
               ' <source' +
               ' src="http://mn-nl.mncdn.com/tvr_1/smil:TVR1.smil/chunklist_b2500000.m3u8?__mn_sid=93859128836599751749"' +
               '     type="application/x-mpegURL">' +
               '</video>' +       
         '</div>' +
       
                '<div>'  +
                  '<button type="button" onclick="javascript:global_SDKRenderer.erase_display_streamFile();">Close</button>' +
                '</div>' +
              '</div>' +
          '</center><hr>' ;

          strStreamDisplay = 
          '<video id=example-video width=960 height=540 class="video-js  vjs-default-skin"  style="object-fit:fill;" muted preload controls playsinline data-setup=\'{"muted": true}\'>'+
          '<source'+
             'src="blob:http://127.0.0.1:3000/0c48a694-8911-4705-8012-378ac1e32f5a"'+
             'type="application/x-mpegURL">'+
        '</video>'+

        '<form id=load-url>'+
          '<label style="visibility:hidden">'+
            'Video URL:'+
            '<input id=url type=url value="http://edge24.rcs-rds.ro/digiedge2/b1tvehq/chunklist.m3u8?is=29&src=digi-online.ro&t=00000000000000000000000000000000&amp;q=hq&s=b1tv&p=browser&pe=site">'+
            '<center><button type=submit>Play</button></center>'+
          '</label>'+
          
        '</form>'+
        '<div>'  +
        '<button type="button" onclick="window.player.play();">Play</button>' +
      '</div>' ;

          /*
          '<video id="example-video" width=960 height=540 class="video-js  vjs-default-skin"  style="object-fit:fill;" autoplay muted controls preload playsinline data-setup=\'{"muted": true}\'>' +
          ' <source' +
          ' src="http://mn-nl.mncdn.com/tvr_1/smil:TVR1.smil/chunklist_b2500000.m3u8?__mn_sid=93859128836599751749"' +
          '     type="application/x-mpegURL">' +
          '</video>' + 
          ' <form id=load-url >' +
          '<label style="visibility:visible">' +
            'Video URL:' +
            '<input id=url type=url value="http://edge24.rcs-rds.ro/digiedge2/b1tvehq/chunklist.m3u8?is=29&src=digi-online.ro&t=00000000000000000000000000000000&amp;q=hq&s=b1tv&p=browser&pe=site">' +
            '<center><button type=submit>Play</button></center>' +
          '</label>' +           
        '</form>' ;
         */
//http://mn-nl.mncdn.com/tvr_1/smil:TVR1.smil/chunklist_b2500000.m3u8?__mn_sid=93859128836599751749
          //document.getElementById("sdk.filesystem-renderer.displaystream").innerHTML = strStreamDisplay;
          /*
          scriptNode.innerHTML = "var player = window.player = videojs('example-video',{muted: true});"+
                                 //"player.play();"+
                                 "var loadUrl = document.getElementById('load-url');"+
                                 "var url = document.getElementById('url');"+
                                 "loadUrl.submit = function() {"+
                                     //"event.preventDefault();"+
                                     //"alert(url.value);"+
                                     "player.src({"+
                                     "src: url.value,"+
                                     "type: 'application/x-mpegURL'"+
                                     "});"+
                                     "player.play();"+
                                     //"player.muted = false;"+
                                    "return false;"+
                                  "};"+
                                  "loadUrl.submit();";                                
          ,{muted: true}*/


         // http://edge24.rcs-rds.ro/digiedge2/b1tvehq/chunklist.m3u8?is=29&src=digi-online.ro&t=00000000000000000000000000000000&amp;q=hq&s=b1tv&p=browser&pe=site\","+
          
         /*//window.setTimeout('window.player.play()', 1500);
         "(function(window, videojs) {"+
         "var player = window.player = videojs('example-video',{muted: true});"+
          "var loadUrl = document.getElementById('load-url');"+
          "var url = document.getElementById('url');"+
          "loadUrl.addEventListener('submit', function(event) {"+
          "event.preventDefault();"+
          //"alert(url.value);"+
            "player.src({"+
            "src: url.value,"+
              "type: 'application/x-mpegURL'"+
              "});"+
            "player.play();  "+
            "return false;"+
            "});"+
            "player.src({"+
            "src: url.value,"+
              "type: 'application/x-mpegURL'"+
              "});"+
              "player.play();  "+
        "}(window, window.videojs));";
         */                 
          //var video = document.getElementById("example-video");
          //  
          //'<video id="example-video" width=960 height=540 class="video-js  vjs-default-skin vjs-fill"  style="object-fit:fill;" autoplay muted controls preload playsinline data-setup=\'{"muted": true}\'>' +
          //---------------------------------------
          var container = document.getElementById("sdk.filesystem-renderer.displaystream");
          container.innerHTML += 
                   '<center><div>' +
                     '<p><small>on win,ux:  <a href="vlc://' + streamUrl + '">vlc://' + streamUrl +  '</a></small></p><br>'  +
                     '<p><small>on android: <a href="intent:'+ streamUrl + '#Intent;action=android.intent.action.VIEW;scheme=http;type=video/mp4;end">'+
                                               'intent:'+ streamUrl + '#Intent;action=android.intent.action.VIEW;scheme=http;type=application/x-mpegURL;end"</a></small></p>'  +
                     '<button type="button" onclick="javascript:global_SDKRenderer.erase_display_streamFile();">Close</button>' +
                   '</div></center>';

          var video:HTMLVideoElement = <HTMLVideoElement>document.getElementById("sdk.filesystem-renderer.video");
          
          //video.setAttribute("width", "960");
          //video.setAttribute("height", "540");
          //video.setAttribute("controls","controls");  
          //video.style.position = 'relative';
          video.style.display = 'block';
          //video.style.visibility = 'visible';
          video.style.objectFit = 'fill';
          /*
          var video:HTMLVideoElement = <HTMLVideoElement>document.createElement("VIDEO");
          video.className = "video-js  vjs-default-skin";
          //if (video.canPlayType("video/mp4")) {
            //video.setAttribute("src","movie.mp4");
          //}else{
            //video.setAttribute("src","movie.ogg");
          //}
          video.id = "example-video2";
          video.setAttribute("width", "960");
          video.setAttribute("height", "540");
          video.setAttribute("controls", "controls");
          //video.setAttribute("autoplay", "autoplay");
          video.setAttribute("playsinline", "playsinline");
          video.setAttribute("preload", "preload");
          container.appendChild(video); window.setTimeout(function(){ player.play(); },1500, player)
          */
          var scriptNode = document.createElement("script");
          scriptNode.innerHTML = "var player = videojs('sdk.filesystem-renderer.video');"+ 
                                 " player.src({src: '" + streamUrl + "',"+
                                 " type: 'application/x-mpegURL'}); player.play(); "
          video.appendChild(scriptNode);
          //-----------------------------------

          //"loadUrl.addEventListener('submit', function(event) {"+
    
          context._result = strStreamDisplay;
          self.do_display_streamFile(context)

         }
      };
     xhttp.open("GET", strStreamUrl, true);
     xhttp.send();

    }

    /*
                   ' <form id=load-url>' +
                 '<label style="visibility:hidden">' +
                   'Video URL:' +
                   '<input id=url type=url value="http://edge24.rcs-rds.ro/digiedge2/b1tvehq/chunklist.m3u8?is=29&src=digi-online.ro&t=00000000000000000000000000000000&amp;q=hq&s=b1tv&p=browser&pe=site">' +
                   '<center><button type=submit>Play</button></center>' +
                 '</label>' +           
               '</form>' +
       
              '<script>' +
                'var loadUrl = document.getElementById(\'load-url\');' +
              '</script>' +
       
           '<!--' +
             '-- Make sure to include the video.js CSS. This could go in' +
             '-- the <head>, too.' +
             '-->' +
             ' <link href="https://unpkg.com/video.js/dist/video-js.css" rel="stylesheet">' +
       
           '<!--' +
           ' -- Include video.js and videojs-contrib-hls in your page' +
             '-->' +
       
           '<script src="https://unpkg.com/video.js/dist/video.js"></script>' +
           '<script src="https://unpkg.com/videojs-flash/dist/videojs-flash.js"></script>' +
           '<script src="https://unpkg.com/videojs-contrib-hls/dist/videojs-contrib-hls.js"></script>' +

    '<!--' +
    '-- Now, initialize your player. That\'s it! async ' +
    '-->' +
    ' <script>' +
        'var _in = document.getElementById(\'container\');'+
        'var scriptNode = document.createElement(\'script\');'+

    'scriptNode.innerHTML =  ' +
      '\'var player = window.player = videojs("example-video",{muted: true});' +
      'player.src({' +
        'src: url.value,' +
        'type: "application/x-mpegURL"' +
       '});' +
       'player.play();  ' +
       'player.prop("muted", false);' +
    ' \';' +

    '_in.appendChild(scriptNode);'  +
         '</script>' +
     */

    //---------------------------------------------------------------
    public do_display_streamFile(context: any) : void
    {

      var storageName = context._objectResult._storage;
      var folderName  = context._objectResult._path;
      var fileName    = context._objectResult._fileName;

      var strStreamUrl = this._owner._aUtilsService._iUtilsFiles.getFileUrl(storageName, folderName, fileName, this._startFolder, this._startUrlFolder);

      document.getElementById("sdk.filesystem-renderer.displaystream").innerHTML += "<center>"+strStreamUrl+"</center>";
  
      this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.do_displayStreamFile\t\tstart playing stream file : " 
                                                                 + storageName + folderName + fileName + " from url "  + strStreamUrl);

    }

    //---------------------------------------------------------------
    public erase_display_streamFile() : void
    {
      if (document.getElementById("sdk.filesystem-renderer.displayvideo").innerHTML != "")
        this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.erase_display_streamFile\t\tend playing stream. " );
                                                                 //+ storageName + folderName + fileName + " from url "  + strVideoUrl);
      document.getElementById("sdk.filesystem-renderer.displaystream").innerHTML = "";
      var video:HTMLVideoElement = <HTMLVideoElement>document.getElementById("sdk.filesystem-renderer.video");
      if (video != null)
      {
        videojs(video).pause();
        videojs(video).reset();
        //if (video.hasAttribute("controls"))
        //{
          //video.removeAttribute("controls")   
        //}
        //video.style.position = 'absolute';
        //video.style.visibility = 'hidden';
        video.style.display = 'none';
      }
    }



    //--------------------------------------
    //  compute file sha
    //--------------------------------------
    
    //---------------------------------------------------------------
    public action_displayComputeAndSaveShaFile(srcStorageName: string, srcFolderName: string, srcFileName: string, 
                                        shaStorageName: string, shaFolderName: string, shaFileName: string)
    {
      this.action_eraseAllOpenDialogPanels();

      var context:amGeneralContext.am_general.A_Context    = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
      var error:amGeneralError.am_general.A_Error          = this._owner._aServiceLocator._iEntityCreation.createDefaultError();

      var fileInfo:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo.setStorage(srcStorageName);
      fileInfo.setPath(srcFolderName);
      fileInfo.setName(srcFileName);
      context.setResult("");
      context.setObjectResult(fileInfo);

      var fileInfo2:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo2.setStorage(shaStorageName);
      fileInfo2.setPath(shaFolderName);
      fileInfo2.setName(shaFileName);
      context.setObject2Result(fileInfo2);

      this.render_computeAndSaveShaFile(context);
    }    

    //-------------------------------------------------------
    public render_computeAndSaveShaFile(context)
    {
      var srcStorageName = context._objectResult._storage;
      var srcFolderName  = context._objectResult._path;
      var srcFileName    = context._objectResult._fileName;

      var shaStorageName = context._object2Result._storage;
      var shaFolderName  = context._object2Result._path;
      var shaFileName    = context._object2Result._fileName;

      var strDisplayComputeFileSha = 
        '<hr><center>' +
            '<div>' +
            '<div><h3>Compute File Sha</h3></div>'+
              '<div>' +
                 '<h4>Source File: <input id="idComputeFileShaSrcStorageName" value="'+ srcStorageName +'"/>' 
                                + '<input id="idComputeFileShaSrcFolderName"  value="'+ srcFolderName+'"/>' 
                                + '<input id="idComputeFileShaSrcFileName"    value="'+ srcFileName+'"/> </h4>' +
              '</div>' +
              '<div>' +
                 '<h4>Sha File: <input id="idComputeFileShaShaStorageName" value="'+ shaStorageName +'"/>' 
                              + '<input id="idComputeFileShaShaFolderName" value="'+ shaFolderName+'"/>' 
                              + '<input id="idComputeFileShaShaFileName"   value="'+ shaFileName+'"/> </h4>' +
              '</div>' +
              '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.eraseDisplayComputeAndSaveShaFile();">Cancel</button>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.computeAndSaveShaFile('+
                    'document.getElementById(\'idComputeFileShaSrcStorageName\').value, document.getElementById(\'idComputeFileShaSrcFolderName\').value, document.getElementById(\'idComputeFileShaSrcFileName\').value,'+
                    'document.getElementById(\'idComputeFileShaShaStorageName\').value, document.getElementById(\'idComputeFileShaShaFolderName\').value, document.getElementById(\'idComputeFileShaShaFileName\').value'+
                      ');">Compute File Sha</button>' +
              '</div>' +
            '</div>' +
        '</center><hr>' ;
        document.getElementById("sdk.filesystem-renderer.display-computefilesha").innerHTML = strDisplayComputeFileSha;
    }

    //---------------------------------------------------------------
    public action_eraseDisplayComputeAndSaveShaFile()
    {
      document.getElementById("sdk.filesystem-renderer.display-computefilesha").innerHTML = "";
    }    

    //---------------------------------------------------------------
    public action_computeAndSaveShaFile(  srcStorageName: string, srcFolderName: string, srcFileName: string, 
                                                  shaStorageName: string, shaFolderName: string, shaFileName: string)
    {
      var error: amGeneralError.am_general.A_Error      = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var context:amGeneralContext.am_general.A_Context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();

      var fileInfo:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo.setStorage(srcStorageName);
      fileInfo.setPath(srcFolderName);
      fileInfo.setName(srcFileName);
      context.setResult("");
      context.setObjectResult(fileInfo);

      var fileInfo2:amGeneralFileInfo.am_general.A_FileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo2.setStorage(shaStorageName);
      fileInfo2.setPath(shaFolderName);
      fileInfo2.setName(shaFileName);
      context.setObject2Result(fileInfo2);

      var shaProperties:amGeneralShaProperties.am_general.A_ShaProperties = this._owner._aServiceLocator._iEntityCreation.createDefaultShaProperties(error);
      shaProperties.setSrcFileInfo(fileInfo);
      shaProperties.setShaFileInfo(fileInfo2);

      this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_computeshafile\t\tstart compute sha file : " 
                                                                   + srcStorageName + srcFolderName + srcFileName + " to " 
                                                                   + shaStorageName + shaFolderName + shaFileName );
  
      this._owner._aSDKJsTV._iSDKFileSystem.computeFileShaAndSaveShaFile2(shaProperties, error, context, null);
    }    



    //---------------------------------------------------------------
    public render_notify_computeAndSaveShaFile(context)
    {
      this._owner._aLogRenderer._iLogMainRenderer.logEndAction("sdkrenderer.file-system.action_computeShaFile\t\tend compute sha file : " + context._result,
                                                  //+ context._object2Result._storage + context._object2Result._path + context._object2Result._fileName + " to "
                                                  //+ context._objectResult._storage + context._objectResult._path + context._objectResult._fileName, 
      context);
            this.action_getFileList(context._objectResult._storage, context._objectResult._path);
    }

    //------------------------------------
    //  Log file functions
    //------------------------------------

    //---------------------------------
    public action_createLogRenderer() : void
    {
      this._owner._aLogRenderer._iLogMainRenderer.action_createLogRenderer();
    }

    //---------------------------------
    public action_displayLogRenderer() : void
    {
      this._owner._aLogRenderer._iLogMainRenderer.action_displayLogRenderer();
    }

    //---------------------------------
    public action_hideLogRenderer() : void
    {
      this._owner._aLogRenderer._iLogMainRenderer.action_hideLogRenderer();
    }

    //---------------------------------
    public action_eraseLogRenderer() : void 
    {
      this._owner._aLogRenderer._iLogMainRenderer.action_eraseLogRenderer();
    }

    //---------------------------------
    public action_viewLogFile() : void
    {
      this._owner._aLogRenderer._iLogMainRenderer.action_viewLogFile();
    }
  
    //---------------------------------
    public action_closeViewLogFile() : void
    {
      this._owner._aLogRenderer._iLogMainRenderer.action_closeViewLogFile();
    }


    //===============================
    // Display Hardware Settings
    //================================

    //---------------------------------------------  
    public setHardwareSetting( aHardwareSettings: amPlaybackHardwareSettings.am_playback.A_HardwareSettings)
    {
      this._aHardwareSettings = aHardwareSettings;
    }

    //---------------------------------------------  
    public getHardwareSetting()
    {
      return this._aHardwareSettings;
    }

    //---------------------------------------------  
    public action_displayHardwareSettings()
    {
      this.action_eraseAllOpenDialogPanels();

      var strHardwareType = this._aHardwareSettings.getHardwareType();
      var strEarlyAdapter = this._aHardwareSettings.getEarlyAdapter();
      var strSerialNumber = this._aHardwareSettings.getSerialNumber();
      var strAccountId    = this._aHardwareSettings.getAccountId();
      var strAccountName  = this._aHardwareSettings.getAccountName();
      var strAccountPwd   = this._aHardwareSettings.getAccountPassword();   
      var strDisplayFile = 
        '<hr><center>' +
            '<div>' +
              '<div><h3>Display Xml Hardware Settings</h3></div>'+
              '<div>' +
                 '<h4>Hardware Type: <input id="idHSHardwareType" readonly value="'    + strHardwareType + '"/></h4>' + 
                 '<h4>Early Adapter: <input id="idHSEarlyAdapter" readonly value="'    + strEarlyAdapter + '"/></h4>' + 
                 '<h4>Serial Number: <input id="idHSEarlyAdapter" readonly value="'    + strSerialNumber + '"/></h4>' + 
                 '<h4>Account Id   : <input id="idHSEarlyAdapter" readonly value="'    + strAccountId    + '"/></h4>' + 
                 '<h4>Account Name : <input id="idHSEarlyAdapter" readonly value="'    + strAccountName  + '"/></h4>' + 
                 '<h4>Account Password: <input id="idHSEarlyAdapter" readonly value="' + strAccountPwd   + '"/></h4>' + 
              '</div>' +
              '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.closeHardwareSettings();">Close</button>' +
              '</div>' +
            '</div>' +
        '</center><hr>' ;
        document.getElementById("sdk.filesystem-renderer.display-xmlhardwaresettings").innerHTML = strDisplayFile;
    }
    
    //---------------------------------------------------------------
    public action_closeHardwareSettings()
    {
      document.getElementById("sdk.filesystem-renderer.display-xmlhardwaresettings").innerHTML = "";
    }
    
    //===============================
    // Display Xml OpeningHours
    //================================
    
    //---------------------------------------------  
    public setOpeningHours(aOpeningHours:amPlaybackOpeningHours.am_playback.A_OpeningHours)
    {
      this._aOpeningHours = aOpeningHours;
    }

    //---------------------------------------------  
    public getOpeningHours()
    {
      return this._aOpeningHours;
    }
    //---------------------------------------------------------------
    public action_displayOpeningHours()
    {
      this.action_eraseAllOpenDialogPanels();
      
      var strDisplayOpeningHoursHeader = 
        '<hr><center>' +
            '<div>' +
              '<div><h3>Display Xml Opening Hours</h3></div>' ;


      var strDisplayOpeningHoursLines =  '<div>' ;
      var ohdOpenDayName = '';
      var ohdOpenTime = '';
      var ohdCloseDayName = '';
      var ohdCloseTime = '';
      var ohdList:Array<amPlaybackDayOpeningHours.am_playback.A_DayOpeningHours>    = this._aOpeningHours.getOpeningHours();
      var strDisplayOpeningHoursLine = "";
      for (var i  = 0; i < ohdList.length; i++)              
      {
        ohdOpenDayName = ohdList[i].getOpenDayName();
        ohdOpenTime    = ohdList[i].getOpenTime().getTimeAsString();
        ohdCloseDayName = ohdList[i].getCloseDayName();
        ohdCloseTime    = ohdList[i].getCloseTime().getTimeAsString();

        strDisplayOpeningHoursLine = 
            '<h4>' + 
            '<input id="id_ohd_opendayname'  + i + '" readonly value="'    + ohdOpenDayName + '"/>' + 
            '<input id="id_ohd_opentime'     + i + '" readonly value="'    + ohdOpenTime + '"/>' + 
            '<input id="id_ohd_closedayname' + i + '" readonly value="'    + ohdCloseDayName + '"/>' + 
            '<input id="id_ohd_closetime'    + i + '" readonly value="'    + ohdCloseTime + '"/>' + 
            '</h4>' ;
        strDisplayOpeningHoursLines += strDisplayOpeningHoursLine ;
      }

      strDisplayOpeningHoursLines +=  '</div>' ;
      var strDisplayOpeningHoursFooter = 
              '<div>' +
                '<button type="button" onclick="javascript:global_SDKRenderer.closeOpeningHours();">Close</button>' +
              '</div>' +
            '</div>' +
        '</center><hr>' ;
      document.getElementById("sdk.filesystem-renderer.display-xmlopeninghours").innerHTML = strDisplayOpeningHoursHeader + strDisplayOpeningHoursLines +  strDisplayOpeningHoursFooter;
    }
    
    //---------------------------------------------------------------
    public action_closeOpeningHours()
    {
      document.getElementById("sdk.filesystem-renderer.display-xmlopeninghours").innerHTML = "";      
    }
  }
} 
