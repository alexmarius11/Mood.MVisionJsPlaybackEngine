
import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_renderingservices
{
  export interface AE_RenderParams_Background extends amGeneral.am_general.A_Entity
  {
    reset() : void;
    
    setIsTransparent(isTransparent : boolean) : void;
    getIsTransparent() : boolean;

    setR(R : number) : void;
    getR() : number;

    setG(G : number) : void;
    getG() : number;

    setB(B : number) : void;
    getB() : number;

    setAlpha(alpha : number) : void;
    getAlpha() : number;

    getRGBString() : string;
    getRGBAString() : string;

    copy(src : AE_RenderParams_Background) : number;
      
  }

} 