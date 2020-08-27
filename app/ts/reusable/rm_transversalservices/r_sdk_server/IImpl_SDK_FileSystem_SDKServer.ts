import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_FileSystem");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmTransversalServicesSDKServer = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_server/R_SDK_Server");

import amGeneralShaProperties = require("../../../../../app/ts/abstract/am_general/a_shaproperties/A_ShaProperties");

export module rm_transversalservices
{
  export class IImpl_SDK_FileSystem_SDKServer implements amGeneral.am_transversalservices.I_SDK_FileSystem
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: rmTransversalServicesSDKServer.rm_transversalservices.R_SDK_Server;

    //----------- constructor 
    constructor(owner: rmTransversalServicesSDKServer.rm_transversalservices.R_SDK_Server)  
    {
      this._owner = owner;  
    }

    //--------------
    public readTextFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aTargetSDK._iSDKFileSystem.readTextFile(fileFullName, error, context, callback);        
    }

    //--------------
    public promise_readTextFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_readTextFile(fileFullName, error, context, callback);        
    }

    //---------------------
    public readTextFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aTargetSDK._iSDKFileSystem.readTextFile2(storageName, folderName, fileName, error, context, callback);        
    }

    //---------------------
    public promise_readTextFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_readTextFile2(storageName, folderName, fileName, error, context, callback);        
    }
    


    //-----------------
    public writeTextFile( fileFullName: string, fileContent: string,
      error: amGeneralError.am_general.A_Error, 
      context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aTargetSDK._iSDKFileSystem.writeTextFile(fileFullName, fileContent, error, context, callback);        
    }

    //--------------------------------------
    public promise_writeTextFile( fileFullName: string, fileContent: string,
                                  error: amGeneralError.am_general.A_Error, 
                                  context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aTargetSDK._iSDKFileSystem.writeTextFile(fileFullName, fileContent, error, context, callback);              
    }

    
    //---------------------
    public writeTextFile2(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      this._owner._aTargetSDK._iSDKFileSystem.writeTextFile2(storageName, folderName, fileName, fileContent, error, context, callback);        
    }

    //---------------------
    public promise_writeTextFile2(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_writeTextFile2(storageName, folderName, fileName, fileContent, error, context, callback);        
    }


    //------------------
    public getFileList( folderFullName: string,
                        error: amGeneralError.am_general.A_Error, 
                        context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aTargetSDK._iSDKFileSystem.getFileList(folderFullName, error, context, callback);        
    }

    //------------------
    public promise_getFileList( folderFullName: string,
            error: amGeneralError.am_general.A_Error, 
            context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_getFileList(folderFullName, error, context, callback);        
    }

    //-----------------------
    public getFileList2 (storageName: string ,folderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aTargetSDK._iSDKFileSystem.getFileList2(storageName, folderName, error, context, callback);        
    }

    //--------------------------------
    public getNbFiles2(storageName: string, folderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aTargetSDK._iSDKFileSystem.getNbFiles2(storageName, folderName, error, context, callback);        
    }

    //--------------------
    public removeFile( fileFullName: string, 
                       error: amGeneralError.am_general.A_Error, 
                       context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aTargetSDK._iSDKFileSystem.removeFile(fileFullName, error, context, callback);              
    }
    
    //--------------------------------------
    public promise_removeFile( fileFullName: string, 
                               error: amGeneralError.am_general.A_Error, 
                               context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_removeFile(fileFullName, error, context, callback);                    
    }

    //---------------------------------
    public removeFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      this._owner._aTargetSDK._iSDKFileSystem.removeFile2(storageName, folderName, fileName,  error, context, callback);              
    }

    //---------------------------------------
    public createFolder( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aTargetSDK._iSDKFileSystem.createFolder(folderFullName,  error, context, callback);                    
    }
        
    //-------------------------------------------
    public promise_createFolder( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_createFolder(fileFullName, error, context, callback);                                    
    }
    
    //----------------------------------
    public createFolder2(storageName: string, folderfullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      this._owner._aTargetSDK._iSDKFileSystem.createFolder2(storageName, folderfullName, error, context, callback);                                    
    }


    //---------------------------------------
    public deleteFolder( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aTargetSDK._iSDKFileSystem.deleteFolder(folderFullName, error, context, callback);                                    
    }
    
    //-------------------------------------------
    public promise_deleteFolder( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_deleteFolder(fileFullName, error, context, callback);                                        
    }

    //---------------------------------------------
    public deleteFolder2(storageName: string, folderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      this._owner._aTargetSDK._iSDKFileSystem.deleteFolder2(storageName, folderName, error, context, callback);                                        
    }

    //-----------------------------------------------------------  
    public fileExists( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aTargetSDK._iSDKFileSystem.fileExists(fileFullName,  error, context, callback);                                          
    }

    //-----------------------------------------------------------  
    public promise_fileExists( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_fileExists( fileFullName,  error, context, callback);                                                  
    }

    //------------------------------------------
    public fileExists2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      this._owner._aTargetSDK._iSDKFileSystem.fileExists2(storageName, folderName, fileName, error, context, callback);                                          
    }


    //-----------------------------------------------------------  
    public folderExists( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aTargetSDK._iSDKFileSystem.folderExists( folderFullName, error, context, callback);                                          
    }

    //-----------------------------------------------------------  
    public promise_folderExists( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_folderExists( folderFullName, error, context, callback);                                                        
    }
    
    //--------------------------------------
    //              copy file
    //--------------------------------------
    
    //--------------------------------------
    public copyFile( srcFileFullName: string, dstFileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aTargetSDK._iSDKFileSystem.copyFile(srcFileFullName, dstFileFullName, error, context, callback);                                                              
    }

    //--------------------------------------
    public promise_copyFile( srcFileFullName: string, dstFileFullName: string,
                             error: amGeneralError.am_general.A_Error, 
                             context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_copyFile(srcFileFullName, dstFileFullName, error, context, callback);                                                              
    }

    //------------------------------------
    public copyFile2( srcStorageName: string, srcFolderName: string, srcFileName: string, 
                      dstStorageName: string, dstFolderName: string, dstFileName: string, 
                      error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aTargetSDK._iSDKFileSystem.copyFile2( srcStorageName, srcFolderName, srcFileName, 
                                                         dstStorageName, dstFolderName, dstFileName, 
                                                         error, context, callback);                                                              
    }

    //------------------------------------
    public promise_copyFile2( srcStorageName: string, srcFolderName: string, srcFileName: string, 
                              dstStorageName: string, dstFolderName: string, dstFileName: string, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_copyFile2( srcStorageName, srcFolderName, srcFileName, 
                                                                 dstStorageName, dstFolderName, dstFileName, 
                                                                error, context, callback);                                                              
    }


    //--------------------------------------
    //      downloadFile - should be moved to web interface
    //--------------------------------------
    
    //--------------------------------------
    public downloadFile( remoteUrlName: string, dstFileFullName: string,
                         error: amGeneralError.am_general.A_Error, 
                         context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aTargetSDK._iSDKFileSystem.downloadFile( remoteUrlName, dstFileFullName,
                                                            error, context, callback);                                                              
    }

    //--------------------------------------
    public promise_downloadFile( remoteUrlName: string, dstFileFullName: string,
                                 error: amGeneralError.am_general.A_Error, 
                                 context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_downloadFile( remoteUrlName, dstFileFullName,
                                                                    error, context, callback);                                                              
    }

    //------------------------------------
    public downloadFile2( remoteUrlName: string, 
                          dstStorageName: string, dstFolderName: string, dstFileName: string, 
                          error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aTargetSDK._iSDKFileSystem.downloadFile2( remoteUrlName, 
                                                             dstStorageName, dstFolderName, dstFileName, 
                                                             error, context, callback);                                                              
    }

    //------------------------------------
    public promise_downloadFile2( remoteUrlName: string, 
                              dstStorageName: string, dstFolderName: string, dstFileName: string, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_downloadFile2( remoteUrlName, 
                                                                     dstStorageName, dstFolderName, dstFileName, 
                                                                     error, context, callback);                                                              
    }

    //--------------------------------------
    //      unzipFile - should be moved to web interface
    //--------------------------------------

    //--------------------------------------
    public unzipFile( zipFullFileName: string, unzipFullPath: string,
                      error: amGeneralError.am_general.A_Error, 
                      context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aTargetSDK._iSDKFileSystem.unzipFile( zipFullFileName, unzipFullPath,
                                                         error, context, callback);                                                              
    }

    //--------------------------------------
    public promise_unzipFile( zipFullFileName: string, unzipFullPath: string,
                              error: amGeneralError.am_general.A_Error, 
                              context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_unzipFile( zipFullFileName, unzipFullPath,
                                                                 error, context, callback);                                                              
    }

    //------------------------------------
    public unzipFile2( zipStorageName: string, zipFolderName: string, zipFileName: string, 
                       unzipStorageName: string, unzipFolderName: string,
                       error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aTargetSDK._iSDKFileSystem.unzipFile2( zipStorageName, zipFolderName, zipFileName, 
                                                          unzipStorageName, unzipFolderName,
                                                          error, context, callback);                                                              
    }

    //------------------------------------
    public promise_unzipFile2( zipStorageName: string, zipFolderName: string, zipFileName: string, 
                  unzipStorageName: string, unzipFolderName: string,
                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_unzipFile2( zipStorageName, zipFolderName, zipFileName, 
                                                                  unzipStorageName, unzipFolderName,
                                                                  error, context, callback);                                                              
    }

    //--------------------------------------
    //      fsyncFile
    //--------------------------------------

    //--------------------------------------
    public fsyncFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aTargetSDK._iSDKFileSystem.fsyncFile( fileFullName,
                                                         error, context, callback);                                                              
    }

    //--------------------------------------
    public promise_fsyncFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_fsyncFile( fileFullName,
                                                                 error, context, callback);                    
    }

    //--------------------------------------
    public fsyncFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aTargetSDK._iSDKFileSystem.fsyncFile2( storageName, folderName, fileName, error, context, callback);                    
    }

    //--------------------------------------
    public promise_fsyncFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      this._owner._aTargetSDK._iSDKFileSystem.fsyncFile2( storageName, folderName, fileName, error, context, callback); 
    }
    

    //--------------------------------------
    //      get File Info
    //--------------------------------------

    //--------------------------------------
    public getFileInfo(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aTargetSDK._iSDKFileSystem.getFileInfo(fileFullName, error, context, callback); 
    }

    //--------------------------------------
    public promise_getFileInfo(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_getFileInfo(fileFullName, error, context, callback); 
    }

    //--------------------------------------
    public getFileInfo2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aTargetSDK._iSDKFileSystem.getFileInfo2(storageName, folderName, fileName, error, context, callback); 
    }

    //--------------------------------------
    public promise_getFileInfo2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_getFileInfo2(storageName, folderName, fileName, error, context, callback); 
    }

    //-------------- 
    // temporary - will be moved to the write place
    //--------------

    //-------------------------
    public appendTextToFile(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      this._owner._aTargetSDK._iSDKFileSystem.appendTextToFile(storageName, folderName, fileName, fileContent, error, context, callback);       
    }

    //------------------------
    //    Move File
    //------------------------

    //-------------------------
    public moveFile( srcFileFullName: string, dstFileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }
    //-------------------------
    public promise_moveFile( srcFileFullName: string, dstFileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any 
    {
    }
    //-------------------------
    public moveFile2(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aTargetSDK._iSDKFileSystem.moveFile2(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback);             
    }
    //-------------------------
    public promise_moveFile2(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_moveFile2(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback);             
    }

    //------------------------
    //    Upload File
    //------------------------

    //-------------------------
    public uploadFile(srcFileFullName: string, remoteUrlName: string, remoteFileFullName : string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }
    //-------------------------
    public promise_uploadFile(srcFileFullName: string,  remoteUrlName: string, remoteFileFullName : string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any 
    {
    }
    //-------------------------
    public uploadFile2(srcStorageName: string, srcFolderName: string, srcFileName: string, remoteUrlName: string, remoteFolderName: string, remoteFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aTargetSDK._iSDKFileSystem.uploadFile2(srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback);             
    }
    //-------------------------
    public promise_uploadFile2( srcStorageName: string, srcFolderName: string, srcFileName: string, remoteUrlName: string, remoteFolderName: string, remoteFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_uploadFile2(srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback);             
    }
       
    //------------------------
    //    Zip File
    //------------------------

    //-------------------------
    public zipFile( fullFileName: string, zipFullFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }
    //-------------------------
    public promise_zipFile( fullFileName: string, zipFullFileName: string, error: amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) : any 
    {
    }

    //-------------------------
    public zipFile2( storageName: string, folderName: string,  fileName: string, zipStorageName: string, zipFolderName: string, zipFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aTargetSDK._iSDKFileSystem.zipFile2(storageName, folderName,  fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback);    
    }
    //-------------------------
    public promise_zipFile2(  storageName: string, folderName: string,  fileName: string, zipStorageName: string, zipFolderName: string, zipFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any  
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_zipFile2(storageName, folderName,  fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback);    
    }

    
    //========================================
    //    Folder Methods 
    //=========================================

        //-------------------------------------------------------------
    //    copy folder 
    //-------------------------------------------------------------

    //---------------------------------
    public copyFolder( srcFolderFullName: string, dstFolderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aTargetSDK._iSDKFileSystem.copyFolder(srcFolderFullName, dstFolderFullName, error, context, callback); 
    }

    //---------------------------------
    public promise_copyFolder( srcFolderFullName: string, dstFolderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_copyFolder(srcFolderFullName, dstFolderFullName, error, context, callback); 
    }

    //---------------------------------------------------------------------
    public copyFolder2(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aTargetSDK._iSDKFileSystem.copyFolder2( srcStorageName, srcFolderName, 
                                                           dstStorageName, dstFolderName,  
                                                           error, context, callback);                                                              
    }

    //---------------------------
    public promise_copyFolder2(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      this._owner._aTargetSDK._iSDKFileSystem.copyFolder2( srcStorageName, srcFolderName, 
                                                           dstStorageName, dstFolderName,  
                                                           error, context, callback);                                                              
    }


    //------------------------
    //    Move Folder
    //------------------------

    //-------------------------
    public moveFolder( srcFolderFullName: string, dstFolderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }
    //-------------------------
    public promise_moveFolder( srcFolderFullName: string, dstFolderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any 
    {
    }
    //-------------------------
    public moveFolder2(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aTargetSDK._iSDKFileSystem.moveFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback);    
    }
    //-------------------------
    public promise_moveFolder2(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_moveFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback);    
    }

    //------------------------
    //    Zip Folder
    //------------------------

    //-------------------------
    public zipFolder( fullFolderName: string, zipFullFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }
    //-------------------------
    public promise_zipFolder( fullFolderName: string, zipFullFolderName: string, error: amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) : any 
    {
    }
    //-------------------------
    public zipFolder2(storageName: string, folderName: string,  zipStorageName: string, zipFolderName: string, zipFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aTargetSDK._iSDKFileSystem.zipFolder2(storageName, folderName,  zipStorageName, zipFolderName, zipFileName, error, context, callback);    
    }
    //-------------------------
    public promise_zipFolder2(storageName: string, folderName: string,  zipStorageName: string, zipFolderName: string, zipFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_zipFolder2(storageName, folderName,  zipStorageName, zipFolderName, zipFileName, error, context, callback);    
    }
  
    //----------------------
    //  compute file sha 
    //  and save sha in file
    //-----------------------

    //--------------------------------
    public computeFileSha2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aTargetSDK._iSDKFileSystem.computeFileSha2(shaProperties, error, context, callback);    
    }

    //-----------------------
    public promise_computeFileSha2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any 
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_computeFileSha2(shaProperties, error, context, callback);    
    }

    //--------------------------------
    public computeFileShaAndSaveShaFile2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner._aTargetSDK._iSDKFileSystem.computeFileShaAndSaveShaFile2(shaProperties, error, context, callback);    
    }

    //-----------------------
    public promise_computeFileShaAndSaveShaFile2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any 
    {
      this._owner._aTargetSDK._iSDKFileSystem.promise_computeFileShaAndSaveShaFile2(shaProperties, error, context, callback);    
    }

    //=========================
    // read and parse xml file
    //=========================

    //--------------------------
    public readAndParseXMLFile2(storageName: string, folderName: string, fileName: string, 
                                urlStorageName: string, urlFolderName: string, urlFileName: string, 
                                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    
    }

    //--------------------------
    public parseXMLString(xmlString: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

  }
} 