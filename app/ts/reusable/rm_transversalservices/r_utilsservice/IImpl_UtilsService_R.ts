import amTransversalServices = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_UtilsService");

import rmTransversalServices = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/R_UtilsService");
                                                     
                                                     
export module rm_transversalservices
{
  export class IImpl_UtilsService_R implements amTransversalServices.am_transversalservices.I_UtilsService
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