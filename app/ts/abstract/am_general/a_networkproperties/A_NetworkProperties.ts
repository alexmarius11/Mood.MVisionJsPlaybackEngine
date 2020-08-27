
import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralNetworkCardProperties  = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkCardProperties");
import amGeneralNetworkProxyProperties = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkProxyProperties");
import amGeneralWifiConnectionInfo     = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_WifiConnectionInfo");

export module am_general
{
  export interface A_NetworkProperties extends amGeneral.am_general.A_Entity
  {
     _wiredNetCardProp :  amGeneralNetworkCardProperties.am_general.A_NetworkCardProperties;
     _wifiNetCardProp  :  amGeneralNetworkCardProperties.am_general.A_NetworkCardProperties;
     _proxyNetProp     :  amGeneralNetworkProxyProperties.am_general.A_NetworkProxyProperties; 
     _wifiConnInfo     :  amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo; 
  }

} 