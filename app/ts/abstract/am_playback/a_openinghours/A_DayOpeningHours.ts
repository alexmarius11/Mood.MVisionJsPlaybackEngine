import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amGeneralDateTime = require("../../../../../app/ts/abstract/am_general/a_datetime/A_DateTime");

export module am_playback
{
  export interface A_DayOpeningHours extends amGeneral.am_general.A_Entity
  {
    getOpenDayName() : string;
    setOpenDayName(dayName: string) : void;

    getOpenTime() : amGeneralDateTime.am_general.A_DateTime;
    setOpenTime(openTime: amGeneralDateTime.am_general.A_DateTime);


    getCloseDayName() : string;
    setCloseDayName(dayName: string) : void;

    getCloseTime() : amGeneralDateTime.am_general.A_DateTime;
    setCloseTime(openTime: amGeneralDateTime.am_general.A_DateTime) : void;
  }

} 