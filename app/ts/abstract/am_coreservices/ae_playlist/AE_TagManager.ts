import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amPlaylistItemRealTag  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_RealTag");

export module am_coreservices
{
  export interface AE_TagManager  extends amGeneral.am_general.A_Entity
  {
    getRealTag(tagId: number) : amPlaylistItemRealTag.am_coreservices.AE_PlaylistItem_RealTag
    hasRealTag(tagId: number) : boolean
    addRealTag(tagId: number, realTag : amPlaylistItemRealTag.am_coreservices.AE_PlaylistItem_RealTag) : boolean
    addRealTagIfNotExists(tagId: number, realTag : amPlaylistItemRealTag.am_coreservices.AE_PlaylistItem_RealTag) : boolean
    deleteRealTag(tagId: number) : boolean;
    clearAllRealTags() : void;
  }

} 