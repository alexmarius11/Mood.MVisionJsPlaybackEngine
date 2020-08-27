import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amPlaybackDayOpeningHours = require("../../../../../app/ts/abstract/am_playback/a_openinghours/A_DayOpeningHours");
import amGeneralError     = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amGeneralDateTime  = require("../../../../../app/ts/abstract/am_general/a_datetime/A_DateTime");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");


export module rm_playback
{
  export class R_DayOpeningHours   extends rmGeneralEntity.rm_general.R_Entity
                                   implements amPlaybackDayOpeningHours.am_playback.A_DayOpeningHours
  {

    //------------------
    //--- properties
    _openDayName : string;
    _openTime : amGeneralDateTime.am_general.A_DateTime;

    _closeDayName : string;
    _closeTime : amGeneralDateTime.am_general.A_DateTime;
    
    //----------- constructor 
    constructor()  
    {  
      super();
    }

    //---------------------------------
    public getOpenDayName() : string
    {
      return this._openDayName;
    }

    //---------------------------------
    public setOpenDayName(openDayName: string) : void
    {
      this._openDayName = openDayName;
    }

    //-------------------------
    public getOpenTime() : amGeneralDateTime.am_general.A_DateTime
    {
      return this._openTime;
    }

    //------------------------
    public setOpenTime(openTime: amGeneralDateTime.am_general.A_DateTime) : void 
    {
      this._openTime = openTime; // to do
    }

    //-------------------------------
    public getCloseDayName(): string
    {
      return this._closeDayName;
    }

    //---------------------------------
    public setCloseDayName(closeDayName: string) : void
    {
      this._closeDayName = closeDayName;
    }

    //-------------------------
    public getCloseTime() : amGeneralDateTime.am_general.A_DateTime
    {
      return this._closeTime;
    }

    //------------------------
    public setCloseTime(closeTime: amGeneralDateTime.am_general.A_DateTime) : void 
    {
      this._closeTime = closeTime; // to do
    }


  }
} 

