import amGeneralEntity   = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralDateTime = require("../../../../../app/ts/abstract/am_general/a_datetime/A_DateTime");

export module am_general
{
  export interface A_FileInfo extends amGeneralEntity.am_general.A_Entity
  {
    reset() : void;
    copy(src : A_FileInfo) : number;

    setName(fileName: string) : void;
    getName() : string;

    setPath(filePath: string) : void;
    getPath() : string;

    setStorage(fileStorage: string) : void;
    getStorage() : string;

    setUrlName(urlFileName: string) : void;
    getUrlName() : string;

    setUrlPath(urlFilePath: string) : void;
    getUrlPath() : string;

    setUrlStorage(urlFileStorage: string) : void;
    getUrlStorage() : string;

    setType(fileType: string) : void;
    getType() : string;

    setSize(fileSize: number) : void;
    getSize() : number;

    setCreatedDate(fileCreationDate: amGeneralDateTime.am_general.A_DateTime);
    getCreatedDate(): amGeneralDateTime.am_general.A_DateTime;

    setLastModifiedDate(fileModifiedDate: amGeneralDateTime.am_general.A_DateTime);
    getLastModifiedDate(): amGeneralDateTime.am_general.A_DateTime;

    setLastAccessedDate(fileModifiedDate: amGeneralDateTime.am_general.A_DateTime);
    getLastAccessedDate(): amGeneralDateTime.am_general.A_DateTime;

    getFullName() : string;
    getFullPath() : string;

    getFullUrlName() : string;

 }

} 