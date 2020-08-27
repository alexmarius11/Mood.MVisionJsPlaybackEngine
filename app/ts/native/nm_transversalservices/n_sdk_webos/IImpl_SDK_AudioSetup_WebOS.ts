import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_AudioSetup");

import nmTransversalServices = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/N_SDK_WebOS");
import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralSoundProperties   = require("../../../../../app/ts/abstract/am_general/a_soundproperties/A_SoundProperties");

import "./cordova/cordova.webos";
import "./cordova/sound";

declare var Sound : any;

export module nm_transversalservices
{
  export class IImpl_SDK_AudioSetup_WebOS implements amGeneral.am_transversalservices.I_SDK_AudioSetup
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: nmTransversalServices.nm_transversalservices.N_SDK_WebOS;

    //----------- constructor 
    constructor(owner: nmTransversalServices.nm_transversalservices.N_SDK_WebOS)  
    {
      this._owner = owner;  
    }

    
    //-----------------------------
    //  set/get Volume Level
    //-----------------------------

    //----------------
    public setVolumeLevel(audioProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var options = 
      {
        level:15
      };
      options.level = 15;
    
      function successCb() {
        callback("setVolumeLevel success");
      }
  
      function failureCb(cbObject) {
          var errorCode = cbObject.errorCode;
          var errorText = cbObject.errorText;
          
          console.log ("Error Code [" + errorCode + "]: " + errorText);
          callback(cbObject);
      }
      var sound =  new Sound();
      sound.setVolumeLevel(successCb, failureCb, options);
    }

    //-----------------------------
    public promise_setVolumeLevel(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
    
    }

    //-----------------------------
    public getVolumeLevel(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      function successCb(cbObject) {
        callback("setVolumeLevel success");

        var level = cbObject.level;
      }
  
      function failureCb(cbObject) {
          var errorCode = cbObject.errorCode;
          var errorText = cbObject.errorText;
          
          console.log ("Error Code [" + errorCode + "]: " + errorText);
          callback(cbObject);
      }
      var sound =  new Sound();
      sound.getVolumeLevel(successCb, failureCb);
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
      var options = 
      {
        muted:true
      };
      options.muted = true;
    
      function successCb() {
        callback("setMuted success");
      }
  
      function failureCb(cbObject) {
          var errorCode = cbObject.errorCode;
          var errorText = cbObject.errorText;
          
          console.log ("Error Code [" + errorCode + "]: " + errorText);
          callback(cbObject);
      }
  
      new Sound().setMuted(successCb, failureCb, options);
    }

    //-----------------------------
    public promise_setMute(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    } 

    //-----------------------------
    public getMute(audioProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    
      function successCb(cbObject) {
        callback("setMuted success");
        var muted = cbObject.muted;
      }
  
      function failureCb(cbObject) {
          var errorCode = cbObject.errorCode;
          var errorText = cbObject.errorText;
          
          console.log ("Error Code [" + errorCode + "]: " + errorText);
          callback(cbObject);
      }
  
      new Sound().getMuted(successCb, failureCb);

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
      var options = {
        mode : Sound.SoundMode.Standard,
        balance : 20
      };
    
    
      function successCb() {
        callback("setSoundMode success");
      }
    
      function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
    
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
      }
    
      new Sound().setSoundMode(successCb, failureCb, options);
    }

    //--------------------------------
    public promise_setSoundMode(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }


    //--------------------------------
    public getSoundMode(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      function successCb(cbObject) {
        console.log("cbObject : " + JSON.stringify(cbObject));
        callback(cbObject);
      }
    
      function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
    
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
      }
    
      new Sound().getSoundMode(successCb, failureCb);
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

  } //--- end class

}
