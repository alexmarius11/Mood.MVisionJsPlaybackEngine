import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/I_SDK_notifyAudioSetup");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmTransversalServicesSDKConsumer = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/R_SDK_Consumer");

import amGeneralSoundProperties   = require("../../../../../app/ts/abstract/am_general/a_soundproperties/A_SoundProperties");

export module rm_transversalservices
{
  export class IImpl_SDK_notifyAudioSetup_SDKConsumer implements amGeneral.am_transversalservices.I_SDK_notifyAudioSetup
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: rmTransversalServicesSDKConsumer.rm_transversalservices.R_SDK_Consumer;

    //----------- constructor 
    constructor(owner: rmTransversalServicesSDKConsumer.rm_transversalservices.R_SDK_Consumer)  
    {
      this._owner = owner;  
    }

        //-----------------------------
    //  set/get Volume Level
    //-----------------------------

    //----------------
    public notify_setVolumeLevel(audioProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //-----------------------------
    public notify_promise_setVolumeLevel(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    public notify_getVolumeLevel(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //-----------------------------
    public notify_promise_getVolumeLevel(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    //  set/get Mute
    //-----------------------------

    //-----------------------------
    public notify_setMute(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //-----------------------------
    public notify_promise_setMute(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    } 

    //-----------------------------
    public notify_getMute(audioProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //--------------------------------
    public notify_promise_getMute(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    //  set/get Sound Mode
    //-----------------------------

    //--------------------------------
    public notify_setSoundMode(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //--------------------------------
    public notify_promise_setSoundMode(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }


    //--------------------------------
    public notify_getSoundMode(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //--------------------------------
    public notify_promise_getSoundMode(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    //  set/get Output Speaker 
    //-----------------------------

    //--------------------------------
    public notify_setSoundSpeaker(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //---------------------------------
    public notify_promise_setSoundSpeaker(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //--------------------------------
    public notify_getSoundSpeaker(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //--------------------------------
    public notify_promise_getSoundSpeaker(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    //  get/set Digital Audio Input Mode
    //-----------------------------

    //-------------------------------
    public notify_setDigitalAudioInputMode(inputSourceList: Array<string>, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //---------------------------------
    public notify_promise_setDigitalAudioInputModes(inputSourceList: Array<string>, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-------------------------------
    public notify_getDigitalAudioInputMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //---------------------------------
    public notify_promise_getDigitalAudioInputModes(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

  }
} 