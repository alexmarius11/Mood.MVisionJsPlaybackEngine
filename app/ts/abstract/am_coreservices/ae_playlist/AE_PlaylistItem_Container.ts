import amPlaylistItem = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");


export module am_coreservices
{
  export interface AE_PlaylistItem_Container extends amPlaylistItem.am_coreservices.AE_PlaylistItem
  {

    setPlaylistItems(playlistItems : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem>);
    getPlaylistItems() : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem>;
    addPlaylistItem(playlistItem : amPlaylistItem.am_coreservices.AE_PlaylistItem);

  }

} 