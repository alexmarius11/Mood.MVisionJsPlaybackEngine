import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_FileSystem");

import nmTransversalServices = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/N_SDK_WebOS");
import amGeneralError    = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralContext  = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

//import rmAsmCrypto = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/asmcrypto/asmcryptoall");
import rmAsmCrypto = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/asmcryptoes5/entry-export_all");

import amGeneralShaProperties = require("../../../../../app/ts/abstract/am_general/a_shaproperties/A_ShaProperties");

import rmTransversalServicesFileSystemJsTV       = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_FileSystem_JsTV_R");

import "./cordova/cordova.webos";
import "./cordova/storage";
//import { Z_ASCII } from "zlib";


export module nm_transversalservices
{
  export class IImpl_SDK_FileSystem_WebOS extends rmTransversalServicesFileSystemJsTV.rm_transversalservices.IImpl_SDK_FileSystem_JsTV_R
                                          implements amGeneral.am_transversalservices.I_SDK_FileSystem
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: nmTransversalServices.nm_transversalservices.N_SDK_WebOS;

    //----------- constructor 
    constructor(owner: nmTransversalServices.nm_transversalservices.N_SDK_WebOS)  
    {
      super(owner);
      this._owner = owner;  
    }

    //======================================
    // folder get file list functions
    //======================================

    //------------------
    /*
    public getFileList4( folderFullName: string,
      error: amGeneralError.am_general.A_Error, 
      context: amGeneralContext.am_general.A_Context, callback) 
    {
      // Callback for a successful execution.
      var successCb = function (cbObject){
        // Get the list of file info in given directory, as an array.
        var files = cbObject.files;
        document.getElementById("testreadfile").innerHTML += "<h3> Folder: " + files.length + "</h3>";
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
    }*/


    //------------------
    public getFileList( folderFullName: string,
                        error: amGeneralError.am_general.A_Error, 
                        context: amGeneralContext.am_general.A_Context, callback) 
    {
      // Callback for a successful execution.
      var owner = this._owner;
      var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);

      var successCb = function (cbObject){
        // Get the list of file info in given directory, as an array.
        var files = cbObject.files;
        var aFileInfo:amGeneralFileInfo.am_general.A_FileInfo = null; 
        var fileInfoList = new Array<amGeneralFileInfo.am_general.A_FileInfo>();
        //document.getElementById("testreadfile").innerHTML += "<p>" +  files.length + "</p>";
        console.log( files.length); 
        for(var i = 0 ; i < files.length; ++i){
          var fileInfo = files[i];	
          // Name of this file.
          console.log(JSON.stringify(fileInfo));
          //document.getElementById("testreadfile").innerHTML += "<p>" + fileInfo.name + "</p>";
          aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
          aFileInfo.setName(fileInfo.name);
          aFileInfo.setStorage("");
          aFileInfo.setPath(folderFullName);
          aFileInfo.setType(fileInfo.type);
          aFileInfo.setSize(fileInfo.size);
          fileInfoList.push(aFileInfo);
        }
        //context.setArrayResult(files);
        context.setArrayResult(fileInfoList);
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
        document.getElementById("testreadfile").innerHTML +=  " Error Code [" + errorCode + "]: " + errorText;
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

    //-----------------------------------
    public getFileList2 (storageName: string, folderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      //this.getFileList(storageName+folderFullName, error, context, callback) ;
      // Callback for a successful execution.
      var owner = this._owner;
      var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      aFileInfo.setStorage(storageName);
      aFileInfo.setPath(folderName);
      aFileInfo.setName("");
      aFileInfo.setType("folder");
      context.setObjectResult(aFileInfo);      

      var successCb = function (cbObject){
        // Get the list of file info in given directory, as an array.
        var files = cbObject.files;
        var aFileInfo:amGeneralFileInfo.am_general.A_FileInfo = null; 
        var fileInfoList = new Array<amGeneralFileInfo.am_general.A_FileInfo>();
        //document.getElementById("testreadfile").innerHTML += "<p>" +  files.length + "</p>";
        console.log( files.length); 
        for(var i = 0 ; i < files.length; ++i){
          var fileInfo = files[i];	
          // Name of this file.
          console.log(JSON.stringify(fileInfo));
          //document.getElementById("testreadfile").innerHTML += "<p>" + fileInfo.name + "</p>";
          aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
          aFileInfo.setName(fileInfo.name);
          aFileInfo.setStorage(storageName);
          aFileInfo.setPath(folderName);
          aFileInfo.setType(fileInfo.type);
          aFileInfo.setSize(fileInfo.size);
          fileInfoList.push(aFileInfo);
        }
        //context.setArrayResult(files);
        context.setArrayResult(fileInfoList);
        console.log( "Successfully obtain the file list from folder " + storageName + folderName ); 
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
        document.getElementById("testreadfile").innerHTML +=  " Error Code [" + errorCode + "]: " + errorText;
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
          path: storageName + folderName //'file://usb:1/list/me/',
        }; 
    
      storage.listFiles(successCb, failureCb, options_usb);
      
    }


    //-----------------------------------
    public getNbFiles2(storageName: string, folderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      //this.getFileList(storageName+folderFullName, error, context, callback) ;
      // Callback for a successful execution.
      var owner = this._owner;
      var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      aFileInfo.setStorage(storageName);
      aFileInfo.setPath(folderName);
      aFileInfo.setName("");
      aFileInfo.setType("folder");
      context.setObjectResult(aFileInfo);      

      var successCb = function (cbObject){
        // Get the list of file info in given directory, as an array.
        var files = cbObject.files;
        //document.getElementById("testreadfile").innerHTML += "<p>" +  files.length + "</p>";
        console.log( files.length); 
        var nbFiles = 0;
        for(var i = 0 ; i < files.length; ++i)
        {
          var fileInfo = files[i];	
          if (fileInfo.type != "folder")
            nbFiles++;
          // Name of this file.
          //console.log(JSON.stringify(fileInfo));
          //document.getElementById("testreadfile").innerHTML += "<p>" + fileInfo.name + "</p>";
          //aFileInfo.setType(fileInfo.type);
        }

        context.setIntResult(nbFiles);
        console.log( "Successfully obtain the file number [" + nbFiles + "] from folder " + storageName + folderName ); 
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
        document.getElementById("testreadfile").innerHTML +=  " Error Code [" + errorCode + "]: " + errorText;
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
          path: storageName + folderName //'file://usb:1/list/me/',
        }; 
    
      storage.listFiles(successCb, failureCb, options_usb);
    } 
    //=================================
    //  File Functions 
    //=================================

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
    public readTextFile2_crt(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      //this.readTextFile(storageName + folderName + fileName, error, context, callback);      
      var owner = this._owner;
      var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      var fileFullName = storageName + folderName + fileName;
      aFileInfo.setStorage(storageName);
      aFileInfo.setPath(folderName);
      aFileInfo.setName(fileName);
      aFileInfo.setType("file");
      context.setObjectResult(aFileInfo);
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


    //===========================
    // read file 2
    //===========================

    //----------------------------------------
    public readFileByChunks(  storage,
                              chunkCrtNo: number,     chunkTotalNb: number, 
                              fileCrtOffset: number, chunkFinalRest: number, 
                              buffSize : number,
                              chunkSize: number,      fileSize: number,  fileFullName, context, error, callback)
    {

      //-------------
      // read file as binary bu chunks.
      var self = this;
	    var successCb = function (cbObject){
        // If file is read as binary, array of uint8 will be returned. 
        //document.getElementById("sdk.message").innerHTML = "<p>" + "webos:compute-filesha2 trace - start computation chunkCrtNo: " + chunkCrtNo + "</p>"; 
        //document.getElementById("sdk.message").innerHTML = "<p>" + "webos:compute-filesha2 trace - start computation chunkCrtOffset: " + fileCrtOffset+ "</p>"; 
        //var binary_data = cbObject.data;	// This will be an ArrayBuffer
        //var raw = new Uint8Array(binary_data);//rmAsmCrypto.string_to_bytes(fs.readBytes(CHUNK_SIZE));//new Uint8Array(fs.readBytes(CHUNK_SIZE));
        var data_text = cbObject.data;
        context.setResult(context.getResult() + data_text);

        chunkCrtNo++;
        //---------- end computation
        if ( (chunkCrtNo == chunkTotalNb) || 
             ((chunkCrtNo + 1 == chunkTotalNb) && (chunkFinalRest == 0))
            )
        {
          
          //var res = rmAsmCrypto.bytes_to_hex(hash);
          //context.setObjectResult(res); 
          //context.setResult(res); 
          //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:compute-filesha2 trace - successfully end: " +  "</p>"; 
          //------
          console.log( "webos:read-textfile2 ok: Successfully read the file " + fileFullName ); 
          //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:read-textfile2 ok: Successfully read the file " + fileFullName  + "</p>";
          context.setError(error);
          if (callback != null)
            callback(context);    
          return;  
        }
        //---------- call last computation
        if (chunkCrtNo + 1 == chunkTotalNb)
        {
          //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:read-textfile2 trace - call rest computation: " + chunkCrtNo + "</p>"; 
          self.readFileByChunks(  storage,
                                  chunkCrtNo,  chunkTotalNb, 
                                  fileCrtOffset+chunkSize, chunkFinalRest, chunkFinalRest,
                                  chunkSize,  fileSize,  fileFullName, context, error, callback);
        }else{
          //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:read-textfile2 trace - call next computation: " + chunkCrtNo + "</p>"; 
          self.readFileByChunks( storage,
                                 chunkCrtNo,  chunkTotalNb, 
                                 fileCrtOffset+chunkSize, chunkFinalRest, 
                                 chunkSize,
                                 chunkSize,  fileSize,  fileFullName, context, error, callback);
        }
        
      }; 
      
      //---------------------------
      var failureCb = function(cbObject)
      { 
	      var errorCode = cbObject.errorCode;
		    var errorText = cbObject.errorText; 
        console.log( "webos:read-textfile2 ok: error [3081]: during sha computation of the file " + fileFullName  + " : error [" + errorCode + " - " + errorText + "]"); 
        context.setError(error);
        //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:read-textfile2 : error [3081]: during sha computation of the file " + fileFullName  + " : error ["  + errorCode + " - " + errorText + "]" + "</p>"; 
        if (context.getError() != null)
          context.getError().setError(3081, "webos:read-textfile2 ok: error [3081]: during sha computation of the file " + fileFullName  + " : error [" + errorCode + " - " + errorText + "]");
        if (callback != null)
          callback(context);
      };
      
      //---------------
      //  offset: 0,
      //          data: buffer,        //array,//array,//buffer,//textData,
      //         mode: "position",   //"append",//"position",//
      //         flag :'r',
      //offset: 0,
      // Read file from position, read as binary
      var options = { 
        path: fileFullName, //'file://internal/data.dat',//fileName,
        position : fileCrtOffset,
        length : buffSize,//array.length,//bufLength,
        encoding: 'utf8', //'binary', //'base64'//'base64'//'binary'//'utf8'
      }; 

      //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:compute-filesha2 trace - start read file : " + fileFullName + "</p>"; 
	    storage.readFile(successCb, failureCb, options);

    }


    //--------------------------------
    public readTextFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      //this.readTextFile(storageName + folderName + fileName, error, context, callback);      
      var owner = this._owner;
      var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      var fileFullName = storageName + folderName + fileName;
      aFileInfo.setStorage(storageName);
      aFileInfo.setPath(folderName);
      aFileInfo.setName(fileName);
      aFileInfo.setType("file");
      context.setObjectResult(aFileInfo);

      //document.getElementById("sdk.message").innerHTML += "<p>computeFileSha2</p>";
      var fileFullName = storageName + folderName + fileName;
  
      //----
      var owner = this._owner;
      var self = this;
      //--------------------------------------------------
      var callback_fileStatObtained = function (cbObject){
        //console.log( "Show File Stat: " ); 
        //console.log( "File Type: " + cbObject.stat.type );
        //console.log( "File size (bytes): " + cbObject.stat.size );
        //console.log( "Last Accessed: " + cbObject.stat.atime );
        //console.log( "Last Modified: " + cbObject.stat.mtime );
        //console.log( "Created: " + cbObject.stat.ctime );
        try {
        
          //var ds = moment(new Date());
          var fileSize = cbObject.size;
          //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:read-textfile2 trace - fileSize: " + JSON.stringify(cbObject) + " </p>"; 
          //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:read-textfile2 trace - fileSize: " + fileSize + " </p>"; 
                    
          var CHUNK_SIZE = 1024 * 10 ;//128 * 512;
          //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:read-textfile2 trace - : CHUNK_SIZE: " + JSON.stringify(CHUNK_SIZE)  + " </p>"; 

          var chunkTotalNb = Math.floor(fileSize / CHUNK_SIZE);
          //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:read-textfile2 trace - : chunkTotalNb: " + JSON.stringify(chunkTotalNb)  + " </p>"; 

          var chunkFinalRest = fileSize % CHUNK_SIZE;
          //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:read-textfile2 trace - : chunkFinalRest: " + JSON.stringify(chunkFinalRest)  + " </p>"; 

          chunkTotalNb++;
          //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:read-textfile2 trace - : chunkTotalNb++: " + JSON.stringify(chunkTotalNb)  + " </p>"; 

          var chunckCrtNo = 0;
          var fileCrtOffset = 0;
          
          context.setResult("");
          self.readFileByChunks( 
                                storage,//storage,
                                chunckCrtNo,//chunkCrtNo: number,     
                                chunkTotalNb,//chunkTotalNb: number, 
                                fileCrtOffset, //fileCrtOffset: number, 
                                chunkFinalRest,//chunkFinalRest: number,                                 
                                CHUNK_SIZE,//buffSize,
                                CHUNK_SIZE,//chunkSize: number,      
                                fileSize,//fileSize: number,  
                                fileFullName,//fileFullName, 
                                context,//context, 
                                error,//error, 
                                callback); //callback)
                                
  
        //------- error 
        
        }catch (e){
          console.log( "webos:read-textfile2 ok: error [3085]: during sha computation of the file " + fileFullName  + " : error [" + JSON.stringify(e) + "]"); 
          context.setError(error);
          //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:read-textfile2 ok: error [3085]: during sha computation of the file " + fileFullName  + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
          if (context.getError() != null)
            context.getError().setError(3085, "webos:read-textfile2 ok: error [3085]: during sha computation of the file " + fileFullName  + " : error [" + JSON.stringify(e) + "]");
          if (callback != null)
            callback(context);
        }

      }; 
    
      var callback_fileStatError = function(cbObject){ 
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText; 
        console.log( "webos:read-textfile2 error [3086]: Cannot read file stat " + fileFullName + " Error Code [" + errorCode + "]: " + errorText); 
        context.setError(error);
        //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:read-textfile2 error [6086]: Cannot read file stat " + fileFullName + " Error Code [" + errorCode + "]: " + errorText + "</p>"; 
        if (context.getError() != null)
          context.getError().setError(3086, "webos:read-textfile2 error [3086]: Cannot read file stat " + fileFullName + " Error Code [" + errorCode + "]: " + errorText);
        if (callback != null)
          callback(context);
      };
    
      var options = { 
          path: fileFullName, //'file://internal/myFile.txt',
      }; 

      //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:read-textfile2 trace - start " + "</p>"; 
      // obtain the file stat
      var storage = new Storage();
      storage.statFile(callback_fileStatObtained, callback_fileStatError, options);
    }

    //---------------------
    public promise_readTextFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
    }


    //------------------------
    //  Write text file 
    //------------------------

    //--------------------------------------
    public writeTextFile( fileFullName: string, fileContent: string,
                          error: amGeneralError.am_general.A_Error, 
                          context: amGeneralContext.am_general.A_Context, callback) 
    {
      var aFileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      aFileInfo.setStorage("");
      aFileInfo.setPath("");
      aFileInfo.setName(fileFullName);
      aFileInfo.setType("file");
      context.setObjectResult(aFileInfo);
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
    public writeTextFile2_crt(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      //this.writeTextFile(storageName + folderName + fileName, fileContent, error, context, callback);      
      var fileFullName = storageName + folderName + fileName;
      var owner = this._owner;
      var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      aFileInfo.setStorage(storageName);
      aFileInfo.setPath(folderName);
      aFileInfo.setName(fileName);
      aFileInfo.setType("file");
      context.setObjectResult(aFileInfo);      
      var successCb = function (cbObject){
        console.log( "Successfully writen " + cbObject.written + " bytes" ); 
        context.setError(error);
        context.setBoolResult(true);
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
      if (fileContent == "")
        fileContent = " ";
      var options = { 
        data: fileContent, //textData,
        path: fileFullName, //'file://internal/text.txt',
        position : 0,
        flag :'w',
        offset:0,
        length : fileContent.length, //textData.length,
        encoding: 'utf8'
      }; 

      var storage = new Storage();
      storage.writeFile(successCb, failureCb, options);
    } 

    //---------------------
    public promise_writeTextFile2(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      
    }
    

    //===========================
    // write file 2
    //===========================

    //----------------------------------------
    public writeFileByChunks( storage, fileContent : string,
                              chunkCrtNo: number,    chunkTotalNb: number, 
                              fileCrtOffset: number, chunkFinalRest: number, 
                              buffSize : number,
                              chunkSize: number,     fileSize: number,  fileFullName, context, error, callback)
    {

        //-------------
        // read file as binary bu chunks.
        var self = this;
        var successCb = function (cbObject){
        // If file is read as binary, array of uint8 will be returned. 
        //document.getElementById("sdk.message").innerHTML = "<p>" + "webos:compute-filesha2 trace - start computation chunkCrtNo: " + chunkCrtNo + "</p>"; 
        //document.getElementById("sdk.message").innerHTML = "<p>" + "webos:compute-filesha2 trace - start computation chunkCrtOffset: " + fileCrtOffset+ "</p>"; 
        //var binary_data = cbObject.data;	// This will be an ArrayBuffer
        //var raw = new Uint8Array(binary_data);//rmAsmCrypto.string_to_bytes(fs.readBytes(CHUNK_SIZE));//new Uint8Array(fs.readBytes(CHUNK_SIZE));

        chunkCrtNo++;
        //---------- end computation
        if ( (chunkCrtNo == chunkTotalNb) || 
              ((chunkCrtNo + 1 == chunkTotalNb) && (chunkFinalRest == 0))
            )
        {
          
          //var res = rmAsmCrypto.bytes_to_hex(hash);
          //context.setObjectResult(res); 
          //context.setResult(res); 
          //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:compute-filesha2 trace - successfully end: " +  "</p>"; 
          //------
          console.log( "webos:read-textfile2 ok: Successfully write the file " + fileFullName ); 
          //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:read-textfile2 ok: Successfully write the file " + fileFullName + "</p>";
          context.setError(error);
          if (callback != null)
            callback(context);    
          return;  
        }
        //---------- call last computation
        if (chunkCrtNo + 1 == chunkTotalNb)
        {
          //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:write-textfile2 trace - call rest computation: " + chunkCrtNo + "</p>"; 
          self.writeFileByChunks(  storage,    fileContent,
                                  chunkCrtNo,  chunkTotalNb, 
                                  fileCrtOffset+chunkSize, chunkFinalRest, chunkFinalRest,
                                  chunkSize,  fileSize,  fileFullName, context, error, callback);
        }else{
          //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:write-textfile2 trace - call next computation: " + chunkCrtNo + "</p>"; 
          self.writeFileByChunks( storage,    fileContent,
                                  chunkCrtNo,  chunkTotalNb, 
                                  fileCrtOffset+chunkSize, chunkFinalRest, 
                                  chunkSize,
                                  chunkSize,  fileSize,  fileFullName, context, error, callback);
        }
        
      }; 
      
      //---------------------------
      var failureCb = function(cbObject)
      { 
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText; 
        console.log( "webos:write-textfile2 ok: error [3081]: during write text file " + fileFullName  + " : error [" + errorCode + " - " + errorText + "]"); 
        context.setError(error);
        //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:write-textfile2 ok: error [3081]: during write text file " + fileFullName  + " : error [" + errorCode + " - " + errorText + "]" + "</p>"; 
        if (context.getError() != null)
          context.getError().setError(3081, "webos:write-textfile2 ok: error [3081]: during write text file " + fileFullName  + " : error [" + errorCode + " - " + errorText + "]");
        if (callback != null)
          callback(context);
      };
      
      
      //---------------
      //  offset: 0,
      //          data: buffer,        //array,//array,//buffer,//textData,
      //         mode: "position",   //"append",//"position",//
      //         flag :'r',
      //offset: 0,
      // Write file buffer in append from position
      var buffToWrite = "";
      var buffSize = 0;
      var writeMode = "append";
      if (chunkCrtNo == 0)
        writeMode = "truncate";
        
      if (chunkCrtNo + 1 == chunkTotalNb)
      {
        buffSize = chunkFinalRest;
        buffToWrite = fileContent.substring(fileCrtOffset, fileCrtOffset + chunkFinalRest);
      }else{
        buffSize = chunkSize;
        buffToWrite = fileContent.substring(fileCrtOffset, fileCrtOffset + chunkSize);
      }

      var options = null;
      //mode: 'truncate',
      if  (chunkCrtNo == 0)
      {
        options = { 
          data: buffToWrite, 
          path: fileFullName, //'file://internal/text.txt',
          position : 0,
          flag :'w',
          offset:0,
          length : buffSize, 
          encoding: 'utf8'
        }; 
      }else{
        options = { 
          data: buffToWrite, 
          path: fileFullName, //'file://internal/text.txt',
          mode: 'append',
          position : 0,
          flag :'w',
          offset:0,
          length : buffSize, 
          encoding: 'utf8'
        }; 
      }


      //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:write-textfile2: writeFileInChunks trace - write : " + chunkCrtNo + "</p>"; 
      storage.writeFile(successCb, failureCb, options);

    }

    //--------------------------------
    public writeTextFile2(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
    
      //this.readTextFile(storageName + folderName + fileName, error, context, callback);      
      try {
        var owner = this._owner;
        var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
        var fileFullName = storageName + folderName + fileName;
        aFileInfo.setStorage(storageName);
        aFileInfo.setPath(folderName);
        aFileInfo.setName(fileName);
        aFileInfo.setType("file");
        context.setObjectResult(aFileInfo);

        //document.getElementById("sdk.message").innerHTML += "<p>computeFileSha2</p>";
        var fileFullName = storageName + folderName + fileName;
    
        var self = this;

        if (fileContent == "")
          fileContent = " ";
      
        //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:read-textfile2 trace - start " + "</p>"; 
        // obtain the file stat
        var storage = new Storage();
        
        //var ds = moment(new Date());
        var fileSize = fileContent.length;
        //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:write-textfile2 trace - fileSize: " + fileSize + " </p>"; 
                  
        var CHUNK_SIZE = 1024 * 10 ;//128 * 512;
        //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:write-textfile2 trace - : CHUNK_SIZE: " + JSON.stringify(CHUNK_SIZE)  + " </p>"; 

        var chunkTotalNb = Math.floor(fileSize / CHUNK_SIZE);
        //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:write-textfile2 trace - : chunkTotalNb: " + JSON.stringify(chunkTotalNb)  + " </p>"; 

        var chunkFinalRest = fileSize % CHUNK_SIZE;
        //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:write-textfile2 trace - : chunkFinalRest: " + JSON.stringify(chunkFinalRest)  + " </p>"; 

        chunkTotalNb++;
        //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:write-textfile2 trace - : chunkTotalNb++: " + JSON.stringify(chunkTotalNb)  + " </p>"; 

        var chunkCrtNo = 0;
        var fileCrtOffset = 0;
        
  
        //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:write-file2 trace - start writeFileByChunks : " + fileFullName + "</p>"; 
        self.writeFileByChunks( 
                              storage, fileContent,//storage,
                              chunkCrtNo,//chunkCrtNo: number,     
                              chunkTotalNb,//chunkTotalNb: number, 
                              fileCrtOffset, //fileCrtOffset: number, 
                              chunkFinalRest,//chunkFinalRest: number,                                 
                              CHUNK_SIZE,//buffSize,
                              CHUNK_SIZE,//chunkSize: number,      
                              fileSize,//fileSize: number,  
                              fileFullName,//fileFullName, 
                              context,//context, 
                              error,//error, 
                              callback); //callback)
                              

      //------- error       
      }catch (e){
        console.log( "webos:write-textfile2 ok: error [3075]: initial error writing on: " + fileFullName  + " : error [" + JSON.stringify(e) + "]"); 
        context.setError(error);
        //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:write-textfile2 ok: error [3085]: initial error writing on: " + fileFullName  + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
        if (context.getError() != null)
          context.getError().setError(3075, "webos:read-textfile2 ok: error [3075]: during sha computation of the file " + fileFullName  + " : error [" + JSON.stringify(e) + "]");
        if (callback != null)
          callback(context);
      }

    }
    
    //--------------------
    // append text to file (lower than 10K)
    //--------------------

    //----------------------------
    public appendTextToFile(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var fileFullName = storageName + folderName + fileName;
      var owner = this._owner;
      var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      aFileInfo.setStorage(storageName);
      aFileInfo.setPath(folderName);
      aFileInfo.setName(fileName);
      aFileInfo.setType("file");
      context.setObjectResult(aFileInfo);      
      var successCb = function (cbObject){
        console.log( "Successfully writen " + cbObject.written + " bytes" ); 
        context.setError(error);
        context.setBoolResult(true);
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
      if (fileContent == "")
        fileContent = " ";
      var options = { 
        data: fileContent, //textData,
        path: fileFullName, //'file://internal/text.txt',
        mode: "append", //"append",//"position","truncate"//
        position : 0,
        flag :'w',
        offset:0,
        length : fileContent.length, //textData.length,
        encoding: 'utf8'
      }; 

      var storage = new Storage();
      storage.writeFile(successCb, failureCb, options);      
    }


    //----------------------
    //  remove file 
    //----------------------

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

    //-------------------------------
    public removeFile2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      const fileFullName = storageName + folderName + fileName;
      //----
      var owner = this._owner;
      var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      aFileInfo.setStorage(storageName);
      aFileInfo.setPath(folderName);
      aFileInfo.setName(fileName);
      aFileInfo.setType("file");
      context.setObjectResult(aFileInfo);      
      //----- 

      // Callback for a successful execution.
      // This callback will be called without any parameter.	
      var successCb = function (){
        console.log( "webos:remove-file2: ok. Successfully remove the file " + fileFullName); 
        context.setResult( "webos:remove-file2: ok. Successfully remove the file " + fileFullName); 
        context.setError(error);
        if (callback != null)
          callback(context);    
      };
    
      // Callback for a failed execution.
      // Failure callback will be invoked with the error code and the error text.
      var failureCb = function(cbObject){
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        console.log( "webos:remove-file2 error [6011]: Cannot delete Folder " + fileFullName + " : error [" + errorCode + "]: " + errorText); 
        context.setError(error);
        if (context.getError() != null)
          context.getError().setError(6005, "webos:remove-file2 error [6011]: Cannot delete Folder " + fileFullName + " : error [" + errorCode + "]: " + errorText);
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



    //----------------
    //  file exists
    //----------------

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


    //----------------------------
    public fileExists2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      const fileFullName = storageName + folderName + fileName;
      //----
      var owner = this._owner;
      var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      aFileInfo.setStorage(storageName);
      aFileInfo.setPath(folderName);
      aFileInfo.setName(fileName);
      aFileInfo.setType("file");
      context.setObjectResult(aFileInfo);      
      //----- 

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
        context.setBoolResult(false);
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
    }


    //--------------------------------------
    public copyFile( srcFileFullName: string, dstFileFullName: string,
                     error: amGeneralError.am_general.A_Error, 
                     context: amGeneralContext.am_general.A_Context, callback) 
    {
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
      var srcFileFullName = srcStorageName + srcFolderName + srcFileName;
      var dstFileFullName = dstStorageName + dstFolderName + dstFileName; 

      //----
      var owner = this._owner;
      var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      aFileInfo.setStorage(dstStorageName);
      aFileInfo.setPath(dstFolderName);
      aFileInfo.setName(dstFileName);
      aFileInfo.setType("file");
      context.setObjectResult(aFileInfo);      
      //----- 
      var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      aFileInfo2.setStorage(srcStorageName);
      aFileInfo2.setPath(srcFolderName);
      aFileInfo2.setName(srcFileName);
      aFileInfo2.setType("file");
      context.setObject2Result(aFileInfo2);      
      
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

    //------------------------------------
    public promise_copyFile2( srcStorageName: string, srcFolderName: string, srcFileName: string, 
                              dstStorageName: string, dstFolderName: string, dstFileName: string, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }


    //--------------------------------------
    //      download File
    //--------------------------------------
    
    //--------------------------------------
    public downloadFile( remoteUrlName: string, dstFileFullName: string,
                         error: amGeneralError.am_general.A_Error, 
                         context: amGeneralContext.am_general.A_Context, callback) 
    {
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

      var dstFileFullName = dstStorageName + dstFolderName + dstFileName; 
      //----
      var owner = this._owner;
      var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      aFileInfo.setStorage(dstStorageName);
      aFileInfo.setPath(dstFolderName);
      aFileInfo.setName(dstFolderName);
      aFileInfo.setType("file");
      context.setObjectResult(aFileInfo);      

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


    //------------------------------------
    public promise_downloadFile2( remoteUrlName: string, 
                                  dstStorageName: string, dstFolderName: string, dstFileName: string, 
                                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }


    //--------------------------------------
    //      unzip File 
    //--------------------------------------
    

    //--------------------------------------
    public unzipFile( zipFullFileName: string, unzipFullPath: string,
                      error: amGeneralError.am_general.A_Error, 
                      context: amGeneralContext.am_general.A_Context, callback) 
    {
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
      // This API will unzip a ZIP file stored in the device.
      var zipFullFileName =  zipStorageName + zipFolderName + zipFileName;  
      var unzipFullPath   =  unzipStorageName + unzipFolderName;

      //----
      var owner = this._owner;
      var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      aFileInfo.setStorage(unzipStorageName);
      aFileInfo.setPath(unzipFolderName);
      aFileInfo.setName("");
      aFileInfo.setType("folder");
      context.setObjectResult(aFileInfo);      
      //----- 
      var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      aFileInfo2.setStorage(zipStorageName);
      aFileInfo2.setPath(zipFolderName);
      aFileInfo2.setName(zipFileName);
      aFileInfo2.setType("file");
      context.setObject2Result(aFileInfo2);      
      
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
      var fullFileName = storageName + folderName + fileName;
      var owner = this._owner;
      var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      var aCreationDate      = owner._aServiceLocator._iEntityCreation.createDefaultDateTime(error);
      var aLastModifiedDate  = owner._aServiceLocator._iEntityCreation.createDefaultDateTime(error);
      var aLastAccesseddDate = owner._aServiceLocator._iEntityCreation.createDefaultDateTime(error);
      aFileInfo.setStorage(storageName);
      aFileInfo.setPath(folderName);
      aFileInfo.setName(fileName);
      aFileInfo.setType("file");
      context.setObjectResult(aFileInfo);      

      var successCb = function (cbObject){
        console.log( "Show File Stat: " ); 
        console.log( "File Type: " + cbObject.type );
        console.log( "File size (bytes): " + cbObject.size );
        console.log( "Last Accessed: " + cbObject.atime );
        console.log( "Last Modified: " + cbObject.mtime );
        console.log( "Created: " + cbObject.ctime );
        aFileInfo.setSize(cbObject.size);
        

        //aFileInfo.setCreatedDate(cbObject.stat.ctime);//temp
        //aFileInfo.setLastModifiedDate(cbObject.stat.mtime);//temp
        //aFileInfo.setLastAccessedDate(cbObject.stat.atime);//temp

        context.setBoolResult(true);
        context.setError(error);
        if (callback != null)
          callback(context);
      }; 
    
      var failureCb = function(cbObject){ 
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText; 
        console.log( " Error Code [" + errorCode + "]: " + errorText); 
        if (error != null)
          error.setError(errorCode, errorText);
        context.setError(error);
        if (callback != null)
          callback(context);  
      };
    
       //'file://internal/myFile.txt',
      var options = { 
          path: fullFileName,
      }; 
    
      var storage = new Storage();
      storage.statFile(successCb, failureCb, options);
    
    }

    //--------------------------------------
    public promise_getFileInfo2(storageName: string, folderName: string, fileName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      return this.promise_getFileInfo(storageName + folderName + fileName, error, context, callback);      
    }

    //-------------- 
    // temporary - will be moved to the write place
    //--------------


    
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
      var srcFileFullName = srcStorageName + srcFolderName + srcFileName;
      var dstFileFullName = dstStorageName + dstFolderName + dstFileName;
      var owner = this._owner;
      //----
      var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      aFileInfo.setStorage(dstStorageName);
      aFileInfo.setPath(dstFolderName);
      aFileInfo.setName(dstFileName);
      aFileInfo.setType("file");
      context.setObjectResult(aFileInfo);      
      //----- 
      var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      aFileInfo2.setStorage(srcStorageName);
      aFileInfo2.setPath(srcFolderName);
      aFileInfo2.setName(srcFileName);
      aFileInfo2.setType("file");
      context.setObject2Result(aFileInfo2);      

      var successCb = function ()
      {
        console.log("webos:move-file2 ok. Sucessfully move folder : " + srcFileFullName  + " to " +  + dstFileFullName);
        context.setResult("webos:move-file2 ok. Sucessfully move folder : " + srcFileFullName  + " to " +  + dstFileFullName);
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
        console.log("webos:move-file2 error: Error moving file : " + srcFileFullName + " to " +  
                                                                     dstFileFullName + " : Error Code [" + errorCode + "]: " + errorText); 
        if (error != null)
          error.setError(6020, "webos:move-file2 error: Error moving file : " + srcFileFullName  + " to " + 
                                                                                dstFileFullName  + " : Error Code [" + errorCode + "]: " + errorText);
        context.setError(error);
        if (callback != null)
          callback(context);
      };

      // move file parameters.
      var options = { 
        oldPath: srcFileFullName,  //'file://internal/oldDir',
        newPath : dstFileFullName  //'file://internal/newDir'
      };
    
      var storage = new Storage();
      storage.moveFile(successCb, failureCb, options);
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
       

    //=============================================
    // Create folder functions 
    //=============================================

    //----------------------------
    //  Create Folder
    //----------------------------
    
    //---------------------------------------
    public createFolder( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      var owner = this._owner;
      var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      aFileInfo.setStorage("");
      aFileInfo.setPath(folderFullName);
      aFileInfo.setName("");
      aFileInfo.setType("folder");
      context.setObjectResult(aFileInfo);      
      // Callback for a successful execution.
      var successCb = function (cbObject){
        console.log( "Directory "+  folderFullName + " created"); 
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

    //-------------------------------------------
    public createFolder2(storageName: string, folderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      //----
      var folderFullName = storageName + folderName;
      var owner = this._owner;
      var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      aFileInfo.setStorage(storageName);
      aFileInfo.setPath(folderName);
      aFileInfo.setName("");
      aFileInfo.setType("folder");
      context.setObjectResult(aFileInfo);      
      //----- 
      // Callback for a successful execution.
      var successCb = function (cbObject){
        console.log("webos:create-folder2 ok: Directory "+  folderFullName + " created sucessfully."); 
        context.setResult("webos:create-folder2 ok: Directory "+  folderFullName + " created sucessfully.");
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
        console.log( "webos:create-folder2 error [6010]: Cannot create Folder " + folderFullName + " : error [" + errorCode + "]: " + errorText); 
        context.setError(error);
        if (context.getError() != null)
          context.getError().setError(6010, "webos:create-folder2 error [6010]: Cannot create Folder " + folderFullName + " : error [" + errorCode + "]: " + errorText);
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
    

    //---------------------------------
    //  delete folder 2
    //---------------------------------

    //---------------------------------------
    public deleteFolder( folderFullName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) 
    {
      var owner = this._owner;
      var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      aFileInfo.setStorage("");
      aFileInfo.setPath(folderFullName);
      aFileInfo.setName("");
      aFileInfo.setType("folder");
      context.setObjectResult(aFileInfo);      
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
        console.log( "webos:delete-folder2 error [6011]: Cannot delete Folder " + folderFullName + " : error [" + errorCode + "]: " + errorText); 
        context.setError(error);
        if (context.getError() != null)
          context.getError().setError(6011, "webos:delete-folder2 error [6011]: Cannot delete Folder " + folderFullName + " : error [" + errorCode + "]: " + errorText);
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

    //---------------------------------------------
    public deleteFolder2(storageName: string, folderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var folderFullName = storageName + folderName;
      var owner = this._owner;
      var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      aFileInfo.setStorage(storageName);
      aFileInfo.setPath(folderName);
      aFileInfo.setName("");
      aFileInfo.setType("folder");
      context.setObjectResult(aFileInfo);      
      // Callback for a successful execution.
      // This callback will be called without any parameter.	
      var successCb = function (){
        console.log( "webos:delete-folder2 ok: Successfully remove the folder " + folderFullName); 
        context.setResult( "webos:delete-folder2 ok: Successfully remove the folder " + folderFullName); 
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
        console.log( "webos:delete-folder2 error [6011]: Cannot delete Folder " + folderFullName + " : error [" + errorCode + "]: " + errorText); 
        context.setError(error);
        if (context.getError() != null)
          context.getError().setError(6011, "webos:delete-folder2 error [6011]: Cannot delete Folder " + folderFullName + " : error [" + errorCode + "]: " + errorText);
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
      var srcFolderFullName = srcStorageName + srcFolderName;
      var dstFolderFullName = dstStorageName + dstFolderName;
      var owner = this._owner;
      //----
      var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      aFileInfo.setStorage(dstStorageName);
      aFileInfo.setPath(dstFolderName);
      aFileInfo.setName("");
      aFileInfo.setType("folder");
      context.setObjectResult(aFileInfo);      
      //----- 
      var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      aFileInfo2.setStorage(srcStorageName);
      aFileInfo2.setPath(srcFolderName);
      aFileInfo2.setName("");
      aFileInfo2.setType("folder");
      context.setObject2Result(aFileInfo2);      

      var successCb = function ()
      {
        console.log("copy folder done");
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
         source: srcFolderFullName, //'file:///usb:1/resource file/tmp.jpg',
         destination : dstFolderFullName//'file:///internal/image.jpg'
      };

      // Create storage object and invoke the API with parameters.	
      var storage = new Storage();
      //storage.copyFolder(successCb, failureCb, options);
    }


    //https://gist.github.com/frostney/4165353
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
      var srcFolderFullName = srcStorageName + srcFolderName;
      var dstFolderFullName = dstStorageName + dstFolderName;
      var owner = this._owner;
      //----
      var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      aFileInfo.setStorage(dstStorageName);
      aFileInfo.setPath(dstFolderName);
      aFileInfo.setName("");
      aFileInfo.setType("folder");
      context.setObjectResult(aFileInfo);      
      //----- 
      var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      aFileInfo2.setStorage(srcStorageName);
      aFileInfo2.setPath(srcFolderName);
      aFileInfo2.setName("");
      aFileInfo2.setType("folder");
      context.setObject2Result(aFileInfo2);      

      var successCb = function ()
      {
        console.log("webos:move-folder-2 ok. Sucessfully move folder : " + srcFolderFullName  + " to " +  + dstFolderFullName);
        context.setResult("webos:move-folder-2 ok. Sucessfully move folder : " + srcFolderFullName  + " to " +  + dstFolderFullName);
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
        console.log("webos:move-folder-2 error: Error moving folder : " + srcFolderFullName  + " to " +  
                                                                          dstFolderFullName + " : Error Code [" + errorCode + "]: " + errorText); 
        if (error != null)
          error.setError(6020, "webos:move-folder-2 error: Error moving folder : " + srcFolderFullName  + " to " + 
                                                                                     dstFolderFullName + " : Error Code [" + errorCode + "]: " + errorText);
        context.setError(error);
        if (callback != null)
          callback(context);
      };

      // move file parameters.
      var options = { 
        oldPath: srcFolderFullName,  //'file://internal/oldDir',
        newPath : dstFolderFullName  //'file://internal/newDir'
      };
    
      var storage = new Storage();
      storage.moveFile(successCb, failureCb, options);
    
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

    //----------------
    //  folder exists
    //----------------

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
    

    //-----------------------------------------------------------------------
    public api_statFile(callback)
    {
      // This API will get the information for a given file.
      
      var successCb = function (cbObject){
        console.log( "Show File Stat: " ); 
        console.log( "File Type: " + cbObject.stat.type );
        console.log( "File size (bytes): " + cbObject.stat.size );
        console.log( "Last Accessed: " + cbObject.stat.atime );
        console.log( "Last Modified: " + cbObject.stat.mtime );
        console.log( "Created: " + cbObject.stat.ctime );
      }; 
    
      var failureCb = function(cbObject){ 
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText; 
        console.log( " Error Code [" + errorCode + "]: " + errorText); 
      };
    
      var options = { 
          path: 'file://internal/myFile.txt',
      }; 
    
      var storage = new Storage();
      storage.statFile(successCb, failureCb, options);
    
    }
    //----------------------
    //  compute file sha 
    //  and save sha in file
    //-----------------------

    private api_writeFile_binary2(buffer, bufLength, fileName, callback){

      var successCb = function (cbObject){
        console.log( "Successfully writen " + cbObject.written + " bytes" ); 
        document.getElementById("testreadfile").innerHTML += "<h3>FILE SAVED: "+ fileName + " Size: "+ bufLength  + "</h3>";
      }; 

      var failureCb = function(cbObject){ 
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText; 
        console.log( " Error Code [" + errorCode + "]: " + errorText); 
        document.getElementById("testreadfile").innerHTML += "<h3>file NOT saved: "+ fileName + " Error: "+ errorText + "</h3>";
        //document.getElementById("testreadfile").innerHTML += "<h3>" + buffer + "</h3>";
      };


      var options = { 
          data: buffer,//array,//array,//buffer,//textData,
          path: fileName,//'file://internal/data.dat',//fileName,
          mode: "truncate", //"append",//"position",//
          position : 0,
          flag :'w',
          offset:0,
          length : bufLength,//array.length,//bufLength,
          encoding: 'base64'//'base64'//'binary'//'utf8'
      }; 

      /*
      var max_size = 10240;
      if(options.length > max_size)
        options.length = max_size;
      var storage = new Storage();
      storage.writeFile(successCb, failureCb, options);
      */

      var storage = new Storage();
      var max_size = 10240;
      var sizeToWrite = bufLength;

      var pos = 0;
      var length = 0;
      while (sizeToWrite > 0)
      {
        if(sizeToWrite > max_size)
          length = max_size;
        else
          length = sizeToWrite;

        var buffToWrite = buffer.substring(pos, pos+length);

        options.length = length;
        options.position = pos;
        options.mode = "truncate";
        if(pos > 0)
          options.mode = "append";
        options.data = buffToWrite;
        
        storage.writeFile(successCb, failureCb, options);
        
        pos += length;
        sizeToWrite -= length;
      }

    } 

    //----------------------------------------
    public computeShaChunk( shaProperties, sha256, storage,
                            chunkCrtNo: number,     chunkTotalNb: number, 
                            fileCrtOffset: number, chunkFinalRest: number, 
                            buffSize : number,
                            chunkSize: number,      fileSize: number,  fileFullName, context, error, callback)
    {

      //-------------
      // read file as binary bu chunks.
      var self = this;
	    var successCb = function (cbObject){
        // If file is read as binary, array of uint8 will be returned. 
        //document.getElementById("sdk.message").innerHTML = "<p>" + "webos:compute-filesha2 trace - start computation chunkCrtNo: " + chunkCrtNo + "</p>"; 
        //document.getElementById("sdk.message").innerHTML = "<p>" + "webos:compute-filesha2 trace - start computation chunkCrtOffset: " + fileCrtOffset+ "</p>"; 
        var binary_data = cbObject.data;	// This will be an ArrayBuffer
        var raw = new Uint8Array(binary_data);//rmAsmCrypto.string_to_bytes(fs.readBytes(CHUNK_SIZE));//new Uint8Array(fs.readBytes(CHUNK_SIZE));
        sha256.process(raw);                            
      
        chunkCrtNo++;
        //---------- end computation
        if ( (chunkCrtNo == chunkTotalNb) || 
             ((chunkCrtNo + 1 == chunkTotalNb) && (chunkFinalRest == 0))
            )
        {
          
          var hash = sha256.finish().result;
          sha256 = null;
          var res = rmAsmCrypto.bytes_to_hex(hash);
          //context.setObjectResult(res); 
          context.setResult(res); 
          shaProperties.setShaString(res);
          //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:compute-filesha2 trace - successfully end: " +  "</p>"; 
          //------
          console.log( "webos:compute-filesha2 ok: Successfully compute the file " + fileFullName ); 
          //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:compute-filesha2 ok: Successfully compute the file " + fileFullName + "</p>";
          context.setError(error);
          if (callback != null)
            callback(context);    
          return;  
        }
        //---------- call last computation
        if (chunkCrtNo + 1 == chunkTotalNb)
        {
          //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:compute-filesha2 trace - call rest computation: " + chunkCrtNo + "</p>"; 
          self.computeShaChunk( shaProperties, sha256, storage,
                                chunkCrtNo,  chunkTotalNb, 
                                fileCrtOffset+chunkSize, chunkFinalRest, chunkFinalRest,
                                chunkSize,  fileSize,  fileFullName, context, error, callback);
        }else{
          //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:compute-filesha2 trace - call next computation: " + chunkCrtNo + "</p>"; 
          self.computeShaChunk( shaProperties, sha256, storage,
                                chunkCrtNo,  chunkTotalNb, 
                                fileCrtOffset+chunkSize, chunkFinalRest, 
                                chunkSize,
                                chunkSize,  fileSize,  fileFullName, context, error, callback);
        }
        
      }; 
      
      //---------------------------
      var failureCb = function(cbObject)
      { 
	      var errorCode = cbObject.errorCode;
		    var errorText = cbObject.errorText; 
        console.log( "webos:compute-filesha2 ok: error [5055]: during sha computation of the file " + fileFullName  + " : error [" + errorCode + " - " + errorText + "]"); 
        context.setError(error);
        //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:compute-filesha2 ok: error [5055]: during sha computation of the file " + fileFullName  + " : error ["  + errorCode + " - " + errorText + "]" + "</p>"; 
        if (context.getError() != null)
          context.getError().setError(5055, "webos:compute-filesha2 ok: error [5055]: during sha computation of the file " + fileFullName  + " : error [" + errorCode + " - " + errorText + "]");
        if (callback != null)
          callback(context);
      };
      
      //---------------
      //  offset: 0,
      //          data: buffer,        //array,//array,//buffer,//textData,
      //         mode: "position",   //"append",//"position",//
      //         flag :'r',
      //offset: 0,
      // Read file from position, read as binary
      var options = { 
        path: fileFullName, //'file://internal/data.dat',//fileName,
        position : fileCrtOffset,
        length : buffSize,//array.length,//bufLength,
        encoding: 'binary', //'base64'//'base64'//'binary'//'utf8'
      }; 

      //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:compute-filesha2 trace - start read file : " + fileFullName + "</p>"; 
	    storage.readFile(successCb, failureCb, options);

    }


    //--------------------------------
    public computeFileSha2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      if ( (shaProperties === null) && (shaProperties.getSrcFileInfo() === null))
      {
        console.log( "webos:compute-filesha2 error: error [5051]: srcFileInfo is null"); 
        context.setError(error);
        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:compute-filesha2 error: error [5051]: srcFileInfo is null" + "</p>"; 
        if (context.getError() != null)
          context.getError().setError(5054, "webos:compute-filesha2 error: tizen:compute-filesha2 error: error [5051]: srcFileInfo is null");
        if (callback != null)
          callback(context);
      } 
      var storageName = shaProperties.getSrcFileInfo().getStorage();
      var folderName = shaProperties.getSrcFileInfo().getPath();
      var fileName = shaProperties.getSrcFileInfo().getName();

      //document.getElementById("sdk.message").innerHTML += "<p>computeFileSha2</p>";
      var fileFullName = storageName + folderName + fileName;
  
      //----
      var owner = this._owner;
      var self = this;
      var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      aFileInfo2.setStorage(storageName);
      aFileInfo2.setPath(folderName);
      aFileInfo2.setName(fileName);
      aFileInfo2.setType("file");
      context.setObject2Result(aFileInfo2);      
      //--------------------------------------------------
      var callback_fileStatObtained = function (cbObject){
        //console.log( "Show File Stat: " ); 
        //console.log( "File Type: " + cbObject.stat.type );
        //console.log( "File size (bytes): " + cbObject.stat.size );
        //console.log( "Last Accessed: " + cbObject.stat.atime );
        //console.log( "Last Modified: " + cbObject.stat.mtime );
        //console.log( "Created: " + cbObject.stat.ctime );
        //try {
        
          //var ds = moment(new Date());
          var fileSize = cbObject.size;
          //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:compute-filesha2 trace - fileSize: " + JSON.stringify(cbObject) + " </p>"; 
          //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:compute-filesha2 trace - fileSize: " + fileSize + " </p>"; 
          

          var sha256 = new rmAsmCrypto.Sha256();
          //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:compute-filesha2 trace - fileSize: " + JSON.stringify(sha256)  + " </p>"; 
          
          var CHUNK_SIZE = 1024 * 10 ;//128 * 512;
          //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:compute-filesha2 trace - : CHUNK_SIZE: " + JSON.stringify(CHUNK_SIZE)  + " </p>"; 

          var chunkTotalNb = Math.floor(fileSize / CHUNK_SIZE);
          //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:compute-filesha2 trace - : chunkTotalNb: " + JSON.stringify(chunkTotalNb)  + " </p>"; 

          var chunkFinalRest = fileSize % CHUNK_SIZE;
          //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:compute-filesha2 trace - : chunkFinalRest: " + JSON.stringify(chunkFinalRest)  + " </p>"; 

          chunkTotalNb++;
          //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:compute-filesha2 trace - : chunkTotalNb++: " + JSON.stringify(chunkTotalNb)  + " </p>"; 

          var chunckCrtNo = 0;
          var fileCrtOffset = 0;
          
          
          self.computeShaChunk( shaProperties,//shaProperties, 
                                sha256,//sha256, 
                                storage,//storage,
                                chunckCrtNo,//chunkCrtNo: number,     
                                chunkTotalNb,//chunkTotalNb: number, 
                                fileCrtOffset, //fileCrtOffset: number, 
                                chunkFinalRest,//chunkFinalRest: number,                                 
                                CHUNK_SIZE,//buffSize,
                                CHUNK_SIZE,//chunkSize: number,      
                                fileSize,//fileSize: number,  
                                fileFullName,//fileFullName, 
                                context,//context, 
                                error,//error, 
                                callback); //callback)
                                
  
        //------- error 
        /*
        }catch (e){
          console.log( "webos:compute-filesha2 ok: error [5054]: during sha computation of the file " + fileFullName  + " : error [" + JSON.stringify(e) + "]"); 
          context.setError(error);
          document.getElementById("sdk.message").innerHTML += "<p>" + "webos:compute-filesha2 ok: error [5054]: during sha computation of the file " + fileFullName  + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
          if (context.getError() != null)
            context.getError().setError(5054, "webos:compute-filesha2 ok: error [5054]: during sha computation of the file " + fileFullName  + " : error [" + JSON.stringify(e) + "]");
          if (callback != null)
            callback(context);
        }*/

      }; 
    
      var callback_fileStatError = function(cbObject){ 
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText; 
        console.log( "webos:compute-filesha2 error [6086]: Cannot compute file sha " + fileFullName + " Error Code [" + errorCode + "]: " + errorText); 
        context.setError(error);
        //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:compute-filesha2 error [6086]: Cannot compute file sha " + fileFullName + " Error Code [" + errorCode + "]: " + errorText + "</p>"; 
        if (context.getError() != null)
          context.getError().setError(6086, "webos:compute-filesha2 error [6086]: Cannot compute file sha " + fileFullName + " Error Code [" + errorCode + "]: " + errorText);
        if (callback != null)
          callback(context);

      };
    
      var options = { 
          path: fileFullName, //'file://internal/myFile.txt',
      }; 

      //document.getElementById("sdk.message").innerHTML += "<p>" + "webos:compute-filesha2 trace - start " + "</p>"; 
      // obtain the file stat
      var storage = new Storage();
      storage.statFile(callback_fileStatObtained, callback_fileStatError, options);
    }


    //--------------------------------
    public computeFileSha2_old( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      //const crypto = require('crypto');
      if ( (shaProperties === null) && (shaProperties.getSrcFileInfo() === null))
      {
        console.log( "webos:compute-filesha2 error: error [5051]: srcFileInfo is null"); 
        context.setError(error);
        if (context.getError() != null)
          context.getError().setError(5054, "tizen:compute-filesha2 error: tizen:compute-filesha2 error: error [5051]: srcFileInfo is null");
        if (callback != null)
          callback(context);
      } 
      var storageName = shaProperties.getSrcFileInfo().getStorage();
      var folderName = shaProperties.getSrcFileInfo().getPath();
      var fileName = shaProperties.getSrcFileInfo().getName();

      var fs = require('fs');

      var fileFullName = storageName + folderName + fileName;
  
      //----
      var owner = this._owner;
      var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
      aFileInfo2.setStorage(storageName);
      aFileInfo2.setPath(folderName);
      aFileInfo2.setName(fileName);
      aFileInfo2.setType("file");
      context.setObject2Result(aFileInfo2);      
      //--------------------------------------------------
      // open the file in read mode "r" (after we obtained the file object)
      var callback_fileObjectObtained = function(handle)
      {
        //------------------------------npm start
        var sha256 = new rmAsmCrypto.Sha256();
      
        //const hmac = crypto.createHmac('sha256','');
        //let shasum = crypto.createHash('sha256');
        var i:number= 1;
        try{

          var CHUNK_SIZE = 128 * 512;
          var readerStream = fs.createReadStream( fileFullName, { highWaterMark: CHUNK_SIZE});

          //let chunks = [];
          //----------------------------
          // Set the encoding to be utf8. 
          //readerStream.setEncoding('UTF8');
          //readerStream.setEncoding('UTF8');
          readerStream.setEncoding('binary');
          
          //----------------------------
          // Handle stream events --> data, end, and error
          readerStream.on('data', function(chunk) {
            var raw = rmAsmCrypto.string_to_bytes(chunk);//new Uint8Array(chunk); //fs.readBytes(CHUNK_SIZE));
            sha256.process(raw);                            
            //hmac.update(chunk,'binary');
            //shasum.update(chunk, 'binary');
            console.log(""+i++);
            //data += chunk;//chunks.push(chunk);
          });

          //----------------------------
          readerStream.on('close',function() {
            //console.log(data); // Create a buffer of the image from the stream  return cb(null, Buffer.concat(chunks));
            var hash = sha256.finish().result;
            //fs.close();
            //fs = null;
            //handle = null;
            var res = rmAsmCrypto.bytes_to_hex(hash);
            //var res = hmac.digest('hex');
            //var res = shasum.digest('hex');

            sha256 = null;
            context.setResult(res); 
            shaProperties.setShaString(res);
            //------
            console.log( "webos:compute-filesha2 ok: Successfully compute the sha of the file: " + fileFullName ); 
            //context.setResult("webos:compute-filesha2 ok: Successfully compute the file sha " + fileFullName); 
            console.log( res); 
            context.setError(error);
            if (callback != null)
              callback(context);      
            return; 
          });
          //----------------------------
          readerStream.on('error', function(err) {
            //console.log(err.stack);
            //console.log(JSON.stringify(error));
            console.log( "webos:compute-filesha2 error [8082]: Cannot compute file sha. Error reading stream " + fileFullName + " : error [" + JSON.stringify(err) + "]"); 
            context.setError(error);
            if (context.getError() != null)
              context.getError().setError(5082, "webos:compute-filesha2 error [8082]: Cannot compute file sha. Error reading stream " + fileFullName + " : error [" + JSON.stringify(err) + "]");
            if (callback != null)
              callback(context);    
             return;         
          });                    
          
        }catch(e){
          console.log( "webos:compute-filesha2 error [8083]: Cannot compute file sha " + fileFullName + " catch error on file open: error [" + JSON.stringify(e) + "]"); 
          context.setError(error);
          if (context.getError() != null)
            context.getError().setError(5085, "tizen:compute-shafile2 error [5085]: Cannot compute file sha " + fileFullName + " catch error on file open: error [" + JSON.stringify(e) + "]");
          if (callback != null)
            callback(context);
          return;
        }
      }
      //--------------------------------------------------
      // obtain the file length
      try{
        fs.stat(storageName + folderName + fileName, function(err, stats) 
        {
          if (err)
          {
            //console.log(stats.isDirectory());
            console.log( "webos:compute-filesha2 error [9084]: Cannot compute file " + fileFullName + " sha. stats error " + + JSON.stringify(stats) ); 
            context.setError(error);
            if (context.getError() != null)
              context.getError().setError(9084,  + "webos:compute-filesha2 error [9084]: Cannot compute file " + fileFullName + " sha. stats error " + + JSON.stringify(stats) );
            if (callback != null)
              callback(context);    
            return ;
          }
          if (stats.isDirectory())
          {
            //console.log(stats.isDirectory());
            console.log( "webos:compute-filesha2 error [9085]: Cannot compute file sha. The 'file' " + fileFullName + " is a folder" ); 
            context.setError(error);
            if (context.getError() != null)
              context.getError().setError(9085,  + "webos:compute-filesha2 error [9085]: Cannot compute file sha. The 'file' " + fileFullName + " is a folder" );
            if (callback != null)
              callback(context);    
            return;  
          }

          //-------------------- 
          console.log("webos:compute-filesha2 trace. statsObtained : " + JSON.stringify(stats) ); 
          callback_fileObjectObtained(stats);
        });

      }catch(e){
        console.log(  + "webos:compute-filesha2 error [9086]: Cannot compute file  sha. Cannot find file " + fileFullName + " stats : error [" + JSON.stringify(e) + "]" ); 
        context.setError(error);
        if (context.getError() != null)
          context.getError().setError(9086,  + "webos:compute-filesha2 error [9086]: Cannot compute file  sha. Cannot find file " + fileFullName + " stats : error [" + JSON.stringify(e) + "]");
        if (callback != null)
          callback(context);
         return; 
      }   
    }

    //-----------------------
    public promise_computeFileSha2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any 
    {

    }

    //--------------------------------
    public computeFileShaAndSaveShaFile2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var owner = this._owner;
      var thisInterface = this;
      //-----
      var callback2 = function(ctx1: amGeneralContext.am_general.A_Context)
      {
        if (ctx1.isError())
        {
          if (callback != null)
            callback(ctx1);
          return ;   
        }
        //var srcStorageName = shaProperties.getSrcFileInfo().getStorage();
        //var srcFolderName = shaProperties.getSrcFileInfo().getPath();
        //var srcFileName = shaProperties.getSrcFileInfo().getName();
        var shaString:string = shaProperties.getShaString();
        var shaStorageName = shaProperties.getShaFileInfo().getStorage();
        var shaFolderName = shaProperties.getShaFileInfo().getPath();
        var shaFileName = shaProperties.getShaFileInfo().getName();
        //-------------
        var callback3 = function(ctx2: amGeneralContext.am_general.A_Context)
        {
          if (! ctx2.isError())
          {
            var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
            aFileInfo.setStorage(shaStorageName);
            aFileInfo.setPath(shaFolderName);
            aFileInfo.setName(shaFileName);
            aFileInfo.setType("file");
            context.setObjectResult(aFileInfo);      
          }else{
            ctx2.setObjectResult(ctx2.getObject2Result());      
          } 
          context.setResult(shaProperties.getShaString());
          if (callback != null)
            return callback(ctx2);
        }
        thisInterface.writeTextFile2(shaStorageName, shaFolderName, shaFileName, shaString, error, ctx1, callback3);
      }
      this.computeFileSha2(shaProperties, error, context, callback2) ;
    }

    //-----------------------
    public promise_computeFileShaAndSaveShaFile2( shaProperties: amGeneralShaProperties.am_general.A_ShaProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any 
    {

    }
    
    //=========================
    // read and parse xml file
    //=========================

    //--------------------------
    /*
    public readAndParseXMLFile2(storageName: string, folderName: string, fileName: string, 
                                urlStorageName: string, urlFolderName: string, urlFileName: string, 
                                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    
    }
    */    
    //--------------------------
    /*
    public parseXMLString(xmlString: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }*/

  } //--- end class

}
