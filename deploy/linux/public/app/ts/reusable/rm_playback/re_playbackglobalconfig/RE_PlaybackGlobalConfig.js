var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_entity/R_Entity"], function (require, exports, rmGeneralEntity) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_playback;
    (function (rm_playback) {
        var RE_PlaybackGlobalConfig = /** @class */ (function (_super) {
            __extends(RE_PlaybackGlobalConfig, _super);
            //----------------------
            function RE_PlaybackGlobalConfig() {
                var _this = _super.call(this) || this;
                _this._aAppRootFolder = null;
                _this._aAppClientFolder = null;
                _this._aAppServerFolder = null;
                _this._aPlaylistFile = null;
                _this._aMediaFilesFolder = null;
                _this._aSettingsFolder = null;
                _this._aHardwareSettingsXmlFile = null;
                _this._aOpeningHoursXmlFile = null;
                _this._aScreenSaverXmlFile = null;
                _this._aScreenSaverResourceFolder = null;
                _this._aStatisticsFolder = null;
                _this._aMainLogFile = null;
                ;
                _this._aPlaybackLogFile = null;
                _this._aTmpFolder = null;
                _this._aHardwareSettings = null;
                _this._aOpeningHours = null;
                _this._aScreenSaverConfig = null;
                _this._epsilonTimeBeforeNaturalEnd = 1500;
                _this._epsilonTimeBeforeStart = 0;
                return _this;
            }
            //------------------------
            RE_PlaybackGlobalConfig.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
                _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
                this._aAppRootFolder = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
                this._aAppClientFolder = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
                this._aAppServerFolder = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
                this._aPlaylistFile = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
                this._aMediaFilesFolder = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
                this._aSettingsFolder = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
                this._aHardwareSettingsXmlFile = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
                this._aOpeningHoursXmlFile = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
                this._aScreenSaverXmlFile = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
                this._aScreenSaverResourceFolder = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
                this._aStatisticsFolder = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
                this._aMainLogFile = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
                this._aPlaybackLogFile = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
                this._aTmpFolder = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
                this._aHardwareSettings = this._aSrvLocator._iEntityCreation.createDefaultHardwareSettings(error);
                this._aOpeningHours = this._aSrvLocator._iEntityCreation.createDefaultOpeningHours(error);
                this._aScreenSaverConfig = this._aSrvLocator._iEntityCreation.createDefaultScreenSaverConfig(error);
                return 0;
            };
            //-----------------------
            RE_PlaybackGlobalConfig.prototype.initFolders = function (defaultAppStorageName, //""
            defaultAppStorageUrlName, //""
            defaultResourceStorageName, // "c:/";
            defaultResourceStorageUrlName, // "http://127.0.0.1:9080/c/";                          
            defaultStorageUrlName, // "http://127.0.0.1:3000";  
            defaultStorageSameDomainUrlName, // "http://127.0.0.1:3000/c/";       
            appName, // "SOC Player"
            appVersion, // "162"
            error) {
                this._aAppRootFolder.setStorage(defaultAppStorageName); // tbc 
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
                this._aPlaylistFile.setStorage(defaultResourceStorageName); //"c:/");  
                this._aPlaylistFile.setPath("moodmedia/playlist/");
                this._aPlaylistFile.setName("playlist_v5.json");
                this._aPlaylistFile.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
                this._aPlaylistFile.setUrlPath("moodmedia/playlist/");
                this._aPlaylistFile.setUrlName("playlist_v5.json");
                this._aMediaFilesFolder.setStorage(defaultResourceStorageName); //"c:/");  
                this._aMediaFilesFolder.setPath("media_files/");
                this._aMediaFilesFolder.setName("");
                this._aMediaFilesFolder.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
                this._aMediaFilesFolder.setUrlPath("media_files/");
                this._aMediaFilesFolder.setUrlName("");
                this._aSettingsFolder.setStorage(defaultResourceStorageName); //"c:/");  
                this._aSettingsFolder.setPath("moodmedia/software_v5/settings/");
                this._aSettingsFolder.setName("");
                this._aSettingsFolder.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
                this._aSettingsFolder.setUrlPath("moodmedia/software_v5/settings/");
                this._aSettingsFolder.setUrlName("");
                this._aHardwareSettingsXmlFile.setStorage(defaultResourceStorageName); //"c:/");  
                this._aHardwareSettingsXmlFile.setPath("moodmedia/software_v5/settings/");
                this._aHardwareSettingsXmlFile.setName("hardware_settings.xml");
                this._aHardwareSettingsXmlFile.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
                this._aHardwareSettingsXmlFile.setUrlPath("moodmedia/software_v5/settings/");
                this._aHardwareSettingsXmlFile.setUrlName("hardware_settings.xml");
                this._aOpeningHoursXmlFile.setStorage(defaultResourceStorageName); //"c:/");  
                this._aOpeningHoursXmlFile.setPath("moodmedia/software_v5/settings/");
                this._aOpeningHoursXmlFile.setName("opening_hour_settings.xml");
                this._aOpeningHoursXmlFile.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
                this._aOpeningHoursXmlFile.setUrlPath("moodmedia/software_v5/settings/");
                this._aOpeningHoursXmlFile.setUrlName("opening_hour_settings.xml");
                this._aScreenSaverXmlFile.setStorage(defaultResourceStorageName); //"c:/");  
                this._aScreenSaverXmlFile.setPath("moodmedia/project/");
                this._aScreenSaverXmlFile.setName("screen_saver_v5.xml");
                this._aScreenSaverXmlFile.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
                this._aScreenSaverXmlFile.setUrlPath("moodmedia/project/");
                this._aScreenSaverXmlFile.setUrlName("screen_saver_v5.xml");
                this._aScreenSaverResourceFolder.setStorage(defaultResourceStorageName); //"c:/");  
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
            };
            //-------------------------------
            RE_PlaybackGlobalConfig.prototype.setEpsilonTimeBefireNaturalEnd = function (epsilonTimeBeforeNaturalEnd) {
                this._epsilonTimeBeforeNaturalEnd = epsilonTimeBeforeNaturalEnd;
            };
            //-------------------------------
            RE_PlaybackGlobalConfig.prototype.getEpsilonTimeBefireNaturalEnd = function () {
                return this._epsilonTimeBeforeNaturalEnd;
            };
            //-------------------------------
            RE_PlaybackGlobalConfig.prototype.setHardwareSettings = function (aHardwareSettings) {
                this._aHardwareSettings = aHardwareSettings;
            };
            //-------------------------------
            RE_PlaybackGlobalConfig.prototype.getHardwareSettings = function () {
                return this._aHardwareSettings;
            };
            //-------------------------------
            RE_PlaybackGlobalConfig.prototype.setOpeningHours = function (aOpeningHours) {
                this._aOpeningHours = aOpeningHours;
            };
            //-------------------------------
            RE_PlaybackGlobalConfig.prototype.getOpeningHours = function () {
                return this._aOpeningHours;
            };
            //-------------------------------
            RE_PlaybackGlobalConfig.prototype.setScreenSaverConfig = function (aScreenSaverConfig) {
                this._aScreenSaverConfig = aScreenSaverConfig;
            };
            //-------------------------------
            RE_PlaybackGlobalConfig.prototype.getScreenSaverConfig = function () {
                return this._aScreenSaverConfig;
            };
            return RE_PlaybackGlobalConfig;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_playback.RE_PlaybackGlobalConfig = RE_PlaybackGlobalConfig;
    })(rm_playback = exports.rm_playback || (exports.rm_playback = {}));
});
//# sourceMappingURL=RE_PlaybackGlobalConfig.js.map