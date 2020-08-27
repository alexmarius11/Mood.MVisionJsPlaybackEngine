import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_MainPlaylist");

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
                           implements amCoreServices.am_coreservices.AE_MainPlaylist
  {
     //--------------- properties
     _Name         ;
     _PlayerType   ;
     _SerialNumber ;
     _SiteID   ;
     _StreamList  ;
     _WorkgroupID  ;
     _BrandType    ;
     _CompatibleHardwareVersions ;
     _PaybackProfile ;

     //----------------
     constructor()
     {
       super();

       this._Name         = null;
       this._PlayerType   = null;
       this._SerialNumber = null;
       this._SiteID       = null;
       this._StreamList   = null;
       this._WorkgroupID  = null;
       this._BrandType    = null;
       this._CompatibleHardwareVersions = null;
       this._PaybackProfile = null;  
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
      public setPlaylistName(Name: string) 
      {
        this._Name = Name;
      }
      //---------------------------
      public getPlaylistName() : string
      {
        return this._Name;
      }

      //------------------------
      public setPlayerType(PlayerType : string)
      {
        this._PlayerType = PlayerType;
      }
      //---------------------------
      public getPlayerType() : string
      {
        return this._PlayerType;
      }

      //---------------------------
      public setSerialNumber(SerialNumber)
      {
        this._SerialNumber = SerialNumber;
      }
      //---------------------------
      public getSerialNumber() : string
      {
        return this._SerialNumber;
      }

      //---------------------------
      public setSiteID(SiteID : string)
      {
        this._SiteID = SiteID;
      }
      //---------------------------
      public getSiteID() 
      {
        return this._SiteID;
      }

      //---------------------------
      public setWorkgroupID(WorkgroupID : string)
      {
        this._WorkgroupID = WorkgroupID;
      }
      //---------------------------
      public getWorkgroupID() : string
      {
        return this._WorkgroupID;
      }

      //---------------------------
      public setBrandType(BrandType)
      {
        this._BrandType = BrandType;
      }
      //---------------------------
      public getBrandType() 
      {
        return this._BrandType;
      }

      //---------------------------
      public setCompatibleHardwareVersions(CompatibleHardwareVersions : string)
      {
        this._CompatibleHardwareVersions = CompatibleHardwareVersions;
      }
      //---------------------------
      public getCompatibleHardwareVersions() : string
      {
        return this._CompatibleHardwareVersions;
      }

      //---------------------------
      public setPaybackProfile(PaybackProfile)
      {
        this._PaybackProfile = PaybackProfile;
      }
      //---------------------------
      public getPaybackProfile() 
      {
        return this._PaybackProfile;
      }



  }
} 