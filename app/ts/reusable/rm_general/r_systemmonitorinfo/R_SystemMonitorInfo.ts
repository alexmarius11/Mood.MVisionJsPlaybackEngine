
import amGeneralSystemMonitorInfo = require("../../../../../app/ts/abstract/am_general/a_systemmonitorinfo/A_SystemMonitorInfo");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_SystemMonitorInfo  extends rmGeneralEntity.rm_general.R_Entity
                                    implements amGeneralSystemMonitorInfo.am_general.A_SystemMonitorInfo
  {
    //--- properties
    _fan    : boolean;
    _signal : boolean;
    _lamp   : boolean;
    _screen : boolean;
    _temperature  : boolean;
    _monitorEventHandler : any;

    //----------- constructor 
    constructor()  
    {  
      super();
      this._fan                 = false; //: true,
      this._signal              = false; //: true,
      this._lamp                = false; //:true
      this._screen              = false; //: true;
      this._temperature         = false; //: true
      this._monitorEventHandler = null;
    }

    //-------------------------------------
    public isFanMonitored()    : boolean
    {
      return this._fan;
    }

    //-------------------------------------
    public setFanMonitor(fan : boolean) : void
    {
      this._fan = fan;;
    }
    
    //-------------------------------------
    public isSignalMonitored()    : boolean
    {
      return this._signal;
    }

    //-------------------------------------
    public setSignalMonitor(signal : boolean) : void
    {
      this._signal = signal;
    }

    //-------------------------------------
    public isLampMonitored()    : boolean
    {
      return this._lamp;
    }

    //-------------------------------------
    public setLampMonitor(lamp : boolean) : void
    {
      this._lamp = lamp;
    }

    //-------------------------------------
    public isScreenMonitored()    : boolean
    {
      return this._screen;
    }

    //-------------------------------------
    public setScreenMonitor(screen : boolean) : void
    {
      this._screen = screen;
    }

    //-------------------------------------
    public isTemperatureMonitored()    : boolean
    {
      return this._temperature;
    }

    //-------------------------------------
    public setTemperatureMonitor(temperature : boolean) : void
    {
      this._temperature = temperature;
    }

    //-------------------------------------
    public getMonitorEventHandler()    : any
    {
      return this._monitorEventHandler;
    }

    //-------------------------------------
    public setMonitorEventHandler(monitorEventHandler : any) : void
    {
      this._monitorEventHandler = monitorEventHandler ;
    }
    
    
  }
} 