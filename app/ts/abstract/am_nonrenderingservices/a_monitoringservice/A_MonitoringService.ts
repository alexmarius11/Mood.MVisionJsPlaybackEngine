import amNonRenderingServices = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_nonrenderingservice/A_NonRenderingService");

import amNonRenderingServices2 = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_monitoringservice/I_MonitoringService");

export module am_nonrenderingservices
{
  export interface A_MonitoringService extends amNonRenderingServices.am_nonrenderingservices.A_NonRenderingService
  {
    _iMonitoringService : amNonRenderingServices2.am_nonrenderingservices.I_MonitoringService ;
  }
} 