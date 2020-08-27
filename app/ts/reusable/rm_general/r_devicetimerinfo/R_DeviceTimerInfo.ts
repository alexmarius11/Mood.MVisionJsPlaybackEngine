import amGeneralDeviceTimerInfo     = require("../../../../../app/ts/abstract/am_general/a_devicetimerinfo/A_DeviceTimerInfo");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_DeviceTimerInfo  extends rmGeneralEntity.rm_general.R_Entity
                                  implements amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo
  {
    //--- properties
    _hour   : number ; //= 9;
    _minute : number ; //= 0;
    _onMon  : boolean; //Power.TimerWeek.MONDAY + Power.TimerWeek.FRIDAY;
    _onTue  : boolean; 
    _onWed  : boolean; 
    _onThu  : boolean;
    _onFri  : boolean;
    _onSat  : boolean;
    _onSun  : boolean;
    _inputSource : string;  //= "hdmi:1" ; ////"ext://hdmi:1";

    //----------- constructor 
    constructor()  
    {  
      super();
      this._hour   = 0;
      this._minute = 0; //= 0;
      this._onMon  = false; //Power.TimerWeek.MONDAY + Power.TimerWeek.FRIDAY;
      this._onTue  = false;
      this._onWed  = false;
      this._onThu  = false;
      this._onFri  = false;
      this._onSat  = false;
      this._onSun  = false;
      this._inputSource = "";  //= "hdmi:1" ; ////"ext://hdmi:1";
    }
    
    //-----------------------------
    public getHour() : number
    {
       return this._hour ;
    }

    //-----------------------------
    public setHour(hour : number) : void
    {
      this._hour = hour ;
    }

    //-----------------------------
    public getMinute() : number
    {
       return this._minute ;
    }

    //-----------------------------
    public setMinute(minute : number) : void
    {
      this._minute = minute ;
    }

    //-----------------------------
    public isOnMon() : boolean
    {
       return this._onMon ;
    }

    //-----------------------------
    public setOnMon(onMon : boolean) : void
    {
      this._onMon = onMon ;
    }

    //-----------------------------
    public isOnTue() : boolean
    {
       return this._onTue ;
    }

    //-----------------------------
    public setOnTue(onTue : boolean) : void
    {
      this._onTue = onTue ;
    }

    //-----------------------------
    public isOnWed() : boolean
    {
       return this._onWed;
    }

    //-----------------------------
    public setOnWed(onWed : boolean) : void
    {
      this._onWed = onWed ;
    }

    //-----------------------------
    public isOnThu() : boolean
    {
       return this._onThu;
    }

    //-----------------------------
    public setOnThu(onThu : boolean) : void
    {
      this._onThu = onThu ;
    }

    //-----------------------------
    public isOnFri() : boolean
    {
       return this._onFri;
    }

    //-----------------------------
    public setOnFri(onFri : boolean) : void
    {
      this._onFri = onFri ;
    }

    //-----------------------------
    public isOnSat() : boolean
    {
       return this._onSat;
    }

    //-----------------------------
    public setOnSat(onSat: boolean) : void
    {
      this._onSat = onSat ;
    }

    //-----------------------------
    public isOnSun() : boolean
    {
       return this._onSun;
    }

    //-----------------------------
    public setOnSun(onSun: boolean) : void
    {
      this._onSun = onSun ;
    }

    //-----------------------------
    public getInputSource() : string
    {
      return this._inputSource;
    }

    //-----------------------------
    public setInputSource(inputSource: string) : void
    {
      this._inputSource = inputSource ;
    }

  }
} 