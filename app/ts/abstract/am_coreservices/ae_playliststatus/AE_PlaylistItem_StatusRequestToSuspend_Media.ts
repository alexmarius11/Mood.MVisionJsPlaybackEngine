import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import amPlaylistItemType  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemType");
import amRenderParametersAllParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_AllParameters");
import amPlaylistItemLogic   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Logic");
import amPlaylistItemStatus  = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToSuspend");
import amPlaylistItemTransition  = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_Transition");

export module am_coreservices
{
  export interface AE_PlaylistItem_StatusRequestToSuspend_Media extends amPlaylistItemStatus.am_coreservices.AE_PlaylistItem_StatusRequestToSuspend
  {

  }

} 