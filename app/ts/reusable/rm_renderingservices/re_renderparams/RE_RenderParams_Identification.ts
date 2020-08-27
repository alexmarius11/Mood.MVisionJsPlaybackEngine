import amRenderParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Identification");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

import amMediaTypeEnum = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_MediaTypeEnum");

export module rm_renderingservices
{
  export class RE_RenderParams_Identification extends rmGeneralEntity.rm_general.R_Entity
                                              implements amRenderParameters.am_renderingservices.AE_RenderParams_Identification
                                            
  {
    //---- properties
    _id : number;
    _name : string;
    _mediaType : amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum;

    //--------------------------
    constructor()
    {
      super();

      this._id = 0;
      this._name = "";
      this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_None;
    }

    //--------------------------
    public reset() : void
    {
      this._id = 0;
      this._name = "";
      this._mediaType = 0;
    }

    //--------- 
    
    //---------------
    public setId(id : number) : void
    {
      this._id = id;
    }

    //---------------
    public getId() : number
    {
      return this._id;
    }

    //---------------
    public setName(name : string) : void
    {
      this._name = name;
    }

    //---------------
    public getName() : string
    {
      return this._name;
    }


    //------------
    public copy(src : amRenderParameters.am_renderingservices.AE_RenderParams_Identification) : number
    {
      if (src == null)
        return 1;
      this._id   = src.getId();
      this._name = src.getName();
      this._mediaType = src.getMediaType();
      return 0;
    }


    //---------------
    public setMediaType(mediaType: amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum) : void
    {
      this._mediaType = mediaType;
    }

    //---------------
    public getMediaType() : amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum
    {
      return this._mediaType;
    }    


    //---------------
    /*
      MediaType_None         = 0,
      MediaType_Image        = 1,
      MediaType_Video        = 2,
      MediaType_VideoStream  = 3,
      MediaType_Html         = 4,
      MediaType_HtmlTemplate = 5,
      MediaType_Rect         = 6,
      MediaType_ScreenSaver  = 7,
      MediaType_TvHdmiPassThrough = 8,
      MediaType_Background   = 9,
      MediaType_Flash        = 10
    */
    public setMediaTypeAsNumber(mediaTypeAsNumber: number) : number
    {
      if (mediaTypeAsNumber == 1)
      {
        this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image ;
        return 0;
      }
      
      if (mediaTypeAsNumber == 2)
      {
        this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video ;
        return 0;
      }

      if (mediaTypeAsNumber == 3)
      {
        this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_VideoStream ;
        return 0;
      }

      if (mediaTypeAsNumber == 4)
      {
        this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Html ;
        return 0;
      }

      if (mediaTypeAsNumber == 5)
      {
        this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_HtmlTemplate ;
        return 0;
      }

      if (mediaTypeAsNumber == 6)
      {
        this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Rect ;
        return 0;
      }

      if (mediaTypeAsNumber == 7)
      {
        this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_ScreenSaver ;
        return 0;
      }

      if (mediaTypeAsNumber == 8)
      {
        this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_TvHdmiPassThrough;
        return 0;
      }

      if (mediaTypeAsNumber == 9)
      {
        this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Background;
        return 0;
      }

      if (mediaTypeAsNumber == 10)
      {
        this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Flash;
        return 0;
      }

      //this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_None;
      return 1;
    }
    
    //---------------
    public getMediaTypeAsNumber() : number
    {
      return this._mediaType;
    }    
    

    //---------------
    public setMediaTypeAsString(mediaTypeAsString: string) : number
    {
      if ( (mediaTypeAsString == "IMAGE") || (mediaTypeAsString == "Image") || (mediaTypeAsString == "image") )
      {
        this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image ;
        return 0;
      }
      
      if ( (mediaTypeAsString == "VIDEO") || (mediaTypeAsString == "Video") || (mediaTypeAsString == "video") )
      {
        this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video ;
        return 0;
      }

      if ( (mediaTypeAsString == "VIDEOSTREAM") || (mediaTypeAsString == "VideoStream") || (mediaTypeAsString == "videostream") )
      {
        this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_VideoStream ;
        return 0;
      }

      if ( (mediaTypeAsString == "HTML") || (mediaTypeAsString == "Html") || (mediaTypeAsString == "html") )
      {
        this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Html ;
        return 0;
      }

      if ( (mediaTypeAsString == "HTMLTEMPLATE") || (mediaTypeAsString == "HtmlTemplate") || (mediaTypeAsString == "htmltemplate") )
      {
        this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_HtmlTemplate ;
        return 0;
      }

      if ( (mediaTypeAsString == "RECT") || (mediaTypeAsString == "Rect") || (mediaTypeAsString == "rect") )
      {
        this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Rect ;
        return 0;
      }

      if ( (mediaTypeAsString == "SCREENSAVER") || (mediaTypeAsString == "ScreenSaver") || (mediaTypeAsString == "screensaver") )
      {
        this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_ScreenSaver ;
        return 0;
      }

      if ( (mediaTypeAsString == "BACKGROUND") || (mediaTypeAsString == "Background") || (mediaTypeAsString == "background") )
      {
        this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Background ;
        return 0;
      }

      if ( (mediaTypeAsString == "TVHDMIPASSTHROUGH") || (mediaTypeAsString == "TvHdmiPassThrough") || (mediaTypeAsString == "tvhdmipassthrough") )
      {
        this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_TvHdmiPassThrough ;
        return 0;
      }

      if ( (mediaTypeAsString == "FLASH") || (mediaTypeAsString == "Flash") || (mediaTypeAsString == "flash") )
      {
        this._mediaType = amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Flash ;
        return 0;
      }

      return 1;
    }
    
    //---------------
    public getMediaTypeAsString() : string
    {
      if (this._mediaType == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Image)
        return "IMAGE";

      if (this._mediaType == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Video)
        return "VIDEO";

      if (this._mediaType == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_VideoStream)
        return "VIDEOSTREAM";

      if (this._mediaType == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Html)
        return "HTML";

      if (this._mediaType == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_HtmlTemplate)
        return "HTMLTEMPLATE";

      if (this._mediaType == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Rect)
        return "RECT";

      if (this._mediaType == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_ScreenSaver)
        return "SCREENSAVER";

      if (this._mediaType == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Background)
        return "BACKGROUND";

      if (this._mediaType == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_TvHdmiPassThrough)
        return "TVHDMIPASSTHROUGH";

      if (this._mediaType == amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum.MediaType_Flash)
        return "FLASH";

      return "";
    }    
    
  
  }
} 