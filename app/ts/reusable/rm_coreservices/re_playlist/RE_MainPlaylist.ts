import amMainPlaylist   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_MainPlaylist");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amPlaylistItem = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");
import amPlaylistContainer = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Container");


import rmPlaylistItem  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem");
import rmPlaylistContainer  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Container");

export module rm_coreservices
{
  export class RE_MainPlaylist extends rmPlaylistContainer.rm_coreservices.RE_PlaylistItem_Container
                                       implements amMainPlaylist.am_coreservices.AE_MainPlaylist
  {
     //--------------- properties
     _main_ID                         ;
     _main_Name                       ;
     _main_PlayerType                 ;
     _main_SerialNumber               ;
     _main_SiteID                     ;
     _main_arrStreamList              ;
     _main_WorkgroupID                ;
     _main_BrandType                  ;
     _main_CompatibleHardwareVersions ;
     _main_PaybackProfile             ;
     
     //----------------
     constructor()
     {
       super();
       this._playlistItemTypeName = "MAIN_PLAYLIST";

       this._main_ID                        = null;
       this._main_Name                       = null;
       this._main_PlayerType                 = null;
       this._main_SerialNumber               = null;
       this._main_SiteID                     = null;
       this._main_arrStreamList              = null;
       this._main_WorkgroupID                = null;
       this._main_BrandType                  = null;
       this._main_CompatibleHardwareVersions = null;
       this._main_PaybackProfile             = null;

     }
  

     //------------------------------
     public loadProperties( playlistType : string, jsonObject : any, aPlaylistFile: amGeneralFileInfo.am_general.A_FileInfo,
                            aParent: amPlaylistItem.am_coreservices.AE_PlaylistItem, 
                            error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
      {
         // not used - to be removed
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
        //------------------------- load identification properties
        /*
        this._Name         = jsonObject.Name;
        this._PlayerType   = jsonObject.PlayerType;
        this._SerialNumber = jsonObject.SerialNumber;
        this._SiteID       = jsonObject.SiteID;
        //this._StreamList = jsonObject.StreamList[];
        this._WorkgroupID  = jsonObject.WorkgroupID;
        this._BrandType    = jsonObject.BrandType;
        this._CompatibleHardwareVersions = jsonObject.CompatibleHardwareVersions;
        this._PaybackProfile = jsonObject.PaybackProfile;
        */
      }


      //------------------------------
      public loadProperties_CustomV1( playlistType : string, jsonObject : any, aPlaylistFile: amGeneralFileInfo.am_general.A_FileInfo, 
                                      aParent: amPlaylistItem.am_coreservices.AE_PlaylistItem,
                                      error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
      {
      }

      //------------------------------- 
      //   set/get properties
      //--------------------------------

      //----------------------------
      public setPlaylistID(ID: string) 
      {
        this._main_ID = ID;
      }
      //---------------------------
      public getPlaylistID() : string
      {
        return this._main_ID;
      }

      //----------------------------
      public setPlaylistName(Name: string) 
      {
        this._main_Name = Name;
      }
      //---------------------------
      public getPlaylistName() : string
      {
        return this._main_Name;
      }

      //------------------------
      public setPlayerType(PlayerType : string)
      {
        this._main_PlayerType = PlayerType;
      }
      //---------------------------
      public getPlayerType() : string
      {
        return this._main_PlayerType;
      }

      //---------------------------
      public setSerialNumber(SerialNumber)
      {
        this._main_SerialNumber = SerialNumber;
      }
      //---------------------------
      public getSerialNumber() : string
      {
        return this._main_SerialNumber;
      }

      //---------------------------
      public setSiteID(SiteID : string)
      {
        this._main_SiteID = SiteID;
      }
      //---------------------------
      public getSiteID() 
      {
        return this._main_SiteID;
      }

      //---------------------------
      public setWorkgroupID(WorkgroupID : string)
      {
        this._main_WorkgroupID = WorkgroupID;
      }
      //---------------------------
      public getWorkgroupID() : string
      {
        return this._main_WorkgroupID;
      }

      //---------------------------
      public setBrandType(BrandType)
      {
        this._main_BrandType = BrandType;
      }
      //---------------------------
      public getBrandType() 
      {
        return this._main_BrandType;
      }

      //---------------------------
      public setCompatibleHardwareVersions(CompatibleHardwareVersions : string)
      {
        this._main_CompatibleHardwareVersions = CompatibleHardwareVersions;
      }
      //---------------------------
      public getCompatibleHardwareVersions() : string
      {
        return this._main_CompatibleHardwareVersions;
      }

      //---------------------------
      public setPaybackProfile(PaybackProfile)
      {
        this._main_PaybackProfile = PaybackProfile;
      }
      //---------------------------
      public getPaybackProfile() 
      {
        return this._main_PaybackProfile;
      }
 
      //-----------------------------------------------------
      public toJSONString() : string
      {
        var result = "{";
        result +=        JSON.stringify("ID")                         + ":" + JSON.stringify(this._main_ID);
        result += ","  + JSON.stringify("Name")                       + ":" + JSON.stringify(this._main_Name);
        result += ","  + JSON.stringify("PlayerType")                 + ":" + JSON.stringify(this._main_PlayerType);
        result += ","  + JSON.stringify("SerialNumber")               + ":" + JSON.stringify(this._main_SerialNumber);
        result += ","  + JSON.stringify("SiteID")                     + ":" + JSON.stringify(this._main_SiteID);
        result += ","  + JSON.stringify("StreamList")                 + ":" + JSON.stringify(this._main_arrStreamList);
        result += ","  + JSON.stringify("WorkgroupID")                + ":" + JSON.stringify(this._main_WorkgroupID);
        result += ","  + JSON.stringify("BrandType")                  + ":" + JSON.stringify(this._main_BrandType);
        result += ","  + JSON.stringify("CompatibleHardwareVersions") + ":" + JSON.stringify(this._main_CompatibleHardwareVersions);
        result += ","  + JSON.stringify("PaybackProfile")             + ":" + JSON.stringify(this._main_PaybackProfile);
        //-------------------- load Streams
        result += ","  + JSON.stringify("Streams_Extended") + ":[" ;
        var isFirstTime = true;
        for (var iStreams = 0; iStreams < this._playlistItems.length; iStreams++) 
        {
          if (isFirstTime == true)
          {
            result += this._playlistItems[iStreams].toJSONString();
            isFirstTime = false;
            continue;
          }
          result += ","  + this._playlistItems[iStreams].toJSONString();
        }
        result += "]" ;
        result += "}";
        return result;
      }

  }
} 