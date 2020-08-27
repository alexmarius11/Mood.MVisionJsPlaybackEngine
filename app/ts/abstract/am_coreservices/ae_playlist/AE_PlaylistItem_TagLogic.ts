import amGeneral = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_PlaylistLogic");
import amGeneralRandom = require("../../../../../app/ts/abstract/am_general/ae_random/AE_Random");
import amPlaylistItemRealTag = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_RealTag");

export module am_coreservices
{
  export interface AE_PlaylistItem_TagLogic extends amGeneral.am_coreservices.AE_PlaylistItem_PlaylistLogic
  {
    getTagId() : number;
    setTagId(tagId : number);    

    getRealTag() : amPlaylistItemRealTag.am_coreservices.AE_PlaylistItem_RealTag;
    setRealTag(realTag : amPlaylistItemRealTag.am_coreservices.AE_PlaylistItem_RealTag);    

    getRealTagRandom() : amGeneralRandom.am_general.AE_Random;
    setRealTagRandom(realTagRandom : amGeneralRandom.am_general.AE_Random);    
  }

} 