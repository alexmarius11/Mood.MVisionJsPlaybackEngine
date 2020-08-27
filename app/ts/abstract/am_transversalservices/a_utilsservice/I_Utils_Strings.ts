import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");


export module am_transversalservices
{
  export interface I_Utils_Strings extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    getPrevContent(input: string, marker: string) : string;
    getNextContent(input: string, marker: string) : string;
  
    getFieldValue(input: string, startmarker: string, endmarker: string) : string;
  }

} 