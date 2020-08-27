import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_TimeSetup");

import nmTransversalServices = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/N_SDK_NodeJs");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralDateTime   = require("../../../../../app/ts/abstract/am_general/a_datetime/A_DateTime");
import amGeneralTimeZone   = require("../../../../../app/ts/abstract/am_general/a_timezone/A_TimeZone");

export module nm_transversalservices
{
  export class IImpl_SDK_TimeSetup_NodeJs implements amGeneral.am_transversalservices.I_SDK_TimeSetup
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: nmTransversalServices.nm_transversalservices.N_SDK_NodeJs;

    //----------- constructor 
    constructor(owner: nmTransversalServices.nm_transversalservices.N_SDK_NodeJs)  
    {
      this._owner = owner;  
    }


        //---------------------------------------
    //             CrtTime set/get
    //---------------------------------------

    //--------------------
    public setCrtDateTime(crtDateTime: amGeneralDateTime.am_general.A_DateTime, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //--------------------
    public promise_setCrtDateTime(crtDateTime: amGeneralDateTime.am_general.A_DateTime, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //--------------------
    public getCrtDateTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

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

    }

    //----------------------------
    public promise_setTimeZone(crtTimeZone: amGeneralTimeZone.am_general.A_TimeZone, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    public getTimeZone(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

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