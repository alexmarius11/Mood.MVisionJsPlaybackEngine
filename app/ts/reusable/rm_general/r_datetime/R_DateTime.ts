import amGeneralDateTime     = require("../../../../../app/ts/abstract/am_general/a_datetime/A_DateTime");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_DateTime extends rmGeneralEntity.rm_general.R_Entity
                          implements amGeneralDateTime.am_general.A_DateTime
  {
    //--- properties
    _year: number;
    _month: number;
    _day: number;

    _hour: number;
    _minutes: number;
    _seconds: number;
    _milliseconds: number;

    _strTime: string;
    _strDate: string;
    _strDateTime : string; 


    //----------- constructor 
    constructor()  
    {  
      super();

      this._year = 1970;
      this._month = 1;
      this._day = 1;
      this._hour    = 0;
      this._minutes = 0;
      this._seconds = 0;
      this._milliseconds = 0;

      this._strTime = "";
      this._strDate = "";
      this._strDateTime = ""; 
    }
    
    //-----------------------------
    public setDateTime(year: number, month: number, day: number, hour: number, minutes: number, seconds: number, milliseconds: number) : void
    {
      this._year    = year; 
      this._month   = month; 
      this._day     = day; 
      this._hour    = hour; 
      this._minutes = minutes; 
      this._seconds = seconds; 
      this._milliseconds = milliseconds; 
    }

    //-----------------------------
    public setDate(year: number, month: number, day: number) : void
    {
      this._year    = year; 
      this._month   = month; 
      this._day     = day; 
      this._hour    = 0; 
      this._minutes = 0; 
      this._seconds = 0; 
      this._milliseconds = 0; 
    }


    //-----------------------------
    public setYear(year: number) : void
    {
      this._year = year; 
    }

    //---------------------------
    public getYear()   : number
    {
      return this._year; 
    }

    //-----------------------------
    public setMonth(month: number) : void
    {
      this._month = month; 
    }

    //---------------------------
    public getMonth()   : number
    {
      return this._month; 
    }

    //-----------------------------
    public setDay(day: number) : void
    {
      this._day = day; 
    }

    //---------------------------
    public getDay()   : number
    {
      return this._day; 
    }


    //-----------------------------
    public setHour(hour: number) : void
    {
      this._hour  = hour; 
    }

    //---------------------------
    public getHour()   : number
    {
      return this._hour; 
    }

    //-----------------------------
    public setMinutes(minutes: number) : void
    {
      this._minutes = minutes; 
    }

    //---------------------------
    public getMinutes() : number
    {
      return this._minutes; 
    }

    //-----------------------------
    public setSeconds(seconds: number) : void
    {
      this._seconds = seconds; 
    }

    //---------------------------
    public getSeconds() : number
    {
      return this._seconds; 
    }

    //-----------------------------
    public setMilliseconds(milliseconds: number) : void
    {
      this._milliseconds = milliseconds; 
    }

    //---------------------------
    public getMilliseconds() : number
    {
      return this._milliseconds; 
    }

    //-----------------------------------
    public isEquals(aOtherDateTime: amGeneralDateTime.am_general.A_DateTime) : boolean 
    {
      if (this._year != aOtherDateTime.getYear())
        return false;

      if (this._month != aOtherDateTime.getMonth())
        return false;

      if (this._day != aOtherDateTime.getDay())
        return false;
      
      if (this._hour != aOtherDateTime.getHour())
        return false;

      if (this._minutes != aOtherDateTime.getMinutes())
        return false;

      if (this._seconds != aOtherDateTime.getSeconds())
        return false;
        
      if (this._milliseconds != aOtherDateTime.getMilliseconds())
        return false;
      
      return true;
    }

    //-----------------------------------
    public isGreater(aOtherDateTime: amGeneralDateTime.am_general.A_DateTime) : boolean 
    {
      if (this._year > aOtherDateTime.getYear())
        return true;
      if (this._year < aOtherDateTime.getYear())
        return false;

      if (this._month > aOtherDateTime.getMonth())
        return true;
      if (this._month < aOtherDateTime.getMonth())
        return false;

      if (this._day > aOtherDateTime.getDay())
        return true;
      if (this._day < aOtherDateTime.getDay())
        return false;
      
      if (this._hour > aOtherDateTime.getHour())
        return true;
      if (this._hour < aOtherDateTime.getHour())
        return false;

      if (this._minutes > aOtherDateTime.getMinutes())
        return true;
      if (this._minutes < aOtherDateTime.getMinutes())
        return false;

      if (this._seconds > aOtherDateTime.getSeconds())
        return true;
      if (this._seconds < aOtherDateTime.getSeconds())
        return false;
        
      if (this._milliseconds > aOtherDateTime.getMilliseconds())
        return true;
      if (this._milliseconds < aOtherDateTime.getMilliseconds())
        return false;
      
      return false;
    }

    //-----------------------------------
    public isLower(aOtherDateTime: amGeneralDateTime.am_general.A_DateTime) : boolean 
    {
      if (this._year > aOtherDateTime.getYear())
        return false;
      if (this._year < aOtherDateTime.getYear())
        return true;

      if (this._month > aOtherDateTime.getMonth())
        return false;
      if (this._month < aOtherDateTime.getMonth())
        return true;

      if (this._day > aOtherDateTime.getDay())
        return false;
      if (this._day < aOtherDateTime.getDay())
        return true;
      
      if (this._hour > aOtherDateTime.getHour())
        return false;
      if (this._hour < aOtherDateTime.getHour())
        return true;

      if (this._minutes > aOtherDateTime.getMinutes())
        return false;
      if (this._minutes < aOtherDateTime.getMinutes())
        return true;

      if (this._seconds > aOtherDateTime.getSeconds())
        return false;
      if (this._seconds < aOtherDateTime.getSeconds())
        return true;
        
      if (this._milliseconds > aOtherDateTime.getMilliseconds())
        return false;
      if (this._milliseconds < aOtherDateTime.getMilliseconds())
        return true;
      
      return false;
    }

    //---------------------------------
    public getAsString() : string
    {
      return "" + this._year     + "/" 
                + this._month    + "/" 
                + this._day      + " " 
                + this._hour     + ":" 
                + this._minutes  + ":" 
                + this._seconds  + "." 
                + this._milliseconds;
    }

    //---------------------------------
    public getAsISOString() : string
    {
      var strMinutes="" + this._minutes;
      if (this._minutes < 10)
        strMinutes = "0"+ this._minutes;

      var strHour="" + this._hour;
      if (this._hour < 10)
        strHour = "0"+ this._hour;  
  
      var strSeconds="" + this._seconds;
      if (this._seconds < 10)
        strSeconds = "0"+ this._seconds;  

      var strMonth ="" + this._month;
      if (this._month < 10)
        strMonth = "0"+ this._month;  

      var strDay="" + this._day;
      if (this._day < 10)
        strDay = "0"+ this._day;  

      var strMs ="" + this._milliseconds;
      if ( (this._milliseconds >= 100 ) && (this._milliseconds < 1000) )
        strMs = "0"+ this._milliseconds;  
      else if ( (this._milliseconds >= 0 ) && (this._milliseconds < 100) )
        strMs = "00"+ this._milliseconds;  

      return "" 
        + this._year     + "-" 
        + strMonth       + "-" 
        + strDay         + "T" 
        + strHour        + ":" 
        + strMinutes     + ":" 
        + strSeconds     + "." 
        + strMs;
    }

    //----------------------------------------------
    public setDateAsString(strDate: string) : void //hh:mm:ss.z
    {
      this._strDate = strDate;
    }

    //-----------------------------
    public getDateAsString() : string 
    {
      return this._strDate; //to do 
    }

    //----------------------------------------------
    public setTimeAsString(strTime: string) : void //hh:mm:ss.z
    {
      this._strTime = strTime;
    }

    //-----------------------------
    public getTimeAsString() : string 
    {
      return this._strTime; //to do 
    }

    //-----------------------------
    public setDateTimeAsString(strDateTime : string) : void
    {
      this._strDateTime = strDateTime; //to do 
    }

    //-----------------------------
    public getDateTimeAsString() : string 
    {
      return this._strDateTime; //to do 
    }
    
  }
}
 