import amGeneral = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_PlaylistLogic");

export module am_coreservices
{
  export interface AE_PlaylistItem_DesignMainZoneLogic extends amGeneral.am_coreservices.AE_PlaylistItem_PlaylistLogic
  {
    isMainZone();
    setIsMainZone(isMainZone : boolean);
  }

} 