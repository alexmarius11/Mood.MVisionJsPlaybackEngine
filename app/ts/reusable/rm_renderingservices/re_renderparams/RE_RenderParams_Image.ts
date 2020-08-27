import amRenderParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Image");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
import amImageDisplayTypeEnum = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_ImageDisplayTypeEnum");

export module rm_renderingservices
{
  export class RE_RenderParams_Image extends rmGeneralEntity.rm_general.R_Entity
                                     implements amRenderParameters.am_renderingservices.AE_RenderParams_Image
                                            
  {
    //-----------------
    _displayType : amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum ;


    _imageNaturalWidth  : number;
    _imageNaturalHeight : number;

    //---------------------------
    constructor()
    {
      super();
      
      this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Stretch;

      this._imageNaturalWidth  = 0;
      this._imageNaturalHeight = 0;  
    }
    
    //--------------------------
    public reset() : void
    {
      this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Stretch;
    }        


    //---------------
    public setDisplayType(displayType: amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum) : void
    {
      this._displayType = displayType;
    }

    //---------------
    public getDisplayType() : amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum
    {
      return this._displayType;
    }    

    //---------------
    // json "STRETCH" = 1;
    // json "FILL"    = 2;
    // json "FIT"     = 3;
    // json "CENTER"  = 4;
    // json "NORMAL"  = 5; not in json
    //---------------
    public setDisplayTypeAsNumber(displayTypeAsNumber: number) : number
    {
      if (displayTypeAsNumber == null)
      {
        this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Stretch ;// = 1,
        return 0;
      }
      if (isNaN(displayTypeAsNumber))
      {
        this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Stretch ;// = 1,
        return 0;
      }
      
      if (displayTypeAsNumber == 1)
      {
        this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Stretch ;// = 1,
        return 0;
      }

      if (displayTypeAsNumber == 2)
      {
        this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Fill ;// = 2,
        return 0;
      }
      
      if (displayTypeAsNumber == 3)
      {
        this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Fit ;// = 3,
        return 0;
      }
            
      if (displayTypeAsNumber == 4){
        this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Center ;// = 4,
        return 0;
      }

      if (displayTypeAsNumber == 5)
      {
        this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Normal  ;// = 5,
        return 0;
      }

      this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Stretch ;// = 1,
      return 1;
    }

    
    //---------------
    public getDisplayTypeAsNumber() : number
    {
      return this._displayType;
    }    
    

    //---------------
    public setDisplayTypeAsString(displayTypeAsString: string) : number
    {
      if ( (displayTypeAsString == "CENTER") || (displayTypeAsString == "Center") || (displayTypeAsString == "center") ){
        this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Center ;// = 1,
        return 0;
      }
      
      if ( (displayTypeAsString == "FILL") || (displayTypeAsString == "Fill") || (displayTypeAsString == "fill")){
        this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Fill ;// = 2,
        return 0;
      }
      
      if ( (displayTypeAsString == "FIT") || (displayTypeAsString == "Fit") || (displayTypeAsString == "fit")){
        this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Fit ;// = 3,
        return 0;
      }
      
      if ( (displayTypeAsString == "STRETCH") || (displayTypeAsString == "Stretch") || (displayTypeAsString == "stretch"))
      {
        this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Stretch ;// = 4,
        return 0;
      }
      
      if ( (displayTypeAsString == "NORMAL") || (displayTypeAsString == "Normal") || (displayTypeAsString == "normal"))
      {
        this._displayType = amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Normal  ;// = 5,          
        return 0;
      }

      return 1;
    }
    
    //---------------
    public getDisplayTypeAsString() : string
    {
      if (this._displayType == amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Center)
        return "CENTER";

      if (this._displayType == amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Fill)
        return "FILL";

      if (this._displayType == amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Fit)
      return "FIT";

      if (this._displayType == amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Stretch)
       return "STRETCH";

      if (this._displayType == amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum.ImageDisplayType_Normal)
        return "NORMAL";

      return "";
    }    


    //---------------
    public getImageNaturalWidth() : number
    {
      return this._imageNaturalWidth;
    }    

    //---------------
    public setImageNaturalWidth(imageNaturalWidth: number) : void
    {
      this._imageNaturalWidth = imageNaturalWidth;
    }


    //---------------
    public setImageNaturalHeight(imageNaturalHeight: number) : void
    {
      this._imageNaturalHeight = imageNaturalHeight;
    }

    //---------------
    public getImageNaturalHeight() : number
    {
      return this._imageNaturalHeight;
    }    


    //------------
    public copy(src : amRenderParameters.am_renderingservices.AE_RenderParams_Image) : number
    {
      if (src == null)
        return 1;
      this._displayType        = src.getDisplayType();
      this._imageNaturalWidth = src.getImageNaturalWidth();
      this._imageNaturalHeight = src.getImageNaturalHeight();
      return 0;
    }
  
    
  }
} 