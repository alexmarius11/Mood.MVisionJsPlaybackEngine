import amGeneralNetworkProperties     = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkProperties");
import amGeneralNetworkCardProperties  = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkCardProperties");
import amGeneralNetworkProxyProperties = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkProxyProperties");
import amGeneralWifiConnectionInfo     = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_WifiConnectionInfo");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
import rmGeneralNetworkCardProperties  = require("../../../../../app/ts/reusable/rm_general/r_networkproperties/R_NetworkCardProperties");
import rmGeneralNetworkProxyProperties = require("../../../../../app/ts/reusable/rm_general/r_networkproperties/R_NetworkProxyProperties");
import rmGeneralWifiConnectionInfo     = require("../../../../../app/ts/reusable/rm_general/r_networkproperties/R_WifiConnectionInfo");

export module rm_general
{
  export class R_NetworkProperties extends rmGeneralEntity.rm_general.R_Entity
                                   implements amGeneralNetworkProperties.am_general.A_NetworkProperties
  {

    _wiredNetCardProp :  amGeneralNetworkCardProperties.am_general.A_NetworkCardProperties;
    _wifiNetCardProp  :  amGeneralNetworkCardProperties.am_general.A_NetworkCardProperties;
    _proxyNetProp     :  amGeneralNetworkProxyProperties.am_general.A_NetworkProxyProperties; 
    _wifiConnInfo     :  amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo; 

    //----------- constructor 
    constructor()  
    {  
      super();
      this._wiredNetCardProp = new rmGeneralNetworkCardProperties.rm_general.R_NetworkCardProperties();
      this._wifiNetCardProp  = new rmGeneralNetworkCardProperties.rm_general.R_NetworkCardProperties();
      this._proxyNetProp     = new rmGeneralNetworkProxyProperties.rm_general.R_NetworkProxyProperties(); 
      this._wifiConnInfo     = new rmGeneralWifiConnectionInfo.rm_general.R_WifiConnectionInfo(); 
    }
    

  }
} 