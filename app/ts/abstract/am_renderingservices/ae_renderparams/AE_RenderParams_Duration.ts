import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_renderingservices
{
  export interface AE_RenderParams_Duration extends amGeneral.am_general.A_Entity
  {
    reset() : void;
    
    setHasRealTimeDuration(hasRealTimeDuration : boolean) : void;
    getHasRealTimeDuration() : boolean;

    setDuration(durationnInMilliseconds : number) : void;
    getDuration() : number;

    setStrStartDate(strStartDate : string) : void;
    getStrStartDate() : string;

    setStartDate(dtStartDate : Date) : void;
    getStartDate() : Date;

    setStrEndDate(strEndDate : string) : void;
    getStrEndDate() : string;

    setEndDate(dtEndDate : Date) : void;
    getEndDate() : Date;

    copy(src : AE_RenderParams_Duration) : number;

  }

} 