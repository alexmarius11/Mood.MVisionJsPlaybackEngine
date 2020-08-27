import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneral2  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneral3 = require("../../../../../app/ts/abstract/am_general/a_property/A_Property");
import amGeneral4 = require("../../../../../app/ts/abstract/am_general/a_property/A_Properties");

export module am_configurationservices
{
  export interface I_PlatformConfigurator_StartupConfiguration extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    getProperties(error: amGeneral2.am_general.A_Error) : amGeneral4.am_general.A_Properties;
    getProperty( propertyName : string, 
                 error        : amGeneral2.am_general.A_Error) : amGeneral3.am_general.A_Property;

    getOS() : string;                        // "os" property
    getFirmwareVersion() : string ;          // "firmware" property = means also with "os version" property
    getCustomerId() : string ;               // "customerid used for customized solutions 
    getAppBasePath() : string;               // "appbasepath" the base folder-path of the application (ex. on windows "d:/moodmedia")
    getMediaFilesBasePath() : string;        // "mediafilesbasepath" the base folder-path of the media_files (ex. on windows "d:/media_files")

  }
} 