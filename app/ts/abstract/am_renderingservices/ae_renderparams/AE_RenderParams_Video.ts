import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_renderingservices
{
  export interface AE_RenderParams_Video extends amGeneral.am_general.A_Entity
  {
    reset() : void;

    setIsCentered(isCentered : boolean) : void;
    getIsCentered() : boolean;

    setKeepAspectRatio(keepAspectRatio : boolean) : void;
    getKeepAspectRatio() : boolean;

    setSyncTimestampNanos(syncTimestampNanos : number) : void;
    getSyncTimestampNanos() : number;
        
    getVideoNaturalWidth() : number;
    setVideoNaturalWidth(videoNaturalWidth: number) : void;
    getVideoNaturalHeight() : number;
    setVideoNaturalHeight(videoNaturalHeight: number) : void;
    
    setVideoAudioVolume(videoAudioVolume: number) : void;
    getVideoAudioVolume() : number;
    setVideoMuteAudio(videoAudioVolume: boolean) : void;
    getVideoMuteAudio() : boolean;

    copy(src : AE_RenderParams_Video) : number;

  }

} 