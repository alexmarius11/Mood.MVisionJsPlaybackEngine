import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amPlaybackDayOpeningHours = require("../../../../../app/ts/abstract/am_playback/a_openinghours/A_DayOpeningHours");

export module am_playback
{
  export interface A_OpeningHours extends amGeneral.am_general.A_Entity
  {
    getOpeningHours() : Array<amPlaybackDayOpeningHours.am_playback.A_DayOpeningHours>;

    addDayOpeningHours(dayOpeningHour : amPlaybackDayOpeningHours.am_playback.A_DayOpeningHours) : void ;
    
    getDayOpeningHours(startDayName : string) : amPlaybackDayOpeningHours.am_playback.A_DayOpeningHours ;
  }

} 


/*
<?xml version="1.0" encoding="UTF-8"?>

<!DOCTYPE OPENING_HOURS>

-<OPENING_HOURS>


-<WORKDAY>


-<OPEN>

<DAY>SUN</DAY>

<TIME>00:01:00</TIME>

</OPEN>


-<CLOSE>

<DAY>SUN</DAY>

<TIME>23:59:00</TIME>

</CLOSE>

</WORKDAY>


-<WORKDAY>


-<OPEN>

<DAY>MON</DAY>

<TIME>00:01:00</TIME>

</OPEN>


-<CLOSE>

<DAY>MON</DAY>

<TIME>23:59:00</TIME>

</CLOSE>

</WORKDAY>


-<WORKDAY>


-<OPEN>

<DAY>TUE</DAY>

<TIME>00:01:00</TIME>

</OPEN>


-<CLOSE>

<DAY>TUE</DAY>

<TIME>23:59:00</TIME>

</CLOSE>

</WORKDAY>


-<WORKDAY>


-<OPEN>

<DAY>WED</DAY>

<TIME>00:01:00</TIME>

</OPEN>


-<CLOSE>

<DAY>WED</DAY>

<TIME>23:59:00</TIME>

</CLOSE>

</WORKDAY>


-<WORKDAY>


-<OPEN>

<DAY>THU</DAY>

<TIME>00:01:00</TIME>

</OPEN>


-<CLOSE>

<DAY>THU</DAY>

<TIME>23:59:00</TIME>

</CLOSE>

</WORKDAY>


-<WORKDAY>


-<OPEN>

<DAY>FRI</DAY>

<TIME>00:01:00</TIME>

</OPEN>


-<CLOSE>

<DAY>FRI</DAY>

<TIME>23:59:00</TIME>

</CLOSE>

</WORKDAY>


-<WORKDAY>


-<OPEN>

<DAY>SAT</DAY>

<TIME>00:01:00</TIME>

</OPEN>


-<CLOSE>

<DAY>SAT</DAY>

<TIME>23:59:00</TIME>

</CLOSE>

</WORKDAY>

</OPENING_HOURS>
*/