import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");
import amPlaylistItemStream  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Stream");

import amPlaylistItemType  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemType");
import amRenderParametersAllParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_AllParameters");
import amControlParamsPrepare = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amPlaylistItemLogic  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Logic");

import rmGeneralEntity  = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
import rmPlaylistItem  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem");

export module rm_coreservices
{
  export class RE_PlaylistItem extends rmGeneralEntity.rm_general.R_Entity
                                       implements amCoreServices.am_coreservices.AE_PlaylistItem
  {
     //------ properties
     _playlistItemType : amPlaylistItemType.am_coreservices.AE_PlaylistItemType; 
     _playlistItemId       : number; 
     _playlistItemName     : string; 
     _playlistItemTypeName : string; 
     
     _parent : amPlaylistItem.am_coreservices.AE_PlaylistItem;
     _prepareParameters : amControlParamsPrepare.am_renderingservices.AE_ControlParams_Prepare;
     _logic : amPlaylistItemLogic.am_coreservices.AE_PlaylistItem_Logic;
     
     //----------------
     constructor()
     {
       super();
       this._playlistItemId=-1;
       this._playlistItemName="";
       this._playlistItemType = amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_None;
       this._playlistItemTypeName = "PLAYLIST_ITEM"; 
       this._parent = null;
       this._logic  = null;
       this._prepareParameters = null;
     }

     //------------------
     public isContainer()
     {
       return false;
     }
     
    //--------------------
    // set/get properties
    //--------------------

     //=======================
     public setPlaylistItemIdAndName(playlistItemId : number, playlistItemName: string)
     {
       this._playlistItemId   = playlistItemId;
       this._playlistItemName = playlistItemName;
     }

     //=======================
     public setPlaylistItemId(playlistItemId : number)
     {
       this._playlistItemId = playlistItemId;
     }

     //========================
     public getPlaylistItemId() : number
     {
       return this._playlistItemId;
     }

     //=======================
     public setPlaylistItemName(playlistItemName : string)
     {
      this._playlistItemName = playlistItemName;
     }

     //========================
     public getPlaylistItemName() : string
     {
       return this._playlistItemName;
     }

     //=======================
     public setPlaylistItemType(playlistItemType : amPlaylistItemType.am_coreservices.AE_PlaylistItemType)
     {
      this._playlistItemType = playlistItemType;
     }

     //========================
     public getPlaylistItemType() : amPlaylistItemType.am_coreservices.AE_PlaylistItemType
     {
       return this._playlistItemType;
     }

     //=======================
     public setPlaylistItemTypeName(playlistItemTypeName : string)
     {
       this._playlistItemTypeName = playlistItemTypeName;
     }

     //========================
     public getPlaylistItemTypeName() : string
     {
       return this._playlistItemTypeName;
     }

     //------------------
     public getPlaylistItems() : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem>
     {
       return null;
     }

      //-----------------------------------------------------
      public toJSONString() : string
      {
        return "";
      }

     //-----------------------
     public setParent(parent : amPlaylistItem.am_coreservices.AE_PlaylistItem)
     {
      this._parent = parent;
     }
     //----------------
     public getParent() : amPlaylistItem.am_coreservices.AE_PlaylistItem
     {
       return this._parent;
     }

     //--------------------------------------------
     public getStream() : amPlaylistItemStream.am_coreservices.AE_PlaylistItem_Stream
     {
       var self:any = this; 
       if (this.getPlaylistItemType() == amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_Stream)
         return <amPlaylistItemStream.am_coreservices.AE_PlaylistItem_Stream>self;
      var crtParent = this.getParent();
      if (crtParent == null)
        return null;
      return  crtParent.getStream(); 
     }

     //-----------------------
     public setLogic(logic : amPlaylistItemLogic.am_coreservices.AE_PlaylistItem_Logic)
     {
      this._logic = logic;
      this._logic.setOwner(this);
     }
     //----------------
     public getLogic() : amPlaylistItemLogic.am_coreservices.AE_PlaylistItem_Logic
     {
       return this._logic;
     }

     //-----------------------
     public setPrepareParams(prepareParameters : amControlParamsPrepare.am_renderingservices.AE_ControlParams_Prepare)
     {
       this._prepareParameters = prepareParameters;
     }
     //----------------
     public getPrepareParams() : amControlParamsPrepare.am_renderingservices.AE_ControlParams_Prepare
     {
       return this._prepareParameters;
     }


     //-----------------
     // load properties
     //-----------------

     //------------------------------
     public loadProperties( playlistType : string, jsonObject : any, aPlaylistFile: amGeneralFileInfo.am_general.A_FileInfo, 
                            aParent: amPlaylistItem.am_coreservices.AE_PlaylistItem, 
                            error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
      {
         if (playlistType == "mood_v5")
           return this.loadProperties_MoodV5(playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback);

         if (playlistType == "custom_v1")
           return this.loadProperties_CustomV1(playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback);
      }


      //------------------------------
      public loadProperties_MoodV5( playlistType : string, jsonObject : any, aPlaylistFile: amGeneralFileInfo.am_general.A_FileInfo, 
                                    aParent: amPlaylistItem.am_coreservices.AE_PlaylistItem, 
                                    error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
      {
      }

      //------------------------------
      public loadProperties_CustomV1( playlistType : string, jsonObject : any, aPlaylistFile: amGeneralFileInfo.am_general.A_FileInfo, 
                                      aParent: amPlaylistItem.am_coreservices.AE_PlaylistItem, 
                                      error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
      {
      }


  }
} 