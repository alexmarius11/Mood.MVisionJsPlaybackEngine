import amNonRenderingServices = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_playerfilesupdater/I_PlayerFilesUpdater");

import rmNonRenderingServices = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_playerfilesupdater/R_PlayerFilesUpdater");
                                                     
                                                     

export module rm_nonrenderingservices
{
  export class IImpl_PlayerFilesUpdater_R implements amNonRenderingServices.am_nonrenderingservices.I_PlayerFilesUpdater
  {
    _name: string;    

    //----------- owner
    _owner: rmNonRenderingServices.rm_nonrenderingservices.R_PlayerFilesUpdater;

    //----------- constructor 
    constructor(owner: rmNonRenderingServices.rm_nonrenderingservices.R_PlayerFilesUpdater)  
    {
      this._owner = owner;  
    }
  }
} 