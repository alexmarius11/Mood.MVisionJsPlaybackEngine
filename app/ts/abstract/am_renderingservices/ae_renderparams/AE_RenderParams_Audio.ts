import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_renderingservices
{
  export interface AE_RenderParams_Audio extends amGeneral.am_general.A_Entity
  {
    reset() : void;

    setIsEnable(isEnable : boolean) : void;
    getIsEnable() : boolean;

    setVolume(volume : number) : void;
    getVolume() : number ;

    copy(src : AE_RenderParams_Audio) : number;

  }

} 