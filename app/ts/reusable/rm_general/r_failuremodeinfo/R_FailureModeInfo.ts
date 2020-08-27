import amGeneralFailureModeInfo     = require("../../../../../app/ts/abstract/am_general/a_failuremodeinfo/A_FailureModeInfo");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_FailureModeInfo  extends rmGeneralEntity.rm_general.R_Entity
                             implements amGeneralFailureModeInfo.am_general.A_FailureModeInfo
  {
    //--- properties
    _mode : string; //"manual" "automatic"
    _arrInpuPriorities : Array<string>;


    //----------- constructor 
    constructor()  
    {  
      super();
      this._mode = "manual"; //"manual" "automatic"
      this._arrInpuPriorities = new Array<string>();

    }

    //-----------------------------
    public getMode() : string 
    {
      return this._mode;
    }

    //-----------------------------
    public setMode(mode : string) : void
    {
      this._mode = mode;
    }

    //-----------------------------
    public setInputPriorities(arrInpuPriorities: Array<string>)  : void
    {
      this._arrInpuPriorities = arrInpuPriorities;
    }

    //-----------------------------
    public getInputPriorities() : Array<string>
    {
      return this._arrInpuPriorities;
    }

  }
} 