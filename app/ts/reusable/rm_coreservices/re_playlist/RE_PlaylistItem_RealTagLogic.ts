import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_RealTagLogic");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");

import rmGeneralEntity  = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
import amGeneralRandom   = require("../../../../../app/ts/abstract/am_general/ae_random/AE_Random");

import rmPlaylistItemLogic  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Logic");

export module rm_coreservices
{
  export class RE_PlaylistItem_RealTagLogic extends rmPlaylistItemLogic.rm_coreservices.RE_PlaylistItem_Logic
                                                    implements amCoreServices.am_coreservices.AE_PlaylistItem_RealTagLogic
  {
    
    //----------------
    constructor()
    {
      super();
    }

  }
} 