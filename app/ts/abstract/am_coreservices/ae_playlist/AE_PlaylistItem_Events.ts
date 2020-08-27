import amCoreServices = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Container");

export module am_coreservices
{
  export interface AE_PlaylistItem_Events extends amCoreServices.am_coreservices.AE_PlaylistItem_Container
  {

    _meta_ID         ;
    _meta_Name       ;
    _meta_CustomID   ;
    _meta_MediaType  ;

    _diff_duration   ;
    _diff_startDate  ;
    _diff_endDate    ;
    _diff_startTime  ;
    _diff_endTime    ;
    _diff_weekdays   ;

  }
  
} 