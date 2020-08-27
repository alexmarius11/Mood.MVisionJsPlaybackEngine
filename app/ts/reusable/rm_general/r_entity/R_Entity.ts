
import amGeneralEntity     = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralConfig  = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

import amGeneralError      = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amServiceLog        = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");


export module rm_general
{
  export class R_Entity implements amGeneralEntity.am_general.A_Entity
  {
    //--- properties
    _instanceId:  number;
    _instanceName: string;   
    _entityId:  number;
    _entityName: string;
    //-------------- configuration services
    _aSrvContainer: amServiceContainer.am_configurationservices.A_ServiceContainer;
    _aSrvLocator:   amServiceLocator.am_configurationservices.A_ServiceLocator;
    _aSrvLog:       amServiceLog.am_transversalservices.A_LogService;
    

    //----------- constructor 
    constructor()  
    {  
      this._entityId     = 0;
      this._entityName   = "";
      this._instanceId   = 0;
      this._instanceName = ""; 
      
      this._aSrvContainer = null;
      this._aSrvLocator   = null;
      this._aSrvLog       = null;
      
    }

    //---------------------------
    public getEntityId()   : number
    {
      return this._entityId; 
    }

    //---------------------------
    public getEntityName()  : string
    {
      return this._entityName; 
    }

    //-----------------------------
    public setEntityIdAndEntityName(entityId: number, entityName:string) : void
    {
      this._entityId   = entityId; 
      this._entityName = entityName; 
    }

    //-----------------------------
    public setEntityId(entityId: number) : void
    {
      this._entityId = entityId; 
    }

    //------------------------------
    public setEntityName(entityName: string) : void
    {
      this._entityName = entityName;
    }

    //------------------------------
    public injectDependencies( aSrvContainer: amServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aSrvLocator:   amServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aSrvLog:       amServiceLog.am_transversalservices.A_LogService, 
                               error: amGeneralError.am_general.A_Error) : number
    {
      this._aSrvContainer = aSrvContainer;
      this._aSrvLocator   = aSrvLocator;
      this._aSrvLog       = aSrvLog;
      return 0;
    }

    //-------------------------------
    public init( aConfig  : amGeneralConfig.am_general.AE_Config,  error : amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) : void
    {
      
    }


  }
} 