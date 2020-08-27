import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_renderingservices
{
  export interface AE_RenderParams_ItemPosAndSize extends amGeneral.am_general.A_Entity
  {
    reset() : void;
    
    setUsingPercents(usingPercents : boolean) : void;
    isUsingPercents() : boolean;
    
    getItemLeft()   : number;
    getItemRight()  : number;
    getItemTop()    : number;
    getItemBottom() : number;

    getItemClientZoneLeft()   : number;
    getItemClientZoneRight()  : number;
    getItemClientZoneTop()    : number;
    getItemClientZoneBottom() : number;

    setAllPosAndSizes( itemLeft : number,  itemTop : number, itemRight : number,  itemBottom : number,
                       itemClientZoneLeft: number, itemClientZoneTop : number, itemClientZoneRight : number, itemClientZoneBottom : number) : number;

    copy(src : AE_RenderParams_ItemPosAndSize) : number ;

    getItemPercentLeft()   : number;
    getItemPercentRight()  : number;
    getItemPercentTop()    : number;
    getItemPercentBottom() : number;
                   
    getItemClientZonePercentLeft()   : number;
    getItemClientZonePercentRight()  : number;
    getItemClientZonePercentTop()    : number;
    getItemClientZonePercentBottom() : number;

    setAllPosAndSizesInPercentages( itemPercentLeft : number,  itemPercentTop : number, itemPercentRight : number,  itemPercentBottom : number,
                                    itemClientZonePercentLeft: number, itemClientZonePercentTop : number, itemClientZonePercentRight : number, itemClientZonePercentBottom : number) : number;

  }

} 