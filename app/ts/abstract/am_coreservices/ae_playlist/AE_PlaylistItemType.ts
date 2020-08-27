import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_coreservices
{
  export enum AE_PlaylistItemType
  {
    PlaylistItemType_None             = 0,
    PlaylistItemType_Container        = 1,
    PlaylistItemType_Design           = 2,
    PlaylistItemType_DesignZone       = 3,
    PlaylistItemType_Event            = 4,
    PlaylistItemType_Flash            = 5,
    PlaylistItemType_HtmlTemplate     = 6,
    PlaylistItemType_Image            = 7,
    PlaylistItemType_MainPlaylist     = 8,
    PlaylistItemType_Playlist         = 9,
    PlaylistItemType_Stream           = 10,
    PlaylistItemType_Tag              = 11,
    PlaylistItemType_TVPassThrough    = 12,
    PlaylistItemType_Video            = 13,
    PlaylistItemType_VideoStream      = 14,
    PlaylistItemType_WebPage          = 15,

    PlaylistItemType_ScreenSaverImage  = 16,
    PlaylistItemType_ScreenSaverVideo  = 17,
    PlaylistItemType_FillRect          = 18,
    
    PlaylistItemType_Events            = 19,
    PlaylistItemType_StaticMediaItems  = 20,

    PlaylistItemType_Audio            = 21,
    PlaylistItemType_AudioStream      = 22,

    PlaylistItemType_PriorityPlaylist = 23,
  }

} 