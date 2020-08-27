import amRenderParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Duration");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_RenderParams_Duration extends rmGeneralEntity.rm_general.R_Entity
                                        implements amRenderParameters.am_renderingservices.AE_RenderParams_Duration
                                            
  {
    
    //---- properties
    _bHasRealTimeDuration  : boolean;
    _durationInMilliseconds : number;
    _strStartDate : string;
    _dtStartDate  : Date;
    _strEndDate   : string;
    _dtEndDate    : Date;

     //----------------
     constructor()
     {
       super();
     }

    //--------------------------
    public RE_RenderParams_Duration()
    {
      this._bHasRealTimeDuration = false;
      this._durationInMilliseconds = 0;
      this._strStartDate = "";
      this._dtStartDate  = new Date();
      this._strEndDate   = "";
      this._dtEndDate    = new Date();
    }

    //--------------------------
    public reset() : void
    {
      this._bHasRealTimeDuration = false;
      this._durationInMilliseconds = 0;
      this._strStartDate = "";
      //this._dtStartDate  = new Date();
      this._strEndDate   = "";
      //this._dtEndDate    = new Date();
    }
    
    //---------------
    public setHasRealTimeDuration(hasRealTimeDuration : boolean) : void
    {
      this._bHasRealTimeDuration = hasRealTimeDuration;
    }

    //---------------
    public getHasRealTimeDuration() : boolean
    {
      return this._bHasRealTimeDuration;
    }


    //---------------
    public setDuration(durationnInMilliseconds : number) : void
    {
      this._durationInMilliseconds = durationnInMilliseconds;
    }

    //---------------
    public getDuration() : number
    {
      return this._durationInMilliseconds;
    }    

    //---------------
    public setStrStartDate(strStartDate : string) : void
    {
      this._strStartDate = strStartDate;
    }

    //---------------
    public getStrStartDate() : string
    {
      return this._strStartDate;
    }    

    //---------------
    public setStartDate(dtStartDate : Date) : void
    {
      this._dtStartDate = dtStartDate;
    }

    //---------------
    public getStartDate() : Date
    {
      return this._dtStartDate;
    }    

    //---------------
    public setStrEndDate(strEndDate : string) : void
    {
      this._strEndDate = strEndDate;
    }

    //---------------
    public getStrEndDate() : string
    {
      return this._strEndDate;
    }    

    //---------------
    public setEndDate(dtEndDate : Date) : void
    {
      this._dtEndDate = dtEndDate;
    }

    //---------------
    public getEndDate() : Date
    {
      return this._dtEndDate;
    }    

    //------------
    public copy(src : amRenderParameters.am_renderingservices.AE_RenderParams_Duration) : number
    {
      if (src == null)
        return 1;
      this._bHasRealTimeDuration = src.getHasRealTimeDuration();
      return 0;
    }

  
  }
} 