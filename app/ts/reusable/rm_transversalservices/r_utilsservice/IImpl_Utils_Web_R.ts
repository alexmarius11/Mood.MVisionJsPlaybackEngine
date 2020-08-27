import amTransversalServicesIUtilsWeb = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_Utils_Web");

import rmTransversalServices = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/R_UtilsService");
                                                     
                                                     
export module rm_transversalservices
{
  export class IImpl_Utils_Web_R implements amTransversalServicesIUtilsWeb.am_transversalservices.I_Utils_Web
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServices.rm_transversalservices.R_UtilsService;

    //----------- constructor 
    constructor(owner: rmTransversalServices.rm_transversalservices.R_UtilsService)  
    {
      this._owner = owner;  
    }
  }
} 