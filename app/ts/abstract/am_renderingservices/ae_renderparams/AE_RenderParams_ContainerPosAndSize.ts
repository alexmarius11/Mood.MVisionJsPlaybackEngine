import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_renderingservices
{
  export interface AE_RenderParams_ContainerPosAndSize extends amGeneral.am_general.A_Entity
  {
    reset() : void;
    
    setUsingPercents(usingPercents : boolean) : void;
    isUsingPercents() : boolean;
    
    getContainerLeft()   : number;
    getContainerRight()  : number;
    getContainerTop()    : number;
    getContainerBottom() : number;
    getContainerWidth()  : number;
    getContainerHeight() : number;

    getContainerClientZoneLeft()   : number;
    getContainerClientZoneRight()  : number;
    getContainerClientZoneTop()    : number;
    getContainerClientZoneBottom() : number;
    getContainerClientZoneWidth()  : number;
    getContainerClientZoneHeight() : number;

    setAllPosAndSizes( itemLeft : number,  itemTop : number, itemRight : number, itemBottom : number,
                       itemClientZoneLeft: number, itemClientZoneTop : number, itemClientZoneRight : number, itemClientZoneBottom : number) : number;

    copy(src : AE_RenderParams_ContainerPosAndSize) : number ;

    getContainerPercentLeft()   : number;
    getContainerPercentRight()  : number;
    getContainerPercentTop()    : number;
    getContainerPercentBottom() : number;
    getContainerPercentWidth()  : number;
    getContainerPercentHeight() : number;    
    
    getContainerClientZonePercentLeft()   : number;
    getContainerClientZonePercentRight()  : number;
    getContainerClientZonePercentTop()    : number;
    getContainerClientZonePercentBottom() : number;
    getContainerClientZonePercentWidth()  : number;
    getContainerClientZonePercentHeight() : number;    

    setAllPosAndSizesInPercentages( itemPercentLeft : number,  itemPercentTop : number, itemPercentRight : number,  itemPercentBottom : number,
                                    itemClientZonePercentLeft: number, itemClientZonePercentTop : number, itemClientZonePercentRight : number, itemClientZonePercentBottom : number,
                                    screenLeft : number,  screenTop : number, screenRight : number,  screenBottom : number) : number;
                        
    setContainerZOrder(containerZOrder: number)  : number;
    getContainerZOrder()   : number;   
  

    //------------------------------------------------------------------------------------
    setOrigAllPosAndSizes( containerOrigLeft        : number,   containerOrigTop          : number,
                           containerOrigRight       : number,   containerOrigBottom       : number,
                           containerClientOrigLeft  : number,   containerClientOrigTop    : number,
                           containerClientOrigRight : number,   containerClientOrigBottom : number) : void ;

    getContainerOrigLeft()   : number;
    getContainerOrigRight()  : number;
    getContainerOrigTop()    : number;
    getContainerOrigBottom() : number;
    
    getContainerClientZoneOrigLeft()   : number;
    getContainerClientZoneOrigRight()  : number;
    getContainerClientZoneOrigTop()    : number;
    getContainerClientZoneOrigBottom() : number;


    setOrigAllPosAndSizesInPercentages( containerOrigPercentLeft       : number,  containerOrigPercentTop          : number,
                                        containerOrigPercentRight      : number,  containerOrigPercentBottom       : number,
                                        containerClientOrigPercentLeft : number,  containerClientOrigPercentTop    : number,  
                                        containerClientOrigPercentRight: number,  containerClientOrigPercentBottom : number) : void;

    getContainerOrigPercentLeft()         : number;
    getContainerOrigPercentRight()        : number;
    getContainerOrigPercentTop()          : number;
    getContainerOrigPercentBottom()       : number;

    getContainerClientZoneOrigPercentLeft()   : number;
    getContainerClientZoneOrigPercentRight()  : number;
    getContainerClientZoneOrigPercentTop()    : number;
    getContainerClientZoneOrigPercentBottom() : number;

  }

} 