import amTransversalServices = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_UtilsService");

import amGeneralDateTime = require("../../../../../app/ts/abstract/am_general/a_datetime/A_DateTime");

import rmTransversalServicesRUtilsService = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/R_UtilsService");
                                                     
//import rmLuxon = require("./luxon/luxon");

declare var rmLuxon : any;
//https://moment.github.io/luxon/docs/manual/install.html

export module rm_transversalservices
{
  export class IImpl_Utils_DateTime_R implements amTransversalServices.am_transversalservices.I_UtilsService
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServicesRUtilsService.rm_transversalservices.R_UtilsService;

    //----------- constructor 
    constructor(owner: rmTransversalServicesRUtilsService.rm_transversalservices.R_UtilsService)  
    {
      this._owner = owner;  
    }

    //--------------------------------------------
    public formatDateTime(aDateTime: amGeneralDateTime.am_general.A_DateTime, format: string, locale: string) : string
    {
      /*
      var dt = rmMoment.moment(aDateTime.getAsISOString());  //'2014-08-06T13:07:04.054'
      var strDate = "";
      strDate = rmMoment.moment.format(format); // 'ro' , 'yyyy LLL dd'//=> '2014 ao�t 06'
      // console.log(JSON.stringify(dt));
      return strDate;
      */
      // sometimes even the US needs 24-hour time
      var options = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: 'numeric', minute: 'numeric', second: 'numeric',
        hour12: false,
      }  ;
      var crtDate = new Date(aDateTime.getYear(), aDateTime.getMonth()-1 , aDateTime.getDay(), aDateTime.getHour(), aDateTime.getMinutes(), aDateTime.getSeconds(), aDateTime.getMilliseconds());
      var strDate = new Intl.DateTimeFormat('en-US', options).format(crtDate); // → "12/19/2012, 19:00:00"
      return strDate;
    }

    //--------------------------------------------
    public formatDateTime2(aDateTime: amGeneralDateTime.am_general.A_DateTime, format: string, locale: string) : string
    {
      var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString());  //'2014-08-06T13:07:04.054'
      var strDate = "";
      strDate = dt.setLocale(locale).toFormat(format); // 'ro' , 'yyyy LLL dd'//=> '2014 ao�t 06'
     // console.log(JSON.stringify(dt));
      return strDate;
    }

    
    public getCrtDateTimeAsString(formatDate: string, formatTime: string) : string
    {
      var strDate ="";
      var strTime ="";
      try{
        var crtDate = new Date();
      }catch(e){
        strDate ="undefined";
        return;
      }
      var strMinutes = "" + crtDate.getMinutes();
      if (crtDate.getMinutes() < 10)
        strMinutes = "0"+ strMinutes;

      var strHours = "" + crtDate.getHours();
      if (crtDate.getHours() < 10)
        strHours = "0"+ strHours;
    
      var strSeconds = "" + crtDate.getSeconds();
      if (crtDate.getSeconds() < 10)
        strSeconds = "0"+ strSeconds;
      
      var strYear = "" + "" + crtDate.getFullYear();
      if ( crtDate.getFullYear() < 10)
        strYear = "0"+ strYear;

      var strMonth = "" + crtDate.getMonth();
      if ( crtDate.getMonth() < 10)
        strMonth = "0"+ strMonth;  
  
      var strDay = "" + crtDate.getDate();
      if ( crtDate.getDate() < 10)
        strDay = "0" + strDay;  

      var strMs = "" + crtDate.getMilliseconds();
      if ( (crtDate.getMilliseconds() >= 100 ) && (crtDate.getMilliseconds() < 1000) )
        strMs = "0"+ strMs;  
      else if ( (crtDate.getMilliseconds() >= 0 ) && (crtDate.getMilliseconds() < 100) )
        strMs = "00"+ strMs;  
  
      if (formatDate == "dd/mm/yyyy")  
        strDate = strDay + "/" + strMonth + "/" + strYear;
      else if (formatDate == "mm/dd/yyyy")  
        strDate = strMonth + "/" + strDay + "/" + strYear;
      else if (formatDate == "yyyy/mm/dd")  
        strDate = strYear + "/" + strMonth + "/" + strDay;

      if (formatTime == "hh:mm:ss")  
        strTime = strHours + ":" + strMinutes + ":" + strSeconds;
      else if (formatTime == "hh:mm")  
        strTime = strHours + ":" + strMinutes ;
      return strDate + " " + strTime;
    }

    //----------------------------------------------------
    public formatDateTimeFromISO(strISODateTime: string, format: string, locale: string) : string
    {
        if (strISODateTime === null)
          return strISODateTime;
        /*
        var options = {
          year: 'numeric', month: 'numeric', day: 'numeric',
          hour: 'numeric', minute: 'numeric', //second: 'numeric',
          hour12: false,
        }  ;
        */
       var dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
       var timeOptions = { hour12: false, hour: '2-digit', minute:'2-digit', second: 'numeric' };
        var strDate ="";
        var strTime ="";
        try{
          var crtDate = new Date(strISODateTime);
          strDate = new Intl.DateTimeFormat(locale, dateOptions).format(crtDate); // → "12/19/2012, 19:00:00"
          strTime = new Intl.DateTimeFormat(locale, timeOptions).format(crtDate); // → "12/19/2012, 19:00:00"
        }catch(e){
          strDate ="undefined";
          return;
        }
        return strDate + " " + strTime;
      } 

    //----------------------------------------------------
    public formatDateTimeFromISO2(strISODateTime: string, format: string, locale: string) : string
    {
      var dt = rmLuxon.DateTime.fromISO(strISODateTime);  //'2014-08-06T13:07:04.054'
      //console.log(JSON.stringify(dt));
      var strDate = "";
      strDate = dt.setLocale(locale).toFormat(format); // 'ro' , 'yyyy LLL dd'//=> '2014 aout 06'
      return strDate;
    } 

    //----------------------------------------------------
    public setDateTimeFromISO(aDateTime: amGeneralDateTime.am_general.A_DateTime, strISODateTime: string) : void
    {
      var dt = rmLuxon.DateTime.fromISO(strISODateTime);  //'2014-08-06T13:07:04.054'
      //console.log(JSON.stringify(dt));
      aDateTime.setDateTime(dt.year, dt.month, dt.day, dt.hour, dt.minute, dt.second, dt.millisecond );
      //console.log(JSON.stringify(dt2));
    } 

    //----------------------------------------------------------------------
    public getCrtDateTime(aDateTime: amGeneralDateTime.am_general.A_DateTime) : void
    {
      var now = new Date();
      aDateTime.setDateTime(now.getFullYear(), now.getMonth()+1, now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds() );
    }

    //------------------------------------
    public getCrtDateTimeAsISOString() : string
    {
      var now = new Date();
      return now.toISOString();
    }

    //----------------------------------------------------------------------
    public getCrtUTCDateTime(aDateTime: amGeneralDateTime.am_general.A_DateTime) : void
    {
      var now = new Date();
      aDateTime.setDateTime(now.getUTCFullYear(), now.getUTCMonth()+1, now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds() );
    }

    //----------------------------------------------------------------------
    public addYears(aDateTime: amGeneralDateTime.am_general.A_DateTime, nbYears: number)
    {
      var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString());  //'2014-08-06T13:07:04.054'
      //console.log(JSON.stringify(dt));
      var dt2 = dt.plus({year: nbYears});
      aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond );
      //console.log(JSON.stringify(dt2));
    }

    //----------------------------------------------------------------------
    public addMonths(aDateTime: amGeneralDateTime.am_general.A_DateTime, nbMonths: number) : void
    {
      var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString());  //'2014-08-06T13:07:04.054'
      //console.log(JSON.stringify(dt));
      var dt2 = dt.plus({month: nbMonths});
      aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond );
      //console.log(JSON.stringify(dt2));
    }    

    //----------------------------------------------------------------------
    public addDays(aDateTime: amGeneralDateTime.am_general.A_DateTime, nbDays: number)
    {
      var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString());  //'2014-08-06T13:07:04.054'
      //console.log(JSON.stringify(dt));
      var dt2 = dt.plus({day: nbDays});
      aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond );
      //console.log(JSON.stringify(dt2));
    }

    //----------------------------------------------------------------------
    public addHours(aDateTime: amGeneralDateTime.am_general.A_DateTime, nbHours: number)
    {
      var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString());  //'2014-08-06T13:07:04.054'
      //console.log(JSON.stringify(dt));
      var dt2 = dt.plus({hour: nbHours});
      aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond );
      //console.log(JSON.stringify(dt2));
    }

    //----------------------------------------------------------------------
    public addMinutes(aDateTime: amGeneralDateTime.am_general.A_DateTime, nbMinutes: number)
    {
      var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString());  //'2014-08-06T13:07:04.054'
      //console.log(JSON.stringify(dt));
      var dt2 = dt.plus({minute: nbMinutes});
      aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond );
      //console.log(JSON.stringify(dt2));

    }

    //----------------------------------------------------------------------
    public addSeconds(aDateTime: amGeneralDateTime.am_general.A_DateTime, nbSeconds: number)
    {
      var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString());  //'2014-08-06T13:07:04.054'
      //console.log(JSON.stringify(dt));
      var dt2 = dt.plus({second: nbSeconds});
      aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond );
      //console.log(JSON.stringify(dt2));
    }

    //----------------------------------------------------------------------
    public addMillisecond(aDateTime: amGeneralDateTime.am_general.A_DateTime, nbMilliseconds: number)
    {
      var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString());  //'2014-08-06T13:07:04.054'
      //console.log(JSON.stringify(dt));
      var dt2 = dt.plus({millisecond: nbMilliseconds});
      aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond );
      //console.log(JSON.stringify(dt2));
    }

    //----------------------------------------
    public addYearsMonthsDays(aDateTime: amGeneralDateTime.am_general.A_DateTime, nbYears: number, nbMonths: number, nbDays: number)
    {
      var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString());  //'2014-08-06T13:07:04.054'
      //console.log(JSON.stringify(dt));
      var dt2 = dt.plus({year: nbYears, month: nbMonths, day: nbDays});
      aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond );
      //console.log(JSON.stringify(dt2));
    }

    //----------------------------------------
    public addHoursMinutesSecondsMilliseconds(aDateTime: amGeneralDateTime.am_general.A_DateTime, nbHours: number, nbMinutes: number, nbSeconds: number, nbMilliseconds: number)
    {
      var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString());  //'2014-08-06T13:07:04.054'
      //console.log(JSON.stringify(dt));
      var dt2 = dt.plus({hour: nbHours, minute: nbMinutes, second: nbSeconds, millisecond: nbMilliseconds});
      aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond );
      //console.log(JSON.stringify(dt2));
    }

    //----------------------------------------
    public add_yyyMMdd_hhmmss_ms(aDateTime: amGeneralDateTime.am_general.A_DateTime,  nbYears: number, nbMonths: number, nbDays: number, nbHours: number, nbMinutes: number, nbSeconds: number, nbMilliseconds: number)
    {
      var dt = rmLuxon.DateTime.fromISO(aDateTime.getAsISOString());  //'2014-08-06T13:07:04.054'
      //console.log(JSON.stringify(dt));
      var dt2 = dt.plus({year: nbYears, month: nbMonths, day: nbDays, hour: nbHours, minute: nbMinutes, second: nbSeconds, millisecond: nbMilliseconds});
      aDateTime.setDateTime(dt2.year, dt2.month, dt2.day, dt2.hour, dt2.minute, dt2.second, dt2.millisecond );
      //console.log(JSON.stringify(dt2));
    }


  }
} 


/*
Years vary because of leap years.
Months vary because they're just different lengths.
Days vary because DST transitions mean some days are 23 or 25 hours long.
Quarters are always three months, but months vary in length so quarters do too.
Weeks are always the same number of days, but days vary so weeks do too.
These units use time math:

Hours are always 60 minutes
Minutes are always 60 seconds
Seconds are always 1000
      //console.log(rmMoment.moment('2014-08-20 15:30:00').format('MM/DD/YYYY h:mm a')); 
      //rmMoment.moment(""+aDateTime.getYear()+)
      
      //const luxon = rmLuxon.DateTime.local;
      ///console.log(JSON.stringify(luxon));
      //var dt = rmLuxon.DateTime.fromISO('2014-08-06T13:07:04.054');
      //console.log(JSON.stringify(dt));
      //var dt = rmLuxon.DateTime.fromObject({day: 22, hour: 12, zone: 'America/Los_Angeles', numberingSystem: 'beng'})
      
     // var mom = moment('2014-08-20 15:30:00');
     // mom.format('MM/DD/YYYY h:mm a');
    //  console.log(JSON.stringify(mom));
     // rmLuxon.DateTime.toFormat()
      //dt.toFormat('yyyy LLL dd'); //=> '2014 ao�t 06'

      //rmLuxon.DateTime.fromISO('2014-08-06T13:07:04.054')
      //.setLocale('fr')
      //.toFormat('yyyy LLL dd'); //=> '2014 ao�t 06'
*/
 