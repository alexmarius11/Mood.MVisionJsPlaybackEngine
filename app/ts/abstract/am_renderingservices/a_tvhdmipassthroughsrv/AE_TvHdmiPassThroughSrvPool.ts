import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amTvHdmiPassThroughSrvRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_tvhdmiPassthroughsrv/A_TvHdmiPassThroughSrv");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amGeneralConfig  = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");


export module am_renderingservices
{
  export interface AE_TvHdmiPassThroughSrvPool extends amGeneral.am_general.A_Entity
  {

    initPool( nbTvHdmiPassThroughSrvRenders : number, error    : amGeneralError.am_general.A_Error) : number;
  
    addTvHdmiPassThroughSrv(TvHdmiPassThroughSrvRenderer : amTvHdmiPassThroughSrvRenderer.am_renderingservices.A_TvHdmiPassThroughSrv) : void ;

    reset() : void;
    copy(src : AE_TvHdmiPassThroughSrvPool) : number;

    getTvHdmiPassThroughSrvList() : Array<amTvHdmiPassThroughSrvRenderer.am_renderingservices.A_TvHdmiPassThroughSrv> ;
    
    getFreeTvHdmiPassThroughSrv() : amTvHdmiPassThroughSrvRenderer.am_renderingservices.A_TvHdmiPassThroughSrv;
    releaseTvHdmiPassThroughSrv(tvHdmiPassThroughSrv : amTvHdmiPassThroughSrvRenderer.am_renderingservices.A_TvHdmiPassThroughSrv) : boolean;
  }
} 