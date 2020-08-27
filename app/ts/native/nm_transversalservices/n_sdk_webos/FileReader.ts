//import { fstat } from "fs";
//import { PlaybackInterfaces } from "./IPlaybackEngineConfigurator";
//var path = "file://internal/external/StartupConfig.json";
//var path = "file://developer/apps/usr/palm/applications/com.moodmedia.app.firstapp/StartupConfig.json";
//var path = "http://127.0.0.1:9080/external/usb/2/2.jpg";

//import Storage = require("./cordova/storage.js");
//var testingImport =  require("./lib/cordova-cd/go.js")
//import testingImport =  require("./go.js")
//import * as StorageWebOS from "./cordova/storage.js";
//import StorageWebOS = require("./cordova/storage.js");

//import * as cordova from "./node_modules/cordova/cordova.webos";
//import * as StorageWebOS from "./cordova/storage";

import "./cordova/cordova.webos";
import "./cordova/storage";
import { readFile } from "fs";

//import "../../app/js/native/nm_transversalservices/n_sdk_webos/cordova.webos.js";
//import "../../app/js/native/nm_transversalservices/n_sdk_webos/storage.js";


export module rmod_filereader
{

  //var path = "file://usb:2/StartupConfig.json";

  export class FileReader{
    fileContent: any;

    
     public readTextFile(fileFullName: string, context : any) : number 
     {
       if (context.step == 1)
       {
         this.api_readFile_text(fileFullName, this.readTextFile, context);
         document.getElementById("testreadfile").innerHTML += "<p>step1</p>";
         return 1;
       }else if (context.step == 2){
         document.getElementById("testreadfile").innerHTML += "<p>step2</p>";
         return 2;
       }
       document.getElementById("testreadfile").innerHTML += "<p>step0</p>";
       return 0;
     }

     public promise_api_readFile_text(fileFullName:string, callback, context: any) : number
     {
        document.getElementById("testreadfile").innerHTML += "<p>before promise</p>";
        console.log( "<p>before promise</p>");
        var ret = 1;
        this.api_readFile_text(fileFullName, null, context)
       .then(result => 
       { 
         document.getElementById("testreadfile").innerHTML += context.result;
         console.log( context.result);
         document.getElementById("testreadfile").innerHTML += "<p>after read file</p>";
         //return 0;
         ret = 0;
       });
       document.getElementById("testreadfile").innerHTML += "<p>after promise</p>";
       console.log( "<p>after promise</p>");
       return ret;
     }

     public api_readFile_text(fileFullName:string, callback, context: any) 
     {
      return new Promise(
        function (resolve, reject) 
        {       
          // This example will read file as text.
          var owner = this;
          var successCb = function (cbObject)
          {
            // If file is read as text, utf encoded string will return.
            // Create an image element, and set the source as the binary data.
            document.getElementById("testreadfile").innerHTML += "<p>succes_1</p>";
            var data_text = cbObject.data;
            //var ele = document.createElement('div');
            //ele.innerHTML = data_text;
            //document.body.appendChild(ele); 
            document.getElementById("testreadfile").innerHTML += "<p>succes_2</p>";
            context.step = 2;
            context.result = data_text;
            document.getElementById("testreadfile").innerHTML += "<p>succes_3</p>" ;
            //owner.readTextFile(fileFullName, context);
            resolve(data_text);
          }; 
    
          var failureCb = function(cbObject, callback2)
          {
            document.getElementById("testreadfile").innerHTML += "<p>failure_1</p>";
            var errorCode = cbObject.errorCode;
            var errorText = cbObject.errorText; 
            console.log( " Error Code [" + errorCode + "]: " + errorText); 
            document.getElementById("testreadfile").innerHTML += "<p>failure_2</p>";
            context.step = 2;
            context.result = " Error Code [" + errorCode + "]: " + errorText;
            document.getElementById("testreadfile").innerHTML += "<p>failure_3</p>";
            //callback(fileFullName, context);
            //owner.readTextFile(fileFullName, context);
            reject(errorText);
          };
    
          var options = { 
             path: fileFullName, //"file://internal/text.txt",
             position : 0,
             encoding: 'utf8'
          }; 
    
          var storage = new Storage();
          document.getElementById("testreadfile").innerHTML += "<p>readfile_1</p>";
          storage.readFile(successCb, failureCb, options);
        });  
    }
    
    

    ReadFile(filePath:string): any
    {
       this.ReadFileInternal(filePath, function(result)
       {
       document.getElementById("testreadfile").innerHTML = result;

       console.log(result);
      });
    }
    private ReadFile2(filePath, callback): void{
    }
    
    private ReadFileInternal(filePath, callback): void{
          var option = {
            path: filePath,
            position: 0,
            encoding: "utf8"
        };
        function successCbReadFile(cbObject) {
            callback(cbObject.data);
        }
        function failureCbReadFile(cbObject) {
          callback(cbObject.errorCode + " " + cbObject.errorText);
        }
        var storage = new Storage();
        storage.readFile(successCbReadFile, failureCbReadFile, option); 
    }

    ParseJsonFile(filePath:string): any{
      this.ReadFileInternal(filePath,function(result){
         console.log("inside parse json file");
         console.log(JSON.parse(result));
      });
    }    
  }

  
//let fileReader = new FileReader();
//var fileContent = fileReader.ReadFile(path);
//fileReader.ParseJsonFile(path);
//console.log(fileContent);

function fileExists(filePath) {
  var option = {
      path: filePath,
      position: 0,
      encoding: "utf8"
  };
  var storage = new Storage();
  function successCbReadFile(cbObject) {
      if(cbObject.exists)
        console.log("file exists");
      else 
        console.log("file is missing");

  }
  function failureCbReadFile(cbObject) {
      var errorCode = cbObject.errorCode;
      var errorText = cbObject.errorText;
      console.log("file is missing " + errorCode + " " + errorText);
  }
  storage.exists(successCbReadFile, failureCbReadFile, option);
  getStorageInfo();
}

function listFilesTest(filepath)
{
    var storage = new Storage();


    var list_onSuccessCb = function(cbObject) {
      var files = cbObject.files;
      for(var i = 0; i < files.length; ++i)
          {
             console.log(files[i]);
             console.log(files[i].path);
          }

    }
    var list_onFailureCb = function(cbObject) {
		console.log("Failed to get list files. Path : " + filepath);

		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;
		var errorMessage = "Error Code [" + errorCode + "]: " + errorText;
		console.log(errorMessage);
	}

	var list_option = {
		path : filepath
	};

	storage.listFiles(list_onSuccessCb, list_onFailureCb, list_option);
}

function getStorageInfo() {
  var successCb = function (cbObject) {
      var free = cbObject.free;
      var total = cbObject.total;
      var used = cbObject.used;
      var externals = cbObject.externalMemory;

      console.log("Free: " + free + "kilobytes");
      console.log("Used: " + used + "kilobytes");
      console.log("Total: " + total + "kilobytes");

      for (var uri in externals) {
          var external = externals[uri];
          console.log("base uri: " + uri); // e.g. usb:1
          console.log("Free: " + external.free + "kilobytes");
          console.log("Used: " + external.used + "kilobytes");
          console.log("Total: " + external.total + "kilobytes");
      }
  };

  var failureCb = function (cbObject) {
      var errorCode = cbObject.errorCode;
      var errorText = cbObject.errorText;
      console.log(" Error Code [" + errorCode + "]: " + errorText);
  };

  var storage = new Storage();
  storage.getStorageInfo(successCb, failureCb);
}
}


