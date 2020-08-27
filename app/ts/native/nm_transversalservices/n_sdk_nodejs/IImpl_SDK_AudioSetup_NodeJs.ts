import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_AudioSetup");

import nmTransversalServices = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/N_SDK_NodeJs");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralSoundProperties   = require("../../../../../app/ts/abstract/am_general/a_soundproperties/A_SoundProperties");

export module nm_transversalservices
{
  export class IImpl_SDK_AudioSetup_NodeJs implements amGeneral.am_transversalservices.I_SDK_AudioSetup
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: nmTransversalServices.nm_transversalservices.N_SDK_NodeJs;

    //----------- constructor 
    constructor(owner: nmTransversalServices.nm_transversalservices.N_SDK_NodeJs)  
    {
      this._owner = owner;  
    }
    

    //-----------------------------
    //  set/get Volume Level
    //-----------------------------

    //----------------
    public setVolumeLevel(audioProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      const loudness = require('loudness')
      var volumeLevel = audioProperties.getVolumeLevel();
      loudness.setVolume(volumeLevel, (err) => {
        if (err) {
          console.log( 'Error setting audio volume level to: ' + volumeLevel + ' :' + JSON.stringify(err)); 
          context.setError(error);
          if (context.getError() != null)
            context.getError().setError(9010, 'Error setting audio volume level to: ' + volumeLevel + ' :' + JSON.stringify(err));
          if (callback != null)
            callback(context);  
          return;  
        }
        // Done
        console.log('sdk:set-volume-level ok. Volume level set to: ' + volumeLevel);
        context.setResult('sdk:set-volume-level ok. Volume level set to: ' + volumeLevel);
        context.setBoolResult(true);
        context.setError(error);
        if (callback != null)
          callback(context);      
      });
       
    }

    //-----------------------------
    public promise_setVolumeLevel(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    public getVolumeLevel(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      const loudness = require('loudness')
       
      loudness.getVolume((err, vol) => {
        if (err) {
          console.log("sdk:get-volume-level error. Error setting audio volume level to: " + vol + ' :' + JSON.stringify(err)); 
          context.setError(error);
          if (context.getError() != null)
            context.getError().setError(9011, "sdk:get-volume-level error. Error setting audio volume level to: " + vol + ' :' + JSON.stringify(err));
          if (callback != null)
            callback(context);  
          return;  
        }
        // Done
        var audioProperties;
        audioProperties.setVolumeLevel(vol);
        console.log('sdk:get-volume-level ok. Current Volume level is: ' + vol);
        context.setResult('sdk:get-volume-level ok. Current Volume level is: ' + vol);
        context.setBoolResult(true);
        context.setError(error);
        if (callback != null)
          callback(context);      
      });
    }

    //-----------------------------
    public promise_getVolumeLevel(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    //  set/get Mute
    //-----------------------------

    //-----------------------------
    public setMute(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      const loudness = require('loudness')
      var mute = soundProperties.isMute();
      loudness.setMuted(mute, (err) => {        
        if (err) {
          console.log( 'Error setting audio to mute: ' + mute + ' :' + JSON.stringify(err)); 
          context.setError(error);
          if (context.getError() != null)
            context.getError().setError(9010,  'Error setting audio to mute: ' + mute + ' :' + JSON.stringify(err));
          if (callback != null)
            callback(context);  
          return;  
        }
        // Done
        console.log('sdk:set-mute ok. Audio set to mute: ' + mute);
        context.setResult('sdk:set-mute ok. Audio set to mute: ' + mute);
        context.setBoolResult(true);
        context.setError(error);
        if (callback != null)
          callback(context);      
      });
      
    }

    //-----------------------------
    public promise_setMute(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    } 

    //-----------------------------
    public getMute(audioProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      const loudness = require('loudness')
      var owner = this._owner;
               
      loudness.getMuted((err, mute) => {
        if (err) {
          console.log("sdk:get-volume-level error. Error setting audio volume level to: " + mute + ' :' + JSON.stringify(err)); 
          context.setError(error);
          if (context.getError() != null)
            context.getError().setError(9011, "sdk:get-volume-level error. Error setting audio volume level to: " + mute + ' :' + JSON.stringify(err));
          if (callback != null)
            callback(context);  
          return;  
        }
        // Done
        var audioProperties = owner._aServiceLocator._iEntityCreation.createDefaultSoundProperties(error);
        audioProperties.setVolumeLevel(mute);
        console.log('sdk:get-mute ok. Current mute value is: ' + mute);
        context.setResult('sdk:get-mute ok. Current mutelevel is: ' + mute);
        context.setObjectResult(audioProperties);
        context.setBoolResult(true);
        context.setError(error);
        if (callback != null)
          callback(context);      
      });

    }

    //--------------------------------
    public promise_getMute(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    //  set/get Sound Mode
    //-----------------------------

    //--------------------------------
    public setSoundMode(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //--------------------------------
    public promise_setSoundMode(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }


    //--------------------------------
    public getSoundMode(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //--------------------------------
    public promise_getSoundMode(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    //  set/get Output Speaker 
    //-----------------------------

    //--------------------------------
    public setSoundSpeaker(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //---------------------------------
    public promise_setSoundSpeaker(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //--------------------------------
    public getSoundSpeaker(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //--------------------------------
    public promise_getSoundSpeaker(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    //  get/set Digital Audio Input Mode
    //-----------------------------

    //-------------------------------
    public setDigitalAudioInputMode(inputSourceList: Array<string>, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //---------------------------------
    public promise_setDigitalAudioInputModes(inputSourceList: Array<string>, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-------------------------------
    public getDigitalAudioInputMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //---------------------------------
    public promise_getDigitalAudioInputModes(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

  }
} 