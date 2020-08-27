import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_SystemMonitorInfo extends amGeneral.am_general.A_Entity
  {
    
    isFanMonitored()    : boolean
    setFanMonitor(fan : boolean) : void
    
    isSignalMonitored()    : boolean;
    setSignalMonitor(signal : boolean) : void;

    isLampMonitored()    : boolean;
    setLampMonitor(lamp : boolean) : void;

    isScreenMonitored()    : boolean;
    setScreenMonitor(screen : boolean) : void;

    isTemperatureMonitored()    : boolean;
    setTemperatureMonitor(temperature : boolean) : void;

    getMonitorEventHandler()    : any;
    setMonitorEventHandler(monitorEventHandler : any) : void;
    
    
  }

} 