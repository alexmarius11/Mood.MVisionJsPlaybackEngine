import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amPlaylistItemStream  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Stream");

import amPlaylistItemType  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemType");
import amRenderParametersAllParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_AllParameters");
import amControlParamsPrepare = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amPlaylistItemLogic  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Logic");


export module am_coreservices
{
  export interface AE_PlaylistItem extends amGeneral.am_general.A_Entity
  {
    //------------------------
    setPlaylistItemIdAndName(playlistItemId : number, playlistItemName: string);
  
    setPlaylistItemId(playlistItemId : number);
    getPlaylistItemId() : number;

    setPlaylistItemName(playlistItemName : string);
    getPlaylistItemName() : string;

    setPlaylistItemTypeName(playlistItemTypeName : string);
    getPlaylistItemTypeName() : string;
    
  //----------------------------
    setPlaylistItemType(playlistItemType : amPlaylistItemType.am_coreservices.AE_PlaylistItemType);
    getPlaylistItemType() : amPlaylistItemType.am_coreservices.AE_PlaylistItemType;

    setParent(parent : AE_PlaylistItem);
    getParent() : AE_PlaylistItem;

    getStream() : amPlaylistItemStream.am_coreservices.AE_PlaylistItem_Stream;

    setLogic(logic : amPlaylistItemLogic.am_coreservices.AE_PlaylistItem_Logic);
    getLogic() : amPlaylistItemLogic.am_coreservices.AE_PlaylistItem_Logic;

    //-----------------------
    setPrepareParams(prepareParameters : amControlParamsPrepare.am_renderingservices.AE_ControlParams_Prepare);
    getPrepareParams() : amControlParamsPrepare.am_renderingservices.AE_ControlParams_Prepare;
    
    //---------------------
    getPlaylistItems() : Array<AE_PlaylistItem>; // null, if no children

    //---------------------
    isContainer();
    
    //-----------------------
    toJSONString() : string;

    //--------------------------------
    loadProperties( playlistType : string, jsonObject : any, aPlaylistFile: amGeneralFileInfo.am_general.A_FileInfo, 
                    aParent: AE_PlaylistItem, 
                    error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);

    loadProperties_MoodV5( playlistType : string, jsonObject : any, aPlaylistFile: amGeneralFileInfo.am_general.A_FileInfo, 
                           aParent: AE_PlaylistItem, 
                           error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);

    loadProperties_CustomV1( playlistType : string, jsonObject : any, aPlaylistFile: amGeneralFileInfo.am_general.A_FileInfo, 
                             aParent: AE_PlaylistItem, 
                             error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);    
  }

} 