import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralShaProperties = require("../../../../../app/ts/abstract/am_general/a_shaproperties/A_ShaProperties");

export module am_transversalservices
{
  export interface I_SDK_notifyFileSystem extends amGeneral.am_general.I_Interface
  {
    _name: string;    


    notify_readTextFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_readTextFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;
    notify_readTextFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_readTextFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;


    notify_writeTextFile(fileFullName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);
    notify_promise_writeTextFile( fileFullName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);
    notify_writeTextFile2(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);
    notify_promise_writeTextFile2(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);


    notify_getFileList( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;
    notify_getFileList2 (storageName: string ,folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;
    notify_promise_getFileList( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);

    notify_getNbFiles2(storageName: string ,folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;

    notify_removeFile( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;
    notify_promise_removeFile( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;
    notify_removeFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);

    notify_createFolder( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;
    notify_promise_createFolder( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;
    notify_createFolder2(storageName: string, folderfullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);

    notify_deleteFolder( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;
    notify_deleteFolder2(storageName: string, folderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);
    notify_promise_deleteFolder( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;


    notify_fileExists( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback); 
    notify_fileExists2( storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback); 
    notify_promise_fileExists( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback); 


    notify_folderExists( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);
    notify_promise_folderExists( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback); 

    notify_appendTextToFile(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);

    notify_copyFile( srcFileFullName: string, dstFileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;
    notify_promise_copyFile( srcFileFullName: string, dstFileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;
    notify_copyFile2(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_copyFile2(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_copyFolder( srcFolderFullName: string, dstFolderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;
    notify_promise_copyFolder( srcFolderFullName: string, dstFolderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;
    notify_copyFolder2(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_copyFolder2(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    //-------------------------------------- should be moved to WebRemote interface
    notify_downloadFile( remoteUrlName: string, dstFileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;
    notify_promise_downloadFile( remoteUrlName: string, dstFileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)   
    notify_downloadFile2( remoteUrlName: string, dstStorageName: string, dstFolderName: string, dstFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    notify_promise_downloadFile2( remoteUrlName: string, dstStorageName: string, dstFolderName: string, dstFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;
    
    notify_unzipFile( zipFullFileName: string, unzipFullPath: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;
    notify_promise_unzipFile( zipFullFileName: string, unzipFullPath: string, error: amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) ;
    notify_unzipFile2( zipStorageName: string, zipFolderName: string, zipFileName: string, unzipStorageName: string, unzipFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_unzipFile2( zipStorageName: string, zipFolderName: string, zipFileName: string, unzipStorageName: string, unzipFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    notify_fsyncFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_fsyncFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;
    notify_fsyncFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_fsyncFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_getFileInfo(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_getFileInfo(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;
    notify_getFileInfo2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_getFileInfo2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;


    notify_moveFile( srcFileFullName: string, dstFileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_moveFile( srcFileFullName: string, dstFileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any ;
    notify_moveFile2(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_moveFile2(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_uploadFile(srcFileFullName: string, remoteUrlName: string, remoteFileFullName : string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_uploadFile(srcFileFullName: string,  remoteUrlName: string, remoteFileFullName : string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any ;  
    notify_uploadFile2(srcStorageName: string, srcFolderName: string, srcFileName: string, remoteUrlName: string, remoteFolderName: string, remoteFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_uploadFile2( srcStorageName: string, srcFolderName: string, srcFileName: string, remoteUrlName: string, remoteFolderName: string, remoteFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;
       
    notify_zipFile( fullFileName: string, zipFullFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_zipFile( fullFileName: string, zipFullFileName: string, error: amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) : any ;
    notify_zipFile2(  storageName: string, folderName: string,  fileName: string, zipStorageName: string, zipFolderName: string, zipFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_zipFile2(  storageName: string, folderName: string,  fileName: string, zipStorageName: string, zipFolderName: string, zipFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any ;
  

    notify_moveFolder( srcFolderFullName: string, dstFolderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_moveFolder( srcFolderFullName: string, dstFolderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any ;
    notify_moveFolder2(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_moveFolder2(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_zipFolder( fullFolderName: string, zipFullFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_zipFolder( fullFolderName: string, zipFullFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any ;
    notify_zipFolder2(storageName: string, folderName: string,  zipStorageName: string, zipFolderName: string, zipFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_zipFolder2(storageName: string, folderName: string, zipStorageName: string, zipFolderName: string, zipFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any ;

    //----
    notify_computeFileSha2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_computeFileSha2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any ;

    notify_computeFileShaAndSaveShaFile2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_computeFileShaAndSaveShaFile2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any ;

  }
} 