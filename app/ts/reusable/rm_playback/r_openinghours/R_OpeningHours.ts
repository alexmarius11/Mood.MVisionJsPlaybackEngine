import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amPlaybackOpeningHours = require("../../../../../app/ts/abstract/am_playback/a_openinghours/A_OpeningHours");
import amPlaybackDayOpeningHours = require("../../../../../app/ts/abstract/am_playback/a_openinghours/A_DayOpeningHours");
import amGeneralError     = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");


export module rm_playback
{
  export class R_OpeningHours   extends rmGeneralEntity.rm_general.R_Entity
                                implements amPlaybackOpeningHours.am_playback.A_OpeningHours
  {

    //------------------
    //--- properties
    _openingHoursList: Array<amPlaybackDayOpeningHours.am_playback.A_DayOpeningHours>;
    
    //----------- constructor 
    constructor()  
    {  
      super();
      this._openingHoursList = new Array<amPlaybackDayOpeningHours.am_playback.A_DayOpeningHours>();
    }

    //-----------------------------
    public getOpeningHours() : Array<amPlaybackDayOpeningHours.am_playback.A_DayOpeningHours>
    {
      return this._openingHoursList;
    }

    //--------------------------
    public addDayOpeningHours(dayOpeningHour : amPlaybackDayOpeningHours.am_playback.A_DayOpeningHours) : void 
    {
      this._openingHoursList.push(dayOpeningHour);
    }

    //--------------------------
    public getDayOpeningHours(startDayName : string) : amPlaybackDayOpeningHours.am_playback.A_DayOpeningHours
    {
      if (startDayName == null)
        return null;
      var foundDayOpeningHour: amPlaybackDayOpeningHours.am_playback.A_DayOpeningHours = null;
      if (this._openingHoursList == null)
        return null;
      var i = 0;
     
      for (i = 0; i < this._openingHoursList.length; i++)
      {
        if (this._openingHoursList[i] == null)
          continue;
        if (startDayName == this._openingHoursList[i].getOpenDayName())  
        {
          foundDayOpeningHour = this._openingHoursList[i];
          break; 
        }  
      }
      return foundDayOpeningHour;
    }


  }
} 

