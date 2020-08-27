import amGeneral = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amNonRenderingServices = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_nonrenderingservice/I_NonRenderingService");

export module am_nonrenderingservices
{
  export interface A_NonRenderingService extends amGeneral.am_general.A_Service
  {
    _iNonRenderingService : amNonRenderingServices.am_nonrenderingservices.I_NonRenderingService ;
  }
} 