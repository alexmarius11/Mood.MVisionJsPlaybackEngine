import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amImageDispalyTypeEnum = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_ImageDisplayTypeEnum");

export module am_renderingservices
{
  export interface AE_RenderParams_Image extends amGeneral.am_general.A_Entity
  {
    
    setDisplayType(displayType: amImageDispalyTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum) : void;
    getDisplayType() : amImageDispalyTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum;

    setDisplayTypeAsNumber(displayTypeAsNumber: number) : number;
    getDisplayTypeAsNumber() : number;

    setDisplayTypeAsString(displayTypeAsString: string) : number;
    getDisplayTypeAsString() : string;


    setImageNaturalWidth(imageNaturalWidth: number) : void;
    getImageNaturalWidth() : number;

    setImageNaturalHeight(imageNaturalHeight: number) : void;
    getImageNaturalHeight() : number;

    reset() : void;
    copy(src : AE_RenderParams_Image) : number;
  }

} 