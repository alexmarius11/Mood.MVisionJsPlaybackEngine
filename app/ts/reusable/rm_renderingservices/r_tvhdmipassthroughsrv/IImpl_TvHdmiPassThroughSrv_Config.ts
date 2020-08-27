import amITvHdmiPassThroughSrvConfig = require("../../../../../app/ts/abstract/am_renderingservices/a_tvhdmipassthroughsrv/I_TvHdmiPassThroughSrv_Config");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_tvhdmipassthroughsrv/R_TvHdmiPassThroughSrv");
                                                     
                                                     

export module rm_renderingservices
{
  export class IImpl_TvHdmiPassThroughSrv_Config implements amITvHdmiPassThroughSrvConfig.am_renderingservices.I_TvHdmiPassThroughSrv_Config
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.R_TvHdmiPassThroughSrv;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.R_TvHdmiPassThroughSrv)  
    {
      this._owner = owner;  
    }
  }
} 