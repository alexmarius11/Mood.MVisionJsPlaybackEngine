import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_FileSystem");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmTransversalServicesSDKConnector = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/R_SDK_Connector");
import amGeneralShaProperties = require("../../../../../app/ts/abstract/am_general/a_shaproperties/A_ShaProperties");

export module rm_transversalservices
{
  export class IImpl_SDK_FileSystem_SDKConnector implements amGeneral.am_transversalservices.I_SDK_FileSystem
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
    public readTextFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_readTextFile(fileFullName, error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKFileSystem.readTextFile(fileFullName, error, context, callback2) 
    }

    
    //--------------
    public promise_readTextFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      return null;
    }

    //---------------------
    public readTextFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_readTextFile2(storageName, folderName, fileName, error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKFileSystem.readTextFile2(storageName, folderName, fileName, error, context, callback2) 
    }

    //---------------------
    public promise_readTextFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      return this.promise_readTextFile(storageName + folderName + fileName, error, context, callback);      
    }
    


    //-----------------
    public writeTextFile( fileFullName: string, fileContent: string,
      error: amGeneralError.am_general.A_Error, 
      context: amGeneralContext.am_general.A_Context, callback) 
    {

    }

    //--------------------------------------
    public promise_writeTextFile( fileFullName: string, fileContent: string,
                                  error: amGeneralError.am_general.A_Error, 
                                  context: amGeneralContext.am_general.A_Context, callback) 
    {
    }

    
    //---------------------
    public writeTextFile2(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_writeTextFile2(storageName, folderName, fileName, fileContent, error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKFileSystem.writeTextFile2(storageName, folderName, fileName, fileContent, error, context, callback2) 
    }

    //---------------------
    public promise_writeTextFile2(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      return this.promise_writeTextFile(storageName + folderName + fileName, fileContent, error, context, callback);      
    }


    //------------------
    public getFileList( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_getFileList(folderFullName,error,context,callback);
      }
      owner._aSDKJsTV._iSDKFileSystem.getFileList(folderFullName,error,context,callback2);
    }

    //------------------
    public promise_getFileList( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_promise_getFileList(folderFullName, error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKFileSystem.promise_getFileList(folderFullName, error, context, callback2) ;
    }

    //---------------------------------------------------------------
    public getFileList2 (storageName: string ,folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_getFileList2(storageName, folderFullName,error,context, callback);
      }
      owner._aSDKJsTV._iSDKFileSystem.getFileList2(storageName, folderFullName,error,context,callback2);
    }
    
    //---------------------------------------------------------------
    public getNbFiles2 (storageName: string ,folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        //console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_getNbFiles2(storageName, folderFullName,error,context, callback);
      }
      owner._aSDKJsTV._iSDKFileSystem.getNbFiles2(storageName, folderFullName,error,context,callback2);
    }

    //--------------------
    public removeFile( fileFullName: string, 
                       error: amGeneralError.am_general.A_Error, 
                       context: amGeneralContext.am_general.A_Context, callback) 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_removeFile(fileFullName, error,context, callback);
      }
      owner._aSDKJsTV._iSDKFileSystem.removeFile(fileFullName, error,context,callback2);
    }
    
    //--------------------------------------
    public promise_removeFile( fileFullName: string, 
                               error: amGeneralError.am_general.A_Error, 
                               context: amGeneralContext.am_general.A_Context, callback) 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_promise_removeFile(fileFullName, error,context, callback);
      }
      owner._aSDKJsTV._iSDKFileSystem.promise_removeFile(fileFullName, error,context,callback2);
    }

    //---------------------------------------
    public removeFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_removeFile2(storageName, folderName, fileName, error, context, callback);
      }
      owner._aSDKJsTV._iSDKFileSystem.removeFile2(storageName, folderName, fileName, error, context, callback2);
    }


    //---------------------------------------
    public fileExists2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_fileExists2(storageName, folderName, fileName, error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKFileSystem.fileExists2(storageName, folderName, fileName, error, context, callback2) ;
    }
    
    //-----------------------------------------------------------  
    public fileExists( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
    }

    //-----------------------------------------------------------  
    public promise_fileExists( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
          
    }

    //-----------------------------------------------------------  
    public folderExists( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
    }

    //-----------------------------------------------------------  
    public promise_folderExists( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
              
    }
    
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
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_copyFile2( srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) ;
      }
      //document.getElementById("sdk.message").innerHTML += "<p>Connector.copyFile2 start</p>";
      owner._aSDKJsTV._iSDKFileSystem.copyFile2( srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback2) ;
    }

    //------------------------------------
    public promise_copyFile2( srcStorageName: string, srcFolderName: string, srcFileName: string, 
                              dstStorageName: string, dstFolderName: string, dstFileName: string, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
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
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_downloadFile2( remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKFileSystem.downloadFile2( remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback2);      
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
                      error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {

    }

    //--------------------------------------
    public promise_unzipFile( zipFullFileName: string, unzipFullPath: string,
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {

    }

    //------------------------------------
    public unzipFile2( zipStorageName: string, zipFolderName: string, zipFileName: string, 
                       unzipStorageName: string, unzipFolderName: string,
                       error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_unzipFile2( zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKFileSystem.unzipFile2( zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback2);      
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
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_fsyncFile2(storageName, folderName, fileName, error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKFileSystem.fsyncFile2(storageName, folderName, fileName, error, context, callback2) ;      
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
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_getFileInfo2(storageName, folderName, fileName, error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKFileSystem.getFileInfo2(storageName, folderName, fileName, error, context, callback2) ;      
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
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_appendTextToFile(storageName, folderName, fileName, fileContent, error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKFileSystem.appendTextToFile(storageName, folderName, fileName, fileContent, error, context, callback2) ;      
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
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_moveFile2(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKFileSystem.moveFile2(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback2) ;
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
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_uploadFile2(srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKFileSystem.uploadFile2(srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback2) ;
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
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_zipFile2( storageName, folderName,  fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKFileSystem.zipFile2( storageName, folderName,  fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback2) ;
    }
    //-------------------------
    public promise_zipFile2(  storageName: string, folderName: string,  fileName: string, zipStorageName: string, zipFolderName: string, zipFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any  
    {
    }


    //================================================
    //   Folder Methods
    //=================================================    
    //---------------------------------------
    public createFolder( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_createFolder(folderFullName, error,context, callback);
      }
      owner._aSDKJsTV._iSDKFileSystem.createFolder(folderFullName, error,context,callback2);        
    }
        
    //-------------------------------------------
    public promise_createFolder( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_promise_createFolder(fileFullName, error,context, callback);
      }
      owner._aSDKJsTV._iSDKFileSystem.promise_createFolder(fileFullName, error,context,callback2);                
    }

    //---------------------------------------
    public createFolder2(storageName: string, folderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_createFolder2(storageName, folderName, error, context, callback);
      }
      owner._aSDKJsTV._iSDKFileSystem.createFolder2(storageName, folderName, error, context, callback2);
    }

    
    //-------------------------------------------------------------
    //    delete folder 
    //-------------------------------------------------------------

    //---------------------------------------
    public deleteFolder( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_deleteFolder(folderFullName, error,context, callback);
      }
      owner._aSDKJsTV._iSDKFileSystem.deleteFolder(folderFullName, error,context,callback2);                    
    }
    
    //-------------------------------------------
    public promise_deleteFolder( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_promise_deleteFolder(folderFullName, error,context, callback);
      }
      owner._aSDKJsTV._iSDKFileSystem.promise_deleteFolder(folderFullName, error,context,callback2);                        
    }
    
    //---------------------------------------
    public deleteFolder2(storageName: string, folderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_deleteFolder2(storageName, folderName, error, context, callback);
      }
      owner._aSDKJsTV._iSDKFileSystem.deleteFolder2(storageName, folderName, error, context, callback2);
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

    //----------------------------------------
    public copyFolder2(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_copyFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKFileSystem.copyFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback2) ;
    }

    //---------------------------
    public promise_copyFolder2(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
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
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_moveFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKFileSystem.moveFolder2(srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback2) ;
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
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_zipFolder2(storageName, folderName,  zipStorageName, zipFolderName, zipFileName, error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKFileSystem.zipFolder2(storageName, folderName,  zipStorageName, zipFolderName, zipFileName, error, context, callback2) ;
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
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_computeFileSha2(shaProperties, error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKFileSystem.computeFileSha2(shaProperties, error, context, callback2) ;
    }

    //-----------------------
    public promise_computeFileSha2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_promise_computeFileShaAndSaveShaFile2(shaProperties, error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKFileSystem.promise_computeFileShaAndSaveShaFile2(shaProperties, error, context, callback2) ;
    }

    //--------------------------------
    public computeFileShaAndSaveShaFile2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_computeFileShaAndSaveShaFile2(shaProperties, error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKFileSystem.computeFileShaAndSaveShaFile2(shaProperties, error, context, callback2) ;
    }

    //-----------------------
    public promise_computeFileShaAndSaveShaFile2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKFileSystem.notify_promise_computeFileShaAndSaveShaFile2(shaProperties, error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKFileSystem.promise_computeFileShaAndSaveShaFile2(shaProperties, error, context, callback2) ;
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