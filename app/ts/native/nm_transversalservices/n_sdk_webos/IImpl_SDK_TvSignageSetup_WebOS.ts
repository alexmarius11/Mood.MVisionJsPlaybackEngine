import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_TvSignageSetup");

import nmTransversalServices = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/N_SDK_WebOS");
import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralCaptureScreenInfo   = require("../../../../../app/ts/abstract/am_general/a_capturescreeninfo/A_CaptureScreenInfo");
import amGeneralFailureModeInfo   = require("../../../../../app/ts/abstract/am_general/a_failuremodeinfo/A_FailureModeInfo");
import amGeneralTileInfo          = require("../../../../../app/ts/abstract/am_general/a_tileinfo/A_TileInfo");
import amGeneralSystemMonitorInfo = require("../../../../../app/ts/abstract/am_general/a_systemmonitorinfo/A_SystemMonitorInfo");
import amGeneralUsageData         = require("../../../../../app/ts/abstract/am_general/a_usagedata/A_UsageData");
import amGeneralUsagePermissions  = require("../../../../../app/ts/abstract/am_general/a_usagepermissions/A_UsagePermissions");
import amGeneralSignageInfo       = require("../../../../../app/ts/abstract/am_general/a_signageinfo/A_SignageInfo");

import "./cordova/cordova.webos";
import "./cordova/signage";
//import "./cordova/storage";

declare var Signage : any;

/////////////////////////////////////////////
/*
function api_writeFile_binary(buffer, bufLength, fileName, callback){

	var successCb = function (cbObject){
    console.log( "Successfully writen " + cbObject.written + " bytes" ); 
    document.getElementById("testreadfile").innerHTML += "<h3>FILE SAVED !!! "+ fileName + "</h3>";
	}; 

	var failureCb = function(cbObject){ 
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText; 
    console.log( " Error Code [" + errorCode + "]: " + errorText); 
    document.getElementById("testreadfile").innerHTML += "<h3>file NOT saved "+ bufLength + "</h3>";
    document.getElementById("testreadfile").innerHTML += "<h3>" + buffer + "</h3>";
	};

	// write Text data, use utf-8 encoding, write all text.
	var textData = buffer;//"Hello SCAP!!!!!"; 
	var options = { 
			data: textData,
			path: fileName,
			positon : 0,
			flag :'w',
			offset:0,
			length : bufLength,
			encoding: 'utf8'
	}; 

	var storage = new Storage();
	storage.writeFile(successCb, failureCb, options);
} 
*/
//////////////////////////////////////////////

export module nm_transversalservices
{
  export class IImpl_SDK_TvSignageSetup_WebOS implements amGeneral.am_transversalservices.I_SDK_TvSignageSetup
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

    //-------------------------------
    //       Capture Screen
    //-------------------------------

      /////////////////////////////////////////////

      private api_writeFile_binary(buffer, bufLength, fileName, callback){

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
    
    
    //---------------------
    public captureScreen(captureScreenInfo: amGeneralCaptureScreenInfo.am_general.A_CaptureScreenInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      // Callback for a successful execution.
      var successCb = function (cbObject)
      {
        // Internal path for where the screen capture image is stored.
        //var capture_image_path = cbObject.imagePath;
        //captureScreenInfo.setImageSystemPath(cbObject.imagePath);
        context.setBoolResult(true);
        context.setError(error);
        console.log("Captured screen image stored at : " + cbObject.imagePath + " " + JSON.stringify(cbObject));

        //document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
        //document.getElementById("testreadfile").innerHTML += "<h3>Capture Screen File: "+ JSON.stringify(cbObject) + "</h3>";
        //document.getElementById("testreadfile").innerHTML += "<h3>Capture Screen File: "+ cbObject.path + "</h3>";
        //document.getElementById("testreadfile").innerHTML += "<h3>Capture Screen File: "+ captureScreenInfo.getImageSystemPath() + "</h3>";

        var htmlImg:HTMLImageElement  = <HTMLImageElement>document.getElementById("testimg");
        htmlImg.src = "data:image/jpeg;base64,"+cbObject.data;

        //var buf = JSON.stringify(cbObject.data);
        var pathSave = captureScreenInfo.getImageSystemPath();
        //api_writeFile_binary(cbObject.data, buf.length, pathSave, null);
        this.api_writeFile_binary(cbObject.data, cbObject.size, pathSave, null);


        if (callback != null)
          callback(context);
      };

      // Callback for a failed execution.
      // Failure callback will be invoked with the error code and the error text.
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
  
      // Create the signage object.		
      var signage = new Signage();
      var options = { 
        save : false
      }; 
      // invoke the method with callbacks.
      signage.captureScreen(successCb, failureCb, options);	
    }
    
    //---------------------
    public captureScreen_old(captureScreenInfo: amGeneralCaptureScreenInfo.am_general.A_CaptureScreenInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
	    // Callback for a successful execution.
      var successCb = function (cbObject)
      {
		    // Internal path for where the screen capture image is stored.
		    //var capture_image_path = cbObject.imagePath;
        //captureScreenInfo.setImageSystemPath(cbObject.imagePath);
        context.setBoolResult(true);
        context.setError(error);
        console.log("Captured screen image stored at : " + cbObject.imagePath + " " + JSON.stringify(cbObject));

        //document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
        //document.getElementById("testreadfile").innerHTML += "<h3>Capture Screen File: "+ JSON.stringify(cbObject) + "</h3>";
        //document.getElementById("testreadfile").innerHTML += "<h3>Capture Screen File: "+ cbObject.path + "</h3>";
        //document.getElementById("testreadfile").innerHTML += "<h3>Capture Screen File: "+ captureScreenInfo.getImageSystemPath() + "</h3>";

        var htmlImg:HTMLImageElement  = <HTMLImageElement>document.getElementById("testimg");
        htmlImg.src = "data:image/jpeg;base64,"+cbObject.data;

        //var buf = JSON.stringify(cbObject.data);
        //var pathSave = captureScreenInfo.getImageSystemPath();
        //api_writeFile_binary(cbObject.data, buf.length, pathSave, null);


        if (callback != null)
         callback(context);
	    };

	    // Callback for a failed execution.
	    // Failure callback will be invoked with the error code and the error text.
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
	
	    // Create the signage object.		
	    var signage = new Signage();
	    var options = { 
        save : false
      }; 
	    // invoke the method with callbacks.
	    signage.captureScreen(successCb, failureCb, options);	
    }


    //------------------------------------
    public promise_captureScreen(soundProperties: amGeneralCaptureScreenInfo.am_general.A_CaptureScreenInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }


    //-------------------------------
    //       Check Screen
    //  The Check Screen feature judges whether there are abnormalities at the edges of the screen. R, G, and B OSDs
    //     are formed on the screen at one second intervals and an RGB Sensor tests the areas.
    //  If set to On, the Check Screen feature is enabled.
    //  If set to Off, the Check Screen feature is disabled.
    // When the Portrait mode is On, the Check Screen feature is Off and deactivated    
    //----------------------------------

    //--------------------------
    public enableCheckScreen(enabledCheckScreen: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var successCb = function ()
      {
		    console.log("enableCheckScreen successful");
        context.setBoolResult(true);
        context.setError(error);
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
	        checkScreen : true
	    };

	    var signage = new Signage();
	
	    signage.enableCheckScreen(successCb, failureCb, options);
    }

    //-------------------------
    public promise_enableCheckScreen(enabledCheckScreen: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //------------------------------------------------------------------------
    //Fail Over
    //The input source with the highest priority will be selected.
    //-- Off
    //   The Auto-Fail Over feature is disabled.
    //--- Auto
    // The input source changes according to the specified order. When several input sources are found, the input
    // source with the highest priority will be selected.
    // Priority: 1.HDMI, 2.DVI-D, 3.DISPLAYPORT, and 4.OPS, 5.RGB, 6.Internal Memory
    //-- Manual
    // The input source changes according to the specified order. When several input sources are found, the input
    // source with the highest priority will be selected.
    // y You can set Priority 1 - Priority 6.
    //-- NOTE:
    // Content copied using My Media will be saved in the root folder.
    // If the input is switched to Internal Memory due to Fail Over, videos files or image files saved in the top-level
    //   folder in the Internal Memory will be displayed.
    // If there are both video files and image files in the same folder, then only the video files will be played.
    // Content distributed by SuperSign will be saved in the folder named 'normal' in the internal memory. Therefore,
    //content distributed by SuperSign will not be automatically played due to Fail Over.
    //---------------------

    //------------------------------
    public setFailureMode(failureModeInfo: amGeneralFailureModeInfo.am_general.A_FailureModeInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
	    // Callback for a successful execution.
	    var successCb = function (){
		    console.log("Set Failover mode successful");
        context.setBoolResult(true);
        context.setError(error);
        if (callback != null)
         callback(context);
	    }; 

	    // Callback for a failed execution.
	    // Failure callback will be invoked with the error code and the error text.
      var failureCb = function(cbObject)
      {
		    //returnStr +=" Error Code [" + errorCode + "]: " + errorText;
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText; 
        console.log( " Error Code [" + errorCode + "]: " + errorText); 
        if (error != null)
          error.setError(errorCode, errorText);
        context.setError(error);
        if (callback != null)
          callback(context);
	    };

	    // Failover parameters.
	    // mode is of Signage.FailoverMode type.
	    // priority is an ordered array where 0th input has the highest priority.
      // Note: when mode is AUTO, priority parameter is NOT ALLOWED!!!
    
      var failureMode = Signage.FailoverMode.MANUAL;
      if (failureModeInfo.getMode() == "manual")
        failureMode = Signage.FailoverMode.MANUAL;
      else if (failureModeInfo.getMode() == "auto")  
        failureMode = Signage.FailoverMode.AUTO;

      var priorities = new Array<string>();
      var inputSrcList = failureModeInfo.getInputPriorities();
      for(var i=0;i< inputSrcList.length;++i)
      {
        if (inputSrcList[i] == "hdmi:1")
          priorities.push("ext://hdmi:1"); 

        else if (inputSrcList[i] == "hdmi:2")
          priorities.push("ext://hdmi:2"); 

        else if (inputSrcList[i] == "hdmi:3")
          priorities.push("ext://hdmi:3"); 

        else if (inputSrcList[i] == "hdmi:4")
          priorities.push("ext://hdmi:4"); 

        else if (inputSrcList[i] == "dp:1")
          priorities.push("ext://dp:1"); 

        else if (inputSrcList[i] == "dp:2")
          priorities.push("ext://dp:2"); 

        else if (inputSrcList[i] == "dp:3")
          priorities.push("ext://dp:3"); 

        else if (inputSrcList[i] == "dp:4")
          priorities.push("ext://dp:4"); 

        else if (inputSrcList[i] == "internal_memory")
          priorities.push("ext://internal_memory");   

        else        
          priorities.push(inputSrcList[i]);   

        console.log('Priority'  + i + " : " + inputSrcList[i]);
      }
      
	    var options = {
			  failoverMode : {
			    mode: failureMode,       //Signage.FailoverMode.MANUAL,
			    priority : priorities // ///failureMode //['ext://hdmi:1','ext://hdmi:2','ext://dvi:1','ext://dp:1','ext://internal_memory']
			  }
	    };

	    // Create signage object and invoke the API with parameters.
	    var signage = new Signage();
	    signage.setFailoverMode(successCb, failureCb, options);
    }

    //------------------------------
    public promise_setFailureMode(failureModeInfo: amGeneralFailureModeInfo.am_general.A_FailureModeInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
    }


    //-----------------------------------
    public getFailureMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
	    // Callback for a successful execution.
      var  successCb = function(cbObject)
      {
        var failureModeInfo: amGeneralFailureModeInfo.am_general.A_FailureModeInfo = <amGeneralFailureModeInfo.am_general.A_FailureModeInfo>context.getObjectResult();
		    // Get failover mode. Refer to the Signage.FailoverMode for details.
        var mode = cbObject.mode;
        if (mode == Signage.FailoverMode.MANUAL)
          failureModeInfo.setMode("manual");
        else if (mode == Signage.FailoverMode.AUTO)
          failureModeInfo.setMode("auto");   

		    // Get failover input priority.
		    // This priority will determine which input will be used when the current input is lost.
		    var priority = cbObject.priority;
	
		    console.log('Failover Mode : ' + mode);		
		
		    // Priority will be returned as a sorted array where the 0th item has the most priority. 
        for(var i=0;i< priority.length;++i)
        {
          console.log('Priority' +i+ " : " + priority[i]);

          if (priority[i] == "ext://hdmi:1")
            failureModeInfo.getInputPriorities().push("hdmi:1"); 

          else if (priority[i] == "ext://hdmi:2")
            failureModeInfo.getInputPriorities().push("hdmi:2"); 

          else if (priority[i] == "ext://hdmi:3")
            failureModeInfo.getInputPriorities().push("hdmi:3"); 

          else if (priority[i] == "ext://hdmi:4")
            failureModeInfo.getInputPriorities().push("hdmi:4"); 

          else if (priority[i] == "ext://dp:1")
            failureModeInfo.getInputPriorities().push("dp:1"); 

          else if (priority[i] == "ext://dp:2")
           failureModeInfo.getInputPriorities().push("dp:2"); 

          else if (priority[i] == "ext://dp:3")
           failureModeInfo.getInputPriorities().push("dp:3"); 

          else if (priority[i] == "ext://dp:4")
            failureModeInfo.getInputPriorities().push("dp:4"); 

          else if (priority[i] == "ext://internal_memory")
            failureModeInfo.getInputPriorities().push("internal_memory");   

          else        
            failureModeInfo.getInputPriorities().push(priority[i]);   
			    
		    }
		    if (callback != null)
          callback(context);
	    };
	
	    // Callback for a failed execution.
	    // Failure callback will be invoked with the error code and the error text.
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
	
	    // Create signage object.
	    var signage = new Signage();
	    // invoke the method with callbacks.
	    signage.getFailoverMode(successCb, failureCb);

    }

    //------------------------------
    public promise_getFailureMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //--------------------
    // Intelligent Auto
    // Adjusts the size, position, and phase of the monitor's screen automatically at the recognized resolution. 
    // This feature is available only in RGB input mode (to be checked).
    //----------------------
    //----------------------------
    public setIntelligentAuto(enabledIntelligentAuto: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var successCb = function ()
      {
        console.log("setIntelligentAuto success");
        context.setBoolResult(true);
        context.setError(error);
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
        enabled : enabledIntelligentAuto //true
      };  
      
      var signage = new Signage();
      signage.setIntelligentAuto(successCb, failureCb, options);
    
    } 

    //----------------------------
    public promise_setIntelligentAuto(enabledIntelligentAuto: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    } 

    //----------------------------
    public getIntelligentAuto(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      function successCb(cbObject) 
      {
        console.log("getIntelligentAuto success");
        console.log("cbObject : " + JSON.stringify(cbObject));        
        context.setBoolResult(cbObject.enabled); //.enabled? - look stringify
        context.setError(error);
        if (callback != null)
         callback(context);
      }
    
      function failureCb(cbObject) 
      {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText; 
        console.log( " Error Code [" + errorCode + "]: " + errorText); 
        if (error != null)
          error.setError(errorCode, errorText);
        context.setError(error);
        if (callback != null)
          callback(context);
      }
        
      var signage = new Signage();	
      signage.getIntelligentAuto(successCb, failureCb);	    
    } 

    //----------------------------
    public promise_getIntelligentAuto(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    } 


    //------------------
    //  getSignageInfo supplies all general information about the signage tv
    //    like:
    // 		    Portrait mode. Refer to the Signage.OsdPortraitMode for more detail.
		//        ISM(Image Sticking Minimization) method. Refer to the Signage.IsmMethod for more detail.
		//        Digital Audio Input Mode. An object with input type/Signage.DigitalAudioInput pair.
    //        check screen information
    //-------------------

    //----------------------------
    private getStandradPotraitMode(webosPortraitMode: any)
    {
      return webosPortraitMode;
    }

    //----------------------------
    private getStandardISMMethod(webosISMMethod: any)
    {
      return webosISMMethod;
    }

    //----------------------------
    private getStandardDigitalAudioInputMode(webosDigitalAudioInputMode: any)
    {
      return webosDigitalAudioInputMode;
    }

    //----------------------------
    private getStandardCheckScreen(webosCheckScreen: any)
    {
      return webosCheckScreen;
    }
    
    //----------------------------
    public getSignageInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
	    // Callback for a successful execution.
      var successCb = function (cbObject)
      {
        var signageInfo:amGeneralSignageInfo.am_general.A_SignageInfo = <amGeneralSignageInfo.am_general.A_SignageInfo>context.getObjectResult();

		    // Portrait mode. Refer to the Signage.OsdPortraitMode for more detail.
		    var portraitMode = cbObject.portraitMode;
        signageInfo.setPortraitMode(this.getStandardPortraitMode(portraitMode));

		    // ISM(Image Sticking Minimization) method. Refer to the Signage.IsmMethod for more detail.
		    var ismMethod= cbObject.ismMethod;
        signageInfo.setISMMethod(this.getStandardISMMethod(ismMethod));
        
		    // Digital Audio Input Mode. An object with input type/Signage.DigitalAudioInput pair.
		    var digitalAudioInputMode= cbObject.digitalAudioInputMode;
        signageInfo.setDigitalAudioInputMode(this.getStandardDigitalAudioInoutMode(digitalAudioInputMode));

        signageInfo.setDigitalAudioInputMode(this.getStandardDigitalAudioInoutMode(digitalAudioInputMode));

		    console.log("portraitMode: " + portraitMode);
		    console.log("ismMethod: " + ismMethod);
		    console.log("digitalAudioInputMode: " + digitalAudioInputMode);
		    console.log("checkScreen: " + cbObject.checkScreen);
        console.log("getIntelligentAuto success");
        console.log("cbObject : " + JSON.stringify(cbObject));        

        context.setError(error);
        if (callback != null)
         callback(context);
		
	    };
	
	    // Callback for a failed execution.
	    // Failure callback will be invoked with the error code and the error text.
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
	
	    // Create the signage object.
	    var signage = new Signage();
	
	    // invoke the method with callbacks.
	    signage.getSignageInfo(successCb, failureCb);	
      
    }

    //-----------------------------
    public promise_getSignageInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    //------------------
    //  portraitMode
    //------------------

    //---------------------------
    public setPortraitMode(portraitMode: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      // Callback for a successful execution.
      // This callback will be called without any parameter.		
      var successCb = function (){
        console.log("successfully Set");

        context.setBoolResult(true);
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

        if (error != null)
          error.setError(errorCode, errorText);
        context.setError(error);
        if (callback != null)
          callback(context);

      };

      // Portrait Mode to set.
      // Refer to the Signage.OsdPortraitMode for more information.
      var options = {
          portraitMode : Signage.OsdPortraitMode.OFF
      };
      
      if(portraitMode == "ON")
        options.portraitMode = Signage.OsdPortraitMode.ON;

      // Create signage object and invoke the API with parameters.
      var signage = new Signage();
      signage.setPortraitMode(successCb, failureCb, options);
    }

    //------------------------
    public promise_setPortraitMode(portraitMode: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    //--------------------------
    public getPortraitMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      // Callback for a successful execution.
      // This callback will be called without any parameter.		
      var successCb = function (cbObject){
        console.log("successfully Set");
        //callback("Get portrait mode successful");

        var portraitMode = "OFF";
        context.setBoolResult(false);
        if(cbObject.portraitMode == Signage.OsdPortraitMode.ON)
        {
          portraitMode = "ON";
          context.setBoolResult(true);
        }
        context.setResult(portraitMode);
        
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

        if (error != null)
          error.setError(errorCode, errorText);
        context.setError(error);
        if (callback != null)
          callback(context);

      };

      var signage = new Signage();
      signage.getPortraitMode(successCb, failureCb);
    }

    //---------------------------
    public promise_getPortraitMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    //------------------
    //  studioMode
    //------------------

    //-------------------------------
    public setStudioMode(studioMode: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var successCb = function (){
        //callback("setStudioMode success");		

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
      
      var options = {
        enabled : true
      };  
      
      if(studioMode == "OFF")
        options.enabled = false;

      var signage = new Signage();
      signage.setStudioMode(successCb, failureCb, options);
    }

    //---------------------------------
    public promise_setStudioMode(studioMode: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    //----------------------------------
    public getStudioMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      function successCb(cbObject) {
        console.log("cbObject : " + JSON.stringify(cbObject));

        var studioMode = "OFF";
        context.setBoolResult(false);
        if(cbObject.enabled == true)
        {
          studioMode = "ON";
          context.setBoolResult(true);
        }

        context.setResult(studioMode);

        
        context.setError(error);
        if (callback != null)
         callback(context);
      }
    
      function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
    
        console.log ("Error Code [" + errorCode + "]: " + errorText);

        if (error != null)
          error.setError(errorCode, errorText);
        context.setError(error);
        if (callback != null)
          callback(context);
      }
        
      var signage = new Signage();	
      signage.getStudioMode(successCb, failureCb);	
    }

    //---------------------------------
    public promise_getStudioMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    //------------------
    //  setISMMethod
    //------------------
    
    //------------------------------
    public setISMMethod(ismMethod: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      	// Callback for a successful execution.
        // This callback will be called without any parameter.		
        var successCb = function (){
          console.log("successfully Set");
          //callback("Set ISM mode successful");

          context.setBoolResult(true);
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
          
          if (error != null)
            error.setError(errorCode, errorText);
          context.setError(error);
          if (callback != null)
            callback(context);
        };

        // The ISM (Image Sticking Minimization method to set).
        // Refer to the Signage.IsmMethod for more information.
        var options = {
            ismMethod : Signage.IsmMethod.COLORWASH
        };

        if(ismMethod == "COLORWASH")
          options.ismMethod = Signage.IsmMethod.COLORWASH;
        //...

        // Create signage object and invoke the API with parameters.
        var signage = new Signage();
        
        signage.setIsmMethod(successCb, failureCb, options);

    }
    
    //------------------------------
    public promise_setISMMethod(ismMethod: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    //------------------------------
    getISMMethod(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      function successCb(cbObject) {
        console.log("cbObject : " + JSON.stringify(cbObject));

        var ismMethod = "";
        if(cbObject.ismMethod == Signage.IsmMethod.COLORWASH)
          ismMethod = "COLORWASH";
        //..

        context.setResult(ismMethod);
        context.setBoolResult(true);

        context.setError(error);
        if (callback != null)
         callback(context);
      }
    
      function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
    
        console.log ("Error Code [" + errorCode + "]: " + errorText);

        if (error != null)
          error.setError(errorCode, errorText);
        context.setError(error);
        if (callback != null)
          callback(context);
      }
        
      var signage = new Signage();	
      signage.getIsmMethod(successCb, failureCb);	
    }
    
    //------------------------------
    promise_getISMMethod(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    //------------------
    //  setTileInfo
    //
    //You can configure the integrated screen in the same way as each screen is configured.
    // To use this function
    //    - Must be used with multiple monitors.
    //    - Must be operated after connecting the monitors using DP Cable and distributor.
    //    - Tile mode: row x column (r = 1 to 15, c = 1 to 15)
    //    - 15 x 15 available
    //-- Row (1-15)
    //   Set the number of Tile rows.
    //-- Column (1-15)
    //   Set the number of Tile columns.
    //-- Tile ID (1-225)
    //   Set an ID for the Tile.
    // The ID you selected will be displayed on the screen.
    //-- Natural
    //   For more natural display, the image is partly omitted to account for the distance between the screens.
    //-- Reset
    //   Resets the Tile Mode option.
    //    If you select Tile Reset, all Tile settings are reset and the screen returns to the Full Screen Mode.
    //------------------

    //------------------------------
    public setTileInfo(tileInfo: amGeneralTileInfo.am_general.A_TileInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      // Callback for a successful execution.
      // This callback will be called without any parameter.		
      var successCb = function (){
        console.log("successfully Set");
        //callback("Set tile mode successful");

        context.setBoolResult(true);
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
        
        if (error != null)
          error.setError(errorCode, errorText);
        context.setError(error);
        if (callback != null)
          callback(context);
      };
      
      // setTileInfo parameters.
      // enable: Enable/diable set tile info.
      // row : number of rows. (1~15)
      // column : number of columns. (1~15)
      // tileId : Tile id for this monitor (1 ~ row * column)
      // naturalMode : Enable/diable naturalMode
      var options = {
            tileInfo: {
                    enabled: true,
                    row : 2,
                    column : 2,
                    tileId: 2,
                    naturalMode : true
          }
        };

        options.tileInfo.enabled = tileInfo.isEnabled();
        options.tileInfo.row = tileInfo.getRow();
        options.tileInfo.column = tileInfo.getColumn();
        options.tileInfo.tileId = tileInfo.getTileId();
        options.tileInfo.naturalMode = tileInfo.getNaturalMode();
      
      // Create signage object and invoke the API with parameters.	
      var signage = new Signage();
      signage.setTileInfo(successCb, failureCb, options);
    }


    //------------------------------
    public promise_setTileInfo(tileInfo: amGeneralTileInfo.am_general.A_TileInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    //------------------------------
    public getTileInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      // Callback for a successful execution.
      var successCb = function (cbObject){

        var tileInfo:amGeneralTileInfo.am_general.A_TileInfo = <amGeneralTileInfo.am_general.A_TileInfo>context.getObjectResult();

        // Enable/Disable tile mode.
        var enabled = cbObject.enabled;
        tileInfo.setEnabled(enabled);
        
        // Total number of rows.		 
        var row = cbObject.row;
        tileInfo.setRow(row);

        // Total number of columns.		 		 
        var column = cbObject.column;
        tileInfo.setColumn(column);

        // The tile id for this monitor.
        var tileId = cbObject.tileId;
        tileInfo.setTileId(tileId);

        // Enable/Disable natural mode.
        var naturalMode = cbObject.naturalMode;
        tileInfo.setNaturalMode(naturalMode);

        console.log("enable: " + enabled);
        console.log("row: " + row);	
        console.log("column: " + column);
        console.log("tileId: " + tileId);	
        console.log("naturalMode: " + naturalMode);	
        
        context.setBoolResult(true);
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
        
        if (error != null)
          error.setError(errorCode, errorText);
        context.setError(error);
        if (callback != null)
          callback(context);
      };
      
      // Create the signage object.	
      var signage = new Signage();

      // invoke the method with callbacks.
      signage.getTileInfo(successCb, failureCb);	

    }

    //------------------------------
    public promise_getTileInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    //------------------
    //  register/unregister/get Monitoring Info
    //-----------------

    //------------------------------
    public registerSystemMonitorInfo(systemMonitoringInfo: amGeneralSystemMonitorInfo.am_general.A_SystemMonitorInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      	// Callback for a successful execution.
        // This callback will be called without any parameter.		
        var successCb = function (){
          console.log("successfully Set");

          context.setBoolResult(true);
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
          
          if (error != null)
            error.setError(errorCode, errorText);
          context.setError(error);
          if (callback != null)
            callback(context);
        };

        // Event Handelr callback.
        // Thie function will be invoked when system events are emitted.
        // Event type will have event source, event type, and event data as its attributes.
        // For more information on the Event type and event data, refer to Signage.EventType and Signage.MonitoringSource for event source.
        var eventHandlercb = function(event){
          console.log("Received Event from : " + event.source);
          console.log("Event Type is : " + event.type);
          console.log("Additional Info : " + event.data);
        }
        
        // registerSystemMonitor parameters.
        // If any of the input value for the monitorConfiguration is true, events from that input source will be emitted.
        // Those events will be handled by the event handler call back method.
        var options = {
            monitorConfiguration : {
              fan: true,
              signal : true,
              lamp : true,
              screen : true,
              temperature: true
            },
            eventHandler : eventHandlercb				
        };

        options.monitorConfiguration.fan = systemMonitoringInfo.isFanMonitored();
        options.monitorConfiguration.signal = systemMonitoringInfo.isSignalMonitored();
        options.monitorConfiguration.lamp = systemMonitoringInfo.isLampMonitored();
        options.monitorConfiguration.screen = systemMonitoringInfo.isScreenMonitored();
        options.monitorConfiguration.temperature = systemMonitoringInfo.isTemperatureMonitored();

        // Create signage object and invoke the API with parameters.
        var signage = new Signage();
        signage.registerSystemMonitor(successCb, failureCb, options);

    }

    //------------------------------
    public promise_registerSystemMonitorInfo(systemMonitoringInfo: amGeneralSystemMonitorInfo.am_general.A_SystemMonitorInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //------------------------------
    public unregisterSystemMonitorInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
          // Callback for a successful execution.
          // This callback will be called without any parameter.

          var successCb = function() {

            console.log("successfully unregister");
            
            context.setBoolResult(true);
            context.setError(error);
            if (callback != null)
              callback(context);
        };

        // Callback for a failed execution.
        // Failure callback will be invoked with the error code and the error text.

        var failureCb = function(cbObject) {

            var errorCode = cbObject.errorCode;
            var errorText = cbObject.errorText;
            console.log(" Error Code [" + errorCode + "]: " + errorText);

            if (error != null)
              error.setError(errorCode, errorText);
            context.setError(error);
            if (callback != null)
              callback(context);

        };

        // Create signage object and invoke the API with parameters.
        var signage = new Signage();
        signage.unregisterSystemMonitor(successCb, failureCb);


    }

    //------------------------------
    public promise_unregisterSystemMonitorInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    //------------------------------
    public getSystemMonitorInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      	// Callback for a successful execution.
        var successCb = function (cbObject){

          var systemMonitoringInfo:amGeneralSystemMonitorInfo.am_general.A_SystemMonitorInfo = <amGeneralSystemMonitorInfo.am_general.A_SystemMonitorInfo>context.getObjectResult();

          // True if monitoring for fan events, false otherwise.
          var fan =  cbObject.fan;
          systemMonitoringInfo.setFanMonitor(fan);
          
          // True if monitoring for signal events, false otherwise.		
          var signal =  cbObject.signal;
          systemMonitoringInfo.setSignalMonitor(signal);
          
          // True if monitoring for lamp events, false otherwise.		
          var lamp =  cbObject.lamp;
          systemMonitoringInfo.setLampMonitor(lamp);
          
          // True if monitoring for screen events, false otherwise.
          var screen =  cbObject.screen;
          systemMonitoringInfo.setScreenMonitor(screen);

          // True if monitoring for temperature events, false otherwise.
          var temperature =  cbObject.temperature;		
          systemMonitoringInfo.setTemperatureMonitor(temperature);
          
          console.log("Monitor Fan: " + fan);
          console.log("Monitor signal: " + signal);
          console.log("Monitor lamp: " + lamp);
          console.log("Monitor screen: " + screen);
          console.log("Monitor temperature: " + temperature);

          context.setBoolResult(true);
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
          
          if (error != null)
            error.setError(errorCode, errorText);
          context.setError(error);
          if (callback != null)
            callback(context);
        };
        
        // Create the signage object.	
        var signage = new Signage();

        // invoke the method with callbacks.
        signage.getSystemMonitoringInfo(successCb, failureCb);	

    }

    //------------------------------
    public promise_getSystemMonitorInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

  

    //------------------
    //  get usage data : uptime, etc.
    //------------------

    //------------------------------
    public getUsageData(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      	// Callback for a successful execution.
        var successCb = function (cbObject){
          // Get the up time data, in hour.
          var uptime= cbObject.uptime;
          
          // Get the total used time, in hour.
          var totalUsed= cbObject.totalUsed;

          console.log("Uptime: " + uptime);
          console.log("Total Used: " + totalUsed);
              
          context.setBoolResult(true);
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
          
          if (error != null)
            error.setError(errorCode, errorText);
          context.setError(error);
          if (callback != null)
            callback(context);
        };
        
        // Create the signage object.		
        var signage = new Signage();

        // invoke the method with callbacks.
        signage.getUsageData(successCb, failureCb);	

      
    }

    //------------------------------
    public promise_getUsageData(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }



    //---------------------
    //  get usage permissions
    //----------------------

    //------------------------------
    public setUsagePermissions(usagePermissions: amGeneralUsagePermissions.am_general.A_UsagePermissions, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      	// Callback for a successful execution.
        // This callback will be called without any parameter.		
        var successCb = function (){
          console.log("successfully Set");

          context.setBoolResult(true);
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

          if (error != null)
            error.setError(errorCode, errorText);
          context.setError(error);
          if (callback != null)
            callback(context);

        };

        //Usage Permission parameters.
        // remoteKeyOperationMode : Usage permission policy for the remote key inputs. refer to the Signage.KeyOperationMode for available modes.
        // localKeyOperationMode : Usage permission policy for the built in local key inputs. refer to the Signage.KeyOperationMode for available modes.
        var options = {
            policy: {
              remoteKeyOperationMode: Signage.KeyOperationMode.POWER_ONLY,
              localKeyOperationMode: Signage.KeyOperationMode.POWER_ONLY,
            }
        };

        if(usagePermissions.getRemoteKeyOperationMode() == "POWER_ONLY")
          options.policy.remoteKeyOperationMode = Signage.KeyOperationMode.POWER_ONLY;
        // ...

        if(usagePermissions.getLocalKeyOperationMode() == "POWER_ONLY")
          options.policy.localKeyOperationMode = Signage.KeyOperationMode.POWER_ONLY;
        // ...

        // Create signage object and invoke the API with parameters.
        var signage = new Signage();
        signage.setUsagePermission(successCb, failureCb, options);

      
    }

    //------------------------------
    public promise_setUsagePermissions(usagePermissions: amGeneralUsagePermissions.am_general.A_UsagePermissions, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    //------------------------------
    public getUsagePermissions(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      // Callback for a successful execution.
      var successCb = function (cbObject){

        var usagePermissions:amGeneralUsagePermissions.am_general.A_UsagePermissions = <amGeneralUsagePermissions.am_general.A_UsagePermissions>context.getObjectResult();
        // Set the remote key control mode. Refer to the Signage.KeyOperationMode for more detail.
        var remoteKeyOperationMode = cbObject.remoteKeyOperationMode;
        if(remoteKeyOperationMode == Signage.KeyOperationMode.POWER_ONLY)
          usagePermissions.setRemoteKeyOperationMode("POWER_ONLY");
        //..
        
        // Set the local built-in key control mode. Refer to the Signage.KeyOperationMode for more detail.
        var localKeyOperationMod = cbObject.localKeyOperationMod;
        if(localKeyOperationMod == Signage.KeyOperationMode.POWER_ONLY)
          usagePermissions.setLocalKeyOperationMode("POWER_ONLY");
        //..

        console.log("remoteKeyOperationMode: " + remoteKeyOperationMode);
        console.log("localKeyOperationMode: " + localKeyOperationMod);
        
        context.setBoolResult(true);
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
        
        if (error != null)
          error.setError(errorCode, errorText);
        context.setError(error);
        if (callback != null)
          callback(context);
      };

      // Create the signage object.		
      var signage = new Signage();

      // invoke the method with callbacks.
      signage.getUsagePermission(successCb, failureCb);	

    }


      

    //------------------------------
    public promise_getUsagePermissions(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
    }      	
  } //--- end class

}
