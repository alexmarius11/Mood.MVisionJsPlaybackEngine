import amGeneral     = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");

import rmGeneralEntity     = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_FactoryDescription  extends    rmGeneralEntity.rm_general.R_Entity
                                     implements amGeneral.am_general.A_FactoryDescription
  {
    //--- properties
    _factoryName: string;
    _serviceName: string;
    _abstractName: string;
    _instanceName: string;
  
    //----------- constructor 
    constructor()  
    {  
      super();
      this._factoryName  = "";
      this._serviceName  = "";
      this._abstractName  = "";
      this._instanceName  = "";
    }

    //----------------
    public setNames(factoryName : string, serviceName : string, abstractName : string, instanceName : string) : void
    {
      this._factoryName  = factoryName;
      this._serviceName  = serviceName;
      this._abstractName = abstractName;
      this._instanceName = instanceName;
    }
  }
} 