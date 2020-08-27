import amNonRenderingServices = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_nonrenderingservice/A_NonRenderingService");

import amNonRenderingServices2 = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_purgeservice/I_PurgeService");

export module am_nonrenderingservices
{
  export interface A_PurgeService extends amNonRenderingServices.am_nonrenderingservices.A_NonRenderingService
  {
    _iPurgeService : amNonRenderingServices2.am_nonrenderingservices.I_PurgeService ;
  }
} 