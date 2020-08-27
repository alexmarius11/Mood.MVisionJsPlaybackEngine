import amConfigurationServices = require("../../../abstract/am_configurationservices/a_platformconfigurator/I_PlatformConfigurator_LoadConfigurations");

import amGeneral2 = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmTransversalServices = require("./R_PlatformConfigurator");
                                                                                                        

export module rm_configurationservices
{
  export class IImpl_PlatformConfigurator_LoadConfigurations_R implements amConfigurationServices.am_configurationservices.I_PlatformConfigurator_LoadConfigurations
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServices.rm_configurationservices.R_PlatformConfigurator;

    //----------- constructor 
    constructor(owner: rmTransversalServices.rm_configurationservices.R_PlatformConfigurator)  
    {
      this._owner = owner;  
    }

    //------------
    public loadConfigurationFiles(error: amGeneral2.am_general.A_Error)
    {
      return this._owner.loadConfigurationFiles(error);
    }

  }
} 