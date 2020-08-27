import amGeneralContext   = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralError     = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_Context    extends rmGeneralEntity.rm_general.R_Entity
                          implements amGeneralContext.am_general.A_Context
  {
    //--- properties
    _result :  string;
    _bResult:  boolean;
    _iResult:  number;
    _dResult:  number;
    _error  :  amGeneralError.am_general.A_Error;
    _arrayResult: Array<any>;
    _objectResult: any;
    _object2Result: any;
    _bRemoteCallback: boolean;
    _callId: number;

    //----------- constructor 
    constructor()  
    {  
      super();
      this._arrayResult  = null;
      this._result       = null;
      this._error        = null;
      this._bResult      = null;
      this._objectResult = null;
      this._object2Result = null;
      this._bRemoteCallback = false;
      this._callId = 0;
    }

    //----------------------------------------
    public copy(src: amGeneralContext.am_general.A_Context) : number
    {
      this._arrayResult     = src._arrayResult;
      this._result          = src._result;
      if (src._error != null)
      {
        this._error.setError(src._error._id, src._error._msg);    
      }else{
        this._error           = null;
      }
      this._bResult         = src._bResult;
      this._iResult         = src._iResult;
      this._dResult         = src._dResult;
      this._objectResult    = src._objectResult;
      this._object2Result   = src._object2Result;
      this._bRemoteCallback = src._bRemoteCallback;
      this._callId          = src._callId;  
      return 0;
    }
    //---------------------------
    public isError()    : boolean
    {
      if (this._error == null)
        return false;
      return this._error.isError();          
    }
    
    //-----------------------------
    public setError(error :  amGeneralError.am_general.A_Error) : void
    {
      this._error = error; 
    }

    //---------------------------
    public getError()   : amGeneralError.am_general.A_Error
    {
      return this._error; 
    }

    //-----------------------------
    public setResult(result : string) : void
    {
      this._result = result; 
    }

    //---------------------------
    public getResult()   : string
    {
      return this._result; 
    }

    //-----------------------------
    public setBoolResult(bResult : boolean) : void
    {
      this._bResult = bResult; 
    }

    //---------------------------
    public getBoolResult()   : boolean
    {
      return this._bResult; 
    }

    //-----------------------------
    public setIntResult(iResult : number) : void
    {
      this._iResult = iResult; 
    }

    //---------------------------
    public getIntResult()   : number
    {
      return this._iResult; 
    }

    //-----------------------------
    public setDoubleResult(dResult : number) : void
    {
      this._dResult = dResult; 
    }

    //---------------------------
    public getDoubleResult()   : number
    {
      return this._dResult; 
    }

    //-----------------------------
    public setArrayResult(arrayResult : Array<any>) : void
    {
      this._arrayResult = arrayResult; 
    }

    //---------------------------
    public getArrayResult()   : Array<any>
    {
      return this._arrayResult; 
    }
    
    //-----------------------------
    public setObjectResult(objectResult : any) : void
    {
      this._objectResult = objectResult; 
    }

    //---------------------------
    public getObjectResult()   : any
    {
      return this._objectResult; 
    }

    //---------------------------
    public getObject2Result() : any
    {
      return this._object2Result; 
    }

    //---------------------------
    public setObject2Result(object2Result : any) : void
    {
      this._object2Result = object2Result; 
    }

    //---------------------------------
    public isRemoteCallback()  : boolean
    {
      return this._bRemoteCallback;
    }

    //-------------------------
    public setRemoteCallback(bRemoteCallback : boolean) : void
    {
      this._bRemoteCallback =  bRemoteCallback;
    }

    //--------------------------------
    public getCallId() : number
    {
      return this._callId;
    }

    //--------------------------------------------
    public setCallId(callId: number) : void
    {
      this._callId = callId;
    }

  }
} 