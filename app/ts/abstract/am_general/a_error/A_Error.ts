import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_Error extends amGeneral.am_general.A_Entity
  {
    _id:  number;
    _msg: string;

    isError()    : boolean;
    setError(errId: number, errMsg: string)   : void;

    getErrId()   : number;
    getErrMsg()  : string;

    setErrId(errId: number)   : void;
    setErrMsg(errMsg: string) : void;
 }

} 