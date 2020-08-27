import amConfig = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

export module am_coreservices
{
  export interface AE_PlaylistControllerConfig extends amConfig.am_general.AE_Config
  {
    getInitialPoolNb_OfPrepareParams() : number;
    setInitialPoolNb_OfPrepareParams(nbPrepareParams : number) : void;

    getInitialPoolNb_OfRunParams() : number;
    setInitialPoolNb_OfRunParams(nbRunParams : number) : void;

    getInitialPoolNb_OfStopParams() : number;
    setInitialPoolNb_OfStopParams(nbStopParams : number) : void;

    getInitialPoolNb_OfStatusParams() : number;
    setInitialPoolNb_OfStatusParams(nbStatusParams : number) : void;
  }
} 