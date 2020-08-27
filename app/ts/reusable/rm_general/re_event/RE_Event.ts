import amGeneralEvent            = require("../../../../../app/ts/abstract/am_general/ae_event/AE_Event");
import amGeneralEventRequestType = require("../../../../../app/ts/abstract/am_general/ae_event/AE_EventRequestType");
import rmGeneralEntity           = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class RE_Event   extends rmGeneralEntity.rm_general.R_Entity
                          implements amGeneralEvent.am_general.AE_Event
  {
    //--- properties
    _evtId:  number;
    _receiver: any;
    _sender: any;
    _targetAddress : Array<number>;
    _crtTargetIdx : number;
    _eventInfo : any;

    _eventRequest: amGeneralEventRequestType.am_general.AE_EventRequestType;

    //----------- constructor 
    constructor()  
    {  
      super();
      this._evtId    = 0;
      this._receiver = null;
      this._sender   = null;
      this._crtTargetIdx = 0; 
      this._eventInfo    = 0; 
      this._eventRequest = amGeneralEventRequestType.am_general.AE_EventRequestType.EvtRequest_None;
    }

    //-----------------------------
    public copy(srcEvent: amGeneralEvent.am_general.AE_Event) : number
    {
      //super.copy(srcEvent);
      this._evtId        = srcEvent.getEventId();
      this._receiver     = srcEvent.getReceiver();
      this._sender       = srcEvent.getTargetAddress();
      this._crtTargetIdx = srcEvent.getCrtTargetIdx(); 
      this._eventInfo    = srcEvent.getEventInfo(); 
    
      this._eventRequest     = srcEvent.getEventRequest();
      return 0;
     }


    //---------------------------
    public getEventId()    : number
    {
      return this._evtId ;
    }
    //-----------------------------
    public setEventId(evtId: number) : void
    {
      this._evtId = evtId; 
    }

    //---------------------------
    public getTargetAddress()  : Array<number>
    {
      return this._targetAddress ;
    }
    //-----------------------------
    public setTargetAddress(targetAddress: Array<number>) : void
    {
      this._targetAddress = targetAddress; 
    }

    //---------------------------
    public getCrtTargetIdx()  : number
    {
      return this._crtTargetIdx; ;
    }
    //-----------------------------
    public setCrtTargetIdx(crtTargetIdx: number) : void
    {
      this._crtTargetIdx = crtTargetIdx; 
    }

    
    //---------------------------
    public getReceiver() : any
    {
      return this._receiver;
    }    
    //-----------------------------
    public setReceiver(receiver: any) : void
    {
      this._receiver = receiver;
    }

    //---------------------------
    public getSender() : any
    {
      return this._sender;
    }    
    //-----------------------------
    public setSender(sender: any) : void
    {
      this._sender = sender;
    }

    //------------------------------
    public getEventInfo() : any
    {
      this._eventInfo;
    }
    //------------------------------------
    public setEventInfo(eventInfo : any) : void
    {
      this._eventInfo = eventInfo;
    }

    //--------------------------------
    public getEventRequest() : amGeneralEventRequestType.am_general.AE_EventRequestType
    {
      return this._eventRequest;
    }
    //-------------------------------
    public setEventRequest(eventRequest: amGeneralEventRequestType.am_general.AE_EventRequestType)
    {
      this._eventRequest = eventRequest;
    }

  }
} 