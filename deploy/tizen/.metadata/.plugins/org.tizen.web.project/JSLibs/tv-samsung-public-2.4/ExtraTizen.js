/**
 * This callback interface defines the modifier callback which will be called on modification of URL is allowed by AdFramework.
 *
 * @super Object
 * @constructor
 * @return {AdFrameworkUrlModifierCallback}
 */
function AdFrameworkUrlModifierCallback() {};
AdFrameworkUrlModifierCallback.prototype = new Object();

/**
 * The interface defines what is instantiated by the WebApi object of Tizen-based Samsung TV Product API. There will be a adframework object that allows access to the functionality of the AdFramework API
 *
 * @super Object
 * @constructor
 * @return {AdFrameworkManagerObject}
 */
function AdFrameworkManagerObject() {};
AdFrameworkManagerObject.prototype = new Object();

/**
 * This interface provides methods to use the AdFramework functionalities.
 *
 * @super Object
 * @constructor
 * @return {AdFrameworkManager}
 */
function AdFrameworkManager() {};
AdFrameworkManager.prototype = new Object();

/**
 * This callback interface defines the callback listeners which will be called on particular events.
 *
 * @super Object
 * @constructor
 * @return {AdFrameworkCallback}
 */
function AdFrameworkCallback() {};
AdFrameworkCallback.prototype = new Object();

/**
 * It provides methods for adding/removing listeners for events to the application.
 *
 * @super Object
 * @constructor
 * @return {AdFrameworkEvents}
 */
function AdFrameworkEvents() {};
AdFrameworkEvents.prototype = new Object();

/**
 * It provides the AdFrameworkCore class methods (described in Web API Information sheet) to use the AdFramework functionalities like play,pause, stop etc.
 *
 * @super Object
 * @constructor
 * @return {AdFrameworkCore}
 */
function AdFrameworkCore() {};
AdFrameworkCore.prototype = new Object();

/**
 * It provides methods for setting/getting parameters and its values.
 *
 * @super Object
 * @constructor
 * @return {AdFrameworkConfig}
 */
function AdFrameworkConfig() {};
AdFrameworkConfig.prototype = new Object();

/**
 * It provides methods for time conversion from one format to another.
 *
 * @super Object
 * @constructor
 * @return {AdFrameworkUtils}
 */
function AdFrameworkUtils() {};
AdFrameworkUtils.prototype = new Object();

/**
 * It provides methods for showing/hiding buttons/screens.
 *
 * @super Object
 * @constructor
 * @return {AdFrameworkDisplayHandler}
 */
function AdFrameworkDisplayHandler() {};
AdFrameworkDisplayHandler.prototype = new Object();

/**
 * This callback method will be invoked when modification of URL is allowed from this framework. Return the modified URL string if you want to change from the passed original URL.
 *
 * @param {String} originalUrl
 * @type String
 * @memberOf AdFrameworkUrlModifierCallback
 * @returns {String}
 */
AdFrameworkUrlModifierCallback.prototype.onmodify = function(originalUrl){ var ret = new String(); return ret; };

/**
 * Namespace for AdFramework API.
 *
 * @type AdFrameworkManager
 */
AdFrameworkManagerObject.prototype.adframework = new AdFrameworkManager();

/**
 * It provides the AdFrameworkCore class methods (described in Web API Information sheet) to use the AdFramework functionalities like play,pause, stop etc.
 *
 * @type AdFrameworkCore
 */
AdFrameworkManager.prototype.core = new AdFrameworkCore();

/**
 * It provides methods for adding/removing listeners for events to the application.
 *
 * @type AdFrameworkEvents
 */
AdFrameworkManager.prototype.events = new AdFrameworkEvents();

/**
 * It provides methods for setting/getting parameters and its values.
 *
 * @type AdFrameworkConfig
 */
AdFrameworkManager.prototype.config = new AdFrameworkConfig();

/**
 * It provides methods for showing/hiding buttons/screens.
 *
 * @type AdFrameworkDisplayHandler
 */
AdFrameworkManager.prototype.displayhandler = new AdFrameworkDisplayHandler();

/**
 * It provides methods for time conversion from one format to another.
 *
 * @type AdFrameworkUtils
 */
AdFrameworkManager.prototype.utils = new AdFrameworkUtils();

/**
 * This callback method will be invoked when particular event is occurred.
 *
 * @param {any} param
 * @type void
 * @memberOf AdFrameworkCallback
 * @returns {void}
 */
AdFrameworkCallback.prototype.onevent = function(param){ return; };

/**
 * Listens for a event, and executes the specified function each time that event occurs
 *
 * @param {String} eventType
 * @param {AdFrameworkCallback} onevent
 * @param {Boolean} invokeOnce
 * @type void
 * @memberOf AdFrameworkEvents
 * @returns {void}
 */
AdFrameworkEvents.prototype.addListener = function(eventType, onevent, invokeOnce){ return; };

/**
 * Removes an event listener
 *
 * @param {String} eventType
 * @param {AdFrameworkCallback} onevent
 * @type void
 * @memberOf AdFrameworkEvents
 * @returns {void}
 */
AdFrameworkEvents.prototype.removeListener = function(eventType, onevent){ return; };

/**
 * API provided to application to create the TizneWRT instance, and initialize the adframework module.
 *
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.initialize = function(){ return; };

/**
 * API provided to application to Initialize the player with Content URL and creates adbreak list.
 *
 * @param {String} url
 * @param {String} params
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.open = function(url, params){ return; };

/**
 * API provided to application to listen the player events like BUFFERING_START, BUFFERING_COMPLETE.
 *
 * @param {String} key
 * @param {AdFrameworkCallback} onevent
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.addPlayerListener = function(key, onevent){ return; };

/**
 * API provided to application to Insert ads based on the specification in params. First parameter of this function will tell the URL of Ad/AdBreak which needs to be inserted. Second Parameter is an object having time as its only variable. This time will tell the player to start the ad/adbreak at this particular time. For example, timeToPlay { time: 5000 }
 *
 * @param {String} url
 * @param {Object} params
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.insertAdBreak = function(url, params){ return; };

/**
 * API provided to application to Start prerolls before playback of main content
 *
 * @param {Number} playhead
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.startPrerolls = function(playhead){ return; };

/**
 * API provided to application to change display area.
 *
 * @param {Number} x
 * @param {Number} Height
 * @param {Boolean} fullscreenMode
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.setDisplayArea = function(x, Height, fullscreenMode){ return; };

/**
 * API provided to application to stop the current playing content
 *
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.stop = function(){ return; };

/**
 * API provided to application to toggle current mute state.
 *
 * @type Boolean
 * @memberOf AdFrameworkCore
 * @returns {Boolean}
 */
AdFrameworkCore.prototype.toggleMute = function(){ var ret = new Boolean(); return ret; };

/**
 * API provided to application to Mute/Unmute the current content
 *
 * @param {Boolean} muteOn
 * @type Boolean
 * @memberOf AdFrameworkCore
 * @returns {Boolean}
 */
AdFrameworkCore.prototype.setMute = function(muteOn){ var ret = new Boolean(); return ret; };

/**
 * API provided to application to pause the current content
 *
 * @param {Boolean} isAdClick
 * @type Boolean
 * @memberOf AdFrameworkCore
 * @returns {Boolean}
 */
AdFrameworkCore.prototype.pause = function(isAdClick){ var ret = new Boolean(); return ret; };

/**
 * API provided to application to resume the current content
 *
 * @param {Boolean} isAdClick
 * @type Boolean
 * @memberOf AdFrameworkCore
 * @returns {Boolean}
 */
AdFrameworkCore.prototype.resume = function(isAdClick){ var ret = new Boolean(); return ret; };

/**
 * API provided to application to skip the current content forward
 *
 * @param {Number} seconds
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.jumpForward = function(seconds){ return; };

/**
 * API provided to application to skip backwards.
 *
 * @param {Number} seconds
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.jumpBackward = function(seconds){ return; };

/**
 * API provided to application to increase volume.
 *
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.volumeUp = function(){ return; };

/**
 * API provided to application to decrease volume.
 *
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.volumeDown = function(){ return; };

/**
 * API provided to application to get currently playing content's duration.
 *
 * @type Number
 * @memberOf AdFrameworkCore
 * @returns {Number}
 */
AdFrameworkCore.prototype.getDuration = function(){ var ret = new Number(); return ret; };

/**
 * This API function is provided to application to set default dimensions/coordinates for Fullscreen and Small screen window. (AdFramework stores the dimensions and display the fullscreen or small screen window according to the default saved dimensions)
 *
 * @param {object} config
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.appConfig = function(config){ return; };

/**
 * This API function is provided to application to handle the companion click. This function opens an Iframe to display the companion website link and send the "click" tracking event to ad server. Companion click event is received by application, so application can use this API function "handleCompanionAdViewElementClick" to show companion website content.
 *
 * @param {String} priorityCompanionResource
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.handleCompanionAdViewElementClick = function(priorityCompanionResource){ return; };

/**
 * API provided to application to handle Tracking events for Non Linear Ads
 *
 * @param {String} nonLinearAdID
 * @param {String} event
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.handleNonLinearTracking = function(nonLinearAdID, event){ return; };

/**
 * API provided to application to handle close for Non Linear Ad. When the NonLinear close button is clicked by user, this function is executed. Close the NonLinear creative and fire the close tracking event as well
 *
 * @param {String} nonLinearAdID
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.handleNonLinearClose = function(nonLinearAdID){ return; };

/**
 * This API function is provided to application to handle error cases. If application is unable to show the non-linear image etc, application inform the same to adframework by using this API function.
 *
 * @param {String} type
 * @param {String} adBreakID
 * @param {String} adID
 * @param {Number} code
 * @param {String} message
 * @param {String} adAssetURI
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.setApplicationError = function(type, adBreakID, adID, code, message, adAssetURI){ return; };

/**
 * API provided to application to add a function to execute each time before the main content starts.
 *
 * @param {AdFrameworkCallback} onevent
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.setBeforeContentStartListener = function(onevent){ return; };

/**
 * API provided to application to add a function to execute each time after the main content starts.
 *
 * @param {AdFrameworkCallback} onevent
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.setAfterContentStartListener = function(onevent){ return; };

/**
 * API provided to application to add a function to execute each time before a linear ad starts.
 *
 * @param {AdFrameworkCallback} onevent
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.setBeforeLinearAdStartListener = function(onevent){ return; };

/**
 * API provided to application to add a function to execute each time after a linear ad starts.
 *
 * @param {AdFrameworkCallback} onevent
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.setAfterLinearAdStartListener = function(onevent){ return; };

/**
 * API provided to application to set the playhead time for the maincontent from where it should resume.
 *
 * @param {Number} ms
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.setContentPlayheadTime = function(ms){ return; };

/**
 * API provided to application to set the offset by which the main content playhead will be skipped by N seconds.
 *
 * @param {Number} ms
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.setOffsetContentPlayheadTime = function(ms){ return; };

/**
 * API provided to application to disable insertion of adbreaks.
 *
 * @param {Boolean} allowCurrentAdbreakToFinish
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.disableAdInsertion = function(allowCurrentAdbreakToFinish){ return; };

/**
 * API provided to application to enable insertion of adbreaks.
 *
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.enableAdInsertion = function(){ return; };

/**
 * API provided to application to modify the main content's url whenever the next main content will be switched from ad state.
 *
 * @param {String} newURL
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.changeContentUrl = function(newURL){ return; };

/**
 * API provided to application to modify linear ad url at runtime.
 *
 * @param {AdFrameworkUrlModifierCallback} onmodify
 * @type void
 * @memberOf AdFrameworkCore
 * @returns {void}
 */
AdFrameworkCore.prototype.setLinearAdUrlModifier = function(onmodify){ return; };

/**
 * API provided to application to get current playing content's position.
 *
 * @type Number
 * @memberOf AdFrameworkCore
 * @returns {Number}
 */
AdFrameworkCore.prototype.getContentPlayheadPosition = function(){ var ret = new Number(); return ret; };

/**
 * Sets the value of a configuration parameter.
 *
 * @param {String} key
 * @param {Number} value
 * @type void
 * @memberOf AdFrameworkConfig
 * @returns {void}
 */
AdFrameworkConfig.prototype.set = function(key, value){ return; };

/**
 * Gets the value of a configuration parameter.
 *
 * @param {String} key
 * @type Number
 * @memberOf AdFrameworkConfig
 * @returns {Number}
 */
AdFrameworkConfig.prototype.get = function(key){ var ret = new Number(); return ret; };

/**
 * This API function converts milliseconds to "HH:MM:SS.mmm". AdFramework may return the time in milliseconds,Application can use this function to show the timing in format like "HH:MM:SS.mmm".
 *
 * @param {Number} ms
 * @type String
 * @memberOf AdFrameworkUtils
 * @returns {String}
 */
AdFrameworkUtils.prototype.getTimeString = function(ms){ var ret = new String(); return ret; };

/**
 * This API function is used to initialize the display members like default skip UI button, Iframe etc.
 *
 * @type void
 * @memberOf AdFrameworkDisplayHandler
 * @returns {void}
 */
AdFrameworkDisplayHandler.prototype.init = function(){ return; };

/**
 * API provided for application to hide skip button.
 *
 * @type void
 * @memberOf AdFrameworkDisplayHandler
 * @returns {void}
 */
AdFrameworkDisplayHandler.prototype.hideSkipButton = function(){ return; };

/**
 * Namespace for AdFramework API.
 *
 * @type AdFrameworkManager
 */
WebApi.prototype.adframework = new AdFrameworkManager();

/**
 * This interface provides methods to use the AppCommon functionalities.
 *
 * @super Object
 * @constructor
 * @return {AppCommonManager}
 */
function AppCommonManager() {};
AppCommonManager.prototype = new Object();

/**
 * This interface defines the state of screen saver.
 *
 * @super Object
 * @constructor
 * @return {AppCommonScreenSaverState}
 */
function AppCommonScreenSaverState() {};
AppCommonScreenSaverState.prototype = new Object();

/**
 * The interface defines what is instantiated by the WebApi object of Tizen-based Samsung TV Product API. There will be a webapis.appcommon object that allows access to the functionality of the AppCommon API
 *
 * @super Object
 * @constructor
 * @return {AppCommonManagerObject}
 */
function AppCommonManagerObject() {};
AppCommonManagerObject.prototype = new Object();

/**
 * This attribute defines the state of screen saver.
 *
 * @type AppCommonScreenSaverState
 */
AppCommonManager.prototype.AppCommonScreenSaverState = new AppCommonScreenSaverState();

/**
 * This method get the plugin's version number.
 *
 * @type String
 * @memberOf AppCommonManager
 * @returns {String}
 */
AppCommonManager.prototype.getVersion = function(){ var ret = new String(); return ret; };

/**
 * This method set screen saver according to ScreenSaver api.
 *
 * @param {Number} state
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf AppCommonManager
 * @returns {void}
 */
AppCommonManager.prototype.setScreenSaver = function(state, onsuccess, onerror){ return; };

/**
 * screen saver off
 *
 * @type Number
 */
AppCommonScreenSaverState.SCREEN_SAVER_OFF = new Number();

/**
 * screen saver on
 *
 * @type Number
 */
AppCommonScreenSaverState.SCREEN_SAVER_ON = new Number();

/**
 * Namespace for AppCommon API.
 *
 * @type AppCommonManager
 */
AppCommonManagerObject.prototype.appcommon = new AppCommonManager();

/**
 * Namespace for AppCommon API.
 *
 * @type AppCommonManager
 */
WebApi.prototype.appcommon = new AppCommonManager();

/**
 * This interface defines the digital mode
 *
 * @super Object
 * @constructor
 * @return {AvInfoDigitalCompMode}
 */
function AvInfoDigitalCompMode() {};
AvInfoDigitalCompMode.prototype = new Object();

/**
 * This interface provides methods to use the AvInfo functionalities.
 *
 * @super Object
 * @constructor
 * @return {AvInfoManager}
 */
function AvInfoManager() {};
AvInfoManager.prototype = new Object();

/**
 * This interface defines the ScreenMode
 *
 * @super Object
 * @constructor
 * @return {AvInfoScreenMode}
 */
function AvInfoScreenMode() {};
AvInfoScreenMode.prototype = new Object();

/**
 * The interface defines what is instantiated by the WebApi object of Tizen-based Samsung TV Product API. There will be a webapis.avinfo object that allows access to the functionality of the AvInfo API
 *
 * @super Object
 * @constructor
 * @return {AvInfoManagerObject}
 */
function AvInfoManagerObject() {};
AvInfoManagerObject.prototype = new Object();

/**
 * line mode
 *
 * @type Number
 */
AvInfoDigitalCompMode.DOLBY_DIGITAL_COMP_MODE_LINE = new Number();

/**
 * rf mode
 *
 * @type Number
 */
AvInfoDigitalCompMode.DOLBY_DIGITAL_COMP_MODE_RF = new Number();

/**
 * This method get the plugin's version number.
 *
 * @type String
 * @memberOf AvInfoManager
 * @returns {String}
 */
AvInfoManager.prototype.getVersion = function(){ var ret = new String(); return ret; };

/**
 * This method set widescreen mode.
 *
 * @param {Number} desktopId
 * @param {Number} screenMode
 * @type Boolean
 * @memberOf AvInfoManager
 * @returns {Boolean}
 */
AvInfoManager.prototype.setWideScreenMode = function(desktopId, screenMode){ var ret = new Boolean(); return ret; };

/**
 * This method get dolby digital component mode.
 *
 * @type Number
 * @memberOf AvInfoManager
 * @returns {Number}
 */
AvInfoManager.prototype.getDolbyDigitalCompMode = function(){ var ret = new Number(); return ret; };

/**
 * This method is to check whether the HDR is supported or not.
 *
 * @type Boolean
 * @memberOf AvInfoManager
 * @returns {Boolean}
 */
AvInfoManager.prototype.isHdrTvSupport = function(){ var ret = new Boolean(); return ret; };

/**
 * widescreen (16:9)
 *
 * @type Number
 */
AvInfoScreenMode.SCREEN_MODE_WIDESCREEN = new Number();

/**
 * super widescreen (21:9)
 *
 * @type Number
 */
AvInfoScreenMode.SCREEN_MODE_SUPERWIDESCREEN = new Number();

/**
 * panorama
 *
 * @type Number
 */
AvInfoScreenMode.SCREEN_MODE_PANORAMA = new Number();

/**
 * Namespace for AvInfo API.
 *
 * @type AvInfoManager
 */
AvInfoManagerObject.prototype.avinfo = new AvInfoManager();

/**
 * Namespace for AvInfo API.
 *
 * @type AvInfoManager
 */
WebApi.prototype.avinfo = new AvInfoManager();

/**
 * The interface defines what is instantiated by the WebApi object of Tizen-based Samsung TV Product API. There will be a webapis object that allows access to the functionality of the AVPlay API
 *
 * @super Object
 * @constructor
 * @return {AVPlayManagerObject}
 */
function AVPlayManagerObject() {};
AVPlayManagerObject.prototype = new Object();

/**
 * This callback interface defines subscriptions for any notification for sound Analysis.
 *
 * @super Object
 * @constructor
 * @return {AVPlaySoundAnalysisCallback}
 */
function AVPlaySoundAnalysisCallback() {};
AVPlaySoundAnalysisCallback.prototype = new Object();

/**
 * This interface provides methods to use the AVPlay functionalities.
 *
 * @super Object
 * @constructor
 * @return {AVPlayManager}
 */
function AVPlayManager() {};
AVPlayManager.prototype = new Object();

/**
 * This callback interface defines subscriptions for any notification on the buffering, playback.
 *
 * @super Object
 * @constructor
 * @return {AVPlayPlaybackCallback}
 */
function AVPlayPlaybackCallback() {};
AVPlayPlaybackCallback.prototype = new Object();

/**
 * Namespace for AVPlay API.
 *
 * @type AVPlayManager
 */
AVPlayManagerObject.prototype.avplay = new AVPlayManager();

/**
 * This method gets called aysnc if any exception occurs in sound analysis.
 *
 * @type BasePlatformException
 * @memberOf AVPlaySoundAnalysisCallback
 * @returns {BasePlatformException}
 */
AVPlaySoundAnalysisCallback.prototype.ongetexception = function(){ var ret = new BasePlatformException(); return ret; };

/**
 * This method specifies subscriptions for any notification for sound Analysis.
 *
 * @param {BasePlatformException} err
 * @type void
 * @memberOf AVPlaySoundAnalysisCallback
 * @returns {void}
 */
AVPlaySoundAnalysisCallback.prototype.onsetexception = function(err){ return; };

/**
 * This method returns the Band Array[32] having sound effect information.
 *
 * @type Number
 * @memberOf AVPlaySoundAnalysisCallback
 * @returns {Number}
 */
AVPlaySoundAnalysisCallback.prototype.ongetbandsarray = function(){ var ret = new Number(); return ret; };

/**
 * This method instantiates the player object and take input url as input paramter.
 *
 * @param {String} url
 * @type void
 * @memberOf AVPlayManager
 * @returns {void}
 */
AVPlayManager.prototype.open = function(url){ return; };

/**
 * This method destroys the avplay object.
 *
 * @type void
 * @memberOf AVPlayManager
 * @returns {void}
 */
AVPlayManager.prototype.close = function(){ return; };

/**
 * This method prepare the media player for playback. Player must have been created before this with a valid URI.
 *
 * @type void
 * @memberOf AVPlayManager
 * @returns {void}
 */
AVPlayManager.prototype.prepare = function(){ return; };

/**
 * This method prepares the media player for playback, asynchronously. This API, would prepare the MM core module asynchronously. It means internal media elements will change the state asynchronously.
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf AVPlayManager
 * @returns {void}
 */
AVPlayManager.prototype.prepareAsync = function(successCallback, errorCallback){ return; };

/**
 * This method sets the display area for playing video content on TV screen. It should be called for showing video after calling open method. When all the value set as rect are set as 0, the Video Screen in the App disappears. Hide Function replacement.
 *
 * @param {Number} x
 * @param {Number} y
 * @param {Number} width
 * @param {Number} height
 * @type void
 * @memberOf AVPlayManager
 * @returns {void}
 */
AVPlayManager.prototype.setDisplayRect = function(x, y, width, height){ return; };

/**
 * This method starts the playback of the stream.
 *
 * @type void
 * @memberOf AVPlayManager
 * @returns {void}
 */
AVPlayManager.prototype.play = function(){ return; };

/**
 * This method used for the seeking. If you give the seconds value, then it plays by jumping to the position desired to play. It fails when you input the value outside the total Playback Time scope
 *
 * @param {Number} milliseconds
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf AVPlayManager
 * @returns {void}
 */
AVPlayManager.prototype.seekTo = function(milliseconds, successCallback, errorCallback){ return; };

/**
 * This method stops the player and hence any video currently being played. Also this function should be called after the video completes playing.
 *
 * @type void
 * @memberOf AVPlayManager
 * @returns {void}
 */
AVPlayManager.prototype.stop = function(){ return; };

/**
 * This method return the current state of underlying player which is associated with AVPLAY object.
 *
 * @type AVPlayPlayerState
 * @memberOf AVPlayManager
 * @returns {AVPlayPlayerState}
 */
AVPlayManager.prototype.getState = function(){ var ret = new AVPlayPlayerState(); return ret; };

/**
 * This method pauses the playback.
 *
 * @type void
 * @memberOf AVPlayManager
 * @returns {void}
 */
AVPlayManager.prototype.pause = function(){ return; };

/**
 * This method forwards the currently played video by the specified number of milliseconds. While playing maintaining the State mode, it plays again after the jumpfoward, and in the pause, it gets paused after the jumpfoward.
 *
 * @param {Number} milliseconds
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf AVPlayManager
 * @returns {void}
 */
AVPlayManager.prototype.jumpForward = function(milliseconds, successCallback, errorCallback){ return; };

/**
 * This method rewinds the currently played video by the specified number of milliseconds.
 *
 * @param {Number} milliseconds
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf AVPlayManager
 * @returns {void}
 */
AVPlayManager.prototype.jumpBackward = function(milliseconds, successCallback, errorCallback){ return; };

/**
 * This method gets the duration time in milliseconds.
 *
 * @type Number
 * @memberOf AVPlayManager
 * @returns {Number}
 */
AVPlayManager.prototype.getDuration = function(){ var ret = new Number(); return ret; };

/**
 * This method returns the current play time in milliseconds.
 *
 * @type Number
 * @memberOf AVPlayManager
 * @returns {Number}
 */
AVPlayManager.prototype.getCurrentTime = function(){ var ret = new Number(); return ret; };

/**
 * This method sets the current playback speed. This value can be positive or negative. If the value is set to negative, the video starts playing in the reverse direction.
 *
 * @param {Number} playbackSpeed
 * @type void
 * @memberOf AVPlayManager
 * @returns {void}
 */
AVPlayManager.prototype.setSpeed = function(playbackSpeed){ return; };

/**
 * This method is used in order to obtain the Buffering, Playback Time, Playback mode, DRM mode information etc., the Callback Function is registered. When the relevant Event is occurred, the relevant Callback Function gets called asynchronouly, Invoked during playback.
 *
 * @param {AVPlayPlaybackCallback} playbackCallback
 * @type void
 * @memberOf AVPlayManager
 * @returns {void}
 */
AVPlayManager.prototype.setListener = function(playbackCallback){ return; };

/**
 * This method sets the streaming bufferring time of player. When the desired amount of Buffering completes before the time set as milliseconds, the success returns. if it is the time set in milliseconds even if the desired amount of Buffering is not done.
 *
 * @param {Number} initialTimeOutInSec
 * @type void
 * @memberOf AVPlayManager
 * @returns {void}
 */
AVPlayManager.prototype.setTimeoutForBuffering = function(initialTimeOutInSec){ return; };

/**
 * This method gets the analysis result of the playing Audio's Spectrum is called in a cycle of 30ms by using the CallbackFunction. It can be used in the Equalizer effect video or in the App for PartyTV. Bands return in 31 Arrays, and among the Bands Array, the Bands[14]~Bands[18] value is the area that occupies the Sound's effect most.
 *
 * @param {AVPlaySoundAnalysisCallback} soundAnalysisCallback
 * @type void
 * @memberOf AVPlayManager
 * @returns {void}
 */
AVPlayManager.prototype.setSoundAnalysisListener = function(soundAnalysisCallback){ return; };

/**
 * This method unregister the soundAnalysisListener callback.
 *
 * @type void
 * @memberOf AVPlayManager
 * @returns {void}
 */
AVPlayManager.prototype.unsetSoundAnalysisListener = function(){ return; };

/**
 * This method is used in the case of Stream with Subtitle when you want to show or hide the Subtitle. In the case of ExternalSubtitle, when the setExternalSubtitlePath Function is called, it is shown by default even if the setSilentSubtitle is not called
 *
 * @param {Boolean} onoff
 * @type void
 * @memberOf AVPlayManager
 * @returns {void}
 */
AVPlayManager.prototype.setSilentSubtitle = function(onoff){ return; };

/**
 * This method is used in the case of Stream that uses External Subtitle, you should put the Local URI having Subtitle File. In the case of URL, you should put the Local URL after downloading it by using the DOWNLOAD WebApi
 *
 * @param {String} pFilePath
 * @type void
 * @memberOf AVPlayManager
 * @returns {void}
 */
AVPlayManager.prototype.setExternalSubtitlePath = function(pFilePath){ return; };

/**
 * This method is used for matching the A/V and sync when you play the ExternalSubtitle.
 *
 * @param {Number} position
 * @type void
 * @memberOf AVPlayManager
 * @returns {void}
 */
AVPlayManager.prototype.setSubtitlePosition = function(position){ return; };

/**
 * This method sets the Video Screen’s Mode within the given DISPLAY area.
 *
 * @param {AVPlayDisplayMode} displayMode
 * @type void
 * @memberOf AVPlayManager
 * @returns {void}
 */
AVPlayManager.prototype.setDisplayMethod = function(displayMode){ return; };

/**
 * This method is used in the case of Multi Audio/Subtitle and when you want to change the Audio& Subtitle while playing. In the case of Video, it can’t be used.
 *
 * @param {AVPlayStreamType} trackType
 * @param {Number} trackIndex
 * @type void
 * @memberOf AVPlayManager
 * @returns {void}
 */
AVPlayManager.prototype.setSelectTrack = function(trackType, trackIndex){ return; };

/**
 * This method gets the currently playing Stream’s Video, Audio, Subtitle information. It informs that some Stream is playing.
 *
 * @type AVPlayStreamInfo
 * @memberOf AVPlayManager
 * @returns {AVPlayStreamInfo}
 */
AVPlayManager.prototype.getCurrentStreamInfo = function(){ var ret = new AVPlayStreamInfo(); return ret; };

/**
 * This method gets the currently playing Stream’s information.
 *
 * @type array
 * @memberOf AVPlayManager
 * @returns {array}
 */
AVPlayManager.prototype.getTotalTrackInfo = function(){ var ret = new array(); return ret; };

/**
 * This method sets the value for specific Feature in the HTTP, MMS & Streaming Engine (Smooth Streaming, HLS, DASH, DivX Plus Streaming, Widevine). When special setting is required in Streaming Engine for the Start Bitrate setting &specific CP, the CUSTOM_MESSAGE Property can be set
 *
 * @param {AVPlayStreamingPropertyType} propertyType
 * @param {Any} propparam
 * @type void
 * @memberOf AVPlayManager
 * @returns {void}
 */
AVPlayManager.prototype.setStreamingProperty = function(propertyType, propparam){ return; };

/**
 * This method gets the Specific Property value is obtained through the Streaming Engine (Smooth Streaming, HLS, DASH, DivX Plus Streaming, Widevine).
 *
 * @param {AVPlayStreamingPropertyType} propertyType
 * @type Any
 * @memberOf AVPlayManager
 * @returns {Any}
 */
AVPlayManager.prototype.getStreamingProperty = function(propertyType){ var ret = new Any(); return ret; };

/**
 * This method gets the version of avplay.
 *
 * @type String
 * @memberOf AVPlayManager
 * @returns {String}
 */
AVPlayManager.prototype.getVersion = function(){ var ret = new String(); return ret; };

/**
 * This method gets called async while the buffering starts.
 *
 * @type void
 * @memberOf AVPlayPlaybackCallback
 * @returns {void}
 */
AVPlayPlaybackCallback.prototype.onbufferingstart = function(){ return; };

/**
 * This method gets called async while the buffering is in progress.
 *
 * @param {Number} percent
 * @type void
 * @memberOf AVPlayPlaybackCallback
 * @returns {void}
 */
AVPlayPlaybackCallback.prototype.onbufferingprogress = function(percent){ return; };

/**
 * This method gets called async when the buffering gets completed.
 *
 * @type void
 * @memberOf AVPlayPlaybackCallback
 * @returns {void}
 */
AVPlayPlaybackCallback.prototype.onbufferingcomplete = function(){ return; };

/**
 * This method gets called async to provide the current playback time.
 *
 * @param {Number} currentTime
 * @type void
 * @memberOf AVPlayPlaybackCallback
 * @returns {void}
 */
AVPlayPlaybackCallback.prototype.oncurrentplaytime = function(currentTime){ return; };

/**
 * This method gets called async while the playback gets completed.
 *
 * @type void
 * @memberOf AVPlayPlaybackCallback
 * @returns {void}
 */
AVPlayPlaybackCallback.prototype.onstreamcompleted = function(){ return; };

/**
 * This method gets called async when some kind of event (other event) received from the player.
 *
 * @param {Number} eventid
 * @param {String} data
 * @type void
 * @memberOf AVPlayPlaybackCallback
 * @returns {void}
 */
AVPlayPlaybackCallback.prototype.onevent = function(eventid, data){ return; };

/**
 * This method gets called when error event received from the player.
 *
 * @param {Number} eventid
 * @type void
 * @memberOf AVPlayPlaybackCallback
 * @returns {void}
 */
AVPlayPlaybackCallback.prototype.onerror = function(eventid){ return; };

/**
 * This method gets aysnc called when the drm information notified from the player.
 *
 * @param {AVPlayDrmType} type
 * @param {Number} eventid
 * @type void
 * @memberOf AVPlayPlaybackCallback
 * @returns {void}
 */
AVPlayPlaybackCallback.prototype.ondrmevent = function(type, eventid){ return; };

/**
 * This method gets called async when the subtitle is updated.
 *
 * @param {Number} duration
 * @param {String} subtitles
 * @param {Number} type
 * @param {Number} attriCount
 * @param {AVPlaySubtitleAttribute} attributes
 * @type void
 * @memberOf AVPlayPlaybackCallback
 * @returns {void}
 */
AVPlayPlaybackCallback.prototype.onsubtitlechange = function(duration, subtitles, type, attriCount, attributes){ return; };

/**
 * Namespace for AVPlay API.
 *
 * @type AVPlayManager
 */
WebApi.prototype.avplay = new AVPlayManager();

/**
 * The interface defines what is instantiated by the WebApi object of Tizen-based Samsung TV Product API. There will be a webapis.drminfo object that allows access to the functionality of the DrmInfo API
 *
 * @super Object
 * @constructor
 * @return {DrmInfoManagerObject}
 */
function DrmInfoManagerObject() {};
DrmInfoManagerObject.prototype = new Object();

/**
 * This interface provides methods to use the DrmInfo functionalities.
 *
 * @super Object
 * @constructor
 * @return {DrmInfoManager}
 */
function DrmInfoManager() {};
DrmInfoManager.prototype = new Object();

/**
 * Namespace for DrmInfo API.
 *
 * @type DrmInfoManager
 */
DrmInfoManagerObject.prototype.drminfo = new DrmInfoManager();

/**
 * This method get the plugin's version number.
 *
 * @type String
 * @memberOf DrmInfoManager
 * @returns {String}
 */
DrmInfoManager.prototype.getVersion = function(){ var ret = new String(); return ret; };

/**
 * This method get the ESN data.
 *
 * @param {String} compName
 * @type String
 * @memberOf DrmInfoManager
 * @returns {String}
 */
DrmInfoManager.prototype.getEsn = function(compName){ var ret = new String(); return ret; };

/**
 * This method get the SDI ID. SDI(Samsung Device Identifier) ID is used by a few CPs to distinguish devices instead of DUID.
 *
 * @type String
 * @memberOf DrmInfoManager
 * @returns {String}
 */
DrmInfoManager.prototype.getSdiId = function(){ var ret = new String(); return ret; };

/**
 * Namespace for DrmInfo API.
 *
 * @type DrmInfoManager
 */
WebApi.prototype.drminfo = new DrmInfoManager();

/**
 * This interface defines constants that indicates the value of effect value.
 *
 * @super Object
 * @constructor
 * @return {MicrophoneEffectValue}
 */
function MicrophoneEffectValue() {};
MicrophoneEffectValue.prototype = new Object();

/**
 * This interface provides methods to use the Microphone functionalities.
 *
 * @super Object
 * @constructor
 * @return {MicrophoneManager}
 */
function MicrophoneManager() {};
MicrophoneManager.prototype = new Object();

/**
 * This interface defines constants that indicates the value of device event type.
 *
 * @super Object
 * @constructor
 * @return {MicrophoneConnectEventType}
 */
function MicrophoneConnectEventType() {};
MicrophoneConnectEventType.prototype = new Object();

/**
 * This interface defines constants that indicates the value of sample rate value.
 *
 * @super Object
 * @constructor
 * @return {MicrophoneSampleRateValue}
 */
function MicrophoneSampleRateValue() {};
MicrophoneSampleRateValue.prototype = new Object();

/**
 * This interface defines the format of microphone device.
 *
 * @super Object
 * @constructor
 * @return {MicrophoneDeviceAudioFormat}
 */
function MicrophoneDeviceAudioFormat() {};
MicrophoneDeviceAudioFormat.prototype = new Object();

/**
 * This interface provides methods to use the Microphone device functionalities.
 *
 * @super Object
 * @constructor
 * @return {MicrophoneDevice}
 */
function MicrophoneDevice() {};
MicrophoneDevice.prototype = new Object();

/**
 * This callback interface defines listener for get the return devices.
 *
 * @super Object
 * @constructor
 * @return {MicrophoneDeviceArraySuccessCallback}
 */
function MicrophoneDeviceArraySuccessCallback() {};
MicrophoneDeviceArraySuccessCallback.prototype = new Object();

/**
 * This interface defines constants that indicates the value of state value.
 *
 * @super Object
 * @constructor
 * @return {MicrophoneStateValue}
 */
function MicrophoneStateValue() {};
MicrophoneStateValue.prototype = new Object();

/**
 * This interface defines error of  event.
 *
 * @super Object
 * @constructor
 * @return {MicrophoneConnectEvent}
 */
function MicrophoneConnectEvent() {};
MicrophoneConnectEvent.prototype = new Object();

/**
 * This interface defines constants that indicates the value of state value.
 *
 * @super Object
 * @constructor
 * @return {MicrophoneAudioinputEvent}
 */
function MicrophoneAudioinputEvent() {};
MicrophoneAudioinputEvent.prototype = new Object();

/**
 * This callback interface defines listener for notification of changes in the microphonemanager
 *
 * @super Object
 * @constructor
 * @return {MicrophoneConnectCallback}
 */
function MicrophoneConnectCallback() {};
MicrophoneConnectCallback.prototype = new Object();

/**
 * The interface defines what is instantiated by the WebApi object of Tizen-based Samsung TV Product API. There will be a webapis.microphone object that allows access to the functionality of the Microphone API
 *
 * @super Object
 * @constructor
 * @return {MicrophoneManagerObject}
 */
function MicrophoneManagerObject() {};
MicrophoneManagerObject.prototype = new Object();

/**
 * This callback interface defines listener for get the event of devices.
 *
 * @super Object
 * @constructor
 * @return {MicrophoneEventCallback}
 */
function MicrophoneEventCallback() {};
MicrophoneEventCallback.prototype = new Object();

/**
 * no effect
 *
 * @type Number
 */
MicrophoneEffectValue.MICROPHONE_EFFECT_NONE = new Number();

/**
 * reverb effect
 *
 * @type Number
 */
MicrophoneEffectValue.MICROPHONE_EFFECT_REVERB = new Number();

/**
 * filter effect
 *
 * @type Number
 */
MicrophoneEffectValue.MICROPHONE_EFFECT_FILTER = new Number();

/**
 * This method get the plugin's version number.
 *
 * @type String
 * @memberOf MicrophoneManager
 * @returns {String}
 */
MicrophoneManager.prototype.getVersion = function(){ var ret = new String(); return ret; };

/**
 * This method get whether connect the microphone
 *
 * @param {String} uid
 * @type Boolean
 * @memberOf MicrophoneManager
 * @returns {Boolean}
 */
MicrophoneManager.prototype.isConnected = function(uid){ var ret = new Boolean(); return ret; };

/**
 * Get all the connected microphones
 *
 * @param {MicrophoneDeviceArraySuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf MicrophoneManager
 * @returns {void}
 */
MicrophoneManager.prototype.getMicrophones = function(onsuccess, onerror){ return; };

/**
 * This method add the listener callback for the microphone change.
 *
 * @param {MicrophoneConnectCallback} listener
 * @type Number
 * @memberOf MicrophoneManager
 * @returns {Number}
 */
MicrophoneManager.prototype.addMicrophoneConnectListener = function(listener){ var ret = new Number(); return ret; };

/**
 * This method remove the listener which was added by addMicrophoneConnectListener
 *
 * @param {Number} listenerId
 * @type void
 * @memberOf MicrophoneManager
 * @returns {void}
 */
MicrophoneManager.prototype.removeMicrophoneConnectListener = function(listenerId){ return; };

/**
 * device connect
 *
 * @type Number
 */
MicrophoneConnectEventType.EVENT_DEVICE_CONNECT = new Number();

/**
 * device disconnect
 *
 * @type Number
 */
MicrophoneConnectEventType.EVENT_DEVICE_DISCONNECT = new Number();

/**
 * sample rate = 48k. CD quality.Default format of Audio Input Device
 *
 * @type Number
 */
MicrophoneSampleRateValue.MICROPHONE_SAMPLE_RATE_48000 = new Number();

/**
 * 44100rate
 *
 * @type Number
 */
MicrophoneSampleRateValue.MICROPHONE_SAMPLE_RATE_44100 = new Number();

/**
 * 32000rate
 *
 * @type Number
 */
MicrophoneSampleRateValue.MICROPHONE_SAMPLE_RATE_32000 = new Number();

/**
 * 16000rate
 *
 * @type Number
 */
MicrophoneSampleRateValue.MICROPHONE_SAMPLE_RATE_16000 = new Number();

/**
 * 8000rate
 *
 * @type Number
 */
MicrophoneSampleRateValue.MICROPHONE_SAMPLE_RATE_8000 = new Number();

/**
 * little endian
 *
 * @type Number
 */
MicrophoneDeviceAudioFormat.MICROPHONE_FORMAT_SIGNED_16BIT_LITTLE_ENDIAN = new Number();

/**
 * big endian
 *
 * @type Number
 */
MicrophoneDeviceAudioFormat.MICROPHONE_FORMAT_SIGNED_16BIT_BIG_ENDIAN_FORMAT = new Number();

/**
 * This attribute defines uid of device
 *
 * @type String
 */
MicrophoneDevice.prototype.uid = new String();

/**
 * This attribute defines name of device
 *
 * @type String
 */
MicrophoneDevice.prototype.name = new String();

/**
 * This attribute defines  device id of microphone
 *
 * @type Number
 */
MicrophoneDevice.prototype.deviceId = new Number();

/**
 * This attribute defines device type of microphone
 *
 * @type Number
 */
MicrophoneDevice.prototype.deviceType = new Number();

/**
 * This method use to get uniqueId
 *
 * @type String
 * @memberOf MicrophoneDevice
 * @returns {String}
 */
MicrophoneDevice.prototype.getUniqueId = function(){ var ret = new String(); return ret; };

/**
 * This method use to get deviceId
 *
 * @type Number
 * @memberOf MicrophoneDevice
 * @returns {Number}
 */
MicrophoneDevice.prototype.getDeviceId = function(){ var ret = new Number(); return ret; };

/**
 * This method use to get device Name
 *
 * @type String
 * @memberOf MicrophoneDevice
 * @returns {String}
 */
MicrophoneDevice.prototype.getName = function(){ var ret = new String(); return ret; };

/**
 * This method use to enable device
 *
 * @param {Number} format
 * @param {Number} sampleRate
 * @type Boolean
 * @memberOf MicrophoneDevice
 * @returns {Boolean}
 */
MicrophoneDevice.prototype.enableDevice = function(format, sampleRate){ var ret = new Boolean(); return ret; };

/**
 * This method use to disable device
 *
 * @type Boolean
 * @memberOf MicrophoneDevice
 * @returns {Boolean}
 */
MicrophoneDevice.prototype.disableDevice = function(){ var ret = new Boolean(); return ret; };

/**
 * This method use to stop
 *
 * @param {Number} state
 * @type Boolean
 * @memberOf MicrophoneDevice
 * @returns {Boolean}
 */
MicrophoneDevice.prototype.stop = function(state){ var ret = new Boolean(); return ret; };

/**
 * This method use to play
 *
 * @param {Boolean} lockState
 * @type Boolean
 * @memberOf MicrophoneDevice
 * @returns {Boolean}
 */
MicrophoneDevice.prototype.play = function(lockState){ var ret = new Boolean(); return ret; };

/**
 * This method use to get volume level
 *
 * @type Number
 * @memberOf MicrophoneDevice
 * @returns {Number}
 */
MicrophoneDevice.prototype.getVolumeLevel = function(){ var ret = new Number(); return ret; };

/**
 * This method use to set volume level
 *
 * @param {Number} volume
 * @type Boolean
 * @memberOf MicrophoneDevice
 * @returns {Boolean}
 */
MicrophoneDevice.prototype.setVolumeLevel = function(volume){ var ret = new Boolean(); return ret; };

/**
 * This method use to get supported effect
 *
 * @type Number
 * @memberOf MicrophoneDevice
 * @returns {Number}
 */
MicrophoneDevice.prototype.getSupportedEffect = function(){ var ret = new Number(); return ret; };

/**
 * This method use to get enabled effect
 *
 * @type Number
 * @memberOf MicrophoneDevice
 * @returns {Number}
 */
MicrophoneDevice.prototype.getEnabledEffect = function(){ var ret = new Number(); return ret; };

/**
 * This method use to set effect
 *
 * @param {Number} effect
 * @param {Boolean} enable
 * @param {Number} tempo
 * @param {Number} pitch
 * @param {Number} rate
 * @param {Number} threshold
 * @param {Number} noduration
 * @type Boolean
 * @memberOf MicrophoneDevice
 * @returns {Boolean}
 */
MicrophoneDevice.prototype.setEffect = function(effect, enable, tempo, pitch, rate, threshold, noduration){ var ret = new Boolean(); return ret; };

/**
 * This method use to get filter volume
 *
 * @type Number
 * @memberOf MicrophoneDevice
 * @returns {Number}
 */
MicrophoneDevice.prototype.getFilterVolume = function(){ var ret = new Number(); return ret; };

/**
 * This method add the listener callback for the microphone event change.
 *
 * @param {MicrophoneEventCallback} listener
 * @type Number
 * @memberOf MicrophoneDevice
 * @returns {Number}
 */
MicrophoneDevice.prototype.addMicrophoneEventListener = function(listener){ var ret = new Number(); return ret; };

/**
 * This method remove the listener which was added by addMicrophoneEventListener
 *
 * @param {Number} listenerId
 * @type void
 * @memberOf MicrophoneDevice
 * @returns {void}
 */
MicrophoneDevice.prototype.removeMicrophoneEventListener = function(listenerId){ return; };

/**
 * This callback interface defines listener for get the return devices.
 *
 * @param {MicrophoneDevice} devices
 * @type void
 * @memberOf MicrophoneDeviceArraySuccessCallback
 * @returns {void}
 */
MicrophoneDeviceArraySuccessCallback.prototype.onsuccess = function(devices){ return; };

/**
 * stop status
 *
 * @type Number
 */
MicrophoneStateValue.MICROPHONE_STATUS_STOP = new Number();

/**
 * play status
 *
 * @type Number
 */
MicrophoneStateValue.MICROPHONE_STATUS_PLAY = new Number();

/**
 * record status
 *
 * @type Number
 */
MicrophoneStateValue.MICROPHONE_STATUS_RECORD = new Number();

/**
 * filter status
 *
 * @type Number
 */
MicrophoneStateValue.MICROPHONE_STATUS_FILTER = new Number();

/**
 * This attribute defines uid of microphone
 *
 * @type String
 */
MicrophoneConnectEvent.prototype.uid = new String();

/**
 * This attribute defines name of microphone
 *
 * @type String
 */
MicrophoneConnectEvent.prototype.name = new String();

/**
 * This attribute defines  event type of microphone
 *
 * @type Number
 */
MicrophoneConnectEvent.prototype.eventType = new Number();

/**
 * Event for Play-fail
 *
 * @type Number
 */
MicrophoneAudioinputEvent.MICROPHONE_AUDIOINPUT_PLAY_FAIL = new Number();

/**
 * Event for Read
 *
 * @type Number
 */
MicrophoneAudioinputEvent.MICROPHONE_AUDIOINPUT_DATA = new Number();

/**
 * Event for Record-fail
 *
 * @type Number
 */
MicrophoneAudioinputEvent.MICROPHONE_AUDIOINPUT_RECORD_FAIL = new Number();

/**
 * Event for Record stop due to the effect setting
 *
 * @type Number
 */
MicrophoneAudioinputEvent.MICROPHONE_AUDIOINPUT_RECORD_STOP = new Number();

/**
 * Event for voice detection
 *
 * @type Number
 */
MicrophoneAudioinputEvent.MICROPHONE_AUDIOINPUT_FILTER_VOICE_DETECTED = new Number();

/**
 * Event for filter play started
 *
 * @type Number
 */
MicrophoneAudioinputEvent.MICROPHONE_AUDIOINPUT_FILTER_PLAY_START = new Number();

/**
 * Event for filter play stopped
 *
 * @type Number
 */
MicrophoneAudioinputEvent.MICROPHONE_AUDIOINPUT_FILTER_PLAY_STOP = new Number();

/**
 * Event for silence detection
 *
 * @type Number
 */
MicrophoneAudioinputEvent.MICROPHONE_AUDIOINPUT_FILTER_SILENCE_DETECTED = new Number();

/**
 * Event for filter play volume
 *
 * @type Number
 */
MicrophoneAudioinputEvent.MICROPHONE_AUDIOINPUT_FILTER_PLAY_VOLUME = new Number();

/**
 * This callback interface defines listener for notification of changes in the microphonemanager
 *
 * @param {MicrophoneConnectEvent} event
 * @type void
 * @memberOf MicrophoneConnectCallback
 * @returns {void}
 */
MicrophoneConnectCallback.prototype.onevent = function(event){ return; };

/**
 * Namespace for Microphone API.
 *
 * @type MicrophoneManager
 */
MicrophoneManagerObject.prototype.microphone = new MicrophoneManager();

/**
 * This callback interface defines listener for notification of changes in the microphoneevent
 *
 * @param {Number} eventType
 * @type void
 * @memberOf MicrophoneEventCallback
 * @returns {void}
 */
MicrophoneEventCallback.prototype.onevent = function(eventType){ return; };

/**
 * Namespace for Microphone API.
 *
 * @type MicrophoneManager
 */
WebApi.prototype.microphone = new MicrophoneManager();

/**
 * This attribute defines uid of microphone
 *
 * @type String
 */
MicrophoneManager.prototype.uid = new String();

/**
 * This attribute defines name of microphone
 *
 * @type String
 */
MicrophoneManager.prototype.name = new String();

/**
 * This attribute defines  event type of microphone
 *
 * @type Number
 */
MicrophoneManager.prototype.eventType = new Number();

/**
 * The interface defines what is instantiated by the WebApi object of Tizen-based Samsung TV Product API. There will be a webapis.network object that allows access to the functionality of the Network API
 *
 * @super Object
 * @constructor
 * @return {NetworkManagerObject}
 */
function NetworkManagerObject() {};
NetworkManagerObject.prototype = new Object();

/**
 * This callback interface defines to get events GATEWAY_CONNECTED : 1 and GATEWAY_DISCONNECTED : 2.
 *
 * @super Object
 * @constructor
 * @return {NetworkStateChangedCallback}
 */
function NetworkStateChangedCallback() {};
NetworkStateChangedCallback.prototype = new Object();

/**
 * This interface provides methods to use the Network functionalities.
 *
 * @super Object
 * @constructor
 * @return {NetworkManager}
 */
function NetworkManager() {};
NetworkManager.prototype = new Object();

/**
 * Namespace for Network API.
 *
 * @type NetworkManager
 */
NetworkManagerObject.prototype.network = new NetworkManager();

/**
 * This method is called when ever "GATEWAY_CONNECTED"/ "GATEWAY_DISCONNECTED" event is received.
 *
 * @param {NetworkState} state
 * @type void
 * @memberOf NetworkStateChangedCallback
 * @returns {void}
 */
NetworkStateChangedCallback.prototype.onchange = function(state){ return; };

/**
 * This method gets the value of the network module version which is used in the tv.
 *
 * @type String
 * @memberOf NetworkManager
 * @returns {String}
 */
NetworkManager.prototype.getVersion = function(){ var ret = new String(); return ret; };

/**
 * This method gets the state of the wired/wireless network whether tv is connected to the router(gateway) or not.
 *
 * @type bool
 * @memberOf NetworkManager
 * @returns {bool}
 */
NetworkManager.prototype.isConnectedToGateway = function(){ var ret = new bool(); return ret; };

/**
 * This method gets the ip configuration type of the tv. It can be of type Static/Dynamic/Auto/Fixed.
 *
 * @type NetworkIpMode
 * @memberOf NetworkManager
 * @returns {NetworkIpMode}
 */
NetworkManager.prototype.getIpMode = function(){ var ret = new NetworkIpMode(); return ret; };

/**
 * This method gets the configured subnetmask address value of the tv.
 *
 * @type String
 * @memberOf NetworkManager
 * @returns {String}
 */
NetworkManager.prototype.getSubnetMask = function(){ var ret = new String(); return ret; };

/**
 * This method gets the configured gateway address value of the tv.
 *
 * @type String
 * @memberOf NetworkManager
 * @returns {String}
 */
NetworkManager.prototype.getGateway = function(){ var ret = new String(); return ret; };

/**
 * This method gets the value of the mac address of a current active type.
 *
 * @type String
 * @memberOf NetworkManager
 * @returns {String}
 */
NetworkManager.prototype.getMac = function(){ var ret = new String(); return ret; };

/**
 * This method gets the configured dns address value of the tv.
 *
 * @type String
 * @memberOf NetworkManager
 * @returns {String}
 */
NetworkManager.prototype.getDns = function(){ var ret = new String(); return ret; };

/**
 * This method gets the configured ip address value of the tv.
 *
 * @type String
 * @memberOf NetworkManager
 * @returns {String}
 */
NetworkManager.prototype.getIp = function(){ var ret = new String(); return ret; };

/**
 * This method gets the current active connection type of the tv.
 *
 * @type NetworkActiveConnectionType
 * @memberOf NetworkManager
 * @returns {NetworkActiveConnectionType}
 */
NetworkManager.prototype.getActiveConnectionType = function(){ var ret = new NetworkActiveConnectionType(); return ret; };

/**
 * This method add the async event listener to the module.
 *
 * @param {NetworkStateChangedCallback} listener
 * @type Number
 * @memberOf NetworkManager
 * @returns {Number}
 */
NetworkManager.prototype.addNetworkStateChangeListener = function(listener){ var ret = new Number(); return ret; };

/**
 * This method remove the async event listener to the module.
 *
 * @param {Number} listenerId
 * @type void
 * @memberOf NetworkManager
 * @returns {void}
 */
NetworkManager.prototype.removeNetworkStateChangeListener = function(listenerId){ return; };

/**
 * This method gets the connected wifi SSID value, This api only works when wifi connection is active.
 *
 * @type String
 * @memberOf NetworkManager
 * @returns {String}
 */
NetworkManager.prototype.getWiFiSsid = function(){ var ret = new String(); return ret; };

/**
 * This method gets the connected wifi signal strength value, This api only works when wifi connection is active.
 *
 * @type Number
 * @memberOf NetworkManager
 * @returns {Number}
 */
NetworkManager.prototype.getWiFiSignalStrengthLevel = function(){ var ret = new Number(); return ret; };

/**
 * This method gets the connected wifi security mode value, This api only works when wifi connection is active.
 *
 * @type NetworkWiFiSecurityMode
 * @memberOf NetworkManager
 * @returns {NetworkWiFiSecurityMode}
 */
NetworkManager.prototype.getWiFiSecurityMode = function(){ var ret = new NetworkWiFiSecurityMode(); return ret; };

/**
 * This method gets the connected wifi encryption type value, This api only works when wifi connection is active.
 *
 * @type NetworkWiFiEncryptionType
 * @memberOf NetworkManager
 * @returns {NetworkWiFiEncryptionType}
 */
NetworkManager.prototype.getWiFiEncryptionType = function(){ var ret = new NetworkWiFiEncryptionType(); return ret; };

/**
 * Namespace for Network API.
 *
 * @type NetworkManager
 */
WebApi.prototype.network = new NetworkManager();

/**
 * This attribute defines the state of the No Glass 3D support.
 *
 * @super Object
 * @constructor
 * @return {ProductInfoNoGlass3dSupport}
 */
function ProductInfoNoGlass3dSupport() {};
ProductInfoNoGlass3dSupport.prototype = new Object();

/**
 * This attribute defines the infolink server type.
 *
 * @super Object
 * @constructor
 * @return {ProductInfoSiServerType}
 */
function ProductInfoSiServerType() {};
ProductInfoSiServerType.prototype = new Object();

/**
 * This interface provides methods to use the ProductInfo functionalities.
 *
 * @super Object
 * @constructor
 * @return {ProductInfoManager}
 */
function ProductInfoManager() {};
ProductInfoManager.prototype = new Object();

/**
 * This callback interface defines listener for notification of changes in the Productinfo Config.
 *
 * @super Object
 * @constructor
 * @return {ProductInfoConfigChangeCallback}
 */
function ProductInfoConfigChangeCallback() {};
ProductInfoConfigChangeCallback.prototype = new Object();

/**
 * The interface defines what is instantiated by the WebApi object of Tizen-based Samsung TV Product API. There will be a webapis.productinfo object that allows access to the functionality of the ProductInfo API
 *
 * @super Object
 * @constructor
 * @return {ProductInfoManagerObject}
 */
function ProductInfoManagerObject() {};
ProductInfoManagerObject.prototype = new Object();

/**
 * This interface defines the key of each Product Info config.
 *
 * @super Object
 * @constructor
 * @return {ProductInfoConfigKey}
 */
function ProductInfoConfigKey() {};
ProductInfoConfigKey.prototype = new Object();

/**
 * No glass 3d is not supported
 *
 * @type Number
 */
ProductInfoNoGlass3dSupport.NO_GLASS_3D_NOT_SUPPORTED = new Number();

/**
 * No glass 3d is supported
 *
 * @type Number
 */
ProductInfoNoGlass3dSupport.NO_GLASS_3D_SUPPORTED = new Number();

/**
 * Operating
 *
 * @type Number
 */
ProductInfoSiServerType.SI_TYPE_OPERATIING_SERVER = new Number();

/**
 * Development
 *
 * @type Number
 */
ProductInfoSiServerType.SI_TYPE_DEVELOPMENT_SERVER = new Number();

/**
 * Developing
 *
 * @type Number
 */
ProductInfoSiServerType.SI_TYPE_DEVELOPING_SERVER = new Number();

/**
 * This attribute defines the key of each Product Info config.
 *
 * @type ProductInfoConfigKey
 */
ProductInfoManager.prototype.ProductInfoConfigKey = new ProductInfoConfigKey();

/**
 * This attribute defines the state of the No Glass 3D support.
 *
 * @type ProductInfoNoGlass3dSupport
 */
ProductInfoManager.prototype.ProductInfoNoGlass3dSupport = new ProductInfoNoGlass3dSupport();

/**
 * This attribute defines the infolink server type.
 *
 * @type ProductInfoSiServerType
 */
ProductInfoManager.prototype.ProductInfoSiServerType = new ProductInfoSiServerType();

/**
 * This method get the plugin's version number.
 *
 * @type String
 * @memberOf ProductInfoManager
 * @returns {String}
 */
ProductInfoManager.prototype.getVersion = function(){ var ret = new String(); return ret; };

/**
 * This method get Firmware's information
 *
 * @type String
 * @memberOf ProductInfoManager
 * @returns {String}
 */
ProductInfoManager.prototype.getFirmware = function(){ var ret = new String(); return ret; };

/**
 * This method get DUID.
 *
 * @type String
 * @memberOf ProductInfoManager
 * @returns {String}
 */
ProductInfoManager.prototype.getDuid = function(){ var ret = new String(); return ret; };

/**
 * This method get Modelcode.
 *
 * @type String
 * @memberOf ProductInfoManager
 * @returns {String}
 */
ProductInfoManager.prototype.getModelCode = function(){ var ret = new String(); return ret; };

/**
 * This method get real model name (e.g: UN65JS9500)
 *
 * @type String
 * @memberOf ProductInfoManager
 * @returns {String}
 */
ProductInfoManager.prototype.getRealModel = function(){ var ret = new String(); return ret; };

/**
 * This method check whether support Noglass 3d.
 *
 * @type Number
 * @memberOf ProductInfoManager
 * @returns {Number}
 */
ProductInfoManager.prototype.getNoGlass3dSupport = function(){ var ret = new Number(); return ret; };

/**
 * This method get local set.
 *
 * @type String
 * @memberOf ProductInfoManager
 * @returns {String}
 */
ProductInfoManager.prototype.getLocalSet = function(){ var ret = new String(); return ret; };

/**
 * This method get system config which is specified by input parameter (e.g: service country code).
 *
 * @param {Number} key
 * @type String
 * @memberOf ProductInfoManager
 * @returns {String}
 */
ProductInfoManager.prototype.getSystemConfig = function(key){ var ret = new String(); return ret; };

/**
 * This method set system config which is specified by input parameter.
 *
 * @param {Number} key
 * @param {String} value
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf ProductInfoManager
 * @returns {void}
 */
ProductInfoManager.prototype.setSystemConfig = function(key, value, onsuccess, onerror){ return; };

/**
 * This method add callback to listen the change of system config.
 *
 * @param {ProductInfoConfigChangeCallback} listener
 * @param {Number} key
 * @type Number
 * @memberOf ProductInfoManager
 * @returns {Number}
 */
ProductInfoManager.prototype.addSystemConfigChangeListener = function(listener, key){ var ret = new Number(); return ret; };

/**
 * This method remove callback which was added to listen the change of system config.
 *
 * @param {Number} listenerId
 * @type void
 * @memberOf ProductInfoManager
 * @returns {void}
 */
ProductInfoManager.prototype.removeSystemConfigChangeListener = function(listenerId){ return; };

/**
 * This method get Model.
 *
 * @type String
 * @memberOf ProductInfoManager
 * @returns {String}
 */
ProductInfoManager.prototype.getModel = function(){ var ret = new String(); return ret; };

/**
 * This method get the infolink server type.
 *
 * @type Number
 * @memberOf ProductInfoManager
 * @returns {Number}
 */
ProductInfoManager.prototype.getSmartTVServerType = function(){ var ret = new Number(); return ret; };

/**
 * This method get the infolink server version, like T-INFOLINK2014-1002
 *
 * @type String
 * @memberOf ProductInfoManager
 * @returns {String}
 */
ProductInfoManager.prototype.getSmartTVServerVersion = function(){ var ret = new String(); return ret; };

/**
 * This method get the tuner value via factory info.
 *
 * @type String
 * @memberOf ProductInfoManager
 * @returns {String}
 */
ProductInfoManager.prototype.getTunerEpop = function(){ var ret = new String(); return ret; };

/**
 * This method check whether TV is on Soccer Mode.
 *
 * @type Boolean
 * @memberOf ProductInfoManager
 * @returns {Boolean}
 */
ProductInfoManager.prototype.isSoccerModeEnabled = function(){ var ret = new Boolean(); return ret; };

/**
 * This method check whether Ttv is supported.
 *
 * @type Boolean
 * @memberOf ProductInfoManager
 * @returns {Boolean}
 */
ProductInfoManager.prototype.isTtvSupported = function(){ var ret = new Boolean(); return ret; };

/**
 * This method check whether UdPanel is supported.
 *
 * @type Boolean
 * @memberOf ProductInfoManager
 * @returns {Boolean}
 */
ProductInfoManager.prototype.isUdPanelSupported = function(){ var ret = new Boolean(); return ret; };

/**
 * This method defines listener for notification of changes in the Productinfo Config.
 *
 * @param {Number} key
 * @type void
 * @memberOf ProductInfoConfigChangeCallback
 * @returns {void}
 */
ProductInfoConfigChangeCallback.prototype.onchange = function(key){ return; };

/**
 * Namespace for ProductInfo API.
 *
 * @type ProductInfoManager
 */
ProductInfoManagerObject.prototype.productinfo = new ProductInfoManager();

/**
 * Data service configuration
 *
 * @type Number
 */
ProductInfoConfigKey.CONFIG_KEY_DATA_SERVICE = new Number();

/**
 * Service country , readonly
 *
 * @type Number
 */
ProductInfoConfigKey.CONFIG_KEY_SERVICE_COUNTRY = new Number();

/**
 * Shoplogo , readonly
 *
 * @type Number
 */
ProductInfoConfigKey.CONFIG_KEY_SHOPLOGO = new Number();

/**
 * Channel Bound Apps ticker
 *
 * @type Number
 */
ProductInfoConfigKey.CONFIG_KEY_CHANNELBOUND_APPS_TICKER = new Number();

/**
 * Support Soccer panel , readonly
 *
 * @type Number
 */
ProductInfoConfigKey.CONFIG_KEY_SUPPORT_SOCCER_PANEL = new Number();

/**
 * Support OnTV panel , readonly
 *
 * @type Number
 */
ProductInfoConfigKey.CONFIG_KEY_SUPPORT_ONTV_PANEL = new Number();

/**
 * Support NewsOn panel , readonly
 *
 * @type Number
 */
ProductInfoConfigKey.CONFIG_KEY_SUPPORT_NEWSON_PANEL = new Number();

/**
 * Support Mycontents panel , readonly
 *
 * @type Number
 */
ProductInfoConfigKey.CONFIG_KEY_SUPPORT_MYCONTENTS_PANEL = new Number();

/**
 * Support Game panel , readonly
 *
 * @type Number
 */
ProductInfoConfigKey.CONFIG_KEY_SUPPORT_GAME_PANEL = new Number();

/**
 * Support Clips panel , readonly
 *
 * @type Number
 */
ProductInfoConfigKey.CONFIG_KEY_SUPPORT_CLIPS_PANEL = new Number();

/**
 * Support Apps panel , readonly
 *
 * @type Number
 */
ProductInfoConfigKey.CONFIG_KEY_SUPPORT_APPS_PANEL = new Number();

/**
 * Support system pnp country panel , readonly
 *
 * @type Number
 */
ProductInfoConfigKey.CONFIG_KEY_SYSTEM_PNP_COUNTRY = new Number();

/**
 * Namespace for ProductInfo API.
 *
 * @type ProductInfoManager
 */
WebApi.prototype.productinfo = new ProductInfoManager();

/**
 * This callback interface defines getting six-axis data of smart remocon.
 *
 * @super Object
 * @constructor
 * @return {SmartControllerSixAxisDataCallback}
 */
function SmartControllerSixAxisDataCallback() {};
SmartControllerSixAxisDataCallback.prototype = new Object();

/**
 * This interface provides methods to use the SmartController functionalities.
 *
 * @super Object
 * @constructor
 * @return {SmartControllerManager}
 */
function SmartControllerManager() {};
SmartControllerManager.prototype = new Object();

/**
 * This interface defines the data of smart contorller.
 *
 * @super Object
 * @constructor
 * @return {SmartControllerSixAxisData}
 */
function SmartControllerSixAxisData() {};
SmartControllerSixAxisData.prototype = new Object();

/**
 * The interface defines what is instantiated by the WebApi object of Tizen-based Samsung TV Product API. There will be a webapis.smartremocon object that allows access to the functionality of the SmartController API
 *
 * @super Object
 * @constructor
 * @return {SmartControllerManagerObject}
 */
function SmartControllerManagerObject() {};
SmartControllerManagerObject.prototype = new Object();

/**
 * This method is the callback function will be provided by the application.
 *
 * @param {SmartControllerSixAxisData} eventData
 * @type void
 * @memberOf SmartControllerSixAxisDataCallback
 * @returns {void}
 */
SmartControllerSixAxisDataCallback.prototype.onchange = function(eventData){ return; };

/**
 * Get the version of SmartController plugin.
 *
 * @type String
 * @memberOf SmartControllerManager
 * @returns {String}
 */
SmartControllerManager.prototype.getVersion = function(){ var ret = new String(); return ret; };

/**
 * Get connetion state of Smart Controller.
 *
 * @type Boolean
 * @memberOf SmartControllerManager
 * @returns {Boolean}
 */
SmartControllerManager.prototype.isConnected = function(){ var ret = new Boolean(); return ret; };

/**
 * Register the listener of six-axis data changed for smart controller.
 *
 * @param {SmartControllerSixAxisDataCallback} listener
 * @type Number
 * @memberOf SmartControllerManager
 * @returns {Number}
 */
SmartControllerManager.prototype.setSixAxisListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Un-Register the listener of six-axis data changed for smart controller, if registered.
 *
 * @param {Number} listenerId
 * @type void
 * @memberOf SmartControllerManager
 * @returns {void}
 */
SmartControllerManager.prototype.unsetSixAxisListener = function(listenerId){ return; };

/**
 * This attribute defines the sampling time.
 *
 * @type Number
 */
SmartControllerSixAxisData.prototype.samplingTime = new Number();

/**
 * This attribute defines the sensor type.
 *
 * @type Number
 */
SmartControllerSixAxisData.prototype.sensorType = new Number();

/**
 * This attribute defines the touch mode.
 *
 * @type Number
 */
SmartControllerSixAxisData.prototype.touchMode = new Number();

/**
 * This attribute defines x-axis accelartion value.
 *
 * @type Number
 */
SmartControllerSixAxisData.prototype.xAccel = new Number();

/**
 * This attribute defines x-axis gyro value.
 *
 * @type Number
 */
SmartControllerSixAxisData.prototype.xGyro = new Number();

/**
 * This attribute defines y-axis accelartion value.
 *
 * @type Number
 */
SmartControllerSixAxisData.prototype.yAccel = new Number();

/**
 * This attribute defines y-axis gyro value.
 *
 * @type Number
 */
SmartControllerSixAxisData.prototype.yGyro = new Number();

/**
 * This attribute defines z-axis accelartion value.
 *
 * @type Number
 */
SmartControllerSixAxisData.prototype.zAccel = new Number();

/**
 * This attribute defines z-axis gyro value.
 *
 * @type Number
 */
SmartControllerSixAxisData.prototype.zGyro = new Number();

/**
 * Namespace for SmartController API.
 *
 * @type SmartControllerManager
 */
SmartControllerManagerObject.prototype.smartcontroller = new SmartControllerManager();

/**
 * Namespace for SmartController API.
 *
 * @type SmartControllerManager
 */
WebApi.prototype.smartcontroller = new SmartControllerManager();

/**
 * This interface defines constants that indicates the value of menu settings.
 *
 * @super Object
 * @constructor
 * @return {TvInfoMenuValue}
 */
function TvInfoMenuValue() {};
TvInfoMenuValue.prototype = new Object();

/**
 * The interface defines what is instantiated by the WebApi object of Tizen-based Samsung TV Product API. There will be a webapis.tvinfo object that allows access to the functionality of the TvInfo API
 *
 * @super Object
 * @constructor
 * @return {TvInfoManagerObject}
 */
function TvInfoManagerObject() {};
TvInfoManagerObject.prototype = new Object();

/**
 * This callback interface defines listener for notification of changes in the Caption Settings.
 *
 * @super Object
 * @constructor
 * @return {TvInfoCaptionChangeCallback}
 */
function TvInfoCaptionChangeCallback() {};
TvInfoCaptionChangeCallback.prototype = new Object();

/**
 * This interface definesthe key of each Caption Settings.
 *
 * @super Object
 * @constructor
 * @return {TvInfoMenuKey}
 */
function TvInfoMenuKey() {};
TvInfoMenuKey.prototype = new Object();

/**
 * This interface provides methods to use the TvInfo functionalities.
 *
 * @super Object
 * @constructor
 * @return {TvInfoManager}
 */
function TvInfoManager() {};
TvInfoManager.prototype = new Object();

/**
 * Caption Off
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_OFF = new Number();

/**
 * Caption On
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_ON = new Number();

/**
 * Default Mode
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_MODE_DEFAULT = new Number();

/**
 * Service 1
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_MODE_SERVICE1 = new Number();

/**
 * Service 2
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_MODE_SERVICE2 = new Number();

/**
 * Service 3
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_MODE_SERVICE3 = new Number();

/**
 * Service 4
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_MODE_SERVICE4 = new Number();

/**
 * Service 5
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_MODE_SERVICE5 = new Number();

/**
 * Service 6
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_MODE_SERVICE6 = new Number();

/**
 * English(KOR Localset)
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_MODE_CC1 = new Number();

/**
 * Korean(KOR Localset)
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_MODE_CC2 = new Number();

/**
 * Only US Localset
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_MODE_CC3 = new Number();

/**
 * Only US Localset
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_MODE_CC4 = new Number();

/**
 * Text 1
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_MODE_TEXT1 = new Number();

/**
 * Text 2
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_MODE_TEXT2 = new Number();

/**
 * Text 3
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_MODE_TEXT3 = new Number();

/**
 * Text 4
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_MODE_TEXT4 = new Number();

/**
 * Default
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_SIZE_DEFAULT = new Number();

/**
 * Small
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_SIZE_SMALL = new Number();

/**
 * Starndard
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_SIZE_STANDARD = new Number();

/**
 * Large
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_SIZE_LARGE = new Number();

/**
 * ExtraLarge
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_SIZE_EXTRA_LARGE = new Number();

/**
 * Default
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_FONT_DEFAULT = new Number();

/**
 * Default
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_FONT_STYLE0 = new Number();

/**
 * Style 0
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_FONT_STYLE1 = new Number();

/**
 * Style 1
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_FONT_STYLE2 = new Number();

/**
 * Style 2
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_FONT_STYLE3 = new Number();

/**
 * Style 3
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_FONT_STYLE4 = new Number();

/**
 * Style 4
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_FONT_STYLE5 = new Number();

/**
 * Style 5
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_FONT_STYLE6 = new Number();

/**
 * Style 6
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_FONT_STYLE7 = new Number();

/**
 * Default
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_COLOR_DEFAULT = new Number();

/**
 * White
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_COLOR_WHITE = new Number();

/**
 * Black
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_COLOR_BLACK = new Number();

/**
 * Red
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_COLOR_RED = new Number();

/**
 * Green
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_COLOR_GREEN = new Number();

/**
 * Blue
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_COLOR_BLUE = new Number();

/**
 * Yellow
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_COLOR_YELLOW = new Number();

/**
 * Magenta
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_COLOR_MAGENTA = new Number();

/**
 * Cyan
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_COLOR_CYAN = new Number();

/**
 * Solid
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_OPACITY_SOLID = new Number();

/**
 * Flashing
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_OPACITY_FLASHING = new Number();

/**
 * Translucent
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_OPACITY_TRANSLUCENT = new Number();

/**
 * Transparent
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_OPACITY_TRANSPARENT = new Number();

/**
 * Default
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_OPACITY_DEFAULT = new Number();

/**
 * No Edge
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_EDGE_NONE = new Number();

/**
 * Raised
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_EDGE_RAISED = new Number();

/**
 * Depressed
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_EDGE_DEPRESSED = new Number();

/**
 * Uniform
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_EDGE_UNIFORM = new Number();

/**
 * Drop Shadow
 *
 * @type Number
 */
TvInfoMenuValue.CAPTION_EDGE_DROP_SHADOWED = new Number();

/**
 * Namespace for TvInfo API.
 *
 * @type TvInfoManager
 */
TvInfoManagerObject.prototype.tvinfo = new TvInfoManager();

/**
 * This method defines listener for notification of changes in the Caption Settings.
 *
 * @param {Number} key
 * @type void
 * @memberOf TvInfoCaptionChangeCallback
 * @returns {void}
 */
TvInfoCaptionChangeCallback.prototype.onchange = function(key){ return; };

/**
 * Caption On/Off
 *
 * @type Number
 */
TvInfoMenuKey.CAPTION_ONOFF_KEY = new Number();

/**
 * Caption mode defult ~ service 6
 *
 * @type Number
 */
TvInfoMenuKey.CAPTION_MODE_KEY = new Number();

/**
 * Caption font size
 *
 * @type Number
 */
TvInfoMenuKey.CAPTION_FONT_SIZE_KEY = new Number();

/**
 * Caption font style defult ~ style 6
 *
 * @type Number
 */
TvInfoMenuKey.CAPTION_FONT_STYLE_KEY = new Number();

/**
 * FG color of caption text
 *
 * @type Number
 */
TvInfoMenuKey.CAPTION_FG_COLOR_KEY = new Number();

/**
 * FG opcacity of caption text
 *
 * @type Number
 */
TvInfoMenuKey.CAPTION_FG_OPACITY_KEY = new Number();

/**
 * Background color of caption text
 *
 * @type Number
 */
TvInfoMenuKey.CAPTION_BG_COLOR_KEY = new Number();

/**
 * Backgrount opacity of caption text
 *
 * @type Number
 */
TvInfoMenuKey.CAPTION_BG_OPACITY_KEY = new Number();

/**
 * Edge type of caption text
 *
 * @type Number
 */
TvInfoMenuKey.CAPTION_EDGE_TYPE_KEY = new Number();

/**
 * Edge color of caption text
 *
 * @type Number
 */
TvInfoMenuKey.CAPTION_EDGE_COLOR_KEY = new Number();

/**
 * Window color of caption text
 *
 * @type Number
 */
TvInfoMenuKey.CAPTION_WINDOW_COLOR_KEY = new Number();

/**
 * Window opacity of caption text
 *
 * @type Number
 */
TvInfoMenuKey.CAPTION_WINDOW_OPACITY_KEY = new Number();

/**
 * This attribute defines the key of each Caption Settings.
 *
 * @type TvInfoMenuKey
 */
TvInfoManager.prototype.TvInfoMenuKey = new TvInfoMenuKey();

/**
 * This attribute defines that indicates the value of menu settings.
 *
 * @type TvInfoMenuValue
 */
TvInfoManager.prototype.TvInfoMenuValue = new TvInfoMenuValue();

/**
 * This method get the plugin's version number.
 *
 * @type String
 * @memberOf TvInfoManager
 * @returns {String}
 */
TvInfoManager.prototype.getVersion = function(){ var ret = new String(); return ret; };

/**
 * This method get the value of the TV caption menu which was selected by argument.
 *
 * @param {Number} key
 * @type Number
 * @memberOf TvInfoManager
 * @returns {Number}
 */
TvInfoManager.prototype.getMenuValue = function(key){ var ret = new Number(); return ret; };

/**
 * This method add the listener callback for the caption menu change.
 *
 * @param {TvInfoCaptionChangeCallback} listener
 * @param {Number} key
 * @type Number
 * @memberOf TvInfoManager
 * @returns {Number}
 */
TvInfoManager.prototype.addCaptionChangeListener = function(listener, key){ var ret = new Number(); return ret; };

/**
 * This method remove the listener which was added by addCaptionChangeListener.
 *
 * @param {Number} listenerId
 * @type void
 * @memberOf TvInfoManager
 * @returns {void}
 */
TvInfoManager.prototype.removeCaptionChangeListener = function(listenerId){ return; };

/**
 * This method check whether picture size resized.
 *
 * @type Boolean
 * @memberOf TvInfoManager
 * @returns {Boolean}
 */
TvInfoManager.prototype.isTvsPicSizeResized = function(){ var ret = new Boolean(); return ret; };

/**
 * Namespace for TvInfo API.
 *
 * @type TvInfoManager
 */
WebApi.prototype.tvinfo = new TvInfoManager();

/**
 * This interface defines error of  asynchronous APIs.
 *
 * @super Object
 * @constructor
 * @return {WebAPIError}
 */
function WebAPIError() {};
WebAPIError.prototype = new Object();

/**
 * This interface defines Exception errors of  synchronous APIs.
 *
 * @super Object
 * @constructor
 * @return {WebAPIException}
 */
function WebAPIException() {};
WebAPIException.prototype = new Object();

/**
 * This callback interface is used in methods that do not require any return value in the error callback.
 *
 * @super Object
 * @constructor
 * @return {ErrorCallback}
 */
function ErrorCallback() {};
ErrorCallback.prototype = new Object();

/**
 * This callback interface is used in methods that do not require any return value in the success callback.
 *
 * @super Object
 * @constructor
 * @return {SuccessCallback}
 */
function SuccessCallback() {};
SuccessCallback.prototype = new Object();

/**
 * This interface defines the webapis interface as a part of the window global object.
 *
 * @super Object
 * @constructor
 * @return {WebApiObject}
 */
function WebApiObject() {};
WebApiObject.prototype = new Object();

/**
 * This interface defines the root of Product API.
 *
 * @super Object
 * @constructor
 * @return {WebApi}
 */
function WebApi() {};
WebApi.prototype = new Object();

/**
 * This attribute defines value of error code.
 *
 * @type Number
 */
WebAPIError.prototype.code = new Number();

/**
 * This attribute defines value of error name. An error type.
 *
 * @type String
 */
WebAPIError.prototype.name = new String();

/**
 * This attribute defines value of error message. An error message that describes the details of the error encountered.
 *
 * @type String
 */
WebAPIError.prototype.message = new String();

/**
 * INDEX_SIZE_ERR
 *
 * @type Number
 */
WebAPIException.INDEX_SIZE_ERR = new Number();

/**
 * DOMSTRING_SIZE_ERR
 *
 * @type Number
 */
WebAPIException.DOMSTRING_SIZE_ERR = new Number();

/**
 * HIERARCHY_REQUEST_ERR
 *
 * @type Number
 */
WebAPIException.HIERARCHY_REQUEST_ERR = new Number();

/**
 * WRONG_DOCUMENT_ERR
 *
 * @type Number
 */
WebAPIException.WRONG_DOCUMENT_ERR = new Number();

/**
 * INVALID_CHARACTER_ERR
 *
 * @type Number
 */
WebAPIException.INVALID_CHARACTER_ERR = new Number();

/**
 * NO_DATA_ALLOWED_ERR
 *
 * @type Number
 */
WebAPIException.NO_DATA_ALLOWED_ERR = new Number();

/**
 * NO_MODIFICATION_ALLOWED_ERR
 *
 * @type Number
 */
WebAPIException.NO_MODIFICATION_ALLOWED_ERR = new Number();

/**
 * NOT_FOUND_ERR
 *
 * @type Number
 */
WebAPIException.NOT_FOUND_ERR = new Number();

/**
 * NOT_SUPPORTED_ERR
 *
 * @type Number
 */
WebAPIException.NOT_SUPPORTED_ERR = new Number();

/**
 * INUSE_ATTRIBUTE_ERR
 *
 * @type Number
 */
WebAPIException.INUSE_ATTRIBUTE_ERR = new Number();

/**
 * INVALID_STATE_ERR
 *
 * @type Number
 */
WebAPIException.INVALID_STATE_ERR = new Number();

/**
 * SYNTAX_ERR
 *
 * @type Number
 */
WebAPIException.SYNTAX_ERR = new Number();

/**
 * INVALID_MODIFICATION_ERR
 *
 * @type Number
 */
WebAPIException.INVALID_MODIFICATION_ERR = new Number();

/**
 * NAMESPACE_ERR
 *
 * @type Number
 */
WebAPIException.NAMESPACE_ERR = new Number();

/**
 * INVALID_ACCESS_ERR
 *
 * @type Number
 */
WebAPIException.INVALID_ACCESS_ERR = new Number();

/**
 * VALIDATION_ERR
 *
 * @type Number
 */
WebAPIException.VALIDATION_ERR = new Number();

/**
 * TYPE_MISMATCH_ERR
 *
 * @type Number
 */
WebAPIException.TYPE_MISMATCH_ERR = new Number();

/**
 * SECURITY_ERR
 *
 * @type Number
 */
WebAPIException.SECURITY_ERR = new Number();

/**
 * NETWORK_ERR
 *
 * @type Number
 */
WebAPIException.NETWORK_ERR = new Number();

/**
 * ABORT_ERR
 *
 * @type Number
 */
WebAPIException.ABORT_ERR = new Number();

/**
 * URL_MISMATCH_ERR
 *
 * @type Number
 */
WebAPIException.URL_MISMATCH_ERR = new Number();

/**
 * QUOTA_EXCEEDED_ERR
 *
 * @type Number
 */
WebAPIException.QUOTA_EXCEEDED_ERR = new Number();

/**
 * TIMEOUT_ERR
 *
 * @type Number
 */
WebAPIException.TIMEOUT_ERR = new Number();

/**
 * INVALID_NODE_TYPE_ERR
 *
 * @type Number
 */
WebAPIException.INVALID_NODE_TYPE_ERR = new Number();

/**
 * DATA_CLONE_ERR
 *
 * @type Number
 */
WebAPIException.DATA_CLONE_ERR = new Number();

/**
 * INVALID_VALUES_ERR
 *
 * @type Number
 */
WebAPIException.INVALID_VALUES_ERR = new Number();

/**
 * IO_ERR
 *
 * @type Number
 */
WebAPIException.IO_ERR = new Number();

/**
 * SERVICE_NOT_AVAILABLE_ERR
 *
 * @type Number
 */
WebAPIException.SERVICE_NOT_AVAILABLE_ERR = new Number();

/**
 * UNKNOW_ERR
 *
 * @type Number
 */
WebAPIException.UNKNOW_ERR = new Number();

/**
 * This attribute defines value of error code.
 *
 * @type Number
 */
WebAPIException.prototype.code = new Number();

/**
 * This attribute defines value of error name. An error type.
 *
 * @type String
 */
WebAPIException.prototype.name = new String();

/**
 * This attribute defines value of error message. An error message that describes the details of the error encountered.
 *
 * @type String
 */
WebAPIException.prototype.message = new String();

/**
 * This callback interface is used in methods that do not require any return value in the error callback.
 *
 * @param {WebAPIError} error
 * @type void
 * @memberOf ErrorCallback
 * @returns {void}
 */
ErrorCallback.prototype.onerror = function(error){ return; };

/**
 * This callback interface is used in methods that do not require any return value in the success callback.
 *
 * @type void
 * @memberOf SuccessCallback
 * @returns {void}
 */
SuccessCallback.prototype.onsuccess = function(){ return; };

/**
 * This attribute defines global namespace for Tizen-based Samsung TV Product API.
 *
 * @type WebApi
 */
WebApiObject.prototype.webapis = new WebApi();

/**
 * This attribute defines global namespace for Tizen-based Samsung TV Product API.
 *
 * @type WebApi
 */
Window.prototype.webapis = new WebApi();

/**
 * The interface defines what is instantiated by the WebApi object of Tizen-based Samsung TV Product API. There will be a webapis.widgetdata object that allows access to the functionality of the WidgetData API
 *
 * @super Object
 * @constructor
 * @return {WidgetDataManagerObject}
 */
function WidgetDataManagerObject() {};
WidgetDataManagerObject.prototype = new Object();

/**
 * This interface provides methods to use the WidgetData functionalities.
 *
 * @super Object
 * @constructor
 * @return {WidgetDataManager}
 */
function WidgetDataManager() {};
WidgetDataManager.prototype = new Object();

/**
 * This callback interface is used in methods that do not require any return value in the success callback.
 *
 * @super Object
 * @constructor
 * @return {WidgetDataStringSuccessCallback}
 */
function WidgetDataStringSuccessCallback() {};
WidgetDataStringSuccessCallback.prototype = new Object();

/**
 * Namespace for WidgetData API.
 *
 * @type WidgetDataManager
 */
WidgetDataManagerObject.prototype.widgetdata = new WidgetDataManager();

/**
 * This method get the plugin's version number.
 *
 * @type String
 * @memberOf WidgetDataManager
 * @returns {String}
 */
WidgetDataManager.prototype.getVersion = function(){ var ret = new String(); return ret; };

/**
 * This method read the encrypted data.
 *
 * @param {String} password
 * @param {Number} dataLength
 * @param {String} widgetId
 * @param {WidgetDataStringSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf WidgetDataManager
 * @returns {void}
 */
WidgetDataManager.prototype.readWidgetData = function(password, dataLength, widgetId, onsuccess, onerror){ return; };

/**
 * This method remove the encrypted data.
 *
 * @param {String} widgetId
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf WidgetDataManager
 * @returns {void}
 */
WidgetDataManager.prototype.removeWidgetData = function(widgetId, onsuccess, onerror){ return; };

/**
 * This method write the encrypted data.
 *
 * @param {String} password
 * @param {String} data
 * @param {Number} dataLength
 * @param {String} widgetId
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf WidgetDataManager
 * @returns {void}
 */
WidgetDataManager.prototype.writeWidgetData = function(password, data, dataLength, widgetId, onsuccess, onerror){ return; };

/**
 * Namespace for WidgetData API.
 *
 * @type WidgetDataManager
 */
WebApi.prototype.widgetdata = new WidgetDataManager();

