import amRenderParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Video");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_RenderParams_Video extends rmGeneralEntity.rm_general.R_Entity
                                     implements amRenderParameters.am_renderingservices.AE_RenderParams_Video
                                            
  {
    //-----------------
		_isCentered : boolean;
    _keepAspectRatio : boolean;
    
    _syncTimestampNanos : number;

    _videoAudioVolume   : number;
    _videoMuteAudio     : boolean;

    _videoNaturalWidth  : number;
    _videoNaturalHeight : number;
  
    //---------------------------
    constructor()
    {
      super();
      
      this._isCentered         = true;
      this._keepAspectRatio    = true;
      this._syncTimestampNanos = 0;  
      this._videoAudioVolume   = 0;
      this._videoMuteAudio     = false;
      this._videoNaturalWidth  = 0;
      this._videoNaturalHeight = 0;  
    }
    
    //--------------------------
    public reset() : void
    {
      this._isCentered         = true;
      this._keepAspectRatio    = true;
      this._syncTimestampNanos = 0;  
      this._videoAudioVolume   = 0;
      this._videoMuteAudio     = false;
      this._videoNaturalWidth  = 0;
      this._videoNaturalHeight = 0;  
    }    

    //---------------
    public setIsCentered(isCentered : boolean) : void
    {
      this._isCentered = isCentered;
    }
  
    //---------------
    public getIsCentered() : boolean
    {
      return this._isCentered;
    }    

    //---------------
    public setKeepAspectRatio(keepAspectRatio : boolean) : void
    {
      this._keepAspectRatio = keepAspectRatio;
    }
  
    //---------------
    public getKeepAspectRatio() : boolean
    {
      return this._keepAspectRatio;
    }    

    //---------------
    public setSyncTimestampNanos(syncTimestampNanos : number) : void
    {
      this._syncTimestampNanos = syncTimestampNanos;
    }
  
    //---------------
    public getSyncTimestampNanos() : number
    {
      return this._syncTimestampNanos;  
    }    

        
    //---------------
    public getVideoNaturalWidth() : number
    {
      return this._videoNaturalWidth;
    }    

    //---------------
    public setVideoNaturalWidth(videoNaturalWidth: number) : void
    {
      this._videoNaturalWidth = videoNaturalWidth;
    }


    //---------------
    public setVideoNaturalHeight(videoNaturalHeight: number) : void
    {
      this._videoNaturalHeight = videoNaturalHeight;
    }

    //---------------
    public getVideoNaturalHeight() : number
    {
      return this._videoNaturalHeight;
    }    

    //---------------
    public setVideoAudioVolume(videoAudioVolume: number) : void
    {
      if (videoAudioVolume == null)
      {
        this._videoAudioVolume = 0;
        this._videoMuteAudio = true; 
        return ;
      }
      if (isNaN(videoAudioVolume))
      {
        this._videoAudioVolume = 0;
        this._videoMuteAudio = true; 
        return;
      }
      if (videoAudioVolume < 0)
      {
        this._videoAudioVolume = 0;
        this._videoMuteAudio = true; 
        return;
      }
      this._videoAudioVolume = videoAudioVolume;
      if (this._videoAudioVolume == 0)
        this._videoMuteAudio = true; 
      else
        this._videoMuteAudio = false; 
    }
    
    //---------------
    public getVideoAudioVolume() : number
    {
      return this._videoAudioVolume;
    }    

    //---------------
    public setVideoMuteAudio(videoMuteAudio: boolean) : void
    {
      this._videoMuteAudio = videoMuteAudio;
    }
    //---------------
    public getVideoMuteAudio() : boolean
    {
      return this._videoMuteAudio;
    }    

    //------------
    public copy(src : amRenderParameters.am_renderingservices.AE_RenderParams_Video) : number
    {
      if (src == null)
        return 1;
      this._isCentered         = this.getIsCentered();
      this._keepAspectRatio    = this.getKeepAspectRatio();
      this._syncTimestampNanos = this.getSyncTimestampNanos();  
      this._videoAudioVolume   = this.getVideoAudioVolume();
      this._videoMuteAudio     = this.getVideoMuteAudio();
      this._videoNaturalWidth  = this.getVideoNaturalWidth();
      this._videoNaturalHeight = this.getVideoNaturalHeight();0;  

      return 0;
    }

  }
} 