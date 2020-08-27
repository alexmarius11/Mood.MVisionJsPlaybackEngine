import amRenderParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_FillRect");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_RenderParams_FillRect extends rmGeneralEntity.rm_general.R_Entity
                                        implements amRenderParameters.am_renderingservices.AE_RenderParams_FillRect
                                            
  {
    //-----------------
    _isTransparent : boolean;  
    _alpha : number;
    _R     : number;
    _G     : number;
    _B     : number;
  
    //---------------------------
    constructor()
    {
      super();

      this._isTransparent = false;
      this._alpha = 180;
      this._R = 255;
      this._G = 255;
      this._B = 255;
    }
    
    //--------------------------
    public reset() : void
    {
      this._isTransparent = false;
      this._alpha = 180;
      this._R = 255;
      this._G = 255;
      this._B = 255;
    }    

    
    //---------------
    public setIsTransparent(isTransparent : boolean) : void
    {
      this._isTransparent = isTransparent;
    }

    //---------------
    public getIsTransparent() : boolean
    {
      return this._isTransparent;
    }


    //---------------
    public setR(R : number) : void
    {
      this._R = R;
    }

    //---------------
    public getR() : number
    {
      return this._R;
    }    

    //---------------
    public setG(G : number) : void
    {
      this._G = G;
    }

    //---------------
    public getG() : number
    {
      return this._G;
    }    

    //---------------
    public setB(B : number) : void
    {
      this._B = B;
    }

    //---------------
    public getB() : number
    {
      return this._B;
    }    

    //---------------
    public setAlpha(alpha : number) : void
    {
      this._alpha = alpha;
    }

    //---------------
    public getAlpha() : number
    {
      return this._alpha;
    }    

    //------------
    public copy(src : amRenderParameters.am_renderingservices.AE_RenderParams_FillRect) : number
    {
      if (src == null)
        return 1;
      this._isTransparent = src.getIsTransparent();
      this._alpha = src.getAlpha();
      this._R = src.getR();
      this._G = src.getG();
      this._B = src.getB();
      return 0;
    }

    //-----------------
    public getRGBString() : string 
    {
      return "rgb("  +  this._R + ","  +  this._G +  ","  +  this._B + ")"; 
    }

    //-----------------
    public getRGBAString() : string 
    {
      return "rgba("  +  this._R + ","  +  this._G +  ","  +  this._B + ","  +  this._alpha + ")"; 
    }

  }
} 