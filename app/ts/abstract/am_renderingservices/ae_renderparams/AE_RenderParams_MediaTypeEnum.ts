import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_renderingservices
{
  export enum AE_RenderParams_MediaTypeEnum 
  {
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
  }

} 