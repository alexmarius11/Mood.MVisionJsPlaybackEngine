import amConfigurationServices = require("../../../abstract/am_configurationservices/a_platformconfigurator/I_PlatformConfigurator_StartupConfiguration");

import amGeneral2  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneral3  = require("../../../../../app/ts/abstract/am_general/a_property/A_Property");
import amGeneral4 = require("../../../../../app/ts/abstract/am_general/a_property/A_Properties");

import rmTransversalServices = require("./R_PlatformConfigurator");
                                                                                                        

export module rm_configurationservices
{
  export class IImpl_PlatformConfigurator_StartupConfiguration_R implements amConfigurationServices.am_configurationservices.I_PlatformConfigurator_StartupConfiguration
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServices.rm_configurationservices.R_PlatformConfigurator;

    //----------- constructor 
    constructor(owner: rmTransversalServices.rm_configurationservices.R_PlatformConfigurator)  
    {
      this._owner = owner;  
    }

    //-----------------------------
    public getProperties(error: amGeneral2.am_general.A_Error) : amGeneral4.am_general.A_Properties
    {
      return this._owner.getProperties(error);
    }
    
    //-----------------------------
    public getProperty( propertyName : string,
                        error        : amGeneral2.am_general.A_Error) : amGeneral3.am_general.A_Property
    {
      return this._owner.getProperty(propertyName, error);
    }

    //-------------------------------
    public getOS() : string                        // "os" property
    {
      return this._owner.getOS();
    }

    //----------------------------------
    public getFirmwareVersion() : string           // "firmware" property = means also with "os version" property
    {
      return this._owner.getFirmwareVersion();
    }

    //----------------------------------
    public getCustomerId() : string                // "customerid used for customized solutions 
    {
      return this._owner.getCustomerId();
    }

    //------------------------------------
    public getAppBasePath() : string               // "appbasepath" the base folder-path of the application (ex. on windows "d:/moodmedia")
    {
      return this._owner.getAppBasePath();
    }

    //--------------------------------------
    public getMediaFilesBasePath() : string        // "mediafilesbasepath" the base folder-path of the media_files (ex. on windows "d:/media_files")
    {
      return this._owner.getMediaFilesBasePath();
    }
  }
} 