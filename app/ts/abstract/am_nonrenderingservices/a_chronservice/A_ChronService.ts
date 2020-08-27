import amNonRenderingServices = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_nonrenderingservice/A_NonRenderingService");

import amNonRenderingServices2 = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_chronservice/I_ChronService");

export module am_nonrenderingservices
{
  export interface A_ChronService extends amNonRenderingServices.am_nonrenderingservices.A_NonRenderingService
  {
    _iChronService : amNonRenderingServices2.am_nonrenderingservices.I_ChronService ;
  }
} 