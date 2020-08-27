import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralEventRequestType = require("../../../../../app/ts/abstract/am_general/ae_event/AE_EventRequestType");

export module am_general
{
  export interface AE_Event extends amGeneral.am_general.A_Entity
  {
    copy(srcEvent: AE_Event) : number;

    getEventId()    : number;
    setEventId(evtId: number) : void;

    getReceiver() : any;
    setReceiver(receiver: any) : void;

    getSender() : any;
    setSender(sender: any) : void;

    getTargetAddress()  : Array<number>;
    setTargetAddress(targetAddress: Array<number>) : void;

    getCrtTargetIdx()  : number;
    setCrtTargetIdx(crtTargetIdx: number) : void;

    getEventInfo() : any;
    setEventInfo(eventInfo : any) : void;

    getEventRequest() : amGeneralEventRequestType.am_general.AE_EventRequestType;
    setEventRequest(eventRequest: amGeneralEventRequestType.am_general.AE_EventRequestType);
  }

} 