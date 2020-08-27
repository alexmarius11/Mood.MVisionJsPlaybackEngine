
import amPlaylistControllerConfig  = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/AE_PlaylistControllerConfig");


import rmConfig    = require("../../../../../app/ts/reusable/rm_general/re_config/RE_Config");

export module rm_coreservices
{
  export class RE_PlaylistControllerConfig  extends    rmConfig.rm_general.RE_Config
                                            implements amPlaylistControllerConfig.am_coreservices.AE_PlaylistControllerConfig
  {

    _prepareParams_initialPoolNb : number;
    _runParams_initialPoolNb      : number;
    _stopParams_initialPoolNb     : number;
    _statusParams_initialPoolNb   : number;

    //-----------------------
    constructor()
    {
      super();

      this._prepareParams_initialPoolNb = 0;
      this._runParams_initialPoolNb  = 0;
      this._stopParams_initialPoolNb  = 0;
      this._statusParams_initialPoolNb  = 0;
    }

    //---------------------
    public getInitialPoolNb_OfPrepareParams() : number
    {
      return this._prepareParams_initialPoolNb;
    }
    //----------------------
    public setInitialPoolNb_OfPrepareParams(nbPrepareParams : number) : void
    {
      this._prepareParams_initialPoolNb = nbPrepareParams;
    }

    //---------------------
    public getInitialPoolNb_OfRunParams() : number
    {
      return this._runParams_initialPoolNb;
    }
    //---------------------
    public setInitialPoolNb_OfRunParams(nbRunParams : number) : void
    {
      this._runParams_initialPoolNb = nbRunParams;
    }

    //----------------------
    public getInitialPoolNb_OfStopParams() : number
    {
      return this._stopParams_initialPoolNb;
    }
    //---------------------
    public setInitialPoolNb_OfStopParams(nbStopParams : number) : void
    {
      this._stopParams_initialPoolNb = nbStopParams;
    }

    //---------------------
    public getInitialPoolNb_OfStatusParams() : number
    {
      return this._statusParams_initialPoolNb;
    }
    //---------------------
    public setInitialPoolNb_OfStatusParams(nbStatusParams : number) : void
    {
      this._statusParams_initialPoolNb = nbStatusParams;
    }


  }
} 