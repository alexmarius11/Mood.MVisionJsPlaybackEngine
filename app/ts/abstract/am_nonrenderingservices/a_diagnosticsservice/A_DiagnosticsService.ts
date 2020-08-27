import amNonRenderingServices = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_nonrenderingservice/A_NonRenderingService");

import amNonRenderingServices2 = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_diagnosticsservice/I_DiagnosticsService");

export module am_nonrenderingservices
{
  export interface A_DiagnosticsService extends amNonRenderingServices.am_nonrenderingservices.A_NonRenderingService
  {
    _iDiagnosticsService : amNonRenderingServices2.am_nonrenderingservices.I_DiagnosticsService ;
  }
} 