import amNonRenderingServices = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_nonrenderingservice/A_NonRenderingService");

import amNonRenderingServices2 = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_watchdogservice/I_WatchDogService");

export module am_nonrenderingservices
{
  export interface A_WatchDogService extends amNonRenderingServices.am_nonrenderingservices.A_NonRenderingService
  {
    _iWatchDogService : amNonRenderingServices2.am_nonrenderingservices.I_WatchDogService ;
  }
} 