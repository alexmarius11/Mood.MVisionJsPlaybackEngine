import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_EventsLogic");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");

import rmGeneralEntity  = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

import rmPlaylistItemPriorityPlaylistLogic  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_PriorityPlaylistLogic");

export module rm_coreservices
{
  export class RE_PlaylistItem_EventsLogic extends rmPlaylistItemPriorityPlaylistLogic.rm_coreservices.RE_PlaylistItem_PriorityPlaylistLogic
                                                   implements amCoreServices.am_coreservices.AE_PlaylistItem_EventsLogic
  {
     //----------------
     constructor()
     {
       super();
       this._hasARenderingRepresentation = false;
       this._hasARenderingZone           = false;
     }


  }
} 