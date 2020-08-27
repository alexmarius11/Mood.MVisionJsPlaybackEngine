import amRenderParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_ItemPosAndSize");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_RenderParams_ItemPosAndSize extends rmGeneralEntity.rm_general.R_Entity
                                              implements amRenderParameters.am_renderingservices.AE_RenderParams_ItemPosAndSize
                                            
  {

    _usingPercents : boolean;

    _itemLeft   : number;
    _itemRight  : number;
    _itemTop    : number;
    _itemBottom : number;

    _itemPercentLeft   : number;
    _itemPercentRight  : number;
    _itemPercentTop    : number;
    _itemPercentBottom : number;

    _itemClientZoneLeft   : number;
    _itemClientZoneRight  : number;
    _itemClientZoneTop    : number;
    _itemClientZoneBottom : number;

    _itemClientZonePercentLeft   : number;
    _itemClientZonePercentRight  : number;
    _itemClientZonePercentTop    : number;
    _itemClientZonePercentBottom : number;

    //----------------
    constructor()
    {
      super();

      this._usingPercents = false;
    
      this._itemLeft   = -1;
      this._itemRight  = -1;
      this._itemTop    = -1;
      this._itemBottom = -1;

      this._itemPercentLeft   = -1;
      this._itemPercentRight  = -1;
      this._itemPercentTop    = -1;
      this._itemPercentBottom = -1;

      this._itemClientZoneLeft   = -1;
      this._itemClientZoneRight  = -1;
      this._itemClientZoneTop    = -1;
      this._itemClientZoneBottom = -1;

      this._itemClientZonePercentLeft   = -1;
      this._itemClientZonePercentRight  = -1;
      this._itemClientZonePercentTop    = -1;
      this._itemClientZonePercentBottom = -1;
    }

    //--------------------------
    public reset() : void
    {
      this._usingPercents = false;
    
      this._itemLeft   = -1;
      this._itemRight  = -1;
      this._itemTop    = -1;
      this._itemBottom = -1;

      this._itemPercentLeft   = -1;
      this._itemPercentRight  = -1;
      this._itemPercentTop    = -1;
      this._itemPercentBottom = -1;

      this._itemClientZoneLeft   = -1;
      this._itemClientZoneRight  = -1;
      this._itemClientZoneTop    = -1;
      this._itemClientZoneBottom = -1;

      this._itemClientZonePercentLeft   = -1;
      this._itemClientZonePercentRight  = -1;
      this._itemClientZonePercentTop    = -1;
      this._itemClientZonePercentBottom = -1;
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
    public getItemLeft()   : number
    {
      return this._itemLeft;
    }
    //------------
    public getItemRight()  : number
    {
      return this._itemRight;
    }
    //------------
    public getItemTop()    : number
    {
      return this._itemTop;
    }
    //------------
    public getItemBottom() : number
    {
      return this._itemBottom;
    }

    //------------
    public getItemPercentLeft()   : number
    {
      return this._itemPercentLeft;
    }
    //------------
    public getItemPercentRight()  : number
    {
      return this._itemPercentRight;
    }
    //------------
    public getItemPercentTop()    : number
    {
      return this._itemPercentTop;
    }
    //------------
    public getItemPercentBottom() : number
    {
      return this._itemPercentBottom;
    }

    //------------
    public getItemClientZoneLeft()   : number
    {
      return this._itemClientZoneLeft;
    }
    //------------
    public getItemClientZoneRight()  : number
    {
      return this._itemClientZoneRight;
    }
    //------------
    public getItemClientZoneTop()    : number
    {
      return this._itemClientZoneTop;
    }
    //------------
    public getItemClientZoneBottom() : number
    {
      return this._itemClientZoneBottom;
    }

    //------------
    public getItemClientZonePercentLeft()   : number
    {
      return this._itemClientZonePercentLeft;
    }
    //------------
    public getItemClientZonePercentRight()  : number
    {
      return this._itemClientZonePercentRight;
    }
    //------------
    public getItemClientZonePercentTop()    : number
    {
      return this._itemClientZonePercentTop;
    }
    //------------
    public getItemClientZonePercentBottom() : number
    {
      return this._itemClientZonePercentBottom;
    }

    //------------
    public setAllPosAndSizes( itemLeft : number,  itemTop : number, itemRight : number,  itemBottom : number,
	   	   	                    itemClientZoneLeft: number, itemClientZoneTop : number, itemClientZoneRight : number, itemClientZoneBottom : number) : number
    {
      this._itemLeft   = itemLeft;
      this._itemTop    = itemTop;
      this._itemRight  = itemRight;
      this._itemBottom = itemBottom;

      this._itemClientZoneLeft   = itemClientZoneLeft;
      this._itemClientZoneTop    = itemClientZoneTop;
      this._itemClientZoneRight  = itemClientZoneRight;
      this._itemClientZoneBottom = itemClientZoneBottom;

      return 0;
    }

    //------------
    public copy(src : amRenderParameters.am_renderingservices.AE_RenderParams_ItemPosAndSize) : number
    {
      if (src == null)
        return 1;
      this._usingPercents = src.isUsingPercents();

      this._itemLeft   = src.getItemLeft();
      this._itemTop    = src.getItemTop();
      this._itemRight  = src.getItemRight();
      this._itemBottom = src.getItemBottom();

      this._itemClientZoneLeft   = src.getItemClientZoneLeft();
      this._itemClientZoneTop    = src.getItemClientZoneTop();
      this._itemClientZoneRight  = src.getItemClientZoneRight();
      this._itemClientZoneBottom = src.getItemClientZoneBottom();

      this._itemPercentLeft   = src.getItemPercentLeft();
      this._itemPercentTop    = src.getItemPercentTop();
      this._itemPercentRight  = src.getItemPercentRight();
      this._itemPercentBottom = src.getItemPercentBottom();

      this._itemClientZonePercentLeft   = src.getItemClientZonePercentLeft();
      this._itemClientZonePercentTop    = src.getItemClientZonePercentTop();
      this._itemClientZonePercentRight  = src.getItemClientZonePercentRight();
      this._itemClientZonePercentBottom = src.getItemClientZonePercentBottom();

      return 0;
    }

    //--------------------------
    public setAllPosAndSizesInPercentages( itemPercentLeft : number,  itemPercentTop : number, itemPercentRight : number,  itemPercentBottom : number,
                                            itemClientZonePercentLeft: number, itemClientZonePercentTop : number, itemClientZonePercentRight : number, itemClientZonePercentBottom : number) : number
      {
        this._itemLeft   = itemPercentLeft;
        this._itemTop    = itemPercentTop;
        this._itemRight  = itemPercentRight;
        this._itemBottom = itemPercentBottom;
  
        this._itemClientZoneLeft   = itemClientZonePercentLeft;
        this._itemClientZoneTop    = itemClientZonePercentTop;
        this._itemClientZoneRight  = itemClientZonePercentRight;
        this._itemClientZoneBottom = itemClientZonePercentBottom;
  
        return 0;
      }
  
  }
} 