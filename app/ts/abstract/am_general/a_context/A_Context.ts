import amGeneralEntity = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

export module am_general
{
  export interface A_Context extends amGeneralEntity.am_general.A_Entity
  {
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

    copy(src: A_Context) : number;

    isError()    : boolean;
    setError(error : amGeneralError.am_general.A_Error) : void;
    getError()   : amGeneralError.am_general.A_Error;

    getResult()    : string;
    setResult(result: string) : void;

    setBoolResult(bResult : boolean) : void;
    getBoolResult()   : boolean;
    
    setIntResult(iResult : number) : void;
    getIntResult()   : number;

    setDoubleResult(dResult : number) : void;
    getDoubleResult()   : number;
    
    getArrayResult()   : Array<any>;
    setArrayResult(arrayResult : Array<any>) : void;

    getObjectResult() : any;
    setObjectResult(objectResult : any) : void;

    getObject2Result() : any;
    setObject2Result(object2Result : any) : void;

    isRemoteCallback()    : boolean;
    setRemoteCallback(bRemoteCallback : boolean) : void;
    
    getCallId() : number;
    setCallId(callId: number) : void;
  }

} 