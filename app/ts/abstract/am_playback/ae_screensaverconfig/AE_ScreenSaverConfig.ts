import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amMediaTypeEnum        = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_MediaTypeEnum");
import amImageDisplayTypeEnum = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_ImageDisplayTypeEnum");


export module am_playback
{
  export interface AE_ScreenSaverConfig extends amGeneral.am_general.A_Entity
  {
    getFileFullName() : string;                  //from  <file>D:\moodmedia\project\screen_saver\PLAY_SCREENSAVER_TOTEM.swf</file>
    setFileFullName(fileFullName: string) : number; 

    getUrlFullName() : string;                  //from  <file>D:\moodmedia\project\screen_saver\PLAY_SCREENSAVER_TOTEM.swf</file>
    setUrlFullName(urlFullName: string) : number; 

    getLastMediaInZone() : boolean;              //from <last_media_in_zone>False</last_media_in_zone> 
    setLastMediaInZone(lastMediaInZone: boolean) : number;
    setLastMediaInZoneFromString(strLastMediaInZone: string) : number;

    getMediaType() : amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum;  //<type>form_flashplayer</type>                    
    setMediaType(mediaType: amMediaTypeEnum.am_renderingservices.AE_RenderParams_MediaTypeEnum) : number;   
    setMediaTypeFromConfigString(strMediaTypeFromConfigString: string) : number;   
    
    getDuration() : number;                      //<duration>10000</duration>
    setDuration(duration: number) : number;
    setDurationFromString(strDuration: string) : number;

    getImageDisplayType() : amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum;                   //<position>Stretch</position>
    setImageDisplayType(imageDisplayTypeFromConfigString: amImageDisplayTypeEnum.am_renderingservices.AE_RenderParams_ImageDisplayTypeEnum) : number;
    setImageDisplayTypeFromConfigString(strImageDisplayTypeFromConfigString: string) : number;   

  }

} 