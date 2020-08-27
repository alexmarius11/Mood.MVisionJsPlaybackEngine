import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/I_SDK_notifyFileSystem");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralShaProperties = require("../../../../../app/ts/abstract/am_general/a_shaproperties/A_ShaProperties");


import rmTransversalServicesSDKConsumerSDKRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_sdkrenderer/R_SDKConsumer_SDKRenderer");

export module rm_transversalservices
{
  export class IImpl_SDK_notifyFileSystem_SDKConsumer_SDKRenderer implements amGeneral.am_transversalservices.I_SDK_notifyFileSystem
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: rmTransversalServicesSDKConsumerSDKRenderer.rm_renderingservices.R_SDKConsumer_SDKRenderer;

    //----------- constructor 
    constructor(owner: rmTransversalServicesSDKConsumerSDKRenderer.rm_renderingservices.R_SDKConsumer_SDKRenderer)  
    {
      this._owner = owner;  
    }

    //--------------
    public notify_readTextFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
    }

    //--------------
    public notify_promise_readTextFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
    }

    //---------------------
    public notify_readTextFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aSDKRenderer._iFileSystemRenderer.render_text_file(context);
    }

    //---------------------
    public notify_promise_readTextFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
    }
    


    //-----------------
    public notify_writeTextFile( fileFullName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {

    }

    //--------------------------------------
    public notify_promise_writeTextFile( fileFullName: string, fileContent: string,
                                         error: amGeneralError.am_general.A_Error, 
                                        context: amGeneralContext.am_general.A_Context, callback) 
    {
    }

    
    //---------------------
    public notify_writeTextFile2(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_writeTextFile2(context);
    }

    //---------------------
    public notify_promise_writeTextFile2(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
    }


    //------------------
    public notify_getFileList( folderFullName: string,
                               error: amGeneralError.am_general.A_Error, 
                               context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aSDKRenderer._iFileSystemRenderer.render_allfilesystem(context);
    }

    //------------------
    public notify_promise_getFileList( folderFullName: string,
            error: amGeneralError.am_general.A_Error, 
            context: amGeneralContext.am_general.A_Context, callback) 
    {

    }

    //--------------------
    public notify_getFileList2 (storageName: string ,folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aSDKRenderer._iFileSystemRenderer.render_allfilesystem(context);
    }

    //-------------------
    public notify_getNbFiles2 (storageName: string ,folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
    }

    //--------------------
    public notify_removeFile( fileFullName: string, 
                       error: amGeneralError.am_general.A_Error, 
                       context: amGeneralContext.am_general.A_Context, callback) 
    {
    }
    
    //--------------------------------------
    public notify_promise_removeFile( fileFullName: string, 
                               error: amGeneralError.am_general.A_Error, 
                               context: amGeneralContext.am_general.A_Context, callback) 
    {
    }

    //---------------------------------------------
    public notify_removeFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_deleteFile2(context);
    }
    

    //---------------------------------------
    public notify_createFolder( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
        
    }
        
    //-------------------------------------------
    public notify_promise_createFolder( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
        
    }
        
    //---------------------------------------------
    public notify_createFolder2(storageName: string, folderfullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_createFolder2(context);
    }
    
        
    //---------------------------------------
    public notify_deleteFolder( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
    
    }
    
    //-------------------------------------------
    public notify_promise_deleteFolder( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
    
    }
    
    //---------------------------------------------
    public notify_deleteFolder2(storageName: string, folderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_deleteFolder2(context);
    }


    //-----------------------------------------------------------  
    public notify_fileExists( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
    }

    //-----------------------------------------------------------  
    public notify_promise_fileExists( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
          
    }

    //-----------------------------------------------------------  
    public notify_folderExists( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
    }

    //-----------------------------------------------------------  
    public notify_promise_folderExists( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
              
    }

    //--------------------------------------------------------------
    public notify_fileExists2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
    }

    
    //--------------------------------------
    //              copy file
    //--------------------------------------
    
    //--------------------------------------
    public notify_copyFile( srcFileFullName: string, dstFileFullName: string,
      error: amGeneralError.am_general.A_Error, 
      context: amGeneralContext.am_general.A_Context, callback) 
    {
    }

    //--------------------------------------
    public notify_promise_copyFile( srcFileFullName: string, dstFileFullName: string,
                             error: amGeneralError.am_general.A_Error, 
                             context: amGeneralContext.am_general.A_Context, callback) 
    {

    }

    //------------------------------------
    public notify_copyFile2( srcStorageName: string, srcFolderName: string, srcFileName: string, 
                      dstStorageName: string, dstFolderName: string, dstFileName: string, 
                      error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_copyFile2(context);
    }

    //------------------------------------
    public notify_promise_copyFile2( srcStorageName: string, srcFolderName: string, srcFileName: string, 
                              dstStorageName: string, dstFolderName: string, dstFileName: string, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
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
      this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_copyFolder2(context);
    }

    //---------------------------
    public notify_promise_copyFolder2(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //--------------------------------------
    //      downloadFile - should be moved to web interface
    //--------------------------------------
    
    //--------------------------------------
    public notify_downloadFile( remoteUrlName: string, dstFileFullName: string,
                                error: amGeneralError.am_general.A_Error, 
                                context: amGeneralContext.am_general.A_Context, callback) 
    {
    }

    //--------------------------------------
    public notify_promise_downloadFile( remoteUrlName: string, dstFileFullName: string,
                                        error: amGeneralError.am_general.A_Error, 
                                        context: amGeneralContext.am_general.A_Context, callback) 
    {

    }

    //------------------------------------
    public notify_downloadFile2( remoteUrlName: string, 
                          dstStorageName: string, dstFolderName: string, dstFileName: string, 
                          error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_downloadFile2(context);
    }

    //------------------------------------
    public notify_promise_downloadFile2( remoteUrlName: string, 
                              dstStorageName: string, dstFolderName: string, dstFileName: string, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
    }

    //--------------------------------------
    //      unzipFile - should be moved to web interface
    //--------------------------------------

    //--------------------------------------
    public notify_unzipFile( zipFullFileName: string, unzipFullPath: string,
      error: amGeneralError.am_general.A_Error, 
      context: amGeneralContext.am_general.A_Context, callback) 
    {

    }

    //--------------------------------------
    public notify_promise_unzipFile( zipFullFileName: string, unzipFullPath: string,
                  error: amGeneralError.am_general.A_Error, 
                  context: amGeneralContext.am_general.A_Context, callback) 
    {

    }

    //------------------------------------
    public notify_unzipFile2( zipStorageName: string, zipFolderName: string, zipFileName: string, 
          unzipStorageName: string, unzipFolderName: string,
          error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_unzipFile2(context);
    }

    //------------------------------------
    public notify_promise_unzipFile2( zipStorageName: string, zipFolderName: string, zipFileName: string, 
                  unzipStorageName: string, unzipFolderName: string,
                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }

    //--------------------------------------
    //      fsyncFile
    //--------------------------------------

    //--------------------------------------
    public notify_fsyncFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }

    //--------------------------------------
    public notify_promise_fsyncFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //--------------------------------------
    public notify_fsyncFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }

    //--------------------------------------
    public notify_promise_fsyncFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
    }
    

    //--------------------------------------
    //      get File Info
    //--------------------------------------

    //--------------------------------------
    public notify_getFileInfo(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //--------------------------------------
    public notify_promise_getFileInfo(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //--------------------------------------
    public notify_getFileInfo2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }

    //--------------------------------------
    public notify_promise_getFileInfo2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
    }

    //-------------- 
    // temporary - will be moved to the write place
    //--------------

    public notify_appendTextToFile(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      
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
      this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_moveFile2(context);
    }
    //--------------------
    public notify_promise_moveFile2(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
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
      this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_uploadFile2(context);
    }
    //--------------------
    public notify_promise_uploadFile2( srcStorageName: string, srcFolderName: string, srcFileName: string, remoteUrlName: string, remoteFolderName: string, remoteFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
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
    public notify_zipFile2(  storageName: string, folderName: string,  fileName: string, zipStorageName: string, zipFolderName: string, zipFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_zipFile2(context);
    }
    //--------------------
    public notify_promise_zipFile2(  storageName: string, folderName: string,  fileName: string, zipStorageName: string, zipFolderName: string, zipFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any 
    {
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
      this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_moveFolder2(context);
    }
    //-----------------------------
    public notify_promise_moveFolder2(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
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
      this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_zipFolder2(context);
    }
    //-----------------------------
    public notify_promise_zipFolder2(storageName: string, folderName: string, zipStorageName: string, zipFolderName: string, zipFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any 
    {
    }

        //-----------------
    // computeFileSha2
    //-----------------

    //----------------------------
    public notify_computeFileSha2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //----------------------------
    public notify_promise_computeFileSha2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any 
    {

    }

    //----------------------------
    public notify_computeFileShaAndSaveShaFile2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aSDKRenderer._iFileSystemRenderer.render_notify_computeAndSaveShaFile(context);
    }

    //----------------------------
    public notify_promise_computeFileShaAndSaveShaFile2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any 
    {
      
    }

  }
} 