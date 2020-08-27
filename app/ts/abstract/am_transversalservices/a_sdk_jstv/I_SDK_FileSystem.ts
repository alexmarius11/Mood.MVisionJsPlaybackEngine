import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralShaProperties = require("../../../../../app/ts/abstract/am_general/a_shaproperties/A_ShaProperties");

export module am_transversalservices
{
  export interface I_SDK_FileSystem extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    readAndParseXMLFile2(storageName: string, folderName: string, fileName: string, 
                         urlStorageName: string, urlFolderName: string, urlFileName: string, 
                         error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    parseXMLString(xmlString: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

    getFileList( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;
    getFileList2 (storageName: string ,folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;
    promise_getFileList( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);

    getNbFiles2(storageName: string, folderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;

    readTextFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_readTextFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;
    readTextFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_readTextFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;


    writeTextFile(fileFullName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);
    promise_writeTextFile( fileFullName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);
    writeTextFile2(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);
    promise_writeTextFile2(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);


    removeFile( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;
    promise_removeFile( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;
    removeFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);

    appendTextToFile(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);

    copyFile( srcFileFullName: string, dstFileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;
    promise_copyFile( srcFileFullName: string, dstFileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;
    copyFile2(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_copyFile2(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;
    
    moveFile( srcFileFullName: string, dstFileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_moveFile( srcFileFullName: string, dstFileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any ;
    moveFile2(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_moveFile2(srcStorageName: string, srcFolderName: string, srcFileName: string, dstStorageName: string, dstFolderName: string, dstFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    downloadFile( remoteUrlName: string, dstFileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;
    promise_downloadFile( remoteUrlName: string, dstFileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)   
    downloadFile2( remoteUrlName: string, dstStorageName: string, dstFolderName: string, dstFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    promise_downloadFile2( remoteUrlName: string, dstStorageName: string, dstFolderName: string, dstFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    uploadFile(srcFileFullName: string, remoteUrlName: string, remoteFileFullName : string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_uploadFile(srcFileFullName: string,  remoteUrlName: string, remoteFileFullName : string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any ;  
    uploadFile2(srcStorageName: string, srcFolderName: string, srcFileName: string, remoteUrlName: string, remoteFolderName: string, remoteFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_uploadFile2( srcStorageName: string, srcFolderName: string, srcFileName: string, remoteUrlName: string, remoteFolderName: string, remoteFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;
    
    unzipFile( zipFullFileName: string, unzipFolderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    promise_unzipFile( zipFullFileName: string, unzipFolderFullName: string, error: amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) 
    unzipFile2( zipStorageName: string, zipFolderName: string, zipFileName: string, unzipStorageName: string, unzipFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    promise_unzipFile2( zipStorageName: string, zipFolderName: string, zipFileName: string,  unzipStorageName: string, unzipFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 

    zipFile( fullFileName: string, zipFullFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_zipFile( fullFileName: string, zipFullFileName: string, error: amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) : any ;
    zipFile2(  storageName: string, folderName: string,  fileName: string, zipStorageName: string, zipFolderName: string, zipFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_zipFile2(  storageName: string, folderName: string,  fileName: string, zipStorageName: string, zipFolderName: string, zipFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any ;
    
    fsyncFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_fsyncFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;
    fsyncFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_fsyncFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getFileInfo(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getFileInfo(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;
    getFileInfo2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getFileInfo2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;




    createFolder( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;
    promise_createFolder( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;
    createFolder2(storageName: string, folderfullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);

    deleteFolder( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;
    deleteFolder2(storageName: string, folderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);
    promise_deleteFolder( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;

    fileExists( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback); 
    fileExists2( storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback); 
    promise_fileExists( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback); 

    folderExists( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);
    promise_folderExists( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback); 
    
    copyFolder( srcFolderFullName: string, dstFolderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void;
    promise_copyFolder( srcFolderFullName: string, dstFolderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) ;
    copyFolder2(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_copyFolder2(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    moveFolder( srcFolderFullName: string, dstFolderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_moveFolder( srcFolderFullName: string, dstFolderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any ;
    moveFolder2(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_moveFolder2(srcStorageName: string, srcFolderName: string, dstStorageName: string, dstFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    zipFolder( fullFolderName: string, zipFullFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_zipFolder( fullFolderName: string, zipFullFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any ;
    zipFolder2(storageName: string, folderName: string,  zipStorageName: string, zipFolderName: string, zipFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_zipFolder2(storageName: string, folderName: string, zipStorageName: string, zipFolderName: string, zipFileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any ;
      
    //----
    computeFileSha2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_computeFileSha2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any ;

    computeFileShaAndSaveShaFile2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_computeFileShaAndSaveShaFile2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any ;

  }
} 