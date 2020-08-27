import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralCaptureScreenInfo = require("../../../../../app/ts/abstract/am_general/a_capturescreeninfo/A_CaptureScreenInfo");

import amGeneralFailureModeInfo   = require("../../../../../app/ts/abstract/am_general/a_failuremodeinfo/A_FailureModeInfo");
import amGeneralTileInfo          = require("../../../../../app/ts/abstract/am_general/a_tileinfo/A_TileInfo");
import amGeneralSystemMonitorInfo = require("../../../../../app/ts/abstract/am_general/a_systemmonitorinfo/A_SystemMonitorInfo");
import amGeneralUsageData         = require("../../../../../app/ts/abstract/am_general/a_usagedata/A_UsageData");
import amGeneralUsagePermissions  = require("../../../../../app/ts/abstract/am_general/a_usagepermissions/A_UsagePermissions");

export module am_transversalservices
{
  export interface I_SDK_notifyTvSignageSetup extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    //-------------------------------
    //       Capture Screen
    //-------------------------------
    notify_captureScreen(captureScreenInfo: amGeneralCaptureScreenInfo.am_general.A_CaptureScreenInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_captureScreen(soundProperties: amGeneralCaptureScreenInfo.am_general.A_CaptureScreenInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;


    //-------------------------------
    //       Check Screen
    //  The Check Screen feature judges whether there are abnormalities at the edges of the screen. R, G, and B OSDs
    //     are formed on the screen at one second intervals and an RGB Sensor tests the areas.
    //  If set to On, the Check Screen feature is enabled.
    //  If set to Off, the Check Screen feature is disabled.
    // When the Portrait mode is On, the Check Screen feature is Off and deactivated    
    //----------------------------------
    notify_enableCheckScreen(enabledCheckScreen: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_enableCheckScreen(enabledCheckScreen: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    //------------------------------------------------------------------------
    //Fail Over
    //The input source with the highest priority will be selected.
    //-- Off
    //   The Auto-Fail Over feature is disabled.
    //--- Auto
    // The input source changes according to the specified order. When several input sources are found, the input
    // source with the highest priority will be selected.
    // Priority: 1.HDMI, 2.DVI-D, 3.DISPLAYPORT, and 4.OPS, 5.RGB, 6.Internal Memory
    //-- Manual
    // The input source changes according to the specified order. When several input sources are found, the input
    // source with the highest priority will be selected.
    // y You can set Priority 1 - Priority 6.
    //-- NOTE:
    // Content copied using My Media will be saved in the root folder.
    // If the input is switched to Internal Memory due to Fail Over, videos files or image files saved in the top-level
    //   folder in the Internal Memory will be displayed.
    // If there are both video files and image files in the same folder, then only the video files will be played.
    // Content distributed by SuperSign will be saved in the folder named 'normal' in the internal memory. Therefore,
    //content distributed by SuperSign will not be automatically played due to Fail Over.
    //---------------------
    notify_setFailureMode(failureModeInfo: amGeneralFailureModeInfo.am_general.A_FailureModeInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_setFailureMode(failureModeInfo: amGeneralFailureModeInfo.am_general.A_FailureModeInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_getFailureMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_getFailureMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;


    //--------------------
    // Intelligent Auto
    // Adjusts the size, position, and phase of the monitor's screen automatically at the recognized resolution. 
    // This feature is available only in RGB input mode (to be checked).
    //----------------------
    notify_setIntelligentAuto(enabledIntelligentAuto: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_setIntelligentAuto(enabledIntelligentAuto: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_getIntelligentAuto(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_getIntelligentAuto(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;


    //------------------
    //  getSignageInfo supplies all general information about the signage tv
    //    like:
    // 		    Portrait mode. Refer to the Signage.OsdPortraitMode for more detail.
		//        ISM(Image Sticking Minimization) method. Refer to the Signage.IsmMethod for more detail.
		//        Digital Audio Input Mode. An object with input type/Signage.DigitalAudioInput pair.
    //        check screen information
    //-------------------
    notify_getSignageInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_getSignageInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;


    //------------------
    //  portraitMode
    //------------------
    notify_setPortraitMode(portraitMode: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_setPortraitMode(portraitMode: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_getPortraitMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_getPortraitMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    //------------------
    //  studioMode
    //------------------
    notify_setStudioMode(studioMode: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_setStudioMode(studioMode: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_getStudioMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_getStudioMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    //------------------
    //  setISMMethod
    //------------------
    notify_setISMMethod(ismMethod: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_setISMMethod(ismMethod: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_getISMMethod(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_getISMMethod(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    //------------------
    //  setTileInfo
    //
    //You can configure the integrated screen in the same way as each screen is configured.
    // To use this function
    //    - Must be used with multiple monitors.
    //    - Must be operated after connecting the monitors using DP Cable and distributor.
    //    - Tile mode: row x column (r = 1 to 15, c = 1 to 15)
    //    - 15 x 15 available
    //-- Row (1-15)
    //   Set the number of Tile rows.
    //-- Column (1-15)
    //   Set the number of Tile columns.
    //-- Tile ID (1-225)
    //   Set an ID for the Tile.
    // The ID you selected will be displayed on the screen.
    //-- Natural
    //   For more natural display, the image is partly omitted to account for the distance between the screens.
    //-- Reset
    //   Resets the Tile Mode option.
    //    If you select Tile Reset, all Tile settings are reset and the screen returns to the Full Screen Mode.
    //------------------
    notify_setTileInfo(tileInfo: amGeneralTileInfo.am_general.A_TileInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_setTileInfo(tileInfo: amGeneralTileInfo.am_general.A_TileInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_getTileInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_getTileInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;


    //------------------
    //  register/unregister/get Monitoring Info
    //
    notify_registerSystemMonitorInfo(systemMonitoringInfo: amGeneralSystemMonitorInfo.am_general.A_SystemMonitorInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_registerSystemMonitorInfo(systemMonitoringInfo: amGeneralSystemMonitorInfo.am_general.A_SystemMonitorInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_unregisterSystemMonitorInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_unregisterSystemMonitorInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_getSystemMonitorInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_getSystemMonitorInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;
  

    //------------------
    //  get usage data : uptime, etc.
    //------------------
    notify_getUsageData(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_getUsageData(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;


    //------------------
    //  get usage permissions
    //------------------
    notify_setUsagePermissions(usagePermissions: amGeneralUsagePermissions.am_general.A_UsagePermissions, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_setUsagePermissions(usagePermissions: amGeneralUsagePermissions.am_general.A_UsagePermissions, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    notify_getUsagePermissions(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    notify_promise_getUsagePermissions(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

  }
} 