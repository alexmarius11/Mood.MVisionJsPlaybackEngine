import amRenderingServices = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingservice/A_RenderingService");

import amRenderingServicesIFileSystemRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_sdkrenderer/I_SDKRenderer_FileSystem");

import amTransversalServicesSDKConsumer = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/A_SDK_Consumer");
import amGeneralService = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

export module am_renderingservices
{
  export interface A_SDKRenderer extends amRenderingServices.am_renderingservices.A_RenderingService
  {
    _iFileSystemRenderer : amRenderingServicesIFileSystemRenderer.am_renderingservices.I_SDKRenderer_FileSystem ;
    _aSDKConsumer : amTransversalServicesSDKConsumer.am_transversalservices.A_SDK_Consumer ;

   action_displayFile(storageName: string, folderName: string, fileName: string);
   setLogRenderer(aLogRenderer: amGeneralService.am_general.A_Service) : void;
  }
} 