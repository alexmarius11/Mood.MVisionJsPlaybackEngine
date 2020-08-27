import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amScreenSaverConfig = require("../../../../../app/ts/abstract/am_playback/ae_screensaverconfig/AE_ScreenSaverConfig");
import amGeneralError      = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");


import amMediaTypeEnum        = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_MediaTypeEnum");
import amImageDisplayTypeEnum = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_ImageDisplayTypeEnum");


import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");


export module rm_playback
{
  export class RE_ScreenSaverConfig    extends rmGeneralEntity.rm_general.R_Entity
                                       implements amScreenSaverConfig.am_playback.AE_ScreenSaverConfig
  {

    //------------------
    //--- properties
    _fileFullName:     string;
    _urlFullName:      string;
    _lastMediaInZone:  boolean;
    _duration:         number;
    _mediaType:        amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum;   
    _imageDisplayType: amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum;   
  
    
    //----------- constructor 
    constructor()  
    {  
      super();
      this._fileFullName     = "";
      this._urlFullName      = "";
      this._lastMediaInZone  = true;
      this._duration         = 0;
      this._mediaType        = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_None;   
      this._imageDisplayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_None;     
    }



    //-----------------
    // get set methods
    //-----------------

    //--------------------------------
    public getFileFullName() : string                  //from  <file>D:\moodmedia\project\screen_saver\PLAY_SCREENSAVER_TOTEM.swf</file>
    {
      return this._fileFullName;
    }
    //------------------------------------
    public setFileFullName(fileFullName: string) : number 
    {
      this._fileFullName = fileFullName;
      return 0;
    }


  

    //------------------------------------
    public getUrlFullName() : string                  //from  <file>D:\moodmedia\project\screen_saver\PLAY_SCREENSAVER_TOTEM.swf</file>
    {
      return this._urlFullName;
    }
    //------------------------------------
    public setUrlFullName(urlFullName: string) : number        //from  <file>D:\moodmedia\project\screen_saver\PLAY_SCREENSAVER_TOTEM.swf</file>
    {
      this._urlFullName = urlFullName;
      return 0;
    }



    //---------------------------
    public getLastMediaInZone() : boolean             //from <last_media_in_zone>False</last_media_in_zone> 
    {
      return this._lastMediaInZone;
    }
    //---------------------------
    public setLastMediaInZone(lastMediaInZone: boolean) : number
    {
      this._lastMediaInZone = lastMediaInZone;
      return 0;
    }
    //---------------------------
    public setLastMediaInZoneFromString(strLastMediaInZone: string) : number
    {
      if ( (strLastMediaInZone == null) || (strLastMediaInZone == ""))
      {
        this._lastMediaInZone = false;
        return 1;
      }   

      if ( (strLastMediaInZone == "false") || (strLastMediaInZone == "False") || (strLastMediaInZone == "FALSE"))
      {
        this._lastMediaInZone = false;
        return 0;
      }

      if ( (strLastMediaInZone == "true") || (strLastMediaInZone == "True") || (strLastMediaInZone == "TRUE"))
      {
        this._lastMediaInZone = true;
        return 0;
      }

      this._lastMediaInZone = false;
      return 1;
    }


    //----------------------------
    public getMediaType() : amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum  //<type>form_flashplayer</type>                    
    {
      return this._mediaType;
    }
    //----------------------------
    public setMediaType(mediaType: amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum) : number
    {
      this._mediaType = mediaType;
      return 0;
    }
    //-----------------------------
    public setMediaTypeFromConfigString(strMediaTypeFromConfigString: string) : number // form_flashplayer
    {
      if ( (strMediaTypeFromConfigString == null) || (strMediaTypeFromConfigString == ""))
      {
        this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_None;
        return 1;
      }   

      if ( (strMediaTypeFromConfigString == "form_flashplayer") || (strMediaTypeFromConfigString == "Form_FlashPlayer") || (strMediaTypeFromConfigString == "FORM_FLASHPLAYER"))
      {
        this._mediaType = this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Flash;
        return 0;
      }

      if ( (strMediaTypeFromConfigString == "form_imageplayer") || (strMediaTypeFromConfigString == "Form_ImagePlayer") || (strMediaTypeFromConfigString == "FORM_IMAGEPLAYER"))
      {
        this._mediaType = this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image;
        return 0;
      }

      if ( (strMediaTypeFromConfigString == "form_videoplayer") || (strMediaTypeFromConfigString == "Form_VideoPlayer") || (strMediaTypeFromConfigString == "FORM_VIDEOPLAYER"))
      {
        this._mediaType = this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video;
        return 0;
      }

      this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_None;
      return 1;
    }


    
    //-------------------------
    public getDuration() : number                      //<duration>10000</duration>
    {
      return this._duration;
    }
    //-------------------------
    public setDuration(duration: number) : number
    {
      this._duration = duration;
      return 0;
    }
    //---------------------------
    public setDurationFromString(strDuration: string) : number
    {
      try {
        this._duration = parseInt(strDuration);
      }catch(e){
        this._duration = 0;
        return 1;
      }
      return 0;
    }


    //----------------------------
    public getImageDisplayType() : amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum   //<position>Stretch</position>
    {
      return this._imageDisplayType;
    }
    //-----------------------------
    public setImageDisplayType(imageDisplayType: amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum) : number
    {
      this._imageDisplayType = imageDisplayType;
      return 0;
    }
    //-----------------------------
    public setImageDisplayTypeFromConfigString(strImageDisplayTypeFromConfigString: string) : number
    {

      if ( (strImageDisplayTypeFromConfigString == null) || (strImageDisplayTypeFromConfigString == ""))
      {
        this._imageDisplayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_None;
        return 1;
      }   

      if ( (strImageDisplayTypeFromConfigString == "center") || (strImageDisplayTypeFromConfigString == "Center") || (strImageDisplayTypeFromConfigString == "CENTER"))
      {
        this._imageDisplayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Center;
        return 0;
      }

      if ( (strImageDisplayTypeFromConfigString == "stretch") || (strImageDisplayTypeFromConfigString == "Stretch") || (strImageDisplayTypeFromConfigString == "STRETCH"))
      {
        this._imageDisplayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Stretch;
        return 0;
      }

      if ( (strImageDisplayTypeFromConfigString == "fill") || (strImageDisplayTypeFromConfigString == "Fill") || (strImageDisplayTypeFromConfigString == "FILL"))
      {
        this._imageDisplayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Fill;
        return 0;
      }

      if ( (strImageDisplayTypeFromConfigString == "fit") || (strImageDisplayTypeFromConfigString == "Fit") || (strImageDisplayTypeFromConfigString == "FIT"))
      {
        this._imageDisplayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Fit;
        return 0;
      }

      if ( (strImageDisplayTypeFromConfigString == "normal") || (strImageDisplayTypeFromConfigString == "Normal") || (strImageDisplayTypeFromConfigString == "NORMAL"))
      {
        this._imageDisplayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Normal;
        return 0;
      }

      this._imageDisplayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_None;
      return 1;
    }

    
  }
} 

