import amRenderParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_ContainerPosAndSize");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
//import e = require("express");

export module rm_renderingservices
{
  export class RE_RenderParams_ContainerPosAndSize extends rmGeneralEntity.rm_general.R_Entity
                                                   implements amRenderParameters.am_renderingservices.AE_RenderParams_ContainerPosAndSize
                                            
  {

    _usingPercents : boolean;

    _containerLeft   : number;
    _containerRight  : number;
    _containerTop    : number;
    _containerBottom : number;

    _containerPercentLeft   : number;
    _containerPercentRight  : number;
    _containerPercentTop    : number;
    _containerPercentBottom : number;

    _containerClientZoneLeft   : number;
    _containerClientZoneRight  : number;
    _containerClientZoneTop    : number;
    _containerClientZoneBottom : number;

    _containerClientZonePercentLeft   : number;
    _containerClientZonePercentRight  : number;
    _containerClientZonePercentTop    : number;
    _containerClientZonePercentBottom : number;

    _containerZOrder : number;

    //---------------------------
    _containerOrigLeft   : number;
    _containerOrigRight  : number;
    _containerOrigTop    : number;
    _containerOrigBottom : number;

    _containerOrigPercentLeft   : number;
    _containerOrigPercentRight  : number;
    _containerOrigPercentTop    : number;
    _containerOrigPercentBottom : number;

    _containerClientZoneOrigLeft   : number;
    _containerClientZoneOrigRight  : number;
    _containerClientZoneOrigTop    : number;
    _containerClientZoneOrigBottom : number;

    _containerClientZoneOrigPercentLeft   : number;
    _containerClientZoneOrigPercentRight  : number;
    _containerClientZoneOrigPercentTop    : number;
    _containerClientZoneOrigPercentBottom : number;

    //--------------------------
   constructor()
    {
      super();
      
      this._usingPercents = false;
    
      this._containerLeft   = -1;
      this._containerRight  = -1;
      this._containerTop    = -1;
      this._containerBottom = -1;

      this._containerPercentLeft   = -1;
      this._containerPercentRight  = -1;
      this._containerPercentTop    = -1;
      this._containerPercentBottom = -1;

      this._containerClientZoneLeft   = -1;
      this._containerClientZoneRight  = -1;
      this._containerClientZoneTop    = -1;
      this._containerClientZoneBottom = -1;

      this._containerClientZonePercentLeft   = -1;
      this._containerClientZonePercentRight  = -1;
      this._containerClientZonePercentTop    = -1;
      this._containerClientZonePercentBottom = -1;

      this._containerZOrder = 0;

      //---------------------------
      this._containerOrigLeft   = -1;
      this._containerOrigRight  = -1;
      this._containerOrigTop    = -1;
      this._containerOrigBottom = -1;

      this._containerOrigPercentLeft   = -1;
      this._containerOrigPercentRight  = -1;
      this._containerOrigPercentTop    = -1;
      this._containerOrigPercentBottom = -1;

      this._containerClientZoneOrigLeft   = -1;
      this._containerClientZoneOrigRight  = -1;
      this._containerClientZoneOrigTop    = -1;
      this._containerClientZoneOrigBottom = -1;

      this._containerClientZoneOrigPercentLeft   = -1;
      this._containerClientZoneOrigPercentRight  = -1;
      this._containerClientZoneOrigPercentTop    = -1;
      this._containerClientZoneOrigPercentBottom = -1;
    }

    //--------------------------
    public reset() : void
    {
      this._usingPercents = false;
    
      this._containerLeft   = -1;
      this._containerRight  = -1;
      this._containerTop    = -1;
      this._containerBottom = -1;

      this._containerPercentLeft   = -1;
      this._containerPercentRight  = -1;
      this._containerPercentTop    = -1;
      this._containerPercentBottom = -1;

      this._containerClientZoneLeft   = -1;
      this._containerClientZoneRight  = -1;
      this._containerClientZoneTop    = -1;
      this._containerClientZoneBottom = -1;

      this._containerClientZonePercentLeft   = -1;
      this._containerClientZonePercentRight  = -1;
      this._containerClientZonePercentTop    = -1;
      this._containerClientZonePercentBottom = -1;

      this._containerZOrder = 0;

      //---------------------------
      this._containerOrigLeft   = -1;
      this._containerOrigRight  = -1;
      this._containerOrigTop    = -1;
      this._containerOrigBottom = -1;

      this._containerOrigPercentLeft   = -1;
      this._containerOrigPercentRight  = -1;
      this._containerOrigPercentTop    = -1;
      this._containerOrigPercentBottom = -1;

      this._containerClientZoneOrigLeft   = -1;
      this._containerClientZoneOrigRight  = -1;
      this._containerClientZoneOrigTop    = -1;
      this._containerClientZoneOrigBottom = -1;

      this._containerClientZoneOrigPercentLeft   = -1;
      this._containerClientZoneOrigPercentRight  = -1;
      this._containerClientZoneOrigPercentTop    = -1;
      this._containerClientZoneOrigPercentBottom = -1;

    }

    //---------------
    public setUsingPercents(usingPercents : boolean) : void
    {
      this._usingPercents = usingPercents ;
    }

    //---------------
    public isUsingPercents() : boolean
    {
      return this._usingPercents;
    }

    //------------
    public getContainerLeft()   : number
    {
      return this._containerLeft;
    }
    //------------
    public getContainerRight()  : number
    {
      return this._containerRight;
    }
    //------------
    public getContainerTop()    : number
    {
      return this._containerTop;
    }
    //------------
    public getContainerBottom() : number
    {
      return this._containerBottom;
    }

    //------------
    public getContainerWidth()   : number
    {
      return this._containerRight - this._containerLeft;
    }
    //------------
    public getContainerHeight()   : number
    {
      return this._containerBottom - this._containerTop;
    }


    //------------
    public getContainerPercentLeft()   : number
    {
      return this._containerPercentLeft;
    }
    //------------
    public getContainerPercentRight()  : number
    {
      return this._containerPercentRight;
    }
    //------------
    public getContainerPercentTop()    : number
    {
      return this._containerPercentTop;
    }
    //------------
    public getContainerPercentBottom() : number
    {
      return this._containerPercentBottom;
    }
    //------------
    public getContainerPercentWidth()   : number
    {
      return this._containerPercentRight - this._containerPercentLeft;
    }
    //------------
    public getContainerPercentHeight()   : number
    {
      return this._containerPercentBottom - this._containerPercentTop;
    }

    //------------
    public getContainerClientZoneLeft()   : number
    {
      return this._containerClientZoneLeft;
    }
    //------------
    public getContainerClientZoneRight()  : number
    {
      return this._containerClientZoneRight;
    }
    //------------
    public getContainerClientZoneTop()    : number
    {
      return this._containerClientZoneTop;
    }
    //------------
    public getContainerClientZoneBottom() : number
    {
      return this._containerClientZoneBottom;
    }
    //------------
    public getContainerClientZoneWidth()   : number
    {
      return this._containerClientZoneRight - this._containerClientZoneLeft;
    }
    //------------
    public getContainerClientZoneHeight()   : number
    {
      return this._containerClientZoneBottom - this._containerClientZoneTop;
    }


    //------------
    public getContainerClientZonePercentLeft()   : number
    {
      return this._containerClientZonePercentLeft;
    }
    //------------
    public getContainerClientZonePercentRight()  : number
    {
      return this._containerClientZonePercentRight;
    }
    //------------
    public getContainerClientZonePercentTop()    : number
    {
      return this._containerClientZonePercentTop;
    }
    //------------
    public getContainerClientZonePercentBottom() : number
    {
      return this._containerClientZonePercentBottom;
    }
    //------------
    public getContainerClientZonePercentWidth()   : number
    {
      return this._containerClientZonePercentRight - this._containerClientZonePercentLeft;
    }
    //------------
    public getContainerClientZonePercentHeight()   : number
    {
      return this._containerClientZonePercentBottom - this._containerClientZonePercentTop;
    }


    //------------
    public setContainerZOrder(containerZOrder: number)   : number
    {
      this._containerZOrder = containerZOrder;
      return 0;
    }
    //------------
    public getContainerZOrder()   : number
    {
      return this._containerZOrder;
    }

    //------------
    public setAllPosAndSizes( containerLeft : number,  containerTop : number, containerRight : number,  containerBottom : number,
                              containerClientZoneLeft: number, containerClientZoneTop : number, containerClientZoneRight : number, containerClientZoneBottom : number) : number
    {
      this._containerLeft   = containerLeft;
      this._containerTop    = containerTop;
      this._containerRight  = containerRight;
      this._containerBottom = containerBottom;

      if ((containerClientZoneLeft == -1)  && (containerClientZoneTop == -1) && 
          (containerClientZoneRight == -1) && (containerClientZoneBottom == -1))
      {
        this._containerClientZoneLeft   = 0;
        this._containerClientZoneTop    = 0;
        this._containerClientZoneRight  = this._containerRight - this._containerLeft;
        this._containerClientZoneBottom = this._containerBottom - this._containerTop;
      }else{
        this._containerClientZoneLeft   = containerClientZoneLeft;
        this._containerClientZoneTop    = containerClientZoneTop;
        this._containerClientZoneRight  = containerClientZoneRight;
        this._containerClientZoneBottom = containerClientZoneBottom;
      }  
      return 0;
    }

    //------------
    public copy(src : amRenderParameters.am_renderingservices.AE_RenderParams_ContainerPosAndSize) : number
    {
      if (src == null)
        return 1;
      this._usingPercents = src.isUsingPercents();

      this._containerLeft   = src.getContainerLeft();
      this._containerTop    = src.getContainerTop();
      this._containerRight  = src.getContainerRight();
      this._containerBottom = src.getContainerBottom();

      this._containerClientZoneLeft   = src.getContainerClientZoneLeft();
      this._containerClientZoneTop    = src.getContainerClientZoneTop();
      this._containerClientZoneRight  = src.getContainerClientZoneRight();
      this._containerClientZoneBottom = src.getContainerClientZoneBottom();

      this._containerPercentLeft   = src.getContainerPercentLeft();
      this._containerPercentTop    = src.getContainerPercentTop();
      this._containerPercentRight  = src.getContainerPercentRight();
      this._containerPercentBottom = src.getContainerPercentBottom();

      this._containerClientZonePercentLeft   = src.getContainerClientZonePercentLeft();
      this._containerClientZonePercentTop    = src.getContainerClientZonePercentTop();
      this._containerClientZonePercentRight  = src.getContainerClientZonePercentRight();
      this._containerClientZonePercentBottom = src.getContainerClientZonePercentBottom();

      this._containerZOrder                  = src.getContainerZOrder();

      return 0;
    }

    //--------------------------
    public setAllPosAndSizesInPercentages( 
              containerPercentLeft : number,  containerPercentTop : number, containerPercentRight : number,  containerPercentBottom : number,
              containerClientZonePercentLeft: number, containerClientZonePercentTop : number, containerClientZonePercentRight : number, containerClientZonePercentBottom : number,
              screenLeft : number,  screenTop : number, screenRight : number,  screenBottom : number) : number
    {
      this._containerPercentLeft   = containerPercentLeft;
      this._containerPercentTop    = containerPercentTop;
      this._containerPercentRight  = containerPercentRight;
      this._containerPercentBottom = containerPercentBottom;
  
      this._containerClientZonePercentLeft   = containerClientZonePercentLeft;
      this._containerClientZonePercentTop    = containerClientZonePercentTop;
      this._containerClientZonePercentRight  = containerClientZonePercentRight;
      this._containerClientZonePercentBottom = containerClientZonePercentBottom;
  
      this._containerLeft   = Math.round(containerPercentLeft    * (screenRight  - screenLeft) + screenLeft);
      this._containerTop    = Math.round(containerPercentTop     * (screenBottom - screenTop)  + screenTop);
      this._containerRight  = Math.round(containerPercentRight   * (screenRight  - screenLeft) + screenLeft);
      this._containerBottom = Math.round(containerPercentBottom  * (screenBottom - screenTop)  + screenTop);
  
      if ((containerClientZonePercentLeft == -1)  && (containerClientZonePercentTop == -1) && 
          (containerClientZonePercentRight == -1) && (containerClientZonePercentBottom == -1))
      {
        this._containerClientZoneLeft   = 0;
        this._containerClientZoneTop    = 0;
        this._containerClientZoneRight  = this._containerRight - this._containerLeft;
        this._containerClientZoneBottom = this._containerBottom - this._containerTop;
      }else{
        this._containerClientZoneLeft   = Math.round(containerClientZonePercentLeft   * (screenRight  - screenLeft) + screenLeft);
        this._containerClientZoneTop    = Math.round(containerClientZonePercentTop    * (screenBottom - screenTop)  + screenTop);
        this._containerClientZoneRight  = Math.round(containerClientZonePercentRight  * (screenRight  - screenLeft) + screenLeft);
        this._containerClientZoneBottom = Math.round(containerClientZonePercentBottom * (screenBottom - screenTop)  + screenTop);
      }  
      this._usingPercents = true;
      return 0;
    }
  
    //===================================
    //------------------------------------------------------------------------------------
    public setOrigAllPosAndSizes( containerOrigLeft        : number,   containerOrigTop          : number,
                                  containerOrigRight       : number,   containerOrigBottom       : number,
                                  containerClientOrigLeft  : number,   containerClientOrigTop    : number,
                                  containerClientOrigRight : number,   containerClientOrigBottom : number) : void
    {
      //--------
      this._containerOrigLeft   = containerOrigLeft;
      this._containerOrigRight  = containerOrigRight;
      this._containerOrigTop    = containerOrigTop;
      this._containerOrigBottom = containerOrigBottom;

      this._containerClientZoneOrigPercentLeft   = containerClientOrigLeft;
      this._containerClientZoneOrigPercentRight  = containerClientOrigRight;
      this._containerClientZoneOrigPercentTop    = containerClientOrigTop;
      this._containerClientZoneOrigPercentBottom = containerClientOrigBottom;
    }


    //------------
    public getContainerOrigLeft()   : number
    {
      return this._containerOrigLeft;
    }
    //------------
    public getContainerOrigRight()  : number
    {
      return this._containerOrigRight;
    }
    //------------
    public getContainerOrigTop()    : number
    {
      return this._containerOrigTop;
    }
    //------------
    public getContainerOrigBottom() : number
    {
      return this._containerOrigBottom;
    }
    
    //------------
    public getContainerClientZoneOrigLeft()   : number
    {
      return this._containerClientZoneOrigLeft;
    }
    //------------
    public getContainerClientZoneOrigRight()  : number
    {
      return this._containerClientZoneOrigRight;
    }
    //------------
    public getContainerClientZoneOrigTop()    : number
    {
      return this._containerClientZoneOrigTop;
    }
    //------------
    public getContainerClientZoneOrigBottom() : number
    {
      return this._containerClientZoneOrigBottom;
    }

    //------------------------------------------------------------------------------------
    public setOrigAllPosAndSizesInPercentages( containerOrigPercentLeft   : number,      containerOrigPercentTop  : number,
                                               containerOrigPercentRight  : number,      containerOrigPercentBottom  : number,
                                               containerClientOrigPercentLeft : number,  containerClientOrigPercentTop  : number,
                                               containerClientOrigPercentRight,          containerClientOrigPercentBottom) : void
    {
      //--------
      this._containerOrigPercentLeft   = containerOrigPercentLeft;
      this._containerOrigPercentRight  = containerOrigPercentRight;
      this._containerOrigPercentTop    = containerOrigPercentTop;
      this._containerOrigPercentBottom = containerOrigPercentBottom;
  
      this._containerClientZoneOrigPercentLeft   = containerClientOrigPercentLeft;
      this._containerClientZoneOrigPercentRight  = containerClientOrigPercentRight;
      this._containerClientZoneOrigPercentTop    = containerClientOrigPercentTop;
      this._containerClientZoneOrigPercentBottom = containerClientOrigPercentBottom;
    }
    
    //------------
    public getContainerOrigPercentLeft()   : number
    {
      return this._containerOrigPercentLeft;
    }
    //------------
    public getContainerOrigPercentRight()  : number
    {
      return this._containerOrigPercentRight;
    }
    //------------
    public getContainerOrigPercentTop()    : number
    {
      return this._containerOrigPercentTop;
    }
    //------------
    public getContainerOrigPercentBottom() : number
    {
      return this._containerOrigPercentBottom;
    }
    
    //------------
    public getContainerClientZoneOrigPercentLeft()   : number
    {
      return this._containerClientZoneOrigPercentLeft;
    }
    //------------
    public getContainerClientZoneOrigPercentRight()  : number
    {
      return this._containerClientZoneOrigPercentRight;
    }
    //------------
    public getContainerClientZoneOrigPercentTop()    : number
    {
      return this._containerClientZoneOrigPercentTop;
    }
    //------------
    public getContainerClientZoneOrigPercentBottom() : number
    {
      return this._containerClientZoneOrigPercentBottom;
    }

  }
} 