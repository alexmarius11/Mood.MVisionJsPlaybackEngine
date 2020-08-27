import amNonRenderingServices = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_nonrenderingservice/A_NonRenderingService");

import amNonRenderingServices2 = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_sendlogservice/I_SendLogService");

export module am_nonrenderingservices
{
  export interface A_SendLogService extends amNonRenderingServices.am_nonrenderingservices.A_NonRenderingService
  {
    _iSendLogService : amNonRenderingServices2.am_nonrenderingservices.I_SendLogService ;
  }
} 