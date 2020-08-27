import amConfigurationServices  = require("../../../abstract/am_configurationservices/a_platformconfigurator/I_PlatformConfigurator_PlatformConfiguration");

import amGeneral3 = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneral4 = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescriptions");
import amGeneral5 = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");

import rmTransversalServices = require("./R_PlatformConfigurator");
                                                                                                        

export module rm_configurationservices
{
  export class IImpl_PlatformConfigurator_PlatformConfiguration_R implements amConfigurationServices.am_configurationservices.I_PlatformConfigurator_PlatformConfiguration
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServices.rm_configurationservices.R_PlatformConfigurator;

    //----------- constructor 
    constructor(owner: rmTransversalServices.rm_configurationservices.R_PlatformConfigurator)  
    {
      this._owner = owner;  
    }

    //--------------------------------------
    public getServiceFactoryDescriptions(error: amGeneral3.am_general.A_Error): amGeneral4.am_general.A_FactoryDescriptions
    {
      return this._owner.getServiceFactoryDescriptions(error);
    }

    //--------------------------------------
    public getServiceFactoryDescription(factoryName: string, error: amGeneral3.am_general.A_Error): amGeneral5.am_general.A_FactoryDescription
    {
      return this._owner.getServiceFactoryDescription(factoryName, error);
    }

    //--------------------------------------
    public getEntityFactoryDescriptions(error: amGeneral3.am_general.A_Error): amGeneral4.am_general.A_FactoryDescriptions
    {
      return this._owner.getEntityFactoryDescriptions(error);      
    }

    //--------------------------------------
    public getEntityFactoryDescription(factoryName: string, error: amGeneral3.am_general.A_Error):  amGeneral5.am_general.A_FactoryDescription
    {
      return this._owner.getEntityFactoryDescription(factoryName, error);
    }

  }
} 