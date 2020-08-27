import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_TimeSetup");

import nmTransversalServices = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/N_SDK_WebOS");
import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralDateTime   = require("../../../../../app/ts/abstract/am_general/a_datetime/A_DateTime");
import amGeneralTimeZone   = require("../../../../../app/ts/abstract/am_general/a_timezone/A_TimeZone");

import "./cordova/cordova.webos";
import "./cordova/configuration";
import "./cordova/time";

declare var Configuration : any;

export module nm_transversalservices
{
  export class IImpl_SDK_TimeSetup_WebOS implements amGeneral.am_transversalservices.I_SDK_TimeSetup
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

    //---------------------------------------
    //             CrtTime set/get
    //---------------------------------------

    //--------------------
    public setCrtDateTime(crtDateTime: amGeneralDateTime.am_general.A_DateTime, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
        var options = {
           year : crtDateTime.getYear(),
           month : crtDateTime.getMonth(),
           day : crtDateTime.getDay(),
           hour : crtDateTime.getHour(),
           minute : crtDateTime.getMinutes(),
           sec : crtDateTime.getSeconds()
        }

        function successCb() {
          callback("setCurrentTime success");
          context.setError(error);
          callback.setBoolResult(true);
          if (callback != null)
            callback(context);
        }
    
        function failureCb(cbObject) {
            var errorCode = cbObject.errorCode;
            var errorText = cbObject.errorText;
            if (error != null)
              error.setError(errorCode, errorText);
            context.setError(error);
            console.log ("Error Code [" + errorCode + "]: " + errorText);
            if (callback != null)
              callback(context);
        }
        var conf = new Configuration();
        conf.setCurrentTime(successCb, failureCb, options);          
    }

    //--------------------
    public promise_setCrtDateTime(crtDateTime: amGeneralDateTime.am_general.A_DateTime, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //--------------------
    public getCrtDateTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var owner = this;
      var successCb = function (cbObject)
      {
        //var data_text = cbObject.data;
        //context.setResult(data_text);
        context.setError(error);
        var resDateTime = <amGeneralDateTime.am_general.A_DateTime>context.getObjectResult(); 
        resDateTime.setYear(cbObject.year) ;
        resDateTime.setMonth(cbObject.month) ;
        resDateTime.setDay(cbObject.day) ;
        resDateTime.setHour(cbObject.hour) ;
        resDateTime.setMinutes(cbObject.minute) ;
        resDateTime.setSeconds(cbObject.sec) ;
        resDateTime.setMilliseconds(0) ;
        console.log("cbObject : " + JSON.stringify(cbObject));
        //document.getElementById("testreadfile").innerHTML += "<h3>Current Time is : " + JSON.stringify(cbObject) + "</h3>";
        //console.log(context.getObjectResult()); 
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

      var conf = new Configuration();
      conf.getCurrentTime(successCb, failureCb);
    }

    //---------------------
    public promise_getCrtDateTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //---------------------------------------
    //             TimeZone set/get
    //---------------------------------------

    //---------------------
    public setTimeZone(crtTimeZone: amGeneralTimeZone.am_general.A_TimeZone, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
  
      var timeZone = {
        continent : crtTimeZone.getContinent(), //"Asia",
        country   : crtTimeZone.getCountry(),   //"South Korea",
        city      : crtTimeZone.getCity()       //"Seoul"
      };
      
      var options = {
         timeZone : timeZone
      };
      
      function successCb() {
        console.log( "Ccurrent TimeZone successfully set"); 
        context.setError(error);
        if (callback != null)
          callback(context);
      }
  
      function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText; 
        console.log( " Error Code [" + errorCode + "]: " + errorText); 
        if (error != null)
          error.setError(errorCode, errorText);
        context.setError(error);
        if (callback != null)
          callback(context);
      }
      var conf = new Configuration();
      conf.setTimeZone(successCb, failureCb, options);
    }
  

    //----------------------------
    public promise_setTimeZone(crtTimeZone: amGeneralTimeZone.am_general.A_TimeZone, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    public getTimeZone(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var owner = this;
      var successCb = function (cbObject)
      {
        context.setError(error);
        var resTimeZone = <amGeneralTimeZone.am_general.A_TimeZone>context.getObjectResult(); 
        //document.getElementById("testreadfile").innerHTML += JSON.stringify(cbObject);
        resTimeZone.setContinent(cbObject.timeZone.continent) ;
        resTimeZone.setCountry(cbObject.timeZone.country) ;
        resTimeZone.setCity(cbObject.timeZone.city) ;
        console.log("cbObject : " + JSON.stringify(cbObject));
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

      var conf = new Configuration();
      conf.getTimeZone(successCb, failureCb);
    
    }
    

    //-----------------------------
    public promise_getTimeZone(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-------------------------
    public getTimeZoneList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //--------------------------------
    public promise_getTimeZoneList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }


  } //--- end class

}
