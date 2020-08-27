import amGeneral = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_PriorityPlaylistLogic");

export module am_coreservices
{
  export interface AE_PlaylistItem_DesignZoneLogic extends amGeneral.am_coreservices.AE_PlaylistItem_PriorityPlaylistLogic
  {
    isMainZone();
    setIsMainZone(isMainZone : boolean);
  }

} 