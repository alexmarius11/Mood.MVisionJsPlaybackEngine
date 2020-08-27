import amGeneralScreenProperties     = require("../../../../../app/ts/abstract/am_general/a_screenproperties/A_ScreenProperties");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_ScreenProperties extends rmGeneralEntity.rm_general.R_Entity
                                  implements amGeneralScreenProperties.am_general.A_ScreenProperties
  {

    _backlight  : number ;
    _contrast   : number ;
    _brightness : number ;
    _color      : number ;
    _tint       : number ;

    _screenLeft   : number ;
    _screenTop    : number ;
    _screenRight  : number ;
    _screenBottom : number ;

    //----------- constructor 
    constructor()  
    {  
      super();

      this._backlight = 50;
      this._contrast = 50;
      this._brightness = 50;
      this._color = 50;
      this._tint = 50;

      this._screenLeft   = 0 ;
      this._screenTop    = 0 ;
      this._screenRight  = 1920;
      this._screenBottom = 1080;
  
    }
    
    //--------------------------
    public setBacklight(backlight: number) : void
    {
      this._backlight = backlight;
    }

    //-------------------------------
    public getBacklight() : number
    {
      return this._backlight;
    }


    //-------------------------------
    public setContrast(contrast: number) : void
    {
      this._contrast = contrast;
    }
    
    //-------------------------------
    public getContrast() : number
    {
      return this._contrast;
    }

    //-------------------------------
    public setBrightness(brightness: number) : void
    {
      this._brightness = brightness;
    }

    //------------------------------
    public getBrightness() : number
    {
      return this._brightness;
    }

    //---------------------------------
    public setColor(color: number) : void
    {
      this._color = color;
    }

    //------------------------------
    public getColor() : number
    {
      return this._color;
    }

    //---------------------------------
    public setTint(tint: number) : void
    {
      this._tint = tint;
    }

    //------------------------------------
    public getTint() : number
    {
      return this._tint;
    }


    //---------------------------------
    public setScreenLeft(screenLeft: number) : void
    {
      this._screenLeft = screenLeft;
    }
    //------------------------------------
    public getScreenLeft() : number
    {
      return this._screenLeft;
    }

    //---------------------------------
    public setScreenTop(screenTop: number) : void
    {
      this._screenTop = screenTop;
    }
    //------------------------------------
    public getScreenTop() : number
    {
      return this._screenTop;
    }

    //---------------------------------
    public setScreenRight(screenRight: number) : void
    {
      this._screenRight = screenRight;
    }
    //------------------------------------
    public getScreenRight() : number
    {
      return this._screenRight;
    }

    //---------------------------------
    public setScreenBottom(screenBottom: number) : void
    {
      this._screenBottom = screenBottom;
    }
    //------------------------------------
    public getScreenBottom() : number
    {
      return this._screenBottom;
    }
  }
} 