import amGeneral     = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_Error    extends rmGeneralEntity.rm_general.R_Entity
                          implements amGeneral.am_general.A_Error
  {
    //--- properties
    _id:  number;
    _msg: string;
  
    //----------- constructor 
    constructor()  
    {  
      super();
      this._id  = 0;
      this._msg = "";
    }

    //---------------------------
    public isError()    : boolean
    {
      if (this._id == 0)
        return false;
      return true;          
    }
    
    //-----------------------------
    public setError(errId: number, errMsg: string) : void
    {
      this._id  = errId; 
      this._msg = errMsg; 
    }

    //---------------------------
    public getErrId()   : number
    {
      return this._id; 
    }

    //---------------------------
    public getErrMsg()  : string
    {
      return this._msg; 
    }

    //-----------------------------
    public setErrId(errId: number) : void
    {
      this._id = errId; 
    }

    //------------------------------
    public setErrMsg(errMsg: string) : void
    {
      this._msg= errMsg;
    }

  }
} 