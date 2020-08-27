import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/I_SDK_notifyFileSystem");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralShaProperties = require("../../../../../app/ts/abstract/am_general/a_shaproperties/A_ShaProperties");

import rmTransversalServicesSDKConnector = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/R_SDK_Connector");


export module rm_transversalservices
{
  export class IImpl_SDK_notifyFileSystem_SDKConnector implements amGeneral.am_transversalservices.I_SDK_notifyFileSystem
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: rmTransversalServicesSDKConnector.rm_transversalservices.R_SDK_Connector;

    //----------- constructor 
    constructor(owner: rmTransversalServicesSDKConnector.rm_transversalservices.R_SDK_Connector)  
    {
      this._owner = owner;  
    }

    //--------------
    public notify_readTextFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_readTextFile(fileFullName, error, context, callback);
    }

    //--------------
    public notify_promise_readTextFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_readTextFile(fileFullName, error, context, callback);
    }

    //---------------------
    public notify_readTextFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_readTextFile2(storageName, folderName, fileName, error, context, callback); 
    }

    //---------------------
    public notify_promise_readTextFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_readTextFile2(storageName, folderName, fileName, error, context, callback);
    }
    


    //-----------------
    public notify_writeTextFile( fileFullName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_writeTextFile(fileFullName, fileContent, error, context, callback);
    }

    //--------------------------------------
    public notify_promise_writeTextFile( fileFullName: string, fileContent: string, error: amGeneralError.am_general.A_Error, 
                                        context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_writeTextFile(fileFullName, fileContent, error, context, callback);
    }

    
    //---------------------
    public notify_writeTextFile2(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_writeTextFile2(storageName, folderName, fileName, fileContent, error, context, callback)
    }

    //---------------------
    public notify_promise_writeTextFile2(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_writeTextFile2(storageName, folderName, fileName, fileContent, error, context, callback)
    }


    //------------------
    public notify_getFileList( folderFullName: string,
                               error: amGeneralError.am_general.A_Error, 
                               context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_getFileList(folderFullName,error,context,callback);
    }

    //------------------
    public notify_promise_getFileList( folderFullName: string,
            error: amGeneralError.am_general.A_Error, 
            context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_getFileList(folderFullName, error, context, callback);
    }

    //----------------------------------------------------
    public notify_getFileList2 (storageName: string, folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_getFileList2 (storageName, folderFullName, error, context, callback);
    }

    //---------------------------------------
    public notify_getNbFiles2(storageName: string ,folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_getNbFiles2(storageName, folderFullName, error, context, callback);
    }

    //--------------------
    public notify_removeFile( fileFullName: string, 
                       error: amGeneralError.am_general.A_Error, 
                       context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_removeFile( fileFullName, error, context, callback) ;
    }
    
    //--------------------------------------
    public notify_promise_removeFile( fileFullName: string, 
                               error: amGeneralError.am_general.A_Error, 
                               context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_removeFile( fileFullName, error, context, callback) ;
    }

    //---------------------------------------
    public notify_createFolder( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_createFolder(folderFullName, error, context, callback);
    }
        
    //-------------------------------------------
    public notify_promise_createFolder( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_createFolder( fileFullName, error, context, callback) ;
    }
    
    //---------------------------------------
    public notify_deleteFolder( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_deleteFolder(folderFullName, error, context, callback) 
    }
    
    //-------------------------------------------
    public notify_promise_deleteFolder( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_deleteFolder(fileFullName, error, context, callback) ;
    }
    
    //-----------------------------------------------------------  
    public notify_fileExists( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_fileExists( fileFullName, error, context, callback);
    }

    //-----------------------------------------------------------  
    public notify_promise_fileExists( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_fileExists( fileFullName, error, context, callback); 
    }

    //-----------------------------------------------------------  
    public notify_folderExists( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_folderExists(folderFullName, error, context, callback); 
    }

    //-----------------------------------------------------------  
    public notify_promise_folderExists( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_folderExists(folderFullName, error, context, callback) ;
    }
    
    //--------------------------------------
    //              copy file
    //--------------------------------------
    
    //--------------------------------------
    public notify_copyFile( srcFileFullName: string, dstFileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_copyFile(srcFileFullName, dstFileFullName, error, context, callback) ;
    }

    //--------------------------------------
    public notify_promise_copyFile( srcFileFullName: string, dstFileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_copyFile( srcFileFullName, dstFileFullName, error, context, callback) ;
    }

    //------------------------------------
    public notify_copyFile2( srcStorageName: string, srcFolderName: string, srcFileName: string, 
                             dstStorageName: string, dstFolderName: string, dstFileName: string, 
                             error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      //document.getElementById("sdk.message").innerHTML += "<p>Connector.notify_copyFile2</p>";
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_copyFile2( srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) ;
    }

    //------------------------------------
    public notify_promise_copyFile2( srcStorageName: string, srcFolderName: string, srcFileName: string, 
                              dstStorageName: string, dstFolderName: string, dstFileName: string, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_copyFile2( srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, 
                                                                                 error, context, callback) ;
    }


  
    //--------------------------------------
    //      downloadFile - should be moved to web interface
    //--------------------------------------
    
    //--------------------------------------
    public notify_downloadFile( remoteUrlName: string, dstFileFullName: string,
                                error: amGeneralError.am_general.A_Error, 
                                context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_downloadFile( remoteUrlName, dstFileFullName, error, context, callback) ;
    }

    //--------------------------------------
    public notify_promise_downloadFile( remoteUrlName: string, dstFileFullName: string,
                                        error: amGeneralError.am_general.A_Error, 
                                        context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_downloadFile( remoteUrlName, dstFileFullName, error, context, callback); 
    }

    //------------------------------------
    public notify_downloadFile2( remoteUrlName: string, 
                                 dstStorageName: string, dstFolderName: string, dstFileName: string, 
                                 error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_downloadFile2( remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) ;
    }

    //------------------------------------
    public notify_promise_downloadFile2( remoteUrlName: string, 
                              dstStorageName: string, dstFolderName: string, dstFileName: string, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_downloadFile2(remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) ;
    }

    //--------------------------------------
    //      unzipFile - should be moved to web interface
    //--------------------------------------

    //--------------------------------------
    public notify_unzipFile( zipFullFileName: string, unzipFullPath: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_unzipFile( zipFullFileName, unzipFullPath, error, context, callback) ;
    }

    //--------------------------------------
    public notify_promise_unzipFile( zipFullFileName: string, unzipFullPath: string,
                                     error: amGeneralError.am_general.A_Error, 
                                     context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_unzipFile( zipFullFileName, unzipFullPath, error,  context, callback) ;
    }

    //------------------------------------
    public notify_unzipFile2( zipStorageName: string, zipFolderName: string, zipFileName: string, 
                              unzipStorageName: string, unzipFolderName: string,
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_unzipFile2( zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback);
    }

    //------------------------------------
    public notify_promise_unzipFile2( zipStorageName: string, zipFolderName: string, zipFileName: string, 
                                      unzipStorageName: string, unzipFolderName: string,
                                      error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_unzipFile2( zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) ;
    }

    //--------------------------------------
    //      fsyncFile
    //--------------------------------------

    //--------------------------------------
    public notify_fsyncFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_fsyncFile(fileFullName, error, context, callback) ; 
    }

    //--------------------------------------
    public notify_promise_fsyncFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_fsyncFile(fileFullName, error, context, callback);
    }

    //--------------------------------------
    public notify_fsyncFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_fsyncFile2(storageName, folderName, fileName, error, context, callback) ;
    }

    //--------------------------------------
    public notify_promise_fsyncFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_fsyncFile2(storageName, folderName, fileName, error, context, callback);
    }
    

    //--------------------------------------
    //      get File Info
    //--------------------------------------

    //--------------------------------------
    public notify_getFileInfo(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_getFileInfo(fileFullName, error, context, callback);
    }

    //--------------------------------------
    public notify_promise_getFileInfo(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_getFileInfo(fileFullName, error, context, callback) ;
    }

    //--------------------------------------
    public notify_getFileInfo2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_getFileInfo2(storageName, folderName, fileName, error, context, callback);
    }

    //--------------------------------------
    public notify_promise_getFileInfo2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_getFileInfo2(storageName, folderName, fileName, error, context, callback);
    }

    //-------------- 
    // temporary - will be moved to the write place
    //--------------

    public notify_appendTextToFile(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_appendTextToFile(storageName, folderName, fileName, fileContent, error, context, callback);
    }

    
    public notify_removeFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_removeFile2(storageName, folderName, fileName, error, context, callback);
    }

    public notify_createFolder2(storageName: string, folderfullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_createFolder2(storageName, folderfullName, error, context, callback);
    }


    //------------------
    // delete folder
    //------------------

    public notify_deleteFolder2(storageName: string, folderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_deleteFolder2(storageName, folderName, error, context, callback);
    }

    public notify_fileExists2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_fileExists2(storageName, folderName, fileName, error, context, callback);
    }

    //-----------------
    // Notify Move File
    //----------------

    //--------------------
    public notify_moveFile( srcFileFullName: string, dstFileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }
    //--------------------
    public notify_promise_moveFile( srcFileFullName: string, dstFileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any 
    {
    }
    //--------------------
    public notify_moveFile2(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_moveFile2(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback); 
    }
    //--------------------
    public notify_promise_moveFile2(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_moveFile2(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback); 
    }

    //-----------------
    // Notify Upload File
    //----------------

    //--------------------
    public notify_uploadFile(srcFileFullName: string, remoteUrlName: string, remoteFileFullName : string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }
    //--------------------
    public notify_promise_uploadFile(srcFileFullName: string,  remoteUrlName: string, remoteFileFullName : string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any 
    {
    }
    //--------------------
    public notify_uploadFile2(srcStorageName: string, srcFolderName: string, srcFileName: string, remoteUrlName: string, remoteFolderName: string, remoteFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_uploadFile2(srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback); 
    }
    //--------------------
    public notify_promise_uploadFile2( srcStorageName: string, srcFolderName: string, srcFileName: string, remoteUrlName: string, remoteFolderName: string, remoteFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_uploadFile2(srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback);           
    }      
    
    //-----------------
    // Notify Zip File
    //----------------

    //--------------------
    public notify_zipFile( fullFileName: string, zipFullFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }
    //--------------------
    public notify_promise_zipFile( fullFileName: string, zipFullFileName: string, error: amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) : any 
    {
    }
    //--------------------
    public notify_zipFile2( storageName: string, folderName: string,  fileName: string, zipStorageName: string, zipFolderName: string, zipFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_zipFile2( storageName, folderName,  fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback); 
    }

    //--------------------
    public notify_promise_zipFile2( storageName: string, folderName: string,  fileName: string, zipStorageName: string, zipFolderName: string, zipFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_zipFile2( storageName, folderName,  fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback); 
    }
  
  //--------------------------------------
    //              copy folder
    //--------------------------------------

    //---------------------------
    public notify_copyFolder( srcFolderFullName: string, dstFolderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
    }

    //---------------------------
    public notify_promise_copyFolder( srcFolderFullName: string, dstFolderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {

    }

    //---------------------------
    public notify_copyFolder2(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_copyFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback); 
    }

    //---------------------------
    public notify_promise_copyFolder2(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_copyFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback); 
    }

    //-----------------
    // Notify Move Folder
    //----------------

    //-----------------------------
    public notify_moveFolder( srcFolderFullName: string, dstFolderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }
    //-----------------------------
    public notify_promise_moveFolder( srcFolderFullName: string, dstFolderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any 
    {
    }
    //-----------------------------
    public notify_moveFolder2(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_moveFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback); 
    }
    //-----------------------------
    public notify_promise_moveFolder2(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_moveFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback); 
    }

    //-----------------
    // Notify Zip Folder
    //----------------

    //-----------------------------
    public notify_zipFolder( fullFolderName: string, zipFullFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }
    //-----------------------------
    public notify_promise_zipFolder( fullFolderName: string, zipFullFolderName: string, error: amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) : any 
    {
    }
    //-----------------------------
    public notify_zipFolder2(storageName: string, folderName: string,  zipStorageName: string, zipFolderName: string, zipFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_zipFolder2(storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback); 
    }

    //-----------------------------
    public notify_promise_zipFolder2(storageName: string, folderName: string,  zipStorageName: string, zipFolderName: string, zipFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_zipFolder2(storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback); 
    }

    //-----------------
    // computeFileSha2
    //-----------------

    //----------------------------
    public notify_computeFileSha2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_computeFileSha2(shaProperties, error, context, callback); 
    }

    //----------------------------
    public notify_promise_computeFileSha2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_computeFileSha2(shaProperties, error, context, callback); 
    }

    //----------------------------
    public notify_computeFileShaAndSaveShaFile2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_computeFileShaAndSaveShaFile2(shaProperties, error, context, callback); 
    }

    //----------------------------
    public notify_promise_computeFileShaAndSaveShaFile2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any 
    {
      this._owner._aSDKConsumer._iNotify_SDKFileSystem.notify_promise_computeFileShaAndSaveShaFile2(shaProperties, error, context, callback); 
    }

  }
} 