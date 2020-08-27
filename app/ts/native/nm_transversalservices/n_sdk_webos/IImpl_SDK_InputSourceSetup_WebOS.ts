import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_InputSourceSetup");

import nmTransversalServices = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/N_SDK_WebOS");
import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import "./cordova/cordova.webos";
import "./cordova/storage";
import "./cordova/inputSource";

export module nm_transversalservices
{
  export class IImpl_SDK_InputSourceSetup_WebOS implements amGeneral.am_transversalservices.I_SDK_InputSourceSetup
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: nmTransversalServices.nm_transversalservices.N_SDK_WebOS;

    //----------- constructor 
    constructor(owner: nmTransversalServices.nm_transversalservices.N_SDK_WebOS)  
    {
      this._owner = owner;  
    }

    //--------------------------------------
    public readTextFile( fileFullName: string, error: amGeneralError.am_general.A_Error, 
                         context: amGeneralContext.am_general.A_Context, callback) 
    {
      var owner = this;
      var successCb = function (cbObject)
      {
        var data_text = cbObject.data;
        context.setResult(data_text);
        context.setError(error);
        console.log(context.getResult()); 
        if (callback != null)
         callback(context);
      }; 

      var failureCb = function(cbObject)
      {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText; 
        console.log( " Error Code [" + errorCode + "]: " + errorText); 
        if (error != null)
          error.setError(errorCode, errorText);
        context.setError(error);
        if (callback != null)
          callback(context);
      };

      var options = { 
      path: fileFullName, //"file://internal/text.txt",
      position : 0,
      encoding: 'utf8'
      }; 

      var storage = new Storage();
      storage.readFile(successCb, failureCb, options);
    } 

    //--------------------------
    public promise_readTextFile( fileFullName: string, error: amGeneralError.am_general.A_Error, 
                                 context: amGeneralContext.am_general.A_Context, callback)  // file content 
    {
       return new Promise(
         function (resolve, reject) 
         {       
           // This example will read file as text.
           var owner = this;
           var successCb = function (cbObject)
           {
             var data_text = cbObject.data;
             context.setResult(data_text);
             context.setError(error);
             console.log(context.getResult()); 
             if (callback != null)
               callback(context);
             resolve(context);
           }; 
     
           var failureCb = function(cbObject)
           {
             var errorCode = cbObject.errorCode;
             var errorText = cbObject.errorText; 
             console.log( " Error Code [" + errorCode + "]: " + errorText); 
             context.setError(error);
             if (context.getError() != null)
               context.getError().setError(errorCode, errorText);
             if (callback != null)
               callback(context);
             reject(context);
           };
     
           var options = { 
              path: fileFullName, //"file://internal/text.txt",
              position : 0,
              encoding: 'utf8'
           }; 
     
           var storage = new Storage();
           storage.readFile(successCb, failureCb, options);
         });  
    } 

    //-----------------------------
    public readTextFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this.readTextFile(storageName + folderName + fileName, error, context, callback);      
    }

    //---------------------
    public promise_readTextFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      return this.promise_readTextFile(storageName + folderName + fileName, error, context, callback);      
    }

    //--------------------------------------
    public writeTextFile( fileFullName: string, fileContent: string,
                          error: amGeneralError.am_general.A_Error, 
                          context: amGeneralContext.am_general.A_Context, callback) 
    {
      var successCb = function (cbObject){
        console.log( "Successfully writen " + cbObject.written + " bytes" ); 
        context.setError(error);
        if (callback != null)
          callback(context);
      }; 
    
      var failureCb = function(cbObject){ 
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText; 
        console.log( " Error Code [" + errorCode + "]: " + errorText); 
        context.setError(error);
        if (context.getError() != null)
          context.getError().setError(errorCode, errorText);
        if (callback != null)
          callback(context);
      };
    
      // write Text data, use utf-8 encoding, write all text.
      //var textData = "Hello SCAP!!!!!"; 
      var options = { 
          data: fileContent, //textData,
          path: fileFullName, //'file://internal/text.txt',
          positon : 0,
          flag :'w',
          offset:0,
          length : fileContent.length, //textData.length,
          encoding: 'utf8'
      }; 
    
      var storage = new Storage();
      storage.writeFile(successCb, failureCb, options);
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
    
    //------------------
    public getFileList( folderFullName: string,
                        error: amGeneralError.am_general.A_Error, 
                        context: amGeneralContext.am_general.A_Context, callback) 
    {
      // Callback for a successful execution.
      var successCb = function (cbObject){
        // Get the list of file info in given directory, as an array.
        var files = cbObject.files;
        for(var i = 0 ; i < files.length; ++i){
          var fileInfo = files[i];	
          // Name of this file.
          console.log("File Name: " + fileInfo.name);
        }
        context.setArrayResult(files);
        console.log( "Successfully obtain the file list from folder " + folderFullName ); 
        context.setError(error);
        if (callback != null)
          callback(context);    
        //callback(cbObject);	  	
      };
    
      // Callback for a failed execution.
      // Failure callback will be invoked with the error code and the error text.
      var failureCb = function(cbObject){
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        console.log( " Error Code [" + errorCode + "]: " + errorText); 
        context.setError(error);
        if (context.getError() != null)
          context.getError().setError(errorCode, errorText);
        if (callback != null)
          callback(context);
        
        //callback(cbObject);
      };
      
      // Create storage object and invoke the API..	
      var storage = new Storage();
      // The parameters.
      // directory : The URI for the directory where the files will be listed. 
      // It can be directory in the internal memory or in the attached usb storage device.
      //var options = { 
        //  path: folderFullName //'file://internal/list/me/',
        //}; 
    
      //storage.listFiles(successCb, failureCb, options);
      
      var options_usb = { 
          path: folderFullName //'file://usb:1/list/me/',
        }; 
    
      storage.listFiles(successCb, failureCb, options_usb);
    
      
    }


    //------------------
    public promise_getFileList( folderFullName: string,
                                error: amGeneralError.am_general.A_Error, 
                                context: amGeneralContext.am_general.A_Context, callback) 
    {
    }


    //--------------------------------------
    public removeFile( fileFullName: string,
                       error: amGeneralError.am_general.A_Error, 
                       context: amGeneralContext.am_general.A_Context, callback) 
    {
      // Callback for a successful execution.
      // This callback will be called without any parameter.	
      var successCb = function (){
        console.log( "Successfully remove the file " + fileFullName); 
        context.setError(error);
        if (callback != null)
          callback(context);    
      };
    
      // Callback for a failed execution.
      // Failure callback will be invoked with the error code and the error text.
      var failureCb = function(cbObject){
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        console.log( " Error Code [" + errorCode + "]: " + errorText); 
        context.setError(error);
        if (context.getError() != null)
          context.getError().setError(errorCode, errorText);
        if (callback != null)
          callback(context);
        //callback(cbObject);
      };
      
      // Create storage object and invoke the API.	
      var storage = new Storage();
      // The parameters.
      // file : The name of the file to be removed..
      var options_file = { 
        file: fileFullName //'file://internal/delete_me.txt',
      }; 
      storage.removeFile(successCb, failureCb, options_file);
      
      
      // The parameters.
      // file : The name of the file to be removed. A directory can be removed.
      //var options_dir = { 
        //file: 'file://internal/delete/this/dir',
        //recursive : true		
      //}; 
      //storage.removeFile(successCb, failureCb, options_dir);
      
      // The parameters.
      // file : The name of the file to be removed. A file in the usb can be removed.
      //var options_usb = { 
        //file: 'file://usb:1/delete/this/file.txt',
      //}; 
      //storage.removeFile(successCb, failureCb, options_usb);
      
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
      // Callback for a successful execution.
      var successCb = function (cbObject){
        console.log( "Directory"+  folderFullName + " created"); 
        context.setError(error);
        if (callback != null)
          callback(context);      
        //callback(cbObject);	  	
      };
    
      // Callback for a failed execution.
      // Failure callback will be invoked with the error code and the error text.
      var failureCb = function(cbObject){
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        console.log( " Error Code [" + errorCode + "]: " + errorText); 
        context.setError(error);
        if (context.getError() != null)
          context.getError().setError(errorCode, errorText);
        if (callback != null)
          callback(context);  
        //callback(cbObject);
      };
      var storage = new Storage();
    
      // parameters for mkdir options..
      // directory can be craeted in the internal memory or in the connected usb.
      //var mkdirOption = { 
          // path: "file://internal/create/this/directory"
      //}; 
      // Directory will be created recursively.
      //storage.mkdir(successCb, failureCb, mkdirOption);
      
      // parameters for mkdir options..
      // directory can be craeted in the internal memory or in the connected usb.
      var mkdirOption_usb = { 
          path: folderFullName //"file://usb:1/create/this/directory"
      }; 
      // Directory will be created recursively.
      storage.mkdir(successCb, failureCb, mkdirOption_usb);
    }
            
    //-------------------------------------------
    public promise_createFolder( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
            
    }
    
    //---------------------------------------
    public deleteFolder( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      // Callback for a successful execution.
      // This callback will be called without any parameter.	
      var successCb = function (){
        console.log( "Successfully remove the file " + folderFullName); 
        context.setError(error);
        if (callback != null)
          callback(context);    
        //callback("remove file success");	  	
      };
    
      // Callback for a failed execution.
      // Failure callback will be invoked with the error code and the error text.
      var failureCb = function(cbObject){
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        console.log( " Error Code [" + errorCode + "]: " + errorText); 
        context.setError(error);
        if (context.getError() != null)
          context.getError().setError(errorCode, errorText);
        if (callback != null)
          callback(context);
        //callback(cbObject);
      };
      
      // Create storage object and invoke the API.	
      var storage = new Storage();
      
      // The parameters.
      // file : The name of the folder to be removed. A directory can be removed.
      var options_dir = { 
        file: folderFullName, //'file://internal/delete/this/dir',
        recursive : true		
      }; 
      storage.removeFile(successCb, failureCb, options_dir);      
    }
    
    //-------------------------------------------
    public promise_deleteFolder( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
    
    }
    
    //-----------------------------------------------------------  
    public fileExists( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      // Succcess callback.
      var successCb = function (cbObject){
        //the exists property is a boolean value, which will be true if the file exists.
        //var exists = cbObject.exists;
        console.log( "The file exists: " + cbObject.exists); 
        context.setBoolResult(cbObject.exists);
        context.setError(error);
        if (callback != null)
          callback(context);
        
      }; 
    
      // Failure callback
      var failureCb = function(cbObject){ 
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText; 
        console.log( " Error Code [" + errorCode + "]: " + errorText); 
        context.setError(error);
        if (context.getError() != null)
          context.getError().setError(errorCode, errorText);
        if (callback != null)
          callback(context);
      };
    
      // Exists parameter. The path to the file or directory which will be checked for the existence.
      // path can be in the internal directory or in the connected usb storage device.
      var existsOption = { 
          path: fileFullName  //"file://internal/to/be/or/not/to/be"
      }; 
      var storage = new Storage();
      storage.exists(successCb, failureCb, existsOption);
      
      // Exists parameter. The path to the file or directory which will be checked for the existence.
      // path can be in the internal directory or in the connected usb storage device.
      //var existsOption_usb = { 
          //path: "file://usb:1/to/be/or/not/to/be"
      //}; 
      //storage.exists(successCb, failureCb, existsOption_usb);
      
    }

    //-----------------------------------------------------------  
    public promise_fileExists( fileFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
          
    }

    //-----------------------------------------------------------  
    public folderExists( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      // Succcess callback.
      var successCb = function (cbObject){
        //the exists property is a boolean value, which will be true if the file exists.
        //var exists = cbObject.exists;
        console.log( "The folder exists: " + cbObject.exists); 
        context.setBoolResult(cbObject.exists);
        context.setError(error);
        if (callback != null)
          callback(context);        
      }; 
    
      // Failure callback
      var failureCb = function(cbObject){ 
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText; 
        console.log( " Error Code [" + errorCode + "]: " + errorText); 
        context.setError(error);
        if (context.getError() != null)
          context.getError().setError(errorCode, errorText);
        if (callback != null)
          callback(context);
      };
    
      // Exists parameter. The path to the file or directory which will be checked for the existence.
      // path can be in the internal directory or in the connected usb storage device.
      var existsOption = { 
          path: folderFullName  //"file://internal/to/be/or/not/to/be" "file://usb:1/to/be/or/not/to/be"
      }; 
      var storage = new Storage();
      storage.exists(successCb, failureCb, existsOption);      
    }

    //-----------------------------------------------------------  
    public promise_folderExists( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
              
    }


    //--------------------------------------
    public copyFile( srcFileFullName: string, dstFileFullName: string,
                     error: amGeneralError.am_general.A_Error, 
                     context: amGeneralContext.am_general.A_Context, callback) 
    {
      var owner = this;
      var successCb = function ()
      {
        console.log("copy done");
        context.setBoolResult(true);
        context.setError(error);
        console.log(context.getBoolResult()); 
        if (callback != null)
          callback(context);
      }; 

      var failureCb = function(cbObject)
      {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText; 
        console.log( " Error Code [" + errorCode + "]: " + errorText); 
        if (error != null)
          error.setError(errorCode, errorText);
        context.setError(error);
        if (callback != null)
          callback(context);
      };
	    // copy file parameters.
	    // source : The file to copy from. This file can be a remote file, a local internal file, or a file in a USB memory stick.
	    // destination : This is where this file is copied to. Destination can be the internal memory or usb device.
	    var options = {
         source: srcFileFullName, //'file:///usb:1/resource file/tmp.jpg',
         destination : dstFileFullName//'file:///internal/image.jpg'
      };

      // Create storage object and invoke the API with parameters.	
      var storage = new Storage();
      storage.copyFile(successCb, failureCb, options);
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

    //--------------------------------------
    //      downloadFile - should be moved to web interface
    //--------------------------------------
    
    //--------------------------------------
    public downloadFile( remoteUrlName: string, dstFileFullName: string,
                         error: amGeneralError.am_general.A_Error, 
                         context: amGeneralContext.am_general.A_Context, callback) 
    {
      var owner = this;
      var successCb = function ()
      {
        console.log("copy done");
        context.setBoolResult(true);
        context.setError(error);
        console.log(context.getBoolResult()); 
        if (callback != null)
          callback(context);
      }; 

      var failureCb = function(cbObject)
      {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText; 
        console.log( " Error Code [" + errorCode + "]: " + errorText); 
        if (error != null)
          error.setError(errorCode, errorText);
        context.setError(error);
        if (callback != null)
          callback(context);
      };
	    // copy file parameters.
	    // source : The file to copy from. This file can be a remote file, a local internal file, or a file in a USB memory stick.
	    // destination : This is where this file is copied to. Destination can be the internal memory or usb device.
	    var options = {
         source: remoteUrlName, //'file:///usb:1/resource file/tmp.jpg',
         destination : dstFileFullName//'file:///internal/image.jpg'
      };

      // Create storage object and invoke the API with parameters.	
      var storage = new Storage();
      storage.copyFile(successCb, failureCb, options);
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
      var owner = this;
      // This API will unzip a ZIP file stored in the device.
    
      var successCb = function (){
        console.log("Unzip File done.");
        context.setBoolResult(true);
        context.setError(error);
        console.log(context.getBoolResult()); 
        if (callback != null)
          callback(context);
      }; 
    
      var failureCb = function(cbObject){ 
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText; 
        console.log( " Error Code [" + errorCode + "]: " + errorText); 
        console.log( " Error Code [" + errorCode + "]: " + errorText); 
        if (error != null)
          error.setError(errorCode, errorText);
        context.setError(error);
        if (callback != null)
          callback(context);
      };
    
      var options = { 
          zipPath: zipFullFileName, // 'file://internal/myFile.zip',
          targetPath: unzipFullPath, //'file://internal/unzip/to/here'  // Unziped contents of the zip file will be stored here.
      };
    
      var storage = new Storage();
      storage.unzipFile(successCb, failureCb, options);
    }



    //--------------------------------------
    public promise_unzipFile( zipFullFilename: string, unzipFullPath: string,
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
    public fsyncFileFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this.fsyncFile(storageName + folderName + fileName, error, context, callback);      
    }

    //--------------------------------------
    public promise_fsyncFileFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
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

  } //--- end class

}
