import amNonRenderingServices = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_nonrenderingservice/A_NonRenderingService");

import amNonRenderingServices2 = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_statisticsservice/I_StatisticsService");

export module am_nonrenderingservices
{
  export interface A_StatisticsService extends amNonRenderingServices.am_nonrenderingservices.A_NonRenderingService
  {
    _iStatisticsService : amNonRenderingServices2.am_nonrenderingservices.I_StatisticsService ;
  }
} 