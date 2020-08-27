import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_SoundProperties extends amGeneral.am_general.A_Entity
  {
    setVolumeLevel(level: number)   : void;
    getVolumeLevel() : number;

    setMute(mute: boolean)   : void;
    isMute() : boolean;

    setSoundBalance(balance: number)   : void;
    getSoundBalance() : number;

    //"normal"
    setSoundMode(mode: string)   : void; 
    getSoundMode() : string;

    setSoundSpeaker(speaker: string)   : void; 
    getSoundSpeaker() : string;

 }

} 