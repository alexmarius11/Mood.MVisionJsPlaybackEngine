import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_DeviceTimerInfo extends amGeneral.am_general.A_Entity
  {
    getHour() : number
    setHour(hour : number) : void;

    getMinute() : number;
    setMinute(minute : number) : void;

    isOnMon() : boolean;
    setOnMon(onMon : boolean) : void;

    isOnTue() : boolean;
    setOnTue(onTue : boolean) : void;

    isOnWed() : boolean;
    setOnWed(onWed : boolean) : void;

    isOnThu() : boolean;
    setOnThu(onThu : boolean) : void;

    isOnFri() : boolean;
    setOnFri(onFri : boolean) : void;

    isOnSat() : boolean;
    setOnSat(onSat: boolean) : void;

    isOnSun() : boolean;
    setOnSun(onSun: boolean) : void;

    getInputSource() : string;
    setInputSource(inputSource: string) : void;

  }

} 