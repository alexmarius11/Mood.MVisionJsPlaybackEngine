import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_coreservices
{

    export enum AE_JsonMediaTypeId 
    {
        FOLDER_RESOURCES = 36,
        HTML_EDITABLE_EXTENDED = 34,
        EVENT_PLAYLIST = 32,
        CHANNEL_EXTENDED = 14,
        PLAYLIST_EXTENDED = 19,
        EDITABLE_FLASH = 20,
        AUDIO_FILES = 10,
        //JsonMediaTypeId_EDITABLE_FLASH = 920,
        TV_TUNER = 4,
        PLAYLIST = 13,
        WEBPAGE = 6,
        MEDIA_STATIC = 5,
        TAG_EXTENDED = 16,
        PLAYLIST_EXT = 13,
        MEDIA_STATIC_MOVIE = 1,
        SEQUENCE_EXTENDED = 17,
        FLASH_OBJECT = 2,
        TV_PASS_THROUGH = 31,
        VIDEO_OR_AUDIO_STREAM = 47
        
    }

    /*
    export enum jsonStringMediaObjectsTypes {
        SEQUENCE = <any>"SEQUENCE_EXT:#TeamCoV5.Models",
        STATIC = <any>"MEDIA_STATIC_SVC:#TeamCoV5.Models",
        PLAYLIST = <any>"PLAYLIST_EXT:#TeamCoV5.Models",
    }
    export enum ImageFitValues {
        STRETCH = 1,
        FIT = 3,
        FILL = 2,
        CENTER = 4
    }
    export enum MediaType {
        Video = 1,
        Image = 0,
        Sequence = 3,
    };*/

} 