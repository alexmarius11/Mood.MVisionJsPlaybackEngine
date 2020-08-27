import amRenderParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Audio");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_RenderParams_Audio      extends rmGeneralEntity.rm_general.R_Entity
                                          implements amRenderParameters.am_renderingservices.AE_RenderParams_Audio
                                            
  {
    //-----------------
		_isEnable : boolean;
		_volume   : number ;    //percent
  
    //---------------------------
    constructor()
    {
      super();
      
      this._isEnable = false;
      this._volume   = 50;
      }
    
    //--------------------------
    public reset() : void
    {
      this._isEnable = false;
      this._volume   = 50;
    }    

    //---------------
    public setIsEnable(isEnable : boolean) : void
    {
      this._isEnable = isEnable;
    }

    //---------------
    public getIsEnable() : boolean
    {
      return this._isEnable;
    }


    //---------------
    public setVolume(volume : number) : void
    {
      this._volume = volume;
    }

    //---------------
    public getVolume() : number
    {
      return this._volume;
    }    
  


    //------------
    public copy(src : amRenderParameters.am_renderingservices.AE_RenderParams_Audio) : number
    {
      if (src == null)
        return 1;
      this._isEnable = src.getIsEnable();
      this._volume   = src.getVolume();
      return 0;
    }
  
  }
} 