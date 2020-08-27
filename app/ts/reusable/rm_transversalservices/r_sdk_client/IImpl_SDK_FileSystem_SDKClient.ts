import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_FileSystem");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmTransversalServicesSDKClient = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_client/R_SDK_Client");
import amGeneralShaProperties = require("../../../../../app/ts/abstract/am_general/a_shaproperties/A_ShaProperties");

export module rm_transversalservices
{
  export class IImpl_SDK_FileSystem_SDKClient implements amGeneral.am_transversalservices.I_SDK_FileSystem
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: rmTransversalServicesSDKClient.rm_transversalservices.R_SDK_Client;

    //----------- constructor 
    constructor(owner: rmTransversalServicesSDKClient.rm_transversalservices.R_SDK_Client)  
    {
      this._owner = owner;  
    }

    //--------------
    public readTextFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      var params = {
        "fileFullName" : fileFullName
      };
      this._owner._socket.emit('sdk.filesystem.read-text-file', params);                
    }

    //--------------
    public promise_readTextFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      var params = {
        "fileFullName" : fileFullName
      };
      this._owner._socket.emit('sdk.filesystem.promise-read-text-file', params);                
    }

    //---------------------
    public readTextFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var callId = this._owner.addCallback(context, callback); 
      //  "callId"      : callId,
      var params = {
          "storageName" : storageName,
          "folderName"  : folderName,
          "fileName"    : fileName,
          "callId"      : callId,
      };
      this._owner._socket.emit('sdk.filesystem.read-text-file2', params);   
    }

    //---------------------
    public promise_readTextFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      var callId = this._owner.addCallback(context, callback); 
      var params = {
        "storageName" : storageName,
        "folderName"  : folderName,
        "fileName"    : fileName,
        "callId"      : callId,
      };
      this._owner._socket.emit('sdk.filesystem.promise-read-text-file2', params);   
    }
    
    //-----------------
    public writeTextFile( fileFullName: string, fileContent: string,
      error: amGeneralError.am_general.A_Error, 
      context: amGeneralContext.am_general.A_Context, callback) 
    {
      var params = {
        "fileFullName" : fileFullName,
      };
      this._owner._socket.emit('sdk.filesystem.write-text-file', params);   
    }

    //--------------------------------------
    public promise_writeTextFile( fileFullName: string, fileContent: string,
                                  error: amGeneralError.am_general.A_Error, 
                                  context: amGeneralContext.am_general.A_Context, callback) 
    {
      var params = {
        "fileFullName" : fileFullName,
      };
      this._owner._socket.emit('sdk.filesystem.promise-write-text-file', params);   
    }

    
    //---------------------
    public writeTextFile2(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var params = {
        "storageName" : storageName,
        "folderName"  : folderName,
        "fileName"    : fileName,
        "fileContent" : fileContent
      };
      this._owner._socket.emit('sdk.filesystem.write-text-file2', params);   
    }

    //---------------------
    public promise_writeTextFile2(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var params = {
        "storageName" : storageName,
        "folderName"  : folderName,
        "fileName"    : fileName,
        "fileContent" : fileContent
      };
      this._owner._socket.emit('sdk.filesystem.promise-write-text-file2', params);   
    }


    //------------------
    public getFileList( folderFullName: string,
                        error: amGeneralError.am_general.A_Error, 
                        context: amGeneralContext.am_general.A_Context, callback) 
    {
      var params = {
        "folderFullName" : folderFullName
      };
      this._owner._socket.emit('sdk.filesystem.get-file-list', params);  
    }

    //------------------
    public promise_getFileList( folderFullName: string,
            error: amGeneralError.am_general.A_Error, 
            context: amGeneralContext.am_general.A_Context, callback) 
    {
      var params = {
        "folderFullName" : folderFullName
      };
      this._owner._socket.emit('sdk.filesystem.promise-get-file-list', params);
    }

    //--------------------------------------------
    public getFileList2 (storageName: string ,folderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      var params = {
        "storageName" : storageName,
        "pathName" : folderName
      };
      this._owner._socket.emit('sdk.filesystem.get-file-list2', params);
    }
        
    //--------------------------------
    public getNbFiles2(storageName: string, folderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      var callId = this._owner.addCallback(context, callback); 
      var params = {
        "storageName" : storageName,
        "pathName"    : folderName,
        "callId"      : callId,
      };
      this._owner._socket.emit('sdk.filesystem.get-nb-files2', params);
    }

    //--------------------
    public removeFile( fileFullName: string, 
                       error: amGeneralError.am_general.A_Error, 
                       context: amGeneralContext.am_general.A_Context, callback) 
    {
      var params = {
        "fileFullName" : fileFullName
      };
      this._owner._socket.emit('sdk.filesystem.remove-file', params);
    }
    
    //--------------------------------------
    public promise_removeFile( fileFullName: string, 
                               error: amGeneralError.am_general.A_Error, 
                               context: amGeneralContext.am_general.A_Context, callback) 
    {
      var params = {
        "fileFullName" : fileFullName
      };
      this._owner._socket.emit('sdk.filesystem.promise-remove-file', params);
    }

    //----------------------------------
    public removeFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var params = {
        "storageName" : storageName,
        "folderName"  : folderName,
        "fileName"    : fileName
      };
      this._owner._socket.emit('sdk.filesystem.remove-file2', params);   
    }


    //---------------------------------------
    public createFolder( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      var params = {
        "folderFullName" : folderFullName
      };
      this._owner._socket.emit('sdk.filesystem.create-folder', params);        
    }
        
    //-------------------------------------------
    public promise_createFolder( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      var params = {
        "folderFullName" : folderFullName
      };
      this._owner._socket.emit('sdk.filesystem.promise-create-folder', params);                
    }
    
    //---------------------------------------
    public createFolder2(storageName: string, folderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var params = {
        "storageName" : storageName,
        "folderName"  : folderName
      };
      this._owner._socket.emit('sdk.filesystem.create-folder2', params);   
    }

    //---------------------------------------
    public deleteFolder( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      var params = {
        "folderFullName" : folderFullName
      };
      this._owner._socket.emit('sdk.filesystem.delete-folder', params);            
    }
    
    //-------------------------------------------
    public promise_deleteFolder( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      var params = {
        "folderFullName" : folderFullName
      };
      this._owner._socket.emit('sdk.filesystem.promise-delete-folder', params);                
    }

    //-------------------------------------
    public deleteFolder2(storageName: string, folderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var params = {
        "storageName" : storageName,
        "folderName"  : folderName
      };
      this._owner._socket.emit('sdk.filesystem.delete-folder2', params);   
    }


    //-----------------------------------------------------------  
    public fileExists( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      var params = {
        "fileFullName" : fileFullName
      };
      this._owner._socket.emit('sdk.filesystem.file-exists', params);
    }

    //-----------------------------------------------------------  
    public promise_fileExists( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      var params = {
        "fileFullName" : fileFullName
      };
      this._owner._socket.emit('sdk.filesystem.promise-file-exists', params);          
    }

    //-----------------------------
    public fileExists2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var callId = this._owner.addCallback(context, callback); 
      //  "callId"      : callId,
      var params = {
          "storageName" : storageName,
          "folderName"  : folderName,
          "fileName"    : fileName,
          "callId"      : callId,
      };
      this._owner._socket.emit('sdk.filesystem.file-exists2', params);   
    
    }

    //-----------------------------------------------------------  
    public folderExists( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      var params = {
        "folderFullName" : folderFullName
      };
      this._owner._socket.emit('sdk.filesystem.folder-exists', params);                
    }

    //-----------------------------------------------------------  
    public promise_folderExists( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      var params = {
        "folderFullName" : folderFullName
      };
      this._owner._socket.emit('sdk.filesystem.promise-folder-exists', params);                              
    }
    
    //-------------------------------
    public folderExists2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var params = {
        "storageName" : storageName,
        "folderName"  : folderName
      };
      this._owner._socket.emit('sdk.filesystem.folder-exists2', params);          
    }

    //=============================================== implemented till here 
    
    //--------------------------------------
    //              copy file
    //--------------------------------------
    
    //--------------------------------------
    public copyFile( srcFileFullName: string, dstFileFullName: string,
      error: amGeneralError.am_general.A_Error, 
      context: amGeneralContext.am_general.A_Context, callback) 
    {
    }

    //--------------------------------------
    public promise_copyFile( srcFileFullName: string, dstFileFullName: string,
                             error: amGeneralError.am_general.A_Error, 
                             context: amGeneralContext.am_general.A_Context, callback) 
    {

    }

    //------------------------------------
    public copyFile2( srcStorageName: string, srcFolderName: string, srcFileName: string, 
                      dstStorageName: string, dstFolderName: string, dstFileName: string, 
                      error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var params = {
        "srcStorageName" : srcStorageName,
        "srcFolderName"  : srcFolderName,
        "srcFileName"    : srcFileName,
        "dstStorageName" : dstStorageName,
        "dstFolderName"  : dstFolderName,
        "dstFileName"    : dstFileName,
      };
      this._owner._socket.emit('sdk.filesystem.copy-file2', params);          
    }

    //------------------------------------
    public promise_copyFile2( srcStorageName: string, srcFolderName: string, srcFileName: string, 
                              dstStorageName: string, dstFolderName: string, dstFileName: string, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-------------------------------------------------------------
    //    copy folder 
    //-------------------------------------------------------------

    public copyFolder( srcFolderFullName: string, dstFolderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {

    }

    public promise_copyFolder( srcFolderFullName: string, dstFolderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {

    }

    public copyFolder2(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var params = {
        "srcStorageName" : srcStorageName,
        "srcFolderName"  : srcFolderName,
        "dstStorageName" : dstStorageName,
        "dstFolderName"  : dstFolderName,
      };
      this._owner._socket.emit('sdk.filesystem.copy-folder2', params);          
    }

    //---------------------------
    public promise_copyFolder2(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //--------------------------------------
    //      downloadFile - should be moved to web interface
    //--------------------------------------
    
    //--------------------------------------
    public downloadFile( remoteUrlName: string, dstFileFullName: string,
                         error: amGeneralError.am_general.A_Error, 
                         context: amGeneralContext.am_general.A_Context, callback) 
    {
    }

    //--------------------------------------
    public promise_downloadFile( remoteUrlName: string, dstFileFullName: string,
                                 error: amGeneralError.am_general.A_Error, 
                                 context: amGeneralContext.am_general.A_Context, callback) 
    {

    }

    //------------------------------------
    public downloadFile2( remoteUrlName: string, 
                          dstStorageName: string, dstFolderName: string, dstFileName: string, 
                          error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var params = {
        "remoteUrlName"  : remoteUrlName,
        "dstStorageName" : dstStorageName,
        "dstFolderName"  : dstFolderName,
        "dstFileName"    : dstFileName,
      };
      this._owner._socket.emit('sdk.filesystem.download-file2', params);          
    }

    //------------------------------------
    public promise_downloadFile2( remoteUrlName: string, 
                              dstStorageName: string, dstFolderName: string, dstFileName: string, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //--------------------------------------
    //      unzipFile - should be moved to web interface
    //--------------------------------------

    //--------------------------------------
    public unzipFile( zipFullFileName: string, unzipFullPath: string,
      error: amGeneralError.am_general.A_Error, 
      context: amGeneralContext.am_general.A_Context, callback) 
    {

    }

    //--------------------------------------
    public promise_unzipFile( zipFullFileName: string, unzipFullPath: string,
                  error: amGeneralError.am_general.A_Error, 
                  context: amGeneralContext.am_general.A_Context, callback) 
    {

    }

    //------------------------------------
    public unzipFile2( zipStorageName: string, zipFolderName: string, zipFileName: string, 
                       unzipStorageName: string, unzipFolderName: string,
                       error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var params = {
        "zipStorageName"   : zipStorageName,
        "zipFolderName"    : zipFolderName,
        "zipFileName"      : zipFileName,
        "unzipStorageName" : unzipStorageName,
        "unzipFolderName"  : unzipFolderName
      };
      this._owner._socket.emit('sdk.filesystem.unzip-file2', params);          
    }

    //------------------------------------
    public promise_unzipFile2( zipStorageName: string, zipFolderName: string, zipFileName: string, 
                  unzipStorageName: string, unzipFolderName: string,
                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }

    //--------------------------------------
    //      fsyncFile
    //--------------------------------------

    //--------------------------------------
    public fsyncFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }

    //--------------------------------------
    public promise_fsyncFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //--------------------------------------
    public fsyncFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }

    //--------------------------------------
    public promise_fsyncFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
    }
    

    //--------------------------------------
    //      get File Info
    //--------------------------------------

    //--------------------------------------
    public getFileInfo(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //--------------------------------------
    public promise_getFileInfo(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //--------------------------------------
    public getFileInfo2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }

    //--------------------------------------
    public promise_getFileInfo2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
    }

    //-------------- 
    // temporary - will be moved to the write place
    //--------------

    public appendTextToFile(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      
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
      var params = {
        "srcStorageName"   : srcStorageName,
        "srcFolderName"    : srcFolderName,
        "srcFileName"      : srcFileName,
        "dstStorageName"   : dstStorageName,
        "dstFolderName"    : dstFolderName,
        "dstFileName"      : dstFileName
      };
      this._owner._socket.emit('sdk.filesystem.move-file2', params);          
    }

    //-------------------------
    public promise_moveFile2(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
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
      var params = {
        "srcStorageName"   : srcStorageName,
        "srcFolderName"    : srcFolderName,
        "srcFileName"      : srcFileName,
        "remoteUrlName"    : remoteUrlName,
        "remoteFolderName" : remoteFolderName,
        "remoteFileName"   : remoteFileName
      };
      this._owner._socket.emit('sdk.filesystem.upload-file2', params);          
    }
    //-------------------------
    public promise_uploadFile2( srcStorageName: string, srcFolderName: string, srcFileName: string, remoteUrlName: string, remoteFolderName: string, remoteFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
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
    public zipFile2(  storageName: string, folderName: string,  fileName: string, zipStorageName: string, zipFolderName: string, zipFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var params = {
        "storageName"     : storageName,
        "folderName"      : folderName,
        "fileName"        : fileName,
        "zipStorageName"  : zipStorageName,
        "zipFolderName"   : zipFolderName,
        "zipFileName"     : zipFileName
      };
      this._owner._socket.emit('sdk.filesystem.zip-file2', params);          
    }
    //-------------------------
    public promise_zipFile2(  storageName: string, folderName: string,  fileName: string, zipStorageName: string, zipFolderName: string, zipFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any  
    {
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
      var params = {
        "srcStorageName"   : srcStorageName,
        "srcFolderName"    : srcFolderName,
        "dstStorageName"   : dstStorageName,
        "dstFolderName"    : dstFolderName,
      };
      this._owner._socket.emit('sdk.filesystem.move-folder2', params);          
    }
    //-------------------------
    public promise_moveFolder2(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
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
      var params = {
        "storageName"      : storageName,
        "folderName"       : folderName,
        "zipStorageName"   : zipStorageName,
        "zipFolderName"    : zipFolderName,
        "zipFileName"      : zipFileName
      };
      this._owner._socket.emit('sdk.filesystem.zip-folder2', params);          
    }
    //-------------------------
    public promise_zipFolder2(storageName: string, folderName: string, zipStorageName: string, zipFolderName: string, zipFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any 
    {
    }
  
    //----------------------
    //  compute file sha 
    //  and save sha in file
    //-----------------------

    //--------------------------------
    public computeFileSha2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
      var params = {
        "srcStorageName"   : shaProperties.getSrcFileInfo().getStorage(),
        "srcFolderName"    : shaProperties.getSrcFileInfo().getPath(),
        "srcFileName"      : shaProperties.getSrcFileInfo().getName(),
        "shaStorageName"   : shaProperties.getShaFileInfo().getStorage(),
        "shaFolderName"    : shaProperties.getShaFileInfo().getPath(),
        "shaFileName"      : shaProperties.getShaFileInfo().getName(),
      };
      this._owner._socket.emit('sdk.filesystem.computefilesha2', params);          
    }

    //-----------------------
    public promise_computeFileSha2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any 
    {

    }

    //--------------------------------
    public computeFileShaAndSaveShaFile2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var params = {
        "srcStorageName"   : shaProperties.getSrcFileInfo().getStorage(),
        "srcFolderName"    : shaProperties.getSrcFileInfo().getPath(),
        "srcFileName"      : shaProperties.getSrcFileInfo().getName(),
        "shaStorageName"   : shaProperties.getShaFileInfo().getStorage(),
        "shaFolderName"    : shaProperties.getShaFileInfo().getPath(),
        "shaFileName"      : shaProperties.getShaFileInfo().getName(),
      };
      this._owner._socket.emit('sdk.filesystem.computeandsavefilesha2', params);          
    }

    //-----------------------
    public promise_computeFileShaAndSaveShaFile2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any 
    {

    }

    //=========================
    // read and parse xml file
    //=========================

    //--------------------------
    public readAndParseXMLFile2(storageName: string, folderName: string, fileName: string, 
                                urlStorageName: string, urlFolderName: string, urlFileName: string, 
                                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var callId = this._owner.addCallback(context, callback); //a simple read file with callback
      var params = {
        "storageName" : storageName,
        "folderName"  : folderName,
        "fileName"    : fileName,
        "callId"      : callId,
      };
      this._owner._socket.emit('sdk.filesystem.read-text-file2', params);   
    }


    //--------------------------
    public parseXMLString(xmlString: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var parser = null;
      var xmlObject = null;
      var jsn = null;

      //---- is parse error 
      function isParseError(parsedDocument) : boolean {
        // parser and parsererrorNS could be cached on startup for efficiency
        var parser = new DOMParser(),
        errorneousParse = parser.parseFromString('<', 'text/xml'),
        parsererrorNS = errorneousParse.getElementsByTagName("parsererror")[0].namespaceURI;
    
        if (parsererrorNS === 'http://www.w3.org/1999/xhtml') {
            // In PhantomJS the parseerror element doesn't seem to have a special namespace, so we are just guessing here :(
            //return parsedDocument.getElementsByTagName("parsererror").length > 0;
            var xmlError = parsedDocument.getElementsByTagName("parsererror");
            if (xmlError === null)
              return false;
            if (xmlError == "")
              return false;
            if (xmlError.length > 0)
             return true;
            return false; 
        }
    
        //return parsedDocument.getElementsByTagNameNS(parsererrorNS, 'parsererror').length > 0;
        var xmlError = parsedDocument.getElementsByTagNameNS(parsererrorNS, 'parsererror');
        if (xmlError === null)
          return false;
        if (xmlError == "")
          return false;
        if (xmlError.length > 1)
          return true;
        return false; 
      };
      //--------------------
      if (typeof DOMParser != "undefined") {

        parser = new DOMParser();
        xmlObject = parser.parseFromString(xmlString,"text/xml");
        //var parsererrorNS = parser.parseFromString('INVALID', 'text/xml').getElementsByTagName("parsererror")[0].namespaceURI;
        if( isParseError(xmlObject) ) //xmlObject.getElementsByTagNameNS(parsererrorNS, 'parsererror').length > 0) 
        {
          //throw new Error('Error parsing XML');
          console.log( 'Error parsing xml file ' + xmlString ); 
          context.setError(error);
          context.setObjectResult(null);
          if (context.getError() != null)
            context.getError().setError(7009, 'Error parsing xml ' + xmlString );//+ " " + parsererrorNS);
          if (callback != null)
            callback(context);  
          return;  

        }
        //document.getElementById("sdk.message").innerHTML += "<p>" + JSON.stringify(xmlObject) + "</p>";
        console.log(JSON.stringify(xmlObject));
        context.setObjectResult(xmlObject);
        console.log( "Successfully parse xml object"); 
        context.setError(error);
        if (callback != null)
          callback(context);     
        return ;
      //--------------------
      }else if (false) {//typeof window.ActiveXObject){ //} != "undefined") {
          xmlObject = new ActiveXObject("Microsoft.XMLDOM");
          if (xmlObject == null)
          {
            console.log( 'Error parsing xml ' + xmlString + " cannot create Microsoft.XMLDOM"); 
            context.setError(error);
            context.setObjectResult(null);
            if (context.getError() != null)
              context.getError().setError(7002, 'Error parsing xml ' + xmlString + " cannot create Microsoft.XMLDOM");
            if (callback != null)
              callback(context);  
            return;  
          }
          xmlObject.async = "false";
          var bSucceed = xmlObject.loadXML(xmlString);
          if (! bSucceed)
          {
            console.log( 'Error parsing xml file ' + xmlString ); 
            context.setError(error);
            context.setObjectResult(null);
            if (context.getError() != null)
              context.getError().setError(7009, 'Error parsing xml ' + xmlString );//+ " " + parsererrorNS);
            if (callback != null)
              callback(context);  
            return;    
          }
          console.log(JSON.stringify(xmlObject));
          context.setObjectResult(xmlObject);
          console.log( "Successfully parse xml object"); 
          context.setError(error);
          if (callback != null)
            callback(context);     
          return ;
      } else {
          console.log( 'Error parsing xml ' + xmlString + " no xml parser found"); 
          context.setError(error);
          context.setObjectResult(null);
          if (context.getError() != null)
            context.getError().setError(7001, 'Error parsing xml ' + xmlString + " no xml parser found");
          if (callback != null)
            callback(context);  
          return;  
      }
    }


  }
} 