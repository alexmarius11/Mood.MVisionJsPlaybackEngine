
import amGeneralServices   = require("../../../../../app/ts/abstract/am_general/a_service/A_Services");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralService    = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amGeneralError      = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralProperties = require("../../../../../app/ts/abstract/am_general/a_property/A_Properties");
import amGeneralConfig  = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");
import rmGeneralEntity = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_Services extends rmGeneralEntity.rm_general.R_Entity 
                          implements amGeneralServices.am_general.A_Services 
  {
    //--- data members
     _list: Array<amGeneralService.am_general.A_Service>

    //----------- constructor 
    constructor()  
    {  
      super();
      this._list = new Array<amGeneralService.am_general.A_Service>();
    }

    //----------------------------
    public getServices(error: amGeneralError.am_general.A_Error): Array<amGeneralService.am_general.A_Service>
    {
      return this._list;
    }

    //-------------------------------
    public getServiceByInstanceName(instanceName: string, error: amGeneralError.am_general.A_Error) : amGeneralService.am_general.A_Service
    {
      for (let crtService of this._list) 
      {
        if(crtService._iService.getInstanceName() == instanceName) 
          return crtService;
      }
      return null;
      /*
      this._list.forEach( (crtService, index) => {
        if(crtService._iService.getInstanceName() == instanceName) 
          return crtService;
        });
        return null;
      */
    }

    //-------------------------------
    public getServiceByServiceName(serviceName: string, error: amGeneralError.am_general.A_Error) : amGeneralService.am_general.A_Service
    {
      for (let crtService of this._list) 
      {
        if(crtService._iService.getServiceName() == serviceName) 
          return crtService;
      }
      return null;
      /*
      this._list.forEach( (crtService, index) => {
        if(crtService._iService.getServiceName() == serviceName) 
          return crtService;
        });
        return null;
      */
    }

    //---------------------------------
    public getServiceByAbstractName( abstractName: string,
                                     properties:  amGeneralProperties.am_general.A_Properties, 
                                     error: amGeneralError.am_general.A_Error) : amGeneralService.am_general.A_Service
    {
      for (let crtService of this._list) 
      {
        if(crtService._iService.getAbstractName() == abstractName) 
          return crtService;
      }
      return null;
      /*
      this._list.forEach( (crtService, index) => {
        if(crtService._iService.getAbstractName() == abstractName) 
          return crtService;
        });
        return null;
      */
    }

    //--------------------------
    public addService(service: amGeneralService.am_general.A_Service, error: amGeneralError.am_general.A_Error) : void
    {
       this._list.push(service);
    }
    
    //--------------------------
    public removeServiceByInstanceName(instanceName: string, error: amGeneralError.am_general.A_Error) : number
    {
      var index = -1;
      for (let crtService of this._list) 
      {
        index++;
        if(crtService._iService.getInstanceName() == instanceName) 
        {
          this._list.splice(index,1);
          return index;
        }
      }
      return -1;
      /*
      this._list.forEach( (crtService, index) => {
      if(crtService._iService.getInstanceName() == serviceName) 
        this._list.splice(index,1);
        return index;
      });
      return -1;
      */
    }
    
    
  }
} 



