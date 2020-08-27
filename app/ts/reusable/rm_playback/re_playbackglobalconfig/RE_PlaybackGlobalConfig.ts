import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amGeneralPlaybackGlobalConfig = require("../../../../../app/ts/abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amGeneralError      = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amServiceLog        = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralFileInfo  = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import amPlaybackHardwareSettings  = require("../../../../..//app/ts/abstract/am_playback/a_hardwaresettings/A_HardwareSettings"); 
import amPlaybackOpeningHours      = require("../../../../../app/ts/abstract/am_playback/a_openinghours/A_OpeningHours"); 
import amPlaybackDayOpeningHours   = require("../../../../../app/ts/abstract/am_playback/a_openinghours/A_DayOpeningHours"); 
import amPlaybackScreenSaverConfig = require("../../../../../app/ts/abstract/am_playback/ae_screensaverconfig/AE_ScreenSaverConfig"); 


import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");


export module rm_playback
{
  export class RE_PlaybackGlobalConfig    extends rmGeneralEntity.rm_general.R_Entity
                                          implements amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig
  {
    _aAppRootFolder:amGeneralFileInfo.am_general.A_FileInfo;   
    _aAppClientFolder:amGeneralFileInfo.am_general.A_FileInfo;
    _aAppServerFolder:amGeneralFileInfo.am_general.A_FileInfo;   
    _aPlaylistFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aMediaFilesFolder:amGeneralFileInfo.am_general.A_FileInfo ;
    _aSettingsFolder:amGeneralFileInfo.am_general.A_FileInfo;
    _aHardwareSettingsXmlFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aOpeningHoursXmlFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aScreenSaverXmlFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aScreenSaverResourceFolder:amGeneralFileInfo.am_general.A_FileInfo;  
    _aStatisticsFolder:amGeneralFileInfo.am_general.A_FileInfo; 
    _aMainLogFile:amGeneralFileInfo.am_general.A_FileInfo;   
    _aPlaybackLogFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aTmpFolder:amGeneralFileInfo.am_general.A_FileInfo;
      
    _epsilonTimeBeforeNaturalEnd : number; //ms
    _epsilonTimeBeforeStart      : number; //ms

    _aHardwareSettings: amPlaybackHardwareSettings.am_playback.A_HardwareSettings;
    _aOpeningHours:     amPlaybackOpeningHours.am_playback.A_OpeningHours;
    _aScreenSaverConfig:amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig;

    //----------------------
    public constructor()
    {
      super()
      this._aAppRootFolder             = null;   
      this._aAppClientFolder           = null;   
      this._aAppServerFolder           = null;   
      this._aPlaylistFile              = null;   
      this._aMediaFilesFolder          = null;   
      this._aSettingsFolder            = null;   
      this._aHardwareSettingsXmlFile   = null;   
      this._aOpeningHoursXmlFile       = null;   
      this._aScreenSaverXmlFile        = null;   
      this._aScreenSaverResourceFolder = null;   
      this._aStatisticsFolder          = null; 
      this._aMainLogFile               = null;   ;   
      this._aPlaybackLogFile           = null;   
      this._aTmpFolder                 = null;   

      this._aHardwareSettings          = null;
      this._aOpeningHours              = null;
      this._aScreenSaverConfig         = null;
  
      this._epsilonTimeBeforeNaturalEnd = 1500;
      this._epsilonTimeBeforeStart      = 0;
    }

    //------------------------
    public injectDependencies( aSrvContainer: amServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aSrvLocator:   amServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aSrvLog:       amServiceLog.am_transversalservices.A_LogService, 
                               error: amGeneralError.am_general.A_Error) : number
    {
      super.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      
      this._aAppRootFolder             = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);     
      this._aAppClientFolder           = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);    
      this._aAppServerFolder           = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);    

      this._aPlaylistFile              = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);    
      this._aMediaFilesFolder          = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);   

      this._aSettingsFolder            = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      
      this._aHardwareSettingsXmlFile   = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      this._aOpeningHoursXmlFile       = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);

      this._aScreenSaverXmlFile        = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      this._aScreenSaverResourceFolder = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 

      this._aStatisticsFolder          = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);

      this._aMainLogFile               = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      this._aPlaybackLogFile           = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);

      this._aTmpFolder                 = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);

      this._aHardwareSettings          = this._aSrvLocator._iEntityCreation.createDefaultHardwareSettings(error);
      this._aOpeningHours              = this._aSrvLocator._iEntityCreation.createDefaultOpeningHours(error);
      this._aScreenSaverConfig         = this._aSrvLocator._iEntityCreation.createDefaultScreenSaverConfig(error);


      return 0;
    }

    //-----------------------
    public initFolders( defaultAppStorageName          : string,       //""
                        defaultAppStorageUrlName       : string,       //""
                        defaultResourceStorageName     : string,       // "c:/";
                        defaultResourceStorageUrlName  :  string,      // "http://127.0.0.1:9080/c/";                          
                        defaultStorageUrlName          : string,       // "http://127.0.0.1:3000";  
                        defaultStorageSameDomainUrlName: string,       // "http://127.0.0.1:3000/c/";       
                        appName: string,                               // "SOC Player"
                        appVersion: string,                            // "162"
                        error : amGeneralError.am_general.A_Error 
                      )
     {

      this._aAppRootFolder.setStorage(defaultAppStorageName);      // tbc 
      this._aAppRootFolder.setPath("tbc");                        
      this._aAppRootFolder.setName("tbc");   
      this._aAppRootFolder.setUrlStorage(defaultAppStorageUrlName); 
      this._aAppRootFolder.setUrlPath("tbc");      
      this._aAppRootFolder.setUrlName("tbc");   
     
      this._aAppClientFolder.setStorage(defaultAppStorageName);    
      this._aAppClientFolder.setPath("tbc");      
      this._aAppClientFolder.setName("tbc");   
      this._aAppClientFolder.setUrlStorage(defaultAppStorageUrlName); 
      this._aAppClientFolder.setUrlPath("tbc");      
      this._aAppClientFolder.setUrlName("tbc");   
     
      this._aAppServerFolder.setStorage(defaultAppStorageName);      
      this._aAppServerFolder.setPath("tbc");      
      this._aAppServerFolder.setName("tbc");   
      this._aAppServerFolder.setUrlStorage(defaultAppStorageUrlName); 
      this._aAppServerFolder.setUrlPath("tbc");      
      this._aAppServerFolder.setUrlName("tbc");   
     
      this._aPlaylistFile.setStorage(defaultResourceStorageName);       //"c:/");  
      this._aPlaylistFile.setPath("moodmedia/playlist/");   
      this._aPlaylistFile.setName("playlist_v5.json");   
      this._aPlaylistFile.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aPlaylistFile.setUrlPath("moodmedia/playlist/");      
      this._aPlaylistFile.setUrlName("playlist_v5.json");   
     
      this._aMediaFilesFolder.setStorage(defaultResourceStorageName);        //"c:/");  
      this._aMediaFilesFolder.setPath("media_files/");   
      this._aMediaFilesFolder.setName("");   
      this._aMediaFilesFolder.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aMediaFilesFolder.setUrlPath("media_files/");      
      this._aMediaFilesFolder.setUrlName("");   
     
      this._aSettingsFolder.setStorage(defaultResourceStorageName);        //"c:/");  
      this._aSettingsFolder.setPath("moodmedia/software_v5/settings/");   
      this._aSettingsFolder.setName("");   
      this._aSettingsFolder.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aSettingsFolder.setUrlPath("moodmedia/software_v5/settings/");     
      this._aSettingsFolder.setUrlName("");   

      this._aHardwareSettingsXmlFile.setStorage(defaultResourceStorageName);     //"c:/");  
      this._aHardwareSettingsXmlFile.setPath("moodmedia/software_v5/settings/");   
      this._aHardwareSettingsXmlFile.setName("hardware_settings.xml");   
      this._aHardwareSettingsXmlFile.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aHardwareSettingsXmlFile.setUrlPath("moodmedia/software_v5/settings/");      
      this._aHardwareSettingsXmlFile.setUrlName("hardware_settings.xml");   

      this._aOpeningHoursXmlFile.setStorage(defaultResourceStorageName);     //"c:/");  
      this._aOpeningHoursXmlFile.setPath("moodmedia/software_v5/settings/");   
      this._aOpeningHoursXmlFile.setName("opening_hour_settings.xml");   
      this._aOpeningHoursXmlFile.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aOpeningHoursXmlFile.setUrlPath("moodmedia/software_v5/settings/");      
      this._aOpeningHoursXmlFile.setUrlName("opening_hour_settings.xml");   

      this._aScreenSaverXmlFile.setStorage(defaultResourceStorageName);     //"c:/");  
      this._aScreenSaverXmlFile.setPath("moodmedia/project/");   
      this._aScreenSaverXmlFile.setName("screen_saver_v5.xml");   
      this._aScreenSaverXmlFile.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aScreenSaverXmlFile.setUrlPath("moodmedia/project/");      
      this._aScreenSaverXmlFile.setUrlName("screen_saver_v5.xml");   

      this._aScreenSaverResourceFolder.setStorage(defaultResourceStorageName);     //"c:/");  
      this._aScreenSaverResourceFolder.setPath("moodmedia/project/screen_saver/");   
      this._aScreenSaverResourceFolder.setName("");   
      this._aScreenSaverResourceFolder.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aScreenSaverResourceFolder.setUrlPath("moodmedia/project/screen_saver/");      
      this._aScreenSaverResourceFolder.setUrlName("");   
      
      this._aStatisticsFolder.setStorage(defaultResourceStorageName); //"c:/");  
      this._aStatisticsFolder.setPath("moodmedia/project/");   
      this._aStatisticsFolder.setName("");   
      this._aStatisticsFolder.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aStatisticsFolder.setUrlPath("moodmedia/project/");     
      this._aStatisticsFolder.setUrlName("");   
     
      this._aMainLogFile.setStorage(defaultResourceStorageName); //"c:/");  
      this._aMainLogFile.setPath("moodmedia/logs/");   
      this._aMainLogFile.setName("main.log");   
      this._aMainLogFile.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aMainLogFile.setUrlPath("moodmedia/logs/");      
      this._aMainLogFile.setUrlName("main.log");   
     
      this._aPlaybackLogFile.setStorage(defaultResourceStorageName); //"c:/");  
      this._aPlaybackLogFile.setPath("moodmedia/logs/");   
      this._aPlaybackLogFile.setName("playback.log");   
      this._aPlaybackLogFile.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aPlaybackLogFile.setUrlPath("moodmedia/logs/");      
      this._aPlaybackLogFile.setUrlName("playback.log");   
     
      this._aTmpFolder.setStorage(defaultResourceStorageName); //"c:/");  
      this._aTmpFolder.setPath("tmp/");   
      this._aTmpFolder.setName("");   
      this._aTmpFolder.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aTmpFolder.setUrlPath("tmp/");      
      this._aTmpFolder.setUrlName("");   
    
     }

     //-------------------------------
     public setEpsilonTimeBefireNaturalEnd(epsilonTimeBeforeNaturalEnd: number)
     {
       this._epsilonTimeBeforeNaturalEnd = epsilonTimeBeforeNaturalEnd;
     }
     //-------------------------------
     public getEpsilonTimeBefireNaturalEnd() : number
     {
       return this._epsilonTimeBeforeNaturalEnd;
     }

     //-------------------------------
     public setHardwareSettings(aHardwareSettings: amPlaybackHardwareSettings.am_playback.A_HardwareSettings)
     {
       this._aHardwareSettings = aHardwareSettings;
     }
     //-------------------------------
     public getHardwareSettings() : amPlaybackHardwareSettings.am_playback.A_HardwareSettings
     {
       return this._aHardwareSettings;
     }

     //-------------------------------
     public setOpeningHours(aOpeningHours: amPlaybackOpeningHours.am_playback.A_OpeningHours)
     {
       this._aOpeningHours = aOpeningHours;
     }
     //-------------------------------
     public getOpeningHours() : amPlaybackOpeningHours.am_playback.A_OpeningHours
     {
       return this._aOpeningHours;
     }

     //-------------------------------
     public setScreenSaverConfig(aScreenSaverConfig: amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig)
     {
       this._aScreenSaverConfig = aScreenSaverConfig;
     }
     //-------------------------------
     public getScreenSaverConfig() : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig
     {
       return this._aScreenSaverConfig;
     }
 
  }
} 

