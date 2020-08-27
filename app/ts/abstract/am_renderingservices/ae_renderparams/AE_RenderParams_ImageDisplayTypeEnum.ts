import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

//---------------
// json "STRETCH" = 1;
// json "FILL"    = 2;
// json "FIT"     = 3;
// json "CENTER"  = 4;
// json "NORMAL"  = 5; not in json
//---------------

export module am_renderingservices
{
  export enum AE_RenderParams_ImageDisplayTypeEnum 
  {
    ImageDisplayType_None    = 0,
    ImageDisplayType_Stretch = 1,
    ImageDisplayType_Fill    = 2,
    ImageDisplayType_Fit     = 3,
    ImageDisplayType_Center  = 4,    
    ImageDisplayType_Normal  = 5
  }

} 