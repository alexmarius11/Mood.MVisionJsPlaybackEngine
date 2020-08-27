import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralDateTime = require("../../../../../app/ts/abstract/am_general/a_datetime/A_DateTime");

export module am_transversalservices
{
  export interface I_Utils_DateTime extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    formatDateTime(aDateTime: amGeneralDateTime.am_general.A_DateTime, format: string, locale: string) : string;

    formatDateTimeFromISO(strISODateTime: string, format: string, locale: string) : string;
    setDateTimeFromISO(aDateTime: amGeneralDateTime.am_general.A_DateTime, strISODateTime: string) : void;

    getCrtDateTime(aDateTime: amGeneralDateTime.am_general.A_DateTime) : void;
    getCrtDateTimeAsISOString() : string;
    getCrtDateTimeAsString(formatDate: string, formatTime: string) : string;

    getCrtUTCDateTime(aDateTime: amGeneralDateTime.am_general.A_DateTime) : void;

    addYears(aDateTime: amGeneralDateTime.am_general.A_DateTime, nbMonths: number) : void;
    addMonths(aDateTime: amGeneralDateTime.am_general.A_DateTime, nbYears: number);
    addDays(aDateTime: amGeneralDateTime.am_general.A_DateTime, nbDays: number);
    addHours(aDateTime: amGeneralDateTime.am_general.A_DateTime, nbHours: number);
    addSeconds(aDateTime: amGeneralDateTime.am_general.A_DateTime, nbSeconds: number);
    addMillisecond(aDateTime: amGeneralDateTime.am_general.A_DateTime, nbSeconds: number);
    
    addYearsMonthsDays(aDateTime: amGeneralDateTime.am_general.A_DateTime, nbYears: number, nbMonths: number, nbDays: number);
    addHoursMinutesSecondsMilliseconds(aDateTime: amGeneralDateTime.am_general.A_DateTime, nbHours: number, nbMinutes: number, nbSeconds: number, nbMilliseconds: number);
    add_yyyMMdd_hhmmss_ms(aDateTime: amGeneralDateTime.am_general.A_DateTime,  nbYears: number, nbMonths: number, nbDays: number, nbHours: number, nbMinutes: number, nbSeconds: number, nbMilliseconds: number);

  }
}

 