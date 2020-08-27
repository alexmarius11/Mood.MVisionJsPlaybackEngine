import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_TimeSetup");

import nmTransversalServicesTizen = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_tizen/N_SDK_Tizen");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralDateTime   = require("../../../../../app/ts/abstract/am_general/a_datetime/A_DateTime");
import amGeneralTimeZone   = require("../../../../../app/ts/abstract/am_general/a_timezone/A_TimeZone");
import { createDeflateRaw } from "zlib";
import { StringDecoder } from "string_decoder";

//import * as tizenTest from "./tizentest";

declare var tizen : any;
/* INFO
Other than the day parameter, which begins from 1, all parameters of the TZDate constructor begin from 0. 
This implies that, for the months of a year, the value for January is 0, for February, it is 1, and for December, it is 11. 
Therefore it may be convenient to add 1 to the returned value of tizen.time.TZDate.getMonth() method.
*/
export module nm_transversalservices
{

    
  export class IImpl_SDK_TimeSetup_Tizen implements amGeneral.am_transversalservices.I_SDK_TimeSetup
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: nmTransversalServicesTizen.nm_transversalservices.N_SDK_Tizen;

    //----------- constructor 
    constructor(owner: nmTransversalServicesTizen.nm_transversalservices.N_SDK_Tizen)  
    {

      this._owner = owner;  
    }

    //---------------------------------------
    //             CrtTime set/get
    //---------------------------------------

    //--------------------
    public setCrtDateTime(crtDateTime: amGeneralDateTime.am_general.A_DateTime, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var year = crtDateTime.getYear();
      var month = crtDateTime.getMonth();
      var day = crtDateTime.getDay();
      var hour = crtDateTime.getHour();
      var minute = crtDateTime.getMinutes();
      var sec = crtDateTime.getSeconds();
      try{
        var newDate = new tizen.TZDate(year, month, day, hour, minute, sec, );
        context.setBoolResult(true);
        if (callback != null)
          callback(context);
      }
      catch(error){
        error.setError(error.name, error.message);
        context.setError(error);
        if (callback != null)
          callback(context);
      }
    }

    //--------------------
    public promise_setCrtDateTime(crtDateTime: amGeneralDateTime.am_general.A_DateTime, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //--------------------
    public getCrtDateTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

      try{
        var currentTime = tizen.time.getCurrentDateTime();
        context.setResult(currentTime.toLocaleString());
        if (callback != null)
          callback(context);
      }
      catch (error){
        error.setError(error.name, error.message);
        context.setError(error);
        if (callback != null)
          callback(context);
      }
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
      var continent = crtTimeZone.getContinent();
      var city = crtTimeZone.getCity();
      var country = crtTimeZone.getCountry();
      var resDateTime: amGeneralDateTime.am_general.A_DateTime;
      var getTimeZoneCallback = function(ctx: amGeneralContext.am_general.A_Context){
         resDateTime = <amGeneralDateTime.am_general.A_DateTime>ctx.getObjectResult();
      }

      try{
          this.getCrtDateTime(error,context,getTimeZoneCallback);
          var newDate = new tizen.TZDate(resDateTime.getYear(), resDateTime.getMonth(), resDateTime.getDay(), 
                                          resDateTime.getHour(), resDateTime.getMinutes(), resDateTime.getSeconds(),
                                           null, continent + "/" + country + "/" + city);
      }
      catch (error){
        error.setError(error.name, error.message);
        context.setError(error);
        if (callback != null)
          callback(context);
      }
    }

    //----------------------------
    public promise_setTimeZone(crtTimeZone: amGeneralTimeZone.am_general.A_TimeZone, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    public getTimeZone(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      try{
        var zone = tizen.time.getLocalTimezone();
        context.setResult(zone);
        if (callback != null)
          callback(context);
      }
      catch (error){
        error.setError(error.name, error.message);
        context.setError(error);
        if (callback != null)
          callback(context);
      }
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

  }
} 


    
