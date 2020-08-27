import amTransversalServicesIUtilsNumbers = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_Utils_Numbers");

import rmTransversalServices = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/R_UtilsService");
                                                     
                                                     
export module rm_transversalservices
{
  export class IImpl_Utils_Numbers_R implements amTransversalServicesIUtilsNumbers.am_transversalservices.I_Utils_Numbers
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