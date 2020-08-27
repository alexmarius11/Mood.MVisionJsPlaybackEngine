import amCoreServices = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Container");

export module am_coreservices
{
  export interface AE_MainPlaylist extends amCoreServices.am_coreservices.AE_PlaylistItem_Container
  {
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
     
      setPlaylistID(ID: string);
      getPlaylistID() : string;

      setPlaylistName(Name: string);
      getPlaylistName() : string;

      setPlayerType(PlayerType : string);
      getPlayerType() : string;

      setSerialNumber(SerialNumber);
      getSerialNumber() : string;

      setSiteID(SiteID : string);
      getSiteID();

      setWorkgroupID(WorkgroupID : string);
      getWorkgroupID() : string;

      setBrandType(BrandType)
      getBrandType() 

      setCompatibleHardwareVersions(CompatibleHardwareVersions : string);
      getCompatibleHardwareVersions() : string;

      setPaybackProfile(PaybackProfile);
      getPaybackProfile() ;

  }

} 