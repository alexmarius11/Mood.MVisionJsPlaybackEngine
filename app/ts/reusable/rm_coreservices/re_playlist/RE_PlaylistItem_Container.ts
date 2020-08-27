import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Container");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");

import rmCoreServicesPlaylistItem  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem");

import rmPlaylistItem  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem");

export module rm_coreservices
{
  export class RE_PlaylistItem_Container extends rmCoreServicesPlaylistItem.rm_coreservices.RE_PlaylistItem
                                         implements amCoreServices.am_coreservices.AE_PlaylistItem_Container
  {
     //----------------
     _playlistItems : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem>;
 
     //----------------
     constructor()
     {
       super();
       this._playlistItems = new Array<amPlaylistItem.am_coreservices.AE_PlaylistItem>();    
       this._playlistItemTypeName = "CONTAINER";
     }

     //------------------
     public isContainer()
     {
       return true;
     }

     //------------------
     public setPlaylistItems(playlistItems : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem>)
     {
       this._playlistItems = playlistItems;
     }
     //------------------
     public getPlaylistItems() : Array<amPlaylistItem.am_coreservices.AE_PlaylistItem>
     {
       return this._playlistItems;
     }
     //------------------
     public addPlaylistItem(playlistItem : amPlaylistItem.am_coreservices.AE_PlaylistItem)
     {
       playlistItem.setParent(this);
       this._playlistItems.push(playlistItem);
     }
    

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

      //-----------------------------------------------------
      public toJSONString() : string
      {
        var result = "";
        //-------------------- load Streams
        result += "[" ;
        var isFirstTime = true;
        for (var iEventItem = 0; iEventItem < this._playlistItems.length; iEventItem++) 
        {
          if (isFirstTime == true)
          {
            result += this._playlistItems[iEventItem].toJSONString();
            isFirstTime = false;
            continue;
          }
          result += ","  + this._playlistItems[iEventItem].toJSONString();
        }
        result += "]" ;
        result += "";
        return result;
      }

  }
} 