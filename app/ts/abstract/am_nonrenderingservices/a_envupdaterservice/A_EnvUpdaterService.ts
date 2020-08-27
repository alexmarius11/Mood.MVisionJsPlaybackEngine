import amNonRenderingServices = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_nonrenderingservice/A_NonRenderingService");

import amNonRenderingServices2 = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_envupdaterservice/I_EnvUpdaterService");

export module am_nonrenderingservices
{
  export interface A_EnvUpdaterService extends amNonRenderingServices.am_nonrenderingservices.A_NonRenderingService
  {
    _iEnvUpdaterService : amNonRenderingServices2.am_nonrenderingservices.I_EnvUpdaterService ;
  }
} 