import amConfigurationServicesServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amRenderParametersAllParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_AllParameters");
import amRenderParametersAllParametersPool     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_AllParametersPool");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_RenderParams_AllParametersPool extends rmGeneralEntity.rm_general.R_Entity
                                             implements amRenderParametersAllParametersPool.am_renderingservices.AE_RenderParams_AllParametersPool
                                            
  {
    _renderParamsList    : Array<amRenderParametersAllParameters.am_renderingservices.AE_RenderParams_AllParameters>;   

    //---------------------------
    constructor()
    {
      super();

      this._renderParamsList   = new Array<amRenderParametersAllParameters.am_renderingservices.AE_RenderParams_AllParameters>();   
    }

    //--------------------------------------------
    public initPool(nbRenderParams: number, error: amGeneralError.am_general.A_Error) : number
    {
      var i = 0;     
      var newRenderParams: amRenderParametersAllParameters.am_renderingservices.AE_RenderParams_AllParameters = null;
      var errorNo = 1;
      for (i = 0; i < this._renderParamsList.length; i++)
      {
        newRenderParams = this._aSrvLocator._iEntityCreation.createDefaultRenderParamsAllParameters(error);
        if (error.isError())
        {
          errorNo =1;
          break;
        }
        newRenderParams.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, error);
        this.addRenderParams(newRenderParams);
      }
      return errorNo ;
    }

    //--------------------------
    public addRenderParams(renderParams : amRenderParametersAllParameters.am_renderingservices.AE_RenderParams_AllParameters) : void 
    {
      this._renderParamsList.push(renderParams);
    }

    //--------------------------
    public reset() : void
    {
      var i = 0;           
      for (i = 0; i < this._renderParamsList.length; i++)
      {
        this._renderParamsList[i].reset();
      }
    }    


    //------------
    public copy(src : amRenderParametersAllParametersPool.am_renderingservices.AE_RenderParams_AllParametersPool) : number
    {
      if (src == null)
        return 1;
      return 0;
    }

    //-----------------------------
    public getAllParametersList() : Array<amRenderParametersAllParameters.am_renderingservices.AE_RenderParams_AllParameters>
    {
      return this._renderParamsList;
    }
  
  
    //--------------------------
  public getFreeRenderParams() : amRenderParametersAllParameters.am_renderingservices.AE_RenderParams_AllParameters
  {
    var freeRenderParams: amRenderParametersAllParameters.am_renderingservices.AE_RenderParams_AllParameters = null;
    var i = 0;     
    for (i = 0; i < this._renderParamsList.length; i++)
    {
      if (this._renderParamsList[i] == null)
        continue;
      if (! this._renderParamsList[i].isFree())
        continue;
      if (! this._renderParamsList[i].setIsFree(false))  
        continue;
      freeRenderParams = this._renderParamsList[i];
      break; 
    }
    return freeRenderParams;
  }
  
  //--------------------------
  public releaseRenderParams(renderParams : amRenderParametersAllParameters.am_renderingservices.AE_RenderParams_AllParameters) : boolean
  {
    if (renderParams == null)
      return false;
    renderParams.setIsFree(false);
    return true;
  }

  }
} 

