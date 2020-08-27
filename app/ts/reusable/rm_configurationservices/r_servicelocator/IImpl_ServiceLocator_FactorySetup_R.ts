import amConfigurationServices = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/I_ServiceLocator_FactorySetup");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescriptions");
import amGeneralServiceFactory     = require("../../../../../app/ts/abstract/am_general/a_service/AFactory_Service");
import amGeneralEntityFactory      = require("../../../../../app/ts/abstract/am_general/a_entity/AFactory_Entity");

import rmTransversalServices = require("../../../../../app/ts/reusable/rm_configurationservices/r_servicelocator/R_ServiceLocator");
                                                                                                        

export module rm_configurationservices
{
  export class IImpl_ServiceLocator_FactorySetup_R implements amConfigurationServices.am_configurationservices.I_ServiceLocator_FactorySetup
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServices.rm_configurationservices.R_ServiceLocator;

    //----------- constructor 
    constructor(owner: rmTransversalServices.rm_configurationservices.R_ServiceLocator)  
    {
      this._owner = owner;  
    }

    //------------------
    public setupServiceFactories(factoryDescriptions: amGeneralFactoryDescription.am_general.A_FactoryDescriptions, error: amGeneralError.am_general.A_Error):  void
    {
      return this._owner.setupServiceFactories(factoryDescriptions, error);
    }

    //------------------
    public setupEntityFactories(factoryDescriptions: amGeneralFactoryDescription.am_general.A_FactoryDescriptions, error: amGeneralError.am_general.A_Error):  void
    {
       return this._owner.setupEntityFactories(factoryDescriptions, error);
    }

    //------------------
    public addServiceFactory(aServiceFactory: amGeneralServiceFactory.am_general.AFactory_Service, error: amGeneralError.am_general.A_Error):  void
    {
       return this._owner.addServiceFactory(aServiceFactory, error);
    }

    //------------------
    public addEntityFactory(aEntityFactory: amGeneralEntityFactory.am_general.AFactory_Entity, error: amGeneralError.am_general.A_Error):  void
    {
       return this._owner.addEntityFactory(aEntityFactory, error);
    }
    
  }
} 