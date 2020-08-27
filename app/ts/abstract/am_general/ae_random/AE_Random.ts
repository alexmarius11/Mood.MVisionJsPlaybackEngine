import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface AE_Random extends amGeneral.am_general.A_Entity
  {
    initRandom(nMin : number, nMax: number, bLoop: boolean, bNoRepeatLast: boolean) : void;
    resetRandom() : void;
    getRandom() : number;

    //------------------------------------
    //nValidPlay = 1; - Valid for play -> Don't need to be set
    //nValidPlay = 0; - Invalid for play -> Must be set
    setValidPlay(nIdxValidPlay : number, nValidPlay: number) : void;

    testAllInvalid() : boolean;

  }

} 