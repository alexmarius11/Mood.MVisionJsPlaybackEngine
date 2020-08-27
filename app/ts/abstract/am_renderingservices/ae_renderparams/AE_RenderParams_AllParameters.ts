import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amRenderParametersAllParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_AllParameters");
import amRenderParametersIdentification = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Identification");
import amRenderParametersItemPosAndSize = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_ItemPosAndSize");
import amRenderParametersContainerPosAndSize = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_ContainerPosAndSize");
import amRenderParametersDuration = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Duration");
import amRenderParametersBackground = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Background");
import amRenderParametersImage = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Image");
import amRenderParametersWebImage = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_WebImage");
import amRenderParametersVideo    = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Video");
import amRenderParametersVideoStream = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_VideoStream");
import amRenderParametersAudio    = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Audio");
import amRenderParametersWebPage  = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_WebPage");
import amRenderParametersHtmlTemplate = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_HtmlTemplate");
import amRenderParametersFillRect = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_FillRect");

import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

export module am_renderingservices
{
  export interface AE_RenderParams_AllParameters extends amGeneral.am_general.A_Entity
  {
    reset() : void;
    copy(src : AE_RenderParams_AllParameters) : number ;
	
	getParamFileInfo() : amGeneralFileInfo.am_general.A_FileInfo;
	getParamAudio() : amRenderParametersAudio.am_renderingservices.AE_RenderParams_Audio;
	getParamBackground() : amRenderParametersBackground.am_renderingservices.AE_RenderParams_Background;
	getParamContainerPosSize() : amRenderParametersContainerPosAndSize.am_renderingservices.AE_RenderParams_ContainerPosAndSize;
	getParamContainerAdjustedPosSize() : amRenderParametersContainerPosAndSize.am_renderingservices.AE_RenderParams_ContainerPosAndSize;
	getParamDuration() : amRenderParametersDuration.am_renderingservices.AE_RenderParams_Duration;
	getParamHtmlTemplate() : amRenderParametersHtmlTemplate.am_renderingservices.AE_RenderParams_HtmlTemplate;
	getParamIdentification() : amRenderParametersIdentification.am_renderingservices.AE_RenderParams_Identification;
	getParamImage() : amRenderParametersImage.am_renderingservices.AE_RenderParams_Image;
	getParamItemPosAndSize() : amRenderParametersItemPosAndSize.am_renderingservices.AE_RenderParams_ItemPosAndSize;
    getParamVideo() : amRenderParametersVideo.am_renderingservices.AE_RenderParams_Video;
    getParamVideoStream() : amRenderParametersVideoStream.am_renderingservices.AE_RenderParams_VideoStream;
	getParamWebImage() : amRenderParametersWebImage.am_renderingservices.AE_RenderParams_WebImage;
	getParamWebPage() : amRenderParametersWebPage.am_renderingservices.AE_RenderParams_WebPage ;
	getParamFillRect() : amRenderParametersFillRect.am_renderingservices.AE_RenderParams_FillRect ;
    
    isFree() : boolean ;
    setIsFree(isFree: boolean)  : boolean;
    
    isVisible() : boolean;
    setIsVisible(isVisible: boolean)  : void;

  }

} 