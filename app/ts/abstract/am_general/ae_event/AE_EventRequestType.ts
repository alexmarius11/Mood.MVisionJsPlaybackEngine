import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export enum AE_EventRequestType {
    EvtRequest_AbortParent = 1,
    EvtRequest_AbortSiblings = 2,
    EvtRequest_EndSiblings = 4,
    EvtRequest_SuspendSiblings = 8,
    EvtRequest_ResumeSiblings = 16,
    EvtRequest_None = 0
  }

} 