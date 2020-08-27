import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError      = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFileInfo        = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import amPlaybackHardwareSettings  = require("../../../../..//app/ts/abstract/am_playback/a_hardwaresettings/A_HardwareSettings"); 
import amPlaybackOpeningHours      = require("../../../../../app/ts/abstract/am_playback/a_openinghours/A_OpeningHours"); 
import amPlaybackDayOpeningHours   = require("../../../../../app/ts/abstract/am_playback/a_openinghours/A_DayOpeningHours"); 
import amPlaybackScreenSaverConfig = require("../../../../../app/ts/abstract/am_playback/ae_screensaverconfig/AE_ScreenSaverConfig"); 

export module am_playback
{
  export interface AE_PlaybackGlobalConfig extends amGeneral.am_general.A_Entity
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

    initFolders( defaultAppStorageName          : string,       //""
                 defaultAppStorageUrlName       : string,       //""
                 defaultResourceStorageName     : string,       // "c:/";
                 defaultResourceStorageUrlName  :  string,      // "http://127.0.0.1:9080/c/";                          
                 defaultStorageUrlName          : string,       // "http://127.0.0.1:3000";  
                 defaultStorageSameDomainUrlName: string,       // "http://127.0.0.1:3000/c/";       
                 appName: string,                               // "SOC Player"
                 appVersion: string,                            // "162"
                 error : amGeneralError.am_general.A_Error );

    setEpsilonTimeBefireNaturalEnd(epsilonTimeBeforeNaturalEnd: number);
    getEpsilonTimeBefireNaturalEnd() : number;

    setHardwareSettings(aHardwareSettings: amPlaybackHardwareSettings.am_playback.A_HardwareSettings);
    getHardwareSettings() : amPlaybackHardwareSettings.am_playback.A_HardwareSettings;

    setOpeningHours(aOpeningHours: amPlaybackOpeningHours.am_playback.A_OpeningHours);
    getOpeningHours() : amPlaybackOpeningHours.am_playback.A_OpeningHours;

    setScreenSaverConfig(aScreenSaverConfig: amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig);
    getScreenSaverConfig() : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig;

  }

} 