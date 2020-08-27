import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_TagManager_Logic");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");

import rmGeneralEntity  = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

import rmPlaylistItem  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem");

export module rm_coreservices
{
  export class RE_TagManager_Logic extends rmGeneralEntity.rm_general.R_Entity
                                   implements amCoreServices.am_coreservices.AE_TagManager_Logic
  {
     //----------------
     constructor()
     {
       super();       
     }


  }
} 