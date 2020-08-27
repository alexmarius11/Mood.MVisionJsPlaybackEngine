import amNonRenderingServices = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_nonrenderingservice/A_NonRenderingService");

import amNonRenderingServices2 = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_playerfilesupdater/I_PlayerFilesUpdater");

export module am_nonrenderingservices
{
  export interface A_PlayerFilesUpdater extends amNonRenderingServices.am_nonrenderingservices.A_NonRenderingService
  {
    _iPlayerFilesUpdater : amNonRenderingServices2.am_nonrenderingservices.I_PlayerFilesUpdater ;
  }
} 