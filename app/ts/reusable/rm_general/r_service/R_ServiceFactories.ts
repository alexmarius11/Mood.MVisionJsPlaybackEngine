
import amGeneralServiceFactories = require("../../../../../app/ts/abstract/am_general/a_service/A_ServiceFactories");

import amGeneralServiceFactory = require("../../../../../app/ts/abstract/am_general/a_service/AFactory_Service");
import amGeneralError          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_ServiceFactories  extends rmGeneralEntity.rm_general.R_Entity
                                   implements amGeneralServiceFactories.am_general.A_ServiceFactories
  {
    //--- data members
     _list: Array<amGeneralServiceFactory.am_general.AFactory_Service>

    //----------- constructor 
    constructor()  
    {  
      super();
      this._list = new Array<amGeneralServiceFactory.am_general.AFactory_Service>();
    }

    //----------------------------
    public getServiceFactories(error: amGeneralError.am_general.A_Error): Array<amGeneralServiceFactory.am_general.AFactory_Service>
    {
      return this._list;
    }

    //-------------------------------
    public getServiceFactoryByFactoryName(factoryName: string, error: amGeneralError.am_general.A_Error) : amGeneralServiceFactory.am_general.AFactory_Service
    {
      this._list.forEach( (crtServiceFactory, index) => {
        if(crtServiceFactory.getFactoryName() == factoryName) 
          return crtServiceFactory;
        });
        return null;
    }


    //--------------------------
    public addServiceFactory(aServiceFactory: amGeneralServiceFactory.am_general.AFactory_Service, error: amGeneralError.am_general.A_Error) : void
    {
       this._list.push(aServiceFactory);
    }
    
    //--------------------------
    public removeServiceFactoryByFactoryName(factoryName: string, error: amGeneralError.am_general.A_Error) : number
    {
      this._list.forEach( (crtServiceFactory, index) => {
      if(crtServiceFactory.getFactoryName() == factoryName) 
        this._list.splice(index,1);
        return index;
      });
      return -1;
    }
    
  }
} 



