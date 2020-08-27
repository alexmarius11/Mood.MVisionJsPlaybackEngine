import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_FileSystem");

import rmTransversalServicesSDKJsTV = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/R_SDK_JsTV");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralShaProperties = require("../../../../../app/ts/abstract/am_general/a_shaproperties/A_ShaProperties");

declare var window : any;

export module rm_transversalservices
{
  export class IImpl_SDK_FileSystem_JsTV_R implements amGeneral.am_transversalservices.I_SDK_FileSystem
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: rmTransversalServicesSDKJsTV.rm_transversalservices.R_SDK_JsTV;

    //----------- constructor 
    constructor(owner: rmTransversalServicesSDKJsTV.rm_transversalservices.R_SDK_JsTV)  
    {
      this._owner = owner;  
    }

    //--------------
    readTextFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      return null;
    }

    //--------------
    promise_readTextFile(fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      return null;
    }

    //---------------------
    public readTextFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      //this.readTextFile(storageName + folderName + fileName, error, context, callback);            
      //-----------------
      // for test only
      //-----------------
      var strOpeningHours = "<\?xml version=\"1.0\" encoding=\"utf-8\"\?>" +
                                  "<!DOCTYPE OPENING_HOURS [" +
                                  "<!ELEMENT OPENING_HOURS (WORKDAY*)>" +
                                  "<!ELEMENT WORKDAY (OPEN, CLOSE)>" +
                                  "<!ELEMENT OPEN (DAY, TIME)>" +
                                  "<!ELEMENT CLOSE (DAY, TIME)>" +
                                  "<!ELEMENT DAY (#PCDATA)>" +
                                  "<!ELEMENT TIME (#PCDATA)>" +
                                  "]>" +
                                "<OPENING_HOURS>" +
                                "<WORKDAY>" +
                                  "<OPEN>" +
                                    "<DAY>SUN</DAY>" +
                                      "<TIME>00:01:00</TIME>" +
                                      "</OPEN>" +
                                    "<CLOSE>" +
                                    "<DAY>SUN</DAY>" +
                                      "<TIME>23:59:00</TIME>" +
                                      "</CLOSE>" +
                                    "</WORKDAY>" +
                                  "<WORKDAY>" +
                                  "<OPEN>" +
                                    "<DAY>MON</DAY>" +
                                      "<TIME>00:01:00</TIME>" +
                                      "</OPEN>" +
                                    "<CLOSE>" +
                                    "<DAY>MON</DAY>" +
                                      "<TIME>23:59:00</TIME>" +
                                      "</CLOSE>" +
                                    "</WORKDAY>" +
                                  "<WORKDAY>" +
                                  "<OPEN>" +
                                    "<DAY>TUE</DAY>" +
                                      "<TIME>00:01:00</TIME>" +
                                      "</OPEN>" +
                                    "<CLOSE>" +
                                    "<DAY>TUE</DAY>" +
                                      "<TIME>23:59:00</TIME>" +
                                      "</CLOSE>" +
                                    "</WORKDAY>" +
                                  "<WORKDAY>" +
                                  "<OPEN>" +
                                    "<DAY>WED</DAY>" +
                                      "<TIME>00:01:00</TIME>" +
                                      "</OPEN>" +
                                    "<CLOSE>" +
                                    "<DAY>WED</DAY>" +
                                      "<TIME>23:59:00</TIME>" +
                                      "</CLOSE>" +
                                    "</WORKDAY>" +
                                  "<WORKDAY>" +
                                  "<OPEN>" +
                                    "<DAY>THU</DAY>" +
                                      "<TIME>00:01:00</TIME>" +
                                      "</OPEN>" +
                                    "<CLOSE>" +
                                    "<DAY>THU</DAY>" +
                                      "<TIME>23:59:00</TIME>" +
                                      "</CLOSE>" +
                                    "</WORKDAY>" +
                                  "<WORKDAY>" +
                                  "<OPEN>" +
                                    "<DAY>FRI</DAY>" +
                                      "<TIME>00:01:00</TIME>" +
                                      "</OPEN>" +
                                    "<CLOSE>" +
                                    "<DAY>FRI</DAY>" +
                                      "<TIME>23:59:00</TIME>" +
                                    "</CLOSE>" +
                                  "</WORKDAY>" +
                                  "<WORKDAY>" +
                                    "<OPEN>" +
                                      "<DAY>SAT</DAY>" +
                                      "<TIME>00:01:00</TIME>" +
                                      "</OPEN>" +
                                    "<CLOSE>" +
                                      "<DAY>SAT</DAY>" +
                                      "<TIME>23:59:00</TIME>" +
                                      "</CLOSE>" +
                                    "</WORKDAY>" +
                                  "</OPENING_HOURS>" ;

      var strHardwareSettings = "<\?xml version=\"1.0\" encoding=\"utf-8\"\?>" +
                                    "<!DOCTYPE HARDWARE_SETTINGS[" +
                                    "<!ELEMENT HARDWARE_SETTINGS (ENVIRONMENT, SERIAL_NUMBER, WINDOWS_ACCOUNTS)>" +
                                    "<!ELEMENT ENVIRONMENT (ENV_NAME, EARLY_ADOPTER)>" +
                                    "<!ELEMENT WINDOWS_ACCOUNTS (ACCOUNT+)>" +
                                    "<!ELEMENT ACCOUNT (ACCOUNT_ID, NAME, PWD)>" +
                                    "<!ELEMENT ENV_NAME (#PCDATA)>" +
                                    "<!ELEMENT EARLY_ADOPTER (#PCDATA)>" +
                                    "<!ELEMENT SERIAL_NUMBER (#PCDATA)>" +
                                    "<!ELEMENT ACCOUNT_ID (#PCDATA)>" +
                                    "<!ELEMENT NAME (#PCDATA)>" +
                                    "<!ELEMENT PWD (#PCDATA)>" +
                                    "]>" +
                                    "<HARDWARE_SETTINGS>" +
                                    "<ENVIRONMENT>" +
                                    "<ENV_NAME>MVP425_WES7</ENV_NAME>" +
                                    "<EARLY_ADOPTER>0</EARLY_ADOPTER>" +
                                    "</ENVIRONMENT>" +
                                    "<SERIAL_NUMBER>PC100001</SERIAL_NUMBER>" +
                                    "<WINDOWS_ACCOUNTS>" +
                                    "<ACCOUNT>" +
                                    "<ACCOUNT_ID>1</ACCOUNT_ID>" +
                                    "<NAME>stream01</NAME>" +
                                    "<PWD>retr9xEt</PWD>" +
                                    "</ACCOUNT>" +
                                    "</WINDOWS_ACCOUNTS>" +
                                    "</HARDWARE_SETTINGS>";
      //strHardwareSettings = "<root>" + strHardwareSettings + "</root>";
      if (fileName == "hardware_settings.xml")
        context.setResult(strHardwareSettings);
      else if (fileName == "opening_hour_settings.xml")
        context.setResult(strHardwareSettings);

      console.log( "Successfully read text file"); 
      context.setError(error);
      if (callback != null)
        callback(context);      
                          
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
      return this.writeTextFile(storageName + folderName + fileName, fileContent, error, context, callback);      
    }

    //---------------------
    public promise_writeTextFile2(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      return this.promise_writeTextFile(storageName + folderName + fileName, fileContent, error, context, callback);      
    }

    //=============
    // append file
    //=============
    //--------------------------------------------------
    public appendTextToFile(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
    }
    
    
    //==============
    //
    //================
    //------------------
    public getFileList( folderFullName: string,
                        error: amGeneralError.am_general.A_Error, 
                        context: amGeneralContext.am_general.A_Context, callback) 
    {
    }

    //------------------
    public promise_getFileList( folderFullName: string,
                                error: amGeneralError.am_general.A_Error, 
                                context: amGeneralContext.am_general.A_Context, callback) 
    {
    }

    //--------------------
    public removeFile( fileFullName: string, 
                       error: amGeneralError.am_general.A_Error, 
                       context: amGeneralContext.am_general.A_Context, callback) 
    {
    }

    //--------------------------------------
    public promise_removeFile( fileFullName: string, 
                               error: amGeneralError.am_general.A_Error, 
                               context: amGeneralContext.am_general.A_Context, callback) 
    {
    }

    //---------------------------------------
    public createFolder( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
            
    }
            
    //-------------------------------------------
    public promise_createFolder( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
            
    }
    
    //---------------------------------------
    public deleteFolder( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
    
    }
    
    //-------------------------------------------
    public promise_deleteFolder( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
    
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
      this.copyFile(srcStorageName + srcFolderName + srcFileName, dstStorageName + dstFolderName + dstFileName, error, context, callback);      
    }

    //------------------------------------
    public promise_copyFile2( srcStorageName: string, srcFolderName: string, srcFileName: string, 
                              dstStorageName: string, dstFolderName: string, dstFileName: string, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      return this.promise_copyFile(srcStorageName + srcFolderName + srcFileName, dstStorageName + dstFolderName + dstFileName, error, context, callback);      
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
      this.downloadFile(remoteUrlName, dstStorageName + dstFolderName + dstFileName, error, context, callback);      
    }

    //------------------------------------
    public promise_downloadFile2( remoteUrlName: string, 
                                  dstStorageName: string, dstFolderName: string, dstFileName: string, 
           error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      return this.promise_downloadFile(remoteUrlName, dstStorageName + dstFolderName + dstFileName, error, context, callback);      
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
      this.unzipFile(zipStorageName + zipFolderName + zipFileName, unzipStorageName + unzipFolderName, error, context, callback);      
    }

    //------------------------------------
    public promise_unzipFile2( zipStorageName: string, zipFolderName: string, zipFileName: string, 
                  unzipStorageName: string, unzipFolderName: string,
                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this.promise_unzipFile(zipStorageName + zipFolderName + zipFileName, unzipStorageName + unzipFolderName, error, context, callback);      
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
      this.fsyncFile(storageName + folderName + fileName, error, context, callback);      
    }

    //--------------------------------------
    public promise_fsyncFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      return this.promise_fsyncFile(storageName + folderName + fileName, error, context, callback);      
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
      this.getFileInfo(storageName + folderName + fileName, error, context, callback);      
    }

    //--------------------------------------
    public promise_getFileInfo2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      return this.promise_getFileInfo(storageName + folderName + fileName, error, context, callback);      
    }

        //-------------- 
    // temporary - will be moved to the write place
    //--------------

    public getFileList2 (storageName: string ,folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      this.getFileList(storageName+folderFullName, error, context, callback) ;
    }
    
    //--------------------------------
    public getNbFiles2(storageName: string, folderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {

    }
    
    public removeFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      return this.removeFile(storageName+folderName+fileName, error, context, callback);
    }

    public createFolder2(storageName: string, folderfullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      return this.createFolder(storageName+folderfullName, error, context, callback);
    }

    public deleteFolder2(storageName: string, folderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      return this.deleteFolder(storageName+folderName, error, context, callback)
    }


    public fileExists2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      return this.fileExists( storageName+folderName+fileName, error, context, callback); 
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

    }

    //-----------------------
    public promise_computeFileSha2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any 
    {

    }

    //--------------------------------
    public computeFileShaAndSaveShaFile2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

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
      var self = this;
      var callbackReadTextFile2 = function callbackReadTextFile(ctx)
      {
        //--------- if is error - return error
        if (ctx.isError())
        {
          context.setObjectResult(null);
          if (callback != null)
            callback(context);  
          return;  
        }

        //--------- parse the loaded xmlString
        var callbackConvertXMLStringToJsonObject = function callbackConvertXMLStringToJsonObject(ctx)
        {
          if (ctx.isError())
          {
            context.setObjectResult(null);
            if (callback != null)
              callback(context);  
            return;  
          }  
          if (callback != null)
            callback(context);  
        }
        var xmlString = ctx.getResult();

        //return callbackConvertXMLStringToJsonObject(ctx); //keep the xml - dont convert to json
        self.convertXMLStringToJsonObject(xmlString, error, ctx, callbackConvertXMLStringToJsonObject) ; 
      }

      self.readTextFile2(storageName, folderName, fileName, error, context,  callbackReadTextFile2);
      //if ((urlStorageName === null) || (urlStorageName == ""))
        //self.readTextFile2(storageName, folderName, fileName, error, context,  callbackReadTextFile2);
      //else  
        //self._owner._aUtilsService._iUtilsFiles.readFileFromUrl(storageName, folderName, fileName,
          //                                                      urlStorageName, urlFolderName, urlFileName,
            //                                                    error, context,  callbackReadTextFile2);
    }

    //--------------------------
    public readAndParseXMLFile2_prev(storageName: string, folderName: string, fileName: string, 
                                     urlStorageName: string, urlFolderName: string, urlFileName: string, 
                                     error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var self = this;
      var callbackReadTextFile2 = function callbackReadTextFile(ctx)
      {
        //--------- if is error - return error
        if (ctx.isError())
        {
          context.setObjectResult(null);
          if (callback != null)
            callback(context);  
          return;  
        }

        //--------- parse the loaded xmlString
        var callbackConvertXMLStringToJsonObject = function callbackConvertXMLStringToJsonObject(ctx)
        {
          if (ctx.isError())
          {
            context.setObjectResult(null);
            if (callback != null)
              callback(context);  
            return;  
          }  
          if (callback != null)
            callback(context);  
        }
        var xmlString = ctx.getResult();
        self.convertXMLStringToJsonObject(xmlString, error, ctx, callbackConvertXMLStringToJsonObject) ; 
      }

      if ((urlStorageName === null) || (urlStorageName == ""))
        self.readTextFile2(storageName, folderName, fileName, error, context,  callbackReadTextFile2);
      else  
        self._owner._aUtilsService._iUtilsFiles.readFileFromUrl(storageName, folderName, fileName,
                                                                urlStorageName, urlFolderName, urlFileName,
                                                                error, context,  callbackReadTextFile2);
    }


    //--------------------------
    public convertXMLStringToJsonObject(xmlString: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var owner = this._owner;
      var jsn = null;
      var callbackParseXML = function callbackParseXML(ctx)
      {
        if (ctx.isError())
        {
          console.log( 'Error converting xml to jsonxml ' + xmlString ); 
          context.setError(error);
          context.setObjectResult(null);
          if (context.getError() != null)
            context.getError().setError(7011, 'Error converting xml to jsonxml ' + xmlString );
          if (callback != null)
            callback(context);  
          return;  
        }
        var xmlObject = ctx.getObjectResult();  
        try{
          jsn = owner._aUtilsService._iUtilsXMLJson.xmlDocToJSON(xmlObject);
          ctx.setObjectResult(jsn);
        }catch(e){
          jsn = null;
          console.log( 'Error converting xml to jsonxml ' + xmlString ); 
          context.setError(error);
          context.setObjectResult(null);
          if (context.getError() != null)
            context.getError().setError(7012, 'Catch error converting xml to jsonxml ' + xmlString );
          if (callback != null)
            callback(context);  
          return;  
        }
        xmlObject = null;
        console.log(JSON.stringify(jsn));
        context.setObjectResult(jsn);
        console.log( "Successfully convert xml object to jsonxml"); 
        context.setError(error);
        if (callback != null)
          callback(context);     
        return ;

      }
      this.parseXMLString(xmlString, error, context, callbackParseXML); 
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
        if (xmlError.length > 0)
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
      }else if (typeof window.ActiveXObject != "undefined") {
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