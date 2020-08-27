import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amMediaTypeEnum = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_MediaTypeEnum");

export module am_renderingservices
{
  export interface AE_RenderParams_Identification extends amGeneral.am_general.A_Entity
  {
    reset() : void;
    copy(src : AE_RenderParams_Identification) : number;

    setId(id : number) : void;
    getId() : number;

    setName(name : string) : void;
    getName() : string;

    setMediaType(mediaType: amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum) : void;
    getMediaType() : amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum;

    setMediaTypeAsNumber(mediaTypeAsNumber: number) : number;
    getMediaTypeAsNumber() : number;

    setMediaTypeAsString(mediaTypeAsString: string) : number;
    getMediaTypeAsString() : string;
  }

} 

