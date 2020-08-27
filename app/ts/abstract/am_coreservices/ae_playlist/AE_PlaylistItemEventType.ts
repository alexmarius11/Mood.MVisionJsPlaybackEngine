import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_coreservices
{
  export enum AE_PlaylistItemEventType
  {
    EVT_RequestToPlay       = 1,
    EVT_RequestToAbort      = 2,
    EVT_RequestToEnd        = 3,
    EVT_RequestToSuspend    = 8,
    EVT_RequestToResume     = 9,

    EVT_notifyChildPlay    = 11,
    EVT_notifyChildEnd     = 13,
    EVT_notifyChildDisable = 14,
    EVT_notifyChildError   = 15,

    EVT_notifyChildSuspended = 18,
    EVT_notifyChildResumed   = 19,
    
    EVT_notifyGraphicDescendantEnd   = 23,
  }

} 