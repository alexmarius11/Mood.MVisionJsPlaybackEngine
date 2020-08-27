define(["require", "exports", "../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemType", "../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_JsonMediaTypeId", "../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_NextChildSelectionType", "../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_ImageDisplayTypeEnum", "../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_MediaTypeEnum"], function (require, exports, amPlaylistItemType, amJsonMediaTypeId, amNextChildSelectionType, amImageDisplayTypeEnum, amMediaTypeEnum) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var IImpl_PlaylistController_Playlist_Mood_v5 = /** @class */ (function () {
            //----------- constructor 
            function IImpl_PlaylistController_Playlist_Mood_v5(owner) {
                this._owner = owner;
            }
            //-----------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.setRenderingControllerService = function (targetService) {
                this._owner.setRenderingControllerService(targetService);
            };
            //-------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadPlaylist = function (aPlaylistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
                this._owner._aPlaylist = this._owner._aServiceLocator._iEntityCreation.createDefaultMainPlaylist(error);
                this._owner._aPlaylist.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                this._owner._aPlaylist.setParent(null);
                //this._owner._aPlaylist.loadProperties(aPlaylistType, jsonObject, aPlaylistFile, aParent, error, context, callback);
                //------------
                this._owner._aPlaylist.setPlaylistItemType(amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_MainPlaylist);
                //------------ load properties
                this._owner._aPlaylist._main_ID = jsonObject.ID;
                this._owner._aPlaylist._main_Name = jsonObject.Name;
                this._owner._aPlaylist._main_PlayerType = jsonObject.PlayerType;
                this._owner._aPlaylist._main_SerialNumber = jsonObject.SerialNumber;
                this._owner._aPlaylist._main_SiteID = jsonObject.SiteID;
                this._owner._aPlaylist._main_arrStreamList = jsonObject.StreamList;
                this._owner._aPlaylist._main_WorkgroupID = jsonObject.WorkgroupID;
                this._owner._aPlaylist._main_BrandType = jsonObject.BrandType;
                this._owner._aPlaylist._main_CompatibleHardwareVersions = jsonObject.CompatibleHardwareVersions;
                this._owner._aPlaylist._main_PaybackProfile = jsonObject.PaybackProfile;
                //------------
                this._owner._aPlaylist.setPlaylistItemIdAndName(jsonObject.ID, jsonObject.Name);
                /*
                this._owner._aPlaylist.setPlaylistID(ID);
                this._owner._aPlaylist.setPlaylistName(Name);
                this._owner._aPlaylist.setPlayerType(PlayerType);
                this._owner._aPlaylist.setSerialNumber(SerialNumber);
                this._owner._aPlaylist.setSiteID(SiteID);
                this._owner._aPlaylist.setWorkgroupID(WorkgroupID);
                this._owner._aPlaylist.setBrandType(BrandType);
                this._owner._aPlaylist.setWorkgroupID(CompatibleHardwareVersions);
                this._owner._aPlaylist.setPaybackProfile(PaybackProfile);
                */
                //------------ create and load prepare and rendering parameters
                var prepareParams = this._owner._aServiceLocator._iEntityCreation.createDefaultControlPrepareParams(error);
                prepareParams.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                prepareParams.getRenderParams().getParamContainerPosSize().setAllPosAndSizesInPercentages(0.0, 0.0, 1.0, 1.0, -1, -1, -1, -1, this._owner._iPlaylistControllerConfig.getScreenProperties().getScreenLeft(), this._owner._iPlaylistControllerConfig.getScreenProperties().getScreenTop(), this._owner._iPlaylistControllerConfig.getScreenProperties().getScreenRight(), this._owner._iPlaylistControllerConfig.getScreenProperties().getScreenBottom());
                prepareParams.getRenderParams().getParamContainerAdjustedPosSize().setAllPosAndSizesInPercentages(0.0, 0.0, 1.0, 1.0, -1, -1, -1, -1, this._owner._iPlaylistControllerConfig.getScreenProperties().getScreenLeft(), this._owner._iPlaylistControllerConfig.getScreenProperties().getScreenTop(), this._owner._iPlaylistControllerConfig.getScreenProperties().getScreenRight(), this._owner._iPlaylistControllerConfig.getScreenProperties().getScreenBottom());
                prepareParams.getRenderParams().getParamContainerPosSize().setContainerZOrder(9000); //default
                this._owner._aPlaylist.setPrepareParams(prepareParams);
                //------------ create and load playlist-item logic
                var mainPlaylistLogic = this._owner._aServiceLocator._iEntityCreation.createDefaultMainPlaylistLogic(error);
                mainPlaylistLogic.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                this._owner._aPlaylist.setLogic(mainPlaylistLogic);
                mainPlaylistLogic.setOwnerIdxAsChild(0);
                mainPlaylistLogic.setOwnerIdxAsLevel(0);
                //----------------
                this.loadStreams(aPlaylistType, jsonObject, aPlaylistFile, this._owner._aPlaylist, error, context, callback);
                //-------------------
                mainPlaylistLogic.setAncestorThatMustCreateARenderingZone(error, context, callback);
                //-------------------
                mainPlaylistLogic.forAllChildren_adjustChildrenCoordinates_AlignNearbyEdges(error, context, callback);
                //--------------------
                //var jsonStream = this._owner._aPlaylist.toJSONString();
                //console.log(jsonStream);
                //var  a=1;  
                //------------------- to do set error
                if (callback != null) {
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadStreams = function (aPlaylistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
                //-------------------- load Streams
                var crtPlaylistStream = null;
                for (var iStream = 0; iStream < jsonObject.Streams_Extended.length; iStream++) {
                    this.loadOneStream(aPlaylistType, jsonObject.Streams_Extended[iStream], aPlaylistFile, iStream, aParent, error, context, callback);
                    //break; //temp;
                }
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadOneStream = function (aPlaylistType, jsonObject, aPlaylistFile, iStream, aParent, error, context, callback) {
                var crtPlaylistStream = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_Stream(error);
                crtPlaylistStream.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                //------------------
                crtPlaylistStream.setPlaylistItemType(amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_Stream);
                //------------------
                var tagManager = this._owner._aServiceLocator._iEntityCreation.createDefaultTagManager(error);
                crtPlaylistStream.setTagManager(tagManager);
                //-------------------
                var streamID = jsonObject.ID;
                var streamName = jsonObject.Name;
                var streamHardwareID = jsonObject.HardwareID;
                var streamWindowsAccountId = jsonObject.WindowsAccountId;
                //----
                crtPlaylistStream.setStreamID(streamID);
                crtPlaylistStream.setStreamName(streamName);
                crtPlaylistStream.setHardwareID(streamHardwareID);
                crtPlaylistStream.setWindowsAccountId(streamWindowsAccountId);
                //-------------------
                crtPlaylistStream._stream_HardwareID = jsonObject.HardwareID;
                crtPlaylistStream._stream_Height = jsonObject.Height;
                crtPlaylistStream._stream_ID = jsonObject.ID;
                crtPlaylistStream._stream_Name = jsonObject.Name;
                crtPlaylistStream._stream_Width = jsonObject.Width;
                crtPlaylistStream._stream_WindowsAccountId = jsonObject.WindowsAccountId;
                crtPlaylistStream._stream_X = jsonObject.X;
                crtPlaylistStream._stream_Y = jsonObject.Y;
                crtPlaylistStream._channel_arrAspectRatioIDs = jsonObject.Channel_Extended.AspectRatioIDs;
                crtPlaylistStream._channel_CreationDate = jsonObject.Channel_Extended.CreationDate;
                crtPlaylistStream._channel_Description = jsonObject.Channel_Extended.Description;
                crtPlaylistStream._channel_Duration = jsonObject.Channel_Extended.Duration;
                crtPlaylistStream._channel_ID = jsonObject.Channel_Extended.ID;
                crtPlaylistStream._channel_IsLocked = jsonObject.Channel_Extended.IsLocked;
                crtPlaylistStream._channel_IsSharedFromParentWorkgroup = jsonObject.Channel_Extended.IsSharedFromParentWorkgroup;
                crtPlaylistStream._channel_IsUnsharedButPartOfASharedContainer = jsonObject.Channel_Extended.IsUnsharedButPartOfASharedContainer;
                crtPlaylistStream._channel_LastLock = jsonObject.Channel_Extended.LastLock;
                crtPlaylistStream._channel_LastModificationDate = jsonObject.Channel_Extended.LastModificationDate;
                crtPlaylistStream._channel_LastModifierId = jsonObject.Channel_Extended.LastModifierId;
                crtPlaylistStream._channel_Loop = jsonObject.Channel_Extended.Loop;
                crtPlaylistStream._channel_MediaParentId = jsonObject.Channel_Extended.MediaParentId;
                crtPlaylistStream._channel_MediaType = jsonObject.Channel_Extended.MediaType;
                crtPlaylistStream._channel_Name = jsonObject.Channel_Extended.Name;
                crtPlaylistStream._channel_OwnerId = jsonObject.Channel_Extended.OwnerId;
                crtPlaylistStream._channel_OwnerName = jsonObject.Channel_Extended.OwnerName;
                crtPlaylistStream._channel_arrTagIDs = jsonObject.Channel_Extended.TagIDs;
                crtPlaylistStream._channel_UserIDLock = jsonObject.Channel_Extended.UserIDLock;
                crtPlaylistStream._channel_UserNameLock = jsonObject.Channel_Extended.UserNameLock;
                crtPlaylistStream._channel_WorkgroupId = jsonObject.Channel_Extended.WorkgroupId;
                crtPlaylistStream._channel_CustomID = jsonObject.Channel_Extended.CustomID;
                crtPlaylistStream._channel_arrDiffusionDays = jsonObject.Channel_Extended.DiffusionDays;
                crtPlaylistStream._channel_EndTime = jsonObject.Channel_Extended.EndTime;
                crtPlaylistStream._channel_ExpectedPlayDate = jsonObject.Channel_Extended.ExpectedPlayDate;
                crtPlaylistStream._channel_ExpectedPlayTime = jsonObject.Channel_Extended.ExpectedPlayTime;
                crtPlaylistStream._channel_FirstDiffusion = jsonObject.Channel_Extended.FirstDiffusion;
                crtPlaylistStream._channel_LastDiffusion = jsonObject.Channel_Extended.LastDiffusion;
                crtPlaylistStream._channel_arrMediaAccessRights = jsonObject.Channel_Extended.MediaAccessRights;
                crtPlaylistStream._channel_SharingType = jsonObject.Channel_Extended.SharingType;
                crtPlaylistStream._channel_StartTime = jsonObject.Channel_Extended.StartTime;
                crtPlaylistStream._channel_EventIds = jsonObject.Channel_Extended.EventIds;
                crtPlaylistStream._channel_LastActivation = jsonObject.Channel_Extended.LastActivation;
                crtPlaylistStream._channel_Sequence = jsonObject.Channel_Extended.Sequence;
                crtPlaylistStream._channel_isForLocalInput = jsonObject.Channel_Extended.isForLocalInput;
                //if (jsonObject.Channel_Extended.Events == null)
                //crtPlaylistStream._channel_arrEvents             = jsonObject.Channel_Extended.Events;
                crtPlaylistStream._channel_arrMedias_Statics_Extended = jsonObject.Channel_Extended.Medias_Statics_Extended;
                crtPlaylistStream._meta_ID = jsonObject.ID;
                crtPlaylistStream._meta_Name = jsonObject.Name;
                crtPlaylistStream._meta_CustomID = jsonObject.CustomID;
                crtPlaylistStream._meta_MediaType = jsonObject.MediaType;
                crtPlaylistStream._diff_duration = jsonObject.Channel_Extended.Duration;
                crtPlaylistStream._diff_startDate = jsonObject.Channel_Extended.FirstDiffusion;
                crtPlaylistStream._diff_endDate = jsonObject.Channel_Extended.LastDiffusion; //jsonObject.FirstDiffusion; 
                crtPlaylistStream._diff_startTime = jsonObject.Channel_Extended.StartTime;
                crtPlaylistStream._diff_endTime = jsonObject.Channel_Extended.EndTime;
                crtPlaylistStream._diff_weekdays = jsonObject.Channel_Extended.DiffusionDays;
                //-------------------
                crtPlaylistStream.setPlaylistItemIdAndName(jsonObject.ID, jsonObject.Name);
                //------------------- create and set rendering parameters
                var percX = jsonObject.X;
                var percY = jsonObject.Y;
                var percWidth = jsonObject.Width;
                var percHeight = jsonObject.Height;
                //------------ create and load prepare and rendering parameters
                var prepareParams = this._owner._aServiceLocator._iEntityCreation.createDefaultControlPrepareParams(error);
                prepareParams.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                prepareParams.getRenderParams().getParamContainerPosSize().setOrigAllPosAndSizesInPercentages(percX, percY, percX + percWidth, percY + percHeight, 0, 0, percWidth, percHeight);
                prepareParams.getRenderParams().getParamContainerPosSize().setAllPosAndSizesInPercentages(percX * 0.01, percY * 0.01, (percX + percWidth) * 0.01, (percY + percHeight) * 0.01, -1, -1, -1, -1, this._owner._iPlaylistControllerConfig.getScreenProperties().getScreenLeft(), this._owner._iPlaylistControllerConfig.getScreenProperties().getScreenTop(), this._owner._iPlaylistControllerConfig.getScreenProperties().getScreenRight(), this._owner._iPlaylistControllerConfig.getScreenProperties().getScreenBottom());
                prepareParams.getRenderParams().getParamContainerAdjustedPosSize().setOrigAllPosAndSizesInPercentages(percX, percY, percX + percWidth, percY + percHeight, 0, 0, percWidth, percHeight);
                prepareParams.getRenderParams().getParamContainerAdjustedPosSize().setAllPosAndSizesInPercentages(percX * 0.01, percY * 0.01, (percX + percWidth) * 0.01, (percY + percHeight) * 0.01, -1, -1, -1, -1, this._owner._iPlaylistControllerConfig.getScreenProperties().getScreenLeft(), this._owner._iPlaylistControllerConfig.getScreenProperties().getScreenTop(), this._owner._iPlaylistControllerConfig.getScreenProperties().getScreenRight(), this._owner._iPlaylistControllerConfig.getScreenProperties().getScreenBottom());
                prepareParams.getRenderParams().getParamContainerPosSize().setContainerZOrder(9000 + 100 * (iStream + 1)); //default 
                crtPlaylistStream.setPrepareParams(prepareParams);
                //------------ create and set the playlist-item logic
                var crtPlaylistStreamLogic = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_StreamLogic(error);
                crtPlaylistStreamLogic.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistStream.setLogic(crtPlaylistStreamLogic);
                crtPlaylistStreamLogic.setOwnerIdxAsChild(iStream);
                crtPlaylistStreamLogic.setOwnerIdxAsLevel(aParent.getLogic().getOwnerIdxAsLevel() + 1);
                crtPlaylistStreamLogic.setDiffusionInfos(crtPlaylistStream._diff_duration, crtPlaylistStream._diff_startDate, crtPlaylistStream._diff_endDate, crtPlaylistStream._diff_startTime, crtPlaylistStream._diff_endTime, crtPlaylistStream._diff_weekdays);
                crtPlaylistStreamLogic.setDurationAsString(crtPlaylistStream._diff_duration);
                //------------------
                aParent.addPlaylistItem(crtPlaylistStream);
                //------------------
                this.loadEvents(aPlaylistType, jsonObject.Channel_Extended, aPlaylistFile, 0, crtPlaylistStream, error, context, callback);
                //------------------
                this.loadStaticMediaItems(aPlaylistType, jsonObject.Channel_Extended, aPlaylistFile, crtPlaylistStream, error, context, callback);
                //------------------
                var iStream = 0;
                this.loadOnePlaylist(aPlaylistType, jsonObject.Channel_Extended.Playlist_Extended, aPlaylistFile, iStream, crtPlaylistStream, error, context, callback);
                //------------------
                this.loadScreenSaver(aPlaylistType, jsonObject.Channel_Extended, aPlaylistFile, 1, crtPlaylistStream, error, context, callback);
                //--------------------
                //var jsonStream = crtPlaylistStream.toJSONString();
                //console.log(jsonStream);
                //var  a=1;  
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadScreenSaver = function (aPlaylistType, jsonObject, aPlaylistFile, iScreenSaverIdx, aParent, error, context, callback) {
                var playlistGlobalConfig = this._owner._iPlaylistControllerConfig.getPlaybackGlobalConfig();
                if (playlistGlobalConfig == null)
                    return;
                var aScreenSaverConfig = playlistGlobalConfig.getScreenSaverConfig();
                if (aScreenSaverConfig == null)
                    return;
                if (aScreenSaverConfig.getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image)
                    return this.loadScreenSaverImage(aPlaylistType, jsonObject.Channel_Extended, aPlaylistFile, iScreenSaverIdx, aParent, error, context, callback);
                if (aScreenSaverConfig.getMediaType() == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video)
                    return this.loadScreenSaverVideo(aPlaylistType, jsonObject.Channel_Extended, aPlaylistFile, iScreenSaverIdx, aParent, error, context, callback);
                return this.loadScreenSaverImage(aPlaylistType, jsonObject.Channel_Extended, aPlaylistFile, iScreenSaverIdx, aParent, error, context, callback);
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadScreenSaverImage = function (aPlaylistType, jsonObject, aPlaylistFile, iScreenSaverIdx, aParent, error, context, callback) {
                var crtPlaylistItemScreenSaverImage = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_ScreenSaverImage(error);
                crtPlaylistItemScreenSaverImage.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemScreenSaverImage.setPlaylistItemType(amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_ScreenSaverImage);
                crtPlaylistItemScreenSaverImage._main_type = null; //jsonObject.__type;
                crtPlaylistItemScreenSaverImage._main_arrAspectRatioIDs = null; //jsonObject.AspectRatioIDs;
                crtPlaylistItemScreenSaverImage._main_CreationDate = null; //jsonObject.CreationDate;
                crtPlaylistItemScreenSaverImage._main_Description = null; //jsonObject.Description;
                crtPlaylistItemScreenSaverImage._main_Duration = null; //jsonObject.Duration;
                crtPlaylistItemScreenSaverImage._main_ID = null; //jsonObject.ID;
                crtPlaylistItemScreenSaverImage._main_IsLocked = null; //jsonObject.IsLocked;
                crtPlaylistItemScreenSaverImage._main_IsSharedFromParentWorkgroup = null; //jsonObject.IsSharedFromParentWorkgroup;
                crtPlaylistItemScreenSaverImage._main_IsUnsharedButPartOfASharedContainer = null; //jsonObject.IsUnsharedButPartOfASharedContainer;
                crtPlaylistItemScreenSaverImage._main_LastLock = null; //jsonObject.LastLock;
                crtPlaylistItemScreenSaverImage._main_LastModificationDate = null; //jsonObject.LastModificationDate;
                crtPlaylistItemScreenSaverImage._main_LastModifierId = null; //jsonObject.LastModifierId;
                crtPlaylistItemScreenSaverImage._main_Loop = null; //jsonObject.Loop;
                crtPlaylistItemScreenSaverImage._main_MediaParentId = null; //jsonObject.MediaParentId;
                crtPlaylistItemScreenSaverImage._main_MediaType = null; //jsonObject.MediaType;
                crtPlaylistItemScreenSaverImage._main_Name = null; //jsonObject.Name;
                crtPlaylistItemScreenSaverImage._main_OwnerId = null; //jsonObject.OwnerId;
                crtPlaylistItemScreenSaverImage._main_OwnerName = null; //jsonObject.OwnerName;
                crtPlaylistItemScreenSaverImage._main_arrTagIDs = null; //jsonObject.TagIDs;
                crtPlaylistItemScreenSaverImage._main_UserIDLock = null; //jsonObject.UserIDLock;
                crtPlaylistItemScreenSaverImage._main_UserNameLock = null; //jsonObject.UserNameLock;
                crtPlaylistItemScreenSaverImage._main_WorkgroupId = null; //jsonObject.WorkgroupId;
                crtPlaylistItemScreenSaverImage._main_CustomID = null; //jsonObject.CustomID;
                crtPlaylistItemScreenSaverImage._main_arrDiffusionDays = null; //jsonObject.DiffusionDays;
                crtPlaylistItemScreenSaverImage._main_EndTime = null; //jsonObject.EndTime;
                crtPlaylistItemScreenSaverImage._main_ExpectedPlayDate = null; //jsonObject.ExpectedPlayDate;
                crtPlaylistItemScreenSaverImage._main_ExpectedPlayTime = null; //jsonObject.ExpectedPlayTime;
                crtPlaylistItemScreenSaverImage._main_FirstDiffusion = null; //jsonObject.FirstDiffusion;
                crtPlaylistItemScreenSaverImage._main_LastDiffusion = null; //jsonObject.LastDiffusion;
                crtPlaylistItemScreenSaverImage._main_arrMediaAccessRights = null; //jsonObject.MediaAccessRights;
                crtPlaylistItemScreenSaverImage._main_SharingType = null; //jsonObject.SharingType;
                crtPlaylistItemScreenSaverImage._main_StartTime = null; //jsonObject.StartTime;
                crtPlaylistItemScreenSaverImage._main_ContentFileID = null; //jsonObject.ContentFileID;
                crtPlaylistItemScreenSaverImage._main_ContentFileName = null; //jsonObject.ContentFileName;
                crtPlaylistItemScreenSaverImage._main_ContentFilePlayerShaCode = null; //jsonObject.ContentFilePlayerShaCode;
                crtPlaylistItemScreenSaverImage._main_ContentFileStateID = null; //jsonObject.ContentFileStateID;
                crtPlaylistItemScreenSaverImage._main_ContentPlayerFileName = null; //jsonObject.ContentPlayerFileName;
                crtPlaylistItemScreenSaverImage._main_Flag = null; //jsonObject.Flag;
                crtPlaylistItemScreenSaverImage._main_RemoteMediaProperties = null; //jsonObject.RemoteMediaProperties;
                crtPlaylistItemScreenSaverImage._main_State = null; //jsonObject.State;
                crtPlaylistItemScreenSaverImage._meta_ID = null; //jsonObject.ID;
                crtPlaylistItemScreenSaverImage._meta_Name = null; //jsonObject.Name;
                crtPlaylistItemScreenSaverImage._meta_CustomID = null; //jsonObject.CustomID;
                crtPlaylistItemScreenSaverImage._meta_MediaType = null; //jsonObject.MediaType;
                crtPlaylistItemScreenSaverImage._meta_ContentFileName = null; //jsonObject.ContentFileName;
                crtPlaylistItemScreenSaverImage._meta_ContentPlayerFileName = null; //jsonObject.ContentPlayerFileName;
                crtPlaylistItemScreenSaverImage._prop_type = null; //jsonObject.Properties.__type;   
                crtPlaylistItemScreenSaverImage._prop_Height = null; //jsonObject.Properties.Height;
                crtPlaylistItemScreenSaverImage._prop_Position = null; //jsonObject.Properties.Position;
                crtPlaylistItemScreenSaverImage._prop_Width = null; //jsonObject.Properties.Width;
                crtPlaylistItemScreenSaverImage._diff_duration = null; //jsonObject.Duration;
                crtPlaylistItemScreenSaverImage._diff_startDate = null; //jsonObject.FirstDiffusion;
                crtPlaylistItemScreenSaverImage._diff_endDate = null; //jsonObject.LastDiffusion; //jsonObject.FirstDiffusion; 
                crtPlaylistItemScreenSaverImage._diff_startTime = null; //jsonObject.StartTime;
                crtPlaylistItemScreenSaverImage._diff_endTime = null; //jsonObject.EndTime;
                crtPlaylistItemScreenSaverImage._diff_weekdays = null; //jsonObject.DiffusionDays;
                //-----------
                crtPlaylistItemScreenSaverImage.setPlaylistItemIdAndName(99990 + iScreenSaverIdx, "screen-saver-img-" + iScreenSaverIdx); //jsonObject.ID, jsonObject.Name);
                //------------ create and set the playlist-item logic
                var crtPlaylistItemScreenSaverImageLogic = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_ScreenSaverImageLogic(error);
                crtPlaylistItemScreenSaverImageLogic.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemScreenSaverImage.setLogic(crtPlaylistItemScreenSaverImageLogic);
                crtPlaylistItemScreenSaverImageLogic.setOwnerIdxAsChild(iScreenSaverIdx);
                crtPlaylistItemScreenSaverImageLogic.setOwnerIdxAsLevel(aParent.getLogic().getOwnerIdxAsLevel() + 1);
                crtPlaylistItemScreenSaverImageLogic.setDiffusionInfos(crtPlaylistItemScreenSaverImage._diff_duration, crtPlaylistItemScreenSaverImage._diff_startDate, crtPlaylistItemScreenSaverImage._diff_endDate, crtPlaylistItemScreenSaverImage._diff_startTime, crtPlaylistItemScreenSaverImage._diff_endTime, crtPlaylistItemScreenSaverImage._diff_weekdays);
                //crtPlaylistItemScreenSaverImageLogic.setDurationAsString(crtPlaylistItemScreenSaverImage._diff_duration);
                //-------------------
                aParent.addPlaylistItem(crtPlaylistItemScreenSaverImage);
                //-------------------- setup rendering information
                var prepareParams = this._owner._aServiceLocator._iEntityCreation.createDefaultControlPrepareParams(error);
                prepareParams.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemScreenSaverImage.setPrepareParams(prepareParams);
                var ancestorWithRenderingZone = crtPlaylistItemScreenSaverImage.getLogic().getFirstParentWithARenderingZone();
                crtPlaylistItemScreenSaverImage.getLogic().setTargetRenderingZoneId(ancestorWithRenderingZone.getPlaylistItemId());
                prepareParams.getRenderParams().getParamIdentification().setMediaType(amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_ScreenSaver);
                var playlistGlobalConfig = this._owner._iPlaylistControllerConfig.getPlaybackGlobalConfig();
                var screenSaverUrlStorage = playlistGlobalConfig._aScreenSaverResourceFolder.getUrlStorage();
                var screenSaverPath = playlistGlobalConfig._aScreenSaverResourceFolder.getPath();
                var screenSaverFileName = "defaultscreensaver.jpg";
                var screenSaverDuration = "10000";
                var screenSaverImageDisplayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Stretch;
                ;
                var aScreenSaverConfig = null;
                if (playlistGlobalConfig != null) {
                    aScreenSaverConfig = playlistGlobalConfig.getScreenSaverConfig();
                    if (aScreenSaverConfig != null) {
                        screenSaverUrlStorage = ""; //playlistGlobalConfig._aScreenSaverResourceFolder.getUrlStorage(); 
                        screenSaverPath = "";
                        screenSaverFileName = aScreenSaverConfig.getFileFullName();
                        screenSaverImageDisplayType = aScreenSaverConfig.getImageDisplayType();
                        screenSaverDuration = "" + aScreenSaverConfig.getDuration();
                    }
                }
                //----------
                crtPlaylistItemScreenSaverImageLogic.setDurationAsString(screenSaverDuration);
                //---------
                prepareParams.getRenderParams().getParamFileInfo().setUrlStorage(screenSaverUrlStorage); //"http://127.0.0.1:9080/c/");
                prepareParams.getRenderParams().getParamFileInfo().setUrlPath(screenSaverPath);
                prepareParams.getRenderParams().getParamFileInfo().setUrlName(screenSaverFileName);
                //---
                prepareParams.getRenderParams().getParamContainerPosSize().setAllPosAndSizes(ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerLeft(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerTop(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerRight(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerBottom(), -1, -1, -1, -1);
                prepareParams.getRenderParams().getParamContainerAdjustedPosSize().setAllPosAndSizes(ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerLeft(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerTop(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerRight(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerBottom(), -1, -1, -1, -1);
                prepareParams.getRenderParams().getParamContainerPosSize().setContainerZOrder(ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerZOrder()); //9002
                //---
                //jsonObject.Properties.Position;
                crtPlaylistItemScreenSaverImage.getPrepareParams().getRenderParams().getParamImage().setDisplayTypeAsNumber(screenSaverImageDisplayType);
                //--------------------
                //var jsonImage = crtPlaylistItemScreenSaverImage.toJSONString();
                //var  a=1;
                //--------------------
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadScreenSaverVideo = function (aPlaylistType, jsonObject, aPlaylistFile, iScreenSaverIdx, aParent, error, context, callback) {
                //--------------- case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.MEDIA_STATIC_MOVIE:
                var crtPlaylistItemScreenSaverVideo = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_ScreenSaverVideo(error);
                crtPlaylistItemScreenSaverVideo.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemScreenSaverVideo.setPlaylistItemType(amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_ScreenSaverVideo);
                //------------------ metadata
                crtPlaylistItemScreenSaverVideo._main_type = null; //jsonObject.__type;
                crtPlaylistItemScreenSaverVideo._main_arrAspectRatioIDs = null; //jsonObject.AspectRatioIDs;
                crtPlaylistItemScreenSaverVideo._main_CreationDate = null; //jsonObject.CreationDate;
                crtPlaylistItemScreenSaverVideo._main_Description = null; //jsonObject.Description;
                crtPlaylistItemScreenSaverVideo._main_Duration = null; //jsonObject.Duration;
                crtPlaylistItemScreenSaverVideo._main_ID = null; //jsonObject.ID;
                crtPlaylistItemScreenSaverVideo._main_IsLocked = null; //jsonObject.IsLocked;
                crtPlaylistItemScreenSaverVideo._main_IsSharedFromParentWorkgroup = null; //jsonObject.IsSharedFromParentWorkgroup;
                crtPlaylistItemScreenSaverVideo._main_IsUnsharedButPartOfASharedContainer = null; //jsonObject.IsUnsharedButPartOfASharedContainer;
                crtPlaylistItemScreenSaverVideo._main_LastLock = null; //jsonObject.LastLock;
                crtPlaylistItemScreenSaverVideo._main_LastModificationDate = null; //jsonObject.LastModificationDate;
                crtPlaylistItemScreenSaverVideo._main_LastModifierId = null; //jsonObject.LastModifierId;
                crtPlaylistItemScreenSaverVideo._main_Loop = null; //jsonObject.Loop;
                crtPlaylistItemScreenSaverVideo._main_MediaParentId = null; //jsonObject.MediaParentId;
                crtPlaylistItemScreenSaverVideo._main_MediaType = null; //jsonObject.MediaType;
                crtPlaylistItemScreenSaverVideo._main_Name = null; //jsonObject.Name;
                crtPlaylistItemScreenSaverVideo._main_OwnerId = null; //jsonObject.OwnerId;
                crtPlaylistItemScreenSaverVideo._main_OwnerName = null; //jsonObject.OwnerName;
                crtPlaylistItemScreenSaverVideo._main_arrTagIDs = null; //jsonObject.TagIDs;
                crtPlaylistItemScreenSaverVideo._main_UserIDLock = null; //jsonObject.UserIDLock;
                crtPlaylistItemScreenSaverVideo._main_UserNameLock = null; //jsonObject.UserNameLock;
                crtPlaylistItemScreenSaverVideo._main_WorkgroupId = null; //jsonObject.WorkgroupId;
                crtPlaylistItemScreenSaverVideo._main_CustomID = null; //jsonObject.CustomID;
                crtPlaylistItemScreenSaverVideo._main_arrDiffusionDays = null; //jsonObject.DiffusionDays;
                crtPlaylistItemScreenSaverVideo._main_EndTime = null; //jsonObject.EndTime;
                crtPlaylistItemScreenSaverVideo._main_ExpectedPlayDate = null; //jsonObject.ExpectedPlayDate;
                crtPlaylistItemScreenSaverVideo._main_ExpectedPlayTime = null; //jsonObject.ExpectedPlayTime;
                crtPlaylistItemScreenSaverVideo._main_FirstDiffusion = null; //jsonObject.FirstDiffusion;
                crtPlaylistItemScreenSaverVideo._main_LastDiffusion = null; //jsonObject.LastDiffusion;
                crtPlaylistItemScreenSaverVideo._main_arrMediaAccessRights = null; //jsonObject.MediaAccessRights;
                crtPlaylistItemScreenSaverVideo._main_SharingType = null; //jsonObject.SharingType;
                crtPlaylistItemScreenSaverVideo._main_StartTime = null; //jsonObject.StartTime;
                crtPlaylistItemScreenSaverVideo._main_ContentFileID = null; //jsonObject.ContentFileID;
                crtPlaylistItemScreenSaverVideo._main_ContentFileName = null; //jsonObject.ContentFileName;
                crtPlaylistItemScreenSaverVideo._main_ContentFilePlayerShaCode = null; //jsonObject.ContentFilePlayerShaCode;
                crtPlaylistItemScreenSaverVideo._main_ContentFileStateID = null; //jsonObject.ContentFileStateID;
                crtPlaylistItemScreenSaverVideo._main_ContentPlayerFileName = null; //jsonObject.ContentPlayerFileName;
                crtPlaylistItemScreenSaverVideo._main_Flag = null; //jsonObject.Flag;
                crtPlaylistItemScreenSaverVideo._main_RemoteMediaProperties = null; //jsonObject.RemoteMediaProperties;
                crtPlaylistItemScreenSaverVideo._main_State = null; //jsonObject.State;
                crtPlaylistItemScreenSaverVideo._meta_ID = null; //jsonObject.ID;
                crtPlaylistItemScreenSaverVideo._meta_Name = null; //jsonObject.Name;
                crtPlaylistItemScreenSaverVideo._meta_CustomID = null; //jsonObject.CustomID;
                crtPlaylistItemScreenSaverVideo._meta_MediaType = null; //jsonObject.MediaType;
                crtPlaylistItemScreenSaverVideo._meta_ContentFileName = null; //jsonObject.ContentPlayerFileName;
                crtPlaylistItemScreenSaverVideo._meta_ContentPlayerFileName = null; //jsonObject.ContentPlayerFileName;
                crtPlaylistItemScreenSaverVideo._prop_type = null; //jsonObject.Properties.__type;   
                crtPlaylistItemScreenSaverVideo._prop_Height = null; //jsonObject.Properties.Height;
                crtPlaylistItemScreenSaverVideo._prop_Keep_Aspect_Ratio = null; //jsonObject.Properties.Keep_Aspect_Ratio;
                crtPlaylistItemScreenSaverVideo._prop_Sound_Volume = null; //jsonObject.Properties.Sound_Volume;
                crtPlaylistItemScreenSaverVideo._prop_True_Duration = null; //jsonObject.Properties.True_Duration;
                crtPlaylistItemScreenSaverVideo._prop_Width = null; //jsonObject.Properties.Width;
                crtPlaylistItemScreenSaverVideo._diff_duration = null; //jsonObject.Duration;
                crtPlaylistItemScreenSaverVideo._diff_startDate = null; //jsonObject.FirstDiffusion;
                crtPlaylistItemScreenSaverVideo._diff_endDate = null; //jsonObject.LastDiffusion; //jsonObject.FirstDiffusion; 
                crtPlaylistItemScreenSaverVideo._diff_startTime = null; //jsonObject.StartTime;
                crtPlaylistItemScreenSaverVideo._diff_endTime = null; //jsonObject.EndTime;
                crtPlaylistItemScreenSaverVideo._diff_weekdays = null; //jsonObject.DiffusionDays;
                //-----------
                crtPlaylistItemScreenSaverVideo.setPlaylistItemIdAndName(99980 + iScreenSaverIdx, "screen-saver-video-" + iScreenSaverIdx); //jsonObject.ID, jsonObject.Name);
                var playlistGlobalConfig = this._owner._iPlaylistControllerConfig.getPlaybackGlobalConfig();
                //------------ create and set the playlist-item logic
                var crtPlaylistItemScreenSaverVideoLogic = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_ScreenSaverVideoLogic(error);
                crtPlaylistItemScreenSaverVideoLogic.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemScreenSaverVideo.setLogic(crtPlaylistItemScreenSaverVideoLogic);
                crtPlaylistItemScreenSaverVideoLogic.setOwnerIdxAsChild(iScreenSaverIdx);
                crtPlaylistItemScreenSaverVideoLogic.setOwnerIdxAsLevel(aParent.getLogic().getOwnerIdxAsLevel() + 1);
                crtPlaylistItemScreenSaverVideoLogic.setDiffusionInfos(crtPlaylistItemScreenSaverVideo._diff_duration, crtPlaylistItemScreenSaverVideo._diff_startDate, crtPlaylistItemScreenSaverVideo._diff_endDate, crtPlaylistItemScreenSaverVideo._diff_startTime, crtPlaylistItemScreenSaverVideo._diff_endTime, crtPlaylistItemScreenSaverVideo._diff_weekdays);
                crtPlaylistItemScreenSaverVideoLogic.setDurationAsString(crtPlaylistItemScreenSaverVideo._diff_duration);
                crtPlaylistItemScreenSaverVideoLogic.setNaturalDurationAsString(crtPlaylistItemScreenSaverVideo._prop_True_Duration, playlistGlobalConfig.getEpsilonTimeBefireNaturalEnd());
                //---------------------
                //-------------------
                aParent.addPlaylistItem(crtPlaylistItemScreenSaverVideo);
                //-------------------- setup rendering information
                var prepareParams = this._owner._aServiceLocator._iEntityCreation.createDefaultControlPrepareParams(error);
                prepareParams.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemScreenSaverVideo.setPrepareParams(prepareParams);
                var ancestorWithRenderingZone = crtPlaylistItemScreenSaverVideo.getLogic().getFirstParentWithARenderingZone();
                crtPlaylistItemScreenSaverVideo.getLogic().setTargetRenderingZoneId(ancestorWithRenderingZone.getPlaylistItemId());
                prepareParams.getRenderParams().getParamIdentification().setMediaType(amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_ScreenSaver);
                var playlistGlobalConfig = this._owner._iPlaylistControllerConfig.getPlaybackGlobalConfig();
                var screenSaverUrlStorage = playlistGlobalConfig._aScreenSaverResourceFolder.getUrlStorage();
                var screenSaverPath = playlistGlobalConfig._aScreenSaverResourceFolder.getPath();
                var screenSaverFileName = "defaultscreensaver.mp4";
                var screenSaverDuration = "10000";
                //var screenSaverImageDisplayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Stretch;
                var aScreenSaverConfig = null;
                if (playlistGlobalConfig != null) {
                    aScreenSaverConfig = playlistGlobalConfig.getScreenSaverConfig();
                    if (aScreenSaverConfig != null) {
                        screenSaverUrlStorage = ""; //playlistGlobalConfig._aScreenSaverResourceFolder.getUrlStorage(); 
                        screenSaverPath = "";
                        screenSaverFileName = aScreenSaverConfig.getFileFullName();
                        //screenSaverImageDisplayType = aScreenSaverConfig.getImageDisplayType();
                        screenSaverDuration = "" + aScreenSaverConfig.getDuration();
                    }
                }
                //----------
                crtPlaylistItemScreenSaverVideoLogic.setDurationAsString(screenSaverDuration);
                //---------
                prepareParams.getRenderParams().getParamFileInfo().setUrlStorage(screenSaverUrlStorage); //"http://127.0.0.1:9080/c/");
                prepareParams.getRenderParams().getParamFileInfo().setUrlPath(screenSaverPath);
                prepareParams.getRenderParams().getParamFileInfo().setUrlName(screenSaverFileName);
                //---
                prepareParams.getRenderParams().getParamContainerPosSize().setAllPosAndSizes(ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerLeft(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerTop(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerRight(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerBottom(), -1, -1, -1, -1);
                prepareParams.getRenderParams().getParamContainerAdjustedPosSize().setAllPosAndSizes(ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerLeft(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerTop(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerRight(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerBottom(), -1, -1, -1, -1);
                prepareParams.getRenderParams().getParamContainerPosSize().setContainerZOrder(ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerZOrder()); //9002
                prepareParams.getRenderParams().getParamVideo().setKeepAspectRatio(crtPlaylistItemScreenSaverVideo._prop_Keep_Aspect_Ratio);
                prepareParams.getRenderParams().getParamVideo().setVideoAudioVolume(crtPlaylistItemScreenSaverVideo._prop_Sound_Volume);
                prepareParams.getRenderParams().getParamVideo().setVideoNaturalWidth(crtPlaylistItemScreenSaverVideo._prop_Width);
                prepareParams.getRenderParams().getParamVideo().setVideoNaturalHeight(crtPlaylistItemScreenSaverVideo._prop_Height);
                //--------------------
                //var jsonVideo = crtPlaylistItemVideo.toJSONString();
                //var  a=1;  
                //--------------------  
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadStaticMediaItems = function (aPlaylistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
                var crtStaticMediaItems = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_Container(error);
                crtStaticMediaItems.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                //------------------
                crtStaticMediaItems.setPlaylistItemType(amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_StaticMediaItems);
                //------------------
                var crtStaticMediaItemsLogic = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_ContainerLogic(error);
                crtStaticMediaItemsLogic.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtStaticMediaItems.setLogic(crtStaticMediaItemsLogic);
                crtStaticMediaItemsLogic.setOwnerIdxAsChild(3); //0-events, 1-playlist, 2-screensaver, 3-static-medias (that are not added in children list)
                crtStaticMediaItemsLogic.setOwnerIdxAsLevel(aParent.getLogic().getOwnerIdxAsLevel() + 1);
                //------------------
                aParent.setStaticMediaItems(crtStaticMediaItems);
                return;
                //-------------------- load Static Media Items
                for (var iMediaItem = 0; iMediaItem < jsonObject.Medias_Statics_Extended.length; iMediaItem++) {
                    this.loadOneMediaItem(aPlaylistType, jsonObject.Medias_Statics_Extended[iMediaItem], aPlaylistFile, iMediaItem, crtStaticMediaItems, error, context, callback);
                }
                //-----
                //var jsonPlaylist = crtStaticMediaItems.toJSONString();
                //console.log(jsonPlaylist);
                //var  a=1;
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadEvents = function (aPlaylistType, jsonObject, aPlaylistFile, iEventsIdx, aParent, error, context, callback) {
                var crtItemEvents = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_Events(error);
                crtItemEvents.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                //------------------
                crtItemEvents.setPlaylistItemType(amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_Events);
                //------------------
                aParent.setEvents(crtItemEvents);
                crtItemEvents._diff_duration = null; //jsonObject.Duration;
                crtItemEvents._diff_startDate = null; //jsonObject.FirstDiffusion;
                crtItemEvents._diff_endDate = null; //jsonObject.LastDiffusion; //jsonObject.FirstDiffusion; 
                crtItemEvents._diff_startTime = null; //jsonObject.StartTime;
                crtItemEvents._diff_endTime = null; //jsonObject.EndTime;
                crtItemEvents._diff_weekdays = null; //jsonObject.DiffusionDays;
                //-----------
                crtItemEvents.setPlaylistItemIdAndName(3001, "events");
                //------------ create and set the playlist-item logic
                var crtItemEventsLogic = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_EventsLogic(error);
                crtItemEventsLogic.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtItemEvents.setLogic(crtItemEventsLogic);
                crtItemEventsLogic.setOwnerIdxAsChild(iEventsIdx);
                crtItemEventsLogic.setOwnerIdxAsLevel(aParent.getLogic().getOwnerIdxAsLevel() + 1);
                crtItemEventsLogic.setDiffusionInfos(crtItemEvents._diff_duration, crtItemEvents._diff_startDate, crtItemEvents._diff_endDate, crtItemEvents._diff_startTime, crtItemEvents._diff_endTime, crtItemEvents._diff_weekdays);
                crtItemEventsLogic.setDurationAsString(crtItemEvents._diff_duration);
                //-------------------
                aParent.addPlaylistItem(crtItemEvents);
                //-------------------- load Streams
                for (var iEventItem = 0; iEventItem < jsonObject.Events.length; iEventItem++) {
                    this.loadOneEvent(aPlaylistType, jsonObject.Events[iEventItem], aPlaylistFile, iEventItem, crtItemEvents, error, context, callback);
                }
                //var jsonEvent = crtItemEvents.toJSONString();
                //console.log(jsonEvent);
                //var  a=1;
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadOneEvent = function (aPlaylistType, jsonObject, aPlaylistFile, iEventItem, aParent, error, context, callback) {
                var crtItemEvent = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_Event(error);
                crtItemEvent.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                //------------------
                crtItemEvent.setPlaylistItemType(amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_Event);
                //------------------
                crtItemEvent._main_type = jsonObject.__type;
                crtItemEvent._main_arrAspectRatioIDs = jsonObject.AspectRatioIDs;
                crtItemEvent._main_CreationDate = jsonObject.CreationDate;
                crtItemEvent._main_Description = jsonObject.Description;
                crtItemEvent._main_Duration = jsonObject.Duration;
                crtItemEvent._main_ID = jsonObject.ID;
                crtItemEvent._main_IsLocked = jsonObject.IsLocked;
                crtItemEvent._main_IsSharedFromParentWorkgroup = jsonObject.IsSharedFromParentWorkgroup;
                crtItemEvent._main_IsUnsharedButPartOfASharedContainer = jsonObject.IsUnsharedButPartOfASharedContainer;
                crtItemEvent._main_LastLock = jsonObject.LastLock;
                crtItemEvent._main_LastModificationDate = jsonObject.LastModificationDate;
                crtItemEvent._main_LastModifierId = jsonObject.LastModifierId;
                crtItemEvent._main_Loop = jsonObject.Loop;
                crtItemEvent._main_MediaParentId = jsonObject.MediaParentId;
                crtItemEvent._main_MediaType = jsonObject.MediaType;
                crtItemEvent._main_Name = jsonObject.Name;
                crtItemEvent._main_OwnerId = jsonObject.OwnerId;
                crtItemEvent._main_OwnerName = jsonObject.OwnerName;
                crtItemEvent._main_arrTagIDs = jsonObject.TagIDs;
                crtItemEvent._main_UserIDLock = jsonObject.UserIDLock;
                crtItemEvent._main_UserNameLock = jsonObject.UserNameLock;
                crtItemEvent._main_WorkgroupId = jsonObject.WorkgroupId;
                crtItemEvent._main_CustomID = jsonObject.CustomID;
                crtItemEvent._main_arrDiffusionDays = jsonObject.DiffusionDays;
                crtItemEvent._main_EndTime = jsonObject.EndTime;
                crtItemEvent._main_ExpectedPlayDate = jsonObject.ExpectedPlayDate;
                crtItemEvent._main_ExpectedPlayTime = jsonObject.ExpectedPlayTime;
                crtItemEvent._main_FirstDiffusion = jsonObject.FirstDiffusion;
                crtItemEvent._main_LastDiffusion = jsonObject.LastDiffusion;
                crtItemEvent._main_arrMediaAccessRights = jsonObject.MediaAccessRights;
                crtItemEvent._main_SharingType = jsonObject.SharingType;
                crtItemEvent._main_StartTime = jsonObject.StartTime;
                crtItemEvent._main_arrAllowedTypes = jsonObject.AllowedTypes;
                crtItemEvent._main_arrDeniedTypes = jsonObject.DeniedTypes;
                crtItemEvent._main_EventType = jsonObject.EventType;
                crtItemEvent._main_FirstContentID = jsonObject.FirstContentID;
                crtItemEvent._main_IsRandom = jsonObject.IsRandom;
                crtItemEvent._main_MaxNumberOfElements = jsonObject.MaxNumberOfElements;
                crtItemEvent._main_MediasIds = jsonObject.MediasIds;
                crtItemEvent._main_arrPlaylistOrder = jsonObject.PlaylistOrder;
                crtItemEvent._main_arrProperties = jsonObject.Properties;
                crtItemEvent._main_Repeat = jsonObject.Repeat;
                crtItemEvent._main_RepeatFrequency = jsonObject.RepeatFrequency;
                crtItemEvent._main_RepeatInterval = jsonObject.RepeatInterval;
                crtItemEvent._main_RepeatNbOfTracks = jsonObject.RepeatNbOfTracks;
                crtItemEvent._meta_ID = jsonObject.ID;
                crtItemEvent._meta_Name = jsonObject.Name;
                crtItemEvent._meta_CustomID = jsonObject.CustomID;
                crtItemEvent._meta_MediaType = jsonObject.MediaType;
                crtItemEvent._diff_duration = jsonObject.Duration;
                crtItemEvent._diff_startDate = jsonObject.FirstDiffusion;
                crtItemEvent._diff_endDate = jsonObject.LastDiffusion; //jsonObject.FirstDiffusion; 
                crtItemEvent._diff_startTime = jsonObject.StartTime;
                crtItemEvent._diff_endTime = jsonObject.EndTime;
                crtItemEvent._diff_weekdays = jsonObject.DiffusionDays;
                //-----------
                crtItemEvent.setPlaylistItemIdAndName(jsonObject.ID, jsonObject.Name);
                //------------ create and set the playlist-item logic
                var crtItemEventLogic = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_EventLogic(error);
                crtItemEventLogic.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtItemEvent.setLogic(crtItemEventLogic);
                crtItemEventLogic.setOwnerIdxAsChild(iEventItem);
                crtItemEventLogic.setOwnerIdxAsLevel(aParent.getLogic().getOwnerIdxAsLevel() + 1);
                crtItemEventLogic.setDiffusionInfos(crtItemEvent._diff_duration, crtItemEvent._diff_startDate, crtItemEvent._diff_endDate, crtItemEvent._diff_startTime, crtItemEvent._diff_endTime, crtItemEvent._diff_weekdays);
                crtItemEventLogic.setDurationAsString(crtItemEvent._diff_duration);
                //--------------------
                aParent.addPlaylistItem(crtItemEvent);
                //--------------------
                this.loadMediaItems(aPlaylistType, jsonObject, aPlaylistFile, crtItemEvent, error, context, callback);
                //var jsonEvent = crtItemEvent.toJSONString();
                //console.log(jsonEvent);
                //var  a=1;
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadOnePlaylist = function (aPlaylistType, jsonObject, aPlaylistFile, iPlaylist, aParent, error, context, callback) {
                var crtItemPlaylist = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_Playlist(error);
                crtItemPlaylist.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                //------------------
                crtItemPlaylist.setPlaylistItemType(amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_Playlist);
                //------------------
                crtItemPlaylist._main_arrAspectRatioIDs = jsonObject.AspectRatioIDs;
                crtItemPlaylist._main_CreationDate = jsonObject.CreationDate;
                crtItemPlaylist._main_Description = jsonObject.Description;
                crtItemPlaylist._main_Duration = jsonObject.Duration;
                crtItemPlaylist._main_ID = jsonObject.ID;
                crtItemPlaylist._main_IsLocked = jsonObject.IsLocked;
                crtItemPlaylist._main_IsSharedFromParentWorkgroup = jsonObject.IsSharedFromParentWorkgroup;
                crtItemPlaylist._main_IsUnsharedButPartOfASharedContainer = jsonObject.IsUnsharedButPartOfASharedContainer;
                crtItemPlaylist._main_LastLock = jsonObject.LastLock;
                crtItemPlaylist._main_LastModificationDate = jsonObject.LastModificationDate;
                crtItemPlaylist._main_LastModifierId = jsonObject.LastModifierId;
                crtItemPlaylist._main_Loop = jsonObject.Loop;
                crtItemPlaylist._main_MediaParentId = jsonObject.MediaParentId;
                crtItemPlaylist._main_MediaType = jsonObject.MediaType;
                crtItemPlaylist._main_Name = jsonObject.Name;
                crtItemPlaylist._main_OwnerId = jsonObject.OwnerId;
                crtItemPlaylist._main_OwnerName = jsonObject.OwnerName;
                crtItemPlaylist._main_arrTagIDs = jsonObject.TagIDs;
                crtItemPlaylist._main_UserIDLock = jsonObject.UserIDLock;
                crtItemPlaylist._main_UserNameLock = jsonObject.UserNameLock;
                crtItemPlaylist._main_WorkgroupId = jsonObject.WorkgroupId;
                crtItemPlaylist._main_CustomID = jsonObject.CustomID;
                crtItemPlaylist._main_arrDiffusionDays = jsonObject.DiffusionDays;
                crtItemPlaylist._main_EndTime = jsonObject.EndTime;
                crtItemPlaylist._main_ExpectedPlayDate = jsonObject.ExpectedPlayDate;
                crtItemPlaylist._main_ExpectedPlayTime = jsonObject.ExpectedPlayTime;
                crtItemPlaylist._main_FirstDiffusion = jsonObject.FirstDiffusion;
                crtItemPlaylist._main_LastDiffusion = jsonObject.LastDiffusion;
                crtItemPlaylist._main_arrMediaAccessRights = jsonObject.MediaAccessRights;
                crtItemPlaylist._main_SharingType = jsonObject.SharingType;
                crtItemPlaylist._main_StartTime = jsonObject.StartTime;
                crtItemPlaylist._main_arrAllowedTypes = jsonObject.AllowedTypes;
                crtItemPlaylist._main_arrDeniedTypes = jsonObject.DeniedTypes;
                crtItemPlaylist._main_EventType = jsonObject.EventType;
                crtItemPlaylist._main_FirstContentID = jsonObject.FirstContentID;
                crtItemPlaylist._main_IsRandom = jsonObject.IsRandom;
                crtItemPlaylist._main_MaxNumberOfElements = jsonObject.MaxNumberOfElements;
                crtItemPlaylist._main_MediasIds = jsonObject.MediasIds;
                crtItemPlaylist._main_arrPlaylistOrder = jsonObject.PlaylistOrder;
                crtItemPlaylist._main_arrProperties = jsonObject.Properties;
                crtItemPlaylist._main_Repeat = jsonObject.Repeat;
                crtItemPlaylist._main_RepeatFrequency = jsonObject.RepeatFrequency;
                crtItemPlaylist._main_RepeatInterval = jsonObject.RepeatInterval;
                crtItemPlaylist._main_RepeatNbOfTracks = jsonObject.RepeatNbOfTracks;
                crtItemPlaylist._meta_ID = jsonObject.ID;
                crtItemPlaylist._meta_Name = jsonObject.Name;
                crtItemPlaylist._meta_CustomID = jsonObject.CustomID;
                crtItemPlaylist._meta_MediaType = jsonObject.MediaType;
                crtItemPlaylist._diff_duration = jsonObject.Duration;
                crtItemPlaylist._diff_startDate = jsonObject.FirstDiffusion;
                crtItemPlaylist._diff_endDate = jsonObject.LastDiffusion; //jsonObject.FirstDiffusion; 
                crtItemPlaylist._diff_startTime = jsonObject.StartTime;
                crtItemPlaylist._diff_endTime = jsonObject.EndTime;
                crtItemPlaylist._diff_weekdays = jsonObject.DiffusionDays;
                //-----------
                crtItemPlaylist.setPlaylistItemIdAndName(jsonObject.ID, jsonObject.Name);
                //------------ create and set the playlist-item logic
                var crtItemPlaylistLogic = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_PlaylistLogic(error);
                crtItemPlaylistLogic.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtItemPlaylist.setLogic(crtItemPlaylistLogic);
                crtItemPlaylistLogic.setOwnerIdxAsChild(iPlaylist);
                crtItemPlaylistLogic.setOwnerIdxAsLevel(aParent.getLogic().getOwnerIdxAsLevel() + 1);
                crtItemPlaylistLogic.setDiffusionInfos(crtItemPlaylist._diff_duration, crtItemPlaylist._diff_startDate, crtItemPlaylist._diff_endDate, crtItemPlaylist._diff_startTime, crtItemPlaylist._diff_endTime, crtItemPlaylist._diff_weekdays);
                crtItemPlaylistLogic.setDurationAsString(crtItemPlaylist._diff_duration);
                //--------------------
                aParent.addPlaylistItem(crtItemPlaylist);
                //--------------------
                this.loadMediaItems(aPlaylistType, jsonObject, aPlaylistFile, crtItemPlaylist, error, context, callback);
                //--------------------
                var isRandom = jsonObject.IsRandom;
                if (isRandom) {
                    if (crtItemPlaylistLogic.cmd_getNbChildren() > 0) {
                        var crtRandom = this._owner._aServiceLocator._iEntityCreation.createDefaultRandom(error);
                        crtRandom.initRandom(0, crtItemPlaylistLogic.cmd_getNbChildren() - 1, false, true);
                        crtItemPlaylistLogic.cmd_setRandom(crtRandom);
                        crtItemPlaylistLogic.cmd_setNextChildSelectionType(amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Random_NoLoop_WithDiffusion);
                    }
                    //
                    //1. amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Random_NoLoop_WithDiffusion
                    //2. amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Random_Loop_WithDiffusion
                    // -- to add enumeration
                    //3. amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Random_Loop_DoNotRepeatEnd_WithDiffusion
                    //--- they are not used but should be tested
                    //4. amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Random_NoLoop
                    //5. amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Random_Loop
                    //6. amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_Random_Loop_DoNotRepeatEnd
                }
                //var jsonPlaylist = crtItemPlaylist.toJSONString();
                //console.log(jsonPlaylist);
                //var  a=1;
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadMediaItems = function (aPlaylistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
                //-------------------- load Media Items
                var iRealCrtMediaItem = 0;
                for (var iMediaItem = 0; iMediaItem < jsonObject.Medias_Extended.length; iMediaItem++) {
                    if (jsonObject.Medias_Extended[iMediaItem].MediaType == amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.SEQUENCE_EXTENDED) //Design
                     {
                        this.loadOneFillRect(aPlaylistType, jsonObject, aPlaylistFile, iRealCrtMediaItem, aParent, error, context, callback, 255, 0, 0, false, "10");
                        iRealCrtMediaItem++;
                    }
                    else if (jsonObject.Medias_Extended[iMediaItem].MediaType == amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.TAG_EXTENDED) //Tag
                     {
                        this.loadOneFillRect(aPlaylistType, jsonObject, aPlaylistFile, iRealCrtMediaItem, aParent, error, context, callback, 255, 0, 0, false, "10");
                        iRealCrtMediaItem++;
                    }
                    this.loadOneMediaItem(aPlaylistType, jsonObject.Medias_Extended[iMediaItem], aPlaylistFile, iRealCrtMediaItem, aParent, error, context, callback);
                    iRealCrtMediaItem++;
                }
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadOneMediaItem = function (aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback) {
                //-------------------
                var jsonMediaTypeId = jsonObject.MediaType;
                switch (jsonMediaTypeId) {
                    case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.WEBPAGE:
                        this.loadOneWebPage(aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback);
                        break;
                    case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.EDITABLE_FLASH:
                        this.loadOneEditableFlash(aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback);
                        break;
                    case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.TV_TUNER:
                        this.loadOneTvTuner(aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback);
                        break;
                    case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.TV_PASS_THROUGH:
                        this.loadOneTvPassThrough(aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback);
                        break;
                    case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.MEDIA_STATIC:
                        this.loadOneImage(aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback);
                        break;
                    case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.AUDIO_FILES:
                        this.loadOneAudioFile(aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback);
                        break;
                    case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.MEDIA_STATIC_MOVIE:
                        this.loadOneVideo(aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback);
                        break;
                    case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.HTML_EDITABLE_EXTENDED:
                        this.loadOneHtmlTemplate(aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback);
                        break;
                    case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.SEQUENCE_EXTENDED:
                        this.loadOneDesign(aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback);
                        break;
                    case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.TAG_EXTENDED:
                        this.loadOneTag(aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback);
                        break;
                    case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.FLASH_OBJECT:
                        this.loadOneFlash(aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback);
                        break;
                    case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.PLAYLIST:
                        this.loadOnePlaylist(aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback);
                        break;
                    case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.VIDEO_OR_AUDIO_STREAM:
                        this.loadOneVideoOrAudioStream(aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback);
                        break;
                    default:
                        //console.log("Cannot treat media id:" + jsonObject.MediaType.toString());
                        break;
                }
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadOneImage = function (aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback) {
                //----- case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.MEDIA_STATIC:
                var crtPlaylistItemImage = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_Image(error);
                crtPlaylistItemImage.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemImage.setPlaylistItemType(amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_Image);
                crtPlaylistItemImage._main_type = jsonObject.__type;
                crtPlaylistItemImage._main_arrAspectRatioIDs = jsonObject.AspectRatioIDs;
                crtPlaylistItemImage._main_CreationDate = jsonObject.CreationDate;
                crtPlaylistItemImage._main_Description = jsonObject.Description;
                crtPlaylistItemImage._main_Duration = jsonObject.Duration;
                crtPlaylistItemImage._main_ID = jsonObject.ID;
                crtPlaylistItemImage._main_IsLocked = jsonObject.IsLocked;
                crtPlaylistItemImage._main_IsSharedFromParentWorkgroup = jsonObject.IsSharedFromParentWorkgroup;
                crtPlaylistItemImage._main_IsUnsharedButPartOfASharedContainer = jsonObject.IsUnsharedButPartOfASharedContainer;
                crtPlaylistItemImage._main_LastLock = jsonObject.LastLock;
                crtPlaylistItemImage._main_LastModificationDate = jsonObject.LastModificationDate;
                crtPlaylistItemImage._main_LastModifierId = jsonObject.LastModifierId;
                crtPlaylistItemImage._main_Loop = jsonObject.Loop;
                crtPlaylistItemImage._main_MediaParentId = jsonObject.MediaParentId;
                crtPlaylistItemImage._main_MediaType = jsonObject.MediaType;
                crtPlaylistItemImage._main_Name = jsonObject.Name;
                crtPlaylistItemImage._main_OwnerId = jsonObject.OwnerId;
                crtPlaylistItemImage._main_OwnerName = jsonObject.OwnerName;
                crtPlaylistItemImage._main_arrTagIDs = jsonObject.TagIDs;
                crtPlaylistItemImage._main_UserIDLock = jsonObject.UserIDLock;
                crtPlaylistItemImage._main_UserNameLock = jsonObject.UserNameLock;
                crtPlaylistItemImage._main_WorkgroupId = jsonObject.WorkgroupId;
                crtPlaylistItemImage._main_CustomID = jsonObject.CustomID;
                crtPlaylistItemImage._main_arrDiffusionDays = jsonObject.DiffusionDays;
                crtPlaylistItemImage._main_EndTime = jsonObject.EndTime;
                crtPlaylistItemImage._main_ExpectedPlayDate = jsonObject.ExpectedPlayDate;
                crtPlaylistItemImage._main_ExpectedPlayTime = jsonObject.ExpectedPlayTime;
                crtPlaylistItemImage._main_FirstDiffusion = jsonObject.FirstDiffusion;
                crtPlaylistItemImage._main_LastDiffusion = jsonObject.LastDiffusion;
                crtPlaylistItemImage._main_arrMediaAccessRights = jsonObject.MediaAccessRights;
                crtPlaylistItemImage._main_SharingType = jsonObject.SharingType;
                crtPlaylistItemImage._main_StartTime = jsonObject.StartTime;
                crtPlaylistItemImage._main_ContentFileID = jsonObject.ContentFileID;
                crtPlaylistItemImage._main_ContentFileName = jsonObject.ContentFileName;
                crtPlaylistItemImage._main_ContentFilePlayerShaCode = jsonObject.ContentFilePlayerShaCode;
                crtPlaylistItemImage._main_ContentFileStateID = jsonObject.ContentFileStateID;
                crtPlaylistItemImage._main_ContentPlayerFileName = jsonObject.ContentPlayerFileName;
                crtPlaylistItemImage._main_Flag = jsonObject.Flag;
                crtPlaylistItemImage._main_RemoteMediaProperties = jsonObject.RemoteMediaProperties;
                crtPlaylistItemImage._main_State = jsonObject.State;
                crtPlaylistItemImage._meta_ID = jsonObject.ID;
                crtPlaylistItemImage._meta_Name = jsonObject.Name;
                crtPlaylistItemImage._meta_CustomID = jsonObject.CustomID;
                crtPlaylistItemImage._meta_MediaType = jsonObject.MediaType;
                crtPlaylistItemImage._meta_ContentFileName = jsonObject.ContentFileName;
                crtPlaylistItemImage._meta_ContentPlayerFileName = jsonObject.ContentPlayerFileName;
                crtPlaylistItemImage._prop_type = jsonObject.Properties.__type;
                crtPlaylistItemImage._prop_Height = jsonObject.Properties.Height;
                crtPlaylistItemImage._prop_Position = jsonObject.Properties.Position;
                crtPlaylistItemImage._prop_Width = jsonObject.Properties.Width;
                crtPlaylistItemImage._diff_duration = jsonObject.Duration;
                crtPlaylistItemImage._diff_startDate = jsonObject.FirstDiffusion;
                crtPlaylistItemImage._diff_endDate = jsonObject.LastDiffusion; //jsonObject.FirstDiffusion; 
                crtPlaylistItemImage._diff_startTime = jsonObject.StartTime;
                crtPlaylistItemImage._diff_endTime = jsonObject.EndTime;
                crtPlaylistItemImage._diff_weekdays = jsonObject.DiffusionDays;
                //-----------
                crtPlaylistItemImage.setPlaylistItemIdAndName(jsonObject.ID, jsonObject.Name);
                //------------ create and set the playlist-item logic
                var crtPlaylistItemImageLogic = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_ImageLogic(error);
                crtPlaylistItemImageLogic.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemImage.setLogic(crtPlaylistItemImageLogic);
                crtPlaylistItemImageLogic.setOwnerIdxAsChild(iMediaItem);
                crtPlaylistItemImageLogic.setOwnerIdxAsLevel(aParent.getLogic().getOwnerIdxAsLevel() + 1);
                crtPlaylistItemImageLogic.setDiffusionInfos(crtPlaylistItemImage._diff_duration, crtPlaylistItemImage._diff_startDate, crtPlaylistItemImage._diff_endDate, crtPlaylistItemImage._diff_startTime, crtPlaylistItemImage._diff_endTime, crtPlaylistItemImage._diff_weekdays);
                crtPlaylistItemImageLogic.setDurationAsString(crtPlaylistItemImage._diff_duration);
                //-------------------
                aParent.addPlaylistItem(crtPlaylistItemImage);
                //-------------------- setup rendering information
                var prepareParams = this._owner._aServiceLocator._iEntityCreation.createDefaultControlPrepareParams(error);
                prepareParams.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemImage.setPrepareParams(prepareParams);
                var ancestorWithRenderingZone = crtPlaylistItemImage.getLogic().getFirstParentWithARenderingZone();
                crtPlaylistItemImage.getLogic().setTargetRenderingZoneId(ancestorWithRenderingZone.getPlaylistItemId());
                prepareParams.getRenderParams().getParamIdentification().setMediaType(amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image);
                var playlistGlobalConfig = this._owner._iPlaylistControllerConfig.getPlaybackGlobalConfig();
                prepareParams.getRenderParams().getParamFileInfo().setUrlStorage(playlistGlobalConfig._aMediaFilesFolder.getUrlStorage()); //"http://127.0.0.1:9080/c/");//aUrlStorage);
                prepareParams.getRenderParams().getParamFileInfo().setUrlPath(playlistGlobalConfig._aMediaFilesFolder.getUrlPath()); //"/media_files/");
                prepareParams.getRenderParams().getParamFileInfo().setUrlName(jsonObject.ContentPlayerFileName); //"flori01.jpg"); //("WuXi03.png");
                //---
                prepareParams.getRenderParams().getParamContainerPosSize().setAllPosAndSizes(ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerLeft(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerTop(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerRight(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerBottom(), -1, -1, -1, -1);
                prepareParams.getRenderParams().getParamContainerAdjustedPosSize().setAllPosAndSizes(ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerLeft(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerTop(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerRight(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerBottom(), -1, -1, -1, -1);
                prepareParams.getRenderParams().getParamContainerPosSize().setContainerZOrder(ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerZOrder()); //9002
                //---
                //jsonObject.Properties.Position;
                crtPlaylistItemImage.getPrepareParams().getRenderParams().getParamImage().setDisplayTypeAsNumber(jsonObject.Properties.Position);
                //crtPlaylistItemImage.getPrepareParams().getRenderParams().getParamImage().setDisplayType(
                //                                      amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Stretch);
                //--------------------
                //var jsonImage = crtPlaylistItemImage.toJSONString();
                //var  a=1;
                //--------------------
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadOneVideo = function (aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback) {
                //--------------- case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.MEDIA_STATIC_MOVIE:
                var crtPlaylistItemVideo = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_Video(error);
                crtPlaylistItemVideo.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemVideo.setPlaylistItemType(amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_Video);
                //------------------ metadata
                crtPlaylistItemVideo._main_type = jsonObject.__type;
                crtPlaylistItemVideo._main_arrAspectRatioIDs = jsonObject.AspectRatioIDs;
                crtPlaylistItemVideo._main_CreationDate = jsonObject.CreationDate;
                crtPlaylistItemVideo._main_Description = jsonObject.Description;
                crtPlaylistItemVideo._main_Duration = jsonObject.Duration;
                crtPlaylistItemVideo._main_ID = jsonObject.ID;
                crtPlaylistItemVideo._main_IsLocked = jsonObject.IsLocked;
                crtPlaylistItemVideo._main_IsSharedFromParentWorkgroup = jsonObject.IsSharedFromParentWorkgroup;
                crtPlaylistItemVideo._main_IsUnsharedButPartOfASharedContainer = jsonObject.IsUnsharedButPartOfASharedContainer;
                crtPlaylistItemVideo._main_LastLock = jsonObject.LastLock;
                crtPlaylistItemVideo._main_LastModificationDate = jsonObject.LastModificationDate;
                crtPlaylistItemVideo._main_LastModifierId = jsonObject.LastModifierId;
                crtPlaylistItemVideo._main_Loop = jsonObject.Loop;
                crtPlaylistItemVideo._main_MediaParentId = jsonObject.MediaParentId;
                crtPlaylistItemVideo._main_MediaType = jsonObject.MediaType;
                crtPlaylistItemVideo._main_Name = jsonObject.Name;
                crtPlaylistItemVideo._main_OwnerId = jsonObject.OwnerId;
                crtPlaylistItemVideo._main_OwnerName = jsonObject.OwnerName;
                crtPlaylistItemVideo._main_arrTagIDs = jsonObject.TagIDs;
                crtPlaylistItemVideo._main_UserIDLock = jsonObject.UserIDLock;
                crtPlaylistItemVideo._main_UserNameLock = jsonObject.UserNameLock;
                crtPlaylistItemVideo._main_WorkgroupId = jsonObject.WorkgroupId;
                crtPlaylistItemVideo._main_CustomID = jsonObject.CustomID;
                crtPlaylistItemVideo._main_arrDiffusionDays = jsonObject.DiffusionDays;
                crtPlaylistItemVideo._main_EndTime = jsonObject.EndTime;
                crtPlaylistItemVideo._main_ExpectedPlayDate = jsonObject.ExpectedPlayDate;
                crtPlaylistItemVideo._main_ExpectedPlayTime = jsonObject.ExpectedPlayTime;
                crtPlaylistItemVideo._main_FirstDiffusion = jsonObject.FirstDiffusion;
                crtPlaylistItemVideo._main_LastDiffusion = jsonObject.LastDiffusion;
                crtPlaylistItemVideo._main_arrMediaAccessRights = jsonObject.MediaAccessRights;
                crtPlaylistItemVideo._main_SharingType = jsonObject.SharingType;
                crtPlaylistItemVideo._main_StartTime = jsonObject.StartTime;
                crtPlaylistItemVideo._main_ContentFileID = jsonObject.ContentFileID;
                crtPlaylistItemVideo._main_ContentFileName = jsonObject.ContentFileName;
                crtPlaylistItemVideo._main_ContentFilePlayerShaCode = jsonObject.ContentFilePlayerShaCode;
                crtPlaylistItemVideo._main_ContentFileStateID = jsonObject.ContentFileStateID;
                crtPlaylistItemVideo._main_ContentPlayerFileName = jsonObject.ContentPlayerFileName;
                crtPlaylistItemVideo._main_Flag = jsonObject.Flag;
                crtPlaylistItemVideo._main_RemoteMediaProperties = jsonObject.RemoteMediaProperties;
                crtPlaylistItemVideo._main_State = jsonObject.State;
                crtPlaylistItemVideo._meta_ID = jsonObject.ID;
                crtPlaylistItemVideo._meta_Name = jsonObject.Name;
                crtPlaylistItemVideo._meta_CustomID = jsonObject.CustomID;
                crtPlaylistItemVideo._meta_MediaType = jsonObject.MediaType;
                crtPlaylistItemVideo._meta_ContentFileName = jsonObject.ContentPlayerFileName;
                crtPlaylistItemVideo._meta_ContentPlayerFileName = jsonObject.ContentPlayerFileName;
                crtPlaylistItemVideo._prop_type = jsonObject.Properties.__type;
                crtPlaylistItemVideo._prop_Height = jsonObject.Properties.Height;
                crtPlaylistItemVideo._prop_Keep_Aspect_Ratio = jsonObject.Properties.Keep_Aspect_Ratio;
                crtPlaylistItemVideo._prop_Sound_Volume = jsonObject.Properties.Sound_Volume;
                crtPlaylistItemVideo._prop_True_Duration = jsonObject.Properties.True_Duration;
                crtPlaylistItemVideo._prop_Width = jsonObject.Properties.Width;
                crtPlaylistItemVideo._diff_duration = jsonObject.Duration;
                crtPlaylistItemVideo._diff_startDate = jsonObject.FirstDiffusion;
                crtPlaylistItemVideo._diff_endDate = jsonObject.LastDiffusion; //jsonObject.FirstDiffusion; 
                crtPlaylistItemVideo._diff_startTime = jsonObject.StartTime;
                crtPlaylistItemVideo._diff_endTime = jsonObject.EndTime;
                crtPlaylistItemVideo._diff_weekdays = jsonObject.DiffusionDays;
                //-----------
                crtPlaylistItemVideo.setPlaylistItemIdAndName(jsonObject.ID, jsonObject.Name);
                var playlistGlobalConfig = this._owner._iPlaylistControllerConfig.getPlaybackGlobalConfig();
                //------------ create and set the playlist-item logic
                var crtPlaylistItemVideoLogic = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_VideoLogic(error);
                crtPlaylistItemVideoLogic.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemVideo.setLogic(crtPlaylistItemVideoLogic);
                crtPlaylistItemVideoLogic.setOwnerIdxAsChild(iMediaItem);
                crtPlaylistItemVideoLogic.setOwnerIdxAsLevel(aParent.getLogic().getOwnerIdxAsLevel() + 1);
                crtPlaylistItemVideoLogic.setDiffusionInfos(crtPlaylistItemVideo._diff_duration, crtPlaylistItemVideo._diff_startDate, crtPlaylistItemVideo._diff_endDate, crtPlaylistItemVideo._diff_startTime, crtPlaylistItemVideo._diff_endTime, crtPlaylistItemVideo._diff_weekdays);
                crtPlaylistItemVideoLogic.setDurationAsString(crtPlaylistItemVideo._diff_duration);
                crtPlaylistItemVideoLogic.setNaturalDurationAsString(crtPlaylistItemVideo._prop_True_Duration, playlistGlobalConfig.getEpsilonTimeBefireNaturalEnd());
                //---------------------
                //-------------------
                aParent.addPlaylistItem(crtPlaylistItemVideo);
                //-------------------- setup rendering information
                var prepareParams = this._owner._aServiceLocator._iEntityCreation.createDefaultControlPrepareParams(error);
                prepareParams.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemVideo.setPrepareParams(prepareParams);
                var ancestorWithRenderingZone = crtPlaylistItemVideo.getLogic().getFirstParentWithARenderingZone();
                crtPlaylistItemVideo.getLogic().setTargetRenderingZoneId(ancestorWithRenderingZone.getPlaylistItemId());
                prepareParams.getRenderParams().getParamIdentification().setMediaType(amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video);
                if (jsonObject.ContentPlayerFileName.startsWith("http:") || jsonObject.ContentPlayerFileName.startsWith("https:")) {
                    prepareParams.getRenderParams().getParamFileInfo().setUrlStorage(jsonObject.ContentPlayerFileName);
                    prepareParams.getRenderParams().getParamFileInfo().setUrlPath("");
                    prepareParams.getRenderParams().getParamFileInfo().setUrlName("");
                }
                else {
                    prepareParams.getRenderParams().getParamFileInfo().setUrlStorage(playlistGlobalConfig._aMediaFilesFolder.getUrlStorage()); //"http://127.0.0.1:9080/c/");//aUrlStorage);
                    prepareParams.getRenderParams().getParamFileInfo().setUrlPath(playlistGlobalConfig._aMediaFilesFolder.getUrlPath()); //"/media_files/");
                    prepareParams.getRenderParams().getParamFileInfo().setUrlName(jsonObject.ContentPlayerFileName); //"flori01.jpg"); //("WuXi03.png");
                }
                //---
                prepareParams.getRenderParams().getParamContainerPosSize().setAllPosAndSizes(ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerLeft(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerTop(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerRight(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerBottom(), -1, -1, -1, -1);
                prepareParams.getRenderParams().getParamContainerAdjustedPosSize().setAllPosAndSizes(ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerLeft(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerTop(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerRight(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerBottom(), -1, -1, -1, -1);
                prepareParams.getRenderParams().getParamContainerPosSize().setContainerZOrder(ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerZOrder()); //9002
                prepareParams.getRenderParams().getParamVideo().setKeepAspectRatio(crtPlaylistItemVideo._prop_Keep_Aspect_Ratio);
                prepareParams.getRenderParams().getParamVideo().setVideoAudioVolume(crtPlaylistItemVideo._prop_Sound_Volume);
                prepareParams.getRenderParams().getParamVideo().setVideoNaturalWidth(crtPlaylistItemVideo._prop_Width);
                prepareParams.getRenderParams().getParamVideo().setVideoNaturalHeight(crtPlaylistItemVideo._prop_Height);
                //---
                //var jsonVideo = crtPlaylistItemVideo.toJSONString();
                //var  a=1;  
                //--------------------  
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadOneWebPage = function (aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback) {
                //----------- case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.WEBPAGE:
                var crtHtmlPage = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_WebPage(error);
                crtHtmlPage.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtHtmlPage.setPlaylistItemType(amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_WebPage);
                //------------------ metadata
                crtHtmlPage._main_type = jsonObject.__type;
                crtHtmlPage._main_arrAspectRatioIDs = jsonObject.AspectRatioIDs;
                crtHtmlPage._main_CreationDate = jsonObject.CreationDate;
                crtHtmlPage._main_Description = jsonObject.Description;
                crtHtmlPage._main_Duration = jsonObject.Duration;
                crtHtmlPage._main_ID = jsonObject.ID;
                crtHtmlPage._main_IsLocked = jsonObject.IsLocked;
                crtHtmlPage._main_IsSharedFromParentWorkgroup = jsonObject.IsSharedFromParentWorkgroup;
                crtHtmlPage._main_IsUnsharedButPartOfASharedContainer = jsonObject.IsUnsharedButPartOfASharedContainer;
                crtHtmlPage._main_LastLock = jsonObject.LastLock;
                crtHtmlPage._main_LastModificationDate = jsonObject.LastModificationDate;
                crtHtmlPage._main_LastModifierId = jsonObject.LastModifierId;
                crtHtmlPage._main_Loop = jsonObject.Loop;
                crtHtmlPage._main_MediaParentId = jsonObject.MediaParentId;
                crtHtmlPage._main_MediaType = jsonObject.MediaType;
                crtHtmlPage._main_Name = jsonObject.Name;
                crtHtmlPage._main_OwnerId = jsonObject.OwnerId;
                crtHtmlPage._main_OwnerName = jsonObject.OwnerName;
                crtHtmlPage._main_arrTagIDs = jsonObject.TagIDs;
                crtHtmlPage._main_UserIDLock = jsonObject.UserIDLock;
                crtHtmlPage._main_UserNameLock = jsonObject.UserNameLock;
                crtHtmlPage._main_WorkgroupId = jsonObject.WorkgroupId;
                crtHtmlPage._main_CustomID = jsonObject.CustomID;
                crtHtmlPage._main_arrDiffusionDays = jsonObject.DiffusionDays;
                crtHtmlPage._main_EndTime = jsonObject.EndTime;
                crtHtmlPage._main_ExpectedPlayDate = jsonObject.ExpectedPlayDate;
                crtHtmlPage._main_ExpectedPlayTime = jsonObject.ExpectedPlayTime;
                crtHtmlPage._main_FirstDiffusion = jsonObject.FirstDiffusion;
                crtHtmlPage._main_LastDiffusion = jsonObject.LastDiffusion;
                crtHtmlPage._main_arrMediaAccessRights = jsonObject.MediaAccessRights;
                crtHtmlPage._main_SharingType = jsonObject.SharingType;
                crtHtmlPage._main_StartTime = jsonObject.StartTime;
                crtHtmlPage._main_ContentFileID = jsonObject.ContentFileID;
                crtHtmlPage._main_ContentFileName = jsonObject.ContentFileName;
                crtHtmlPage._main_ContentFilePlayerShaCode = jsonObject.ContentFilePlayerShaCode;
                crtHtmlPage._main_ContentFileStateID = jsonObject.ContentFileStateID;
                crtHtmlPage._main_ContentPlayerFileName = jsonObject.ContentPlayerFileName;
                crtHtmlPage._main_Flag = jsonObject.Flag;
                crtHtmlPage._main_RemoteMediaProperties = jsonObject.RemoteMediaProperties;
                crtHtmlPage._main_State = jsonObject.State;
                crtHtmlPage._meta_ID = jsonObject.ID;
                crtHtmlPage._meta_Name = jsonObject.Name;
                crtHtmlPage._meta_CustomID = jsonObject.CustomID;
                crtHtmlPage._meta_MediaType = jsonObject.MediaType;
                crtHtmlPage._meta_ContentFileName = jsonObject.ContentPlayerFileName;
                crtHtmlPage._meta_ContentPlayerFileName = jsonObject.ContentPlayerFileName;
                crtHtmlPage._prop_type = jsonObject.Properties.__type;
                crtHtmlPage._prop_AllowSubdomains = jsonObject.Properties.AllowSubdomains;
                crtHtmlPage._prop_AllowedDomains = jsonObject.Properties.AllowedDomains;
                crtHtmlPage._prop_AlwaysReload = jsonObject.Properties.AlwaysReload;
                crtHtmlPage._prop_BackgroundColor = jsonObject.Properties.BackgroundColor;
                crtHtmlPage._prop_BackgroundTransparent = jsonObject.Properties.BackgroundTransparent;
                crtHtmlPage._prop_EnableInteraction = jsonObject.Properties.EnableInteraction;
                crtHtmlPage._prop_GeneralOpacity = jsonObject.Properties.GeneralOpacity;
                crtHtmlPage._prop_InteractivityTimeout = jsonObject.Properties.InteractivityTimeout;
                crtHtmlPage._prop_NavigationBar = jsonObject.Properties.NavigationBar;
                crtHtmlPage._prop_Url = jsonObject.Properties.Url;
                crtHtmlPage._prop_ViewMode = jsonObject.Properties.ViewMode;
                crtHtmlPage._diff_duration = jsonObject.Duration;
                crtHtmlPage._diff_startDate = jsonObject.FirstDiffusion;
                crtHtmlPage._diff_endDate = jsonObject.LastDiffusion; //jsonObject.FirstDiffusion; 
                crtHtmlPage._diff_startTime = jsonObject.StartTime;
                crtHtmlPage._diff_endTime = jsonObject.EndTime;
                crtHtmlPage._diff_weekdays = jsonObject.DiffusionDays;
                //-----------
                crtHtmlPage.setPlaylistItemIdAndName(jsonObject.ID, jsonObject.Name);
                //------------ create and set the playlist-item logic
                var crtHtmlPageLogic = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_WebPageLogic(error);
                crtHtmlPageLogic.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtHtmlPage.setLogic(crtHtmlPageLogic);
                crtHtmlPageLogic.setOwnerIdxAsChild(iMediaItem);
                crtHtmlPageLogic.setOwnerIdxAsLevel(aParent.getLogic().getOwnerIdxAsLevel() + 1);
                crtHtmlPageLogic.setDiffusionInfos(crtHtmlPage._diff_duration, crtHtmlPage._diff_startDate, crtHtmlPage._diff_endDate, crtHtmlPage._diff_startTime, crtHtmlPage._diff_endTime, crtHtmlPage._diff_weekdays);
                crtHtmlPageLogic.setDurationAsString(crtHtmlPage._diff_duration);
                //-------------------
                aParent.addPlaylistItem(crtHtmlPage);
                //--------------------
                //-------------------- setup rendering information
                var prepareParams = this._owner._aServiceLocator._iEntityCreation.createDefaultControlPrepareParams(error);
                prepareParams.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtHtmlPage.setPrepareParams(prepareParams);
                var ancestorWithRenderingZone = crtHtmlPage.getLogic().getFirstParentWithARenderingZone();
                crtHtmlPage.getLogic().setTargetRenderingZoneId(ancestorWithRenderingZone.getPlaylistItemId());
                prepareParams.getRenderParams().getParamIdentification().setMediaType(amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Html);
                prepareParams.getRenderParams().getParamFileInfo().setUrlStorage(jsonObject.Properties.Url); //aUrlStorage);
                prepareParams.getRenderParams().getParamFileInfo().setUrlPath("");
                prepareParams.getRenderParams().getParamFileInfo().setUrlName(""); //"flori01.jpg"); //("WuXi03.png");
                //---
                prepareParams.getRenderParams().getParamContainerPosSize().setAllPosAndSizes(ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerLeft(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerTop(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerRight(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerBottom(), -1, -1, -1, -1);
                prepareParams.getRenderParams().getParamContainerAdjustedPosSize().setAllPosAndSizes(ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerLeft(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerTop(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerRight(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerBottom(), -1, -1, -1, -1);
                prepareParams.getRenderParams().getParamContainerPosSize().setContainerZOrder(ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerZOrder()); //9002
                var scrollLeft = jsonObject.Properties.scrollLeft;
                var scrollTop = jsonObject.Properties.scrollTop;
                if (typeof (scrollLeft) != "undefined")
                    prepareParams.getRenderParams().getParamWebPage().setScrollLeft(scrollLeft);
                if (typeof (scrollTop) != "undefined")
                    prepareParams.getRenderParams().getParamWebPage().setScrollTop(scrollTop);
                //var jsonHtmlPage = crtHtmlPage.toJSONString();
                //var  a=1;  
                //--------------------    
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadOneHtmlTemplate = function (aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback) {
                return;
                //---------- case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.HTML_EDITABLE_EXTENDED:
                var crtHtmlTemplate = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_HtmlTemplate(error);
                crtHtmlTemplate.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtHtmlTemplate.setPlaylistItemType(amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_HtmlTemplate);
                //------------------ metadata
                crtHtmlTemplate._main_type = jsonObject.__type;
                crtHtmlTemplate._main_arrAspectRatioIDs = jsonObject.AspectRatioIDs;
                crtHtmlTemplate._main_CreationDate = jsonObject.CreationDate;
                crtHtmlTemplate._main_Description = jsonObject.Description;
                crtHtmlTemplate._main_Duration = jsonObject.Duration;
                crtHtmlTemplate._main_ID = jsonObject.ID;
                crtHtmlTemplate._main_IsLocked = jsonObject.IsLocked;
                crtHtmlTemplate._main_IsSharedFromParentWorkgroup = jsonObject.IsSharedFromParentWorkgroup;
                crtHtmlTemplate._main_IsUnsharedButPartOfASharedContainer = jsonObject.IsUnsharedButPartOfASharedContainer;
                crtHtmlTemplate._main_LastLock = jsonObject.LastLock;
                crtHtmlTemplate._main_LastModificationDate = jsonObject.LastModificationDate;
                crtHtmlTemplate._main_LastModifierId = jsonObject.LastModifierId;
                crtHtmlTemplate._main_Loop = jsonObject.Loop;
                crtHtmlTemplate._main_MediaParentId = jsonObject.MediaParentId;
                crtHtmlTemplate._main_MediaType = jsonObject.MediaType;
                crtHtmlTemplate._main_Name = jsonObject.Name;
                crtHtmlTemplate._main_OwnerId = jsonObject.OwnerId;
                crtHtmlTemplate._main_OwnerName = jsonObject.OwnerName;
                crtHtmlTemplate._main_arrTagIDs = jsonObject.TagIDs;
                crtHtmlTemplate._main_UserIDLock = jsonObject.UserIDLock;
                crtHtmlTemplate._main_UserNameLock = jsonObject.UserNameLock;
                crtHtmlTemplate._main_WorkgroupId = jsonObject.WorkgroupId;
                crtHtmlTemplate._main_CustomID = jsonObject.CustomID;
                crtHtmlTemplate._main_arrDiffusionDays = jsonObject.DiffusionDays;
                crtHtmlTemplate._main_EndTime = jsonObject.EndTime;
                crtHtmlTemplate._main_ExpectedPlayDate = jsonObject.ExpectedPlayDate;
                crtHtmlTemplate._main_ExpectedPlayTime = jsonObject.ExpectedPlayTime;
                crtHtmlTemplate._main_FirstDiffusion = jsonObject.FirstDiffusion;
                crtHtmlTemplate._main_LastDiffusion = jsonObject.LastDiffusion;
                crtHtmlTemplate._main_arrMediaAccessRights = jsonObject.MediaAccessRights;
                crtHtmlTemplate._main_SharingType = jsonObject.SharingType;
                crtHtmlTemplate._main_StartTime = jsonObject.StartTime;
                crtHtmlTemplate._main_ContentFileID = jsonObject.ContentFileID;
                crtHtmlTemplate._main_ContentFileName = jsonObject.ContentFileName;
                crtHtmlTemplate._main_ContentFilePlayerShaCode = jsonObject.ContentFilePlayerShaCode;
                crtHtmlTemplate._main_ContentFileStateID = jsonObject.ContentFileStateID;
                crtHtmlTemplate._main_ContentPlayerFileName = jsonObject.ContentPlayerFileName;
                crtHtmlTemplate._main_Flag = jsonObject.Flag;
                crtHtmlTemplate._main_Properties = jsonObject.Properties;
                crtHtmlTemplate._main_RemoteMediaProperties = jsonObject.RemoteMediaProperties;
                crtHtmlTemplate._main_State = jsonObject.State;
                crtHtmlTemplate._main_arrHtmlParameters_Extended = jsonObject.HtmlParameters_Extended;
                crtHtmlTemplate._main_arrHtml_Template_Resources = jsonObject.Html_Template_Resources;
                crtHtmlTemplate._meta_ID = jsonObject.ID;
                crtHtmlTemplate._meta_Name = jsonObject.Name;
                crtHtmlTemplate._meta_CustomID = jsonObject.CustomID;
                crtHtmlTemplate._meta_MediaType = jsonObject.MediaType;
                crtHtmlTemplate._meta_ContentFileName = jsonObject.ContentPlayerFileName;
                crtHtmlTemplate._meta_ContentPlayerFileName = jsonObject.ContentPlayerFileName;
                crtHtmlTemplate._diff_duration = jsonObject.Duration;
                crtHtmlTemplate._diff_startDate = jsonObject.FirstDiffusion;
                crtHtmlTemplate._diff_endDate = jsonObject.LastDiffusion; //jsonObject.FirstDiffusion; 
                crtHtmlTemplate._diff_startTime = jsonObject.StartTime;
                crtHtmlTemplate._diff_endTime = jsonObject.EndTime;
                crtHtmlTemplate._diff_weekdays = jsonObject.DiffusionDays;
                //-----------
                crtHtmlTemplate.setPlaylistItemIdAndName(jsonObject.ID, jsonObject.Name);
                //------------ create and set the playlist-item logic
                var crtHtmlTemplateLogic = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_HtmlTemplateLogic(error);
                crtHtmlTemplateLogic.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtHtmlTemplate.setLogic(crtHtmlTemplateLogic);
                crtHtmlTemplateLogic.setOwnerIdxAsChild(iMediaItem);
                crtHtmlTemplateLogic.setOwnerIdxAsLevel(aParent.getLogic().getOwnerIdxAsLevel() + 1);
                crtHtmlTemplateLogic.setDiffusionInfos(crtHtmlTemplate._diff_duration, crtHtmlTemplate._diff_startDate, crtHtmlTemplate._diff_endDate, crtHtmlTemplate._diff_startTime, crtHtmlTemplate._diff_endTime, crtHtmlTemplate._diff_weekdays);
                crtHtmlTemplateLogic.setDurationAsString(crtHtmlTemplate._diff_duration);
                //-------------------
                aParent.addPlaylistItem(crtHtmlTemplate);
                //--------------------
                //var jsonHtmlPage = crtHtmlTemplate.toJSONString();
                //var  a=1;  
                //--------------------    
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadOneDesign = function (aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback) {
                //--------------- case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.MEDIA_STATIC_MOVIE:
                var crtPlaylistItemDesign = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_Design(error);
                crtPlaylistItemDesign.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemDesign.setPlaylistItemType(amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_Design);
                //--------------------
                crtPlaylistItemDesign._main_type = jsonObject.__type;
                crtPlaylistItemDesign._main_arrAspectRatioIDs = jsonObject.AspectRatioIDs;
                crtPlaylistItemDesign._main_CreationDate = jsonObject.CreationDate;
                crtPlaylistItemDesign._main_Description = jsonObject.Description;
                crtPlaylistItemDesign._main_Duration = jsonObject.Duration;
                crtPlaylistItemDesign._main_ID = jsonObject.ID;
                crtPlaylistItemDesign._main_IsLocked = jsonObject.IsLocked;
                crtPlaylistItemDesign._main_IsSharedFromParentWorkgroup = jsonObject.IsSharedFromParentWorkgroup;
                crtPlaylistItemDesign._main_IsUnsharedButPartOfASharedContainer = jsonObject.IsUnsharedButPartOfASharedContainer;
                crtPlaylistItemDesign._main_LastLock = jsonObject.LastLock;
                crtPlaylistItemDesign._main_LastModificationDate = jsonObject.LastModificationDate;
                crtPlaylistItemDesign._main_LastModifierId = jsonObject.LastModifierId;
                crtPlaylistItemDesign._main_Loop = jsonObject.Loop;
                crtPlaylistItemDesign._main_MediaParentId = jsonObject.MediaParentId;
                crtPlaylistItemDesign._main_MediaType = jsonObject.MediaType;
                crtPlaylistItemDesign._main_Name = jsonObject.Name;
                crtPlaylistItemDesign._main_OwnerId = jsonObject.OwnerId;
                crtPlaylistItemDesign._main_OwnerName = jsonObject.OwnerName;
                crtPlaylistItemDesign._main_arrTagIDs = jsonObject.TagIDs;
                crtPlaylistItemDesign._main_UserIDLock = jsonObject.UserIDLock;
                crtPlaylistItemDesign._main_UserNameLock = jsonObject.UserNameLock;
                crtPlaylistItemDesign._main_WorkgroupId = jsonObject.WorkgroupId;
                crtPlaylistItemDesign._main_CustomID = jsonObject.CustomID;
                crtPlaylistItemDesign._main_arrDiffusionDays = jsonObject.DiffusionDays;
                crtPlaylistItemDesign._main_EndTime = jsonObject.EndTime;
                crtPlaylistItemDesign._main_ExpectedPlayDate = jsonObject.ExpectedPlayDate;
                crtPlaylistItemDesign._main_ExpectedPlayTime = jsonObject.ExpectedPlayTime;
                crtPlaylistItemDesign._main_FirstDiffusion = jsonObject.FirstDiffusion;
                crtPlaylistItemDesign._main_LastDiffusion = jsonObject.LastDiffusion;
                crtPlaylistItemDesign._main_arrMediaAccessRights = jsonObject.MediaAccessRights;
                crtPlaylistItemDesign._main_SharingType = jsonObject.SharingType;
                crtPlaylistItemDesign._main_StartTime = jsonObject.StartTime;
                crtPlaylistItemDesign._main_H = jsonObject.H;
                crtPlaylistItemDesign._main_ID_ASPECT_RATIO = jsonObject.ID_ASPECT_RATIO;
                crtPlaylistItemDesign._main_W = jsonObject.W;
                crtPlaylistItemDesign._main_X = jsonObject.X;
                crtPlaylistItemDesign._main_Y = jsonObject.Y;
                crtPlaylistItemDesign._main_arrZones = jsonObject.Zones;
                crtPlaylistItemDesign._meta_ID = jsonObject.ID;
                crtPlaylistItemDesign._meta_Name = jsonObject.Name;
                crtPlaylistItemDesign._meta_CustomID = jsonObject.CustomID;
                crtPlaylistItemDesign._meta_MediaType = jsonObject.MediaType;
                crtPlaylistItemDesign._diff_duration = jsonObject.Duration;
                crtPlaylistItemDesign._diff_startDate = jsonObject.FirstDiffusion;
                crtPlaylistItemDesign._diff_endDate = jsonObject.LastDiffusion; //jsonObject.FirstDiffusion; 
                crtPlaylistItemDesign._diff_startTime = jsonObject.StartTime;
                crtPlaylistItemDesign._diff_endTime = jsonObject.EndTime;
                crtPlaylistItemDesign._diff_weekdays = jsonObject.DiffusionDays;
                //-----------
                crtPlaylistItemDesign.setPlaylistItemIdAndName(jsonObject.ID, jsonObject.Name);
                //------------ create and set the playlist-item logic
                var crtPlaylistItemDesignLogic = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_DesignLogic(error);
                crtPlaylistItemDesignLogic.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemDesign.setLogic(crtPlaylistItemDesignLogic);
                crtPlaylistItemDesignLogic.setOwnerIdxAsChild(iMediaItem);
                crtPlaylistItemDesignLogic.setOwnerIdxAsLevel(aParent.getLogic().getOwnerIdxAsLevel() + 1);
                crtPlaylistItemDesignLogic.setDiffusionInfos(crtPlaylistItemDesign._diff_duration, crtPlaylistItemDesign._diff_startDate, crtPlaylistItemDesign._diff_endDate, crtPlaylistItemDesign._diff_startTime, crtPlaylistItemDesign._diff_endTime, crtPlaylistItemDesign._diff_weekdays);
                crtPlaylistItemDesignLogic.setDurationAsString(crtPlaylistItemDesign._diff_duration);
                //-------------------
                aParent.addPlaylistItem(crtPlaylistItemDesign);
                //--------------------
                this.loadDesignZones(aPlaylistType, jsonObject, aPlaylistFile, crtPlaylistItemDesign, error, context, callback);
                //--------------------  
                //--------------------
                //var jsonDesign = crtPlaylistItemDesign.toJSONString();
                //console.log(jsonDesign);
                //var  a=1;  
                //--------------------    
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadDesignZones = function (aPlaylistType, jsonObject, aPlaylistFile, aParent, error, context, callback) {
                for (var iDesignZone = 0; iDesignZone < jsonObject.Zones_Extended.length; iDesignZone++) {
                    this.loadOneDesignZone(aPlaylistType, jsonObject.Zones_Extended[iDesignZone], aPlaylistFile, iDesignZone, aParent, error, context, callback);
                }
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadOneDesignZone = function (aPlaylistType, jsonObject, aPlaylistFile, iDesignZone, aParent, error, context, callback) {
                //--------------- case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.MEDIA_STATIC_MOVIE:
                var crtPlaylistItemDesignZone = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_DesignZone(error);
                crtPlaylistItemDesignZone.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemDesignZone.setPlaylistItemType(amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_DesignZone);
                //------------------ metadata
                crtPlaylistItemDesignZone._main_BackColor = jsonObject.BackColor;
                crtPlaylistItemDesignZone._main_BackImage = jsonObject.BackImage;
                crtPlaylistItemDesignZone._main_H = jsonObject.H;
                crtPlaylistItemDesignZone._main_ID = jsonObject.ID;
                crtPlaylistItemDesignZone._main_IsMainZone = jsonObject.IsMainZone;
                crtPlaylistItemDesignZone._main_Name = jsonObject.Name;
                crtPlaylistItemDesignZone._main_Playlist = jsonObject.Playlist;
                crtPlaylistItemDesignZone._main_VirtualPlaylistId = jsonObject.VirtualPlaylistId;
                crtPlaylistItemDesignZone._main_W = jsonObject.W;
                crtPlaylistItemDesignZone._main_X = jsonObject.X;
                crtPlaylistItemDesignZone._main_Y = jsonObject.Y;
                crtPlaylistItemDesignZone._main_Z = jsonObject.Z;
                crtPlaylistItemDesignZone._meta_ID = null;
                crtPlaylistItemDesignZone._meta_Name = null;
                crtPlaylistItemDesignZone._meta_CustomID = null;
                crtPlaylistItemDesignZone._meta_MediaType = null;
                crtPlaylistItemDesignZone._diff_duration = null;
                crtPlaylistItemDesignZone._diff_startDate = null;
                crtPlaylistItemDesignZone._diff_endDate = null;
                crtPlaylistItemDesignZone._diff_startTime = null;
                crtPlaylistItemDesignZone._diff_endTime = null;
                crtPlaylistItemDesignZone._diff_weekdays = null;
                //-----------
                crtPlaylistItemDesignZone.setPlaylistItemIdAndName(jsonObject.ID, "design-zone-" + iDesignZone);
                //-------------------
                aParent.addPlaylistItem(crtPlaylistItemDesignZone);
                //------------
                var isMainZone = jsonObject.IsMainZone;
                var crtPlaylistItemDesignZoneLogic = null;
                if (isMainZone)
                    crtPlaylistItemDesignZoneLogic = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_DesignMainZoneLogic(error);
                else
                    crtPlaylistItemDesignZoneLogic = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_DesignZoneLogic(error);
                crtPlaylistItemDesignZoneLogic.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemDesignZone.setLogic(crtPlaylistItemDesignZoneLogic);
                crtPlaylistItemDesignZoneLogic.setOwnerIdxAsChild(iDesignZone);
                crtPlaylistItemDesignZoneLogic.setOwnerIdxAsLevel(aParent.getLogic().getOwnerIdxAsLevel() + 1);
                crtPlaylistItemDesignZoneLogic.setDiffusionInfos(crtPlaylistItemDesignZone._diff_duration, crtPlaylistItemDesignZone._diff_startDate, crtPlaylistItemDesignZone._diff_endDate, crtPlaylistItemDesignZone._diff_startTime, crtPlaylistItemDesignZone._diff_endTime, crtPlaylistItemDesignZone._diff_weekdays);
                crtPlaylistItemDesignZoneLogic.setDurationAsString(crtPlaylistItemDesignZone._diff_duration);
                crtPlaylistItemDesignZoneLogic.setIsMainZone(isMainZone);
                //--------------------
                var ancestorWithRenderingZone = crtPlaylistItemDesignZone.getLogic().getFirstParentWithARenderingZone();
                var parentLeft = 0;
                var parentTop = 0;
                var parentRight = 0;
                var parentBottom = 0;
                if (ancestorWithRenderingZone != null) {
                    parentLeft = ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerLeft();
                    parentTop = ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerTop();
                    parentRight = ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerRight();
                    parentBottom = ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerBottom();
                }
                //------------ create and load prepare and rendering parameters
                var percX = jsonObject.X;
                var percY = jsonObject.Y;
                var percWidth = jsonObject.W;
                var percHeight = jsonObject.H;
                var zOrder = 9500 + jsonObject.Z;
                //------------ 
                var prepareParams = this._owner._aServiceLocator._iEntityCreation.createDefaultControlPrepareParams(error);
                prepareParams.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                prepareParams.getRenderParams().getParamContainerPosSize().setOrigAllPosAndSizesInPercentages(percX, percY, percX + percWidth, percY + percHeight, 0, 0, percWidth, percHeight);
                prepareParams.getRenderParams().getParamContainerPosSize().setAllPosAndSizesInPercentages(percX * 0.01, percY * 0.01, (percX + percWidth) * 0.01, (percY + percHeight) * 0.01, -1, -1, -1, -1, parentLeft, //this._owner._iPlaylistControllerConfig.getScreenProperties().getScreenLeft(),
                parentTop, //this._owner._iPlaylistControllerConfig.getScreenProperties().getScreenTop(),
                parentRight, //this._owner._iPlaylistControllerConfig.getScreenProperties().getScreenRight(),
                parentBottom);
                prepareParams.getRenderParams().getParamContainerAdjustedPosSize().setOrigAllPosAndSizesInPercentages(percX, percY, percX + percWidth, percY + percHeight, 0, 0, percWidth, percHeight);
                prepareParams.getRenderParams().getParamContainerAdjustedPosSize().setAllPosAndSizesInPercentages(percX * 0.01, percY * 0.01, (percX + percWidth) * 0.01, (percY + percHeight) * 0.01, -1, -1, -1, -1, parentLeft, //this._owner._iPlaylistControllerConfig.getScreenProperties().getScreenLeft(),
                parentTop, //this._owner._iPlaylistControllerConfig.getScreenProperties().getScreenTop(),
                parentRight, //this._owner._iPlaylistControllerConfig.getScreenProperties().getScreenRight(),
                parentBottom);
                prepareParams.getRenderParams().getParamContainerPosSize().setContainerZOrder(zOrder); //default 
                crtPlaylistItemDesignZone.setPrepareParams(prepareParams);
                //--------------------
                this.loadOnePlaylist(aPlaylistType, jsonObject.Playlist_Extended, aPlaylistFile, 0, crtPlaylistItemDesignZone, error, context, callback);
                if (!isMainZone)
                    this.loadOneFillRect(aPlaylistType, jsonObject, aPlaylistFile, 1, crtPlaylistItemDesignZone, error, context, callback, 0, 0, 255, true, null);
                //--------------------
                //var jsonDesignZone = crtPlaylistItemDesignZone.toJSONString();
                //console.log(jsonDesignZone);
                //var  a=1;  
                //--------------------    
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadOneFillRect = function (aPlaylistType, jsonObject, aPlaylistFile, iFillRectIdx, aParent, error, context, callback, R, G, B, isVisible, strDuration) {
                //----- case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.MEDIA_STATIC:
                var crtPlaylistItemFillRect = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_FillRect(error);
                crtPlaylistItemFillRect.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemFillRect.setPlaylistItemType(amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_FillRect);
                //------------------ metadata
                crtPlaylistItemFillRect._main_BackColor = jsonObject.BackColor;
                crtPlaylistItemFillRect._main_BackImage = jsonObject.BackImage;
                crtPlaylistItemFillRect._main_H = jsonObject.H;
                crtPlaylistItemFillRect._main_ID = jsonObject.ID;
                crtPlaylistItemFillRect._main_IsMainZone = jsonObject.IsMainZone;
                crtPlaylistItemFillRect._main_Name = jsonObject.Name;
                crtPlaylistItemFillRect._main_Playlist = jsonObject.Playlist;
                crtPlaylistItemFillRect._main_VirtualPlaylistId = jsonObject.VirtualPlaylistId;
                crtPlaylistItemFillRect._main_W = jsonObject.W;
                crtPlaylistItemFillRect._main_X = jsonObject.X;
                crtPlaylistItemFillRect._main_Y = jsonObject.Y;
                crtPlaylistItemFillRect._main_Z = jsonObject.Z;
                crtPlaylistItemFillRect._meta_ID = jsonObject.ID;
                crtPlaylistItemFillRect._meta_Name = jsonObject.Name;
                crtPlaylistItemFillRect._meta_CustomID = jsonObject.CustomID;
                crtPlaylistItemFillRect._meta_MediaType = jsonObject.MediaType;
                crtPlaylistItemFillRect._diff_duration = strDuration; //jsonObject.Duration;
                crtPlaylistItemFillRect._diff_startDate = null; //jsonObject.FirstDiffusion;
                crtPlaylistItemFillRect._diff_endDate = null; //jsonObject.LastDiffusion; //jsonObject.FirstDiffusion; 
                crtPlaylistItemFillRect._diff_startTime = null; //jsonObject.StartTime;
                crtPlaylistItemFillRect._diff_endTime = null; //jsonObject.EndTime;
                crtPlaylistItemFillRect._diff_weekdays = null; //jsonObject.DiffusionDays;
                //-----------
                //crtPlaylistItemFillRect.setPlaylistItemIdAndName(jsonObject.ID, jsonObject.Name);
                crtPlaylistItemFillRect.setPlaylistItemIdAndName(5555 + iFillRectIdx, "fill-rect-" + iFillRectIdx);
                //------------ create and set the playlist-item logic
                var crtPlaylistItemFillRectLogic = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_FillRectLogic(error);
                crtPlaylistItemFillRectLogic.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemFillRect.setLogic(crtPlaylistItemFillRectLogic);
                crtPlaylistItemFillRectLogic.setOwnerIdxAsChild(iFillRectIdx);
                crtPlaylistItemFillRectLogic.setOwnerIdxAsLevel(aParent.getLogic().getOwnerIdxAsLevel() + 1);
                crtPlaylistItemFillRectLogic.setDiffusionInfos(crtPlaylistItemFillRect._diff_duration, crtPlaylistItemFillRect._diff_startDate, crtPlaylistItemFillRect._diff_endDate, crtPlaylistItemFillRect._diff_startTime, crtPlaylistItemFillRect._diff_endTime, crtPlaylistItemFillRect._diff_weekdays);
                crtPlaylistItemFillRectLogic.setDurationAsString(crtPlaylistItemFillRect._diff_duration);
                //-------------------
                aParent.addPlaylistItem(crtPlaylistItemFillRect);
                //-------------------- setup rendering information
                var prepareParams = this._owner._aServiceLocator._iEntityCreation.createDefaultControlPrepareParams(error);
                prepareParams.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemFillRect.setPrepareParams(prepareParams);
                var ancestorWithRenderingZone = crtPlaylistItemFillRect.getLogic().getFirstParentWithARenderingZone();
                crtPlaylistItemFillRect.getLogic().setTargetRenderingZoneId(ancestorWithRenderingZone.getPlaylistItemId());
                prepareParams.getRenderParams().getParamIdentification().setMediaType(amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Rect);
                //var playlistGlobalConfig = this._owner._iPlaylistControllerConfig.getPlaybackGlobalConfig();                                    
                //prepareParams.getRenderParams().getParamFileInfo().setUrlStorage(playlistGlobalConfig._aMediaFilesFolder.getUrlStorage());//"http://127.0.0.1:9080/c/");//aUrlStorage);
                //prepareParams.getRenderParams().getParamFileInfo().setUrlPath(playlistGlobalConfig._aMediaFilesFolder.getUrlPath());//"/media_files/");
                //prepareParams.getRenderParams().getParamFileInfo().setUrlName(jsonObject.ContentPlayerFileName);//"flori01.jpg"); //("WuXi03.png");
                //---
                prepareParams.getRenderParams().setIsVisible(isVisible);
                //---
                prepareParams.getRenderParams().getParamFillRect().setR(R);
                prepareParams.getRenderParams().getParamFillRect().setG(G);
                prepareParams.getRenderParams().getParamFillRect().setB(B);
                prepareParams.getRenderParams().getParamFillRect().setAlpha(1.0);
                //---
                prepareParams.getRenderParams().getParamContainerPosSize().setAllPosAndSizes(ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerLeft(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerTop(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerRight(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerBottom(), -1, -1, -1, -1);
                prepareParams.getRenderParams().getParamContainerAdjustedPosSize().setAllPosAndSizes(ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerLeft(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerTop(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerRight(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerBottom(), -1, -1, -1, -1);
                prepareParams.getRenderParams().getParamContainerPosSize().setContainerZOrder(ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerZOrder()); //9002
                //---
                //jsonObject.Properties.Position;
                //crtPlaylistItemFillRect.getPrepareParams().getRenderParams().getParamImage().setDisplayTypeAsNumber(jsonObject.Properties.Position);
                //crtPlaylistItemImage.getPrepareParams().getRenderParams().getParamImage().setDisplayType(
                //                                      amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Stretch);
                //--------------------
                //var jsonImage = crtPlaylistItemImage.toJSONString();
                //var  a=1;
                //--------------------
                return;
                //--------------- case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.MEDIA_STATIC_MOVIE:
                var crtPlaylistItemFillRect = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_FillRect(error);
                crtPlaylistItemFillRect.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemFillRect.setPlaylistItemType(amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_FillRect);
                //------------------ metadata
                crtPlaylistItemFillRect._main_BackColor = jsonObject.BackColor;
                crtPlaylistItemFillRect._main_BackImage = jsonObject.BackImage;
                crtPlaylistItemFillRect._main_H = jsonObject.H;
                crtPlaylistItemFillRect._main_ID = jsonObject.ID;
                crtPlaylistItemFillRect._main_IsMainZone = jsonObject.IsMainZone;
                crtPlaylistItemFillRect._main_Name = jsonObject.Name;
                crtPlaylistItemFillRect._main_Playlist = jsonObject.Playlist;
                crtPlaylistItemFillRect._main_VirtualPlaylistId = jsonObject.VirtualPlaylistId;
                crtPlaylistItemFillRect._main_W = jsonObject.W;
                crtPlaylistItemFillRect._main_X = jsonObject.X;
                crtPlaylistItemFillRect._main_Y = jsonObject.Y;
                crtPlaylistItemFillRect._main_Z = jsonObject.Z;
                crtPlaylistItemFillRect._meta_ID = null;
                crtPlaylistItemFillRect._meta_Name = null;
                crtPlaylistItemFillRect._meta_CustomID = null;
                crtPlaylistItemFillRect._meta_MediaType = null;
                crtPlaylistItemFillRect._diff_duration = null;
                crtPlaylistItemFillRect._diff_startDate = null;
                crtPlaylistItemFillRect._diff_endDate = null;
                crtPlaylistItemFillRect._diff_startTime = null;
                crtPlaylistItemFillRect._diff_endTime = null;
                crtPlaylistItemFillRect._diff_weekdays = null;
                //-----------
                crtPlaylistItemFillRect.setPlaylistItemIdAndName(500 + iFillRectIdx, "fill-rect-" + iFillRectIdx);
                //------------ create and set the playlist-item logic
                var crtPlaylistItemFillRectLogic = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_FillRectLogic(error);
                crtPlaylistItemFillRectLogic.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemFillRect.setLogic(crtPlaylistItemFillRectLogic);
                crtPlaylistItemFillRectLogic.setOwnerIdxAsChild(iFillRectIdx);
                crtPlaylistItemFillRectLogic.setOwnerIdxAsLevel(aParent.getLogic().getOwnerIdxAsLevel() + 1);
                crtPlaylistItemFillRectLogic.setDiffusionInfos(crtPlaylistItemFillRect._diff_duration, crtPlaylistItemFillRect._diff_startDate, crtPlaylistItemFillRect._diff_endDate, crtPlaylistItemFillRect._diff_startTime, crtPlaylistItemFillRect._diff_endTime, crtPlaylistItemFillRect._diff_weekdays);
                crtPlaylistItemFillRectLogic.setDurationAsString(crtPlaylistItemFillRect._diff_duration);
                //-------------------
                aParent.addPlaylistItem(crtPlaylistItemFillRect);
                //--------------------
                //var jsonDesignZone = crtPlaylistItemDesignZone.toJSONString();
                //console.log(jsonDesignZone);
                //var  a=1;  
                //--------------------    
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadOneTag = function (aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback) {
                //-------- case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.TAG_EXTENDED:
                var crtPlaylistItemTag = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_Tag(error);
                crtPlaylistItemTag.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemTag.setPlaylistItemType(amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_Tag);
                //--------------------
                crtPlaylistItemTag._main_type = jsonObject.__type;
                crtPlaylistItemTag._main_arrAspectRatioIDs = jsonObject.AspectRatioIDs;
                crtPlaylistItemTag._main_CreationDate = jsonObject.CreationDate;
                crtPlaylistItemTag._main_Description = jsonObject.Description;
                crtPlaylistItemTag._main_Duration = jsonObject.Duration;
                crtPlaylistItemTag._main_ID = jsonObject.ID;
                crtPlaylistItemTag._main_IsLocked = jsonObject.IsLocked;
                crtPlaylistItemTag._main_IsSharedFromParentWorkgroup = jsonObject.IsSharedFromParentWorkgroup;
                crtPlaylistItemTag._main_IsUnsharedButPartOfASharedContainer = jsonObject.IsUnsharedButPartOfASharedContainer;
                crtPlaylistItemTag._main_LastLock = jsonObject.LastLock;
                crtPlaylistItemTag._main_LastModificationDate = jsonObject.LastModificationDate;
                crtPlaylistItemTag._main_LastModifierId = jsonObject.LastModifierId;
                crtPlaylistItemTag._main_Loop = jsonObject.Loop;
                crtPlaylistItemTag._main_MediaParentId = jsonObject.MediaParentId;
                crtPlaylistItemTag._main_MediaType = jsonObject.MediaType;
                crtPlaylistItemTag._main_Name = jsonObject.Name;
                crtPlaylistItemTag._main_OwnerId = jsonObject.OwnerId;
                crtPlaylistItemTag._main_OwnerName = jsonObject.OwnerName;
                crtPlaylistItemTag._main_arrTagIDs = jsonObject.TagIDs;
                crtPlaylistItemTag._main_UserIDLock = jsonObject.UserIDLock;
                crtPlaylistItemTag._main_UserNameLock = jsonObject.UserNameLock;
                crtPlaylistItemTag._main_WorkgroupId = jsonObject.WorkgroupId;
                crtPlaylistItemTag._main_CustomID = jsonObject.CustomID;
                crtPlaylistItemTag._main_arrDiffusionDays = jsonObject.DiffusionDays;
                crtPlaylistItemTag._main_EndTime = jsonObject.EndTime;
                crtPlaylistItemTag._main_ExpectedPlayDate = jsonObject.ExpectedPlayDate;
                crtPlaylistItemTag._main_ExpectedPlayTime = jsonObject.ExpectedPlayTime;
                crtPlaylistItemTag._main_FirstDiffusion = jsonObject.FirstDiffusion;
                crtPlaylistItemTag._main_LastDiffusion = jsonObject.LastDiffusion;
                crtPlaylistItemTag._main_arrMediaAccessRights = jsonObject.MediaAccessRights;
                crtPlaylistItemTag._main_SharingType = jsonObject.SharingType;
                crtPlaylistItemTag._main_StartTime = jsonObject.StartTime;
                crtPlaylistItemTag._main_arrMEDIAS = jsonObject.MEDIAS;
                crtPlaylistItemTag._main_arrMEDIA_IDS = jsonObject.MEDIA_IDS;
                crtPlaylistItemTag._main_OVERRRULE_MEDIA_DATES = jsonObject.OVERRULE_MEDIA_DATES;
                crtPlaylistItemTag._main_PICK = jsonObject.PICK;
                crtPlaylistItemTag._meta_ID = jsonObject.ID;
                crtPlaylistItemTag._meta_Name = jsonObject.Name;
                crtPlaylistItemTag._meta_CustomID = jsonObject.CustomID;
                crtPlaylistItemTag._meta_MediaType = jsonObject.MediaType;
                crtPlaylistItemTag._diff_duration = jsonObject.Duration;
                crtPlaylistItemTag._diff_startDate = jsonObject.FirstDiffusion;
                crtPlaylistItemTag._diff_endDate = jsonObject.LastDiffusion; //jsonObject.FirstDiffusion; 
                crtPlaylistItemTag._diff_startTime = jsonObject.StartTime;
                crtPlaylistItemTag._diff_endTime = jsonObject.EndTime;
                crtPlaylistItemTag._diff_weekdays = jsonObject.DiffusionDays;
                //-----------
                crtPlaylistItemTag.setPlaylistItemIdAndName(jsonObject.ID, jsonObject.Name);
                //------------ create and set the playlist-item logic
                var crtPlaylistItemTagLogic = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_TagLogic(error);
                crtPlaylistItemTagLogic.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemTag.setLogic(crtPlaylistItemTagLogic);
                crtPlaylistItemTagLogic.setOwnerIdxAsChild(iMediaItem);
                crtPlaylistItemTagLogic.setOwnerIdxAsLevel(aParent.getLogic().getOwnerIdxAsLevel() + 1);
                crtPlaylistItemTagLogic.setDiffusionInfos(crtPlaylistItemTag._diff_duration, crtPlaylistItemTag._diff_startDate, crtPlaylistItemTag._diff_endDate, crtPlaylistItemTag._diff_startTime, crtPlaylistItemTag._diff_endTime, crtPlaylistItemTag._diff_weekdays);
                crtPlaylistItemTagLogic.setDurationAsString(crtPlaylistItemTag._diff_duration);
                crtPlaylistItemTagLogic.setTagId(jsonObject.ID);
                //-------------------
                aParent.addPlaylistItem(crtPlaylistItemTag);
                //--------------------
                crtPlaylistItemTagLogic.cmd_setNextChildSelectionType(amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_ChooseRandom_OnlyOne_ByTagId);
                //--------------------
                var stream = crtPlaylistItemTag.getStream();
                if (stream == null)
                    return;
                var jsonStaticMedias = stream.getJsonStaticMedias();
                if (jsonStaticMedias == null)
                    return;
                //----------------- load static media items for tag
                this.loadStaticMediaItemsInTag(aPlaylistType, jsonObject, jsonStaticMedias, aPlaylistFile, crtPlaylistItemTag, error, context, callback);
                //---------------------- create or set realtag random
                var realTag = this.createOrGeAndSetRealTag(crtPlaylistItemTagLogic.cmd_getNbChildren(), aPlaylistType, jsonObject, aPlaylistFile, crtPlaylistItemTag, error, context, callback);
                if (realTag == null)
                    return;
                //--------------------
                //var jsonDesign = crtPlaylistItemTag.toJSONString();
                //console.log(jsonDesign);
                //var  a=1;  
                //--------------------     
            };
            //------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadStaticMediaItemsInTag = function (aPlaylistType, jsonTagObject, jsonStaticMedias, aPlaylistFile, aParent, error, context, callback) {
                //--------------------
                var iJsonStaticMediaIdx = -1;
                for (var iTagMediaId = 0; iTagMediaId < jsonTagObject.MEDIA_IDS.length; iTagMediaId++) {
                    iJsonStaticMediaIdx = this.getJsonStaticMediaById(jsonTagObject.MEDIA_IDS[iTagMediaId], jsonStaticMedias);
                    if (iJsonStaticMediaIdx == -1)
                        continue;
                    this.loadOneMediaItem(aPlaylistType, jsonStaticMedias[iJsonStaticMediaIdx], aPlaylistFile, iTagMediaId, aParent, error, context, callback);
                }
            };
            //--------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.getJsonStaticMediaById = function (staticMediaId, jsonStaticMedias) {
                var crtJsonStaticMedia = null;
                var iJsonStaticMediaIdx = -1;
                for (var iStaticMediaIdx = 0; iStaticMediaIdx < jsonStaticMedias.length; iStaticMediaIdx++) {
                    crtJsonStaticMedia = jsonStaticMedias[iStaticMediaIdx];
                    if (crtJsonStaticMedia == null)
                        continue;
                    if (crtJsonStaticMedia.ID == null)
                        continue;
                    if (crtJsonStaticMedia.ID == staticMediaId) {
                        iJsonStaticMediaIdx = iStaticMediaIdx;
                        break;
                    }
                }
                return iJsonStaticMediaIdx;
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.createOrGeAndSetRealTag = function (nbChildren, aPlaylistType, jsonObject, aPlaylistFile, aParentTag, error, context, callback) {
                if (nbChildren < 0)
                    return;
                var aParentTagLogic = aParentTag.getLogic();
                //--------------------
                var stream = aParentTag.getStream();
                if (stream == null)
                    return;
                var tagManager = stream.getTagManager();
                if (tagManager == null)
                    return;
                var tagId = aParentTagLogic.getTagId();
                if (tagId == null)
                    return null;
                var existingRealTag = tagManager.getRealTag(tagId);
                if (existingRealTag != null) {
                    aParentTagLogic.setRealTag(existingRealTag);
                    return;
                }
                var newRealTag = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_RealTag(error);
                //--
                var newRandom = this._owner._aServiceLocator._iEntityCreation.createDefaultRandom(error);
                newRandom.initRandom(0, nbChildren - 1, true, true); //?
                newRealTag.setRealTagRandom(newRandom);
                //--
                tagManager.addRealTagIfNotExists(tagId, newRealTag);
                //--
                aParentTagLogic.setRealTag(newRealTag);
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadOneEditableFlash = function (aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback) {
                //----------- amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.EDITABLE_FLASH:
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadOneTvTuner = function (aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback) {
                //----------- amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.TV_TUNER:
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadOneTvPassThrough = function (aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback) {
                //----------- amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.TV_PASS_THROUGH:
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadOneAudioFile = function (aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback) {
                //-------- case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.AUDIO_FILES:
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadOneFlash = function (aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback) {
                //---- case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.FLASH_OBJECT:
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadOnePlaylist2 = function (aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback) {
                //---   case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.PLAYLIST:
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadOneVideoOrAudioStream = function (aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback) {
                if (jsonObject == null)
                    return;
                if (jsonObject.Properties == null)
                    return;
                if (jsonObject.Properties.Type == null)
                    return;
                if (jsonObject.Properties.Type == "VIDEO")
                    return this.loadOneVideoStream(aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback);
                if (jsonObject.Properties.Type == "AUDIO")
                    return this.loadOneAudioStream(aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback);
                return;
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadOneVideoStream = function (aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback) {
                //---- case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.VIDEO_STREAM:
                var crtPlaylistItemVideoStream = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_VideoStream(error);
                crtPlaylistItemVideoStream.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemVideoStream.setPlaylistItemType(amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_VideoStream);
                //------------------ metadata
                crtPlaylistItemVideoStream._main_type = jsonObject.__type;
                crtPlaylistItemVideoStream._main_arrAspectRatioIDs = jsonObject.AspectRatioIDs;
                crtPlaylistItemVideoStream._main_CreationDate = jsonObject.CreationDate;
                crtPlaylistItemVideoStream._main_Description = jsonObject.Description;
                crtPlaylistItemVideoStream._main_Duration = jsonObject.Duration;
                crtPlaylistItemVideoStream._main_ID = jsonObject.ID;
                crtPlaylistItemVideoStream._main_IsLocked = jsonObject.IsLocked;
                crtPlaylistItemVideoStream._main_IsSharedFromParentWorkgroup = jsonObject.IsSharedFromParentWorkgroup;
                crtPlaylistItemVideoStream._main_IsUnsharedButPartOfASharedContainer = jsonObject.IsUnsharedButPartOfASharedContainer;
                crtPlaylistItemVideoStream._main_LastLock = jsonObject.LastLock;
                crtPlaylistItemVideoStream._main_LastModificationDate = jsonObject.LastModificationDate;
                crtPlaylistItemVideoStream._main_LastModifierId = jsonObject.LastModifierId;
                crtPlaylistItemVideoStream._main_Loop = jsonObject.Loop;
                crtPlaylistItemVideoStream._main_MediaParentId = jsonObject.MediaParentId;
                crtPlaylistItemVideoStream._main_MediaType = jsonObject.MediaType;
                crtPlaylistItemVideoStream._main_Name = jsonObject.Name;
                crtPlaylistItemVideoStream._main_OwnerId = jsonObject.OwnerId;
                crtPlaylistItemVideoStream._main_OwnerName = jsonObject.OwnerName;
                crtPlaylistItemVideoStream._main_arrTagIDs = jsonObject.TagIDs;
                crtPlaylistItemVideoStream._main_UserIDLock = jsonObject.UserIDLock;
                crtPlaylistItemVideoStream._main_UserNameLock = jsonObject.UserNameLock;
                crtPlaylistItemVideoStream._main_WorkgroupId = jsonObject.WorkgroupId;
                crtPlaylistItemVideoStream._main_CustomID = jsonObject.CustomID;
                crtPlaylistItemVideoStream._main_arrDiffusionDays = jsonObject.DiffusionDays;
                crtPlaylistItemVideoStream._main_EndTime = jsonObject.EndTime;
                crtPlaylistItemVideoStream._main_ExpectedPlayDate = jsonObject.ExpectedPlayDate;
                crtPlaylistItemVideoStream._main_ExpectedPlayTime = jsonObject.ExpectedPlayTime;
                crtPlaylistItemVideoStream._main_FirstDiffusion = jsonObject.FirstDiffusion;
                crtPlaylistItemVideoStream._main_LastDiffusion = jsonObject.LastDiffusion;
                crtPlaylistItemVideoStream._main_arrMediaAccessRights = jsonObject.MediaAccessRights;
                crtPlaylistItemVideoStream._main_SharingType = jsonObject.SharingType;
                crtPlaylistItemVideoStream._main_StartTime = jsonObject.StartTime;
                crtPlaylistItemVideoStream._main_ContentFileID = jsonObject.ContentFileID;
                crtPlaylistItemVideoStream._main_ContentFileName = jsonObject.ContentFileName;
                crtPlaylistItemVideoStream._main_ContentFilePlayerShaCode = jsonObject.ContentFilePlayerShaCode;
                crtPlaylistItemVideoStream._main_ContentFileStateID = jsonObject.ContentFileStateID;
                crtPlaylistItemVideoStream._main_ContentPlayerFileName = jsonObject.ContentPlayerFileName;
                crtPlaylistItemVideoStream._main_Flag = jsonObject.Flag;
                crtPlaylistItemVideoStream._main_RemoteMediaProperties = jsonObject.RemoteMediaProperties;
                crtPlaylistItemVideoStream._main_State = jsonObject.State;
                crtPlaylistItemVideoStream._meta_ID = jsonObject.ID;
                crtPlaylistItemVideoStream._meta_Name = jsonObject.Name;
                crtPlaylistItemVideoStream._meta_CustomID = jsonObject.CustomID;
                crtPlaylistItemVideoStream._meta_MediaType = jsonObject.MediaType;
                //crtPlaylistItemVideoStream._meta_ContentFileName       = jsonObject.ContentPlayerFileName;
                //crtPlaylistItemVideoStream._meta_ContentPlayerFileName = jsonObject.ContentPlayerFileName;
                crtPlaylistItemVideoStream._prop_type = jsonObject.Properties.__type;
                crtPlaylistItemVideoStream._prop_Height = jsonObject.Properties.Height;
                crtPlaylistItemVideoStream._prop_Keep_Aspect_Ratio = jsonObject.Properties.Keep_Aspect_Ratio;
                crtPlaylistItemVideoStream._prop_Sound_Volume = jsonObject.Properties.Sound_Volume;
                crtPlaylistItemVideoStream._prop_True_Duration = jsonObject.Properties.True_Duration;
                crtPlaylistItemVideoStream._prop_Width = jsonObject.Properties.Width;
                crtPlaylistItemVideoStream._prop_Url = jsonObject.Properties.Url;
                crtPlaylistItemVideoStream._prop_StreamType = jsonObject.Properties.Type;
                crtPlaylistItemVideoStream._diff_duration = jsonObject.Duration;
                crtPlaylistItemVideoStream._diff_startDate = jsonObject.FirstDiffusion;
                crtPlaylistItemVideoStream._diff_endDate = jsonObject.LastDiffusion; //jsonObject.FirstDiffusion; 
                crtPlaylistItemVideoStream._diff_startTime = jsonObject.StartTime;
                crtPlaylistItemVideoStream._diff_endTime = jsonObject.EndTime;
                crtPlaylistItemVideoStream._diff_weekdays = jsonObject.DiffusionDays;
                //-----------
                crtPlaylistItemVideoStream.setPlaylistItemIdAndName(jsonObject.ID, jsonObject.Name);
                var playlistGlobalConfig = this._owner._iPlaylistControllerConfig.getPlaybackGlobalConfig();
                //------------ create and set the playlist-item logic
                var crtPlaylistItemVideoStreamLogic = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_VideoStreamLogic(error);
                crtPlaylistItemVideoStreamLogic.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemVideoStream.setLogic(crtPlaylistItemVideoStreamLogic);
                crtPlaylistItemVideoStreamLogic.setOwnerIdxAsChild(iMediaItem);
                crtPlaylistItemVideoStreamLogic.setOwnerIdxAsLevel(aParent.getLogic().getOwnerIdxAsLevel() + 1);
                crtPlaylistItemVideoStreamLogic.setDiffusionInfos(crtPlaylistItemVideoStream._diff_duration, crtPlaylistItemVideoStream._diff_startDate, crtPlaylistItemVideoStream._diff_endDate, crtPlaylistItemVideoStream._diff_startTime, crtPlaylistItemVideoStream._diff_endTime, crtPlaylistItemVideoStream._diff_weekdays);
                crtPlaylistItemVideoStreamLogic.setDurationAsString(crtPlaylistItemVideoStream._diff_duration);
                crtPlaylistItemVideoStreamLogic.setNaturalDurationAsString(crtPlaylistItemVideoStream._prop_True_Duration, playlistGlobalConfig.getEpsilonTimeBefireNaturalEnd());
                //---------------------
                //-------------------
                aParent.addPlaylistItem(crtPlaylistItemVideoStream);
                //-------------------- setup rendering information
                var prepareParams = this._owner._aServiceLocator._iEntityCreation.createDefaultControlPrepareParams(error);
                prepareParams.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemVideoStream.setPrepareParams(prepareParams);
                var ancestorWithRenderingZone = crtPlaylistItemVideoStream.getLogic().getFirstParentWithARenderingZone();
                crtPlaylistItemVideoStream.getLogic().setTargetRenderingZoneId(ancestorWithRenderingZone.getPlaylistItemId());
                prepareParams.getRenderParams().getParamIdentification().setMediaType(amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video);
                prepareParams.getRenderParams().getParamFileInfo().setUrlStorage(jsonObject.Properties.Url);
                prepareParams.getRenderParams().getParamFileInfo().setUrlPath("");
                prepareParams.getRenderParams().getParamFileInfo().setUrlName("");
                //---
                prepareParams.getRenderParams().getParamContainerPosSize().setAllPosAndSizes(ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerLeft(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerTop(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerRight(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerBottom(), -1, -1, -1, -1);
                prepareParams.getRenderParams().getParamContainerAdjustedPosSize().setAllPosAndSizes(ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerLeft(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerTop(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerRight(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerBottom(), -1, -1, -1, -1);
                prepareParams.getRenderParams().getParamContainerPosSize().setContainerZOrder(ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerZOrder()); //9002
                prepareParams.getRenderParams().getParamVideo().setKeepAspectRatio(crtPlaylistItemVideoStream._prop_Keep_Aspect_Ratio);
                prepareParams.getRenderParams().getParamVideo().setVideoAudioVolume(crtPlaylistItemVideoStream._prop_Sound_Volume);
                prepareParams.getRenderParams().getParamVideo().setVideoNaturalWidth(crtPlaylistItemVideoStream._prop_Width);
                prepareParams.getRenderParams().getParamVideo().setVideoNaturalHeight(crtPlaylistItemVideoStream._prop_Height);
                //---
                //var jsonVideo = crtPlaylistItemVideo.toJSONString();
                //var  a=1;  
                //--------------------  
                return;
            };
            //-------------------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.loadOneAudioStream = function (aPlaylistType, jsonObject, aPlaylistFile, iMediaItem, aParent, error, context, callback) {
                //---- case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.VIDEO_STREAM:
                var crtPlaylistItemVideoStream = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_VideoStream(error); //to do AudioStream
                crtPlaylistItemVideoStream.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemVideoStream.setPlaylistItemType(amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_VideoStream);
                //------------------ metadata
                crtPlaylistItemVideoStream._main_type = jsonObject.__type;
                crtPlaylistItemVideoStream._main_arrAspectRatioIDs = jsonObject.AspectRatioIDs;
                crtPlaylistItemVideoStream._main_CreationDate = jsonObject.CreationDate;
                crtPlaylistItemVideoStream._main_Description = jsonObject.Description;
                crtPlaylistItemVideoStream._main_Duration = jsonObject.Duration;
                crtPlaylistItemVideoStream._main_ID = jsonObject.ID;
                crtPlaylistItemVideoStream._main_IsLocked = jsonObject.IsLocked;
                crtPlaylistItemVideoStream._main_IsSharedFromParentWorkgroup = jsonObject.IsSharedFromParentWorkgroup;
                crtPlaylistItemVideoStream._main_IsUnsharedButPartOfASharedContainer = jsonObject.IsUnsharedButPartOfASharedContainer;
                crtPlaylistItemVideoStream._main_LastLock = jsonObject.LastLock;
                crtPlaylistItemVideoStream._main_LastModificationDate = jsonObject.LastModificationDate;
                crtPlaylistItemVideoStream._main_LastModifierId = jsonObject.LastModifierId;
                crtPlaylistItemVideoStream._main_Loop = jsonObject.Loop;
                crtPlaylistItemVideoStream._main_MediaParentId = jsonObject.MediaParentId;
                crtPlaylistItemVideoStream._main_MediaType = jsonObject.MediaType;
                crtPlaylistItemVideoStream._main_Name = jsonObject.Name;
                crtPlaylistItemVideoStream._main_OwnerId = jsonObject.OwnerId;
                crtPlaylistItemVideoStream._main_OwnerName = jsonObject.OwnerName;
                crtPlaylistItemVideoStream._main_arrTagIDs = jsonObject.TagIDs;
                crtPlaylistItemVideoStream._main_UserIDLock = jsonObject.UserIDLock;
                crtPlaylistItemVideoStream._main_UserNameLock = jsonObject.UserNameLock;
                crtPlaylistItemVideoStream._main_WorkgroupId = jsonObject.WorkgroupId;
                crtPlaylistItemVideoStream._main_CustomID = jsonObject.CustomID;
                crtPlaylistItemVideoStream._main_arrDiffusionDays = jsonObject.DiffusionDays;
                crtPlaylistItemVideoStream._main_EndTime = jsonObject.EndTime;
                crtPlaylistItemVideoStream._main_ExpectedPlayDate = jsonObject.ExpectedPlayDate;
                crtPlaylistItemVideoStream._main_ExpectedPlayTime = jsonObject.ExpectedPlayTime;
                crtPlaylistItemVideoStream._main_FirstDiffusion = jsonObject.FirstDiffusion;
                crtPlaylistItemVideoStream._main_LastDiffusion = jsonObject.LastDiffusion;
                crtPlaylistItemVideoStream._main_arrMediaAccessRights = jsonObject.MediaAccessRights;
                crtPlaylistItemVideoStream._main_SharingType = jsonObject.SharingType;
                crtPlaylistItemVideoStream._main_StartTime = jsonObject.StartTime;
                crtPlaylistItemVideoStream._main_ContentFileID = jsonObject.ContentFileID;
                crtPlaylistItemVideoStream._main_ContentFileName = jsonObject.ContentFileName;
                crtPlaylistItemVideoStream._main_ContentFilePlayerShaCode = jsonObject.ContentFilePlayerShaCode;
                crtPlaylistItemVideoStream._main_ContentFileStateID = jsonObject.ContentFileStateID;
                crtPlaylistItemVideoStream._main_ContentPlayerFileName = jsonObject.ContentPlayerFileName;
                crtPlaylistItemVideoStream._main_Flag = jsonObject.Flag;
                crtPlaylistItemVideoStream._main_RemoteMediaProperties = jsonObject.RemoteMediaProperties;
                crtPlaylistItemVideoStream._main_State = jsonObject.State;
                crtPlaylistItemVideoStream._meta_ID = jsonObject.ID;
                crtPlaylistItemVideoStream._meta_Name = jsonObject.Name;
                crtPlaylistItemVideoStream._meta_CustomID = jsonObject.CustomID;
                crtPlaylistItemVideoStream._meta_MediaType = jsonObject.MediaType;
                //crtPlaylistItemVideoStream._meta_ContentFileName       = jsonObject.ContentPlayerFileName;
                //crtPlaylistItemVideoStream._meta_ContentPlayerFileName = jsonObject.ContentPlayerFileName;
                crtPlaylistItemVideoStream._prop_type = jsonObject.Properties.__type;
                crtPlaylistItemVideoStream._prop_Height = jsonObject.Properties.Height;
                crtPlaylistItemVideoStream._prop_Keep_Aspect_Ratio = jsonObject.Properties.Keep_Aspect_Ratio;
                crtPlaylistItemVideoStream._prop_Sound_Volume = jsonObject.Properties.Sound_Volume;
                crtPlaylistItemVideoStream._prop_True_Duration = jsonObject.Properties.True_Duration;
                crtPlaylistItemVideoStream._prop_Width = jsonObject.Properties.Width;
                crtPlaylistItemVideoStream._prop_Url = jsonObject.Properties.Url;
                crtPlaylistItemVideoStream._prop_StreamType = jsonObject.Properties.Type;
                crtPlaylistItemVideoStream._diff_duration = jsonObject.Duration;
                crtPlaylistItemVideoStream._diff_startDate = jsonObject.FirstDiffusion;
                crtPlaylistItemVideoStream._diff_endDate = jsonObject.LastDiffusion; //jsonObject.FirstDiffusion; 
                crtPlaylistItemVideoStream._diff_startTime = jsonObject.StartTime;
                crtPlaylistItemVideoStream._diff_endTime = jsonObject.EndTime;
                crtPlaylistItemVideoStream._diff_weekdays = jsonObject.DiffusionDays;
                //-----------
                crtPlaylistItemVideoStream.setPlaylistItemIdAndName(jsonObject.ID, jsonObject.Name);
                var playlistGlobalConfig = this._owner._iPlaylistControllerConfig.getPlaybackGlobalConfig();
                //------------ create and set the playlist-item logic
                var crtPlaylistItemVideoStreamLogic = this._owner._aServiceLocator._iEntityCreation.createDefaultPlaylistItem_VideoStreamLogic(error); //to do AudioStreamLogic
                crtPlaylistItemVideoStreamLogic.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemVideoStream.setLogic(crtPlaylistItemVideoStreamLogic);
                crtPlaylistItemVideoStreamLogic.setOwnerIdxAsChild(iMediaItem);
                crtPlaylistItemVideoStreamLogic.setOwnerIdxAsLevel(aParent.getLogic().getOwnerIdxAsLevel() + 1);
                crtPlaylistItemVideoStreamLogic.setDiffusionInfos(crtPlaylistItemVideoStream._diff_duration, crtPlaylistItemVideoStream._diff_startDate, crtPlaylistItemVideoStream._diff_endDate, crtPlaylistItemVideoStream._diff_startTime, crtPlaylistItemVideoStream._diff_endTime, crtPlaylistItemVideoStream._diff_weekdays);
                crtPlaylistItemVideoStreamLogic.setDurationAsString(crtPlaylistItemVideoStream._diff_duration);
                crtPlaylistItemVideoStreamLogic.setNaturalDurationAsString(crtPlaylistItemVideoStream._prop_True_Duration, playlistGlobalConfig.getEpsilonTimeBefireNaturalEnd());
                //---------------------
                //-------------------
                aParent.addPlaylistItem(crtPlaylistItemVideoStream);
                //-------------------- setup rendering information
                var prepareParams = this._owner._aServiceLocator._iEntityCreation.createDefaultControlPrepareParams(error);
                prepareParams.injectDependencies(this._owner._aServiceContainer, this._owner._aServiceLocator, this._owner._aLogService, error);
                crtPlaylistItemVideoStream.setPrepareParams(prepareParams);
                var ancestorWithRenderingZone = crtPlaylistItemVideoStream.getLogic().getFirstParentWithARenderingZone();
                crtPlaylistItemVideoStream.getLogic().setTargetRenderingZoneId(ancestorWithRenderingZone.getPlaylistItemId());
                prepareParams.getRenderParams().getParamIdentification().setMediaType(amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video);
                prepareParams.getRenderParams().getParamFileInfo().setUrlStorage(jsonObject.Properties.Url);
                prepareParams.getRenderParams().getParamFileInfo().setUrlPath("");
                prepareParams.getRenderParams().getParamFileInfo().setUrlName("");
                //---
                prepareParams.getRenderParams().getParamContainerPosSize().setAllPosAndSizes(ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerLeft(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerTop(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerRight(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerBottom(), -1, -1, -1, -1);
                prepareParams.getRenderParams().getParamContainerAdjustedPosSize().setAllPosAndSizes(ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerLeft(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerTop(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerRight(), ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerBottom(), -1, -1, -1, -1);
                prepareParams.getRenderParams().getParamContainerPosSize().setContainerZOrder(ancestorWithRenderingZone.getPrepareParams().getRenderParams().getParamContainerPosSize().getContainerZOrder()); //9002
                prepareParams.getRenderParams().getParamVideo().setKeepAspectRatio(crtPlaylistItemVideoStream._prop_Keep_Aspect_Ratio);
                prepareParams.getRenderParams().getParamVideo().setVideoAudioVolume(crtPlaylistItemVideoStream._prop_Sound_Volume);
                prepareParams.getRenderParams().getParamVideo().setVideoNaturalWidth(crtPlaylistItemVideoStream._prop_Width);
                prepareParams.getRenderParams().getParamVideo().setVideoNaturalHeight(crtPlaylistItemVideoStream._prop_Height);
                //---
                //var jsonVideo = crtPlaylistItemVideo.toJSONString();
                //var  a=1;  
                //--------------------  
                return;
            };
            //-------------------------------------------------------
            IImpl_PlaylistController_Playlist_Mood_v5.prototype.getEmptyPlaylist = function () {
                return IImpl_PlaylistController_Playlist_Mood_v5.EMPTY_PLAYLIST;
            };
            IImpl_PlaylistController_Playlist_Mood_v5.EMPTY_PLAYLIST = "{" +
                "\"ID\": 9999," +
                "\"Name\": \"Empty PC\"," +
                "\"PlayerType\": 1," +
                "\"SerialNumber\": \"PC100001\"," +
                "\"SiteID\": 1042," +
                "\"StreamList\": [" +
                "3118" +
                "]," +
                "\"WorkgroupID\": 2613," +
                "\"BrandType\": 4," +
                "\"CompatibleHardwareVersions\": \"R33\"," +
                "\"PaybackProfile\": 1," +
                "\"Streams_Extended\": [" +
                "{" +
                "\"HardwareID\": 9999," +
                "\"Height\": 100," +
                "\"ID\": 3118," +
                "\"Name\": \"Full screen stream for Empty PC\"," +
                "\"Width\": 100," +
                "\"WindowsAccountId\": 0," +
                "\"X\": 0," +
                "\"Y\": 0," +
                "\"Channel_Extended\": {" +
                "\"AspectRatioIDs\": []," +
                "\"CreationDate\": \"\/Date(1537352713363+0200)\/\"," +
                "\"Description\": null," +
                "\"Duration\": null," +
                "\"ID\": 36490," +
                "\"IsLocked\": false," +
                "\"IsSharedFromParentWorkgroup\": false," +
                "\"IsUnsharedButPartOfASharedContainer\": false," +
                "\"LastLock\": null," +
                "\"LastModificationDate\": \"\/Date(1588932183167+0200)\/\"," +
                "\"LastModifierId\": 73," +
                "\"Loop\": false," +
                "\"MediaParentId\": -1," +
                "\"MediaType\": 14," +
                "\"Name\": \"Default Channel for Marius\"," +
                "\"OwnerId\": 73," +
                "\"OwnerName\": \"Alexandru Iorga\"," +
                "\"TagIDs\": []," +
                "\"UserIDLock\": null," +
                "\"UserNameLock\": \"\"," +
                "\"WorkgroupId\": 2615," +
                "\"CustomID\": null," +
                "\"DiffusionDays\": {" +
                "\"Value\": 127" +
                "}," +
                "\"EndTime\": \"PT23H59M59S\"," +
                "\"ExpectedPlayDate\": null," +
                "\"ExpectedPlayTime\": null," +
                "\"FirstDiffusion\": \"\/Date(1537315200000)\/\"," +
                "\"LastDiffusion\": \"\/Date(4102444799000)\/\"," +
                "\"MediaAccessRights\": []," +
                "\"SharingType\": -1," +
                "\"StartTime\": \"PT0S\"," +
                "\"ContentType\": null," +
                "\"EventIds\": null," +
                "\"LastActivation\": \"\/Date(1590952800535+0200)\/\"," +
                "\"Sequence\": null," +
                "\"isForLocalInput\": false," +
                "\"Events\": []," +
                "\"Medias_Statics_Extended\": []," +
                "\"Playlist_Extended\": {" +
                "\"AspectRatioIDs\": []," +
                "\"CreationDate\": \"\/Date(1537352713370+0200)\/\"," +
                "\"Description\": null," +
                "\"Duration\": null," +
                "\"ID\": 36492," +
                "\"IsLocked\": false," +
                "\"IsSharedFromParentWorkgroup\": false," +
                "\"IsUnsharedButPartOfASharedContainer\": false," +
                "\"LastLock\": null," +
                "\"LastModificationDate\": \"\/Date(1537352713370+0200)\/\"," +
                "\"LastModifierId\": 73," +
                "\"Loop\": false," +
                "\"MediaParentId\": -1," +
                "\"MediaType\": 19," +
                "\"Name\": \"Playlist for Zone 0 in design 'Sequence for channel Empty'\"," +
                "\"OwnerId\": 73," +
                "\"OwnerName\": \"Alexandru Iorga\"," +
                "\"TagIDs\": []," +
                "\"UserIDLock\": null," +
                "\"UserNameLock\": null," +
                "\"WorkgroupId\": 2615," +
                "\"CustomID\": null," +
                "\"DiffusionDays\": {" +
                "\"Value\": 127" +
                "}," +
                "\"EndTime\": \"PT23H59M59S\"," +
                "\"ExpectedPlayDate\": null," +
                "\"ExpectedPlayTime\": null," +
                "\"FirstDiffusion\": \"\/Date(1537315200000)\/\"," +
                "\"LastDiffusion\": \"\/Date(4102444799000)\/\"," +
                "\"MediaAccessRights\": []," +
                "\"SharingType\": -1," +
                "\"StartTime\": \"PT0S\"," +
                "\"AllowUserSelection\": null," +
                "\"AllowedTypes\": []," +
                "\"DeniedTypes\": []," +
                "\"EventType\": null," +
                "\"FirstContentID\": null," +
                "\"IsRandom\": false," +
                "\"MaxNumberOfElements\": 0," +
                "\"MediasIds\": null," +
                "\"PlaylistOrder\": [" +
                "]," +
                "\"Properties\": []," +
                "\"Repeat\": null," +
                "\"RepeatFrequency\": null," +
                "\"RepeatInterval\": null," +
                "\"RepeatNbOfTracks\": null," +
                "\"Medias_Extended\": [" +
                "]" +
                "}" +
                "}" +
                "}" +
                "]" +
                "}";
            return IImpl_PlaylistController_Playlist_Mood_v5;
        }());
        rm_coreservices.IImpl_PlaylistController_Playlist_Mood_v5 = IImpl_PlaylistController_Playlist_Mood_v5;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
/*
                        {
                            "__type": "MEDIA_STATIC_SVC:#TeamCoV5.Models",
                            "AspectRatioIDs": [],
                            "CreationDate": "\/Date(1594165362413+0200)\/",
                            "Description": null,
                            "Duration": 59000,
                            "ID": 68641,
                            "IsLocked": false,
                            "IsSharedFromParentWorkgroup": false,
                            "IsUnsharedButPartOfASharedContainer": false,
                            "LastLock": null,
                            "LastModificationDate": "\/Date(1594165404837+0200)\/",
                            "LastModifierId": 72,
                            "Loop": false,
                            "MediaParentId": -1,
                            "MediaType": 47,
                            "Name": "LCI",
                            "OwnerId": 72,
                            "OwnerName": "Marius Alexandru",
                            "TagIDs": [],
                            "UserIDLock": null,
                            "UserNameLock": null,
                            "WorkgroupId": 2615,
                            "CustomID": null,
                            "DiffusionDays": {
                                "Value": 127
                            },
                            "EndTime": "PT23H59M59S",
                            "ExpectedPlayDate": null,
                            "ExpectedPlayTime": null,
                            "FirstDiffusion": "\/Date(1594166400000)\/",
                            "LastDiffusion": "\/Date(4087238399000)\/",
                            "MediaAccessRights": [],
                            "SharingType": -1,
                            "StartTime": "PT0S",
                            "ContentFileID": -1,
                            "ContentFileName": null,
                            "ContentFilePlayerShaCode": null,
                            "ContentFileStateID": 0,
                            "ContentPlayerFileName": null,
                            "Flag": "Transparent",
                            "Properties": {
                                "__type": "MEDIA_SVC_STREAM:#TeamCoV5.Models",
                                "Sound_Volume": 100,
                                "Type": "VIDEO",
                                "Url": "https:\/\/lci-hls-live-ssl.tf1.fr\/lci\/1\/hls\/live_2328.m3u8"
                            },
                            "RemoteMediaProperties": null,
                            "State": 0
                        }

*/ 
//# sourceMappingURL=IImpl_PlaylistController_Playlist_Mood_v5.js.map