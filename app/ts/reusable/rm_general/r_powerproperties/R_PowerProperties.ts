import amGeneralPowerProperties     = require("../../../../../app/ts/abstract/am_general/a_powerproperties/A_PowerProperties");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_PowerProperties extends rmGeneralEntity.rm_general.R_Entity
                                  implements amGeneralPowerProperties.am_general.A_PowerProperties
  {

    //---- properties
    _powerCommand : string;    // "shutdown" , "reboot", ...;

    // PM Mode
    // Power Off : Normal DC off status.
    // Sustain Aspect Ratio : Normal DC off status except that Switching IC stays on.
    // Screen Off : Automatically changes to Screen Off status when entering the DPM mode, Auto Off (15 mins, 4 hours), or Abnormal Shut Down.
    // Screen Off Always : Automatically changes to Screen Off status when entering the DPM mode, Auto Off (15 mins, 4 hours), Off Timer, Abnormal Shut Down, or when there is input from the remote control's Power buttonor the monitor's Off button.
    // To change the screen from Off to On status, there must be input from the remote control's Power or Input button, or the monitor's On button.
    _powerMode : string;

    //------------------------------------------------------- 
    // Power On Delay (0 ~ 250)
    // - This feature delays power on in order to prevent overload when multiple monitor sets are turned on simultaneously.
    // - You can set the delay interval in the range of 0 to 250 seconds
    _powerOnDelay_delayTime : number;

    //Display power management = DPM
    //You can configure the DPM (Display Power Management) function.
    //Off: you can set this option to Off, 5 sec./10 sec./15 sec./1 min./3 min./5 min./10 min.
    //If this option is not set to Off, the monitor set enters the DPM mode when there is no input signal.
    //If you set this option to Off, the DPM function is disabled.
    //In the following cases, you can set DPM to Off or 10 min only. If DPM was set to 5 sec, 10 sec, 15 sec, 1 min, or 5
    //    min, it will be changed to 10 min.
    //   - When USB Auto Playback is set to Photo or Movie
    //   - When Fail Over is set to Auto or Manual
    _displayPowerMng_mode   : string; //"off"

    _displayPowerMng_wakeupSignal : string;  //"clock"

    _wakedOnLan : boolean; 

    //----------- constructor 
    constructor()  
    {  
      super();
      this._powerCommand = "" ; //"reboot", "shutdown"

      this._powerMode = "" ; //"power-off"

      this._powerOnDelay_delayTime = 20;

      this._displayPowerMng_mode   = "";  //"off
      this._displayPowerMng_wakeupSignal = ""; //"clock"

      this._wakedOnLan = false;
    }

    //------------------------------
    //    power command
    //------------------------------

    //-----------------------------
    public getPowerCommand() : string
    {
      return this._powerCommand;
    }

    //-----------------------------
    public setPowerCommand(powerCommand : string) : void
    {
      this._powerCommand = powerCommand;
    }

    //------------------------------
    //    set/get power mode 
    //------------------------------

    //-----------------------------
    public getPower_mode() : string
    {
      return this._powerMode;
    }

    //-----------------------------
    public setPower_mode(powerMode : string) : void
    {
      this._powerMode = powerMode;
    }

    
    //------------------------------
    //    set/get powerOnDelay_delayTime
    //------------------------------

    //-----------------------------
    public getPowerOnDelay_delayTime() : number
    {
      return this._powerOnDelay_delayTime ;
    }

    //-----------------------------
    public setPowerOnDelay_delayTime(powerOnDelayDelayTime : number) : void
    {
      this._powerOnDelay_delayTime = powerOnDelayDelayTime;
    }

    //------------------------------
    //    set/get displayPowerManagement_mode
    //------------------------------

    //-----------------------------
    public getDisplayPowerMng_mode() : string
    {
      return this._displayPowerMng_mode ;
    }

    //-----------------------------
    public setDisplayPowerMng_mode(displayPowerMng_mode : string) : void
    {
      this._displayPowerMng_mode = displayPowerMng_mode;
    }

    //------------------------------
    //    set/get displayPowerManagement_wakeupSignal
    //------------------------------

    //-----------------------------
    public getDisplayPowerMng_wakeupSignal() : string
    {
      return this._displayPowerMng_wakeupSignal ;
    }

    //-----------------------------
    public setDisplayPowerMng_wakeupSignal(displayPowerMng_wakeupSignal : string) : void
    {
      this._displayPowerMng_wakeupSignal = displayPowerMng_wakeupSignal;
    }


    //------------------------------
    //    is waked on lan
    //------------------------------

    //-----------------------------
    public isWakedOnLan() : boolean
    {
      return this._wakedOnLan;
    }

    //-----------------------------
    public setWakedOnLan(wakedOnLan : boolean) : void
    {
      this._wakedOnLan = wakedOnLan;
    }

  }
} 