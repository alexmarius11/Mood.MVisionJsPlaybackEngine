import amGeneralEntity = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amGeneralDateTime = require("../../../../../app/ts/abstract/am_general/a_datetime/A_DateTime");

export module am_general
{
  export interface A_DateTime extends amGeneralEntity.am_general.A_Entity
  {
    setDateTime(year: number, month: number, day: number, hour: number, minutes: number, seconds: number, milliseconds: number) : void;
    setDate(year: number, month: number, day: number) : void;

    setYear(year: number)   : void;
    getYear() : number;

    setMonth(month: number)   : void;
    getMonth() : number;

    setDay(day: number)   : void;
    getDay() : number;

    setHour(hour: number)   : void;
    getHour() : number;

    setMinutes(minutes: number)   : void;
    getMinutes() : number;

    setSeconds(seconds: number)   : void;
    getSeconds() : number;

    setMilliseconds(seconds: number)   : void;
    getMilliseconds() : number;

    getAsString() : string;   //yyyy-mm-dd hh:mm:ss.z
    getAsISOString() : string; //yyyy-mm-ddThh:mm:ss.ddd

    isEquals(aOtherDateTime: amGeneralDateTime.am_general.A_DateTime) : boolean ;
    isGreater(aOtherDateTime: amGeneralDateTime.am_general.A_DateTime) : boolean ;
    isLower(aOtherDateTime: amGeneralDateTime.am_general.A_DateTime) : boolean ;

    setTimeAsString(strTime: string) : void; //hh:mm:ss.z
    getTimeAsString(): string;
    
    setDateAsString(strDate: string) : void ; //yyyy-mm-dd
    getDateAsString() : string;

    setDateTimeAsString(strDate: string) : void ;//yyyy-mm-dd hh:mm:ss.z
    getDateTimeAsString() : string ;
  }

} 