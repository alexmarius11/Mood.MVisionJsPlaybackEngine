import amNonRenderingServices = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_nonrenderingservice/A_NonRenderingService");

import amConfigurationServices2 = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_livecommandsservice/I_LiveCommandsService");

export module am_nonrenderingservices
{
  export interface A_LiveCommandsService extends amNonRenderingServices.am_nonrenderingservices.A_NonRenderingService
  {
    _iLiveCommandsService : amConfigurationServices2.am_nonrenderingservices.I_LiveCommandsService ;
  }
} 