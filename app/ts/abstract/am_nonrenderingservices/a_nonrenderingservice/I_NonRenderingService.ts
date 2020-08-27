import amNonRenderingServices = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");


export module am_nonrenderingservices
{
  export interface I_NonRenderingService extends amNonRenderingServices.am_general.I_Interface
  {
    _name: string;    
  }
} 