import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_SignageInfo extends amGeneral.am_general.A_Entity
  {
    //----------------------------------
    getPortraitMode() : string;
    setPortraitMode(portraitMode : string) : void;

    getISMMethod() : string;
    setISMMethod(ismMethod : string) : void;
    
    getDigitalAudioInputMode() : string;
    setDigitalAudioInputMode(digitalAudioInputMode : string) : void;

    getCheckScreen() : string;
    setCheckScreen(checkScreen : string) : void;

  }

} 